import React, { useState } from 'react';
import { Offcanvas, Button, Modal, Card } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import faviconImage from '../image/favicon.jpg';
import backgroundImage from '../image/background.jpg'; 
import { MdContactSupport } from "react-icons/md";


const syncPointer = ({ x: pointerX, y: pointerY }) => {
  const x = pointerX.toFixed(2);
  const y = pointerY.toFixed(2);
  const xp = (pointerX / window.innerWidth).toFixed(2);
  const yp = (pointerY / window.innerHeight).toFixed(2);
  document.documentElement.style.setProperty('--x', x);
  document.documentElement.style.setProperty('--xp', xp);
  document.documentElement.style.setProperty('--y', y);
  document.documentElement.style.setProperty('--yp', yp);
};
document.body.addEventListener('pointermove', syncPointer);

function WelcomePage() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false); // State for contact modal

  const handleClose = () => setShowSidebar(false);
  const handleShow = () => setShowSidebar(true);

  const handleContactModalShow = () => setShowContactModal(true); // Functions to control modal visibility
  const handleContactModalClose = () => setShowContactModal(false);

  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{
        fontFamily: "'Kanit', sans-serif",
        background: 'url(https://i.ibb.co/x8rGWkGD/wallpaperflare-com-wallpaper.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      {/* ปุ่มเมนู */}
      <div className="position-absolute top-0 start-0 m-3" style={{ zIndex: 3 }}>
        <Button variant="link" onClick={handleShow}>
          <img src={faviconImage} alt="menu icon" style={{ width: '75px', height: '75px' }} />
        </Button>
      </div>

      {/* Sidebar */}
      <Offcanvas
        show={showSidebar}
        onHide={handleClose}
        placement="start"
        style={{ width: '20%' }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ color: '#000000', fontSize: '2rem' }}>เมนู</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ backgroundColor: '#f8f9fa', fontSize: '2rem' }}>
          <ul className="list-unstyled" style={{ padding: '20px' }}>
            <li style={{ marginBottom: '15px' }}>
              <a
                href="#home"
                onClick={handleClose}
                style={{
                  textDecoration: 'none',
                  color: '#333',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  transition: 'color 0.3s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = '#007bff')}
                onMouseOut={(e) => (e.currentTarget.style.color = '#333')}
              >
                หน้าแรก
              </a>
            </li>
            <li style={{ marginBottom: '15px' }}>
              <a
                href="#about"
                onClick={handleClose}
                style={{
                  textDecoration: 'none',
                  color: '#333',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  transition: 'color 0.3s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = '#007bff')}
                onMouseOut={(e) => (e.currentTarget.style.color = '#333')}
              >
                เกี่ยวกับเรา
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={handleClose}
                style={{
                  textDecoration: 'none',
                  color: '#333',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  transition: 'color 0.3s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = '#007bff')}
                onMouseOut={(e) => (e.currentTarget.style.color = '#333')}
              >
                ติดต่อ
              </a>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Welcome section */}
      <div className="d-flex flex-grow-1 justify-content-center align-items-center text-center" style={{ zIndex: 1 }}>
        <Card
          bg="light"
          text="dark"
          style={{
            width: '60%',
            padding: '5%',
            borderRadius: '1rem',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6))',
            
            border: '3px solid rgba(192, 192, 192, 0.3)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            color: '#000000',
          }}
        >
          <Card.Body>
            <motion.h1
              initial={{ opacity: 0, y: 75 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{ fontSize: '5rem', color: 'rgb(231, 66, 48)' }}
            >
              Welcome to Website
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{ fontSize: '2rem', color: 'rgb(20, 25, 118)' }}
            >
              This is a simple website
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <Button
                variant="dark"
                type="button"
                className="btn btn-primary mt-4"
                style={{ fontSize: '1.2rem', padding: '10px 20px' }}
              >
                เข้าสู่หน้าหลัก
              </Button>
            </motion.div>
          </Card.Body>
        </Card>
      </div>

      {/* Contact Floating Button */}
      <div
        className="position-fixed bottom-0 end-0 m-4"
        style={{ zIndex: 3 }}
      >
        
        <Button
          variant="success"
          size="lg"
          className="animated-button-1" /* Add this line */
          style={{
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
          onClick={handleContactModalShow}
        >
          <MdContactSupport style={{ fontSize: '2rem' }} />
        </Button>
      </div>

      {/* Footer */}
      <footer className="text-center mt-auto py-3" style={{ zIndex: 1 }}>
        <p style={{ color: '#000000', fontSize: '1.2rem', color: 'rgba(122, 122, 122, 0.8)' }}>
          © 2025 Your Company Name. All rights reserved.
        </p>
      </footer>

      {/* Contact Modal */}
      <Modal show={showContactModal} onHide={handleContactModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>ติดต่อเรา</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            คุณสามารถติดต่อเราได้ตามช่องทางด้านล่างนี้:
          </p>
          <ul>
            <li>อีเมล: example@yourcompany.com</li>
            <li>โทรศัพท์: 081-234-5678</li>
            <li>Line ID: yourlineid</li>
            <li>ที่อยู่: 123 ถนนตัวอย่าง, ตำบล/แขวง, อำเภอ/เขต, จังหวัด, 12345</li>
          </ul>
          <p>เรายินดีให้บริการ!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleContactModalClose}>
            ปิด
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default WelcomePage;
