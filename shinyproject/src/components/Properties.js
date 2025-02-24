import React from 'react'
import './Properties.css'
import Property from './Property'
import Gallery from '../Gallery.json'

function Properties () {
  return (
    <section className='properties'>
      <Property
        title={Gallery[0].title}
        img={Gallery[0].cover} />
      <Property />
      <Property />
      <Property />
      <Property />
      <Property />
    </section>
  )
}
export default Properties
