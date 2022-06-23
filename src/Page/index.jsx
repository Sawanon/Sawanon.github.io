import React from "react";
import { MdEmail, MdCall } from "react-icons/md";

function Home({}) {
  let now = new Date();
  let since = new Date("2021-07-01");
  let left = now - since;
  const realLeft = parseInt(parseInt(left / 1000) / 60 / 60 / 24 / 30);
  const showDuration = () => {
    if (realLeft >= 12) {
      return `${realLeft / 12} year`;
    } else {
      return `${realLeft} month`;
    }
  };
  return (
    <div className="container">
      <div className="bg"></div>
      <div className="resume-container">
        <div className="left-side">
        <div className="img-container">
          <img
            className="img-self"
            src="../src/assets/IMG_2503.png"
          />
        </div>
          <div className="header-name-text">
            <div className="fullname-mobile">Sawanon Wattanasit</div>
            <div>Non</div>
          </div>
          <div className="header-container light">Profile</div>
          <div className="content-container content-light">
            I am now a software developer at AAPICO. I can work as a theme. I
            currently do the front-end and back-end, and also do both web and
            mobile.
          </div>

          <div className="header-container light">Skill</div>
          <div style={{ marginTop: "1rem" }}>
            <div className="row">
              <div className="col">
                <img src="../src/assets/kotlin.png" width={40} />
                <div className="skill-name">Kotlin</div>
              </div>
              <div className="col">Intermediate</div>
            </div>
            <div className="row">
              <div className="col">
                <img src="../src/assets/android.png" width={40} />
                <div className="skill-name">Android</div>
              </div>
              <div className="col">Intermediate</div>
            </div>
            <div className="row">
              <div className="col">
                <img src="../src/assets/php.png" width={40} />
                <div className="skill-name">PHP</div>
              </div>
              <div className="col">Proficient</div>
            </div>
            <div className="row">
              <div className="col">
                <img src="../src/assets/react.png" width={40} />
                <div className="skill-name">React</div>
              </div>
              <div className="col">Intermediate</div>
            </div>
            <div className="row">
              <div className="col">
                <img src="../src/assets/flutter.png" height={40} />
                <div className="skill-name">Flutter</div>
              </div>
              <div className="col">Intermediate</div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="header-name-text fullname-desktop">Sawanon Wattanasit</div>
          <div className="header-container dark">Profile</div>
          <div className="content-container content-dark">
            <div className="sub-header-text">NANOTEC a member of NSTDA</div>
            <div className="content-text">
              Internship software developer (PHP) Make a project for automated
              locker using PHP to control the microcontroller.
            </div>
          </div>
          <div className="content-container content-dark">
            Since 01-07-21 to now ({showDuration()}) <br />
            <div className="sub-header-text">
              AAPICO hitech public company limited
            </div>
            <div className="content-text">
              Software developer develop system in company with react, develop
              application about taxi and upload to playstore, and now develop
              application about navigation with flutter.
            </div>
          </div>
          <div className="header-container dark">Education</div>
          <div className="content-container content-dark">
            High Vocational Certificate Thaluang Cementhaianusorn
            TechnucalCollege (IT) (
            <span className="th-text">
              วิทยาลัยเทคนิคท่าหลวงซิเมนต์ไทยอนุสรณ์
            </span>
            )
          </div>
          <div className="content-container content-dark">
            Bachelor of Industrial Technology KING MONGKUT'S UNIVERSITY OF
            TECHNOLOGY NORTH BANGKOK (ITI) <br />(
            <span className="th-text">
              มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ วิทยาเขตปราจีนบุรี
            </span>
            )
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <div className="contact-container">
          <div className="contact-header-text">Contact</div>
          <div className="row-contact">
            <div className="col-contact">
              <MdEmail />
            </div>
            <div className="col-contact select-text">sawanon01@hotmail.com</div>
          </div>
          <div className="row-contact">
            <div className="col-contact">
              <MdCall />
            </div>
            <div className="col-contact select-text">096-890-8467</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
