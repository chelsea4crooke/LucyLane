import React from 'react';
import { PropTypes } from 'prop-types';
import "./shows.css";
import { Jumbotron, Row, Col } from 'reactstrap';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';


class Shows extends React.Component {
  render() {
    return (
      <main className="showsBody">
       <Jumbotron>
         <h3>Upcoming Shows at Lucy Lane.....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
        </Jumbotron> 
        <br/>
      <div className="container">
        {/* BEGIN SHOW ENTRy */}
        <Row>
          <Col >
          <h1 className='date'>FEB. 8th, 2020<br/><h3 className="time">8:30pm</h3></h1>
          </Col>
          <hr/>
          <Col>
          <h2 classname='showTitle'>Shadow Year (NY), <br/>Dumb Waiter,<b/> Gnawing,<br/> Cream Dream<br/></h2>
          <div>
          <br/>
            <Button color="primary" id="toggler" className="detailsBtn" style={{ marginBottom: '1rem' }}>
              More Details
            </Button>
            <hr/>
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
          <h1 className='date'>FEB. 22nd, 2020<br/><h3 className="time">8:30pm</h3></h1>
          </Col>
          <hr/>
          <Col>
          <h2 classname='showTitle'>MammaBear(GA), The Trillions, Nightcreature, Mad Abbey<br/></h2>
          <div>
          <br/>
            <Button color="primary" id="toggler" className="detailsBtn" style={{ marginBottom: '1rem' }}>
              More Details
            </Button>
            <hr/>
            <UncontrolledCollapse toggler="#toggler">
              <Card className='detailsCard'>
                <CardBody>
                  
                  <p>ON TOUR:<br/>
                  <a href="http://mbearmusic.com">MammaBear (Atlanta, GA) Their rainbow roots rock sounds have arrived from another dimension where 1996 London has been swapped with Athens, GA. Relentless, driving sound that will have you rocking throughout the night.</a><br/><br/>
                  <p>LOCAL SUPPORT:</p>
                  <a href='www.theTrillionsBand.com'>The Trillions - Shred Pop</a><br/>
                  <a href='http://nightcreatureband.wordpress.com'>NIGHTCREATURE - glam garage punk rock n' roll</a><br/>
                  <a href='https://madabbey.bandcamp.com/releases'>Mad Abbey - Rock/Alternative</a>
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
          <h1 className='date'>MAR. 7th, 2020<br/><h3 className="time">8:30pm</h3></h1>
          </Col>
          <hr/>
          <Col>
          <h2 classname='showTitle'>Sleepwalkers, Landon Elliot, Deli Kings<br/></h2>
          <div>
          <br/>
            <Button color="primary" id="toggler" className="detailsBtn" style={{ marginBottom: '1rem' }}>
              More Details
            </Button>
            <hr/>
            <UncontrolledCollapse toggler="#toggler">
              <Card className='detailsCard'>
                <CardBody>
                  
                  <p>This is an all local bill!<br/>
                  <a href="https://www.sleepwalkersmusic.com/">SLEEPWALKERS - Angelic melodies, deep bass rifts, catchy booty shaking jamz
</a><br/><br/>
                  
                  <a href='https://www.landonelliott.com/'>Landon Elliot - Americana; Alt-Rock</a><br/>
                  <a href='https://omgdelikings.bandcamp.com/'>Deli Kings - Glam Rock N' Roll</a><br/>
                  
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
          <h1 className='date'>MAR. 20th, 2020<br/><h3 className="time">8:30pm</h3></h1>
          </Col>
          <hr/>
          <Col>
          <h2 classname='showTitle'>When Particles Collide (ME), Railgun, Beeline, SoulBurst<br/></h2>
          <div>
          <br/>
            <Button color="primary" id="toggler" className="detailsBtn" style={{ marginBottom: '1rem' }}>
              More Details
            </Button>
            <hr/>
            <UncontrolledCollapse toggler="#toggler">
              <Card className='detailsCard'>
                <CardBody>
                  
                  <p>ON TOUR:<br/>
                  <a href="https://www.whenparticlescollide.com">When Particles Collide (Bangor, ME) - heavy, powerful, technically precise rock band.</a><br/><br/>
                  <p>LOCAL SUPPORT:</p>
                  <a href='https://soundcloud.com/railgunrva'>Railgun -  Rock/Funk/Alt Rock/Punk</a><br/>
                  <a href='https://beelineband.bandcamp.com/'>Beeline RVA - Sometimes fuzzy, sometimes sour, usually catchy indie rock n roll</a><br/>
                  <a href='https://open.spotify.com/album/30UVceu1E93nHQO2sVR3L5'>SoulBurst - Cosmic soul jamz</a>
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
          <h1 className='date'>APR. 3rd, 2020<br/><h3 className="time">8:30pm</h3></h1>
          </Col>
          <hr/>
          <Col>
          <h2 classname='showTitle'>Reflex Machine, The Russells, Eliza Battle, Grem Smiley<br/></h2>
          <div>
          <br/>
            <Button color="primary" id="toggler" className="detailsBtn" style={{ marginBottom: '1rem' }}>
              More Details
            </Button>
            <hr/>
            <UncontrolledCollapse toggler="#toggler">
              <Card className='detailsCard'>
                <CardBody>
                  
                  <p>ON TOUR:<br/>
                  <a href="https://www.reflexmachine.com/">Reflex Machine - Avant-Garde/Post Metal. NEW CD, "INTERZONE", OUT NOW!!</a><br/><br/>
                  <a href="https://therussells.bandcamp.com/">The Russells (Philly, PA) - Noise Rock/Metal. Kurt Russell has never brought so much rock and good times to your earholes.</a><br/><br/>
                  <p>LOCAL SUPPORT:</p>
                  
                  <a href='https://elizabattleva.bandcamp.com/releases'>Eliza Battle - Hardcore, Emo, Rock</a><br/>
                  <a href='https://gremsmiley.bandcamp.com'>Grem Smiley - Punk rock/Indie rock</a>
                  </p>
                </CardBody>
              </Card>
            </UncontrolledCollapse>
          </div>
          </Col>
        </Row>
       {/* END SHOW ENTRY */}
      </div>
      <br></br>
      </main>
  

    );
  }
}

Shows.propTypes = {
  text: PropTypes.string.isRequired
};

export default Shows;
