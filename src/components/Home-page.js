import React, { useState, useEffect } from "react";
// ...existing code...
import { FaFacebookSquare, FaLine, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import OurServicesSection from "./OurServicesSection";
import logoImage from "../image/favicon.jpg";
import "../css/Home-page.css";
import about from "../image/about.webp";

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
                  fontSize: "5.5rem",
                  fontWeight: "bold",
                  fontFamily: "Prompt, sans-serif",
                  lineHeight: "1.2",
                  color: "rgb(51, 95, 214)",
                  textShadow: "180 2px 8px rgb(231, 231, 231)",
                }}
              >
                สำนักงานอรอนงค์ <br /> การบัญชีและสอบบัญชี
              </motion.h1>

              <motion.h2
                className="mb-5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                style={{
                  fontSize: "1.8rem",
                  fontFamily: "Prompt, sans-serif",
                  color: "rgb(63, 67, 75)",
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
                      height: "55px",
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
            </div>
          </motion.div>
        </div>
      </div>

      {/* เกี่ยวกับเรา */}
      <div
        id="getstart"
        style={{
          paddingTop: "120px",
          paddingBottom: "60px",
          background:
            "https://media.istockphoto.com/id/2045620685/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B8%AD%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A2%E0%B8%B8%E0%B8%95%E0%B8%B4%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1-%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B8%AD-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%81%E0%B8%8E%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B8%A2%E0%B8%9A%E0%B8%99%E0%B9%82%E0%B8%95%E0%B9%8A%E0%B8%B0%E0%B8%AA%E0%B9%8D%E0%B8%B2%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9E%E0%B8%B4%E0%B8%88%E0%B8%B2%E0%B8%A3%E0%B8%93%E0%B8%B2%E0%B8%84%E0%B8%94%E0%B8%B5%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%A8%E0%B8%B2%E0%B8%A5-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B8%81%E0%B8%8E%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B8%A2-%E0%B8%AB%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B8%A3.jpg?s=612x612&w=0&k=20&c=L4z7E3SfTjHEP__CbY5OAPOuxflUcaxqlSscnob3a5Y=",
          position: "relative",
          overflow: "hidden",
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
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2
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
              เกี่ยวกับเรา
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              style={{
                height: "4px",
                background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                margin: "0 auto",
                borderRadius: "2px",
              }}
            ></motion.div>
          </motion.div>

          {/* แถวภาพ + ข้อความ */}
          <motion.div
            className="row align-items-center mb-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="col-lg-6 mb-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{ position: "relative" }}
              >
                <img
                  src={about}
                  alt="เกี่ยวกับเรา"
                  className="img-fluid rounded-4 shadow-lg"
                  style={{
                    width: "100%",
                    height: "320px",
                    objectFit: "cover",
                    border: "4px solid rgba(59, 130, 246, 0.1)",
                  }}
                />
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
                ></div>
              </motion.div>
            </div>
            
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    padding: "2rem",
                    borderRadius: "16px",
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "Prompt, sans-serif",
                      fontSize: "2rem",
                      fontWeight: "700",
                      color: "#1e293b",
                      lineHeight: "1.2",
                    }}
                  >
                    เราคือใคร?
                  </h3>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      lineHeight: "1.8rem",
                      fontFamily: "Prompt, sans-serif",
                      color: "#475569",
                      marginBottom: "1.2rem",
                    }}
                  >
                    บริษัท{" "}
                    <strong style={{ color: "#3b82f6" }}>
                      สำนักงานอรอนงค์ การบัญชีและสอบบัญชี จำกัด{" "}
                    </strong>
                    คือผู้เชี่ยวชาญด้านบัญชี การสอบบัญชี
                    และการให้คำปรึกษาทางการเงิน โดยทีมงานผู้สอบบัญชีรับอนุญาต
                    (CPA) และที่ปรึกษาที่มีประสบการณ์จริง
                  </p>

                  {/* เพิ่มจุดเด่นย่อย */}
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex align-items-center">
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          background:
                            "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                          borderRadius: "50%",
                          marginRight: "1rem",
                        }}
                      ></div>
                      <span
                        style={{
                          fontSize: "1.1rem",
                          fontFamily: "Prompt, sans-serif",
                          color: "#64748b",
                        }}
                      >
                        ประสบการณ์กว่า 15 ปี
                      </span>
                    </div>
                    <div className="d-flex align-items-center">
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          background:
                            "linear-gradient(45deg, #10b981, #3b82f6)",
                          borderRadius: "50%",
                          marginRight: "1rem",
                        }}
                      ></div>
                      <span
                        style={{
                          fontSize: "1.1rem",
                          fontFamily: "Prompt, sans-serif",
                          color: "#64748b",
                        }}
                      >
                        ทีมงานผู้เชี่ยวชาญ CPA
                      </span>
                    </div>
                    <div className="d-flex align-items-center">
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          background:
                            "linear-gradient(45deg, #f59e0b, #10b981)",
                          borderRadius: "50%",
                          marginRight: "1rem",
                        }}
                      ></div>
                      <span
                        style={{
                          fontSize: "1.1rem",
                          fontFamily: "Prompt, sans-serif",
                          color: "#64748b",
                        }}
                      >
                        บริการครบวงจร
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* จุดเด่นบริษัท */}
          <div className="row text-center mt-5">
            {[
              {
                icon: "📊",
                title: "มืออาชีพ",
                desc: "ทีมงานมีใบอนุญาตและประสบการณ์จริง",
                color: "#3b82f6",
                bgGradient: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
              },
              {
                icon: "🔍",
                title: "โปร่งใส",
                desc: "รายงานตรงไปตรงมา ตรวจสอบได้ทุกขั้นตอน",
                color: "#10b981",
                bgGradient: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",
              },
              {
                icon: "🤝",
                title: "ดูแลคุณเสมอ",
                desc: "ให้คำปรึกษาแบบเข้าใจง่ายและตรงจุด",
                color: "#8b5cf6",
                bgGradient: "linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)",
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
                <motion.div
                  className="h-100 position-relative"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: item.bgGradient,
                    padding: "2rem 1.2rem",
                    borderRadius: "16px",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
                    border: `2px solid ${item.color}20`,
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 15px 40px ${item.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  {/* Background decoration */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-30px",
                      right: "-30px",
                      width: "80px",
                      height: "80px",
                      background: `${item.color}15`,
                      borderRadius: "50%",
                    }}
                  ></div>

                  <div
                    style={{
                      fontSize: "3rem",
                      marginBottom: "1.2rem",
                      background: `linear-gradient(45deg, ${item.color}, ${item.color}aa)`,
                      borderRadius: "50%",
                      width: "70px",
                      height: "70px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.2rem auto",
                      boxShadow: `0 6px 15px ${item.color}30`,
                      fontSize: "1.8rem",
                    }}
                  >
                    <span style={{ color: "white" }}>{item.icon}</span>
                  </div>

                  <h4
                    className="mb-3"
                    style={{
                      fontFamily: "Prompt, sans-serif",
                      fontSize: "1.4rem",
                      fontWeight: "700",
                      color: item.color,
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      fontFamily: "Prompt, sans-serif",
                      color: "#64748b",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* เนื้อหาสรุปต่อท้าย */}
          <motion.div
            className="text-center mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              padding: "2rem 1.5rem",
              borderRadius: "16px",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              maxWidth: "700px",
              margin: "2rem auto 0 auto",
            }}
          >
            <p
              style={{
                fontSize: "1.2rem",
                fontFamily: "Prompt, sans-serif",
                lineHeight: "1.9rem",
                color: "#475569",
                margin: 0,
              }}
            >
              เราให้บริการที่
              <strong style={{ color: "#3b82f6" }}>ครอบคลุม</strong>{" "}
              ตั้งแต่การทำบัญชี การวางแผนภาษี การจัดทำงบการเงิน
              ไปจนถึงการวิเคราะห์ข้อมูลและให้คำแนะนำเชิงกลยุทธ์
              พร้อมสร้างความมั่นใจและเป็นส่วนหนึ่งในการเติบโตของธุรกิจของคุณ
            </p>

            {/* Call to action */}
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <a href="#our-services">
                <button
                  style={{
                    background:
                      "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                    border: "none",
                    color: "white",
                    padding: "10px 25px",
                    borderRadius: "25px",
                    fontSize: "1rem",
                    fontFamily: "Prompt, sans-serif",
                    fontWeight: "600",
                    boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow =
                      "0 6px 20px rgba(59, 130, 246, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow =
                      "0 4px 15px rgba(59, 130, 246, 0.3)";
                  }}
                >
                  ดูบริการของเรา →
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
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

      {/* ความคิดเห็นจากลูกค้า */}
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
      </div>

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
                            081-234-5678
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
                            info@ornanongaccounting.com
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
                            จันทร์-ศุกร์: 9:00 - 17:00 น.
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
                          href="https://www.facebook.com/..."
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
                          href="mailto:info@ornanongaccounting.com"
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.895396133994!2d100.58331867594516!3d13.78289949653901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e777e651a91%3A0x544990453506849a!2z4LiB4Lij4Li44LiH4LmA4LiK4Li14Lii4Li44LiV4Liq4Liy4Lir4LiB4Lij4Liy4LiK4Lih4Li54Li24LiB4LiX4Liy4LiH!5e0!3m2!1sth!2sth!4v1720685210581!5m2!1sth!2sth"
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
                          เดินต่ออีกประมาณ 10 นาที
                        </li>
                        <li
                          style={{
                            fontFamily: "Prompt, sans-serif",
                            color: "#475569",
                            fontSize: "0.95rem",
                            marginBottom: "6px",
                          }}
                        >
                          <strong>รถประจำทาง:</strong> สาย ***, ***, **, ***
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
