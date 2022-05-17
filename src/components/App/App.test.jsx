import { render, screen } from '@testing-library/react';
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
  });
})