import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AuthContext, AuthContextProvider} from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';
import { MessageContextProvider } from './context/MessageContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
<AuthContextProvider>
    <ChatContextProvider>
        <MessageContextProvider>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </MessageContextProvider>
    </ChatContextProvider>
</AuthContextProvider>);;
