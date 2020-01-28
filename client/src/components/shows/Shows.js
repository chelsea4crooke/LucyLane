import React from 'react';
import { PropTypes } from 'prop-types';
import "./shows.css";
import { Row, Col } from 'reactstrap';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';


class Shows extends React.Component {
  render() {
    return (
      <main className="showsBody">
      
      <div className="containerShows">
        {/* BEGIN SHOW ENTRy */}
        <Row>
          <Col >
          <h1 className='date'>FEB 8th 2020<br/><h3 className="time">8:30pm</h3></h1>
          </Col>
          <Col>
          <h2 className='showTitle'>Shadow Year (NY), <br/>Dumb Waiter,<br/> Gnawing,<br/> Cream Dream<br/></h2>
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
          <h1 className='date'>FEB 22nd 2020<br/><h3 className="time">8:30pm</h3></h1>
          </Col>
          <hr/>
          <Col>
          <h2 className='showTitle'>MammaBear(GA), <br/>The Trillions, <br/>Nightcreature, <br/>Mad Abbey<br/></h2>
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
          <h1 className='date'>MAR 7th 2020<br/><h3 className="time">8:30pm</h3></h1>
          </Col>
          <hr/>
          <Col>
          <h2 className='showTitle'>Sleepwalkers, <br/>Landon Elliot, <br/>Deli Kings<br/></h2>
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
          <h1 className='date'>MAR 20th 2020<br/><h3 className="time">8:30pm</h3></h1>
          </Col>
          <hr/>
          <Col>
          <h2 className='showTitle'>When Particles Collide (ME), <br/>Railgun, <br/>Beeline, <br/>SoulBurst<br/></h2>
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
          <h1 className='date'>APR 3rd 2020<br/><h3 className="time">8:30pm</h3></h1>
          </Col>
          <hr/>
          <Col>
          <h2 className='showTitle'>Reflex Machine, <br/>The Russells, <br/>Eliza Battle, <br/>Grem Smiley<br/></h2>
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
