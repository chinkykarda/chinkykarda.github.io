import React from 'react';
import Card from 'react-bootstrap/Card';
import * as FcIcons from "react-icons/fc";
import './styles.css';

function Experience() {
  return (
    <>
      <div className='experience'>
        
        <h1>My Experience</h1>
        
        <br />
        <Card>
          <Card.Header><h3 className="morganstanley">Morgan Stanley</h3></Card.Header>
          <Card.Body>
            <Card.Title><h4>Technology Summer Analyst 2021 (SDE Intern)</h4>
              <h6><span><FcIcons.FcCalendar /></span> May 2021 - July 2021</h6>
            </Card.Title>
            <Card.Text>
              Worked on end-to-end development of Hiring Operations Application.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Experience;