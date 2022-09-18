import React from "react";

export const Item = ({ item, fetchItemData }) => {
  // individual object = individual item
  // console.log(item)

  return (
    <>
    <div className="col-md-3 mb-4">
        <div className="card h-100 text-center m-3 p-4" key={item.id}>
          <img onClick={() => fetchItemData(item)} src={item.image} className="card-img-top" alt={item.title} style={{ height: "275px" }} />
          <div className="card-body">
            <h5 className="card-title mb-0">{item.title.substring(0,12)} ...</h5>
            <p className="card-text lead fw-bold">$ {item.price}</p>
            <a href="#" className="btn btn-outline-dark">Add to Cart</a>
          </div>
        </div>
      </div>
    </>
  );
};
