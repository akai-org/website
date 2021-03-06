import React from "react";
import { Router, Link } from "react-static";
import styled, { injectGlobal } from "react-emotion";
import { hot } from "react-hot-loader";
//
import Routes from "react-static-routes";

injectGlobal`
  @import url(https://fonts.googleapis.com/css?family=Quicksand:400,600,700);@font-face{
  font-family: Quicksand;
  font-style: normal;
  font-weight: 300;
  src: local("Quicksand Light"),local(Quicksand-Light),url(//fonts.gstatic.com/s/quicksand/v6/qhfoJiLu10kFjChCCTvGlHZ2MAKAc2x4R1uOSeegc5U.eot?#) format("eot"),url(//fonts.gstatic.com/s/quicksand/v6/qhfoJiLu10kFjChCCTvGlOgdm0LZdjqr5-oayXSOefg.woff2) format("woff2"),url(//fonts.gstatic.com/s/quicksand/v6/qhfoJiLu10kFjChCCTvGlHhCUOGz7vYGh680lGh-uXM.woff) format("woff"); }
@font-face{
  font-family: Quicksand;
  font-style: normal;
  font-weight: 400;
  src: local("Quicksand Regular"),local(Quicksand-Regular),url(//fonts.gstatic.com/s/quicksand/v6/sKd0EMYPAh5PYCRKSryvW_Y6323mHUZFJMgTvxaG2iE.eot?#) format("eot"),url(//fonts.gstatic.com/s/quicksand/v6/sKd0EMYPAh5PYCRKSryvW1tXRa8TVwTICgirnJhmVJw.woff2) format("woff2"),url(//fonts.gstatic.com/s/quicksand/v6/sKd0EMYPAh5PYCRKSryvWz8E0i7KZn-EPnyo3HZu7kw.woff) format("woff"); }
@font-face{
  font-family: Quicksand;
  font-style: normal;
  font-weight: 500;
  src: local("Quicksand Medium"),local(Quicksand-Medium),url(//fonts.gstatic.com/s/quicksand/v6/FRGja7LlrG1Mypm0hCq0DnZ2MAKAc2x4R1uOSeegc5U.eot?#) format("eot"),url(//fonts.gstatic.com/s/quicksand/v6/FRGja7LlrG1Mypm0hCq0Dugdm0LZdjqr5-oayXSOefg.woff2) format("woff2"),url(//fonts.gstatic.com/s/quicksand/v6/FRGja7LlrG1Mypm0hCq0DnhCUOGz7vYGh680lGh-uXM.woff) format("woff"); }
@font-face{
  font-family: Quicksand;
  font-style: normal;
  font-weight: 700;
  src: local("Quicksand Bold"),local(Quicksand-Bold),url(//fonts.gstatic.com/s/quicksand/v6/32nyIRHyCu6iqEka_hbKsnZ2MAKAc2x4R1uOSeegc5U.eot?#) format("eot"),url(//fonts.gstatic.com/s/quicksand/v6/32nyIRHyCu6iqEka_hbKsugdm0LZdjqr5-oayXSOefg.woff2) format("woff2"),url(//fonts.gstatic.com/s/quicksand/v6/32nyIRHyCu6iqEka_hbKsnhCUOGz7vYGh680lGh-uXM.woff) format("woff"); }


html{
  line-height: 1.15;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%; }
h1{
  font-size: 2em;
  margin: 0.67em 0; }
hr{
  box-sizing: content-box;
  height: 0;
  overflow: visible; }
main{
  display: block; }
pre{
  font-family: monospace, monospace;
  font-size: 1em; }
a{
  background-color: transparent;
  -webkit-text-decoration-skip: objects; }
abbr[title]{
  text-decoration: underline;
  text-decoration: underline dotted; }
b,
strong{
  font-weight: bolder; }
code,
kbd,
samp{
  font-family: monospace, monospace;
  font-size: 1em; }
small{
  font-size: 80%; }
img{
  border-style: none; }
svg:not(:root){
  overflow: hidden; }
button,
input,
optgroup,
select,
textarea{
  margin: 0; }
button{
  overflow: visible;
  text-transform: none; }
button,
[type="button"],
[type="reset"],
[type="submit"]{
  -webkit-appearance: button; }
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner{
  border-style: none;
  padding: 0; }
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring{
  outline: 1px dotted #333; }
fieldset{
  padding: 0.35em 0.75em 0.625em; }
input{
  overflow: visible; }
legend{
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal; }
progress{
  display: inline-block;
  vertical-align: baseline; }
select{
  text-transform: none; }
textarea{
  overflow: auto; }
[type="checkbox"],
[type="radio"]{
  box-sizing: border-box;
  padding: 0; }
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button{
  height: auto; }
[type="search"]{
  -webkit-appearance: textfield;
  outline-offset: -2px; }
[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration{
  -webkit-appearance: none; }
::-webkit-file-upload-button{
  -webkit-appearance: button;
  font: inherit; }
details{
  display: block; }
summary{
  display: list-item; }
template{
  display: none; }
[hidden]{
  display: none; }
/* Section stylings */
.home {
  /* background-attachment: fixed; */
  background-color: #2f3640 !important;
  /* overwrite section:nth-child(2n+1) selector */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #eee;
  min-height: 100vh;
  position: relative; }
  .home a {
    color: inherit;
    text-decoration: none; }
    .home a.button-alt {
          font-size: 13px;
          font-size: 1.3rem;
          background-color: transparent;
          border: 1px solid #eee;
          margin: 0;
          padding: 10px 35px;
          -webkit-transition: border-color 0.3s ease-out;
          transition: border-color 0.3s ease-out; }
          .home a.button-alt:hover {
            background-color: #f9a11b;
            border-color: #f9a11b; }
  .home .home-topbar {
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    padding-top: 30px; }
    .home .home-topbar .home-logo {
      height: 40px; }
  .home .home-title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    margin-top: 16vh;
    padding-bottom: 16vh;
    text-align: center; }
    .home .home-title .page-subtitle {
      font-size: 16px;
      font-size: 1.6rem;
      margin: 0 0 10px; }
    .home .home-title .page-title {
      font-size: 48px;
      font-size: 4.8rem;
      max-width: 600px;
      margin: auto; }
    .home .home-title .divider {
      margin: 20px auto; }
    .home .home-title .page-description {
       }
  .home .home-scroll {
    font-size: 13px;
    font-size: 1.3rem;
    bottom: 30px;
    left: 50%;
    position: absolute;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%); }
    .home .home-scroll .home-icon-container {
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      cursor: pointer;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      font-weight: 700;
      height: 100%;
      -webkit-box-pack: start;
          -ms-flex-pack: start;
              justify-content: flex-start; }
      .home .home-scroll .home-icon-container .home-scroll-description {
        margin-bottom: 10px; }
    .home .home-scroll:hover {
      color: #f9a11b; }
  @media only screen and (max-width: 479px) {
    .home .home-title {
      margin: 12vh 0; }
      .home .home-title .page-title {
        font-size: 40px;
        font-size: 4rem; } }

.about {
  color: #666;
  padding: 60px 0; }
  .about .about-header {
    display: inline-block;
    margin-right: 15px;
    min-width: 500px;
    width: 50%; }
    .about .about-header h2 {
      font-size: 28px;
      font-size: 2.8rem;
      color: #333;
      margin-top: 10px; }
    .about .about-header h3 {
      font-size: 16px;
      font-size: 1.6rem;
      color: #f9a11b; }
  .about .about-columns {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 30px; }
    .about .about-columns .about-left {
      margin-right: 15px;
      width: 50%; }
      .about .about-columns .about-left p {
        line-height: 2;
        margin: 0 0 20px;
        text-justify: inner-word; }
        .about .about-columns .about-left p:last-child {
          margin-bottom: 0; }
    .about .about-columns .about-right {
      margin-left: 15px;
      width: 50%; }
      .about .about-columns .about-right img {
        width: 100%; }
  @media only screen and (max-width: 767px) {
    .about {
      padding: 40px 0 60px; }
      .about .about-header {
        min-width: 0;
        width: 100%; }
      .about .about-columns {
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: reverse;
            -ms-flex-direction: column-reverse;
                flex-direction: column-reverse; }
        .about .about-columns .about-right,
        .about .about-columns .about-left {
          margin: 0;
          width: 100%; }
        .about .about-columns .about-right {
          margin-bottom: 20px; } }

.date {
  color: #666;
  padding: 60px 0;
  text-align: center; }
  .date .row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
        justify-content: space-around;
    margin: 0 auto;
    max-width: 640px; }
  .date .column {
    -ms-flex-line-pack: justify;
        align-content: space-between;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    font-weight: 500;
    margin: 0 40px 40px;
    width: 50%; }
    .date .column img {
      margin: 0 auto;
      margin-bottom: 20px;
      width: 90px; }
    .date .column .date-value,
    .date .column .venue {
      color: #333;
      display: block;
      line-height: 1;
      margin: 0 0 10px; }
    .date .column .time-value,
    .date .column .venue-details {
      font-size: 18px;
      font-size: 1.8rem;
      display: block;
      margin: 0; }
    .date .column .date-value {
      font-size: 52px;
      font-size: 5.2rem;
      line-height: 0.9em; }
    .date .column .venue {
      font-size: 20px;
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.1em; }
  .date .calendar-options {
    display: none; }
  .date .calendar-add,
  .date .calendar-type {
    font-size: 16px;
    font-size: 1.6rem;
    color: #f9a11b;
    cursor: pointer;
    font-weight: 600;
    padding: 10px;
    text-decoration: none;
    -webkit-transition: color 0.3s ease-in-out;
    transition: color 0.3s ease-in-out; }
    .date .calendar-add:hover,
    .date .calendar-type:hover {
      color: #fa7800; }
  .date .calendar-type {
    margin: 0 30px; }
    .date .calendar-type i {
      margin-right: 5px; }
  @media only screen and (max-width: 479px) {
    .date .row {
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column; }
    .date .column {
      max-width: 300px;
      width: 100%; }
    .date .calendar-type {
      display: block; } }

.events {
  padding: 80px 0 60px; }
  @media only screen and (max-width: 767px) {
    .events {
      padding: 60px 0 40px; } }

.event-detail {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 30px;
  text-align: center; }
  .event-detail::after {
    clear: both;
    content: '';
    display: block; }
  @media only screen and (max-width: 767px) {
    .event-detail {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
          -ms-flex-flow: row wrap;
              flex-flow: row wrap;
      -webkit-box-pack: justify;
          -ms-flex-pack: justify;
              justify-content: space-between; } }
  .event-detail .divider {
    margin: 8px 40px; }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      .event-detail .divider {
        margin: 8px 20px; } }
    @media only screen and (max-width: 767px) {
      .event-detail .divider {
        display: none; } }
  .event-detail--time {
    font-size: 18px;
    font-size: 1.8rem;
    color: #333;
    font-weight: 700;
    margin: 0; }
    @media only screen and (max-width: 767px) {
      .event-detail--time {
        font-size: 30px;
        font-size: 3rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-pack: end;
            -ms-flex-pack: end;
                justify-content: flex-end;
        -webkit-box-ordinal-group: -2;
            -ms-flex-order: -3;
                order: -3;
        text-align: center; } }
  .event-detail--description {
    font-size: 13px;
    font-size: 1.3rem;
    color: #666;
    margin: 0;
    text-align: left;
    width: 65%; }
    @media only screen and (max-width: 767px) {
      .event-detail--description {
        width: 100%; } }
  .event-detail--title {
    font-size: 18px;
    font-size: 1.8rem;
    color: #333;
    font-weight: 700;
    line-height: 1.3;
    margin-right: 50px; }
    @media only screen and (max-width: 767px) {
      .event-detail--title {
        margin: 20px 0 0; } }
  .event-detail--author {
    font-size: 14px;
    font-size: 1.4rem;
    color: #666;
    font-weight: 500;
    margin: 10px 0 25px; }
  .event-detail--toggle {
    font-size: 14px;
    font-size: 1.4rem;
    color: #666;
    cursor: pointer;
    font-weight: 500;
    margin: 0 0 20px;
    padding: 0;
    text-decoration: underline; }
  .event-detail--more {
    color: #808080;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 0;
    margin-top: 30px;
    overflow: hidden;
    padding-right: 20px;
    position: relative;
    text-align: justify; }
    .event-detail--more strong {
      color: #333; }
    @media only screen and (max-width: 991px) {
      .event-detail--more {
        display: block; } }
  .event-detail--about {
    margin-right: 15px;
    width: 50%; }
    @media only screen and (max-width: 991px) {
      .event-detail--about {
        margin: 0 0 20px;
        width: 100%; } }
  .event-detail--learn {
    margin-left: 15px;
    width: 50%; }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      .event-detail--learn {
        margin-left: 0;
        width: 100%; } }
    @media only screen and (max-width: 767px) {
      .event-detail--learn {
        margin-left: 0;
        width: 100%; } }
    .event-detail--learn ul {
      list-style-type: none;
      padding-left: 20px; }
    .event-detail--learn li {
      line-height: 1.8;
      margin-bottom: 10px;
      position: relative; }
      .event-detail--learn li::before {
        color: #f9a11b;
        content: '+';
        display: inline-block;
        font-size: 1.4em;
        font-weight: 500;
        left: -20px;
        position: absolute;
        top: -6px; }
  .event-detail--photo {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    margin: 0;
    padding: 5px;
    position: relative;
    width: 15%;
    z-index: 10; }
    @media only screen and (max-width: 767px) {
      .event-detail--photo {
        height: 100px;
        -webkit-box-ordinal-group: 0;
            -ms-flex-order: -1;
                order: -1;
        width: 100px; } }
    .event-detail--photo::before {
      font-size: 140px;
      font-size: 14rem;
      color: #f5f5f5;
      font-weight: 700;
      height: auto;
      left: -60px;
      position: absolute;
      top: -20px;
      width: auto;
      z-index: 1; }
      @media only screen and (max-width: 767px) {
        .event-detail--photo::before {
          font-size: 100px;
          font-size: 10rem;
          left: -40px;
          top: -15px; } }
    .event-detail--photo img {
      border-radius: 50%;
      -webkit-box-shadow: 0 3px 30px -5px rgba(0, 0, 0, 0.75);
              box-shadow: 0 3px 30px -5px rgba(0, 0, 0, 0.75);
      height: auto;
      position: relative;
      width: 100%;
      z-index: 20; }

.event-detail:nth-child(1) > .event-detail--photo::before {
  content: "1"; }

.event-detail:nth-child(2) > .event-detail--photo::before {
  content: "2"; }

.event-detail:nth-child(3) > .event-detail--photo::before {
  content: "3"; }

.event-detail:nth-child(4) > .event-detail--photo::before {
  content: "4"; }

.gallery {
  margin: 10px 0;
  padding: 50px 0; }
  .gallery .gallery-heading {
    text-align: center; }
    .gallery .gallery-heading::after {
      background: #f9a11b;
      content: '';
      display: block;
      height: 0.3rem;
      margin: 2rem auto;
      width: 4.5rem; }
  .gallery .gallery-slider {
    -webkit-box-shadow: 0 3px 30px -5px rgba(0, 0, 0, 0.75);
            box-shadow: 0 3px 30px -5px rgba(0, 0, 0, 0.75);
    margin: auto;
    margin-bottom: 2%;
    overflow: hidden; }
    @media only screen and (min-width: 1200px) {
      .gallery .gallery-slider {
        height: 661.33333px;
        width: 992px; } }
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      .gallery .gallery-slider {
        height: 594.66667px;
        width: 892px; } }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      .gallery .gallery-slider {
        height: 445.33333px;
        width: 668px; } }
    @media only screen and (min-width: 480px) and (max-width: 767px) {
      .gallery .gallery-slider {
        height: 286.66667px;
        width: 430px; } }
    @media only screen and (max-width: 479px) {
      .gallery .gallery-slider {
        height: 186.66667px;
        width: 280px; } }
    .gallery .gallery-slider img {
      height: auto;
      max-width: 100%; }

.collaboration-pricing {
  color: #333;
  padding: 50px 0 100px;
  text-align: center;
  width: 100%; }
  .collaboration-pricing .divider {
    margin: 20px auto 30px; }
  .collaboration-pricing .general-info {
    font-size: 13px;
    font-size: 1.3rem;
    color: #666;
    line-height: 2.6rem;
    margin: 0 auto;
    max-width: 520px; }
  .collaboration-pricing .collaboration-plans {
    margin: 50px -10px 10px;
    padding: 20px 10px; }
    @media only screen and (min-width: 992px) {
      .collaboration-pricing .collaboration-plans {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        overflow-x: auto; } }
  .collaboration-pricing .benefits {
    display: none;
    margin-right: 30px;
    max-width: 300px;
    min-width: 200px;
    text-align: left; }
    @media only screen and (min-width: 992px) {
      .collaboration-pricing .benefits {
        display: block; } }
    .collaboration-pricing .benefits .heading {
      font-size: 16px;
      font-size: 1.6rem;
      -webkit-box-align: end;
          -ms-flex-align: end;
              align-items: flex-end;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      font-weight: 600;
      margin: 40px 0 20px 10px; }
  .collaboration-pricing .plan {
    background-color: #fff;
    border-radius: 10px;
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-right: 20px;
    padding: 20px; }
    @media only screen and (max-width: 991px) {
      .collaboration-pricing .plan {
        margin: 30px auto; } }
    @media only screen and (max-width: 479px) {
      .collaboration-pricing .plan {
        width: auto; } }
    @media only screen and (min-width: 480px) and (max-width: 767px) {
      .collaboration-pricing .plan {
        width: 70%; } }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      .collaboration-pricing .plan {
        width: 50%; } }
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      .collaboration-pricing .plan {
        max-width: 300px;
        min-width: 150px;
        width: 20%; }
        .collaboration-pricing .plan:last-of-type {
          margin-right: 0; } }
    @media only screen and (min-width: 1200px) {
      .collaboration-pricing .plan {
        max-width: 300px;
        min-width: 150px;
        width: 20%; }
        .collaboration-pricing .plan:last-of-type {
          margin-right: 0; } }
    .collaboration-pricing .plan .heading {
      margin-bottom: 30px; }
      .collaboration-pricing .plan .heading .collaboration-copper {
        background-color: #bb6549;
        color: #eee; }
      .collaboration-pricing .plan .heading .collaboration-bronze {
        background-color: #9b5829;
        color: #eee; }
      .collaboration-pricing .plan .heading .collaboration-silver {
        background-color: #d3d3d3; }
      .collaboration-pricing .plan .heading .collaboration-gold {
        background-color: #ffd700; }
      .collaboration-pricing .plan .heading .collaboration-diamond {
        background-color: #b9f2ff; }
      .collaboration-pricing .plan .heading .name {
        border-radius: 10px;
        font-weight: 700;
        margin: 10px 0 0;
        padding: 10px 0 0; }
      .collaboration-pricing .plan .heading .price {
        font-size: 30px;
        font-size: 3rem;
        display: block; }
      .collaboration-pricing .plan .heading .period {
        color: #666; }
  .collaboration-pricing .benefits-list,
  .collaboration-pricing .plan-list {
    list-style-type: none;
    margin: 0;
    padding: 0; }
    .collaboration-pricing .benefits-list li,
    .collaboration-pricing .plan-list li {
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      border-radius: 10px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin: 10px 0;
      padding: 10px 15px; }
      .collaboration-pricing .benefits-list li:nth-child(2n),
      .collaboration-pricing .plan-list li:nth-child(2n) {
        background-color: #fff; }
      .collaboration-pricing .benefits-list li:nth-child(2n+1),
      .collaboration-pricing .plan-list li:nth-child(2n+1) {
        background-color: #f5f5f5; }
    .collaboration-pricing .benefits-list .mobile-benefit,
    .collaboration-pricing .plan-list .mobile-benefit {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex; }
      @media only screen and (min-width: 992px) {
        .collaboration-pricing .benefits-list .mobile-benefit,
        .collaboration-pricing .plan-list .mobile-benefit {
          display: none; } }
    .collaboration-pricing .benefits-list .desktop-benefit,
    .collaboration-pricing .plan-list .desktop-benefit {
      display: none; }
      @media only screen and (min-width: 992px) {
        .collaboration-pricing .benefits-list .desktop-benefit,
        .collaboration-pricing .plan-list .desktop-benefit {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex; } }
    .collaboration-pricing .benefits-list .available-benefit,
    .collaboration-pricing .plan-list .available-benefit {
      color: #666; }
    .collaboration-pricing .benefits-list .unavailable-benefit,
    .collaboration-pricing .plan-list .unavailable-benefit {
      color: #dedede; }
  .collaboration-pricing .benefits-list li {
    color: #666; }
  .collaboration-pricing .plan-list li {
    font-weight: 600;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    text-align: center; }
    .collaboration-pricing .plan-list li span.tick {
      font-size: 16px;
      font-size: 1.6rem;
      color: #0f0b88;
      font-weight: 700; }
    .collaboration-pricing .plan-list li span.cross {
      color: #dedede; }
  .collaboration-pricing .additional {
    color: #666;
    margin: 0 auto 60px;
    max-width: 700px; }
    .collaboration-pricing .additional .title {
      color: #333;
      font-weight: 700; }
  .collaboration-pricing .cta {
    font-size: 28px;
    font-size: 2.8rem;
    line-height: 1.3;
    margin-bottom: 40px; }
  .collaboration-pricing .contact-btn {
    font-size: 14px;
    font-size: 1.4rem;
    background: #f9a11b;
    border: 0;
    border-radius: 25px;
    -webkit-box-shadow: 0 5px 30px -5px #aaa;
            box-shadow: 0 5px 30px -5px #aaa;
    color: #eee;
    cursor: pointer;
    font-family: inherit;
    font-weight: 700;
    padding: 15px 45px;
    text-decoration: none;
    -webkit-transition: background-color 0.3s ease-out;
    transition: background-color 0.3s ease-out; }
    .collaboration-pricing .contact-btn:hover {
      background-color: #fa7800;
      color: #eee; }

.contact {
  color: #333;
  padding: 50px 0;
  text-align: center;
  width: 100%; }
  .contact .contact-heading {
    font-size: 26px;
    font-size: 2.6rem; }
  .contact .divider {
    margin: 20px auto 30px; }
  .contact .contact-info {
    font-size: 13px;
    font-size: 1.3rem;
    color: #666;
    line-height: 2.6rem;
    margin: 0 auto 30px;
    max-width: 520px; }
  .contact .contact-form {
    display: block;
    margin: 0 auto 30px;
    max-width: 350px; }
    .contact .contact-form .email,
    .contact .contact-form .message {
      font-size: 13px;
      font-size: 1.3rem;
      background: transparent;
      border: 0;
      border-bottom: 3px solid #c7c7c7;
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
      color: #666;
      font-family: inherit;
      opacity: 0.8;
      padding: 12px;
      -webkit-transition: border-color 0.3s ease-out;
      transition: border-color 0.3s ease-out;
      width: 100%; }
      .contact .contact-form .email:focus,
      .contact .contact-form .message:focus {
        outline: none; }
      .contact .contact-form .email.disable:invalid,
      .contact .contact-form .message.disable:invalid {
        border-color: #c83939; }
    .contact .contact-form .message {
      margin: 20px 0 30px;
      resize: none; }
    .contact .contact-form .send-btn {
      font-size: 14px;
      font-size: 1.4rem;
      background: #f9a11b;
      border: 0;
      border-radius: 25px;
      -webkit-box-shadow: 0 5px 30px -5px #aaa;
              box-shadow: 0 5px 30px -5px #aaa;
      color: #eee;
      cursor: pointer;
      font-family: inherit;
      font-weight: 700;
      padding: 15px 45px;
      -webkit-transition: background-color 0.3s ease-out;
      transition: background-color 0.3s ease-out; }
      .contact .contact-form .send-btn:hover {
        background-color: #fa7800;
        color: #eee; }

.roles {
  color: #333;
  padding: 50px 0 100px;
  text-align: center;
  width: 100%; }
  .roles .roles-heading {
    font-size: 26px;
    font-size: 2.6rem; }
  .roles .divider {
    margin: 20px auto 30px; }
  .roles .roles-info {
    font-size: 13px;
    font-size: 1.3rem;
    color: #666;
    line-height: 2.6rem;
    margin: 0 auto 30px;
    max-width: 520px; }
  .roles .section-detail {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    margin: 80px 0; }
    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      .roles .section-detail {
        -ms-flex-pack: distribute;
            justify-content: space-around;
        margin: 40px 0; } }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      .roles .section-detail {
        -ms-flex-pack: distribute;
            justify-content: space-around; } }
    @media only screen and (max-width: 767px) {
      .roles .section-detail {
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        -ms-flex-pack: distribute;
            justify-content: space-around;
        margin: 40px 0; } }
    @media only screen and (min-width: 480px) and (max-width: 767px) {
      .roles .section-detail {
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        margin: 40px 0; } }
    .roles .section-detail .divider {
      margin: 20px 0; }
      @media only screen and (max-width: 767px) {
        .roles .section-detail .divider {
          display: none; } }
    .roles .section-detail .section-photo img {
      -webkit-box-shadow: 0 3px 30px -5px rgba(0, 0, 0, 0.75);
              box-shadow: 0 3px 30px -5px rgba(0, 0, 0, 0.75);
      max-width: 500px; }
      @media only screen and (min-width: 992px) and (max-width: 1199px) {
        .roles .section-detail .section-photo img {
          max-width: 400px; } }
      @media only screen and (min-width: 768px) and (max-width: 991px) {
        .roles .section-detail .section-photo img {
          max-width: 350px; } }
      @media only screen and (max-width: 767px) {
        .roles .section-detail .section-photo img {
          max-width: 500px;
          width: 100%; } }
    .roles .section-detail .right-side {
      -webkit-box-ordinal-group: 2;
          -ms-flex-order: 1;
              order: 1; }
    .roles .section-detail .section-text {
      max-width: 500px;
      padding-top: 30px; }
      @media only screen and (min-width: 992px) and (max-width: 1199px) {
        .roles .section-detail .section-text {
          max-width: 400px; } }
      @media only screen and (min-width: 768px) and (max-width: 991px) {
        .roles .section-detail .section-text {
          max-width: 350px;
          padding-top: 0; } }
      @media only screen and (max-width: 767px) {
        .roles .section-detail .section-text {
          margin: 20px 0;
          -webkit-box-ordinal-group: 3;
              -ms-flex-order: 2;
                  order: 2;
          padding-top: 0; } }
      .roles .section-detail .section-text--name {
        font-size: 34px;
        font-size: 3.4rem;
        color: #333;
        font-weight: 700;
        text-align: left; }
        @media only screen and (max-width: 767px) {
          .roles .section-detail .section-text--name {
            margin: 20px 0;
            text-align: center; } }
      .roles .section-detail .section-text--description {
        font-size: 13px;
        font-size: 1.3rem;
        color: #666;
        line-height: 2.6rem;
        text-align: left; }
        @media only screen and (max-width: 479px) {
          .roles .section-detail .section-text--description {
            text-align: center; } }
  .roles .cta {
    font-size: 28px;
    font-size: 2.8rem;
    line-height: 1.3;
    margin: 80px 0 40px; }
  .roles .contact-btn {
    font-size: 14px;
    font-size: 1.4rem;
    background: #f9a11b;
    border: 0;
    border-radius: 25px;
    -webkit-box-shadow: 0 5px 30px -5px #aaa;
            box-shadow: 0 5px 30px -5px #aaa;
    color: #eee;
    cursor: pointer;
    font-family: inherit;
    font-weight: 700;
    padding: 15px 45px;
    text-decoration: none;
    -webkit-transition: background-color 0.3s ease-out;
    transition: background-color 0.3s ease-out; }
    .roles .contact-btn:hover {
      background-color: #fa7800;
      color: #eee; }

.footer {
  color: #333;
  height: auto;
  padding: 30px 0 40px;
  width: auto; }
  .footer .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex; }
  .footer-copyright--title, .footer-contact--heading, .footer-socials--heading {
    font-size: 16px;
    font-size: 1.6rem; }
  .footer .footer-copyright {
    -webkit-box-flex: 1;
        -ms-flex: 1 1 55%;
            flex: 1 1 55%; }
    .footer .footer-copyright--akai {
      font-size: 13px;
      font-size: 1.3rem;
      color: #666;
      -webkit-transform: translateY(4px);
              transform: translateY(4px); }
  .footer .footer-contact {
    -webkit-box-flex: 1;
        -ms-flex: 1 1 20%;
            flex: 1 1 20%; }
    .footer .footer-contact--mailto {
      font-size: 13px;
      font-size: 1.3rem;
      color: #666; }
      .footer .footer-contact--mailto:hover {
        -webkit-filter: brightness(50%);
                filter: brightness(50%); }
  .footer .footer-socials {
    -ms-flex-preferred-size: auto;
        flex-basis: auto; }
    .footer .footer-socials--icon {
      border: 1px solid #666;
      border-radius: 100%;
      color: #666;
      float: left;
      height: 40px;
      margin-right: 7px;
      text-align: center;
      width: 40px; }
      .footer .footer-socials--icon i {
        font-size: 25px;
        line-height: 43px; }
      .footer .footer-socials--icon:hover {
        -webkit-filter: brightness(50%);
                filter: brightness(50%); }
    .footer .footer-socials::after {
      clear: both;
      content: '';
      display: block; }
    .footer .footer-socials--logo img {
      border: 1px solid #666;
      border-radius: 50%;
      height: 30px;
      padding: 5px;
      width: 30px; }
      .footer .footer-socials--logo img:hover {
        -webkit-filter: brightness(50%);
                filter: brightness(50%); }
  @media only screen and (max-width: 767px) {
    .footer .container {
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      -webkit-box-orient: vertical;
      -webkit-box-direction: reverse;
          -ms-flex-direction: column-reverse;
              flex-direction: column-reverse;
      text-align: center; }
    .footer .footer-copyright--title {
      margin-top: 10px; }
    .footer .footer-contact,
    .footer .footer-socials {
      margin-bottom: 5px; }
    .footer h4 {
      margin-bottom: 10px; }
    .footer p {
      margin-top: 5px; }
    .footer .footer-socials {
      display: inline-block;
      width: 150px; }
      .footer .footer-socials--heading {
        margin: 10px 0 15px; }
      .footer .footer-socials--icon {
        float: left;
        margin: 0 4px; }
      .footer .footer-socials--logo {
        margin: 0 4px; } }

html,
body {
  font-family: 'Quicksand', sans-serif;
  margin: 0; }

html {
  font-size: 62.5%; }

body {
  font-size: 13px;
  font-size: 1.3rem; }

input,
textarea {
  background: none;
  border: 0;
  -webkit-box-shadow: none;
          box-shadow: none;
  outline: none; }

p {
  line-height: 1.8; }

section:nth-child(2n) {
  background-color: #fff; }

section:nth-child(2n+1) {
  background-color: #f5f5f5; }

.divider {
  background-color: #f9a11b;
  height: 3px;
  width: 40px; }

.container {
  margin: 0 auto;
  padding: 0 30px; }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .container {
      max-width: 960px; } }
  @media only screen and (min-width: 1200px) {
    .container {
      max-width: 1100px; } }
`;

const App = () => (
  <Router>
    <div>
      {/* <nav>
        <Link exact to="/">
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav> */}
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
);

export default hot(module)(App);
