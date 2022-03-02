import React from 'react'
import Link from 'next/link'
// import './SideNav.css';

const SideNav = ({setsideToggle}) => {

    const disableSidebar = () => {
        setsideToggle(false)
    }
  return (
    <div className="sideNav_container">
        <div className="side_nav_wrapper">
            <div className="search">
                <input placeholder='Search...' type="text" />
                <button>Go</button>
            </div>

            
            <h3 className='side_intro'>News</h3>

            <div className="side_bar_news_list">
                <div className="left">
                    <Link onClick={() => disableSidebar()} href={'/'} className='side_nav_links'>Home</Link>
                    <Link onClick={() => disableSidebar()} href={'/category/ohio'} className='side_nav_links'>Ohio</Link>
                    <Link onClick={() => disableSidebar()} href={'/category/entertainment'} className='side_nav_links'>Entertainment</Link>
                    <Link onClick={() => disableSidebar()} href={'/category/crime'} className='side_nav_links'>Crime</Link>
                    <Link onClick={() => disableSidebar()} href={'/category/sport'} className='side_nav_links'>Sport</Link>
                    <Link onClick={() => disableSidebar()} href={'/category/business'} className='side_nav_links'>Business</Link>
                    <Link onClick={() => disableSidebar()} href={'/category/lifestyle'} className='side_nav_links'>Lifestyle</Link>
                    <Link onClick={() => disableSidebar()} href={'/category/politcs'} className='side_nav_links'>Politics</Link>
                    <Link onClick={() => disableSidebar()} href={'/category/travel'} className='side_nav_links'>Travel</Link>
                    <Link onClick={() => disableSidebar()} href={'/category/world'} className='side_nav_links'>World & Nation</Link>
                </div>
                <div className="right">
                    <Link onClick={() => disableSidebar()} href={"#"} className='side_nav_links'>Super Bowl</Link>
                    <Link onClick={() => disableSidebar()} href={"#"} className='side_nav_links'>Oplympics</Link>
                    <Link onClick={() => disableSidebar()} href={"#"} className='side_nav_links'>Russia Vs Ukraine</Link>
                    <Link onClick={() => disableSidebar()} href={"#"} className='side_nav_links'>Covid-19</Link>
                </div>
            </div>

            <div className="side_subscribe">
                <p>Subscribe To Our Newsletter</p>
                <input type="email" placeholder='Enter Email' />
                <button className='side_sub_btn'>Susbscribe</button>
            </div>
        </div>
    </div>
  )
}

export default SideNav