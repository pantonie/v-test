import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css'
import { Flex, Block } from 'vcc-ui';
import ChevronButton from './ChevronCircleButton';

export const Slider = ({ children, slides }: { children: React.ReactNode, slides: number}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 3,
    spacing: 15,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    breakpoints: {
      '(min-width: 720px) and (max-width: 850px)': {
        slidesPerView: 2,
      },
      '(max-width: 720px)': {
        slidesPerView: 2,
      },
      '(min-width: 1700px)': {
        slidesPerView: 4,
      },
      '(max-width: 500px)': {
        slidesPerView: 1,
      },
    }
  });
return (
  <>
    <div className="navigation-wrapper">
      {/*@ts-ignore*/}
      <div ref={sliderRef} className="keen-slider">
        {children}
      </div>
    </div>
    {slider && (
      <Flex extend={{
        flexDirection: 'row',
        alignSelf: 'flex-end',
        '@media (max-width: 850px)': {
          display: 'none'
        },
        marginTop: '20px'
      }}>
        <ChevronButton
          onClick={(e) =>{
            e.stopPropagation();
            slider.prev()
          }}
          disabled={currentSlide === 0}
          leftButton
          margin='0 15px 0 0'
        />
        <ChevronButton
          onClick={(e) => {
            e.stopPropagation();
            slider.next();
          }}
          disabled={currentSlide === slider.details().size - 1}
        />
      </Flex>
    )}
    {slider && !!slides && (
      <Block className="dots" extend={{
        '@media (min-width: 851px)': {
          display: 'none'
        },
        alignSelf: 'center'
      }}>
        {/*@ts-ignore*/}
        {[...Array(slides).keys()].map((idx) => {
          return (
            <button
              key={idx}
              onClick={() => {
                slider.moveToSlideRelative(idx)
              }}
              className={"dot" + (currentSlide === idx ? " active" : "")}
            />
          )
        })}
      </Block>
    )}
  </>
  )
}
