import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import KandyKorner from './components/KandyKorner';
import { BrowserRouter as Router } from "react-router-dom"


ReactDOM.render(
    <Router>
        <KandyKorner />
    </Router>
    , document.getElementById('root'));