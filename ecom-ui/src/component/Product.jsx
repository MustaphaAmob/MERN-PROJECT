import React, { useState, useEffect } from 'react'
import './Product.css'
import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom'


function Product() {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    const componentMounted = true

    

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch('http://localhost:5001/api/products');

            if(componentMounted) {
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
                console.log(filter)
            }

            return () => {
                componentMounted = false
            }
        }

        getProduct()

    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-4">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-4">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-4">
                    <Skeleton height={350} />
                </div>
            </>
        )
    }

    const filterProduct = (cat) => {
        const updateList = data.filter((x) => x.category === cat)
        setFilter(updateList)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={ () => setFilter(data) }>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={ () => filterProduct(`men's parfums`) }>Men's parfums</button>
                    <button className="btn btn-outline-dark me-2" onClick={ () => filterProduct(`women's parfums`) }>Women's parfums</button>
                </div>

                { filter.map((product) => {
                    return (
                        <div className="col-md-4 product-container" key={ product._id }>
                            <div className="card h-100 text-center p-4">
                                <img src={ `http://localhost:5001${product.image}` } className="card-img-top" alt={ product.title } width= '500px' />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{ product.title }</h5>
                                    <p className="card-text">{ product.price } MAD</p>
                                    <NavLink to={`/products/${ product._id }`} className="btn btn-outline-dark">
                                        More infos
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    )
                }) }
            </>
        )
    }

  return (
    <div>
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className='display-6 text-center'>Latest parfum</h1>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                { loading ? <Loading /> : <ShowProducts /> }
            </div>
        </div>
    </div>
  )
}

export default Product