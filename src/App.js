import React from 'react';
import './App.css';
import Adress from './Component/Profile/adress';
import Fullname from './Component/Profile/fullname';
import Introductions from './Component/Profile/introductions';
import Profile from './Component/Profile/profilePhotos';
import Pic from './autumn.jpg';
import Github from './github.png';
import Youtube from './youtube.png';
import Facebook from './facebook.png';
const App = () => (
    <div className="container"> 
  <div>
    <img src={Pic}/>
  </div>
       <div>
         <Fullname/>
         <Introductions/>
         <Adress/>
         <Profile/>
       </div>
       <div className="Social">
         <a href="https://github.com/aymen-brahmi/check">
        <img className="git" src={Github}/>
    
         </a>
         <a href="https://youtube.com">
        <img className='youtube' src={Youtube}/>
    
         </a>
        
       </div>
      </div>
    )
    

export default App;
