import './App.css';
import Item from './components/item';
import Cart from './components/cart';

function App() {
  return (
    <div className='App'>
      <Item name='Book' price='70'/>
      <Item name='Mobile' price='499'/>
      <Item name='Laptop' price='1200'/>
      <Item name='Pen Drive' price='30'/>
      <Cart />
    </div>
  );
}

export default App;
