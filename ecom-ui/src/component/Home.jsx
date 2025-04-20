import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='hero'>
        <div className="card text-bg-dark border-0">
            <img src="/assets/background-image.png" alt="Background" className="card-img" />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container">
                    <h5 className="card-title display-3 mb-0 home-title">New Seanson<br/> Arrivals</h5>
                    <p className="card-text lead fs-2">Check out all the trands !!</p>
                </div>
            </div>
        </div>

        <Product />
    </div>
  )
}

export default Home