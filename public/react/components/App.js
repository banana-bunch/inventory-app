import React, { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { SingleItem } from "./SingleItem";
import { Form } from "./Form";
import Navbar from './NavBar';
import Home from './Home';

// import and prepend the api url to any fetch calls
import apiURL from '../api';



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
	const [loading, setLoading] = useState(false);

	// filter
	const [filter, setFilter] = useState(items);

	const categoryItems = [...new Set(items.map((val) => val.category))]
	console.log(categoryItems)

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItems();
		// setLoading(true);
	}, []);

	const fetchItemData = async (item) => {
		const res = await fetch (`${apiURL}/items/${item.id}`);
		const itemData = await res.json();
		setSingleItem(itemData);
	}

	// const Loading = () => {
	// 	return (
	// 		<>
	// 			Loading....
	// 		</>
	// 	)
	// }

	const filterProduct = (cat) => {
		const updatedList = items.filter((x) => {
			return x.category === cat;
		});
		setItems(updatedList);
		// setItems(items)
		// setFilter(updatedList);
		// console.log(updatedList)
		
	}
				
	const ShowProducts = () => {

		// const filterProduct = (cat) => {
		// 	const updatedList = items.filter((x) => {
		// 		return x.category === cat;
		// 	});
		// 	setFilter(updatedList);
		// 	// setItems(items)
		// 	// setFilter(updatedList);
		// 	console.log(updatedList)
		// }
		return (
			<>
					<div className='buttons d-flex justify-content-center mb-5 pb-5'>
						<button className='btn btn-outline-dark me-2' onClick={() => setItems(items)}>All</button>
						<button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
						<button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
						<button className='btn btn-outline-dark me-2' onClick={() => filterProduct("jewelery")}>Jewelery</button>
						<button className='btn btn-outline-dark me-2' onClick={() => filterProduct("electronics")}>Electronics</button>
					</div>


					{/* <div className="buttons d-flex justify-content-center mb-5 pb-5">
        			{categoryItems.map((Val, id) => {
          				return (
            		<button
              			className="btn btn-outline-dark me-2"
              			onClick={() => filterProduct(Val)}
              			key={id}
            		>
              		{Val}
            		</button>
          		);
     		})}
        			<button
          			className="btn btn-outline-dark me-2"
          			onClick={() => setItems(items)}
        			>
          			All
        			</button>
				</div> */}
			</>
		)
	}

	return (
		<main>
			{
				singleItem ? (
					<SingleItem singleItem={singleItem} setSingleItem={setSingleItem} items={items} setItems={setItems} updateItem={updateItem} setUpdateItem={setUpdateItem}/>
				) :  addItems ? (
					< Form addItems={addItems} setAddItems={setAddItems} items={items} setItems={setItems}/>
				) : <section>
						<Navbar />
						<Home />
						<div className="store">
							<br></br>
							<button onClick={() => setAddItems(true)}>Add an Item</button>
						</div>
						<br></br>
						<div className="container my-5 py-3">
        					<div className="row">
          						<div className="col-12 mb-0">
            						<h1 className="display-6 fw-bolder text-center">
              						Latest Products
            						</h1>
            						<hr />
          						</div>
        					</div>
      					</div>

						<div className='row justify-content-center container-fluid'>
							{/* {loading ? <Loading /> : <ShowProducts />} */}
							{filter ? <ShowProducts /> : null}
						</div>

						<div className="item-list">
							<ItemList items={items} fetchItemData={fetchItemData}/>
						</div>
					</section>
			}	
		</main>
	)
}