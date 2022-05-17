import { render, screen } from '@testing-library/react';
import List from './List';

const data = ['html', 'css', 'js'];

// describe группирует тесты
// List component название группы тестов и в одной группе может быть несколько тестов 
// Вместо test можно писать it
describe('List component', ()=> {
    it('List renders', ()=> { // List render - название теста
        render(<List items={data} />); // проверяю компонент List
        
        // .toBeInTheDocument() метод из testing library проверяет есть ли элемент в теле документа
        // если напишем /htm/ а не 'html' то тест отработает все равно потому что регулярка / / находит совпадения
        expect(screen.getByRole('list')).toBeInTheDocument(); // проверяю есть ли у меня на странице список
        expect(screen.getByText('html')).toBeInTheDocument(); // ожидаем что на странице есть текст html и он есть в теле документа
    });

    it('List renders without data', ()=> {
        render(<List />)

        expect(screen.queryByRole('list')).toBeNull(); // проверяю чтобы у меня на странице НЕ БЫЛО списка
    });

    it('List snapshot', ()=>{
        const view = render (<List items={data} />);

        expect(view).toMatchSnapshot(); // проверяю соответствует ли список снепшоту (после этого папка со снепшотами создасться сама)
    });

    it('List empty snapshot', ()=>{
        const view = render (<List />);

        expect(view).toMatchSnapshot(); // проверяю соответствует ли список снепшоту (после этого папка со снепшотами создасться сама)
    });
});


