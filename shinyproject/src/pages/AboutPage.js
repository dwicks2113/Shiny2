import React from 'react'
import Collapse from '../components/Collapse'

function AboutPage () {
  return (
    <div>
      <h1>About Us</h1>
      <Collapse title='Reliability'>
        <p>
          Our mission is to provide affordable rental properties to our clients.
        </p>
        </Collapse>
        <Collapse title='Respect'>
          <p>
            Our vision is to provide a rental property for every budget.
          </p>
          </Collapse>
          <Collapse title='Service'>
            <p>
              Our values are quality, affordability, and customer satisfaction.
            </p>
            </Collapse> 
            <Collapse title='Security'>
              <p>
                Our goal is to make the rental process as easy as possible for our clients.
              </p>
              </Collapse>
    </div>
  )
}

export default AboutPage
