import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delCart } from "../redux/action";

const Cart = () => {

    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch()

    // const cartItems = (cartItem) => {
    //     return (
    //         <div className="px-4 my-5 bg-light rounded-3">
    //             <div className="container">
    //                 <button className="btn"></button>
    //                 <div className="row">
    //                     <div className="col-md-4">
    //                         <h3>hi</h3>
    //                         <p></p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    // return (
    //     <>
    //         {state.length !== 0 && state.map(cartItems)}
    //     </>
    // )


    return (
        <h1>hey</h1>
    )
}

export default Cart;