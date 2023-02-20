import React, { useState } from 'react';
import './Style/Main.css';
import Header from './Header';
// import bacImg from './Img/image-bac-item.jpg';
// import bacImg2 from './Img/image-bac-item-1.jpg'


function Main(props) {
  const [countPage, setCountPage] = useState(0);
  const [pageLength, setPageLength] = useState(props.img.length-1);
  const [animationShow, setAnimationShow] = useState(false);

  console.log(countPage);
  console.log(props.img.length)
  const handleOnWheel = (e)=>{
    if(e.deltaY == 125){
      if(countPage != pageLength){
        if(animationShow != true){
          setAnimationShow(true);
          setTimeout(()=>{
            setCountPage(prev => prev + 1);
            setAnimationShow(false);
          } , 1000)
        }
      }
    }else{
      if(countPage != 0 ){
        if(animationShow != "bottom"){
          setCountPage(prev => prev - 1)
          setAnimationShow("bottom");
          setTimeout(()=>{
            setAnimationShow(null);
          } , 1300)
        }
      }
    }
  }
  return (
    <div className='row'>
      <Header />
      <div className="contents-navbar">
        <ul>
          <li>Outerwear</li>
          <li>Knitwear & Sweatshirts</li>
          <li>T-Shirts & Polos</li>
          <li>Denim</li>
          <li>Trousers & Shorts</li>
          <li>Jeans</li>
        </ul>
      </div>
      <div className="bac-slider-block" onWheel={(e)=>handleOnWheel(e)}>
        <div className="bac-slider-item">

          <img src={props.img[countPage].url} alt="name" className= {animationShow == "bottom" ? "bac-slider-item-img bottomHidden" : "bac-slider-item-img" } />
          {countPage != props.img.length-1 ? <img src={props.img[countPage+1].url} alt="name" className={(animationShow == true) ?  "bac-slider-item-img show" : (animationShow == "bottom") ? "bac-slider-item-img bottom"  : "bac-slider-item-img hidden"} /> : null}

        </div>
      </div>
    </div>
    
  )
}
export default Main