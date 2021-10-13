import React from 'react';
import Card from 'react-bootstrap/Card';
import * as FcIcons from "react-icons/fc";
import './styles.css';

function Education() {
  return (
    <>
    <div className='education'>
    <h1>My Education</h1>
        <br />
        <Card>
          <Card.Header><h3>International Institute of Information Technology(IIIT), Naya Raipur</h3></Card.Header>
          <Card.Body>
            <Card.Title><h4>B.Tech, Computer Science and Engineering</h4>
              <h6><span><FcIcons.FcCalendar /></span> 2018 - Present</h6>
            </Card.Title>
            <Card.Text>
              CGPA: 9.22/10.0
            </Card.Text>
          </Card.Body>
        </Card>
        <br/>
        <Card>
          <Card.Header><h3>St. Xavier's High School, Bharni, Bilaspur</h3></Card.Header>
          <Card.Body>
            <Card.Title><h4>Higher Secondary, PCM</h4>
              <h6><span><FcIcons.FcCalendar /></span> 2015 - 2017</h6>
            </Card.Title>
            <Card.Text>
              Percentage: 88.2 %
            </Card.Text>
          </Card.Body>
        </Card>
        <br/>
        <Card>
          <Card.Header><h3>St. Xavier's High School, Bharni, Bilaspur</h3></Card.Header>
          <Card.Body>
            <Card.Title><h4>High School</h4>
              <h6><span><FcIcons.FcCalendar /></span> 2013 - 2015</h6>
            </Card.Title>
            <Card.Text>
              CGPA: 9.4/10.0
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Education;