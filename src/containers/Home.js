// import React from 'react'
// import { withSiteData } from 'react-static'
// //
// import logoImg from '../logo.png'

// export default withSiteData(() => (
//   <div>
//     <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
//     <img src={logoImg} alt="" style={{ display: 'block', margin: '0 auto' }} />
//   </div>
// ))

import React from "react";
import { withSiteData } from "react-static";
import { TopBar } from "../components/TopBar";

export default withSiteData(() => (
  <section
    className="home"
    id="home"
    style={{ backgroundImage: "url(/img/background.png)" }}
  >
    <div className="container">
      <TopBar />
      <div className="home-title">
        {/* <h2 className="page-subtitle">Akai</h2> */}

        <h1 className="page-title">Akademickie Koło Aplikacji Internetowych</h1>
        <div className="divider" />

        <p
          css={`
            margin: 0 auto 50px;
            max-width: 700px;
          `}
        >
          Działamy na terenie całego Poznania. Damy Ci szansę rozwinąć Twoją
          pasję oraz wiedzę. Pokażemy Ci jak rozpocząć karierę bazując na
          doświadczeniu i umiejętnościach - nie na papierze.
          <br />
          Serdecznie zapraszamy do wzięcia udziału w naszych wydarzeniach - są
          bezpłatne i otwarte dla wszystkich.
        </p>

        <a
          href="https://apps.akai.org.pl"
          className="button"
          css={`
            background-color: #f9a11b;
            border: 0;
            border-radius: 25px;
            color: #eee;
            cursor: pointer;
            font-weight: 600;
            margin: 0 auto;
            padding: 15px 45px;
            transition: background-color 0.3s ease-out;

            &:hover {
              background-color: #fa7800;
            }
          `}
        >
          Zobacz nasze projekty
        </a>
      </div>

      {/* <a className="home-scroll" href="https://apps.akai.org.pl">
        <div className="home-icon-container">
          <div className="home-scroll-description">
            Zobacz nasze projekty...
          </div>
          <i className="fa fa-chevron-down" aria-hidden="true" />
        </div>
      </a> */}
    </div>
  </section>
));
