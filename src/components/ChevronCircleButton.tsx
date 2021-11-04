import React from 'react';
import {IChevronButtonProps} from 'src/types'

const ArrowRight = (props: IChevronButtonProps) => {
  const { onClick, margin, disabled, leftButton } = props;
  return (
    <img
      src='/images/chevron-circled.svg'
      style={{
        width: '30px',
        opacity: disabled ? '0.5' : '1',
        transform: leftButton ? 'rotate(180deg)' : 'none',
        margin: margin ? margin : '0'
      }}
      onClick={onClick}
      alt='Next'
    />

  )
}

export default ArrowRight;