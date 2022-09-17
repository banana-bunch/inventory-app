import React from 'react';

export const Item = ({item, fetchItemData}) => {

  // individual object = individual item
  // console.log(item)

  return <>
    <div className="indiv-item">
      <h3 >{item.title}</h3>
      <br></br>
      <img src={item.image} alt={item.title} onClick={() => fetchItemData(item)}/>
    </div>
  </>
} 