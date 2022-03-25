import React, {useState} from 'react'
import menuData from './menuData'
function Menu(props) {
    const {title,category,price,img,desc} = props
    const baseUrl = "./images/"
    return (<>
        <img src={require(`${img}`)} alt={title}></img>
        <div>
            <h5>{title}</h5>
            <h5>{price}</h5>
            <div>
                <p>{desc}</p>
            </div>
        </div>
      </>);
}
export default Menu;