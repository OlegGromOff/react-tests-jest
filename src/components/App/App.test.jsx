import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // отслеживает действия пользователя

import App from './App';

// test('renders learn react link', () => {
//   render(<App />); // проверяю компонент App
//   const linkElement = screen.getByText(/learn react/i); // обращаемся к элементу на странице
//   expect(linkElement).toBeInTheDocument(); // ожидаем что этот элемент ЕСТЬ на странице
// });

// screen - поиск по экрану
// ищем текст learn react в любом индексе (большими или маленькими)
// запустить тест - npm test (ищет все файлы с .test)

describe('App component', ()=> {
  it('App renders', () => {
    render(<App />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText('Find course:')).toBeInTheDocument();
  });

  it('typing in Searchbox works', ()=>{
    render(<App />);

    expect(screen.queryByDisplayValue(/React/)).toBeNull(); // ожидаю что на экране нет текста React
    
    userEvent.type(screen.getAllByRole('textbox'), 'React'); // юзер печатает в поле ввода слово React
  
    expect(screen.queryByDisplayValue(/React/)).toBeInTheDocument(); // ожидаю что в документе появился текст React
  });

  it('search filter is working', ()=> {
  render(<App />);

    expect(screen.getByText(/Vue/)).toBeInTheDocument();
    expect(screen.getByText(/Javascript/)).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), 'script');

    expect(screen.queryByText(/Vue/)).toBeNull();
    expect(screen.queryByText(/Javascript/)).toBeInTheDocument();
  })

})