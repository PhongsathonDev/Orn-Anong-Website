import React, { useState, useEffect } from "react";
import { Navbar, Offcanvas } from "react-bootstrap";
import { FaFacebookSquare, FaLine, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import logoImage from "../image/favicon.jpg";
import "../css/Home-page.css";
import about from "../image/about.webp"


function HomePage() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
const [isLoading, setIsLoading] = useState(true); // เพิ่ม state สำหรับ Splash screen

useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
    document.body.classList.add("loaded"); // ให้ scroll ได้เมื่อโหลดเสร็จ
  }, 3500);
  return () => clearTimeout(timer);
}, []);


  return (
    <>
    {isLoading && (
  <motion.div
    className="splash-screen"
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    transition={{ duration: 1.5, delay: 2 }}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "linear-gradient(135deg,rgb(255, 255, 255),rgb(255, 255, 255))", // โทนน้ำเงิน
      opacity: 0.7,
      
      zIndex: 9999,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontFamily: "Prompt, sans-serif",
    }}
  >
    <motion.img
      src={logoImage}
      alt="Logo"
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1.1, opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        width: "130px",
        height: "130px",
        borderRadius: "50%",
        marginBottom: "20px",
        boxShadow: "0 0 30px rgba(255,255,255,0.3)",
      }}
    />
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.5 }}
      style={{
        fontSize: "2.5rem",
        fontWeight: "bold",
        color: "black",
        letterSpacing: "2px",
      }}
    >
      ORNANONG ACCOUNTING
    </motion.h1>
  </motion.div>
)}


      {/* bg-animated อยู่ด้านบนสุด */}
      <div className="bg-animated"></div>
      {/* ส่วน hero พร้อมพื้นหลัง */}
      <div className="hero-wrapper ">
        <motion.div
          className="custom-navbar"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="nav-left">
            <Navbar.Brand href="#home" className="d-flex align-items-center">
              <img
                src={logoImage}
                alt="Logo"
                width="75"
                height="75"
                className="me-2"
                style={{ borderRadius: "50%" }}
              />
              <span
                className="fw-bold fs-4"
                style={{ fontFamily: "Prompt, sans-serif" }}
              >
                &nbsp;&nbsp; ORNANONG ACCOUNTING
              </span>
            </Navbar.Brand>
          </div>

          <div className="nav-right" >
            <a href="#getstart" style={{ textDecoration: "none" }} ><span className="nav-item">เกี่ยวกับเรา</span></a>
            <div className="divider" />
            <a href="#our-services" style={{ textDecoration: "none" }}><span className="nav-item">บริการของเรา</span></a>
            <div className="divider" />
            <a href="#contract" style={{ textDecoration: "none" }}><span className="nav-item">ติดต่อเรา</span></a>
            <div />
          </div>
        </motion.div>

        <div
          className="container mt-5"
          style={{ paddingTop: "150px", paddingBottom: "180px" }}
        >
          <motion.h1
            className="text-center mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: "5rem",
              fontWeight: "bold",
              fontFamily: "Prompt, sans-serif",
            }}
          >
            บริษัท สำนักงานอรอนงค์
            <br />
            การบัญชีและสอบบัญชี จำกัด
          </motion.h1>
          <h2
            className="text-center mb-5"
            style={{ fontSize: "1.5rem", fontFamily: "Prompt, sans-serif" }}
          >
            กิจกรรมเกี่ยวกับบัญชีการทำบัญชีและการตรวจสอบบัญชี
            การให้คำปรึกษาด้านภาษา
          </h2>
          <motion.div
            className="text-center mb-4 mt-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a href="#getstart">
              <button
                style={{ fontSize: "2rem", fontFamily: "Prompt, sans-serif" }}
                className="shadow__btn"
              >
                <span className="btn-txt">เริ่มต้น</span>
                <div className="hoverEffect">
                  <div></div>
                </div>
              </button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* เกี่ยวกับเรา */}
      <div
        className="container mt-5"
        id="getstart"
        style={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            fontSize: "5rem",
            fontWeight: "bold",
            fontFamily: "Prompt, sans-serif",
          }}
        >
          เกี่ยวกับเรา
        </motion.h2>

        {/* แถวภาพ + ข้อความ */}
        <motion.div
          className="row align-items-center mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="col-md-6 mb-4">
            <img
              src={about}
              alt="เกี่ยวกับเรา"
              height={200}
              className="img-fluid rounded-4 shadow"
            />
          </div>
          <div className="col-md-6">
            <h3
              className="mb-3"
              style={{
                fontFamily: "Prompt, sans-serif",
                fontSize: "2.2rem",
                fontWeight: "600",
              }}
            >
              เราคือใคร?
            </h3>
            <p
              style={{
                fontSize: "1.4rem",
                lineHeight: "2.2rem",
                fontFamily: "Prompt, sans-serif",
              }}
            >
              บริษัท สำนักงานอรอนงค์ การบัญชีและสอบบัญชี จำกัด
              คือผู้เชี่ยวชาญด้านบัญชี การสอบบัญชี และการให้คำปรึกษาทางการเงิน
              โดยทีมงานผู้สอบบัญชีรับอนุญาต (CPA)
              และที่ปรึกษาที่มีประสบการณ์จริง
            </p>
          </div>
        </motion.div>

        {/* จุดเด่นบริษัท */}
        <div className="row text-center mt-5">
          {[
            {
              icon: "📊",
              title: "มืออาชีพ",
              desc: "ทีมงานมีใบอนุญาตและประสบการณ์จริง",
            },
            {
              icon: "🔍",
              title: "โปร่งใส",
              desc: "รายงานตรงไปตรงมา ตรวจสอบได้ทุกขั้นตอน",
            },
            {
              icon: "🤝",
              title: "ดูแลคุณเสมอ",
              desc: "ให้คำปรึกษาแบบเข้าใจง่ายและตรงจุด",
            },
          ].map((item, i) => (
            <motion.div
              className="col-md-4 mb-4"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="p-4 shadow rounded-4 h-100">
                <div style={{ fontSize: "3rem" }}>{item.icon}</div>
                <h4
                  className="mt-3"
                  style={{ fontFamily: "Prompt, sans-serif" }}
                >
                  {item.title}
                </h4>
                <p style={{ fontSize: "1.2rem" }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* เนื้อหาสรุปต่อท้าย */}
        <motion.p
          className="text-center mt-5"
          style={{
            fontSize: "1.75rem",
            fontFamily: "Prompt, sans-serif",
            lineHeight: "3rem",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          เราให้บริการที่ครอบคลุม ตั้งแต่การทำบัญชี การวางแผนภาษี
          การจัดทำงบการเงิน ไปจนถึงการวิเคราะห์ข้อมูลและให้คำแนะนำเชิงกลยุทธ์
          พร้อมสร้างความมั่นใจและเป็นส่วนหนึ่งในการเติบโตของธุรกิจของคุณ
        </motion.p>
      </div>

      {/* บริการของเรา */}
      <div id="our-services"
        className="container"
        style={{ paddingTop: "200px", paddingBottom: "300px" }}
      >
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            fontSize: "5rem",
            fontWeight: "bold",
            fontFamily: "Prompt, sans-serif",
          }}
        >
          บริการของเรา
        </motion.h2>

        <div className="row justify-content-center gx-5 gy-5">
          {[
            {
              icon: "📘",
              title: "การทำบัญชี",
              desc: "บริการจัดทำบัญชีตามมาตรฐาน ด้วยความถูกต้องและตรงเวลา",
            },
            {
              icon: "🧾",
              title: "การตรวจสอบบัญชี",
              desc: "ตรวจสอบงบการเงินโดยผู้สอบบัญชีรับอนุญาต (CPA)",
            },
            {
              icon: "💬",
              title: "คำปรึกษาด้านภาษา",
              desc: "ให้คำแนะนำการใช้ภาษาไทยในเอกสารบัญชีให้ถูกต้อง",
            },
            {
              icon: "📊",
              title: "วางแผนภาษี",
              desc: "ช่วยให้คุณวางแผนภาษีอย่างถูกต้องและประหยัด",
            },
          ].map((item, i) => (
            <motion.div
              className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center"
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="service-card text-center p-4">
                <div className="icon mb-3">{item.icon}</div>
                <h5
                  className="fw-bold"
                  style={{
                    fontSize: "1.8rem",
                    fontFamily: "Prompt, sans-serif",
                  }}
                >
                  {item.title}
                </h5>
                <p
                  style={{
                    fontSize: "1.2rem",
                    fontFamily: "Prompt, sans-serif",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* แผนที่ */}
      <div
      id="contract"
        className="location-section"
        style={{
          paddingTop: "120px",
          paddingBottom: "150px",
          backgroundColor: "#f9fafb",
          textAlign: "center",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            fontFamily: "Prompt, sans-serif",
            marginBottom: "40px",
          }}
        >
          ที่ตั้งสำนักงาน
        </motion.h2>

        <motion.div
          className="map-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14350.365257701014!2d100.58456892037218!3d13.790138912166244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29d23e23da677%3A0x14a7d4d171d5a50c!2z4Liq4Liz4LiZ4Lix4LiB4LiH4Liy4LiZ4Lit4Lij4Lit4LiZ4LiH4LiE4LmM4LiB4Liy4Lij4Lia4Lix4LiN4LiK4Li14LmB4Lil4Liw4Liq4Lit4Lia4Lia4Lix4LiN4LiK4Li1!5e0!3m2!1sth!2sth!4v1752134454193!5m2!1sth!2sth"
            width="100%"
            height="450"
            style={{
              border: "none",
            }}
            allowFullScreen
            loading="lazy"
            title="สำนักงานอรอนงค์ - แผนที่"
          ></iframe>
        </motion.div>

        {/* ข้อมูลติดต่อเพิ่มเติม */}
        <motion.div
          className="contact-info mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            fontSize: "1.5rem",
            fontFamily: "Prompt, sans-serif",
            color: "#333",
          }}
        >
          <p>
            📍 677/5 ซอย ลาดพร้าว 48 แขวงสามเสนนอก เขตห้วยขวาง กรุงเทพมหานคร
            10310
          </p>
          <p>📞 02-276-9968 &nbsp;&nbsp; ✉️ info@ornanongaccounting.com</p>
        </motion.div>
      </div>

      {/* Footer */}
      <footer
        className="text-center py-4"
        style={{
          backgroundColor: "#f8f9fa",
          borderTop: "1px solid #dee2e6",
          fontFamily: "Prompt, sans-serif",
        }}
      >
        <p className="mb-2">
          © 2023 บริษัท สำนักงานอรอนงค์การบัญชีและสอบบัญชี จำกัด
        </p>
        <div style={{ fontSize: "1.5rem" }}>
          <a
            href="https://www.facebook.com/..."
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px", color: "#3b5998" }}
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://line.me/ti/p/..."
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px", color: "#00c300" }}
          >
            <FaLine />
          </a>
          <a
            href="mailto:info@ornanongaccounting.com"
            style={{ margin: "0 10px", color: "#D44638" }}
          >
            <FaEnvelope />
          </a>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
