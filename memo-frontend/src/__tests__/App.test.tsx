import { render, screen } from '@testing-library/react';
import App from '../App';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "../app/store";


test('renders learn react link', () => {
  render(<div className={'font-sans'}>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <App  />
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </div>);
  const linkElement = screen.getByText(/Memorize/i);
  expect(linkElement).toBeInTheDocument();
});



