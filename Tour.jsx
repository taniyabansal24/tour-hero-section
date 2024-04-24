import React from 'react'
import './Tour.css'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";

const Tour = () => {
  return (
    <div className='home'>
        <div className='overlay'></div>
        <video src="./video.mp4" muted autoPlay loop type='video/mp4'></video>
    
        <div className='homeContent container'>
            <div className="textDiv">
                <span className='smallText'>
                    Our Packages
                </span>
                <h1 className='homeTitle'>
                    Search your holiday
                </h1>
            </div>
            <div className='cardDiv grid'>
                <div className='destinationInput'>
                    <label htmlFor="city">
                        Search your destination:</label>
                        <div className='input flex'>
                            <input type="text" placeholder='Enter name here...'/>
                            <GrLocation />
                        </div>
                </div>
                <div className='dataInput'>
                    <label htmlFor="date">
                        Search your date:</label>
                        <div className='input flex'>
                            <input type="date"/>
                        </div>
                </div>
                <div className='priceInput'>
                    <div className="label_total flex">
                        <label htmlFor="price">Max price:</label>
                        <h3 className='total'>₹50,000</h3>
                    </div>
                    <div className='input flex'>
                        <input type="range" max="50,000"
                        min="5,000"/>
                    </div>
                </div>
                <div className='searchOptions flex'>
                    <span>SEARCH</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Tour
