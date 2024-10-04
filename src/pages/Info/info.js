import React from "react";
import './css/main.css';
import Logo from './images/SwinDevOps.png';
import v7 from './images/v7_118.png';
import v72 from './images/v7_125.png';
import { line } from "framer-motion/client";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false, // State to track hover
    };
  }

  render() {
    const { isHovered } = this.state; // Destructure isHovered from state

    return (
      <div className="main">
        <div className="wrapper bgded overlay">
          <div id="pageintro2" className="hoc clear">
            <div className="one_half first">
              <h1 className="uppercase"><b>WHO WE ARE</b></h1>
              <p>SwinDevOps is a leading solution provider for Continuous Integration and Continuous Deployment (CI/CD) pipelines, helping businesses streamline their software development processes.</p>
              <p>Our team of experts combines years of experience in software automation and DevOps methodologies to deliver fast, reliable, and scalable solutions for seamless deployment.</p>
              <p>Build with Confidence. Deploy with Precision.</p>
            </div>
            <div className="one_half"><a href="#"><img src={v72} alt="SwinDevOps Logo" /></a></div>
          </div>

          <div className="wrapper row3">
            <main className="hoc container clear">
              <div className="center btmspace-50">
                <h3 className="font-x2 nospace"><b>OUR VALUES</b></h3>
              </div>
              <ul className="nospace group services">
                <li className="one_third first">
                  <article>
                    <img src={v7} alt="Automation Icon" />
                  </article>
                </li>
                <li className="one_third">
                  <article>
                    <i className="fa fa-cogs"></i>
                    <h6 className="heading">Automation-Driven</h6>
                    <p>Automation is at the heart of everything we do. We ensure your CI/CD pipelines are fully automated, allowing you to focus on innovation and delivery speed.&hellip;</p>
                  </article>
                </li>
                <li className="one_third">
                  <article>
                    <i className="fa fa-cloud"></i>
                    <h6 className="heading">Cloud-Based</h6>
                    <p>We leverage cutting-edge cloud technologies to build robust and scalable deployment solutions that fit your business needs.&hellip;</p>
                  </article>
                </li>
              </ul>
              <div className="clear"></div>
            </main>
          </div>
        </div>

        <div className="wrapper bgded overlay">
          <div className="hoc container clear">
            <div className="center btmspace-50">
              <h3 className="font-x2 nospace"><b>CONTACT US</b></h3>
              <p className="nospace">Connect with us to enhance your CI/CD pipeline with cutting-edge solutions.</p>
            </div>
          </div>
        </div>

        <div className="wrapper bgded overlay" >
          <div className="hoc container clear" style = {{padding:'70px', paddingBotom: '0px'}}>
            <div className="center btmspace-50" ></div>
            <ul className="nospace group services" >
              <li className="one_third first" >
                <article style={{ top: "-300px"  }}>
                  <div className="v7_133">
                    <div className="v7_134"></div>
                    <div className="v7_135">
                      <span className="v7_136">Address</span>
                      <span className="v7_137">
                        <a href="https://www.google.com/maps/place/John+St,+Hawthorn+VIC+3122/data=!4m2!3m1!1s0x6ad6422d82d423fd:0xa36511772c8c752?sa=X&ved=2ahUKEwisiNLYqY6BAxU_mlYBHYTcCEgQ8gF6BAgPEAA&ved=2ahUKEwisiNLYqY6BAxU_mlYBHYTcCEgQ8gF6BAgQEAI"
                          style={{ color: "blue", textDecoration: "underline" }}>
                          John St, Hawthorn VIC 3122
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="v7_138">
                    <div className="v7_139"></div>
                    <div className="v7_140">
                      <span className="v7_141">Client Services</span>
                      <span className="v7_142"><a href="mailto:clientservices@SwinDevOps.com" style={{ color: "blue", textDecoration: "underline" }}>clientservices@SwinDevOps.com</a></span>
                      <span className="v7_143">+61 1300 794 628 (Mon to Fri 8:30-19:00 AEST)</span>
                    </div>
                  </div>
                  <div className="v7_144">
                    <div className="v7_145"></div>
                    <div className="v7_146">
                      <span className="v7_147">Email Us</span>
                      <span className="v7_148">
                        <a href="mailto:103885695@student.swin.edu.au, " 
                          style={{ color: "blue", textDecoration: "underline" }}>
                          team@swindevops.com
                        </a>
                      </span>
                    </div>
                  </div>
                </article>
              </li>
              <li className="one_third">
              <article
  style={{
    position: 'relative', // Ensure the position is relative for scaling
    transform: 'translate(110px, -225px) scale(1.3)', // Move up and to the right
    transition: 'transform 0.5s ease', // Add transition for smooth effect
    overflow: 'hidden', // Hide overflow to maintain the aspect ratio
    width: '450px', // Ensure full width
    height: '450px', // Adjusted height for better visibility
    paddingTop: '0', // Remove any top padding
    paddingBottom: '0', // Remove any top padding

  }}
>

                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0, borderInlineStyle: line }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3211908887973!2d145.0311255158471!3d-37.81430587975147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6422d82d423fd%3A0xa36511772c8c752!2sJohn%20St%2C%20Hawthorn%20VIC%203122!5e0!3m2!1sen!2sau!4v1687719282891!5m2!1sen!2sau"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </article>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
