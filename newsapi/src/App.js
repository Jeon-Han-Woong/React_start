import logo from './logo.svg';
import './App.css';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { useCallback, useState } from 'react';
import Countries from './components/Country';

function App() {
  const [category, setCategory] = useState('all');
  //
  const onSelect = useCallback(category => setCategory(category), []);

  const [country, setCountry] = useState('all');
  //
  const onChoice = useCallback(country => setCountry(country), []);

  return (
    <div>
      <Countries country={country} onChoice={onChoice}></Countries>
      <Categories category={category} onSelect={onSelect}></Categories>
      <NewsList category={category} country={country}></NewsList>
    </div>
  );
}

export default App;
