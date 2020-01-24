import React from 'react';
import { PropTypes } from 'prop-types';
import "./shows.css";
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';


class Shows extends React.Component {
  render() {
    return (
      <body className="showsBody">
       <Jumbotron>
         <h3>Upcoming Shows at Lucy Lane.....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
        </Jumbotron> 
      <div>
      <Container>
        {/* BEGIN SHOW ENTRy */}
        <Row>
          <Col >
          <h1 className='date'>March 3rd, 2020<br/><h3>8:30pm</h3></h1>
          </Col>
          <Col>
          <h1 classname='showTitle'>Shadow Year (NY), Dumb Waiter, Gnawing, Cream Dream<br/></h1>
          <div>
            <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
              More Details
            </Button>
            <UncontrolledCollapse toggler="#toggler">
              <Card className='detailsCard'>
                <CardBody>
                  <p className='bands'>It's super cold outside, and that is lame. However, we have a warm basement with killer tunes to toast your buns, and that isn't so lame. We hearing dancing is a great way to keep those body temps up to ideal conditions. </p><br/>
                  <p>ON TOUR:<br/>
                  <a href="https://shadowyear.bandcamp.com/album/hush-hush-panic">Shadow Year (Brooklyn, NY) - ROCK N ROLL</a><br/><br/>
                  <p>LOCAL SUPPORT:</p>
                  <a href='https://dumbwaiterva.bandcamp.com/'>Dumb Waiter - math rock/jazz fusion</a><br/>
                  <a href='https://gnawinggg.bandcamp.com/releases'>Gnawing - twangy fuzzy jamz</a><br/>
                  <a href='https://cre4mdream.bandcamp.com/'>Cream Dream - Chill, happy, bouncing rock</a>
                  </p>
                </CardBody>
              </Card>
            </UncontrolledCollapse>
          </div>
          </Col>
        </Row>
       {/* END SHOW ENTRY */}
       {/* BEGIN SHOW ENTRy */}
       <Row>
          <Col >
          <h1 className='date'>March 3rd, 2020<br/><h3>8:30pm</h3></h1>
          </Col>
          <Col>
          <h1 classname='showTitle'>Shadow Year (NY), Dumb Waiter, Gnawing, Cream Dream<br/></h1>
          <div>
            <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
              More Details
            </Button>
            <UncontrolledCollapse toggler="#toggler">
              <Card className='detailsCard'>
                <CardBody>
                  <p className='bands'>It's super cold outside, and that is lame. However, we have a warm basement with killer tunes to toast your buns, and that isn't so lame. We hearing dancing is a great way to keep those body temps up to ideal conditions. </p><br/>
                  <p>ON TOUR:<br/>
                  <a href="https://shadowyear.bandcamp.com/album/hush-hush-panic">Shadow Year (Brooklyn, NY) - ROCK N ROLL</a><br/><br/>
                  <p>LOCAL SUPPORT:</p>
                  <a href='https://dumbwaiterva.bandcamp.com/'>Dumb Waiter - math rock/jazz fusion</a><br/>
                  <a href='https://gnawinggg.bandcamp.com/releases'>Gnawing - twangy fuzzy jamz</a><br/>
                  <a href='https://cre4mdream.bandcamp.com/'>Cream Dream - Chill, happy, bouncing rock</a>
                  </p>
                </CardBody>
              </Card>
            </UncontrolledCollapse>
          </div>
          </Col>
        </Row>
       {/* END SHOW ENTRY */}
       {/* BEGIN SHOW ENTRy */}
       <Row>
          <Col >
          <h1 className='date'>March 3rd, 2020<br/><h3>8:30pm</h3></h1>
          </Col>
          <Col>
          <h1 classname='showTitle'>Shadow Year (NY), Dumb Waiter, Gnawing, Cream Dream<br/></h1>
          <div>
            <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
              More Details
            </Button>
            <UncontrolledCollapse toggler="#toggler">
              <Card className='detailsCard'>
                <CardBody>
                  <p className='bands'>It's super cold outside, and that is lame. However, we have a warm basement with killer tunes to toast your buns, and that isn't so lame. We hearing dancing is a great way to keep those body temps up to ideal conditions. </p><br/>
                  <p>ON TOUR:<br/>
                  <a href="https://shadowyear.bandcamp.com/album/hush-hush-panic">Shadow Year (Brooklyn, NY) - ROCK N ROLL</a><br/><br/>
                  <p>LOCAL SUPPORT:</p>
                  <a href='https://dumbwaiterva.bandcamp.com/'>Dumb Waiter - math rock/jazz fusion</a><br/>
                  <a href='https://gnawinggg.bandcamp.com/releases'>Gnawing - twangy fuzzy jamz</a><br/>
                  <a href='https://cre4mdream.bandcamp.com/'>Cream Dream - Chill, happy, bouncing rock</a>
                  </p>
                </CardBody>
              </Card>
            </UncontrolledCollapse>
          </div>
          </Col>
        </Row>
       {/* END SHOW ENTRY */}
       {/* BEGIN SHOW ENTRy */}
       <Row>
          <Col >
          <h1 className='date'>March 3rd, 2020<br/><h3>8:30pm</h3></h1>
          </Col>
          <Col>
          <h1 classname='showTitle'>Shadow Year (NY), Dumb Waiter, Gnawing, Cream Dream<br/></h1>
          <div>
            <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
              More Details
            </Button>
            <UncontrolledCollapse toggler="#toggler">
              <Card className='detailsCard'>
                <CardBody>
                  <p className='bands'>It's super cold outside, and that is lame. However, we have a warm basement with killer tunes to toast your buns, and that isn't so lame. We hearing dancing is a great way to keep those body temps up to ideal conditions. </p><br/>
                  <p>ON TOUR:<br/>
                  <a href="https://shadowyear.bandcamp.com/album/hush-hush-panic">Shadow Year (Brooklyn, NY) - ROCK N ROLL</a><br/><br/>
                  <p>LOCAL SUPPORT:</p>
                  <a href='https://dumbwaiterva.bandcamp.com/'>Dumb Waiter - math rock/jazz fusion</a><br/>
                  <a href='https://gnawinggg.bandcamp.com/releases'>Gnawing - twangy fuzzy jamz</a><br/>
                  <a href='https://cre4mdream.bandcamp.com/'>Cream Dream - Chill, happy, bouncing rock</a>
                  </p>
                </CardBody>
              </Card>
            </UncontrolledCollapse>
          </div>
          </Col>
        </Row>
       {/* END SHOW ENTRY */}
       {/* BEGIN SHOW ENTRy */}
       <Row>
          <Col >
          <h1 className='date'>March 3rd, 2020<br/><h3>8:30pm</h3></h1>
          </Col>
          <Col>
          <h1 classname='showTitle'>Shadow Year (NY), Dumb Waiter, Gnawing, Cream Dream<br/></h1>
          <div>
            <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
              More Details
            </Button>
            <UncontrolledCollapse toggler="#toggler">
              <Card className='detailsCard'>
                <CardBody>
                  <p className='bands'>It's super cold outside, and that is lame. However, we have a warm basement with killer tunes to toast your buns, and that isn't so lame. We hearing dancing is a great way to keep those body temps up to ideal conditions. </p><br/>
                  <p>ON TOUR:<br/>
                  <a href="https://shadowyear.bandcamp.com/album/hush-hush-panic">Shadow Year (Brooklyn, NY) - ROCK N ROLL</a><br/><br/>
                  <p>LOCAL SUPPORT:</p>
                  <a href='https://dumbwaiterva.bandcamp.com/'>Dumb Waiter - math rock/jazz fusion</a><br/>
                  <a href='https://gnawinggg.bandcamp.com/releases'>Gnawing - twangy fuzzy jamz</a><br/>
                  <a href='https://cre4mdream.bandcamp.com/'>Cream Dream - Chill, happy, bouncing rock</a>
                  </p>
                </CardBody>
              </Card>
            </UncontrolledCollapse>
          </div>
          </Col>
        </Row>
       {/* END SHOW ENTRY */}
      </Container>
      </div>
      </body>
  

    );
  }
}

Shows.propTypes = {
  text: PropTypes.string.isRequired
};

export default Shows;
