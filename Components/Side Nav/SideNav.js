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
                    <Link onClick={() => disableSidebar()} href={'/'}><span className='side_nav_links'>Home</span></Link>
                    <Link onClick={() => disableSidebar()} href={'/category/ohio'}><span className='side_nav_links'>Ohio</span></Link>
                    <Link onClick={() => disableSidebar()} href={'/category/entertainment'}><span className='side_nav_links'>Entertainment</span></Link>
                    <Link onClick={() => disableSidebar()} href={'/category/crime'}><span className='side_nav_links'>Crime</span></Link>
                    <Link onClick={() => disableSidebar()} href={'/category/sport'}><span className='side_nav_links'>Sport</span></Link>
                    <Link onClick={() => disableSidebar()} href={'/category/business'}><span className='side_nav_links'>Business</span></Link>
                    <Link onClick={() => disableSidebar()} href={'/category/lifestyle'}><span className='side_nav_links'>Lifestyle</span></Link>
                    <Link onClick={() => disableSidebar()} href={'/category/politcs'}><span className='side_nav_links'>Politics</span></Link>
                    <Link onClick={() => disableSidebar()} href={'/category/travel'}><span className='side_nav_links'>Travel</span></Link>
                    <Link onClick={() => disableSidebar()} href={'/category/world'}><span className='side_nav_links'>World & Nation</span></Link>
                </div>
                <div className="right">
                    <Link onClick={() => disableSidebar()} href={"#"}><span className='side_nav_links_specs'>Super Bowl</span></Link>
                    <Link onClick={() => disableSidebar()} href={"#"}><span className='side_nav_links_specs'>Oplympics</span></Link>
                    <Link onClick={() => disableSidebar()} href={"#"}><span className='side_nav_links_specs'>Russia Vs Ukraine</span></Link>
                    <Link onClick={() => disableSidebar()} href={"#"}><span className='side_nav_links_specs'>Covid-19</span></Link>
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