import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import faviconImage from '../image/favicon.jpg'; 
import backgroundImage from '../image/background.jpg'; // Optional, if you want to use a local image
import { Card } from 'react-bootstrap';


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

  const handleClose = () => setShowSidebar(false);
  const handleShow = () => setShowSidebar(true);

  return (
    
    <div
      className="d-flex flex-column min-vh-100"
      style={{
        fontFamily: "'Kanit', sans-serif",
        background: 'linear-gradient(135deg, #dff2fd, #ffffff)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',

      }}
    >
      {/* ปุ่มเมนู */}
      <div className="position-absolute top-0 start-0 m-3" style={{ zIndex: 3 }}>
        <Button variant="link" onClick={handleShow}>
          <img src={faviconImage} alt="menu icon" style={{ width: '60px', height: '60px' }} />
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
          <Offcanvas.Title style={{ color: '#000000' }}>เมนู</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
          <ul className="list-unstyled">
            <li><a href="#home" onClick={handleClose}>หน้าแรก</a></li>
            <li><a href="#about" onClick={handleClose}>เกี่ยวกับเรา</a></li>
            <li><a href="#contact" onClick={handleClose}>ติดต่อ</a></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Welcome section */}
      <div className="d-flex flex-grow-1 justify-content-center align-items-center text-center" style={{ zIndex: 1 }}>
        <Card
          bg="light"            // สีพื้นหลังของ Card
          text="dark"           // สีตัวอักษรใน Card
          style={{ width: '70%', padding: '8%', borderRadius: '1rem', boxShadow: '0 4px 15px rgba(0,0,0,0.3)'}}
        >
          <Card.Body>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{ fontSize: '5rem' }}
            >
              Welcome to Website
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{ fontSize: '2rem' }}
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

      {/* Footer */}
      <footer className="text-center mt-auto py-3" style={{ zIndex: 1 }}>
        <p style={{ color: '#000000', fontSize: '1.2rem' }}>
          © 2025 Your Company Name. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default WelcomePage;
