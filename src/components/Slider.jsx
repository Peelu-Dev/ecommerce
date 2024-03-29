import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import {ApiSlides} from '../api/SliderApi'
import './Slider.css'

function Slider() {
    const [slides] = useState(ApiSlides);
    const [activeSlide,setActiveSlide] = useState(0)
    const arrowStyle = 'rounded-full bg-grey flex  justify-center items-center shadow-sm hover:cursor-pointer';

    const nextSlide = ()=>{
        if(activeSlide === slides.length - 1){
            setActiveSlide(0)
        }
        else{
            setActiveSlide(activeSlide + 1)
        }
    }
    const previousSlide = ()=>{
        if(activeSlide === 0){
            setActiveSlide(slides.length - 1)
        }
        else{
            setActiveSlide(activeSlide - 1 )
        }
    }
  return (
    <div className='parentDiv h-[540px] bg-white justify-between items-center flex'>
        <div className={arrowStyle} style={{fontSize: '50px'}} onClick={previousSlide}>
            <ArrowLeftOutlined/>
        </div>
        {slides.map((slide,index)=>{
            if(index === activeSlide){
                return (
                    <div className={`wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-[10px] overflow-hidden relative` + slide.background}>
            <div className='slide flex items-center justify-center h-[100%]'>
            <div className='forImage '>
            <img className='h-[100%] object-cover' src={slide.src} alt="slide_image" />
            </div>
            <div className='desc flex flex-col flex-1 place-items-start justify-center ml-11'>
                <h2 className='text-[55px]'>{slide.content.h2}</h2>
                <p className='text-[30px]'>{slide.content.p}</p>
                <button className='btn'>Shop Now</button>
            </div>
            </div>
        </div>
                )
            }
        })}
        <div className={arrowStyle} style={{fontSize: '50px'}} onClick={nextSlide}>
            <ArrowRightOutlined/>
        </div>
    </div>
  )
}

export default Slider