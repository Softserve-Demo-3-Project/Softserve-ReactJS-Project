import React, { Component } from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import PanelCollapse from './PanelCollapse'


export const HomeView = () => (
  <div className='container'>
    <PanelCollapse />
    <PanelCollapse/>
  </div>
)

export default HomeView
