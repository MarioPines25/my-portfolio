import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AntdApp from 'antd/es/app';
import ConfigProvider from 'antd/es/config-provider';
import 'antd/dist/reset.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AntdApp>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#800020',         // Garnet
            colorBgLayout: '#f8f9fa',        // Light background
            colorTextBase: '#2c2c2c',        // Main text
            colorTextSecondary: '#6e6e6e',   // Muted text
            colorBorderSecondary: '#d9d9d9', // Subtle borders
          },
        }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </AntdApp>
  </React.StrictMode>
);