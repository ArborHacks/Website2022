import logo from '../images/logo.png';
import banner from '../images/banner.JPG';
import React, { Component } from 'react';
import './AH2022.css';
class AH2022 extends Component {
  render = () => {
    return(
        <div class="pageContent">
            <div id="bigHeader">
            <img src={logo} className="App-logo" alt="logo" /> <br/>
            <span class="hack">Hackathon 2022</span>
            <h2>Saturday, April 16th <br/>
                1:00pm - 3:30pm <br/>
                Format: Virtual <br/>
                <a href="https://umich.zoom.us/j/92125460400">Zoom Link Here</a><br/>
            </h2>
            <p>
              Sign-up form <a href="https://forms.gle/oVP61Lu5UJnU3JHm8">here</a>
            </p>
            </div>
            <img src={banner} id="headerBackground"/>
            <div id="details" class="hack">
                <h3> Hackathon 2022 Details </h3>
              <p id="eventBlurb">
                Arborhacks is back! We're doing a virtual hackathon this year, but in the spirit of Arborhacks, we've made some pretty challenging questions! 
                <br/> <br/>
                As up-and-coming hackers, you'll be writing solutions to hypothetical scenarios. All that's required to participate is any device that can run browsers, and a working hacker brain! <br/> <br/>
                If you don't have a coding setup on your computer, don't worry! There are web-based code IDE's that you can use (e.g. replit.com). The hackathon will be limited to C++. <br/> <br/>
                The event begins with a briefing over zoom at 1pm. At the end of the briefing, we'll show you the hidden link in the Arborhacks website. Once we provide the necessary information for you to begin, you're free to start! There are no particular restrictions on what resources you're allowed to use, so feel free to look things up if you're stuck! <br/> <br/>
                The autograder will automatically stop accepting submissions at 3:15pm. Be sure that you submit your code before that time. <br/> <br/>
                Tips: <br/>
                <ul>
                  <li>Make backups of your code! This can be as simple as making a notepad file and copy-pasting everything in, but it's a lifesafer when things go wrong!</li>
                  <li>Try coming up with your own test cases for your code! It's much faster to test that way than using the autograder</li>
                </ul>
              </p>
            </div> 
        </div>
    );
  }
}

export default AH2022;
