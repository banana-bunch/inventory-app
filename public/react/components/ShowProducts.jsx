// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import apiURL from '../api';

// import Skeleton from "react-loading-skeleton";

// const ShowProducts = ({items, filter, setFilter, setItems, fetchItemData}) => {
// //   const [data, setData] = useState([]);
// //   const [filter, setFilter] = useState(data);
//   const [loading, setLoading] = useState(false);
// //   let componentMounted = true;

// console.log(filter)

// let componentMounted = true;

//   useEffect(() => {
//     const getProducts = async () => {
//       setLoading(true);
//       const response = await fetch(`${apiURL}/items`);
//       if (componentMounted) {
//         setItems(await response.clone().json());
//         setFilter(await response.json());
//         setLoading(false);
//         console.log(filter);
//       }

//       return () => {
//         componentMounted = false;
//       };
//     };

//     getProducts();
//   }, []);

//   const Loading = () => {
//     return (
//     <>
//         <div className="col-md-3">
//             <Skeleton height={350}/>
//         </div>
//         <div className="col-md-3">
//             <Skeleton height={350}/>
//         </div>
//         <div className="col-md-3">
//             <Skeleton height={350}/>
//         </div>
//         <div className="col-md-3">
//             <Skeleton height={350}/>
//         </div>
//     </>
//     );
//   };

//   const filterProduct = (cat) => {
//       const updatedList = items.filter((x)=>x.category === cat);
//       setFilter(updatedList);
//   }

// //   const Show = () => {
//     return (
//       <>
//         <div className="buttons d-flex justify-content-center mb-5 pb-5">
//           <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(items)}>All</button>
//           <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
//           <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>
//             Women's Clothing
//           </button>
//           <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
//           <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronic</button>
//         </div>
//         {items.map((item) => {
//           return (
//             <>
//                 <div className="col-md-4 mb-4">
//                     <div className="indiv-card card h-100 text-center m-3 p-4" key={item.id}>
//                     <img onClick={() => fetchItemData(item)} src={item.image} className="card-img-top" alt={item.title} style={{ height: "325px" }} />
//                     <div className="card-body">
//                         <h5 className="card-title mb-0">{item.title.substring(0,12)} ...</h5>
//                         <p className="card-text lead fw-bold">$ {item.price}</p>
//                         <a href="#" className="btn btn-outline-dark" onClick={() => fetchItemData(item)}>Buy Now</a>
//                     </div>
//                     </div>
//                 </div>
//             </>
//           );
//         })}
//       </>
//     );
// //   };
// //   return (
// //     <div>
// //       <div className="container my-5 py-5">
// //         <div className="row">
// //           <div className="col-12 mb-5">
// //             <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
// //             <hr />
// //           </div>
// //         </div>
// //         <div className="row justify-content-center">
// //           {loading ? <Loading /> : <Show />}
// //         </div>
// //       </div>
// //     </div>
// //   );
// };

// export default ShowProducts;