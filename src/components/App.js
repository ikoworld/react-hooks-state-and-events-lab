import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {
const [mode,setMode]=useState(false)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const toggleMode=()=> setMode(!mode);
  const appClass = mode ? "App dark" : "App light"
const text= mode ?"Dark Mode":"Light Mode"
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleMode}>{text}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
