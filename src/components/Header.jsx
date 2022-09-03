import React,{useRef,useEffect} from 'react'
import {FaLaptopHouse,FaSearch, FaUser} from 'react-icons/fa'
import {MdMenu,MdClose} from 'react-icons/md';
import '../styles/Header.css'
import {Link} from 'react-scroll'
import realState from '../IMAGES/realState.svg'
const Header = () => {
   const menuRef = useRef();
   const headerRef = useRef();
   const toggleMunushow = ()=> menuRef.current.classList.add('show_header');
   const toggleMunumove = ()=> menuRef.current.classList.remove('show_header');

   useEffect( ()=>{
      window.addEventListener("scroll",()=>{
        
         if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headerRef.current.classList.add('header__Ref');
         }
         else{
            headerRef.current.classList.remove('header__Ref');
         }
      })

   },[])


  
  return (
  <section className='header' ref={headerRef}>
       <div className="logo">
         <img src={realState}alt="" id='logo__icon'/>
        <div>
           <h1>salaame</h1> 
           <span>properties</span>
        </div>
       </div>

       <nav ref={menuRef} >
        <ul>
            <li><Link to="home" spy={true} smooth={true} offset={-500} duration={500}   onClick={toggleMunushow}>home</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={toggleMunushow} >about</Link></li>
            <li><Link to="service" spy={true} smooth={true} offset={-100} duration={500} onClick={toggleMunushow}>service</Link></li>
            <li><Link to="property" spy={true} smooth={true} offset={-100} duration={500} onClick={toggleMunushow}>property</Link></li>
            <li><Link to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={toggleMunushow}>contact</Link></li>
        </ul>
          <span className='wrapper__icon'>
            <MdClose id='icon'
            onClick={toggleMunushow}
            />
          </span>
       </nav>
        <div className="icons__container">
              <div className='wrapper__icon'>
                 <FaSearch id='icon' />
              </div>

              <div className='wrapper__icon'>
                 <FaUser id='icon'/>
              </div>

              <div className='wrapper__menu'>
                  <MdMenu id='icon' className='menu'
                  onClick={toggleMunumove}
                  />
              </div>
        </div>    
  </section>
  )
}

export default Header