import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function AccountingPayroll() {
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
      title: "บริการจัดทำบัญชี",
      description: "ประกอบด้วยการจัดทำบัญชีตามมาตรฐานการรายงานทางการเงินและกฎหมายที่กำหนด จัดทำและยื่นแบบภาษี จัดทำสมุดบัญชีต่าง ๆ และบัญชีแยกประเภท จัดทำงบการเงินและรายละเอียดประกอบงบการเงิน ขึ้นทะเบียนผู้ทำบัญชี บริการให้คำปรึกษาและแนะนำด้านบัญชีและภาษีอากร",
      color: "#2196F3"
    },
    {
      icon: "💼",
      title: "บริการจัดทำเงินเดือน",
      description: "ประกอบด้วยการจัดทำข้อมูลและคำนวณเงินเดือน ภาษี ประกันสังคมและกองทุนสำรองเลี้ยงชีพ ให้คำปรึกษากาคำนวณภาษีเงินได้บุคคลธรรมดาโดยผู้เชี่ยวชาญได้อย่างถูกต้องและมีประสิทธิภาพ รวมทั้งให้ความสำคัญในการรักษาความลับของลูกค้า",
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
            บริการบัญชีและเงินเดือน
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

export default AccountingPayroll;
