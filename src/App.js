import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Col, Container, Row, Nav, NavDropdown, Navbar, Button, Form, Tab } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faBullseye, faCaretRight, faChessKnight, faCloudArrowDown, faMobile, faMobileScreenButton, faSquareXmark } from "@fortawesome/free-solid-svg-icons";

import videobg from "./Images/Getleads - Landing Pages Pack with Page Builder Preview - ThemeForest.mp4";


import bge from './Images/bg-1.jpg';
import bgtwo from './Images/bg-3.jpg';
import bgthr from "./Images/bg-2.jpg";
import bgfloat from "./Images/flat1.png";
import bgflot from "./Images/flat2.png";
import part1 from './Images/partner1.png';
import part2 from './Images/partner2.png';
import part3 from './Images/partner3.png';
import profile1 from "./Images/testimonial1.jpg";
import profile2 from "./Images/testimonial2.jpg";
import profile3 from "./Images/testimonial3.jpg";


import card1 from "./Images/portfolio1-xl.jpg";
import card2 from "./Images/portfolio2-xl.jpg";
import card3 from "./Images/portfolio3-xl.jpg";
import card4 from "./Images/portfolio4-xl.jpg";
import card5 from "./Images/portfolio5-xl.jpg";
import card6 from "./Images/portfolio6-xl.jpg";

import Footer from "./pages/footer";
import BackToTopButton from "./pages/topBotton";



