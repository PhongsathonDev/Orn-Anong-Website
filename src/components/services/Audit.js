import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Audit() {
  const [visibleItems, setVisibleItems] = useState([]);



  useEffect(() => {
    // Animate items one by one
    const timer = setTimeout(() => {
      setVisibleItems(prev => [...Array(9).keys()]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: "📊",
      title: "บริการตรวจสอบงบการเงิน",
      description: "บริการตรวจสอบงบการเงินของเรา ไม่ใช่แค่การปฏิบัติตามข้อบังคับ แต่คือการสร้างความเชื่อมั่นสูงสุดให้แก่ผู้มีส่วนได้ส่วนเสีย ไม่ว่าจะเป็นนักลงทุน สถาบันการเงิน หรือหน่วยงานกำกับดูแล ทีมผู้สอบบัญชีที่มากประสบการณ์ของเราจะเข้าตรวจสอบงบการเงินอย่างละเอียดตามมาตรฐานการสอบบัญชี เพื่อให้ข้อมูลทางการเงินของท่านสะท้อนภาพที่แท้จริงของกิจการอย่างถูกต้องและน่าเชื่อถือ",
      color: "#2196F3"
    },
    {
      icon: "💼",
      title: "บริการสอบทานงบการเงิน",
      description: "สำหรับกิจการที่ต้องการการยืนยันความถูกต้องของงบการเงิน แต่ยังไม่จำเป็นต้องตรวจสอบอย่างเต็มรูปแบบ บริการสอบทานงบการเงินคือคำตอบที่เหมาะสมที่สุด เราให้บริการสอบทานข้อมูลทางการเงินโดยใช้วิธีการสอบถามและการวิเคราะห์เปรียบเทียบเป็นหลัก ซึ่งเป็นกระบวนการที่รวดเร็วและประหยัดกว่าการตรวจสอบบัญชีเต็มรูปแบบ",
      color: "#4CAF50"
    },
    {
      icon: "🔍",
      title: "บริการตรวจสอบการซื้อกิจการ",
      description: "ก่อนที่คุณจะตัดสินใจลงทุนครั้งสำคัญ ไม่ว่าจะเป็นการซื้อกิจการ การควบรวม หรือการร่วมทุน บริการ Due Diligence ของเราจะช่วยให้คุณมองเห็นภาพรวมของบริษัทเป้าหมายได้อย่างทะลุปรุโปร่ง เราจะทำการตรวจสอบและวิเคราะห์ข้อมูลทางการเงิน กฎหมาย และการดำเนินงานอย่างเจาะลึก เพื่อระบุมูลค่าที่แท้จริง ตลอดจนความเสี่ยงและโอกาสที่ซ่อนอยู่",
      color: "#4CAF50"
    },
    {
      icon: "📋",
      title: "บริการตรวจสอบพิเศษ",
      description: "ก่อนที่คุณจะตัดสินใจลงทุนครั้งสำคัญ ไม่ว่าจะเป็นการซื้อกิจการ การควบรวม หรือการร่วมทุน บริการ Due Diligence ของเราจะช่วยให้คุณมองเห็นภาพรวมของบริษัทเป้าหมายได้อย่างทะลุปรุโปร่ง เราจะทำการตรวจสอบและวิเคราะห์ข้อมูลทางการเงิน กฎหมาย และการดำเนินงานอย่างเจาะลึก เพื่อระบุมูลค่าที่แท้จริง ตลอดจนความเสี่ยงและโอกาสที่ซ่อนอยู่",
      color: "#4CAF50"
    },
    {
      icon: "📈",
      title: "บริการที่ปรึกษาบัญชี และ บริการที่เกี่ยวเนื่อง",
      description: "นอกเหนือจากบริการตรวจสอบบัญชี เรายังพร้อมเป็นที่ปรึกษาผู้เชี่ยวชาญในทุกมิติของงานบัญชีและการเงิน ไม่ว่าจะเป็นการวางระบบบัญชี การจัดทำงบการเงินให้สอดคล้องกับมาตรฐานรายงานทางการเงิน (TFRS) การให้คำปรึกษาด้านภาษีอากร หรือการออกแบบระบบควบคุมภายใน ทีมงานของเราพร้อมให้คำแนะนำและโซลูชันที่เหมาะสมกับธุรกิจของคุณโดยเฉพาะ",
      color: "#4CAF50"
    },
  ];

  return (
    <>
      {/* Hero Section - Minimal Style */}
      <div style={{
        position: 'relative',
        background: 'linear-gradient(120deg, #f8fafc 60%, #e3e6ee 100%)',
        minHeight: '220px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 0 40px',
        marginBottom: '0',
      }}>
        <div style={{
          maxWidth: 700,
          width: '100%',
          textAlign: 'center',
          zIndex: 2,
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            margin: 0,
            color: '#2d3a4b',
            letterSpacing: '-1px',
            lineHeight: 1.2,
          }}>
            บริการตรวจสอบบัญชี
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#5a6270',
            margin: '18px 0 0',
            fontWeight: 400,
            letterSpacing: 0,
          }}>
            ครบถ้วนทุกบริการด้านกฎหมายสำหรับธุรกิจและบุคคล
          </p>
        </div>
        {/* Minimalist overlay shape */}
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: 180,
          height: 180,
          background: 'radial-gradient(circle at 80% 20%, #e3e6ee 60%, transparent 100%)',
          opacity: 0.7,
          zIndex: 1,
        }} />
      </div>

      {/* Services List - Ultra Minimal */}
      <div style={{ background: '#f8f9fa', padding: '48px 0' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 16px' }}>
          {services.map((service, idx) => (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 24,
              marginBottom: 40,
              opacity: visibleItems.includes(idx) ? 1 : 0,
              transform: visibleItems.includes(idx) ? 'none' : 'translateY(24px)',
              transition: 'opacity 0.5s, transform 0.5s',
            }}>
              <span style={{
                fontSize: '2.2rem',
                color: service.color,
                flexShrink: 0,
                marginTop: 2,
                display: 'inline-block',
              }}>{service.icon}</span>
              <div>
                <Link
                  to={`/services/legal/${service.title}`}
                  className="legal-service-link"
                  style={{
                    color: '#2d3a4b',
                    fontWeight: 600,
                    fontSize: '1.13rem',
                    marginBottom: 6,
                    letterSpacing: '-0.5px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    transition: 'all 0.4s ease',
                  }}
                >
                  {service.title}
                  <span className="legal-service-arrow" style={{
                    fontSize: '1rem',
                    color: '#ffffff',
                    transition: 'transform 0.4s ease',
                  }}>→</span>
                </Link>
                <div style={{
                  color: '#5a6270',
                  fontSize: '0.98rem',
                  lineHeight: 1.7,
                  fontWeight: 400,
                }}>{service.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .legal-service-link {
          background: linear-gradient(90deg, #f0f4fa 70%, #e3eefe 100%);
          border: 2px solid #dbeafe;
          cursor: pointer;
          box-shadow: 0 2px 12px 0 rgba(100,181,246,0.10);
          transition: 
            background 0.3s cubic-bezier(.4,2,.6,1),
            color 0.3s cubic-bezier(.4,2,.6,1),
            box-shadow 0.3s cubic-bezier(.4,2,.6,1),
            transform 0.18s cubic-bezier(.4,2,.6,1),
            border-color 0.3s cubic-bezier(.4,2,.6,1);
          border-radius: 16px;
          outline: none;
          position: relative;
          min-width: 180px;
          min-height: 44px;
          font-family: inherit;
          box-sizing: border-box;
        }
        .legal-service-link:focus-visible {
          outline: 3px solid #2196f3;
          outline-offset: 2px;
        }
        .legal-service-link:hover,
        .legal-service-link:focus-visible {
          color: #fff !important;
          background: linear-gradient(90deg, #64b5f6 60%, #2196f3 100%);
          box-shadow: 0 8px 24px 0 rgba(100,181,246,0.22);
          transform: translateY(-2px) scale(1.06);
          border-color: #2196f3;
        }
        .legal-service-link:active {
          background: linear-gradient(90deg, #2196f3 60%, #1565c0 100%);
          box-shadow: 0 2px 8px 0 rgba(33,150,243,0.18);
          transform: scale(0.98);
        }
        .legal-service-link .legal-service-arrow {
          font-size: 1.1rem;
          color: #2196f3;
          margin-left: 2px;
          transition: transform 0.3s cubic-bezier(.4,2,.6,1), color 0.3s;
        }
        .legal-service-link:hover .legal-service-arrow,
        .legal-service-link:focus-visible .legal-service-arrow {
          transform: translateX(4px) scale(1.25);
          color: #fff;
        }
      `}</style>
    </>
  );
}

export default Audit;
