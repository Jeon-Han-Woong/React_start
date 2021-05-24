const InputMenu = ({
        price,
        menuname,
        onChange,
        onCreate}) => {
    return(
        <div>
            <input
                name="menuname"
                placeholder="메뉴명"
                onChange={onChange}
                value={menuname}/>
            <input
                name="price"
                placeholder="가격"
                onChange={onChange}
                value={price}/>
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default InputMenu;