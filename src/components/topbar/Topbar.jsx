import React from 'react'
import "./topbar.css"
import { Notifications, Language, Settings } from '@material-ui/icons'
import { Menu } from '@material-ui/icons';
const { faker } = require('@faker-js/faker');
export default function topbar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topleftb'>
          <span className='logo'> Perfios Software Solution Ltd. Std.</span>  
        </div> 
        <div className='toplefta'>
          <Menu className='menuIcon'/>
          <span className='logo'> PERFIOS </span> 
        </div>  
        <div className='topright'>
          
          <div className="topbarIconsContainer"> 
          <div className="lan">
            <Language />
            <span className="topbarIconsBadges">2</span>
            </div>
          </div>
          <div className="topbarIconsContainer"> 
          <div className="set">
            <Settings /> 
            </div> 
          </div>
          <div className="topbarIconsContainer"> 
            <Notifications />
            <span className="topbarIconsBadges">2</span>
          </div>
          <div className="topbarIconsContainer"> 
            <img src= {faker.image.avatar()} alt="" className='topbaravatar'/>  
          </div>   
        </div>
      </div>
    </div>
  )
}

