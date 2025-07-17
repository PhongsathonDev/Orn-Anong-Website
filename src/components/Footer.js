import React from "react";
import { FaFacebookSquare, FaLine, FaEnvelope } from "react-icons/fa";
import logoImage from "../image/favicon.jpg";

const Footer = () => (
  <footer
    style={{
      background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
      color: "#ffffff",
      fontFamily: "Prompt, sans-serif",
    }}
  >
    <div className="footer-section" >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4" style={{ width: "380px" }}>
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
            <p
              style={{
                fontSize: "0.95rem",
                color: "rgba(255, 255, 255, 0.8)",
                width: "350px"
              }}
            >
              ผู้เชี่ยวชาญด้านบัญชี การสอบบัญชี และการให้คำปรึกษาทางการเงิน
              ด้วยทีมงานมืออาชีพและประสบการณ์จริง
            </p>
            <div style={{ display: "flex", justifyContent: "left", alignItems: "left", gap: "18px" }}>
                <a
                    href="https://www.consultant.pdmo.go.th/"
                    target="_blank"
                    rel="www.consultant.pdmo.go.th"
                  > 
                <img
                  src={require("../image/consultant2.png")}
                  alt="Consultant Certificate"
                  style={{
                    maxWidth: "348px",
                    width: "100%",
                    height: "auto",
                    // background: "white",
                    paddingTop: "0px",
                    paddingBottom: "10px",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                    borderRadius: "12px",
                    marginTop: "8px",
                    
                  }}
                />
                </a>
                </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4" style={{ width: "230px" }}>
            <h6
              style={{
                fontFamily: "Prompt, sans-serif",
                marginBottom: "1rem",
              }}
            >
              บริการของเรา
            </h6>
            <div className="footer-links">
              <p>
                <a href="#our-services">ด้านกฎหมาย</a>
              </p>
              <p>
                <a href="#our-services">จัดทำบัญชีและเงินเดือน</a>
              </p>
              <p>
                <a href="#our-services">ตรวจสอบบัญชี</a>
              </p>
              <p>
                <a href="#our-services">ตรวจสอบภายใน</a>
              </p>
              <p>
                <a href="#our-services">ออกแบบพัฒนาเว็บไซต์และไอที</a>
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4" style={{ width: "270px" }}>
            <h6
              style={{
                fontFamily: "Prompt, sans-serif",
                marginBottom: "1rem",
              }}
            >
              ข้อมูลติดต่อ
            </h6>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              📍 677/5 ซอย ลาดพร้าว 48
              <br />
              แขวงสามเสนนอก เขตห้วยขวาง
              <br />
              กรุงเทพมหานคร 10310
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              📞 02-276-9968
              <br />
              ✉️ oaoffice@ornthai.com <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; oaoffice1984@gmail.com
            </p>
            <a
                    href="https://lawyerscouncil.or.th/"
                    target="_blank"
                    rel="lawyerscouncil.or.th"
                  > 
            <img
                  src={require("../image/lawyerscouncil4.png")}
                  alt="Lawyers Council Certificate"
                  style={{
                    maxWidth: "280px",
                    width: "100%",
                    height: "auto",
                    // background: "white",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    borderRadius: "12px",
                    
                  }}
                />
                </a>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h6
              style={{
                fontFamily: "Prompt, sans-serif",
                marginBottom: "0.2rem",
              }}
            >
              ติดตามเรา
            </h6>
            <div style={{ fontSize: "2rem" }}>
              <a
                href="https://www.facebook.com/thailandtaxlaw/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "0 15px 0 0", color: "#3b5998" }}
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://line.me/R/ti/p/@443namoj"
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
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.8)",
                marginTop: "0.5rem",

              }}
            >
              เวลาทำการ: จันทร์-ศุกร์ 8:30-17:30 น.
              <div style={{


                marginRight: "75px",
              }}>
                  <a
                    href="https://www.dbd.go.th/"
                    target="_blank"
                    rel="www.dbd.go.th"
                  >
                    <img
                      src={require("../image/dbd-certified.png")}
                      alt="DBD Certified Accounting Practice"
                      style={{
                        maxWidth: "222px",
                        width: "100%",
                        height: "auto",
                        background: "white",
                        padding: "10px",
                        borderRadius: "12px",
                        marginTop: "10px",
                      }}
                    />
                  </a>
                
                
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "20px 0",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p
              style={{
                margin: 0,
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.7)",
              }}
            >
              © 2025 บริษัท สำนักงานอรอนงค์การบัญชีและสอบบัญชี จำกัด
            </p>
            
          </div>
          <div className="col-md-6 text-md-end">
            <p
              style={{
                margin: 0,
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.7)",
              }}
            >
              สงวนลิขสิทธิ์ทุกการใช้งาน
            </p>
            
          </div>
          
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
