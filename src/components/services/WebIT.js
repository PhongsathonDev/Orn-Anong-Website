import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function WebIT() {
  const [visibleItems, setVisibleItems] = useState([]);



  useEffect(() => {
    // Animate items one by one
    const timer = setTimeout(() => {
      setVisibleItems(prev => [...Array(14).keys()]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: "📊",
      title: "บริการดูแลระบบคอมพิวเตอร์และไอที (IT Maintenance Service)",
      description: "1.1 บริการจัดทำทะเบียนทรัพย์สินไอที (IT Asset list Service) 1.2 บริการจัดทำนโยบายทางด้านไอที (IT Policy Service) 1.3 บริการวางระบบเน็ตเวิร์ก (Network & Infrastructure Services) 1.4 บริการแก้ปัญหาคอมพิวเตอร์, เน็ตเวิร์ก และเซิร์ฟเวอร์ แบบรายครั้ง (IT Support by Ticket)",
      color: "#2196F3"
    },
    {
      icon: "💼",
      title: "บริการจัดจำหน่ายซอฟต์แวร์และอุปกรณ์คอมพิวเตอร์ (IT Merchandise)",
      description: "ด้วยเทคโนโลยีคลาวด์ เราได้พัฒนาบริการออนไลน์เพื่อลูกค้าสามารถเข้าถึงบริการและใช้งานได้ทุกที่ อาทิ โปรแกรมบันทึกเวลาทำงาน โปรแกรมบริหารงานบุคคลและโปรแกรมบัญชี",
      color: "#4CAF50"
    },
    {
      icon: "🔍",
      title: "บริการด้านเว็บไซต์",
      description: "3.1 บริการออกแบบและพัฒนาเว็บไซต์ (Web Design & Development Service) 3.2 รับฝากพื้นที่เว็บไซต์และโดเมน (Web Hosting & Domain Name Registration) 3.3 บริการดูแลเว็บไซต์และการตลาดอนไลน์ (Online Marketing Service)",
      color: "#4CAF50"
    },
    {
      icon: "📋",
      title: "บริการวางระบบ Work From Home",
      description: "นอกจากนี้เรายังรับติดตั้งและจำหน่ายผลิตภัณฑ์ไอทีต่าง ๆ เช่น วางระบบเน็ตเวิร์คโทรศัพท์ไอพี กล้องไอพี คลาวด์โซลูชั่น เว็บโฮสติ้ง โปรแกรมสแกนและป้องกันไวรัส และ G Suite โดย Google Cloud",
      color: "#4CAF50"
    },
    {
      icon: "📈",
      title: "บริการจำหน่ายระบบป้องกันข้อมูลรั่วไหล Data Loss Prevention (DLP)",
      description: [
        "บริการดูแลระบบคอมพิวเตอร์ (IT Maintenance Service)",
        "บริการจัดทำทะเบียนทรัพย์สินไอที (IT Asset list Service)",
        "บริการจัดทำนโยบายทางด้านไอที (IT Policy Service)",
        "บริการวางระบบเน็ตเวิร์ก (Network & Infrastructure Services)",
        "บริการแก้ปัญหาคอมพิวเตอร์, เน็ตเวิร์ก และเซิร์ฟเวอร์ แบบรายครั้ง (IT Support by Ticket)",
        "บริการจัดจำหน่ายซอฟต์แวร์และอุปกรณ์คอมพิวเตอร์ (IT Products)",
        "บริการออกแบบและพัฒนาเว็บไซต์ (Web design & Development Service)",
        "บริการดูแลเว็บไซต์และการตลาดออนไลน์ (Online Marketing Service)",
        "บริการรับติดตั้ง DLP PDPA (DLP Solution)",
        "บริการวางระบบ Work From Home (Work From Home Service)",
        "บริการจัดจำหน่ายซอฟต์แวร์และโซลูชั่นเพื่อธุรกิจ (Software & Solution Product)"
      ],
      color: "#4CAF50"
    },
    

  ];

  return (
    <>
      {/* Hero Section - Minimal Style */}
      <div style={{
        position: 'relative',
        minHeight: '220px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 0 40px',
        marginBottom: '0',
        overflow: 'hidden',
      }}>
        {/* Blurred background layer */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'url(https://www.mindphp.com/images/2022/07/website_development.jpg)',
          backgroundSize: 'cover',
          filter: 'blur(8px)',
          zIndex: 0,
        }} />
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
        {/* Content above blur */}
        <div style={{
          maxWidth: 700,
          width: '100%',
          textAlign: 'center',
          zIndex: 2,
          marginTop: '50px',
          marginBottom: '50px',
          position: 'relative',
          background: 'linear-gradient(135deg, #ffffffb1 100%, #1f2937 0%)',
          borderRadius: "12px",
          padding: '15px',
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            margin: 0,
            color: '#ff4848ff',
            letterSpacing: '-1px',
            lineHeight: 1.2,
          }}>
            บริการออกแบบ พัฒนาเว็บไซต์และไอที
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#4857ffff',
            margin: '18px 0 0',
            fontWeight: 400,
            letterSpacing: 0,
          }}>
            ครบถ้วนทุกบริการด้านกฎหมายสำหรับธุรกิจและบุคคล
          </p>
        </div>
      </div>

      {/* Services List - Ultra Minimal */}
      <div style={{ background: '#f8f9fa', padding: '48px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          {services.map((service, idx) => (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 24,
              marginBottom: 60,
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
                    marginBottom: 25,
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
                }}>
                  {Array.isArray(service.description)
                    ? (
                      <ul style={{ margin: 0, paddingLeft: 20 }}>
                        {service.description.map((line, i) => (
                          <li key={i} style={{ marginBottom: 2 }}>{line}</li>
                        ))}
                      </ul>
                    )
                    : service.description
                  }
                </div>
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

export default WebIT;
