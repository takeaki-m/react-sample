import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Message from './components/Message'
import Hello from './components/Hello';
import ContainerSample from './components/ContainerSample';
import ContextSample from './components/ContextSample';
import HooksStateSample from "./components/HooksStateSample";
import HooksReducerSample from "./components/HooksReducerSample";
import { Parent } from "./components/Parent";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // 不適切なコードを検知するためのへルータ
  <React.StrictMode>
    {/* <App /> */}
    {/* <Hello /> */}
    {/* <Message /> */}
    {/* <ContainerSample /> */}
    {/* <ContextSample /> */}
    {/* <HooksStateSample initalValue={1}></HooksStateSample>
    // <HooksReducerSample initialValue={1}></HooksReducerSample> */}
    <Parent></Parent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
