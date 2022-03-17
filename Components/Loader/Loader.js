import React from 'react'

const Loader = () => {
  return (
    <div className='loader_container'>
        <img src={require('../../Assets/Logos/small logo.png').default.src} alt="" />
        <img className='full_logo' src={require('../../Assets/Logos/full logo.png').default.src} alt="" />
    </div>
  )
}

export default Loader