import React from 'react';
import { PropTypes } from 'prop-types';
import "../Jumbotron";
import Jumbotron from '../Jumbotron';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
  } from 'reactstrap';
import "./press.css";


class Press extends React.Component {
  render() {
    return (
      <main className="pressBody"> 
      <br></br>
        <Jumbotron>
          <h1>Lucy Lane in the news...</h1>
        </Jumbotron>
        <br/>
        <div>
    <Row>
        <Col>
      <Card>
        <CardImg top width="90%" src="https://www.audiofemme.com/wp-content/uploads/2019/12/LucyLane_PiranhaRama.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>AF 2019 IN REVIEW: Best DIY Promoters, Collectives, & Venues</CardTitle>
          <CardSubtitle>Tarra Thiessen | Jan 22, 2020</CardSubtitle>
          <CardText>After 152 shows touring this year with my three projects – Sharkmuffin, Gustaf, and Gesserit – here are my picks for the best DIY promoters, collectives and venues of 2019! We chatted with everyone about their best shows and overall reflections from 2019.</CardText>
          <Button><a href="https://www.audiofemme.com/af-2019-in-review-best-diy-promoters-collectives-venues/">View Article</a></Button>
        </CardBody>
      </Card>
      </Col>

      <Col>
      <div>
      <Card>
        <CardImg top width="100%" src="https://rvamag.com/wp-content/uploads/2019/12/finished-6.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>GROOVE-GAZE FROM DOWN THE LANE</CardTitle>
          <CardSubtitle>JULIA RAIMONDI | DECEMBER 13, 2019</CardSubtitle>
          <CardText>From the instrumental psychedelic music they play to the shows they host at their house, Richmonders Lucy In Battle Armor bring a sincere, positive spirit to everything they do.</CardText>
          <Button><a href="https://rvamag.com/music/groove-gaze-from-down-the-lane.html">View Article</a></Button>
        </CardBody>
      </Card>
    </div>
      </Col>
      
    </Row>
    </div>
      </main>
    );
  }
}

Press.propTypes = {
  text: PropTypes.string.isRequired
};

export default Press;