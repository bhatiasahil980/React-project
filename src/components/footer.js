import Button from "react-bootstrap/Button";
import React from "react";

import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer ,CDBBox } from 'cdbreact';

const Footer = () => {
  return (
    <>
    <div style={{ 
      backgroundImage: `url("https://wallpaperaccess.com/full/2773237.jpg")` 
    }}>
      <div className="d-flex justify-content-center" style={{paddingTop : 30 , paddingBottom: 30}}>
        <Button variant="dark">वेबसाइट नीतियां</Button>
        <Button variant="dark">सहायता</Button>
        <Button variant="dark">हमें संपर्क करें</Button>
        <Button variant="dark">प्रतिक्रिया</Button>
        <Button variant="dark">निबंधन और शर्तें</Button>
      </div>
      </div>
      <div>
      <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              src="https://images.hindustantimes.com/rf/image_size_800x600/HT/p2/2015/10/17/Pictures/_34f867ec-74fa-11e5-a2be-bd52c89c4a35.jpg"
              width="150px"
            />
          </a>
        </CDBBox>
        <CDBBox>
          <small  className="ml-2"> Website Content Owned & Managed by भूमि संसाधन विभाग, ग्रामीण विकास मंत्रालय, भारत सरकारअभिकल्पित, विकसित और परिचारित राष्ट्रीय सूचना विज्ञान केन्द्र</small>
        </CDBBox>
        
      </CDBBox>
    </CDBFooter>
  );

      </div>
    </>
  );
};
export default Footer;
