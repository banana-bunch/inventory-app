import React from "react";

export const Item = ({item, fetchItem}) => {

  return <>
    <h3 onClick={ () => fetchItem(item)}>{item.title}</h3>
    <p>{item.price}</p>
    <p>{item.description}</p>
    <p>{item.category}</p>
    <img onClick={ () => fetchItem(item)} src={item.image} alt={item.title} />
  </>
} 
