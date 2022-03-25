import {useState} from "react"
import './App.css';
import Menu from './Menu'
import menuData from "./menuData"
function App() {
  const [isCategory, setCategory] = useState("all")
  return (<>
    <h1>Our Menu</h1>
    <div>
      <p onClick={() => setCategory("all")}>All</p>
      <p onClick={() => setCategory("breakfast")}>Breakfast</p>
      <p onClick={() => setCategory("lunch")}>Lunch</p>
      <p onClick={() => setCategory("shakes")}>Shakes</p>
    </div>
    {menuData.map(menu => {
      if (isCategory === "all") {
        return (<Menu key={menu.id} {...menu}/>)
      }
      return menu.category === isCategory && (<Menu key={menu.id} {...menu}/>) 
      })}
  </>);
}

export default App;
