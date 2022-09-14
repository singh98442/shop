import React from 'react'
import './Sidebar.css'
import logo from '../../imgs/logo.png'
import { sidebarData } from '../data/Data'
import { useState } from 'react'

const Sidebar = () => {

    const[selected, setselected] = useState(0)
  return (
    <div className="sidebar">
        <div className="logo">
            <img src={logo} alt="" />
            <span>
                sh<span>o</span>ps
            </span>
        </div>
        <div className="menu">
            {
                sidebarData.map((item,index)=>{
                    return(
                        <div className={selected===index?"items active":"items"}
                        onClick={()=>{
                            setselected(index)
                        }} key={index}>
                            {item.icon}
                            <span>{item.heading}</span>
                        </div>
                    )
                })
            }
        </div>
        <div className="logout">
            <span><iconify-icon icon="ant-design:logout-outlined"></iconify-icon></span>
        </div>
    </div>
  )
}

export default Sidebar;
