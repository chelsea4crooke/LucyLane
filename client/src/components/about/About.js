import React from 'react';
import { PropTypes } from 'prop-types';
import "../Jumbotron";
import Jumbotron from '../Jumbotron';

import "./about.css";

class About extends React.Component {
  render() {
    return (
      <main className="aboutBody"> 
      <br></br>
        <Jumbotron>
          <h1>About Lucy Lane</h1>
            <message className="jMess">This is a little bit of our history and some frequently asked questions about the venue.</message>
        </Jumbotron>
        {/* <br></br> */}
      <div className="container">
        <h1 className="aboutLead">Lucy Lane's humble beginnings...</h1>
        <br></br>
          <div className="aboutText">
              <p>Andrew Westbrook moved into the Lucy Lane house in 2010. Being heavily involved in the Richmond music scene and driven by aspersions to build a supportive community, he envisioned the wooded property to operate much like an artistic commune. This “diamond in the rough” was seen as a place where people could come be themselves, be safe, have meals together, share common interests, and curate one’s creative mediums. The lack of similar minded roommates never quite solidified the idea into a formal concept, but the idea was always there.</p>
              <p>In 2013, Andrew aimlessly reconnected with a former co worker, Andrew Smith, who has previously been making music. Both were currently looking to form a new band, and the enjoyment of similar genres made the project tangible. With the addition of mutual friends David Bowman and Brittany Thompson, Lucy in Battle Armor formed and began practicing at the house.</p>
              <p>After a couple of years writing music in Westbrook’s basement, Lucy started to hit the Richmond music scene. After several shows, the band began to feel included within the diverse and immersive community. Local acts were very supportive, and the group began to network with bands and learn about the needs of a constantly evolving city. In one passing conversation, it was discovered that an upcoming showcase was double booked, and was at risk of being canceled unless they found a new location. In the spirit of giving back to the community, Lucy in Battle Armor decided to open up their practice space and host the show.</p>
              <p>The touring band was enamored with the willingness to help out on such short notice, and the show was a success, despite Lucy’s very limited experience in production management. Word of mouth began to spread, and suddenly several other groups were reaching out with the anticipation of locking down a venue for their personal tours. With no actual intent on starting or running a house venue, the joy and pleasure of helping the music community began to take hold, and the vision began to take form. After several years of personal investment, charitable donors, and selfless volunteers, Westbrook’s dream started to become a reality and Lucy Lane Love began to manifest.</p>
              <p>Currently, Andrew Westbrook, Andrew Smith, and Miranda Jaroneski live at Lucy Lane. Our mission is to offer a musical oasis for bands on the road, and create a tight knit community amongst the Richmond scene; an inclusive atmosphere where you can be yourself and witness a showcase of talented artists across a multitude of experience and backgrounds. We’d love for you to stop by and join us.</p>
          </div>
          
          <br/>
          </div>
          <ul className="list-group list-group-flush rules">
          <li className="list-group"><h3 className="rulesH3">We only have a few simple rules...</h3></li>
            <li className="list-group">Have fun</li>
            <li className="list-group">Spread love</li>
            {/* <li className="list-group">Don't die</li> */}
            <li className="list-group">Don't drive drunk.</li>
            <li className="list-group">Don't let your friends drive drunk.</li>
            <br/>
            <h3 className="harassment">**HARASSMENT OF ANY KIND WILL NOT BE TOLERATED!**</h3>
            </ul>
          {/* <br></br> */}
          <div className="container">
          <h2 className="facts">FAQ's:</h2>
          <br></br>
          <div className="list-group">
            <li className="list-group-item FAQ">So what is a DIY venue exactly?</li>
              <p className="answer">A DIY venue is a place for all artists to come and share their craft in a non-traditional way. We do not make profit from any donations. We focus on making our home a place where everyone feels welcome and safe, a sanctuary to hang out with old and new friends alike while experiencing live music.</p>
            <li className="list-group-item FAQ">
              How do you go about booking shows?
            </li>
              <p className="answer" >The process is usually pretty straight forward. A band on tour will give us dates they’d like to play and if were available we find local acts that fit the sound and we’ve got ourselves a show. We do not typically book weeknights and to maintain balance we do not book every weekend every month.</p>
            <li className="list-group-item FAQ">
                  What’s the address?
            </li>
                <p className="answer">We do not give out the address publicly. It is our home after all. If you’d like to come to a show, fill out this form and we’ll send you a password. You’ll be able to access the address and all directions 8:00am the day of the show. You will not be able to access it after the show is over and the password changes every show.</p>
            <li className="list-group-item FAQ">
                    Do you sell booze?
            </li>
                <p className="answer">NOPE! Every Lucy Lane show is BYOB. We ask to please be responsible when drinking and getting home. You are welcome to rideshare to and from the show. We will not let you drive intoxicated. That’s just not cool.</p>
            <li className="list-group-item FAQ">
                  Do you sell food?
            </li>
                <p className="answer">Wouldn’t that be awesome? We do not sell food during shows. If you’d like to bring us snacks, that’d be cool.
                </p>
            <li className="list-group-item FAQ">
                  What is the cost of the event and what does it go to?
            </li>
                <p className="answer">For each event we ask that you give a $5-$7 donation which goes to the band on tour for gas and road sandwiches.
                </p>
            <li className="list-group-item FAQ">
                  Do you offer any outlets for non musical artists? 
            </li>
                <p className="answer">Yes! We’ve hosted jewelry makers, painters, screenprinters, and more to sell their goods! Shoot us an email and we’ll get you set up!
                </p>
            <li className="list-group-item FAQ">
                  How do I become a staff member of LL?
            </li>
                <p className="answer">Pay rent! We have plenty of opportunities if you’d like to volunteer! You guessed it- send us an email.
                </p>
            <li className="list-group-item FAQ">
                  How else can I contribute to making LL better?
            </li>
                <p className="answer">Bring your friends, be nice to people, pick up your trash.
                </p>
          </div>
        </div>
        <br></br>
      </main>
    );
  }
}

About.propTypes = {
  text: PropTypes.string.isRequired
};

export default About;