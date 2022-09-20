import React, { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { Item } from "./Item";
import { SingleItem } from "./SingleItem";
import { Form } from "./Form";
import Navbar from './NavBar';
import Home from './Home';
import {Switch, Route, Routes} from "react-router-dom";
import Cart from './Cart';
import { NavLink } from 'react-router-dom';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import { compose } from 'redux';
import About from './About';
import ShowProducts from './ShowProducts';
// import Skeleton from "react-loading-skeleton";




export const App = () => {

	const [items, setItems] = useState([]);

	// array of objects, each object is an item, initial seed data had 20 items (id 1-20)
	// console.log(items)

	// if singleItem is true, SingleItem component will render 
	const [singleItem, setSingleItem] = useState(null);

	// if addItems is true, Form component will render 
	const [addItems, setAddItems] = useState(false);

	// if updateItem is true within the SingleItem component, Update component will render
	const [updateItem, setUpdateItem] = useState(false);

	// if loading is true, then load product category buttons
	// const [loading, setLoading] = useState(false);

	// filter
	const [filter, setFilter] = useState(items);
	// console.log(filter)
	// const [filterComp, setFilterComp] = useState(false);

		// render cart component
		const [isCart, setIsCart] = useState(false)

		// About page
		const [about, setAbout] = useState(false);



		let componentMounted = true;

		useEffect(() => {
		  const getProducts = async () => {
			// setLoading(true);
			const response = await fetch(`${apiURL}/items`);
			if (componentMounted) {
			  setItems(await response.clone().json());
			  setFilter(await response.json());
			//   setLoading(false);
			  console.log(filter);
			}
	  
			return () => {
			  componentMounted = false;
			};
		  };
	  
		  getProducts();
		}, []);
	  
		// const Loading = () => {
		// 	return (
		// 	<>
		// 		<div className="col-md-3">
		// 			<Skeleton height={400}/>
		// 		</div>
		// 		<div className="col-md-3">
		// 			<Skeleton height={400}/>
		// 		</div>
		// 		<div className="col-md-3">
		// 			<Skeleton height={400}/>
		// 		</div>
		// 		<div className="col-md-3">
		// 			<Skeleton height={400}/>
		// 		</div>
		// 	</>
		// 	);
		//   };









	
	// async function fetchItems(){
	// 	try {
	// 		const response = await fetch(`${apiURL}/items`);
	// 		const itemsData = await response.json();
			
	// 		setItems(itemsData);
	// 		// setFilter(await response.json())
	// 	} catch (err) {
	// 		console.log("Oh no an error! ", err)
	// 	}
	// }


	// useEffect(() => {
	// 	fetchItems();
	// 	// setLoading(true);
	// }, []);

	const fetchItemData = async (item) => {
		const res = await fetch (`${apiURL}/items/${item.id}`);
		const itemData = await res.json();
		setSingleItem(itemData);
	}



	const filterProduct = (cat) => {
		const updatedList = items.filter((x)=>x.category === cat);
		setFilter(updatedList);
	}
  
	const ShowProducts = () => {
	  return (
		<>
		<div className='container'>
			<div className="buttons d-flex justify-content-center mb-5 pb-5">
				<button className="btn btn-outline-dark me-2" onClick={()=>setFilter(items)}>All</button>
				<button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
				<button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>
				Women's Clothing
				</button>
				<button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
				<button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronics</button>
			</div>
		</div>
		  {filter.map((item, idx) => {
			return (
			  <>
				
				<div className="col-md-4 mb-4" key={idx}>
						<div className="indiv-card card h-100 text-center m-3 p-4" >
						<img onClick={() => fetchItemData(item)} src={item.image} className="card-img-top" alt={item.title} style={{ height: "325px" }} />
						<div className="card-body">
							<h5 className="card-title mb-0">{item.title.substring(0,12)} ...</h5>
							<p className="card-text lead fw-bold">$ {item.price}</p>
							<a href="#" className="btn btn-outline-dark" onClick={() => fetchItemData(item)}>Buy Now</a>
						</div>
						</div>
					</div>

			  </>
			);
		  })}
		</>
	  );
	};

	// 	useEffect(() => {
	// 	ShowProducts();
	// }, []);

	return (
		<>
		<main>
			{
				singleItem ? (
					<SingleItem singleItem={singleItem} setSingleItem={setSingleItem} items={items} setItems={setItems} updateItem={updateItem} setUpdateItem={setUpdateItem} setIsCart={setIsCart} isCart={isCart}/>
				) :  addItems ? (
					< Form addItems={addItems} setAddItems={setAddItems} items={items} setItems={setItems}/>
				) : isCart ? (
					<div>
						<Navbar  setIsCart={setIsCart} isCart={isCart} singleItem={singleItem} setSingleItem={setSingleItem} items={items} setItems={setItems} updateItem={updateItem} setUpdateItem={setUpdateItem} about={about} setAbout={setAbout}/>
						<Routes>
							<Route path="/cart" element={<Cart />}/>
						</Routes>
					</div>
					
				) : about ? (
					<Routes>
						<Route path="/about" element={<About />}/>
					</Routes>
				) : 
					 <section>
						<Navbar setIsCart={setIsCart} isCart={isCart} about={about} setAbout={setAbout}/>
						<Home setAddItems={setAddItems} id="home"/>
						<div className="container my-5 py-3">
        					<div className="row">
          						<div className="col-12 mb-0">
            						<h1 className="display-6 fw-bolder text-center" id='products'>
              						Latest Products
            						</h1>
            						<hr />
          						</div>
        					</div>
      					</div>

						<div className='row justify-content-center container-fluid'>
							{/* instead of shoeProducts - from up above - create a button where it can lead to choosing a category???????????? */}
							{/* <Category /> */}
						</div>

						{/* <div className="container d-flex flex-wrap">
							<ItemList items={items} fetchItemData={fetchItemData}/>
						</div> */}
						<div className="container d-flex flex-wrap">
						{/* {loading ? <Loading /> : <ShowProducts items={items} fetchItemData={fetchItemData}/>} */}
						<ShowProducts items={items} fetchItemData={fetchItemData}/>
						</div>
					</section>
			}	
		</main>
		<footer>Made with ❤️ &copy; Inventory App</footer>
		</>
	)
}