import React from "react";
import '../App.css';

export const Input = () => (
    <div className="InputContainer">
        <input className='Input' placeholder='Введите название города на английском'/>
        <button className='Button'>Добавить</button>
    </div>
);
