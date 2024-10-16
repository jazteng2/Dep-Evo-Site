import React from "react";
import './css/main.css';

import Logo from  './images/SwinDevOps.png'
import TheBull from './images/Swinbull_logo.png'
import Nathan from './images/Nathan.png'
import Jared from './images/Jared.png'
import Darragh from './images/Darragh.png'
import Luke from './images/Luke.png'
import Partner1 from './images/Docker.png'
import Partner2 from './images/Github.png'
import Partner3 from './images/Jenkins.png'

class Welcome extends React.Component { 
    render() { 
        return ( 

<div className="main">
<div class="wrapper bgded overlay">

  <div id="pageintro" class="hoc clear"> 
    
    <div class="one_half first">
      <h1 class="uppercase" style={{ paddingTop: "75px"}}><b>SwinDevOps - Test WebHook 5</b></h1>
      <h2 class="heading">Your Partner in Continuous Integration and Continuous Deployment Solutions</h2>
      <p>Enhance your software development lifecycle with SwinDevOps! Our experienced team is equipped with the latest tools and methodologies, ensuring seamless automation and delivery.</p>
      <p>We aim to maximize your business value by optimizing your CI/CD pipelines, reducing delivery times, and ensuring reliable, fast releases.</p>
      <p><a class="btn medium inverse" href="about">Explore Our Solutions &raquo;</a></p>
    
    </div>
    
    <div class="one_half"><a href="about"><img src={Logo} alt="DevOps Solutions"/></a></div>
  </div>

  <div class="wrapper row3">

  <main class="hoc container clear"> 
    
    <div class="center btmspace-50" >
      <h3 class="font-x2 nospace" style = {{ marginBottom: '65px;'}}><b>Build, Test, Deploy with Confidence</b></h3>
      <p class="nospace">Empowering Your Development Pipeline</p>
    </div>

    <ul class="nospace group services">
      <li class="one_third first">
        <article><a href="#"><i class="fa fa-cogs"></i></a>
          <h6 class="heading">Automation</h6>
          <p>Streamline your software delivery with automated testing, integration, and deployment across diverse environments.&hellip;</p>
        </article>
      </li>
      <li class="one_third">
        <article><a href="#"><i class="fa fa-check-circle"></i></a>
          <h6 class="heading">Excellence</h6>
          <p>We provide scalable solutions that adapt to your business needs, ensuring a robust, efficient CI/CD pipeline tailored to your requirements.&hellip;</p>
        </article>
      </li>
      <li class="one_third">
        <article><a href="#"><i class="fa fa-users"></i></a>
          <h6 class="heading">Support</h6>
          <p>Our dedicated team offers 24/7 support to ensure the smooth operation of your pipelines and rapid response to any issues.&hellip;</p>
        </article>
      </li>
    </ul>

    <div class="clear"></div>
  </main>


</div>
    <div class="wrapper bgded overlay">
      <div class="hoc container clear"> 
        <div class="center btmspace-50">
          <h3 class="font-x2 nospace"><b>OUR PARTNERS</b></h3>
        </div>
    
      <ul class="nospace group elements" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0', margin: '0', listStyle: 'none' }}>
        <li class="one_third first" >

          <figure  style={{  paddingTop: '30px'}} ><img class="Profile" src={Partner1} alt="" style={{  marginBottom: '28px'}}/>
            <figcaption style={{ marginBottom: '23px' }}><a href="https://hub.docker.com/">DOCKER</a></figcaption>
          </figure>
        </li>
        <li class="one_third" >
          <figure><img class="Profile" src={Partner2} alt=""  />
            <figcaption><a href="https://github.com/">GITHUB</a></figcaption>
          </figure>
        </li>
        <li class="one_third">
          <figure><img class="Profile"src={Partner3} alt=""  style={{ marginBottom: '15px' }}/>
            <figcaption><a href="https://www.jenkins.io/">JENKINS</a></figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </div>
</div>

<div class="wrapper bgded overlay" style={{ textAlign: 'center', padding: '0px'}}>
  <div class="hoc container clear"> 
    <div class="center btmspace-50">
      <h3 class="font-x2 nospace"><b>The Team</b></h3>
      <p class="nospace">View our team! Working together for the past 25+ years having experience in DevOps...</p>
    </div>

    <ul class="nospace group elements" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
      
    
      <li class="one_third"  >
      <figure><img class="Profile"src={Luke} alt="" style={{scale:'0.9', width: '210px', height: '283px',padding:'5px', marginBottom: '5px'}}/>
          <figcaption><a href="mailto:104024295@student.swin.edu.au">Luke Fares <br></br> 104024295</a></figcaption>
        </figure>
      </li>
      <li class="one_third">
        <figure style={{top:'-9px'}}><img class="Profile"src={Darragh} alt="" style={{scale:'0.9', width:'200px', height:'305px', padding:'5px', bottom: '20px'}}/>
          <figcaption  ><a href="mailto:104024295@student.swin.edu.au">Darragh Hazell <br></br> 103063912</a></figcaption>
        </figure>
      </li>
      
        <li class="one_third">
      <figure><img class="Profile"src={Jared} alt="" style={{scale:'0.9', width: '3000px', height: '308px',}}/>
          <figcaption><a href="mailto:103492121@student.swin.edu.au">Jared Peng Teng <br></br> 103492121</a></figcaption>
        </figure>
      </li>

      <li class="one_third" style={{ 'text-align': "center", backgroundColor: "transparent"}}>
      <figure><img class="Profile"src={Nathan} alt="" />
          <figcaption ><a href="https://github.com/NathanTrung">Nathan Trung <br></br> 103885695</a></figcaption>
        </figure>
      </li>
      
    </ul>
  </div>
</div>
</div>

        );
    }
}
export default Welcome;