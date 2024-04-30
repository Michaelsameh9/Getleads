import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/footer.css';

export default function Footer() {
    return (
        <>
            <Container fluid className='ftr'>
                <Row className="fotr-1">
                    <Col sm={9} className='ftr0'>
                        <p className="txt-foter">All rights reserved - Copyright © 2024 GetLeads by <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" className="a-text">Michael sameh</a> </p>
                    </Col>
                    <Col sm={3} className='ftr1'>
                        <div className="icon-2">
                            <a href="https://www.facebook.com/?locale=ar_AR" className="icon-madia">
                                <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 320 512"><path fill="#69696e" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
                            </a>
                            <a href="https://twitter.com/i/flow/login" className="icon-madia">
                                <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><path fill="#69696e" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530334509&extra_1=s%7Cc%7C547348909654%7Ce%7Cinstagram%20%27%7C&placement=&creative=547348909654&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13530334509%26adgroupid%3D126262421974%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D1005386%26loc_interest_ms%3D9008192%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjw15eqBhBZEiwAbDomEkih9kRQMRfRrhVBW5bJuppUx8pAP_XXczI2rE5HTAOFBTgvzfvRvxoCmgkQAvD_BwE" className="icon-madia" >
                                <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 448 512"><path fill="#69696e" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
