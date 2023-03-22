import React from 'react';

const Colors = ({colors}) => {
  return (
    <div className='colors'>
        {
            colors.map((color,index)=>(
                <button key={index}>{color}</button>
            ))
        }
    </div>
  )
}

export default Colors;
