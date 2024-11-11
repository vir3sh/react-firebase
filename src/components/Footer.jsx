import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

function Footer() {

    const {phone,products}=useContext(AppContext)


  return (
    <div>
      Footer
      <h3>Phone:{phone}</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Footer
