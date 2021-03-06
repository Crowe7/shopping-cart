import React from 'react';
import ReactDOM from 'react-dom';
import {Routes, Route, HashRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { NotificationsProvider } from '@mantine/notifications';
ReactDOM.render(
  
    <React.StrictMode>
      <HashRouter>
        <Routes>
            <Route path='*' element={<NotificationsProvider limit={3} autoClose={1500}> <App /> </NotificationsProvider>}></Route>
        </Routes>
      </HashRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
