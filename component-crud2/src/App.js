import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import MenuList from './MenuList';
import InputMenu from './InputMenu';

function App() {

  const [inputs, setInputs] = useState({
    price: '',
    menuname: ''
  });

  const {price, menuname} = inputs;

  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    })
  }

  const [menu, setMenu] = useState([
    {
      id : 1,
      price : 8000,
      menuname : "부대찌개"
    },
    {
      id : 2,
      price : 7000,
      menuname : "김치 볶음밥"
    },
    {
      id : 3,
      price : 6500,
      menuname : "된장찌개"
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const newmenu = {
      id : nextId.current,
      price,
      menuname
    };

    setMenu([...menu, newmenu]);

    setInputs({
      price : '',
      menuname : ''
    })

    nextId.current += 1;

  }

  const onRemove = (id) => {
    setMenu(menu.filter(newmenu => newmenu.id !== id));
  }

  return (
    <div>
      <InputMenu price={price} menuname={menuname} onChange={onChange} onCreate={onCreate}></InputMenu>
      <MenuList menu={menu} onRemove={onRemove}></MenuList>
    </div>
  );
}

export default App;
