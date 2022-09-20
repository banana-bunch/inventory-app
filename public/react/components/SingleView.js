import React from 'react'

export const SingleView = ({item,setItem}) => {

    return <>
        <h3>{item.title}</h3>
        <p>{item.price}</p>
        <p>{item.description}</p>
        <p>{item.category}</p>
        <img src={item.image} alt={item.title} />
    </>
  } 