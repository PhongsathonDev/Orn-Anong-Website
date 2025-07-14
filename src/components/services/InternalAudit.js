import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function InternalAudit() {
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
      title: "บริการงานตรวจสอบภายใน (IA)",
      description: "บริการตรวจสอบภายในตามความเสี่ยงและ/หรือตามที่ตกลงร่วมกัน โดยการให้ความเชื่อมั่นและให้คำปรึกษาอย่างเที่ยงธรรมและเป็นอิสระ เพื่อสร้างคุณค่าเพิ่มและก่อให้เกิดการปรับปรุงกระบวนการดำเนินงานขององค์กร สำหรับบริษัทที่จดทะเบียนในตลาดหลักทรัพย์แห่งประเทศไทย และบริษัททั่วไป",
      color: "#2196F3"
    },
    {
      icon: "💼",
      title: "บริการงานประเมินระบบการควบคุมภายใน (IPO)",
      description: "บริการงานประเมินระบบการควบคุมภายในขององค์กรภายใต้กรอบของ COSO และตามแบบประเมินความเพียงพอของระบบการควบคุมภายใน ที่สำนักงานคณะกรรมการกำกับหลักทรัพย์และตลาดหลักทรัพย์ (ก.ล.ต.) กำหนด สำหรับบริษัทที่เตรียมความพร้อมในการเข้าจดทะเบียนในตลาดหลักทรัพย์แห่งประเทศไทย",
      color: "#4CAF50"
    },
    {
      icon: "🔍",
      title: "บริการงานประเมินตนเองเกี่ยวกับมาตรการต่อต้านทุจริตคอร์รัปชัน (CAC)",
      description: "บริการสอบทานการประเมินตนเองเกี่ยวกับมาตรการต่อต้านการคอร์รัปชั่นของบริษัท เพื่อให้ความเห็นเกี่ยวกับความเพียงพอของหลักฐานประกอบการปฏิบัติของบริษัท เกี่ยวกับมาตรการต่อต้านการคอร์รัปชั่นที่บริษัทจัดทำ ภายใต้ “โครงการแนวร่วมปฏิบัติของภาคเอกชนไทยในการต่อต้านทุจริต” โดยจัดทำเพื่อเป็นการขอรับประกาศนียบัตรรับรองฐานะสมาชิกแนวร่วมปฏิบัติฯ (Certification) จากคณะกรรมการแนวร่วมปฏิบัติของภาคเอกชนไทยในการต่อต้านการทุจริต",
      color: "#4CAF50"
    },
    {
      icon: "📋",
      title: "บริการงานการสอบทานและประเมินความเชื่อมั่นในคุณภาพงานตรวจสอบภายใน (QAR)",
      description: "บริการสอบทานและประเมินคุณภาพการปฏิบัติงานตรวจสอบภายในทั้งการบริหารและการปฏิบัติงานตรวจสอบ และประมวลจรรยาบรรณ เปรียบเทียบกับแนวทางและมาตรฐานการปฏิบัติงานวิชาชีพการตรวจสอบภายใน และหน่วยงานกำกับดูแลที่เกี่ยวข้อง เพื่อให้ความเห็นต่อการดำเนินกิจกรรมต่าง ๆ ของงานตรวจสอบภายใน ว่าเป็นไปตามที่กำหนดไว้",
      color: "#4CAF50"
    },
    {
      icon: "📈",
      title: "บริการงานประเมินระบบ IT (IT Audit)",
      description: "บริการประเมินระบบการควบคุมภายในขององค์กร เพื่อให้มั่นใจตามควรแก่เหตุและผล (Reasonable Assurance) ว่าองค์กรมีมีการควบคุมและรักษาความปลอดภัยของข้อมูลและระบบงานที่สำคัญ รวมถึงรักษาความปลอดภัยด้านกายภาพ (Physical) และความปลอดภัยด้านตรรกะ (Logical) อย่างเหมาะสมและมีการดำเนินงานและการปฏิบัติงานเป็นไปตามข้อกำหนดกฎหมาย และ/หรือ มาตรฐาน ที่กำหนดโดยหน่วยงานกำกับดูแลหรือหน่วยงานกำหนดมาตรฐานอุตสาหกรรมที่เกี่ยวข้อง",
      color: "#4CAF50"
    },
    {
      icon: "🔄",
      title: "บริการงานพัฒนาระบบ",
      description: "บริการจัดทำคู่มือการปฏิบัติงานทุกกระบวนการ/ระบบงาน/ฝ่ายงานของบริษัท, งานสอบทานคู่มือการปฏิบัติงาน, งานสอบทานและปรับปรุงแก้ไขคู่มือการปฏิบัติงานเพื่อให้มีความเข้าใจอย่างชัดเจนในบทบาทหน้าที่ และความรับผิดชอบของตนเอง ตลอดจน ปรับปรุงกระบวนการปฏิบัติงานให้มีมาตรฐาน และมีระบบการควบคุมภายในที่ดี โดยมีเอกสารอ้างอิงและสามารถปฏิบัติงานได้อย่างถูกต้อง และครบถ้วน เพื่อรองรับการเติบโตของธุรกิจและเป็นองค์ความรู้ (Knowledge Base) ในการพัฒนาความพร้อมของบุคลากรรุ่นถัดไปได้อย่างต่อเนื่องและมีประสิทธิภาพ",
      color: "#2196F3"
    },
    {
      icon: "📄",
      title: "บริการงานพัฒนาธุรกิจ",
      description: "บริการให้คำปรึกษาและจัดทำรายงานทางธรุกิจ,งานสอบทานคู่มือพัฒนาธุรกิจ,งานสอบทานและปรับปรุงแก้ไขคู่มือพัฒนาธุรกิจเพื่อมุ่งเน้นให้บริษัทสามารถดำเนินกิจการได้ตามเป้าหมายที่วางไว้และยังมุ่งเน้นให้บริษัทสามารถเข้าสู่ตลาดหลักทรัพย์ โดยจัดทำคู่มือต่าง ๆที่เกี่ยวข้อง",
      color: "#4CAF50"
    },
    {
      icon: "📊",
      title: "บริการงานตรวจสอบพิเศษ",
      description: "เป็นการให้ความเชื่อมั่นต่อระบบงานหรือกระบวนการที่ลูกค้ามีประสงค์ให้เข้าตรวจสอบ ว่าเป็นไปตามวัตถุประสงค์และขอบเขตงานที่ตกลงร่วมกัน อาทิ การตรวจสอบด้านรายได้และค่าใช้จ่าย การตรวจสอบโครงการเฉพาะ การบริหารจัดการสินค้าคงเหลือ เป็นต้น",
      color: "#4CAF50"
    },
    {
      icon: "📈",
      title: "บริการรายงาน ESG",
      description: "เป็นบริการจัดเตรียมข้อมูลสำคัญที่สะท้อนภาพลักษณ์ของการดำเนินธุรกิจของกิจการ โดยพิจารณาถึงมิติทางด้าน ESG โดยมีรายละเอียดดังนี้",
      color: "#4CAF50"
    },
    {
      icon: "🌱",
      title: "บริการรายงาน Carbon Footprint",
      description: "เป็นบริการคำนวณปริมาณการปล่อยก๊าซเรือนกระจกที่ปล่อยออกมาจากกิจกรรมต่างๆ ขององค์กร เช่น การเผาไหม้ของเชื้อเพลิง การใช้ไฟฟ้า การจัดการของเสีย และการขนส่ง ที่ถูกวัดออกมาในรูปตันคาร์บอนไดออกไซด์เทียบเท่า โดยเป็นบริการที่ช่วยวิเคราะห์กิจกรรมของบริษัทที่ก่อให้เกิดการปล่อยก๊าซเรือนกระจกและจัดเตรียมข้อมูลที่เกี่ยวข้อง เพื่อทำการคำนวณ และช่วยคิดวิธีการดูดกลับหรือการลดการปล่อยก๊าซเรือนกระจกหลังจากการคำนวณ โดยใช้เป็นข้อมูลในการรายงานต่อหน่วยงานที่เกี่ยวข้อง ทั้งนี้เพื่อสะท้อนภาพลักษณ์ของการดำเนินธุรกิจของกิจการที่พิจารณาจากมิติทางด้านสิ่งแวดล้อม",
      color: "#4CAF50"
    },
    {
      icon: "🌍",
      title: "บริการ Due Diligence",
      description: "เป็นงานให้ความเชื่อมั่น ในการบริหารจัดการและการดำเนินงานภายใต้หลักการกำกับดูแลกิจการที่ดี ว่าบริษัทที่จะลงทุนมีการควบคุมภายใน และการบริหารความเสี่ยงที่เพียงพอและเหมาะสม อันจะช่วยให้การดำเนินงานในแต่ละกระบวนการบรรลุวัตถุประสงค์และเป้าหมายได้อย่างมีประสิทธิภาพ",
      color: "#2196F3"
    },
    {
      icon: "📑",
      title: "บริการที่ปรึกษาจัดตั้งหน่วยงานตรวจสอบภายใน",
      description: "เป็นที่ปรึกษาให้ทางบริษัทที่สนใจในการจัดตั้งหน่วยงานตรวจสอบภายใน ประกอบด้วย กระบวนการวางแผน (แผนงาน แผนคน และแผนเงิน) การปฏิบัติงาน ตรวจสอบภายใน การรายงานผลการตรวจสอบภายใน ให้เป็นไปตามมาตรฐานที่กำหนด และการประสานกับคณะกรรมการ หน่วยงานภายใน และหน่วยงาน ภายนอกที่เกี่ยวข้อง",
      color: "#4CAF50"
    },
    {
      icon: "🛠️",
      title: "บริการการกำกับดูแลและจัดการการใช้งานเทคโนโลยีปัญญาประดิษฐ์",
      description: "บริการออกแบบ และให้คำปรึกษาเกี่ยวกับการกำกับดูแลระดับองค์กร การกำกับดูแลจากฝ่ายบริหาร การอบรมสร้างความตระหนักที่เกี่ยวข้อง การกำกับ และควบคุมการใช้งาน การพัฒนาระบบปัญญาประดิษฐ์ การประเมินความเสี่ยง และการจัดการความเสี่ยงที่เกี่ยวข้องกับการใช้งานระบบปัญญาประดิษฐ์",
      color: "#4CAF50"
    },
    {
      icon: "📝",
      title: "บริการประเมินความพร้อมการกำกับดูแลปัญญาประดิษฐ์",
      description: "บริการตรวจสอบ และให้คำแนะนำเกี่ยวกับการกำกับดูแลระดับองค์กร การกำกับดูแลจากฝ่ายบริหาร การอบรมสร้างความตระหนักที่เกี่ยวข้อง การกำกับ และ ควบคุมการใช้งาน การพัฒนาระบบปัญญาประดิษฐ์ การประเมินความเสี่ยง และการจัดการความเสี่ยงที่เกี่ยวข้องกับการใช้งานระบบปัญญาประดิษฐ์",
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
            บริการตรวจสอบภายใน
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

export default InternalAudit;
