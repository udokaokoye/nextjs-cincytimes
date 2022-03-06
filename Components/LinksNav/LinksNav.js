import React from 'react'
// import './LinksNav.css'
import Link from 'next/link';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

import { useIsLoggedIn, GetUser } from '../../lib/swr-hooks';
const LinksNav = () => {
    const {loggedin, userId} = useIsLoggedIn()
    const {users} = GetUser(userId)

    return (
        <div className='links_nav'>
            <div className="left">
                <div className='search_bars'>
                    <div className="search_icn"><FontAwesomeIcon icon={faSearch} /></div>
                    <div className="menu_bar"><FontAwesomeIcon icon={faBars} /></div>
                </div>
                <div className='link with_flag'> 
                <span className='link'><Link passHref href='/category/OHIO' className='link'>OHIO</Link></span>
                
                <span className='flag_container'>
                    <img 
                        className='ohio_state_flag' src={require('../../Assets/Demo/Flag_Map_of_Ohio.svg.png').default.src} alt={"#"} />
                    </span>
                </div>
                <Link passHref href='/category/entertainment' className='link'> Entertainment</Link>
                <Link passHref href='/category/crime' className='link'>Crime</Link>
                <Link passHref href='/category/sport' className='link'>Sports</Link>
                <Link passHref href='/category/business' className='link'>Business</Link>
                <Link passHref href='/category/lifestyle' className='link'>Lifestyle</Link>
                <Link passHref href='/category/politcs' className='link'>Politics</Link>
                <Link passHref href='/category/travel' className='link'>Travel</Link>
                <Link passHref href='/category/world' className='link'>World & Nation</Link>
            </div>
            <div className="right">
               <Link passHref href='/auth' style={{color: 'white'}} className='router_link auth_nav_btn'><span>{ loggedin ? users?.u_fname : 'Sign In'}  <FontAwesomeIcon icon={faUser} /></span></Link> 
               <div className="menu">
                   <FontAwesomeIcon icon={faBars} />
               </div>
            </div>

            {/* <p onClick={() => {}} style={{color: 'white'}}>lg</p> */}
        </div>
    )
}

export default LinksNav
