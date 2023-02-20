import React, { useState } from 'react';
import './Style/Main.css';
import Header from './Header';
// import bacImg from './Img/image-bac-item.jpg';
// import bacImg2 from './Img/image-bac-item-1.jpg'


function Main(props) {
  const [countPage, setCountPage] = useState(0);
  const [pageLength, setPageLength] = useState(props.img.length-1);
  const [animationShow, setAnimationShow] = useState(false);
  const [animationProcess, setAnimationProcess] = useState(false);



  const handleOnWheel = (e)=>{
      setAnimationProcess(true);
      if(e.deltaY > 0){
        if(countPage != pageLength){
          if(animationShow != true){
            setAnimationProcess(true);
            setAnimationShow(true);
            setTimeout(()=>{
              setCountPage(prev => prev + 1);
              setAnimationShow(false);
              setAnimationProcess(false);
            } , 1000)
          }
        }else{
          setTimeout(()=>{
            setAnimationProcess(false);
          } , 1000)
        }
      }else{
        if(countPage != 0 ){
          if(animationShow != "bottom"){
            setAnimationProcess(true);
            setCountPage(prev => prev - 1)
            setAnimationShow("bottom");
            setTimeout(()=>{
              setAnimationShow(null);
              console.log(animationProcess)
              setAnimationProcess(false);
            } , 1300)
          }
        }else{
          setTimeout(()=>{
            setAnimationProcess(false);
          } , 1000)
        }
      }
  }
  return (
    <div className='row'>
      <Header colorTxt={props.img[countPage].colorTxt} />
      <div className="contents-navbar" style={{color: props.img[countPage].colorTxt}}>
        <ul>
          <li>Outerwear</li>
          <li>Knitwear & Sweatshirts</li>
          <li>T-Shirts & Polos</li>
          <li>Denim</li>
          <li>Trousers & Shorts</li>
          <li>Jeans</li>
        </ul>
      </div>
      <div className="bac-slider-block" onWheel={animationProcess ? null : (e)=>{
        if(e.deltaY >= 125 || e.deltaY <= -125){
          setAnimationProcess(true)
          handleOnWheel(e)
        }
      }}>
        <div className="bac-slider-item">

          <img src={props.img[countPage].url} alt="name" className= {animationShow == "bottom" ? "bac-slider-item-img bottomHidden" : "bac-slider-item-img" } />
          {countPage != props.img.length-1 ? <img src={props.img[countPage+1].url} alt="name" className={(animationShow == true) ?  "bac-slider-item-img show" : (animationShow == "bottom") ? "bac-slider-item-img bottom"  : "bac-slider-item-img hidden"} /> : null}

        </div>
      </div>
    </div>
    
  )
}
export default Main