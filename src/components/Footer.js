import React from "react";
import { FaFacebookSquare, FaLine, FaEnvelope } from "react-icons/fa";
import logoImage from "../image/favicon.jpg";

const Footer = () => (
  <footer
    style={{
      background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
      color: "#ffffff",
    }}
  >
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
            <p
              style={{
                fontSize: "0.95rem",
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              ผู้เชี่ยวชาญด้านบัญชี การสอบบัญชี และการให้คำปรึกษาทางการเงิน
              ด้วยทีมงานมืออาชีพและประสบการณ์จริง
            </p>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
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
                <a href="#our-services">การทำบัญชี</a>
              </p>
              <p>
                <a href="#our-services">การตรวจสอบบัญชี</a>
              </p>
              <p>
                <a href="#our-services">คำปรึกษาด้านภาษา</a>
              </p>
              <p>
                <a href="#our-services">วางแผนภาษี</a>
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
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
              ✉️ info@ornanongaccounting.com
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h6
              style={{
                fontFamily: "Prompt, sans-serif",
                marginBottom: "1rem",
              }}
            >
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
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.8)",
                marginTop: "1rem",
              }}
            >
              เวลาทำการ: จันทร์-ศุกร์ 9:00-17:00 น.
              <br />
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
