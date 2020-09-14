import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home__wrapper">
            <div className="home">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="homepage_banner"/> 
            </div>

            <div className="home__row">
                <Product id="12412" title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses is a book by Eric Ries describing his proposed lean startup strategy for startup companies." price="11.96" rating={5} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ1tuQOeIrOPBgNZUvB7t6XC3e8Yjw9dhfRRdkc4rZGSTCp3nQTowL_eh8sjIAOWLCe7SKCLut&usqp=CAc"/>

                <Product id="12412" title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses is a book by Eric Ries describing his proposed lean startup strategy for startup companies." price="239" rating={5} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ1tuQOeIrOPBgNZUvB7t6XC3e8Yjw9dhfRRdkc4rZGSTCp3nQTowL_eh8sjIAOWLCe7SKCLut&usqp=CAc"/>
            </div>

            <div className="home__row">
                <Product id="12412" title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses is a book by Eric Ries describing his proposed lean startup strategy for startup companies." price="199.99" rating={5} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ1tuQOeIrOPBgNZUvB7t6XC3e8Yjw9dhfRRdkc4rZGSTCp3nQTowL_eh8sjIAOWLCe7SKCLut&usqp=CAc"/>

                <Product id="12412" title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses is a book by Eric Ries describing his proposed lean startup strategy for startup companies." price="98.99" rating={5} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ1tuQOeIrOPBgNZUvB7t6XC3e8Yjw9dhfRRdkc4rZGSTCp3nQTowL_eh8sjIAOWLCe7SKCLut&usqp=CAc"/>

                <Product id="12412" title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses is a book by Eric Ries describing his proposed lean startup strategy for startup companies." price="29.99" rating={5} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ1tuQOeIrOPBgNZUvB7t6XC3e8Yjw9dhfRRdkc4rZGSTCp3nQTowL_eh8sjIAOWLCe7SKCLut&usqp=CAc"/>
            </div>

            <div className="home__row">
                <Product id="12412" title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses is a book by Eric Ries describing his proposed lean startup strategy for startup companies." price="50,.99" rating={5} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ1tuQOeIrOPBgNZUvB7t6XC3e8Yjw9dhfRRdkc4rZGSTCp3nQTowL_eh8sjIAOWLCe7SKCLut&usqp=CAc"/>
            </div>
        </div>

        // Product - id, title, image, price, rating
    )
}

export default Home
