import userEvent from '@testing-library/user-event';
import React from 'react';
import "./MyStyle.css";

const MyMenu = ({menu, onRemove, onToggle}) => {
    return(
        <div>
            <div className="myStyle">
                <p style={{
                    cursor : 'pointer',
                    color: menu.clicked ? "red" : 'black'
                }} onClick={() => onToggle(menu.id)}>{menu.menuname}</p>
                <p>{menu.price}</p>
                <button onClick={() => onRemove(menu.id)}>삭제</button>
            </div>
            <hr></hr>
        </div>
    );
}

const MenuList = ({menu, onRemove, onToggle}) => {
    return(
        <div>

            {menu.map(temp => (
                <MyMenu menu={temp} key={temp.id} onRemove={onRemove} onToggle={onToggle}></MyMenu>
            ))}
        </div>
    );
}

export default MenuList;