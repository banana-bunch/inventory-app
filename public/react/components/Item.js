import React from "react";

export const Item = ({ item, fetchItemData }) => {
  // individual object = individual item
  // console.log(item)

  return <>
    <h3 onClick={() => fetchItemData(item)}>{item.title}</h3>
    <p>{item.price}</p>
    <p>{item.description}</p>
    <p>{item.category}</p>
    <img src={item.image} alt={item.title} />
  </>
} 
