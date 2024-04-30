import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/footer2.css';
import { Container, Row, Col } from "react-bootstrap";
export default function Footer2() {
    return (
        <>
            <Container fluid className="fotr">
                <Row>
                    <Col lg="3" xs={12} md={3}>
                        <div className="logo-ftr" ></div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="p-fotr">
                            <p className="p-ftr">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit laudantium architecto maiores deserunt suscipit perferendis repellat, qui non aperiam aut quos modi alias ratione aspernatur.
                            </p>
                            <p className="p-ftr2">
                                Copyright © 2024 GetLeads By Michael Sameh
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <div className="icon-3">
                            <a href='https://www.facebook.com/?locale=ar_AR'><svg xmlns="http://www.w3.org/2000/svg" className="icon-team" height="35" width="35" viewBox="0 0 512 512"><path fill="#3b5998" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg></a>
                            <a href='https://myaccount.google.com/'><svg xmlns="http://www.w3.org/2000/svg" className="icon-team" height="35" width="35" viewBox="0 0 512 512"><path fill="#e1270e" d="M256 8C119.1 8 8 119.1 8 256S119.1 504 256 504 504 392.9 504 256 392.9 8 256 8zM185.3 380a124 124 0 0 1 0-248c31.3 0 60.1 11 83 32.3l-33.6 32.6c-13.2-12.9-31.3-19.1-49.4-19.1-42.9 0-77.2 35.5-77.2 78.1S142.3 334 185.3 334c32.6 0 64.9-19.1 70.1-53.3H185.3V238.1H302.2a109.2 109.2 0 0 1 1.9 20.7c0 70.8-47.5 121.2-118.8 121.2zM415.5 273.8v35.5H380V273.8H344.5V238.3H380V202.8h35.5v35.5h35.2v35.5z" /></svg></a>
                            <a href='https://twitter.com/i/flow/login'><svg xmlns="http://www.w3.org/2000/svg" className="icon-team" height="35" width="35" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg></a>
                            <a href='https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530334509&extra_1=s%7Cc%7C547348909654%7Ce%7Cinstagram%20%27%7C&placement=&creative=547348909654&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13530334509%26adgroupid%3D126262421974%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D1005386%26loc_interest_ms%3D9008192%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjw15eqBhBZEiwAbDomEkih9kRQMRfRrhVBW5bJuppUx8pAP_XXczI2rE5HTAOFBTgvzfvRvxoCmgkQAvD_BwE'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon-team" height="35" width="35" viewBox="0 0 448 512"><path fill="#3f729b" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
