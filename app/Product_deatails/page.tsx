import React from 'react'
import Link from 'next/link'

const Productpage= () => {
  return (
    <div>
      <h1>Product deatils</h1>
      <ul>
        <li><Link href="/Product_deatails/jocket">jocket</Link></li>
        <li><Link href="/Product_deatails/id">Product deatails</Link></li>
        
      </ul>
    </div>
  )
}

export default Productpage
