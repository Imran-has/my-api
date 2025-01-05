import React from 'react'

const Header = () => {
  return (
    <header className='bg-slate-500'>
    <div  className='container mx-auto flex items-center justify-center sm:p-5 '>
    
       
        <nav className='container mx-auto'>
       <ul className='flex justify-center items-center sm: text-red-500 gap-4 font-semibold text-xl'>
       <h1 className='sm: font-bold text-red-500 md:black-500 mr-20 flex  p-7 text-2xl'> ShopNow</h1>
 
 
       <li>Home</li>     
        <li>About</li>
        <li> Contact</li>
       </ul>
       </nav>
    </div>
    </header>
  )
}

export default Header
