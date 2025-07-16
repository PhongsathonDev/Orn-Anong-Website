import React, { useState, useEffect } from "react";
// ...existing code...
import { FaFacebookSquare, FaLine, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import OurServicesSection from "./OurServicesSection";
import logoImage from "../image/favicon.jpg";
import "../css/Home-page.css";
import about from "../image/about.webp";
import Main from "./Main";

function HomePage() {
  // ใช้ localStorage เพื่อแสดง splash เฉพาะครั้งแรก
  const [isLoading, setIsLoading] = useState(() => {
    const hasAnimated = localStorage.getItem('logoAnimated');
    return !hasAnimated;
  });

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('logoAnimated', 'true');
        document.body.classList.add("loaded");
      }, 3500);
      return () => clearTimeout(timer);
    } else {
      document.body.classList.add("loaded");
    }
  }, [isLoading]);

  // ...existing code...

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
      <div className="bg-animated" id="home"></div>
      {/* ส่วน hero พร้อมพื้นหลัง */}
      <div className="hero-wrapper ">
        <div
          className="container mt-5"
          style={{ paddingTop: "200px", paddingBottom: "180px", maxWidth: "1200px" }}
        >
          <motion.div
            className="row align-items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div className="col-lg-8 mx-auto text-center">
              <main>
                <Main />
              </main>

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
                      height: "55px",
                      borderRadius: "8px",
                      marginTop: "20px",
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
                      height: "55px",
                      background: "transparent",
                      border: "2px solid #3b82f6",
                      color: "#3b82f6",
                      padding: "12px 32px",
                      borderRadius: "8px",
                      fontWeight: "600",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      transition: "all 0.3s ease",
                      marginTop: "20px",
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
            </div>
          </motion.div>
        </div>
      </div>

      {/* เกี่ยวกับเรา */}
      <section
        id="getstart"
        className="position-relative overflow-hidden"
        style={{
          paddingTop: "120px",
          paddingBottom: "80px",
          background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)",
        }}
      >
        {/* Background decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "-5%",
            width: "300px",
            height: "300px",
            background:
              "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
            borderRadius: "50%",
            filter: "blur(40px)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            left: "-5%",
            width: "250px",
            height: "250px",
            background:
              "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))",
            borderRadius: "50%",
            filter: "blur(40px)",
          }}
        ></div>

        <div className="container">
          {/* Header Section */}
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="display-4 fw-bold mb-3"
              style={{
                fontFamily: "Prompt, sans-serif",
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              เกี่ยวกับเรา
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="mx-auto mb-4"
              style={{
                height: "4px",
                background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                borderRadius: "2px",
              }}
            />
            <p className="lead text-muted" style={{ fontFamily: "Prompt, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
              มากกว่า 40 ปีแห่งประสบการณ์ในการให้บริการด้านบัญชี การสอบบัญชี และให้คำปรึกษาทางการเงิน
            </p>
          </motion.div>

          {/* Main Content Row */}
          <motion.div
            className="row align-items-center mb-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Image Column */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="position-relative"
              >
                <img
                  src={about}
                  alt="เกี่ยวกับบริษัท สำนักงานอรอนงค์ การบัญชีและสอบบัญชี"
                  className="img-fluid rounded-4 shadow-lg"
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    border: "3px solid rgba(59, 130, 246, 0.1)",
                  }}
                />
                <div
                  className="position-absolute"
                  style={{
                    top: "-15px",
                    left: "-15px",
                    right: "15px",
                    bottom: "15px",
                    background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))",
                    borderRadius: "25px",
                    zIndex: -1,
                  }}
                />
              </motion.div>
            </div>
            
            {/* Content Column */}
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="card border-0 shadow-lg h-100">
                  <div className="card-body p-4">
                    <h3 className="card-title h2 mb-4 text-primary" style={{ fontFamily: "Prompt, sans-serif" }}>
                      🏢 เราคือใคร?
                    </h3>
                    <p className="card-text fs-5 mb-4" style={{ fontFamily: "Prompt, sans-serif", lineHeight: "1.8" }}>
                      <strong className="text-primary">สำนักงานอรอนงค์ การบัญชีและสอบบัญชี จำกัด</strong> 
                      เป็นผู้เชี่ยวชาญด้านบัญชี การสอบบัญชี และการให้คำปรึกษาทางการเงิน 
                      ด้วยทีมงานผู้สอบบัญชีรับอนุญาต (CPA) และที่ปรึกษาผู้มีประสบการณ์จริง
                    </p>

                    {/* Achievement Stats */}
                    <div className="row g-3 mb-4">
                      <div className="col-sm-6">
                        <div className="d-flex align-items-center p-3 bg-light rounded-3">
                          <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "50px", height: "50px" }}>
                            <span className="fw-bold">40+</span>
                          </div>
                          <div>
                            <div className="fw-bold text-primary">ปีประสบการณ์</div>
                            <small className="text-muted">ในวงการบัญชี</small>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex align-items-center p-3 bg-light rounded-3">
                          <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "50px", height: "50px" }}>
                            <span className="fw-bold">CPA</span>
                          </div>
                          <div>
                            <div className="fw-bold text-success">ทีมผู้เชี่ยวชาญ</div>
                            <small className="text-muted">ใบอนุญาตครบถ้วน</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a href="#our-services" className="btn btn-primary btn-lg px-4">
                      ดูบริการของเรา <i className="fas fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Features Cards */}
          <div className="row g-4 mb-5">
            {[
              {
                icon: "💼",
                title: "มืออาชีพ",
                desc: "ทีมงานมีใบอนุญาตและประสบการณ์จริงในวงการบัญชีมากกว่า 40 ปี",
                color: "primary",
                delay: 0
              },
              {
                icon: "🔍",
                title: "โปร่งใส",
                desc: "รายงานตรงไปตรงมา ตรวจสอบได้ทุกขั้นตอน พร้อมคำอธิบายที่เข้าใจง่าย",
                color: "success",
                delay: 0.2
              },
              {
                icon: "🤝",
                title: "ดูแลคุณเสมอ",
                desc: "ให้คำปรึกษาแบบเข้าใจง่าย ตรงจุด และพร้อมช่วยเหลือตลอด 24/7",
                color: "info",
                delay: 0.4
              },
            ].map((item, i) => (
              <motion.div
                className="col-lg-4 col-md-6"
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`card border-0 shadow h-100 border-top border-${item.color} border-4`}
                >
                  <div className="card-body text-center p-4">
                    <div className={`bg-${item.color} bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3`} style={{ width: "80px", height: "80px" }}>
                      <span style={{ fontSize: "2.5rem" }}>{item.icon}</span>
                    </div>
                    <h4 className={`card-title text-${item.color} mb-3`} style={{ fontFamily: "Prompt, sans-serif" }}>
                      {item.title}
                    </h4>
                    <p className="card-text text-muted" style={{ fontFamily: "Prompt, sans-serif", lineHeight: "1.7" }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          
        </div>
      </section>
      {/* ใบรับรอง */}
      <div
        id="about-duplicate"
        style={{
          paddingTop: "120px",
          paddingBottom: "60px",
          background:
            "linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "-5%",
            width: "300px",
            height: "300px",
            background:
              "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
            borderRadius: "50%",
            filter: "blur(40px)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            left: "-5%",
            width: "250px",
            height: "250px",
            background:
              "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))",
            borderRadius: "50%",
            filter: "blur(40px)",
          }}
        ></div>

        <div className="container">
          <div className="text-center mb-5">
            <h2
              style={{
                fontSize: "2.8rem",
                fontWeight: "800",
                fontFamily: "Prompt, sans-serif",
                background:
                  "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "1rem",
              }}
            >
              ใบรับรอง
            </h2>
            <div
              style={{
                height: "4px",
                background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                margin: "0 auto",
                borderRadius: "2px",
                width: "120px",
              }}
            ></div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4">
              <div style={{ position: "relative" }}>
                <img
                  src="https://png.pngtree.com/png-clipart/20250513/original/pngtree-certificate-design-vector-png-image_20949637.png"
                  alt="เกี่ยวกับเรา"
                  className="img-fluid rounded-4 shadow-lg"
                  style={{
                    width: "100%",
                    height: "320px",
                    objectFit: "cover",
                    border: "4px solid rgba(59, 130, 246, 0.1)",
                  }}
                />
                ใบรับรอง
                <div
                  style={{
                    position: "absolute",
                    top: "-10px",
                    left: "-10px",
                    right: "10px",
                    bottom: "10px",
                    background:
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))",
                    borderRadius: "20px",
                    zIndex: -1,
                  }}
                >
                  
                </div>
                
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div style={{ position: "relative" }}>
                <img
                  src="https://png.pngtree.com/png-clipart/20250513/original/pngtree-certificate-design-vector-png-image_20949637.png"
                  alt="เกี่ยวกับเรา"
                  className="img-fluid rounded-4 shadow-lg"
                  style={{
                    width: "100%",
                    height: "320px",
                    objectFit: "cover",
                    border: "4px solid rgba(59, 130, 246, 0.1)",
                  }}
                />
                ใบรับรอง
                <div
                  style={{
                    position: "absolute",
                    top: "-10px",
                    left: "-10px",
                    right: "10px",
                    bottom: "10px",
                    background:
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))",
                    borderRadius: "20px",
                    zIndex: -1,
                  }}
                >
                </div>
                
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div style={{ position: "relative" }}>
                <img
                  src="https://png.pngtree.com/png-clipart/20250513/original/pngtree-certificate-design-vector-png-image_20949637.png"
                  alt="เกี่ยวกับเรา"
                  className="img-fluid rounded-4 shadow-lg"
                  style={{
                    width: "100%",
                    height: "320px",
                    objectFit: "cover",
                    border: "4px solid rgba(59, 130, 246, 0.1)",
                  }}
                />
                ใบรับรอง
                <div
                  style={{
                    position: "absolute",
                    top: "-10px",
                    left: "-10px",
                    right: "10px",
                    bottom: "10px",
                    background:
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))",
                    borderRadius: "20px",
                    zIndex: -1,
                  }}
                >
                  
                </div>
                
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div style={{ position: "relative" }}>
                <img
                  src="https://png.pngtree.com/png-clipart/20250513/original/pngtree-certificate-design-vector-png-image_20949637.png"
                  alt="เกี่ยวกับเรา"
                  className="img-fluid rounded-4 shadow-lg"
                  style={{
                    width: "100%",
                    height: "320px",
                    objectFit: "cover",
                    border: "4px solid rgba(59, 130, 246, 0.1)",
                  }}
                />
                ใบรับรอง
                <div
                  style={{
                    position: "absolute",
                    top: "-10px",
                    left: "-10px",
                    right: "10px",
                    bottom: "10px",
                    background:
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))",
                    borderRadius: "20px",
                    zIndex: -1,
                  }}
                >
                  
                </div>
                
              </div>
            </div>
            

          
          


          </div>
        </div>
      </div>              
      {/* บริการของเรา */}
      <div id="our-services" style={{ scrollMarginTop: "50px" }}>
        <OurServicesSection />
      </div>

      {/* ความคิดเห็นจากลูกค้า
      <div
        className="container"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
      >
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            fontFamily: "Prompt, sans-serif",
            color: "#335fd6",
          }}
        >
          ความคิดเห็นจากลูกค้า
        </motion.h2>
        <div className="row justify-content-center">
          {[
            {
              name: "คุณสมชาย พ.",
              company: "บริษัท สมาร์ทเทค จำกัด",
              comment:
                "บริการดีมาก ให้คำปรึกษาอย่างละเอียดและเป็นกันเอง ประทับใจมากครับ ขอแนะนำสำหรับใครที่มองหาทีมบัญชีมืออาชีพจริง ๆ ครับ!",
              avatar: "https://randomuser.me/api/portraits/men/26.jpg",
              rating: 5,
              date: "10 ก.ค. 2025",
            },
            {
              name: "คุณอรทัย ว.",
              company: "หจก. อรทัยการบัญชี",
              comment:
                "ทีมงานมืออาชีพ ตอบทุกข้อสงสัยและช่วยวางแผนภาษีได้ดีมากค่ะ ประทับใจในความใส่ใจและความรวดเร็วในการให้บริการมาก ๆ ค่ะ",
              avatar: "https://randomuser.me/api/portraits/women/8.jpg",
              rating: 5,
              date: "5 ก.ค. 2025",
            },
            {
              name: "คุณณัฐวุฒิ ก.",
              company: "บริษัท เอ็นเอ็นดีเวลลอปเมนท์ จำกัด",
              comment:
                "ประทับใจในความรวดเร็วและความใส่ใจของทีมงานครับ งานเอกสารถูกต้องครบถ้วนและให้คำแนะนำดีมากครับ",
              avatar: "https://randomuser.me/api/portraits/men/67.jpg",
              rating: 4,
              date: "28 มิ.ย. 2025",
            },
          ].map((item, i) => (
            <motion.div
              className="col-lg-4 col-md-6 mb-4"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                className="p-4 shadow rounded-4 h-100 bg-white position-relative"
                style={{ minHeight: 260, borderTop: "6px solid #335fd6" }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 18,
                    right: 24,
                    fontSize: 32,
                    color: "#e0e7ff",
                    opacity: 0.7,
                  }}
                >
                  <span>“</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    width="56"
                    height="56"
                    style={{
                      borderRadius: "50%",
                      marginRight: 16,
                      border: "2px solid #335fd6",
                    }}
                  />
                  <div>
                    <span
                      style={{
                        fontWeight: 600,
                        fontFamily: "Prompt, sans-serif",
                        fontSize: "1.1rem",
                        color: "#335fd6",
                      }}
                    >
                      {item.name}
                    </span>
                    <div
                      style={{
                        fontSize: "0.95rem",
                        color: "#888",
                        fontFamily: "Prompt, sans-serif",
                      }}
                    >
                      {item.company}
                    </div>
                  </div>
                </div>
                <div
                  className="mb-2"
                  style={{ color: "#fbbf24", fontSize: "1.1rem" }}
                >
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx}>{idx < item.rating ? "★" : "☆"}</span>
                  ))}
                  <span
                    style={{
                      color: "#888",
                      fontSize: "0.95rem",
                      marginLeft: 8,
                    }}
                  >
                    {item.date}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "1.15rem",
                    fontFamily: "Prompt, sans-serif",
                    color: "#333",
                    minHeight: 80,
                  }}
                >
                  {item.comment}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}

      {/* ติดต่อเรา */}
      <div
        id="contract"
        style={{
          paddingTop: "120px",
          paddingBottom: "120px",
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        }}
      >
        <div className="container">
          <motion.h2
            className="text-center mb-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              fontFamily: "Prompt, sans-serif",
              color: "#1e293b",
            }}
          >
            ติดต่อเรา
          </motion.h2>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <motion.div
                className="p-5 shadow-lg rounded-4 bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{ borderTop: "6px solid #3b82f6" }}
              >
                <div className="row">
                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <h4
                      className="mb-4"
                      style={{
                        fontFamily: "Prompt, sans-serif",
                        color: "#3b82f6",
                        fontWeight: "700",
                      }}
                    >
                      ข้อมูลติดต่อ
                    </h4>

                    <div className="mb-4">
                      <div className="d-flex align-items-center mb-3">
                        <div
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "12px",
                            background:
                              "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "15px",
                            boxShadow: "0 4px 10px rgba(59, 130, 246, 0.15)",
                          }}
                        >
                          <span style={{ fontSize: "24px" }}>🗺️</span>
                        </div>
                        <div>
                          <h5
                            style={{
                              fontFamily: "Prompt, sans-serif",
                              color: "#1e293b",
                              margin: "0",
                              fontSize: "1.1rem",
                            }}
                          >
                            ที่อยู่
                          </h5>
                          <p
                            style={{
                              fontFamily: "Prompt, sans-serif",
                              color: "#475569",
                              margin: "0",
                              fontSize: "0.95rem",
                            }}
                          >
                            677/5 ซอย ลาดพร้าว 48 แขวงสามเสนนอก
                            <br />
                            เขตห้วยขวาง กรุงเทพฯ 10310
                          </p>
                        </div>
                      </div>

                      <div className="d-flex align-items-center mb-3">
                        <div
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "12px",
                            background:
                              "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "15px",
                            boxShadow: "0 4px 10px rgba(59, 130, 246, 0.15)",
                          }}
                        >
                          <span style={{ fontSize: "24px" }}>📞</span>
                        </div>
                        <div>
                          <h5
                            style={{
                              fontFamily: "Prompt, sans-serif",
                              color: "#1e293b",
                              margin: "0",
                              fontSize: "1.1rem",
                            }}
                          >
                            โทรศัพท์
                          </h5>
                          <p
                            style={{
                              fontFamily: "Prompt, sans-serif",
                              color: "#3b82f6",
                              fontWeight: "600",
                              fontSize: "1rem",
                              margin: "0",
                            }}
                          >
                            02-276-9968 
                          </p>
                        </div>
                      </div>

                      <div className="d-flex align-items-center mb-3">
                        <div
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "12px",
                            background:
                              "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "15px",
                            boxShadow: "0 4px 10px rgba(16, 185, 129, 0.15)",
                          }}
                        >
                          <span style={{ fontSize: "24px" }}>📱</span>
                        </div>
                        <div>
                          <h5
                            style={{
                              fontFamily: "Prompt, sans-serif",
                              color: "#1e293b",
                              margin: "0",
                              fontSize: "1.1rem",
                            }}
                          >
                            มือถือ
                          </h5>
                          <p
                            style={{
                              fontFamily: "Prompt, sans-serif",
                              color: "#10b981",
                              fontWeight: "600",
                              fontSize: "1rem",
                              margin: "0",
                            }}
                          >
                            086-461-0170
                          </p>
                        </div>
                      </div>

                      <div className="d-flex align-items-center mb-3">
                        <div
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "12px",
                            background:
                              "linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "15px",
                            boxShadow: "0 4px 10px rgba(139, 92, 246, 0.15)",
                          }}
                        >
                          <span style={{ fontSize: "24px" }}>✉️</span>
                        </div>
                        <div>
                          <h5
                            style={{
                              fontFamily: "Prompt, sans-serif",
                              color: "#1e293b",
                              margin: "0",
                              fontSize: "1.1rem",
                            }}
                          >
                            อีเมล
                          </h5>
                          <p
                            style={{
                              fontFamily: "Prompt, sans-serif",
                              color: "#8b5cf6",
                              fontWeight: "600",
                              fontSize: "1rem",
                              margin: "0",
                            }}
                          >
                            oaoffice1984@gmail.com <br /> oaoffice@ornthai.com
                          </p>
                        </div>
                      </div>

                      <div className="d-flex align-items-center mb-4">
                        <div
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "12px",
                            background:
                              "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "15px",
                            boxShadow: "0 4px 10px rgba(245, 158, 11, 0.15)",
                          }}
                        >
                          <span style={{ fontSize: "24px" }}>⏰</span>
                        </div>
                        <div>
                          <h5
                            style={{
                              fontFamily: "Prompt, sans-serif",
                              color: "#1e293b",
                              margin: "0",
                              fontSize: "1.1rem",
                            }}
                          >
                            เวลาทำการ
                          </h5>
                          <p
                            style={{
                              fontFamily: "Prompt, sans-serif",
                              color: "#475569",
                              fontSize: "0.95rem",
                              margin: "0",
                            }}
                          >
                            จันทร์-ศุกร์: 8:30 - 17:30 น.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="mb-4 pt-2"
                      style={{ borderTop: "1px dashed #e2e8f0" }}
                    >
                      <h5
                        className="mb-3"
                        style={{
                          fontFamily: "Prompt, sans-serif",
                          color: "#1e293b",
                        }}
                      >
                        ติดตามเราได้ที่
                      </h5>
                      <div className="d-flex gap-3">
                        <a
                          href="https://www.facebook.com/thailandtaxlaw/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                            background: "#1877f2",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            textDecoration: "none",
                            boxShadow: "0 4px 10px rgba(24, 119, 242, 0.3)",
                          }}
                        >
                          <FaFacebookSquare size={22} />
                        </a>
                        <a
                          href="https://line.me/R/ti/p/@443namoj"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                            background: "#00c300",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            textDecoration: "none",
                            boxShadow: "0 4px 10px rgba(0, 195, 0, 0.3)",
                          }}
                        >
                          <FaLine size={22} />
                        </a>
                        <a
                          href="oaoffice@ornthai.com"
                          style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                            background: "#ea4335",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            textDecoration: "none",
                            boxShadow: "0 4px 10px rgba(234, 67, 53, 0.3)",
                          }}
                        >
                          <FaEnvelope size={22} />
                        </a>
                      </div>
                    </div>

                    <div>
                      <p
                        style={{
                          fontSize: "1rem",
                          fontFamily: "Prompt, sans-serif",
                          color: "#475569",
                        }}
                      >
                        ติดต่อเราเพื่อรับคำปรึกษาฟรี!
                        เรายินดีให้คำปรึกษาด้านบัญชีและภาษีอย่างเป็นกันเอง
                        พร้อมบริการแบบมืออาชีพ
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <h4
                      className="mb-4"
                      style={{
                        fontFamily: "Prompt, sans-serif",
                        color: "#3b82f6",
                        fontWeight: "700",
                      }}
                    >
                      แผนที่
                    </h4>
                    <div
                      className="mb-4"
                      style={{
                        borderRadius: "15px",
                        overflow: "hidden",
                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d419.2150425033426!2d100.58528591561652!3d13.795156140159145!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29d23e23da677%3A0x14a7d4d171d5a50c!2z4Liq4Liz4LiZ4Lix4LiB4LiH4Liy4LiZ4Lit4Lij4Lit4LiZ4LiH4LiE4LmM4LiB4Liy4Lij4Lia4Lix4LiN4LiK4Li14LmB4Lil4Liw4Liq4Lit4Lia4Lia4Lix4LiN4LiK4Li1!5e0!3m2!1sth!2sth!4v1752635121245!5m2!1sth!2sth"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <div
                      className="p-3 rounded-4"
                      style={{
                        background: "rgba(59, 130, 246, 0.05)",
                        border: "1px dashed rgba(59, 130, 246, 0.3)",
                      }}
                    >
                      <h5
                        className="mb-2"
                        style={{
                          fontFamily: "Prompt, sans-serif",
                          color: "#3b82f6",
                          fontWeight: "600",
                          fontSize: "1.1rem",
                        }}
                      >
                        การเดินทาง
                      </h5>
                      <ul style={{ paddingLeft: "20px", marginBottom: "0" }}>
                        <li
                          style={{
                            fontFamily: "Prompt, sans-serif",
                            color: "#475569",
                            fontSize: "0.95rem",
                            marginBottom: "6px",
                          }}
                        >
                          <strong>รถไฟฟ้า MRT:</strong> สถานีภาวนา ทางออก 3
                          เดินต่ออีกประมาณ 15 นาที
                        </li>
                        
                        <li
                          style={{
                            fontFamily: "Prompt, sans-serif",
                            color: "#475569",
                            fontSize: "0.95rem",
                          }}
                        >
                          <strong>รถยนต์ส่วนตัว:</strong>{" "}
                          มีที่จอดรถฟรีสำหรับลูกค้า
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


      

export default HomePage;
