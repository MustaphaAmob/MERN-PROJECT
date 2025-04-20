import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './ProductLanding.css'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/action'

function ProductLanding() {

    const { _id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const addProduct = (product) => {
        dispatch(addItem(product))
    }

    useEffect(() => {
        const getProduct = async () => {
            try {
                setLoading(true)
                console.log(_id)
                const response = await fetch(`http://localhost:5001/api/products/${_id}`)
                const data = await response.json()
                setProduct(data) 
            } catch (err) {
                console.log('Erreur : ', err.message)
            } finally {
                setLoading(false)
            }
            
        }
        getProduct()
    }, [])

    const Loading = () => {
        return (
            <>
                <div className='col-md-6'>
                    <Skeleton height={ 400 } />
                </div>
                <div className='col-md-6' style={{lineHeight: 2}}>
                    <Skeleton height={ 50 } width={ 300 } />
                    <Skeleton height={ 75 } />
                    <Skeleton height={ 25 } width={ 150 } />
                    <Skeleton height={ 50 } />
                    <Skeleton height={ 150 } />
                    <Skeleton height={ 50 } width={ 100 } />
                    <Skeleton height={ 50 } width={ 100 } style={{marginLeft: 6}} />
                </div>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img src={ `http://localhost:5001${product.image}` } alt={ product.title } height="500px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        { product.category }
                    </h4>
                    <h1 className="display-6 product-title landing-title">{ product.title }</h1>
                    <p className="lead">
                        Rating <span className='numb'>{ product.rating && product.rating.rate }</span>
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 my-4">
                        <span className='numb'>{ product.price }</span> MAD
                    </h3>
                    <p className="lead" style={{ fontSize: '16px' }}>{ product.description }</p>
                    <button className="btn btn-outline-dark px-4 py-2" onClick={ () => addProduct(product) }>Add to card</button>
                    <NavLink to='/card' className="btn btn-dark ms-2 px-3 py-2">Go to card</NavLink>
                </div>
            </>
        )
    }

  return (
    <div>
        <div className="container py-5">
            <div className="row py-5">
                { loading ? <Loading /> : <ShowProduct /> }
            </div>
        </div>
    </div>
  )
}

export default ProductLanding
