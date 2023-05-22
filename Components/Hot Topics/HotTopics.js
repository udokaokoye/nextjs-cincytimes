import React from 'react'
import Link from 'next/link'
// import './HotTopics.css'
const HotTopics = () => {
    return (
        <div className='hot_topics'>
            <p className='hot_topics_intro'>Hot Topics:</p>
            <Link passHref href={'/'} className='topics'><p>Omicron</p></Link>
            <Link passHref href={'/'} className='topics'><p>Covid-19</p></Link>
            <Link passHref href={'/'} className='topics'><p>Christmas</p></Link>
            <Link passHref href={'/'} className='topics'><p>Stocks</p></Link>
            <Link passHref href={'/'} className='topics'><p>Homicide</p></Link>
        </div>
    )
}

export default HotTopics
