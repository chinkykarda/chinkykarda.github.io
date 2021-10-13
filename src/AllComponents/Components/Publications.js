import React from 'react';
import * as FaIcons from 'react-icons/fa';
import './styles.css';

function Publications() {
  return (
    <>
      <div className='publications'>
        <h1>My Publications</h1>
        <br />
        <div class="card">
          <h5 class="card-header">Soybean Non-beneficial Crop Insect Identification using Mask-RCNN <a href="https://link.springer.com/chapter/10.1007/978-981-16-0739-4_30" className="handle"> <span> <FaIcons.FaExternalLinkAlt /></span></a></h5>
        </div>
        <br />
        <div class="card">
          <h5 class="card-header">Blockchain-Based Internet of Things and Industrial IoT: A Comprehensive Survey <a href="https://www.hindawi.com/journals/scn/2021/7142048/" className="handle"> <span> <FaIcons.FaExternalLinkAlt /></span></a></h5>
        </div>
      </div>
    </>
  );
}

export default Publications;