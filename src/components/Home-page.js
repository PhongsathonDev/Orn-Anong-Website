import React, { useState } from 'react';
import { Navbar, Container, Nav, Dropdown, Button, Offcanvas } from 'react-bootstrap';
import logoImage from '../image/favicon.jpg'; // เปลี่ยน path ตามภาพโลโก้ของคุณ
import '../App.css'; // สำหรับ custom style เพิ่มเติมถ้ามี
import { AiFillCaretDown } from "react-icons/ai";

function HomePage() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <> 
      <Navbar expand="lg" className="bg-white" style={{ padding: '10px 20px', borderBottom: '1px solid rgb(0, 0, 0)' }}>
        <Container fluid className="d-flex justify-content-between align-items-center">
          {/* Logo + Text */}
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src={logoImage}
              alt="Logo"
              width="75"
              height="75"
              className="me-2"
              style={{ borderRadius: '50%' }}
            />
            <span className="fw-bold fs-4">&nbsp;&nbsp; ORNANONG ACCOUNTING</span>
          </Navbar.Brand>

          {/* Right Side: Dropdown + Button */}
          <div className="d-flex align-items-center gap-4">
            {/* Circle dropdown */}
            <Dropdown align="end">
              <Dropdown.Toggle
                variant="dark"
                id="dropdown-basic"
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '60px', height: '60px', padding: 0, fontSize: '1.5rem', marginRight: '20px' }}
              >
                A
                
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: '150px', minHeight: '100px', fontSize: '1rem' }}> {/* หรือ minWidth: '200px' */}
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
              </Dropdown.Menu>
              
            </Dropdown>
            
            {/* Button to open Offcanvas */}
            <Button variant="outline-dark" className="rounded-pill px-5 py-1" onClick={handleShow}>
              <span className="fs-3">≡</span>
            </Button>
          </div>
        </Container>
      </Navbar>

      {/* Right Offcanvas */}
      <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>เมนูเพิ่มเติม</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>ลิงก์หรือเมนูเพิ่มเติมสามารถใส่ตรงนี้</p>
          <ul className="list-unstyled">
            <li><a href="#home">หน้าแรก</a></li>
            <li><a href="#about">เกี่ยวกับ</a></li>
            <li><a href="#contact">ติดต่อ</a></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      <div style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="container mt-5" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <h1 className="text-center mb-4" style={{ fontSize: '6rem', fontWeight: 'bold' }}>บริษัท สำนักงานอรอนงค์<br/>การบัญชีและสอบบัญชี จำกัด</h1>
        <h2 className="text-center mb-5" style={{ fontSize: '1.7rem', }}>กิจกรรมเกี่ยวกับบัญชีการทำบัญชีและการตรวจสอบบัญชี การให้คำปรึกษาด้านภาษา</h2>
        <div className="text-center mb-4">
          <Button  className="rounded-pill px-4 py-2" style={{ fontSize: '2rem' }}>เริ่มต้น</Button>

        </div>
        <p className='text-center' style={{ fontSize: '1.2rem', }}>ติดต่อเรา: <a href="mailto:info@ornanongaccounting.com">info@ornanongaccounting.com</a></p>
        <div className="text-center mt-4">
          
        </div>
      </div>
      </div>
      {/* เกี่ยวกับเรา */}
      <div className="container mt-5" >
        <h2 className="text-center mb-5" style={{ fontSize: '5rem', fontWeight: 'bold'}}>เกี่ยวกับเรา</h2>
        <p className="text-center" style={{ fontSize:'1.78rem'}}>บริษัท สำนักงานอรอนงค์ การบัญชีและสอบบัญชี จำกัด คือ บริษัทผู้เชี่ยวชาญด้านบัญชีและการตรวจสอบบัญชี เรามุ่งมั่นที่จะเป็นพันธมิตรที่เชื่อถือได้สำหรับธุรกิจของคุณ ด้วยทีมงานมืออาชีพที่มีประสบการณ์ ทั้งผู้สอบบัญชีรับอนุญาต (CPA) และที่ปรึกษาทางการเงิน เราให้บริการที่ครอบคลุมและแม่นยำ ตั้งแต่การทำบัญชี การจัดทำรายงานทางการเงิน การตรวจสอบบัญชี ไปจนถึงการวางแผนภาษีและการให้คำปรึกษาทางธุรกิจเราเข้าใจดีว่าความถูกต้องทางการเงินและความเข้าใจเชิงลึกเป็นสิ่งสำคัญต่อการเติบโตของธุรกิจ นั่นคือเหตุผลที่เรามุ่งเน้นการให้ข้อมูลเชิงลึกและคำแนะนำเชิงกลยุทธ์ เพื่อช่วยให้คุณตัดสินใจได้อย่างชาญฉลาดและบรรลุเป้าหมายทางธุรกิจที่ สำนักงานอรอนงค์ เราให้ความสำคัญกับการสร้าง ความสัมพันธ์ที่แข็งแกร่งและยั่งยืนกับลูกค้า โดยยึดหลักความโปร่งใสและสื่อสารที่ชัดเจน เราพร้อมเป็นส่วนหนึ่งที่ช่วยให้ธุรกิจของคุณประสบความสำเร็จและมีรากฐานทางการเงินที่มั่นคงให้ สำนักงานอรอนงค์ เป็นผู้ดูแลด้านการเงินของคุณ เพื่อความสบายใจและก้าวไปข้างหน้าอย่างมั่นคง.</p>
      </div>


      {/* บริการของเรา */}
      <div className="container mt-5" style={{ paddingTop: '200px', paddingBottom: '200px' }}>
        <h2 className="text-center mb-5" style={{ fontSize: '5rem', fontWeight: 'bold'}}>บริการของเรา</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body" style={{textAlign: 'center'}}>
                <h5 className="card-title">การทำบัญชี</h5>
                <p className="card-text">บริการทำบัญชีที่ถูกต้องและเป็นมาตรฐาน</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body" style={{textAlign: 'center'}}>
                <h5 className="card-title" >การตรวจสอบบัญชี</h5>
                <p className="card-text">การตรวจสอบบัญชีเพื่อความโปร่งใสและเชื่อถือได้</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body" style={{textAlign: 'center'}}>
                <h5 className="card-title">คำปรึกษาด้านภาษา</h5>
                <p className="card-text">ให้คำปรึกษาเกี่ยวกับการใช้ภาษาที่ถูกต้องในเอกสารทางบัญชี</p>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
      


      <footer className="text-center py-4" style={{ backgroundColor: '#f8f9fa', borderTop: '1px solid #dee2e6' }}>
        <p className="mb-0">© 2023 บริษัท สำนักงานอรอนงค์การบัญชีและสอบบัญชี จำกัด</p>
        <p className="mb-0">ติดต่อ: <a href="mailto:info@ornanongaccounting.com">info@ornanongaccounting.com</a></p>
      </footer>



    </>
  );
}

export default HomePage;
