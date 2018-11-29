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
  <section className="home" id="home">
    <div className="container">
      <TopBar />
      <div className="home-title">
        <h2 className="page-subtitle">Akai</h2>

        <h1 className="page-title">Webstarter 2017</h1>
        <div className="divider" />

        <p className="page-description">
          Zbiór prelekcji wprowadzających w świat webdevelopmentu przygotowanych
          przez firmy IT we współpracy z Akademickim Kołem Aplikacji
          Internetowych.
        </p>

        <a href="#" className="button">
          Zarezerwuj miejsce
        </a>
      </div>

      <a className="home-scroll" href="#">
        <div className="home-icon-container">
          <div className="home-scroll-description">Dowiedz się więcej</div>
          <i className="fa fa-chevron-down" aria-hidden="true" />
        </div>
      </a>
    </div>
  </section>
));
