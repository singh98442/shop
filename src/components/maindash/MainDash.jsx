import React from 'react'
import './MainDash.css'
import { cardData } from '../data/Data'

const MainDash = () => {
  return (
    <div className="maindash gap-6">
      <h1 className=' text-3xl font-bold'>Dashboard</h1>
      <div className="m-cards m-5">
        {cardData.map((carditem, index) => {
          return (
            <div className="m-card" key={index}>
              <div className="m-left">
                <span>{carditem.bar}</span>
                <span>{carditem.title}</span>
              </div>
              <div className="m-right">
                <span>{carditem.png}</span>
                <span>{carditem.dollar}</span>
                <span>{carditem.date}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MainDash;
