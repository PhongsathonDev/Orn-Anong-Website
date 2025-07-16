import React, { useState, useRef, useEffect } from 'react';

function MostPopularCourses() {
  const [activeTab, setActiveTab] = useState('ด้านกฎหมาย');
  const [tabAnimating, setTabAnimating] = useState(false);
  const timeoutRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);

  const courseCategories = {
    'ด้านกฎหมาย': [
      {
        title: "งานกฎหมายธุรกิจ",
        description: "บริการด้านกฎหมายสำหรับธุรกิจ",
        level: "All level",
        rating: 3.5,
        duration: "12h 56m",
        lectures: 15,
        image: 'https://cms.kapook.com/uploads/tag/24/ID_23614_58e766e34db67.jpg',
        color: "#FF9500",
        link: "/services/business-law"
      },
      {
        title: "งานกฎหมายภาษีอากร",
        description: "ให้คำปรึกษากฎหมายภาษีอากร",
        level: "Beginner",
        rating: 4.5,
        duration: "18h 30m",
        lectures: 24,
        image: 'https://moneyhub.in.th/wp-content/uploads/2015/06/shutterstock_117803314-300x201.jpg',
        color: "#007AFF",
        link: "/services/tax-law"
      },
      {
        title: "งานอรรถคดีและบังคับคดี",
        description: "ให้คำปรึกษากฎหมายอรรถคดีและบังคับคดี",
        level: "Beginner",
        rating: 4.5,
        duration: "18h 30m",
        lectures: 24,
        image: 'https://lawtst.com/wp-content/uploads/2022/11/t011-1024x576.jpg',
        color: "#007AFF",
        link: "/services/litigation"
      },
      {
        title: "งานกฎหมายอื่น ๆ ที่เกี่ยวกับการค้าและบุคคล",
        description: "ให้คำปรึกษากฎหมายอื่น ๆ ที่เกี่ยวกับการค้าและบุคคล",
        level: "Beginner",
        rating: 4.5,
        duration: "18h 30m",
        lectures: 24,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/MercadodeSanJuandeDios.jpg/330px-MercadodeSanJuandeDios.jpg',
        color: "#007AFF",
        link: "/services/other-law"
      },
      {
        title: "งาน Transfer Pricing",
        description: "บริการจัดทำรายงาน Transfer Pricing",
        level: "Beginner",
        rating: 4.5,
        duration: "18h 30m",
        lectures: 24,
        image: 'https://cdn.prod.website-files.com/6417e237f49583201f18b9ba/642b42c2d2416a68bae9be01_transfer1920x1200.jpg',
        color: "#007AFF",
        link: "/services/transfer-pricing"
      }
      ,
      {
        title: "บริการจัดทำพินัยกรรม",
        description: "บริการจัดเตรียมความพร้อมเกี่ยวกับทรัพย์สินเพื่อแสดงเจตนาว่าจะจัดการกับทรัพย์สินอย่างไร",
        level: "Beginner",
        rating: 4.5,
        duration: "18h 30m",
        lectures: 24,
        image: 'https://www.scb.co.th/content/media/personal-banking/stories-tips/testament/testament1.jpg',
        color: "#007AFF",
        link: "/services/testament"
      }
      ,
      {
        title: "บริการด้านอรรถคดี",
        description: "บริการด้านอรรถคดี(ต่อสู้ในชั้นศาล) คดีแพ่งสามัญ",
        level: "Beginner",
        rating: 4.5,
        duration: "18h 30m",
        lectures: 24,
        image: 'https://www.scb.co.th/content/media/personal-banking/stories-tips/testament/testament1.jpg',
        color: "#007AFF",
        link: "/services/testament"
      }
      ,
      {
        title: "บริการทำสัญญาหย่า",
        description: "บริการทำสัญญาหย่าโดยความยินยอม ฟ้องหย่า และการจัดการทรัพย์สิน",
        level: "Beginner",
        rating: 4.5,
        duration: "18h 30m",
        lectures: 24,
        image: 'https://backside.legardy.com/uploads/_0a14c077ec.png',
        color: "#007AFF",
        link: "/services/testament"
      }
    ],
    'จัดทำบัญชีและเงินเดือน': [
      {
        title: "บริการจัดทำบัญชี",
        description: "บริการจัดทำบัญชีครบวงจรสำหรับธุรกิจทุกประเภท",
        level: "Beginner",
        rating: 4.0,
        duration: "18h 56m",
        lectures: 99,
        image: 'https://hisp.com/wp-content/uploads/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B3%E0%B8%9A%E0%B8%B1%E0%B8%8D%E0%B8%8A%E0%B8%B5.jpg',
        color: "#00D4FF",
        link: "/services/accounting-payroll"
      },
      {
        title: "บริการจัดทำเงินเดือน",
        description: "บริการจัดทำเงินเดือนสำหรับธุรกิจทุกประเภท",
        level: "Beginner",
        rating: 4.8,
        duration: "15h 20m",
        lectures: 45,
        image: 'https://static.thairath.co.th/media/dFQROr7oWzulq5FZUECsSLQIE7CpFBvR7pgu8wlZnxTb8bJlz31kKcn4xFRUlj5iQXQ.jpg',
        color: "#F7DF1E",
        link: "/services/js-fundamentals"
      }
    ],
    'ตรวจสอบบัญชี': [
      {
        title: "บริการตรวจสอบงบการเงิน",
        description: "บริการตรวจสอบงบการเงินสำหรับธุรกิจทุกประเภท",
        level: "Beginner",
        rating: 4.5,
        duration: "9h 56m",
        lectures: 65,
        image: "https://www.house-acc.com/images/3audit_r2_c2.jpg",
        color: "#FF3B30",
        link: "/services/audit"
      },
      {
        title: "บริการสอบทานงบการเงิน",
        description: "บริการสอบทานงบการเงินสำหรับธุรกิจทุกประเภท",
        level: "All level",
        rating: 4.7,
        duration: "22h 15m",
        lectures: 78,
        image: "https://www.batcbkk.com/wp-content/uploads/2021/02/img-1200x800-1jpg.jpg",
        color: "#31A8FF",
        link: "/services/photoshop"
      }
      ,
      {
        title: "บริการตรวจสอบการซื้อกิจการ",
        description: "บริการตรวจสอบการซื้อกิจการสำหรับธุรกิจทุกประเภท",
        level: "All level",
        rating: 4.7,
        duration: "22h 15m",
        lectures: 78,
        image: "https://monolith.law/th/wp-content/uploads/sites/35/2024/03/acquisition-basic-procedure-i.jpg",
        color: "",
        link: "/services/photoshop"
      }
      ,
      {
        title: "บริการตรวจสอบพิเศษ",
        description: "บริการตรวจสอบพิเศษสำหรับธุรกิจทุกประเภท",
        level: "All level",
        rating: 4.7,
        duration: "22h 15m",
        lectures: 78,
        image: "https://files.ricethailand.go.th/files/13/images/slide/files-rice-1705997088643.jpg",
        color: "",
        link: "/services/photoshop"
      }
      ,
      {
        title: "บริการที่ปรึกษาบัญชี และ บริการที่เกี่ยวเนื่อง",
        description: "บริการที่ปรึกษาบัญชี และ บริการที่เกี่ยวเนื่องสำหรับธุรกิจทุกประเภท",
        level: "All level",
        rating: 4.7,
        duration: "22h 15m",
        lectures: 78,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhj7wIwomnGlGr-f6U3BFCFPdIuIkMKoFUvXH752cre9nHl3HpEZsxEbtppehEUnzJQFry5oxapnQMPKidYdLmpyVbcGUum2E8k3S9WhgAsAm14oI7hThQeFvUYqUuRGoD_ndeiQ4AoKqk/w640-h428/1498837.jpg",
        color: "",
        link: "/services/photoshop"
      }
    ],
    'ตรวจสอบภายใน': [
      {
        title: "บริการงานตรวจสอบภายใน (IA)",
        description: "บริการงานตรวจสอบภายใน (IA) สำหรับธุรกิจทุกประเภท",
        level: "Beginner",
        rating: 4.5,
        duration: "5h 56m",
        lectures: 32,
        image: "https://www.accounting-journey.co.th/wp-content/uploads/2024/07/IA-2-1024x531.png",
        color: "#FF6B6B",
        link: "/services/internal-audit"
      },
      {
        title: "บริการงานประเมินระบบการควบคุมภายใน (IPO)",
        description: "บริการงานประเมินระบบการควบคุมภายใน (IPO) สำหรับธุรกิจทุกประเภท",
        level: "Intermediate",
        rating: 4.3,
        duration: "12h 40m",
        lectures: 56,
        image: "https://www.accounting-journey.co.th/wp-content/uploads/2024/07/IA-2-1024x531.png",
        color: "#4ECDC4",
        link: "/services/digital-marketing"
      }
      ,
      {
        title: "บริการงานการสอบทานและประเมินความเชื่อมั่นในคุณภาพงานตรวจสอบภายใน (QAR)",
        description: "บริการงานการสอบทานและประเมินความเชื่อมั่นในคุณภาพงานตรวจสอบภายใน (QAR) สำหรับธุรกิจทุกประเภท",
        level: "Intermediate",
        rating: 4.3,
        duration: "12h 40m",
        lectures: 56,
        image: "https://www.accounting-journey.co.th/wp-content/uploads/2024/07/IA-2-1024x531.png",
        color: "#4ECDC4",
        link: "/services/digital-marketing"
      }
      ,
      {
        title: "บริการงานประเมินระบบ IT (IT Audit)",
        description: "บริการงานประเมินระบบ IT (IT Audit) สำหรับธุรกิจทุกประเภท",
        level: "Intermediate",
        rating: 4.3,
        duration: "12h 40m",
        lectures: 56,
        image: "https://www.accounting-journey.co.th/wp-content/uploads/2024/07/IA-2-1024x531.png",
        color: "#4ECDC4",
        link: "/services/digital-marketing"
      }
      ,
      {
        title: "บริการงานพัฒนาระบบ",
        description: "บริการงานพัฒนาระบบสำหรับธุรกิจทุกประเภท",
        level: "Intermediate",
        rating: 4.3,
        duration: "12h 40m",
        lectures: 56,
        image: "https://www.accounting-journey.co.th/wp-content/uploads/2024/07/IA-2-1024x531.png",
        color: "#4ECDC4",
        link: "/services/digital-marketing"
      }
      ,
      {
        title: "บริการงานพัฒนาธุรกิจ",
        description: "บริการงานพัฒนาธุรกิจสำหรับธุรกิจทุกประเภท",
        level: "Intermediate",
        rating: 4.3,
        duration: "12h 40m",
        lectures: 56,
        image: "https://www.accounting-journey.co.th/wp-content/uploads/2024/07/IA-2-1024x531.png",
        color: "#4ECDC4",
        link: "/services/digital-marketing"
      }
      ,
      {
        title: "บริการงานตรวจสอบพิเศษ",
        description: "บริการงานตรวจสอบพิเศษสำหรับธุรกิจทุกประเภท",
        level: "Intermediate",
        rating: 4.3,
        duration: "12h 40m",
        lectures: 56,
        image: "https://www.accounting-journey.co.th/wp-content/uploads/2024/07/IA-2-1024x531.png",
        color: "#4ECDC4",
        link: "/services/digital-marketing"
      }
      ,
      {
        title: "บริการรายงาน ESG",
        description: "บริการรายงาน ESG สำหรับธุรกิจทุกประเภท",
        level: "Intermediate",
        rating: 4.3,
        duration: "12h 40m",
        lectures: 56,
        image: "https://www.accounting-journey.co.th/wp-content/uploads/2024/07/IA-2-1024x531.png",
        color: "#4ECDC4",
        link: "/services/digital-marketing"
      }
      ,
      {
        title: "บริการ Due Diligence",
        description: "บริการงานการตรวจสอบสถานะ (Due Diligence) สำหรับธุรกิจทุกประเภท",
        level: "Intermediate",
        rating: 4.3,
        duration: "12h 40m",
        lectures: 56,
        image: "https://www.accounting-journey.co.th/wp-content/uploads/2024/07/IA-2-1024x531.png",
        color: "#4ECDC4",
        link: "/services/digital-marketing"
      }
      ,
      {
        title: "บริการรายงาน Carbon Footprint",
        description: "บริการรายงาน Carbon Footprint สำหรับธุรกิจทุกประเภท",
        level: "Intermediate",
        rating: 4.3,
        duration: "12h 40m",
        lectures: 56,
        image: "https://www.accounting-journey.co.th/wp-content/uploads/2024/07/IA-2-1024x531.png",
        color: "#4ECDC4",
        link: "/services/digital-marketing"
      }
      ,
      {
        title: "บริการที่ปรึกษาจัดตั้งหน่วยงานตรวจสอบภายใน",
        description: "บริการที่ปรึกษาจัดตั้งหน่วยงานตรวจสอบภายในสำหรับธุรกิจทุกประเภท",
        level: "Intermediate",
        rating: 4.3,
        duration: "12h 40m",
        lectures: 56,
        image: "https://www.accounting-journey.co.th/wp-content/uploads/2024/07/IA-2-1024x531.png",
        color: "#4ECDC4",
        link: "/services/digital-marketing"
      }
      ,
      {
        title: "บริการการกำกับดูแลและจัดการการใช้งานเทคโนโลยีปัญญาประดิษฐ์",
        description: "บริการการกำกับดูแลและจัดการการใช้งานเทคโนโลยีปัญญาประดิษฐ์สำหรับธุรกิจทุกประเภท",
        level: "Intermediate",
        rating: 4.3,
        duration: "12h 40m",
        lectures: 56,
        image: "https://www.accounting-journey.co.th/wp-content/uploads/2024/07/IA-2-1024x531.png",
        color: "#4ECDC4",
        link: "/services/digital-marketing"
      }
      ,
      {
        title: "บริการประเมินความพร้อมการกำกับดูแลปัญญาประดิษฐ์",
        description: "บริการประเมินความพร้อมการกำกับดูแลปัญญาประดิษฐ์ (QAR) สำหรับธุรกิจทุกประเภท",
        level: "Intermediate",
        rating: 4.3,
        duration: "12h 40m",
        lectures: 56,
        image: "https://www.accounting-journey.co.th/wp-content/uploads/2024/07/IA-2-1024x531.png",
        color: "#4ECDC4",
        link: "/services/digital-marketing"
      }
      
    ],
    'พัฒนาเว็บไซต์และไอที': [
      {
        title: "บริการดูแลระบบคอมพิวเตอร์และไอที (IT Maintenance Service)",
        description: "บริการดูแลระบบคอมพิวเตอร์และไอที (IT Maintenance Service) สำหรับธุรกิจทุกประเภท",
        level: "Advanced",
        rating: 4.6,
        duration: "25h 30m",
        lectures: 89,
        image: "💰",
        color: "#50E3C2",
        link: "/services/web-it"
      },
      {
        title: "บริการจัดจำหน่ายซอฟต์แวร์และอุปกรณ์คอมพิวเตอร์ (IT Merchandise)",
        description: "บริการจัดจำหน่ายซอฟต์แวร์และอุปกรณ์คอมพิวเตอร์ (IT Merchandise) สำหรับธุรกิจทุกประเภท",
        level: "Intermediate",
        rating: 4.4,
        duration: "20h 15m",
        lectures: 67,
        image: "🏦",
        color: "#B8E986",
        link: "/services/investment-banking"
      }
      ,
      {
        title: "บริการด้านเว็บไซต์",
        description: "บริการด้านเว็บไซต์ สำหรับธุรกิจทุกประเภท",
        level: "Intermediate",
        rating: 4.4,
        duration: "20h 15m",
        lectures: 67,
        image: "🏦",
        color: "#B8E986",
        link: "/services/investment-banking"
      }
      ,
      {
        title: "บริการวางระบบ Work From Home",
        description: "บริการวางระบบ Work From Home สำหรับธุรกิจทุกประเภท",
        level: "Intermediate",
        rating: 4.4,
        duration: "20h 15m",
        lectures: 67,
        image: "🏦",
        color: "#B8E986",
        link: "/services/investment-banking"
      }
      ,
      {
        title: "บริการจำหน่ายระบบป้องกันข้อมูลรั่วไหล Data Loss Prevention (DLP)",
        description: "บริการจำหน่ายระบบป้องกันข้อมูลรั่วไหล Data Loss Prevention (DLP) สำหรับธุรกิจทุกประเภท",
        level: "Intermediate",
        rating: 4.4,
        duration: "20h 15m",
        lectures: 67,
        image: "🏦",
        color: "#B8E986",
        link: "/services/investment-banking"
      }
    ]
  };

  // Animation effect when tab changes
  useEffect(() => {
    if (tabAnimating) {
      timeoutRef.current = setTimeout(() => {
        setTabAnimating(false);
      }, 350); // match transition duration
    }
    return () => clearTimeout(timeoutRef.current);
  }, [tabAnimating]);

  // Staggered animation for cards
  useEffect(() => {
    if (!tabAnimating) {
      setVisibleCards([]);
      const cards = courseCategories[activeTab] || [];
      cards.forEach((_, idx) => {
        setTimeout(() => {
          setVisibleCards((prev) => {
            if (prev.includes(idx)) return prev;
            return [...prev, idx];
          });
        }, 100 * idx + 100); // 100ms delay per card
      });
    }
    // eslint-disable-next-line
  }, [activeTab, tabAnimating]);

  const handleTabChange = (category) => {
    if (activeTab !== category) {
      setTabAnimating(true);
      setVisibleCards([]);
      setTimeout(() => {
        setActiveTab(category);
      }, 200); // fade out before changing content
    }
  };

  return (
    <div style={{ background: '#f8f9fa', padding: '80px 0', fontFamily: 'Prompt, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: 700,
            color: '#2d3a4b',
            marginBottom: '16px',
            letterSpacing: '-1px'
          }}>
            บริการของเรา
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#6c6f7dff',
            margin: 0
          }}>
            บริการของเราได้รับการออกแบบมาเพื่อช่วยให้คุณประสบความสำเร็จในทุกด้านของธุรกิจและการเงิน
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{
          background: '#deebffff',
          borderRadius: '16px',
          padding: '8px',
          marginBottom: '50px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px',
          justifyContent: 'center'
        }}>
          {Object.keys(courseCategories).map((category) => (
            <button
              key={category}
              onClick={() => handleTabChange(category)}
              style={{
                background: activeTab === category ? '#007bff' : 'transparent',
                color: activeTab === category ? '#fff' : '#0063baff',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 24px',
                fontSize: '1rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                outline: 'none'
              }}
              
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            maxWidth: '1000px',
            margin: '0 auto',
            opacity: tabAnimating ? 0 : 1,
            transform: tabAnimating ? 'translateY(20px)' : 'translateY(0)',
            transition: 'opacity 0.35s cubic-bezier(.4,0,.2,1), transform 0.35s cubic-bezier(.4,0,.2,1)'
          }}
        >
          {(courseCategories[activeTab] || []).map((course, idx) => (
            <a
              key={idx}
              href={course.link}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
                height: '100%'
              }}
            >
              <div
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.5s cubic-bezier(.4,0,.2,1)',
                  cursor: 'pointer',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  opacity: visibleCards.includes(idx) ? 1 : 0,
                  transform: visibleCards.includes(idx)
                    ? 'translateY(0) scale(1)'
                    : 'translateY(40px) scale(0.96)',
                  pointerEvents: visibleCards.includes(idx) ? 'auto' : 'none',
                  zIndex: visibleCards.includes(idx) ? 1 : 0
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = visibleCards.includes(idx)
                    ? 'translateY(0) scale(1)'
                    : 'translateY(40px) scale(0.96)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                }}
              >
                {/* ...existing code for image/icon and content... */}
                {course.image && course.image.startsWith('http') ? (
                  <div style={{
                    height: '200px',
                    background: `url(${course.image}) center center/cover no-repeat`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '100px',
                      height: '100px',
                      background: `radial-gradient(circle, ${course.color}30 0%, transparent 70%)`,
                      transform: 'translate(30px, -30px)'
                    }} />
                  </div>
                ) : (
                  <div style={{
                    height: '200px',
                    background: `linear-gradient(135deg, ${course.color}20 0%, ${course.color}40 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <span style={{
                      fontSize: '4rem',
                      opacity: 0.8
                    }}>
                      {course.image}
                    </span>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '100px',
                      height: '100px',
                      background: `radial-gradient(circle, ${course.color}30 0%, transparent 70%)`,
                      transform: 'translate(30px, -30px)'
                    }} />
                  </div>
                )}
                <div style={{ padding: '24px' }}>
                  <div style={{ marginBottom: '12px' }}>
                    {/* <span style={{
                      background: course.level === 'Beginner' ? '#e8f5e8' : 
                                 course.level === 'Intermediate' ? '#fff3cd' : 
                                 course.level === 'Advanced' ? '#f8d7da' : '#e3f2fd',
                      color: course.level === 'Beginner' ? '#155724' : 
                             course.level === 'Intermediate' ? '#856404' : 
                             course.level === 'Advanced' ? '#721c24' : '#0d47a1',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.85rem',
                      fontWeight: 500
                    }}>
                      {course.level}
                    </span>
                    <span style={{
                      float: 'right',
                      color: '#dc3545',
                      fontSize: '1.2rem',
                      cursor: 'pointer'
                    }}>
                      ♡
                    </span> */}
                  </div>
                  <h4 style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#2d3a4b',
                    marginBottom: '8px',
                    lineHeight: 1.3
                  }}>
                    {course.title}
                  </h4>
                  <p style={{
                    color: '#6c757d',
                    fontSize: '0.9rem',
                    lineHeight: 1.5,
                    marginBottom: '16px'
                  }}>
                    {course.description}
                  </p>
                  {/* <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '16px'
                  }}>
                    <div style={{ color: '#ffc107' }}>
                      {'★'.repeat(Math.floor(course.rating))}
                      {course.rating % 1 !== 0 && '☆'}
                    </div>
                    <span style={{ color: '#6c757d', fontSize: '0.9rem' }}>
                      {course.rating}/5.0
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: '#6c757d',
                    fontSize: '0.85rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ color: '#dc3545' }}>🕒</span>
                      {course.duration}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ color: '#fd7e14' }}>📚</span>
                      {course.lectures} lectures
                    </div>
                  </div> */}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MostPopularCourses;
