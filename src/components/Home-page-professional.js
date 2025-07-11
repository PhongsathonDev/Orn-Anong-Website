import React, { useState, useEffect } from "react";
import { Navbar, Offcanvas } from "react-bootstrap";
import { FaFacebookSquare, FaLine, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import logoImage from "../image/favicon.jpg";
import "../css/Home-page.css";
import about from "../image/about.webp";

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
            background:
              "linear-gradient(135deg,rgb(255, 255, 255),rgb(255, 255, 255))",
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
          <div className="nav-right">
            <a href="#getstart" style={{ textDecoration: "none" }}>
              <span className="nav-item">เกี่ยวกับเรา</span>
            </a>
            <div className="divider" />
            <a href="#our-services" style={{ textDecoration: "none" }}>
              <span className="nav-item">บริการของเรา</span>
            </a>
            <div className="divider" />
            <a href="#contract" style={{ textDecoration: "none" }}>
              <span className="nav-item">ติดต่อเรา</span>
            </a>
            <div />
          </div>
        </motion.div>
        <div
          className="container mt-5"
          style={{ paddingTop: "150px", paddingBottom: "180px" }}
        >
          <motion.div
            className="row align-items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div className="col-lg-8 mx-auto text-center">
              <motion.h1
                className="mb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{
                  fontSize: "4.5rem",
                  fontWeight: "bold",
                  fontFamily: "Prompt, sans-serif",
                  lineHeight: "1.2",
                  background: "linear-gradient(135deg, #1f2937 0%, #3b82f6 50%, #8b5cf6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                บริษัท สำนักงานอรอนงค์
                <br />
                การบัญชีและสอบบัญชี จำกัด
              </motion.h1>
              
              <motion.h2
                className="mb-5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                style={{ 
                  fontSize: "1.8rem", 
                  fontFamily: "Prompt, sans-serif",
                  color: "#6b7280",
                  fontWeight: "400",
                  lineHeight: "1.6",
                }}
              >
                ผู้เชี่ยวชาญด้านบัญชี การสอบบัญชี และการให้คำปรึกษาทางการเงิน
                <br />
                ด้วยทีมงานมืออาชีพและประสบการณ์จริงกว่า 15 ปี
              </motion.h2>

              <motion.div
                className="d-flex justify-content-center gap-4 flex-wrap"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a href="#getstart">
                  <button
                    style={{ 
                      fontSize: "1.2rem", 
                      fontFamily: "Prompt, sans-serif",
                      minWidth: "200px",
                    }}
                    className="shadow__btn me-3"
                  >
                    <span className="btn-txt">เกี่ยวกับเรา</span>
                  </button>
                </a>
                <a href="#our-services">
                  <button
                    style={{ 
                      fontSize: "1.2rem", 
                      fontFamily: "Prompt, sans-serif",
                      minWidth: "200px",
                      background: "transparent",
                      border: "2px solid #3b82f6",
                      color: "#3b82f6",
                      padding: "12px 32px",
                      borderRadius: "50px",
                      fontWeight: "600",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "#3b82f6";
                      e.target.style.color = "#ffffff";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "transparent";
                      e.target.style.color = "#3b82f6";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    บริการของเรา
                  </button>
                </a>
              </motion.div>

              {/* Key highlights */}
              <motion.div
                className="row mt-5 pt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                {[
                  { icon: "📋", text: "CPA รับอนุญาต" },
                  { icon: "🏆", text: "มาตรฐานสากล" },
                  { icon: "⚡", text: "บริการรวดเร็ว" },
                  { icon: "🤝", text: "ให้คำปรึกษา 24/7" },
                ].map((item, i) => (
                  <div className="col-lg-3 col-md-6 col-6 mb-3" key={i}>
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.9)",
                        borderRadius: "15px",
                        padding: "1.5rem 1rem",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow = "0 8px 30px rgba(59, 130, 246, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
                      }}
                    >
                      <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "1rem",
                          fontWeight: "600",
                          color: "#1f2937",
                          fontFamily: "Prompt, sans-serif",
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
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

      {/* Statistics Section */}
      <div className="stats-section" style={{ padding: "100px 0" }}>
        <div className="container">
          <motion.h2
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              fontFamily: "Prompt, sans-serif",
              color: "#ffffff",
              marginBottom: "60px",
            }}
          >
            ความน่าเชื่อถือในตัวเลข
          </motion.h2>
          
          <div className="row">
            {[
              { number: "500+", label: "ลูกค้าที่ไว้วางใจ" },
              { number: "15+", label: "ปีประสบการณ์" },
              { number: "1000+", label: "งบการเงินที่ตรวจสอบ" },
              { number: "99%", label: "ความพึงพอใจของลูกค้า" },
            ].map((stat, i) => (
              <motion.div
                className="col-lg-3 col-md-6 mb-4"
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div
        className="professional-section"
        style={{ padding: "120px 0" }}
      >
        <div className="container">
          <motion.h2
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              fontFamily: "Prompt, sans-serif",
              color: "#1f2937",
              marginBottom: "80px",
            }}
          >
            ทำไมต้องเลือกเรา?
          </motion.h2>

          <div className="row">
            {[
              {
                icon: "🏆",
                title: "มาตรฐานสากล",
                desc: "ปฏิบัติตามมาตรฐานการบัญชีและการสอบบัญชีสากล เพื่อความถูกต้องและน่าเชื่อถือ",
              },
              {
                icon: "⚡",
                title: "รวดเร็วแม่นยำ",
                desc: "ใช้เทคโนโลยีทันสมัยในการประมวลผล ทำให้งานเสร็จรวดเร็วและแม่นยำ",
              },
              {
                icon: "🛡️",
                title: "ปลอดภัยเชื่อถือได้",
                desc: "ระบบรักษาความปลอดภัยข้อมูลระดับสูง และการปฏิบัติตามกฎหมายอย่างเคร่งครัด",
              },
              {
                icon: "💡",
                title: "คำปรึกษาเชิงกลยุทธ์",
                desc: "ไม่เพียงแค่ทำบัญชี แต่ให้คำแนะนำเพื่อการเติบโตทางธุรกิจอย่างยั่งยืน",
              },
            ].map((feature, i) => (
              <motion.div
                className="col-lg-6 col-md-6 mb-4"
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h4
                    style={{
                      fontFamily: "Prompt, sans-serif",
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      marginBottom: "1rem",
                      color: "#1f2937",
                    }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      fontFamily: "Prompt, sans-serif",
                      color: "#6b7280",
                      lineHeight: "1.8",
                    }}
                  >
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* บริการของเรา */}
      <div
        id="our-services"
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
              icon: "�",
              title: "การทำบัญชี",
              desc: "บริการจัดทำบัญชีครบวงจร ตั้งแต่การบันทึกรายการ จัดทำงบการเงิน ไปจนถึงการยื่นแบบแสดงรายการภาษี",
              features: ["บันทึกรายการรายวัน", "จัดทำงบการเงิน", "ยื่นภาษีมูลค่าเพิ่ม", "ภาษีเงินได้นิติบุคคล"],
            },
            {
              icon: "🔍",
              title: "การตรวจสอบบัญชี",
              desc: "ตรวจสอบงบการเงินโดยผู้สอบบัญชีรับอนุญาต (CPA) ตามมาตรฐานการสอบบัญชี เพื่อความน่าเชื่อถือ",
              features: ["ตรวจสอบงบการเงิน", "รายงานผู้สอบบัญชี", "ตรวจสอบภายใน", "Due Diligence"],
            },
            {
              icon: "�",
              title: "คำปรึกษาการเงิน",
              desc: "ให้คำแนะนำด้านการเงิน การลงทุน และการวางแผนทางการเงินเพื่อการเติบโตของธุรกิจ",
              features: ["วิเคราะห์งบการเงิน", "วางแผนการเงิน", "ประเมินโครงการลงทุน", "ปรับโครงสร้างหนี้"],
            },
            {
              icon: "�",
              title: "วางแผนภาษี",
              desc: "ช่วยวางแผนภาษีให้ถูกต้องตามกฎหมาย และประหยัดค่าใช้จ่ายด้านภาษีอย่างเหมาะสม",
              features: ["วางแผนภาษีเงินได้", "ภาษีมูลค่าเพิ่ม", "ภาษีธุรกิจเฉพาะ", "ภาษีเงินได้บุคคลธรรมดา"],
            },
          ].map((item, i) => (
            <motion.div
              className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center"
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="service-card text-left p-4" style={{ width: "100%", maxWidth: "400px" }}>
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      fontSize: "2.5rem",
                      marginRight: "1rem",
                      width: "60px",
                      height: "60px",
                      background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                      borderRadius: "15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h5
                    className="fw-bold mb-0"
                    style={{
                      fontSize: "1.5rem",
                      fontFamily: "Prompt, sans-serif",
                      color: "#1f2937",
                    }}
                  >
                    {item.title}
                  </h5>
                </div>
                
                <p
                  style={{
                    fontSize: "1.1rem",
                    fontFamily: "Prompt, sans-serif",
                    color: "#6b7280",
                    lineHeight: "1.7",
                    marginBottom: "1.5rem",
                  }}
                >
                  {item.desc}
                </p>
                
                <div className="mt-3">
                  <h6
                    style={{
                      fontSize: "1rem",
                      fontFamily: "Prompt, sans-serif",
                      color: "#1f2937",
                      marginBottom: "0.8rem",
                      fontWeight: "600",
                    }}
                  >
                    บริการรวม:
                  </h6>
                  <ul style={{ paddingLeft: "0", listStyle: "none" }}>
                    {item.features.map((feature, index) => (
                      <li
                        key={index}
                        style={{
                          fontSize: "0.95rem",
                          fontFamily: "Prompt, sans-serif",
                          color: "#6b7280",
                          marginBottom: "0.4rem",
                          paddingLeft: "1.5rem",
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: "0",
                            color: "#3b82f6",
                            fontWeight: "bold",
                          }}
                        >
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div
        className="professional-section"
        style={{ padding: "120px 0" }}
      >
        <div className="container">
          <motion.h2
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              fontFamily: "Prompt, sans-serif",
              color: "#1f2937",
              marginBottom: "80px",
            }}
          >
            ความคิดเห็นจากลูกค้า
          </motion.h2>

          <div className="row">
            {[
              {
                name: "คุณสมชาย วิทยานุกูล",
                company: "บริษัท ABC จำกัด",
                testimonial: "บริการดีมาก ทีมงานมืออาชีพ ให้คำแนะนำที่เป็นประโยชน์ต่อการดำเนินธุรกิจของเรามาก",
                rating: 5,
              },
              {
                name: "คุณสุนิสา ธนาคาร",
                company: "ร้านค้าปลีก XYZ",
                testimonial: "ตรวจสอบบัญชีอย่างละเอียด รายงานชัดเจน ทำให้เราวางแผนธุรกิจได้ดีขึ้น",
                rating: 5,
              },
              {
                name: "คุณประยุทธ เศรษฐกิจ",
                company: "โรงงานผลิต DEF",
                testimonial: "ช่วยประหยัดค่าใช้จ่ายด้านภาษีได้มาก และให้คำปรึกษาการเงินที่มีประโยชน์",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <motion.div
                className="col-lg-4 col-md-6 mb-4"
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-card">
                  <div style={{ marginBottom: "1rem" }}>
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <span key={index} style={{ color: "#fbbf24", fontSize: "1.2rem" }}>
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      fontFamily: "Prompt, sans-serif",
                      fontStyle: "italic",
                      marginBottom: "1.5rem",
                      color: "#4b5563",
                    }}
                  >
                    {testimonial.testimonial}
                  </p>
                  <div>
                    <h6
                      style={{
                        fontFamily: "Prompt, sans-serif",
                        fontWeight: "600",
                        color: "#1f2937",
                      }}
                    >
                      {testimonial.name}
                    </h6>
                    <small style={{ color: "#6b7280" }}>{testimonial.company}</small>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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

        {/* ข้อมูลติดต่อแบบใหม่ */}
        <div className="row mt-5">
          <div className="col-lg-4 col-md-6 mb-4">
            <motion.div
              className="contact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="d-flex align-items-center">
                <div className="contact-icon">📍</div>
                <div>
                  <h5 style={{ fontFamily: "Prompt, sans-serif", margin: 0 }}>
                    ที่ตั้งสำนักงาน
                  </h5>
                  <p style={{ margin: 0, color: "#6b7280" }}>
                    677/5 ซอย ลาดพร้าว 48 แขวงสามเสนนอก เขตห้วยขวาง กรุงเทพมหานคร 10310
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <motion.div
              className="contact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="d-flex align-items-center">
                <div className="contact-icon">📞</div>
                <div>
                  <h5 style={{ fontFamily: "Prompt, sans-serif", margin: 0 }}>
                    โทรศัพท์
                  </h5>
                  <p style={{ margin: 0, color: "#6b7280" }}>
                    02-276-9968
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4">
            <motion.div
              className="contact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="d-flex align-items-center">
                <div className="contact-icon">✉️</div>
                <div>
                  <h5 style={{ fontFamily: "Prompt, sans-serif", margin: 0 }}>
                    อีเมล
                  </h5>
                  <p style={{ margin: 0, color: "#6b7280" }}>
                    info@ornanongaccounting.com
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* เวลาทำการ */}
        <motion.div
          className="contact-card"
          style={{ maxWidth: "600px", margin: "2rem auto 0" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h5 style={{ fontFamily: "Prompt, sans-serif", marginBottom: "1rem" }}>
              เวลาทำการ
            </h5>
            <div className="row">
              <div className="col-md-6">
                <p style={{ margin: "0.5rem 0", color: "#6b7280" }}>
                  จันทร์ - ศุกร์: 8:00 - 17:00 น.
                </p>
              </div>
              <div className="col-md-6">
                <p style={{ margin: "0.5rem 0", color: "#6b7280" }}>
                  เสาร์: 8:00 - 12:00 น.
                </p>
              </div>
            </div>
            <p style={{ margin: "0.5rem 0", color: "#6b7280" }}>
              อาทิตย์: ปิดทำการ
            </p>
          </div>
        </motion.div>

        {/* ข้อมูลติดต่อเพิ่มเติม */}
        <motion.div
          className="contact-info mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            fontSize: "1.2rem",
            fontFamily: "Prompt, sans-serif",
            color: "#333",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "1.1rem", color: "#6b7280" }}>
            💼 พร้อมให้คำปรึกษาและบริการด้านบัญชีครบวงจร
          </p>
        </motion.div>
      </div>

      {/* Enhanced Footer */}
      <footer style={{ background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)", color: "#ffffff" }}>
        <div className="footer-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={logoImage}
                    alt="Logo"
                    width="50"
                    height="50"
                    className="me-3"
                    style={{ borderRadius: "50%" }}
                  />
                  <h5 style={{ fontFamily: "Prompt, sans-serif", margin: 0 }}>
                    ORNANONG ACCOUNTING
                  </h5>
                </div>
                <p style={{ fontSize: "0.95rem", color: "rgba(255, 255, 255, 0.8)" }}>
                  ผู้เชี่ยวชาญด้านบัญชี การสอบบัญชี และการให้คำปรึกษาทางการเงิน
                  ด้วยทีมงานมืออาชีพและประสบการณ์จริง
                </p>
              </div>
              
              <div className="col-lg-2 col-md-6 mb-4">
                <h6 style={{ fontFamily: "Prompt, sans-serif", marginBottom: "1rem" }}>
                  บริการของเรา
                </h6>
                <div className="footer-links">
                  <p><a href="#our-services">การทำบัญชี</a></p>
                  <p><a href="#our-services">การตรวจสอบบัญชี</a></p>
                  <p><a href="#our-services">คำปรึกษาด้านภาษา</a></p>
                  <p><a href="#our-services">วางแผนภาษี</a></p>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6 mb-4">
                <h6 style={{ fontFamily: "Prompt, sans-serif", marginBottom: "1rem" }}>
                  ข้อมูลติดต่อ
                </h6>
                <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.8)" }}>
                  📍 677/5 ซอย ลาดพร้าว 48<br />
                  แขวงสามเสนนอก เขตห้วยขวาง<br />
                  กรุงเทพมหานคร 10310
                </p>
                <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.8)" }}>
                  📞 02-276-9968<br />
                  ✉️ info@ornanongaccounting.com
                </p>
              </div>
              
              <div className="col-lg-3 col-md-6 mb-4">
                <h6 style={{ fontFamily: "Prompt, sans-serif", marginBottom: "1rem" }}>
                  ติดตามเรา
                </h6>
                <div style={{ fontSize: "2rem" }}>
                  <a
                    href="https://www.facebook.com/..."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ margin: "0 15px 0 0", color: "#3b5998" }}
                  >
                    <FaFacebookSquare />
                  </a>
                  <a
                    href="https://line.me/ti/p/..."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ margin: "0 15px 0 0", color: "#00c300" }}
                  >
                    <FaLine />
                  </a>
                  <a
                    href="mailto:info@ornanongaccounting.com"
                    style={{ margin: "0 15px 0 0", color: "#D44638" }}
                  >
                    <FaEnvelope />
                  </a>
                </div>
                <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.8)", marginTop: "1rem" }}>
                  เวลาทำการ: จันทร์-ศุกร์ 8:00-17:00 น.<br />
                  เสาร์ 8:00-12:00 น.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", padding: "20px 0" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p style={{ margin: 0, fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.7)" }}>
                  © 2025 บริษัท สำนักงานอรอนงค์การบัญชีและสอบบัญชี จำกัด
                </p>
              </div>
              <div className="col-md-6 text-md-end">
                <p style={{ margin: 0, fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.7)" }}>
                  สงวนลิขสิทธิ์ทุกการใช้งาน
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
