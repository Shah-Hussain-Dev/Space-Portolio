// import React,{useEffect,useState,} from 'react'
// import { Link } from 'react-router-dom'
// import {styles} from '../styles'
// import {navLinks} from '../constants'
// import {logo, menu, close} from '../assets'
// const Navbar = () => {
//   const [active, setActive] = useState("")
//   const [toggle,setToggle] = useState(false)
//   return (
// <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
// <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
// <Link className='flex items-center gap-2' to="/" onClick={()=>{
//   setActive("")
//   window.scrollTo(0, 0)
// }}>
//   <img src={logo} className="w-[230px] md:w-96 object-contains" alt="logo"/>
//   {/* <p className='text-white text=[18px] font-bold cursor-pointer'></p> */}
// </Link>
// <ul className='list-none hidden sm:flex flex-row gap-10'>
// {navLinks.map((link)=>(
//   <li key={link.id} className={`${active === link.title
//   ? "text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
//   onClick={()=>setActive(link.title)}
//   >
//     <a href={`#${link.id}`}>{link.title}</a>
//   </li>
// ))}
// </ul>
// <div className='sm:hidden flex flex-1 justify-end items-center '>
// <img src={toggle ? close : menu}
// alt="menu"
// className='w-[28px] h-[28px] object-contains cursor-pointer'
// onClick={()=>setToggle(!toggle)}

// />
// <div className={`${!toggle ? 'hidden':'flex'} p-6 black-gradient absolute top-14 text-center justify-center right-0  my-2 w-screen z-10 rounded-xl`}>

// <ul className='list-none  flex flex-col  gap-4'>
// {navLinks.map((link)=>(
//   <li key={link.id} className={`${active === link.title
//   ? "text-white":"text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
//   onClick={()=>{
//     setToggle(!toggle)
//     setActive(link.title)}}
//   >
//     <a href={`#${link.id}`}>{link.title}</a>
//   </li>
// ))}
// </ul>

// </div>
// </div>
// </div>
//    </nav>
//   )
// }

// export default Navbar
