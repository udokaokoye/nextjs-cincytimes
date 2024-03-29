import React from 'react';
import LineBreaker from '../Line Breaker/LineBreaker';
// import './GridCategory.css'
const GridCategory = ({categoryName, placement = 'home'}) => {
  return <div className='gridcatg_container'>
      <div className="gridcatg_bar">
          <h3>{categoryName}.</h3>
      </div>
      <LineBreaker />

      <div className="gridcatg_main">
          <div className="item item1">
              <div style={{height: placement !== 'home' ? '110px' : '160px'}} className="media"><img src={require('../../Assets/Demo/f1.jpg').default.src} alt="" /></div>
              <div className="title">Potato-Cheddar Soup With Quick-Pickled Jalapeños</div>
          </div>
          <div className="item item2">
          <div style={{height: placement !== 'home' ? '110px' : '160px'}} className="media"><img src={require('../../Assets/Demo/f2.jpg').default.src} alt="" /></div>
              <div className="title">Lunar and Chinese New Year Recipes</div>
          </div>
          <div className="item item3">
          <div style={{height: placement !== 'home' ? '110px' : '160px'}} className="media"><img src={require('../../Assets/Demo/f3.jpg').default.src} alt="" /></div>
              <div className="title">Swordfish Piccata</div>
          </div>
          <div className="item item4">
          <div style={{height: placement !== 'home' ? '110px' : '160px'}} className="media"><img src={require('../../Assets/Demo/f5.jpg').default.src} alt="" /></div>
              <div className="title">No-Bake Mango Lime Cheesecake</div>
          </div>
          <div  className="item item5">
          <div style={{height: placement !== 'home' ? '110px' : '160px'}} className="media"><img src={require('../../Assets/Demo/f4.jpg').default.src} alt="" /></div>
              <div className="title">Dumpling Noodle Soup</div>
          </div>
      </div>
  </div>;
};

export default GridCategory;
