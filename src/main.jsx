import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from "./Routes/Routes"
import { Provider } from "react-redux";
import store from './Store/Store';
import Chat from "./Components/ChatHubspot/Chat"
import "./main.css"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Chat/>
    <Routes/>
    </Provider>
  </React.StrictMode>,
)
