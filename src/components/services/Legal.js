import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Legal() {
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
      icon: "🏢",
      title: "งานกฎหมายธุรกิจ",
      description: "ให้คำปรึกษากฎหมายทุกประเภท วางระบบนิติกรรมสัญญา และจัดทำนิติกรรมสัญญาเกี่ยวกับบุคคลและธุรกิจการค้าทุกประเภท  จัดทำเอกสารทางกฎหมายและดำเนินงานทางกฎหมายเกี่ยวกับธุรกิจการค้าให้แก่บุคคล นิติบุคคลและวิสาหกิจทุกประเภท",
      color: "#2196F3"
    },
    {
      icon: "💰",
      title: "งานกฎหมายภาษีอากร",
      description: "ให้คำปรึกษากฎหมายภาษีอากร การศึกษาวิเคราะห์โครงสร้างธุรกิจ การสอบทานภาษีอากร (Tax Review) การวางแผนภาษีของธุรกิจแต่ละประเภท การตรวจสอบภาษีอากร (Tax Audit) การอบรม ให้คำแนะนำหลักและวิธีปฏิบัติทางภาษีอากร การพบและชี้แจงเจ้าพนักงานภาษีอากร การอุทรณ์คำสั่งเจ้าหน้าที่สรรพากร การฟ้องร้องและต่อสู้คดีภาษีอากร",
      color: "#4CAF50"
    },
    {
      icon: "⚖️",
      title: "งานอรรถคดีและบังคับคดี",
      description: "ดำเนินคดีทุกประเภทในศาลทั่วราชอาณาจักร ได้แก่ คดีแพ่ง คดีอาญา คดีแรงงาน คดีทรัพย์สินทางปัญญาและการค้าระหว่างประเทศ คดีปกครอง และคดีตามกฎหมายมหาชนต่าง ๆ  การระงับข้อพิพาททางอนุญาโตตุลาการ การบังคับคดีเพื่อให้ลูกค้าชำระหนี้ตามคำพิพากษาและคำชี้ขาดของอนุญาโตตุลาการ",
      color: "#FF9800"
    },
    {
      icon: "📋",
      title: "งานกฎหมายอื่น ๆ ที่เกี่ยวกับการค้าและบุคคล",
      description: "งานยื่นคำร้อง คำขออนุญาตและจดทะเบียนตามที่กฎหมายกำหนดทุกประเภทต่อหน่วยงานของรัฐ ได้แก่ เครื่องหมายการค้า สิทธิบัตร จดทะเบียนนิติกรรม อสังหาริมทรัพย์ รังวัดสอบที่ดิน จดทะเบียนบริษัท ห้างหุ้นส่วนจำกัด มูลนิธิและสมาคม งานเลขานุการจัดประชุมผู้ถือหุ้นของบริษัทจำกัดและบริษัทมหาชนจำกัด ขอใบอนุญาตทำงานและใบอนุญาตประกอบธุรกิจของคนต่างด้าว ขออนุญาตส่งเสริมการลงทุน งานตรวจสอบและกำกับการปฏิบัติตามหลักเกณฑ์ ก.ล.ต. ของบริษัทจดทะเบียนบริษัท ฯลฯ",
      color: "#9C27B0"
    },
    {
      icon: "🔄",
      title: "งาน Transfer Pricing",
      description: "บริการจัดทำรายงานเพื่อเปิดเผยข้อมูลเกี่ยวกับบริษัทหรือห้างหุ้นส่วนนิติบุคคล ที่มีความสัมพันธ์กันและมูลค่ารวมของธุรกรรมระหว่างกันในแต่ละรอบระยะเวลาบัญชี ตาม ประมวลรัษฎากรเกี่ยวกับการกำหนดราคาโอน (Transfer Pricing)",
      color: "#795548"
    },
    {
      icon: "📄",
      title: "บริการจัดทำพินัยกรรม",
      description: "บริการจัดเตรียมความพร้อมเกี่ยวกับทรัพย์สิน เพื่อแสดงเจตนาว่าจะจัดการกับทรัพย์สินอย่างไร ซึ่งต้องจัดทำในขณะที่เจ้าของพินัยกรรม ต้องอยู่ในสถานภาพที่มีสติสัมปชัญญะ จึงจะมีผลบังคับตามกฎหมาย",
      color: "#607D8B"
    },
    {
      icon: "🏛️",
      title: "บริการด้านอรรถคดี(ต่อสู้ในชั้นศาล) คดีแพ่งสามัญ",
      description: "บริการรับดำเนินคดี ว่าต่าง แก้ต่าง ในคดีแพ่งสามัญ อันได้แก่ คดีแพ่ง และพาณิชย์ เช่น ซื้อขาย เช่าซื้อ ค้ำประกัน จำนอง จำนำ หุ้นส่วนบริษัท ประกันภัย ตั๋วเงิน ละเมิด ครอบครัว มรดก ร้องจัดการมรดก ขับไล่ การก่อสร้าง รวมทั้งคดีเกี่ยวกับอสังหาริมทรัพย์อื่น ๆ ในชั้นศาลทั่วราชอาณาจักร รวมทั้งการบังคับคดีให้เป็นไปตามคำพิพากษา หรือคำสั่งศาล",
      color: "#E91E63"
    },
    {
      icon: "💔",
      title: "บริการทำสัญญาหย่าโดยความยินยอม ฟ้องหย่า และการจัดการทรัพย์สิน",
      description: "บริการให้คำปรึกษาด้านการหย่าร้าง เพื่อสิ้นสุดความสัมพันธ์ทางการสมรสที่ทำขึ้นอย่างถูกต้องตามกฎหมายและมีการแจ้งการสมรสเป็นหลักฐาน ทั้งนี้สามารถกระทำได้โดยการตกลงกันหรือโดยการตัดสินของศาล เมื่อมีการหย่าย่อมต้องมีการจัดการทรัพย์สินที่เกิดก่อนการหย่า ที่คู่หย่าไม่สามารถจัดการเองได้จำเป็นต้องใช้นักกฎหมายในการดำเนินการ",
      color: "#FF5722"
    }
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
            บริการด้านกฎหมาย
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

export default Legal;
