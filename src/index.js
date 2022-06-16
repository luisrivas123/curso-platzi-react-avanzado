import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from "react-dom/client";

const container = document.getElementById('app');
const root = createRoot(container);
// root.render('Hola Luis');
root.render(<h1>Hola Luis!!!!</h1>);
// ReactDOM.render('Hola', document.getElementById('app'))
