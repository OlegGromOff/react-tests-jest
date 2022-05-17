import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // отслеживает действия пользователя

import Search from './Search';

const onChange = jest.fn(); // фейковая функция

describe('Search component', ()=> {
    it('renders Search component', ()=> {
        render(
            <Search value="" onChange={onChange}>
                Find:
            </Search>
        );
            //   /find/i - совпадение без учета регистра
        expect(screen.getByText(/find/i)).toBeInTheDocument(); // есть ли в документе текст find
    });

    it('renders without children', ()=> {
        render(
            <Search value="" onChange={onChange} />
            
        );
            
        expect(screen.getByText(/search/i)).toBeInTheDocument(); 
    });

    it('renders without placeholder', ()=> {
        render(
            <Search value="" onChange={onChange} />
            
        );
            
        expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument();
    });

    it('custom placeholder works correctly', ()=> {
        render(
            <Search value="" onChange={onChange} placeholder='find post' />
            
        );
            
        expect(screen.getByPlaceholderText(/find post/i)).toBeInTheDocument(); // проверяем что наш плейсхолдер соответствует тексту find post
    });

    it('onChange works', ()=> {
        render(
            <Search value="" onChange={onChange}>
                Find:
            </Search>
        );
        // .type()  - пользователь печатает
        // getByRole('textbox') - в поле ввода
        // 'React' - печатает слово 'React'
        userEvent.type(screen.getByRole('textbox'), 'React');

        expect(onChange).toHaveBeenCalledTimes(5); // функция onChange была вызвана 5 раз
    });

    it('dynamic styles works', ()=> {
        render(<Search value='abc' onChange={onChange}/>);
        expect(screen.getByRole('textbox')).toHaveClass('input'); // ожидаю что поле ввода будет иметь класс input
        expect(screen.getByRole('textbox')).toHaveClass('filled');
        expect(screen.getByText('Search')).toHaveClass('label');
    });

    it('Search snapshot', ()=> {
        const search = render(
            <Search value="" onChange={onChange}>
                Find:
            </Search>
        );
           
        expect(search).toMatchSnapshot(); // ожидаю что переменная совпадает со снепшотом
    });
});