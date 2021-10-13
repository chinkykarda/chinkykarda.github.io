import React from 'react';

function Projects() {
  return (
    <>
      <div className='projects'>
        <h1>My Projects</h1>
        <br/>
        <div class="card">
          <div class="container">
            <h4><b>Smart Contract Technology in Iot/IIoT</b></h4>
            <p>Proposed a new architecture using Blockchain Technology and Interplanetary File System (IPFS) to enable secure and easy Iot and IIoT data storage and sharing. Also, created a smart contract that will gather data from IoT and IIoT devices, upload it to IPFS, and return the hash to the user upon request, allowing sharing.</p>
          </div>
        </div>
        <br/>
        <div class="card">
          <div class="container">
            <h4><b>Contactless Biometric Attendance System</b></h4>
            <p>As the transition to the digital age is speeding up by the hour, biometrics systems are beginning to impact people's everyday lives in unexpected ways. The key goal of this project is to create a face recognition-based attendance tracking framework for businesses and institutions in order to improve and update the existing attendance system to make it more robust, reliable, and contactless. This proposed system detects and recognises faces using deep learning algorithms by using a camera to take pictures of an individual. When a match is made in the face database, then attendance is marked of the recognised person with name, date and time. A fully functional prototype has been developed in addition to the Deep Learning model.</p>
          </div>
        </div>
        <br/>
        <div class="card">
          <div class="container">
            <h4><b>Flight History Analysis Using PySpark</b></h4>
            <p>his project makes use of big data concepts such as Apache Spark, Pyspark, SparkSQL, SparkMLlib which makes data analytics faster to process data and derive valuable information from flight data, and makes predictions about flight delays using logistic regression.</p>
          </div>
        </div>
        <br/>
        <div class="card">
          <div class="container">
            <h4><b>Digitization of Hand-Written text</b></h4>
            <p>This project aims to digitize handwritten text using Deep Learning algorithms.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;