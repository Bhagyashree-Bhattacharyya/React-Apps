import Header from "./components/Layout/Header";
import Subheader from "./components/Layout/Subheader";
import Products from "./components/Products/Products";
import { useState } from "react";



const App = () => {
  {/* 
  const [cartItems, setCartItems] = useState([])
  const [eventQueue, setEventQueue] = useState({
    id: "",
    type: ""
  })

  const handleAddItem = item => {
    let items = [...cartItems]
    let index = items.findIndex(i => i.id === item.id)
    if(index > -1){
      items[index] = item
    }
    else{
      items.push(item)
    }
    setCartItems([...items])
//    setCartItems(cartItems + 1)
  }

  const handleRemoveItem = item => {
    let items = [...cartItems]
    let index = items.findIndex(i => i.id === item.id)
    if(items[index].quantity === 0){
      items.splice(index, 1)
    }    
    else{
      items[index] = item
    }
    setCartItems([...items])
//    setCartItems(cartItems - 1)
  }

  // type === -1, decrease
  // type === 1, increase
  const handleEventQueue = (id, type) => {
    setEventQueue({
      id,
      type
    })
  }
  */} // As we're using central-storage now for state management


  return (
    <div>
      {/*  <Header count={cartItems.length} items={cartItems} onHandleEvent={handleEventQueue}/> */}
        <Header/>          
        <Subheader/>
        <Products/>
      {/*  <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem} eventState={eventQueue}/>  */}
    </div>
  );
}

export default App;
