import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delItem } from '../redux/action/index'
import { NavLink } from 'react-router-dom'
import handleCard from '../redux/reducer/handelCard'
import './Card.css'

const Card = () => {
    const state = useSelector((state)=> state.handleCard)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item))
    }

    const cartItems = (cartItem) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={`http://localhost:5001${cartItem.image}`} alt={cartItem.title} width="200px" />
                        </div>
                        <div className="col-md-4">
                            <h3 className='product-title'>{cartItem.title}</h3>
                            <p className="lead fw-bold"><span className='numb'>MAD {cartItem.price}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                    </div>
                </div>
        );
    }

    const button = () => {
        return(
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To checkout</NavLink>
                </div>
            </div>
        );
    }

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    )
}

export default Card
