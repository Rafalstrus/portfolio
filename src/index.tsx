import React from 'react';
import './css/index.css';
import { CookiesProvider } from "react-cookie";
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18next from './translations/i18n';
import { I18nextProvider } from 'react-i18next';
import store from './store/store';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

const ROOT_CONTAINER: any = document.getElementById('root');
const ROOT: any = createRoot(ROOT_CONTAINER);

ROOT.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </CookiesProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
