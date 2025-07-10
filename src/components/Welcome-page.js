import React, { useState, useEffect } from "react";
import { Offcanvas, Button, Modal, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import faviconImage from "../image/favicon.jpg";
import { MdContactSupport } from "react-icons/md";
import backgroundImage from "../image/welcome-bg.png";
import { Link } from "react-router-dom";

// Pointer sync function - no changes needed here, but ensure it doesn't negatively impact performance on mobile.
const syncPointer = ({ x: pointerX, y: pointerY }) => {
  if (window.innerWidth <= 768) return; // Optional: Disable on mobile for performance
  const x = pointerX.toFixed(2);
  const y = pointerY.toFixed(2);
  const xp = (pointerX / window.innerWidth).toFixed(2);
  const yp = (pointerY / window.innerHeight).toFixed(2);
  document.documentElement.style.setProperty("--x", x);
  document.documentElement.style.setProperty("--xp", xp);
  document.documentElement.style.setProperty("--y", y);
  document.documentElement.style.setProperty("--yp", yp);
};

function WelcomePage() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  // Attach and clean up the pointer move event listener
  useEffect(() => {
    document.body.addEventListener("pointermove", syncPointer);
    return () => {
      document.body.removeEventListener("pointermove", syncPointer);
    };
  }, []);

  const handleClose = () => setShowSidebar(false);
  const handleShow = () => setShowSidebar(true);

  const handleContactModalShow = () => setShowContactModal(true);
  const handleContactModalClose = () => setShowContactModal(false);

  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{
        fontFamily: "'Kanit', sans-serif",
        background: `url(${backgroundImage}) center/cover no-repeat`,
        position: "relative",
      }}
    >
      {/* Logo */}
      {/* <div className="position-absolute top-0 start-0 m-3" style={{ zIndex: 1045 }}>
        <Button variant="link" onClick={handleShow} style={{ borderRadius: '100%', padding: 0 }}>
          <img src={faviconImage} alt="menu icon" style={{ background: 'rgba(255, 255, 255, 0.8)', width: '70px', height: '70px', borderRadius: '100%' }} />
        </Button>
      </div> */}

      {/* Sidebar*/}
      {/* <Offcanvas
        show={showSidebar}
        onHide={handleClose}
        placement="start"
        style={{ width: '250px' }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ color: '#000000', fontSize: '2rem' }}>เมนู</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ backgroundColor: '#f8f9fa' }}>
          <ul className="list-unstyled" style={{ padding: '20px' }}>
            {['หน้าแรก', 'เกี่ยวกับเรา', 'ติดต่อ'].map((text, index) => (
              <li key={text} style={{ marginBottom: '15px' }}>
                <a
                  href={`#${['home', 'about', 'contact'][index]}`}
                  onClick={handleClose}
                  className="sidebar-link" // Use a class for styling
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas> */}

      {/* Welcome Card*/}
      <div
        className="d-flex flex-grow-1 justify-content-center align-items-center text-center px-3"
        style={{ zIndex: 1 }}
      >
        <Card
          bg="light"
          text="dark"
          className="w-100 mx-md-5" // Full width on small screens, margin on medium+
          style={{
            maxWidth: "930px", // Max width to prevent it from becoming too large on desktops
            padding: "3vw", // Use viewport width for padding
            borderRadius: "1rem",
            background: "rgba(255, 255, 255, 0.8)", // Simplified background
            border: "3px solid rgba(153, 153, 153, 0.3)",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            color: "#000000",
          }}
        >
          <Card.Body>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{
                fontSize: "clamp(2.5rem, 10vw, 5rem)",
                color: "rgb(231, 66, 48)",
              }} // Responsive font size
            >
              <img
                src={faviconImage}
                alt="logo"
                className="mb-3"
                style={{ width: "120px", height: "120px" }}
              />
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{
                fontSize: "clamp(2.5rem, 10vw, 5rem)",
                color: "rgb(231, 66, 48)",
              }} // Responsive font size
            >
              Welcome to Website
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{
                fontSize: "clamp(1.2rem, 5vw, 2rem)",
                color: "rgb(20, 25, 118)",
              }} // Responsive font size
            >
              This is a simple website
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-4"
            >
              <div> &nbsp; &nbsp;</div>
              <Link to={"/home"}>
                <Button
                  variant="dark"
                  type="button"
                  style={{
                    fontSize: "clamp(1rem, 4vw, 1.2rem)",
                    padding: "10px 20px",
                  }} // Responsive font size
                >
                  เข้าสู่หน้าหลัก
                </Button>
              </Link>
            </motion.div>
          </Card.Body>
        </Card>
      </div>

      {/* Contact Floating Button - Un-commented and ready to use */}
      {/* <div className="position-fixed bottom-0 end-0 m-3 m-md-4" style={{ zIndex: 1040 }}>
        <Button
          variant="success"
          size="lg"
          className="rounded-circle d-flex justify-content-center align-items-center"
          style={{
            width: '60px',
            height: '60px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
          onClick={handleContactModalShow}
        >
          <MdContactSupport style={{ fontSize: '2rem' }} />
        </Button>
      </div> */}

      {/* Contact Modal - Un-commented and ready to use */}
      {/* <Modal show={showContactModal} onHide={handleContactModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>ติดต่อเรา</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>คุณสามารถติดต่อเราได้ตามช่องทางด้านล่างนี้:</p>
          <ul style={{ paddingLeft: '20px' }}>
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
      </Modal> */}

      {/* Footer */}
      <footer className="text-center py-2" style={{ zIndex: 1 }}>
        <p
          className="m-0"
          style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.9rem" }}
        >
          © 2025 Your Company Name. All rights reserved.
        </p>
      </footer>

      {/* It's good practice to add a separate style tag or CSS file for hover effects */}
      <style jsx global>{`
        .sidebar-link {
          text-decoration: none;
          color: #333;
          font-size: 1.4rem;
          font-weight: bold;
          transition: color 0.3s ease;
        }
        .sidebar-link:hover {
          color: #007bff;
        }
      `}</style>
    </div>
  );
}

export default WelcomePage;
