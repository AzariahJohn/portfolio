import './App.css';
import react from './react.svg'
import mysql from './mysql.svg'
import javascript from './javascript.svg'
import git from './git.svg'
import java from './java.svg'
import adobexd from './adobexd.svg'
import nodejs from './nodejs.svg'
import insta from './insta.svg'
import twitter from './twitter.svg'
import github from './github.svg'
import linkedin from './linkedin.svg'
import dribbble from './dribbble.svg'
import leetcode from './leetcode.svg'
import hackerrank from './hackerrank.svg'
import gmail from './gmail.svg'
import cpp from './cpp.svg'
import WebDevBoot from './WebDevelopmentBootcamp.pdf'
import darkweb from './Darkweb.pdf'
import ethicalHacking from './EthicalHackingFromScratch.pdf'
import masterclass from './EthicalHackingMasterclass.pdf'
import gcp from './GCP.pdf'
import malware from './MalwareHacking.pdf'
import oop from './OOPPython.pdf'
import socialengg from './SocialEngineering.pdf'
import se8 from './se8.pdf'

function App() {

  return (
    <div className="outer-container">
      <div className="nav-bar-outer">
        <h2 className="logo">A<span className="color-diff">Z</span>Jhn</h2>
        <a href="#top"><button className="link btn-main">Home</button></a>
      </div>
      <div className="first-container" id="top">
        <div className="title">
          <h1 className="name">I'm Azariah John</h1>
          <h3 className="sub-title">Professional software and <br />
            fullstack Developer
          </h3>
        </div>
        <div className="some-text">
          <p className="some-text-content">Aspiring software engineer and full-stack 
          developer with a passion for designing and building websites and mobile apps 
          using the latest technologies, including proficiency in penetration testing.</p>
          <button className="btn-main"><a href="#tech">Explore</a></button>
        </div>
        
      </div>
      <div className="second-container" id="tech">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skill-card-container">
            <div className="skill-card">
              <div className="skill-name">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Python_icon_%28black_and_white%29.svg/2048px-Python_icon_%28black_and_white%29.svg.png" alt="" className="skill-img"/>
                <h2 className="skill-name">Python</h2>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-name">
                <img src={react} alt="" className="skill-img"/>
                <h2 className="skill-name">React Js</h2>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-name">
                <img src={mysql} alt="" className="skill-img"/>
                <h2 className="skill-name">MySql</h2>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-name">
                <img src={javascript} alt="" className="skill-img"/>
                <h2 className="skill-name">JavaScript</h2>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-name">
                <img src={git} alt="" className="skill-img"/>
                <h2 className="skill-name">GIT</h2>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-name">
                <img src={java} alt="" className="skill-img"/>
                <h2 className="skill-name">JAVA</h2>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-name">
                <img src={adobexd} alt="" className="skill-img"/>
                <h2 className="skill-name">UX / UI Designing</h2>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-name">
                <img src={nodejs} alt="" className="skill-img"/>
                <h2 className="skill-name">Node Js</h2>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-name">
                <img src={cpp} alt="" className="skill-img"/>
                <h2 className="skill-name">C Program</h2>
              </div>
            </div>
        </div>
      </div>
      <div className="third-container">
        <h1 className="cert-title">Certificate & Projects</h1>
        <div className="cert-outer-container">
          <a href={masterclass}>
            <div className="certificate-card">
              <p>Web Development Bootcamp</p>
              <p className="date-provider"><span className="period">Udemy .</span> 20/12/21 - 17/07/23</p>
            </div>
          </a>
          <a href={socialengg}>
            <div className="certificate-card">
              <p>Social Engineering from scratch</p>
              <p className="date-provider"><span className="period">Udemy .</span> 15/10/21 - 02/12/21</p>
            </div>
          </a>
          <a href={ethicalHacking}>
            <div className="certificate-card">
              <p>Ethical Hacking from scratch</p>
              <p className="date-provider"><span className="period">Udemy .</span> 23/08/21 - 17/12/21</p>
            </div>
          </a>
          <a href={malware}>
            <div className="certificate-card">
              <p>Website Hacking / Pentesting</p>
              <p className="date-provider"><span className="period">Udemy .</span> 02/08/20 - 11/08/20</p>
            </div>
          </a>
          <a href={WebDevBoot}>
            <div className="certificate-card">
              <p>Ethical Hacking Masterclass</p>
              <p className="date-provider"><span className="period">Udemy .</span> 02/08/21 - 17/12/21</p>
            </div>
          </a>
          <a href={darkweb}>
            <div className="certificate-card">
              <p>Anonymity and Dark Web</p>
              <p className="date-provider"><span className="period">Udemy .</span> 28/12/22 - 17/07/23</p>
            </div>
          </a>
          <a href={gcp}>
            <div className="certificate-card">
              <p>Google Cloud Specialization</p>
              <p className="date-provider"><span className="period">Coursera .</span> 20/11/21 - 07/03/22</p>
            </div>
          </a>
          <a href={oop}>
            <div className="certificate-card">
              <p>Object Oriented Programming</p>
              <p className="date-provider"><span className="period">Udemy .</span> 03/08/21 - 11/08/21</p>
            </div>
          </a>
          <a href={se8}>
            <div className="certificate-card">
              <p>OCJA Java SE8 Certification</p>
              <p className="date-provider"><span className="period">Oracle .</span> Completed on 31/03/23</p>
            </div>
          </a>
          <a href="#">
            <div className="certificate-card">
              <p>Three JS Journey</p>
              <p className="date-provider"><span className="period">Bruno Simon .</span> 15/02/23 - On Progress</p>
            </div>
          </a>
        </div>
        <div className="proj-outer-container">
          <a href="https://github.com/AzariahJohn/ThreeJaLab">
            <div className="proj-card">
              <p>VR Laboratory (Three JS)</p>
              <p className="date-provider-proj">Experience an immersive VR Laboratory powered by
              Three.js and React Three Fiber. Explore a virtual world with realistic 3D models, 
              interactive elements, and seamless user interaction. Conduct experiments, learn, 
              and engage with cutting-edge technology, all in a dynamic and visually stunning 
              virtual environment.
              </p>
            </div>
          </a>
          <a href="https://github.com/AzariahJohn/Interactivity">
            <div className="proj-card">
              <p>Three JS Interactivity</p>
              <p className="date-provider-proj">Unleash creativity with React Three Fiber's 
              interactive object mechanism. Seamlessly manipulate 3D objects with gestures, clicks, 
              and drag-and-drop. Empower users to explore, rotate, and interact with virtual elements 
              in real-time, elevating the immersive experience and making the virtual world come alive 
              like never before.
              </p>
            </div>
          </a>
          <a href="https://github.com/AzariahJohn/SustainableEnvironment">
            <div className="proj-card">
              <p>Accounts API (Sustainable Env)</p>
              <p className="date-provider-proj">Discover a secure Accounts API built on the MERN stack, 
              featuring seamless OTP authentication with Node.js. Safeguard user accounts with one-time 
              passwords, enhancing login security. Enjoy a reliable and scalable platform, integrating 
              MongoDB, Express.js, React, and Node.js, for robust and efficient user management and 
              authentication.
              </p>
            </div>
          </a>
          <a href="https://github.com/AzariahJohn/Symposium">
            <div className="proj-card">
              <p>College Symposium Webpage</p>
              <p className="date-provider-proj">Experience the ultimate College Symposium webpage, crafted 
              with React.js and adorned with captivating CSS animations. Immerse yourself in a visually 
              stunning journey through event details, schedule, and registration. The seamless blend of 
              cutting-edge technology and cool animations creates a dynamic and engaging virtual symposium 
              experience like never before.
              </p>
            </div>
          </a>
          <a href="https://github.com/AzariahJohn/Food-Website">
            <div className="proj-card">
              <p>Food Ordering website (DBMS)</p>
              <p className="date-provider-proj">Savor the flavors with our Food Ordering Website, meticulously 
              crafted using React.js, Node.js, and MongoDB Atlas. Explore a diverse menu, place orders with 
              ease, and track deliveries in real-time. Seamlessly combining cutting-edge technologies, our 
              platform offers a delightful and efficient culinary experience for foodies and restaurants.
              </p>
            </div>
          </a>
          <a href="https://github.com/Arunchandran13/Teachersmodule">
            <div className="proj-card">
              <p>Teachers Module VR Lab</p>
              <p className="date-provider-proj">Welcome to the Teachers Module of our VR Laboratory! Powered by 
              React.js, Firebase, and React Three Fiber, this cutting-edge addition allows educators to create 
              and manage virtual experiments, track student progress, and provide interactive lessons in a 
              dynamic 3D environment. Elevate learning to new heights with immersive educational experiences.
              </p>
            </div>
          </a>
          <a href="#">
            <div className="proj-card">
              <p>College Picker (Mini Project)</p>
              <p className="date-provider-proj">Discover your dream college with our College Picker Website, 
              expertly crafted using Node.js and React.js. Seamlessly browse through a vast database of 
              institutions, filter by preferences, and access valuable insights and reviews. Empowering 
              students with a user-friendly interface, finding the perfect college has never been easier.
              </p>
            </div>
          </a>
          <a href="https://github.com/AzariahJohn/Profix">
            <div className="proj-card">
              <p>Profix (PC Building Website)</p>
              <p className="date-provider-proj">Build your dream PC with our cutting-edge PC Building 
              Website, powered by React.js. Experience seamless login with Firebase authentication and 
              store your preferences securely in Firestore database. Create, customize, and compare 
              components, ensuring a tailored and efficient PC-building journey for tech enthusiasts 
              and gamers.
              </p>
            </div>
          </a>
          <a href="https://github.com/AzariahJohn/mac">
            <div className="proj-card">
              <p>MAC (Air Conditioner Website)</p>
              <p className="date-provider-proj">Chill in comfort with our AC Shop's dynamic static 
              website, creatively designed with React.js and captivating animations. Explore a 
              wide range of cooling solutions, view product details, and experience a visually 
              stunning journey through our offerings. Stay cool and make a statement with a website 
              that's as refreshing as our ACs!
              </p>
            </div>
          </a>
          <a href="https://github.com/AzariahJohn/SnakeAndLadder">
            <div className="proj-card">
              <p>3D Snake and Ladder (Unity)</p>
              <p className="date-provider-proj">Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Dolor nihil esse quaerat fugit laboriosam iure! Totam fugiat, qui 
                quibusdam eveniet mollitia fugit odit quod voluptate reiciendis. Sed optio 
                voluptates alias exercitationem quia beatae eius ipsa fugit, enim, sequi, sit 
                pariatur.
              </p>
            </div>
          </a>
          <a href="https://dribbble.com/azariahjhn">
            <div className="proj-card">
              <p>UX / UI Designs (Adobe XD)</p>
              <p className="date-provider-proj">Embark on a thrilling journey with our 3D Snake and 
              Ladder Game, crafted with Unity. Roll the dice, climb ladders, and beware of slippery 
              snakes in this classic board game reimagined in a captivating 3D world. Experience 
              nostalgia and family fun as you race to the top for victory!
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="fourth-container">
        <div className="social-container">
          <a href="https://www.instagram.com/azariahjhn/">
            <div className="social-card">
              <img src={insta} alt="" className="social-img"/>
            </div>
          </a>
          <a href="https://twitter.com/azrjhn">
            <div className="social-card">
              <img src={twitter} alt="" className="social-img"/>
            </div>
          </a>
          <a href="https://dribbble.com/azariahjhn">
            <div className="social-card">
              <img src={dribbble} alt="" className="social-img"/>
            </div>
          </a>
          <a href="mailto:azariahjohnofficial@gmail.com">
            <div className="social-card">
              <img src={gmail} alt="" className="social-img"/>
            </div>
          </a>
          <a href="https://leetcode.com/azariahjhn/">
            <div className="social-card">
              <img src={leetcode} alt="" className="social-img"/>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/azj/">
            <div className="social-card">
              <img src={linkedin} alt="" className="social-img"/>
            </div>
          </a>
          <a href="https://www.hackerrank.com/azariahjhn?hr_r=1">
            <div className="social-card">
              <img src={hackerrank} alt="" className="social-img"/>
            </div>
          </a>
          <a href="https://github.com/AzariahJohn">
            <div className="social-card">
              <img src={github} alt="" className="social-img"/>
            </div>
          </a>
        </div>
      </div>
      <div className="fifth-container">
        <p className="footer">© Azariah John B S</p>
        <p className="footer number">+91 9345987246</p>
      </div>
    </div>
  );
}

export default App;
