import React from 'react';
import Slideshow from '../components/Slideshow';

function herosection({ img_list }) {
  return (
    <div>
      <Slideshow img_list={img_list} />
    </div>
  );
}

export default herosection;
