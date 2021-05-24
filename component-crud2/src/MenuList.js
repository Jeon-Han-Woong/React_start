import React from 'react';
import "./MyStyle.css";

const MyMenu = ({menu, onRemove}) => {
    return(
        <div>
            <div className="myStyle">
                <p>{menu.menuname}</p>
                <p>{menu.price}</p>
                <button onClick={() => onRemove(menu.id)}>삭제</button>
            </div>
            <hr></hr>
        </div>
    );
}

const MenuList = ({menu, onRemove}) => {
    return(
        <div>

            {menu.map(temp => (
                <MyMenu menu={temp} key={temp.id} onRemove={onRemove}></MyMenu>
            ))}
        </div>
    );
}

export default MenuList;