function App() {
  const Data = [
    {
      "id": 1,
      "name": "card1",
      "titel": "Tech Coffee",
      "tittel": "Liber theophrastus ea est, vel unum ubique feugait in. Has ne albucius tincidunt.",
      "img": card1,
    },
    {
      "id": 2,
      "name": "card2",
      "titel": "Image Filter",
      "tittel": "Quodsi volutpat persequeris cu vel, sea te dolorum dissentiet. Per an dicunt causae, id ipsum.",
      "img": card2,
    },
    {
      "id": 3,
      "name": "card3",
      "titel": "Clean Sheet",
      "tittel": "Rebum insolens vim ne, no per zril mnesarchum inciderint. Quo dicat audire interesset cu.",
      "img": card3,
    },
    {
      "id": 4,
      "name": "card4",
      "titel": "Desktop Sound",
      "tittel": "Congue platonem ei usu, cu erroribus principes ius. Ea per case epicurei, iisque utroque corpora vis an.",

      "img": card4,
    },
    {
      "id": 5,
      "name": "card5",
      "titel": "Morning Code",
      "tittel": "Volumus antiopam id his, nec et fabulas voluptua. Quot platonem maluisset vim et, cu accusam quaestio intellegat vel.",
      "img": card5,
    },
    {
      "id": 6,
      "name": "card6",
      "titel": "Black & White",
      "tittel": "Curabitur ultrices nec est nec vestibulum. Maecenas tincidunt pretium lacinia.",
      "img": card6,
    },

  ]
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');
  const getImg = (img) => {
    setTempImgSrc(img);
    setModel(true);
  }

  const handleButtonClick = () => {
    setModel(false);
  };


  const [fix, setfix] = useState(false);
  const changebg = () => {
    if (window.scrollY >= 500) {
      setfix(true);
    } else {
      setfix(false);
    }
  }
  window.addEventListener('scroll', changebg);

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Navbar expand="lg" className={fix ? "navbar-fixed" : "bg-body-tertiary"}>
              <Navbar.Brand href="/" className="nav-logo"><div className="bg-logo"></div></Navbar.Brand>
              <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#aboutus">About Us</Nav.Link>
                    <Nav.Link href="#ourServices">Our Services</Nav.Link>
                    <Nav.Link href="#ourWork">Our Work</Nav.Link>
                    <Nav.Link href="#whoweAre">Who we are</Nav.Link>
                    <NavDropdown title="Extra Pages " id="basic-nav-dropdown">
                      <ul className="nav-lik">
                        <li> <a href="/blogList">Blog List</a></li>
                        <li> <a href="/">Blog Single</a></li>
                        <li> <a href="/">Faq</a></li>
                        <li> <a href="/">Terms</a></li>
                        <li> <a href="/loginPage">Login Page</a></li>
                        <li> <a href="/signupPage">Signup Page</a></li>
                      </ul>
                      <NavDropdown.Divider />
                      <ul className="nav-drow">
                        <li> <a href="#Other Demos">Other Demos</a>
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon" height="14" width="12.25" viewBox="0 0 448 512"><path fill="#a1a1a1" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                          <ul id="drobpown">
                            <li><a href="/">Consulting</a></li>
                            <li><a href="/">Web Service</a></li>
                            <li><a href="/">App</a></li>
                            <li><a href="/">E-Learning</a></li>
                            <li><a href="/">Medical</a></li>
                            <li><a href="/">Wood Working</a></li>
                            <li><a href="/">Event</a></li>
                            <li><a href="/">Yoga</a></li>
                          </ul>
                        </li>
                      </ul>
                    </NavDropdown>
                    <Button variant="primary" className="btn-hire-us" href="#Hire us">Hire us</Button>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
      <Container fluid className="video-slider">
        <Row>
          <Col>
            <video src={videobg} autoPlay loop muted width="100%" object-fit="cover" height="100%" />
            <div className="text-white">
              <h1 className="h-slid">
                Let's make something extraordinary together
              </h1>
              <p className="p-slid">
                We have been collaborating with brands and agencies to build meaningful digital interactions since 2007
              </p>
              <Button variant="primary" size="lg" active className="btn-text" href="#ourWork">
                FEATURED WORK
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid >
        <section className="sec-0" id="aboutus">
          <Row>
            <Col xs={12} md={12} lg={12}>
              <h2>
                Crafting Digital Experiences
              </h2>
              <p className="p-text-0">
                Ratione magnam aspernatur laborum error saepe eveniet nobis officia omnis culpa molestias delectus aliquam rem numquam tempora maiores assumenda.
              </p>
            </Col>
          </Row>
          <Row className="cect-1">
            <Col xs={12} lg={6}>
              <div className="img-warp"></div>
            </Col>
            <Col xs={12} lg={6}>
              <div className="text-us">
                <div className="about-us">
                  <h6 className="text-1">ABOUT US</h6>
                  <h3 className="text-2">A Creative Agency where technology moves people.</h3>
                  <p className="text-3">
                    Democritum inciderint nam ut, duo ne rebum tibique molestiae, mediocrem incorrupte dissentiunt has in. Vidisse gloriatur eum in, alia docendi molestie est te. Nam facer erant aeterno te, sed no utamur perfecto.
                  </p>
                  <a href="#Hire us" className="btn-txt" >HIRE US</a>
                </div>
              </div>
            </Col>
          </Row>
        </section>
        <section id="ourServices">
          <Row>
            <Col xs={12} md={12} lg={12}>
              <h2>
                Core Services. What we love to do.
              </h2>
              <p className="p-text-0">
                Our approach is simple and iterative. We believe in creating opportunities for passionate innovators that want to change the world.
              </p>
            </Col>
          </Row>
          <Row className="tabel">
            <Col className="conter-tet">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                <Row>
                  <Col sm={12} lg={4}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item className="item-nav">
                        <Nav.Link eventKey="first" className="link-chang">DISCOVERY & STRATEGY</Nav.Link>
                        <FontAwesomeIcon icon={faCaretRight} size='xl' className="font-icon" />
                      </Nav.Item>

                      <Nav.Item className="item-nav">
                        <Nav.Link eventKey="second" className="link-chang">STARTUP SUPPORT</Nav.Link>
                        <FontAwesomeIcon icon={faCaretRight} size='xl' className="font-icon" />
                      </Nav.Item>
                      <Nav.Item className="item-nav">
                        <Nav.Link eventKey="third" className="link-chang">CUSTOMER EXPERIENCE DESIGN</Nav.Link>
                        <FontAwesomeIcon icon={faCaretRight} size='xl' className="font-icon" />
                      </Nav.Item>
                      <Nav.Item className="item-nav2">
                        <Nav.Link eventKey="fourth" className="link-chang">INTERACTIVE DESIGN & PRODUCT DEVELOPMENT</Nav.Link>
                        <FontAwesomeIcon icon={faCaretRight} size='xl' className="font-icon" />
                      </Nav.Item>
                      <Nav.Item className="item-nav2">
                        <Nav.Link eventKey="fifth" className="link-chang">CONTENT MANAGMENT</Nav.Link>
                        <FontAwesomeIcon icon={faCaretRight} size='xl' className="font-icon" />
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12} lg={6}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          <Col xs={12} md={12} lg={12}>
                            <h2 className="txt-sect-1">
                              Creating a results driven experience
                            </h2>
                            <p className="p-txt">
                              Maiores ducimus aliquam est inventore quaerat quibusdam.
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={12} md={6} lg={6}>
                            <FontAwesomeIcon icon={faBullseye} size="2xl" style={{ color: "#69696e", }} className="faBulseye" />
                            <h4 >Competitive Analysis</h4>
                            <p className="txt-icon">Magni, inventore iusto, eum expedita, dolorum placeat in nisi quisquam autem iure, nemo sapiente ipsa obcaecati iure.</p>
                            <FontAwesomeIcon icon={faChessKnight} style={{ color: "#69696e", }} className="faBulseye" />
                            <h4 className="txt-h4">Digital Strategy</h4>
                            <p className="txt-icon">Maxime reprehenderit soluta accusamus deleniti! Dolore nihil ipsam, veniam fugiat neque voluptas ex commodi doloribus.</p>
                          </Col>

                          <Col sm={12} md={6} lg={6} className="bg-txt">
                            <img src={bge} alt="logo" className="bg-frist" />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <Col>
                            <h2 className="txt-sect-2">
                              It's about making ideas happens
                            </h2>
                            <p className="p-txt-2">
                              Omnis cumque nulla maiores recusandae blanditiis et explicabo nobis temporibus, aspernatur esse animi voluptates quasi harum ipsum quis nobis molestias.
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col >
                            <img src={bgtwo} alt="img-2" className="bgtwo" />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <Col>
                            <h2 className="txt-sect-2">
                              Thinking about users
                            </h2>
                            <p className="p-txt-2">
                              Magni impedit nostrum dolorem velit ducimus unde eligendi tempora eligendi deserunt assumenda dolor neque minus voluptas at eveniet facere.
                            </p>
                          </Col>
                        </Row>
                        <Row className="tap-3">
                          <Col lg={8}>
                            <img src={bgthr} alt="img-2" className="bgthr" />

                          </Col>
                          <Col lg={4}>
                            <h2 className="txt-sect-3">
                              Experience design is a way of thinking
                            </h2>
                            <p className="p-txt-3">
                              Natus cumque odio sit harum facilis excepturi deleniti voluptatibus odit alias perspiciatis eligendi.                                                    </p>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          <Col>
                            <h2 className="txt-sect-2">
                              Easy to use applications for every platform

                            </h2>
                            <p className="p-txt-2">
                              Omnis cumque nulla maiores recusandae blanditiis et explicabo nobis temporibus, aspernatur esse animi voluptates quasi harum ipsum quis nobis molestias.                                                    </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="t-nmb1">
                            <FontAwesomeIcon icon={faMobileScreenButton} size="2xl" style={{ color: "#69696e", }} className="icon-mobile" />
                            <h4 className="tet-sec-4">
                              Responsive Design
                            </h4>
                            <p className="p-txt-4">
                              Magni, inventore iusto, eum expedita, dolorum placeat in nisi quisquam autem iure, nemo sapiente ipsa obcaecati iure.
                            </p>
                          </Col>
                          <Col className="t-nmb1">
                            <FontAwesomeIcon icon={faBasketShopping} size="2xl" style={{ color: "#69696e", }} className="icon-mobile" />
                            <h4 className="tet-sec-4">
                              eCommerce / Retail
                            </h4>
                            <p className="p-txt-4">
                              Magni, inventore iusto, eum expedita, dolorum placeat in nisi quisquam autem iure, nemo sapiente ipsa obcaecati iure.
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="t-nmb1" >
                            <FontAwesomeIcon icon={faCloudArrowDown} size="2xl" style={{ color: "#69696e", }} className="icon-mobile" />
                            <h4 className="tet-sec-4">
                              Third-party Integrations                                                    </h4>
                            <p className="p-txt-4">
                              Maxime reprehenderit soluta accusamus deleniti! Dolore nihil ipsam, veniam fugiat neque voluptas ex commodi doloribus.
                            </p>
                          </Col>
                          <Col>
                            <FontAwesomeIcon icon={faMobile} style={{ color: "#69696e", }} className="icon-mobile" />
                            <h4 className="tet-sec-4">
                              Mobile Development
                            </h4>
                            <p className="p-txt-4">
                              Maxime reprehenderit soluta accusamus deleniti! Dolore nihil ipsam, veniam fugiat neque voluptas ex commodi doloribus.
                            </p>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fifth">
                        <h2 className="txt-sect-2">
                          Keeping your site update
                        </h2>
                        <p className="p-txt-2">
                          Magni impedit nostrum dolorem velit ducimus unde eligendi tempora eligendi deserunt assumenda dolor neque minus voluptas at eveniet facere.
                        </p>
                        <Row className="sect-5">
                          <Col sm={4} lg={3}>
                            <img src={bgfloat} alt="img-2" />
                          </Col>
                          <Col sm={8} lg={9}>
                            <h4 className="tet-sec-5">
                              Content Marketing
                            </h4>
                            <p className="p-txt-5">
                              Odit non officiis vitae eaque quo temporibus blanditiis excepturi facilis, dolore provident et eligendi ut asperiores perferendis, maxime optio tempora.                                                    </p>
                          </Col>
                        </Row>
                        <Row className="sect-5">
                          <Col sm={4} lg={3}>
                            <img src={bgflot} alt="img-3" />
                          </Col>
                          <Col sm={8} lg={9}>
                            <h4 className="tet-sec-5">
                              SEO
                            </h4>
                            <p className="p-txt-5">
                              Omnis nam quibusdam fugiat consectetur quasi iste, aspernatur eaque doloremque, magni dolores deserunt impedit fugit error consequuntur esse.
                            </p>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Col>
          </Row>
        </section>
      </Container>
      <Container fluid className="partners1">
        <Row className="row-1">
          <Col sm={12} lg={3}>
            <div className="sect-1">
              <h6>
                Our work has been awarded or featured on:
              </h6>
            </div>
          </Col>
          <Col sm={12} lg={3}>
            <div className="part-1">
              < img src={part1} alt="partner1" className="bg-part" />
            </div>
          </Col>
          <Col sm={12} lg={3}>
            <div className="part-1">
              < img src={part2} alt="partner2" className="bg-part" />
            </div>
          </Col>
          <Col sm={12} lg={3}>
            <div className="part-1">
              < img src={part3} alt="partner3" className="bg-part" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="sect-2" id='ourWork' >
        <Row>
          <Col sm={12} lg={12}>
            <h2 className="txt-1">
              Latest Projects
            </h2>
            <p className="p-txt-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque animi labore minus quidem eum voluptate, sapiente doloribus, molestias in explicabo totam.
            </p>
          </Col>
        </Row>
        <Row className="contact">
          <div className={model ? "model open" : "model"}>
            <img src={tempImgSrc} alt="card" />
            <FontAwesomeIcon onClick={handleButtonClick} className="closButon" icon={faSquareXmark} />
          </div>
            {Data.map((item, index) => {
              return (
                <Col lg={4} sm={12} className="contact2">
                <div className={item.name} key={index}>
                  <h1 className="h-card">{item.titel}</h1>
                  <p className="p-card">{item.tittel}</p>
                  <Button className="b-card" onClick={() => getImg(item.img)} >Viwe More</Button>
                </div>
                </Col>
              )
            }
            )}
         
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col sm={12} lg={12}>
            <h5 className="txt-7">
              We turn great ideas into brilliant realities.
            </h5>
            <p className="p-txt-7">
              Quis dolorem architecto nemo, enim pariatur, aliquid laudantium voluptatum animi. Adipisicing rerum, natus repellendus possimus et excepturi. Reprehenderit iste, laborum quod mollitia nesciunt.
            </p>
            <a href='#view' className='view-more'>VIEW MORE WORK</a>
          </Col>
        </Row>
      </Container>
      <Container fluid className='partners2'>
        <Row>
          <Col sm={12} lg={12}>
            <h1 className='h-txt'>What People Are Saying About Us</h1>
            <p className='p-ptxt'>Meet our happy clients and find why our Agency is the preferred choice.</p>
          </Col>
        </Row>
        <Row className='profle-card'>
          <Col sm={12} lg={4}>
            <div className='profile-card'>
              <div className='profile-bgm'>
                <img src={profile1} alt='' className='bgm' />
              </div>
              <p className='profile-card-title'>
                Illum timeam maiestatis his te. Ei mel eirmod legendos, quis moderatius ea mea, vix viris dignissim contentiones no. Sint facilisis ad eam. Vix an illud assentiet.
              </p>
              <h4 className='profile-name'>
                Carol Miller
              </h4>
              <p className='profile-card-titlle'>
                Awesome Lorem Studio
              </p>
            </div>
          </Col>
          <Col sm={12} lg={4}>
            <div className='profile-card'>
              <div className='profile-bgm'>
                <img src={profile2} alt='' className='bgm' />
              </div>
              <p className='profile-card-title'>
                Natum mandamus qualisque id ius, an qui urbanitas pertinacia. Oblique deserunt qui cu, eum id bonorum inimicus prodesset. An pri maiorum constituam intellegebat.                            </p>
              <h4 className='profile-name'>
                Brandon Riley
              </h4>
              <p className='profile-card-titlle'>
                Smart Lorem Agency
              </p>
            </div>
          </Col>
          <Col sm={12} lg={4}>
            <div className='profile-card'>
              <div className='profile-bgm'>
                <img src={profile3} alt='' className='bgm' />
              </div>
              <p className='profile-card-title'>
                Omnium voluptua mediocritatem usu ei, in pri nonumes periculis. Mea dictas audire quaerendum ex, has congue graeci mediocritatem in. Ut minimum deleniti.
              </p>
              <h4 className='profile-name'>
                Jonathan Lawson
              </h4>
              <p className='profile-card-titlle'>
                Intrepid Ipsum Enterpreneurs
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className='team-4' id='whoweAre'>
        <Row>
          <Col sm={12} lg={12}>
            <h2 className="txt-1">
              Small Team but Big in Design
            </h2>
            <p className="p-txt-1">
              Molestiae placeat praesentium dolores deleniti eum nobis saepe accusantium repellendus aliquid repellat sequi distinctio voluptates assumenda officis.
            </p>
          </Col>
        </Row>
        <Row className='team'>
          <Col sm={12} lg={4} md={12}>
            <div className='team-namber-1'>
              <div className="team-namber1">
              </div>
              <div className='item-team'>
                <h6 className='team-txt'>Adams Austin
                </h6>
                <p className='team-txt2'>
                  FOUNDER & CEO
                </p>
                <div className='item-icon'>
                  <a href='https://www.facebook.com/?locale=ar_AR'><svg xmlns="http://www.w3.org/2000/svg" className="icon-team" height="35" width="35" viewBox="0 0 512 512"><path fill="#3b5998" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg></a>
                  <a href='https://myaccount.google.com/'><svg xmlns="http://www.w3.org/2000/svg" className="icon-team" height="35" width="35" viewBox="0 0 512 512"><path fill="#e1270e" d="M256 8C119.1 8 8 119.1 8 256S119.1 504 256 504 504 392.9 504 256 392.9 8 256 8zM185.3 380a124 124 0 0 1 0-248c31.3 0 60.1 11 83 32.3l-33.6 32.6c-13.2-12.9-31.3-19.1-49.4-19.1-42.9 0-77.2 35.5-77.2 78.1S142.3 334 185.3 334c32.6 0 64.9-19.1 70.1-53.3H185.3V238.1H302.2a109.2 109.2 0 0 1 1.9 20.7c0 70.8-47.5 121.2-118.8 121.2zM415.5 273.8v35.5H380V273.8H344.5V238.3H380V202.8h35.5v35.5h35.2v35.5z" /></svg></a>
                  <a href='https://twitter.com/i/flow/login'><svg xmlns="http://www.w3.org/2000/svg" className="icon-team" height="35" width="35" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg></a>
                  <a href='https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530334509&extra_1=s%7Cc%7C547348909654%7Ce%7Cinstagram%20%27%7C&placement=&creative=547348909654&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13530334509%26adgroupid%3D126262421974%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D1005386%26loc_interest_ms%3D9008192%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjw15eqBhBZEiwAbDomEkih9kRQMRfRrhVBW5bJuppUx8pAP_XXczI2rE5HTAOFBTgvzfvRvxoCmgkQAvD_BwE'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon-team" height="35" width="35" viewBox="0 0 448 512"><path fill="#3f729b" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                  </a>
                </div>
              </div>
              <div>
                <p className='p-team1'>
                  He likes to keep things simple and focus on the little details. Adams's radical vision required a newfound venture.
                </p>
              </div>
            </div>
          </Col>
          <Col sm={12} lg={4}>
            <div className='team-namber-2'>
              <div className='team-namber2'>
              </div>
              <div className='item-team'>
                <h6 className='team-txt'>Nathan Barrett
                </h6>
                <p className='team-txt2'>
                  CREATIVE DIRECTOR
                </p>
                <div className='item-icon'>
                  <a href='https://www.facebook.com/?locale=ar_AR'><svg xmlns="http://www.w3.org/2000/svg" className="icon-team" height="35" width="35" viewBox="0 0 512 512"><path fill="#3b5998" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg></a>
                  <a href='https://myaccount.google.com/'><svg xmlns="http://www.w3.org/2000/svg" className="icon-team" height="35" width="35" viewBox="0 0 512 512"><path fill="#e1270e" d="M256 8C119.1 8 8 119.1 8 256S119.1 504 256 504 504 392.9 504 256 392.9 8 256 8zM185.3 380a124 124 0 0 1 0-248c31.3 0 60.1 11 83 32.3l-33.6 32.6c-13.2-12.9-31.3-19.1-49.4-19.1-42.9 0-77.2 35.5-77.2 78.1S142.3 334 185.3 334c32.6 0 64.9-19.1 70.1-53.3H185.3V238.1H302.2a109.2 109.2 0 0 1 1.9 20.7c0 70.8-47.5 121.2-118.8 121.2zM415.5 273.8v35.5H380V273.8H344.5V238.3H380V202.8h35.5v35.5h35.2v35.5z" /></svg></a>
                  <a href='https://twitter.com/i/flow/login'><svg xmlns="http://www.w3.org/2000/svg" className="icon-team" height="35" width="35" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg></a>
                  <a href='https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530334509&extra_1=s%7Cc%7C547348909654%7Ce%7Cinstagram%20%27%7C&placement=&creative=547348909654&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13530334509%26adgroupid%3D126262421974%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D1005386%26loc_interest_ms%3D9008192%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjw15eqBhBZEiwAbDomEkih9kRQMRfRrhVBW5bJuppUx8pAP_XXczI2rE5HTAOFBTgvzfvRvxoCmgkQAvD_BwE'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon-team" height="35" width="35" viewBox="0 0 448 512"><path fill="#3f729b" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                  </a>
                </div>
              </div>
              <div>
                <p className='p-team1'>
                  He loves trying out new techniques and finding the perfect solution for any kind of requirements.
                </p>
              </div>
            </div>
          </Col>
          <Col sm={12} lg={4}>
            <div className='team-namber-3'>
              <div className='team-namber3'></div>
              <div className='item-team'>
                <h6 className='team-txt'>Marylin Hamilton

                </h6>
                <p className='team-txt2'>
                  ARTISTIC DIRECTOR
                </p>
                <div className='item-icon'>
                  <a href='https://www.facebook.com/?locale=ar_AR'><svg xmlns="http://www.w3.org/2000/svg" className="icon-team" height="35" width="35" viewBox="0 0 512 512"><path fill="#3b5998" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg></a>
                  <a href='https://myaccount.google.com/'><svg xmlns="http://www.w3.org/2000/svg" className="icon-team" height="35" width="35" viewBox="0 0 512 512"><path fill="#e1270e" d="M256 8C119.1 8 8 119.1 8 256S119.1 504 256 504 504 392.9 504 256 392.9 8 256 8zM185.3 380a124 124 0 0 1 0-248c31.3 0 60.1 11 83 32.3l-33.6 32.6c-13.2-12.9-31.3-19.1-49.4-19.1-42.9 0-77.2 35.5-77.2 78.1S142.3 334 185.3 334c32.6 0 64.9-19.1 70.1-53.3H185.3V238.1H302.2a109.2 109.2 0 0 1 1.9 20.7c0 70.8-47.5 121.2-118.8 121.2zM415.5 273.8v35.5H380V273.8H344.5V238.3H380V202.8h35.5v35.5h35.2v35.5z" /></svg></a>
                  <a href='https://twitter.com/i/flow/login'><svg xmlns="http://www.w3.org/2000/svg" className="icon-team" height="35" width="35" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg></a>
                  <a href='https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530334509&extra_1=s%7Cc%7C547348909654%7Ce%7Cinstagram%20%27%7C&placement=&creative=547348909654&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13530334509%26adgroupid%3D126262421974%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D1005386%26loc_interest_ms%3D9008192%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjw15eqBhBZEiwAbDomEkih9kRQMRfRrhVBW5bJuppUx8pAP_XXczI2rE5HTAOFBTgvzfvRvxoCmgkQAvD_BwE'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon-team" height="35" width="35" viewBox="0 0 448 512"><path fill="#3f729b" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                  </a>
                </div>
              </div>
              <div>
                <p className='p-team1'>
                  She enjoys the finer details of a project, considering every stage of its journey from planning to completion.                                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className='team-4' id='Hire us' >
        <Row>
          <Col sm={12} lg={12}>
            <h2 className="txt-1">
              Ready to Get Started?
            </h2>
            <p className="p-txt-1">
              Want to hire the best people around to design, develop, and turn your project into reality? Well look no further! Take your business to the next level.
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm={12} lg={6}>
            <h4 className='txt-form'>Drop us a line</h4>
            <form>
              <Form.Control size="lg" placeholder="Name" />
              <Form.Control size="lg" type="email" placeholder="Email" />

              <Form.Control size="lg" type="text" placeholder="Subject" />

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Control as="textarea" rows={3} placeholder="Your Message" className='mb-4' />
              </Form.Group>
              <Button className='btn-form' type='submit'>
                GIVE US A SHOUT
              </Button>
            </form>
          </Col>
          <Col sm={12} lg={6}>
            <h4 className='txt-form'> Where we are</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.484132023985!2d29.94596337510794!3d31.235018561185566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c590c683dad7%3A0x128ecd9cd8d1df7d!2sStanley%20Bridge!5e0!3m2!1sen!2sus!4v1700053670594!5m2!1sen!2sus" width="90%" height="280" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map" ></iframe>
            <div className='tet-map'>
              <h5 className='p-map'>Office Address</h5>
              <p>Stanley Bridge <br></br> Alexandria <br></br>Egypt</p>
            </div>
            <div className='tet-ma'>
              <h5 className='p-map'>Contact Information</h5>
              <p className='p-map2'>Local: <p className='p-map3'>(+02)01200757899</p></p>
              <p className='p-map2'>Mobile: <p className='p-map3'>(+02)01200757899</p></p>
              <p className='p-map2'><a href='https://mail.google.com/mail/u/0/#inbox' className='a-map'> michaelsameh2020@gimal.com </a></p>

            </div>
          </Col>
        </Row>
      </Container>
      <BackToTopButton/>
      <Footer />
    </>
  )
}
export default App;