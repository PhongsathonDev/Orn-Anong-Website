import React from 'react';
import './Services.css'; // Assuming you have a CSS file for styling

function TransferPricing() {
  return (
    <div className="transfer-pricing-container" >
      
    
      {/* Hero Section */}
      <section className="hero-section" style={{ background: `url(https://news-api.bloombergtax.com/v1/resize-image?url=http%3A%2F%2Fbloomberg-bna-brightspot.s3.amazonaws.com%2Fba%2F1c%2F25765c3a4fcabccf06d82cfc5dbd%2Finsight-global-tax-final2.png&width=1240&height=480&fit=cover) no-repeat center center/cover` }}>
        <div className="hero-content">
          
          <h1 className="hero-title" style={{ marginTop : '80px' }}>บริการงาน Transfer Pricing</h1>
          <p className="hero-subtitle" >
            บริการด้านการกำหนดราคาโอนระหว่างบริษัทที่มีความสัมพันธ์กันโดยทีมผู้เชี่ยวชาญ
          </p>
          <div className="hero-highlight">
            <p>ความน่าเชื่อถือ • ความเชี่ยวชาญ • การให้บริการครบวงจร</p>
          </div>
        </div>
        
      </section>
    
      {/* Introduction Section */}
      {/* Breadcrumbs Section */}
      <section className="breadcrumbs-section">
        <div className="container">
          <nav className="breadcrumbs">
            <ol className="breadcrumb-list">
              <li className="breadcrumb-item">
                <a href="/" className="breadcrumb-link">หน้าแรก</a>
              </li>
              <li className="breadcrumb-separator">
                <span>›</span>
              </li>
              <li className="breadcrumb-item">
                <a href="/services" className="breadcrumb-link">บริการของเรา</a>
              </li>
              <li className="breadcrumb-separator">
                <span>›</span>
              </li>
              <li className="breadcrumb-item breadcrumb-current">
                <span>Transfer Pricing</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="intro-section">
        
        <div className="container">
          <h2 className="section-title">เกี่ยวกับบริการ</h2>
          <div className="intro-content">
            <p>
              สืบเนื่องจากที่มีบทบัญญัติแห่งกฎหมายตามประมวลรัษฎากรและแนวทางปฏิบัติของกรมสรรพากรเกี่ยวกับกำหนดราคาโอนระหว่างบริษัทหรือห้างหุ้นส่วนนิติบุคคลที่มีความสัมพันธ์กัน (Transfer Pricing)
            </p>
            <p>
              โดยกำหนดให้บริษัทหรือห้างหุ้นส่วนนิติบุคคลที่มีความสัมพันธ์กัน (บริษัทในเครือเดียวกัน) จัดทำรายงานเพื่อเปิดเผยข้อมูลเกี่ยวกับบริษัทหรือห้างหุ้นส่วนนิติบุคคลที่มีความสัมพันธ์กันและมูลค่ารวมของธุรกรรมระหว่างกันในแต่ละรอบระยะเวลาบัญชี ซึ่งใช้บังคับสำหรับรอบระยะเวลาบัญชีปี 2562 เป็นต้นไป
            </p>
            <p>
              ด้วยเหตุนี้ บริษัทหรือห้างหุ้นส่วนนิติบุคคลที่เข้าลักษณะความสัมพันธ์ตามที่กฎหมายกำหนด จะต้องเตรียมความพร้อมเพื่อทำความเข้าใจและดำเนินการให้สอดคล้องกับหลักเกณฑ์ที่กฎหมายกำหนด
            </p>
          </div>
        </div>
      </section>

      {/* Service Types Section */}
      <section className="service-types">
        <div className="container">
          <h2 className="section-title">รูปแบบการให้บริการ</h2>
          <div className="types-list">
            <div className="type-item">
              <div className="type-number">01</div>
              <div className="type-content">
                <h3>การศึกษาและวิเคราะห์ข้อมูล</h3>
                <p>
                  ศึกษาข้อเท็จจริง ตรวจทาน และวิเคราะห์ข้อมูลของบริษัทในกลุ่มของบริษัทท่านที่มีความสัมพันธ์ระหว่างกันและข้อกำหนดของธุรกรรมระหว่างกัน ตามกฎหมายมาตรการป้องกันการกำหนดราคาโอนระหว่างบริษัทที่มีความสัมพันธ์กัน
                </p>
              </div>
            </div>
            <div className="type-item">
              <div className="type-number">02</div>
              <div className="type-content">
                <h3>จัดทำแบบรายงานประจำปี</h3>
                <p>
                  จัดทำแบบรายงานประจำปีสำหรับบริษัทหรือห้างหุ้นส่วนนิติบุคคลที่มีความสัมพันธ์กันตามมาตรา 71 ทวิ แห่งประมวลรัษฎากร (Disclosure Form) ของบริษัทท่าน พร้อมยื่นแบบต่อกรมสรรพากร
                </p>
              </div>
            </div>
            <div className="type-item">
              <div className="type-number">03</div>
              <div className="type-content">
                <h3>จัดทำเอกสารหลักฐานที่จำเป็น</h3>
                <p>
                  จัดทำเอกสารหรือหลักฐานแสดงข้อมูลที่จำเป็นสำหรับการวิเคราะห์ข้อกำหนดของธุรกรรมระหว่างกันของบริษัทท่าน (Local File)
                </p>
              </div>
            </div>
            <div className="type-item">
              <div className="type-number">04</div>
              <div className="type-content">
                <h3>ตรวจทานเอกสาร</h3>
                <p>
                  ตรวจทาน Disclosure Form และ / หรือ Local File ที่บริษัทท่านจัดทำด้วยตนเอง พร้อมให้ความเห็นหรือข้อเสนอแนะเพิ่มเติม เพื่อให้สอดคล้องกับกฎหมายที่เกี่ยวข้องกำหนด
                </p>
              </div>
            </div>
            <div className="type-item">
              <div className="type-number">05</div>
              <div className="type-content">
                <h3>เข้าร่วมประชุม</h3>
                <p>
                  เข้าร่วมประชุมเพื่อนำเสนอและให้ความเห็น คำแนะนำ ตามความเหมาะสม (ถ้ามี)
                </p>
              </div>
            </div>
            <div className="type-item">
              <div className="type-number">06</div>
              <div className="type-content">
                <h3>ให้คำปรึกษาแนะนำ</h3>
                <p>
                  ให้คำปรึกษาแนะนำเกี่ยวกับกฎหมาย รวมทั้งแนวทางในการดำเนินงานในส่วนที่เกี่ยวข้อง
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <h2 className="section-title">อัตราค่าบริการ</h2>
          <div className="pricing-note">
            <p>
              อัตราค่าบริการขึ้นอยู่กับลักษณะโครงสร้างของธุรกิจ และรายการธุรกรรม ติดต่อเราเพื่อรับการประเมินราคาที่เหมาะสมสำหรับธุรกิจของคุณ
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="deliverables-section">
        <div className="container">
          <h2 className="section-title">สิ่งที่จะได้รับ</h2>
          <div className="deliverables-grid">
            <div className="deliverable-card">
              <div className="deliverable-icon">📄</div>
              <h3>Disclosure Form</h3>
              <p>
                แบบรายงานประจำปีสำหรับบริษัทหรือห้างหุ้นส่วนนิติบุคคลที่มีความสัมพันธ์กันตามมาตรา 71 ทวิ แห่งประมวลรัษฎากร
              </p>
            </div>
            <div className="deliverable-card">
              <div className="deliverable-icon">📑</div>
              <h3>Local File</h3>
              <p>
                เอกสารหรือหลักฐานแสดงข้อมูลที่จำเป็นสำหรับการวิเคราะห์ข้อกำหนดของธุรกรรมระหว่างกันของบริษัทท่าน
              </p>
            </div>
            <div className="deliverable-card">
              <div className="deliverable-icon">📋</div>
              <h3>รายงานผลการตรวจทาน</h3>
              <p>
                รายงานผลการตรวจทาน Disclosure Form และ / หรือ Local File พร้อมข้อเสนอแนะเพิ่มเติม
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Clients Section */}
      <section className="target-clients-section">
        <div className="container">
          <h2 className="section-title">บริการนี้เหมาะสำหรับ</h2>
          <div className="clients-grid">
            <div className="client-card">
              <span className="client-icon">🏢</span>
              <h3>บริษัทในเครือ</h3>
              <p>
                นิติบุคคลที่ประกอบธุรกิจในลักษณะของบริษัทในเครือ ไม่ว่าจะเป็นบริษัทแม่ หรือเป็นบริษัทลูก
              </p>
            </div>
            <div className="client-card">
              <span className="client-icon">💹</span>
              <h3>บริษัทที่มีรายได้สูง</h3>
              <p>
                นิติบุคคลที่มีรายได้จากการประกอบกิจการหรือเนื่องจากการประกอบกิจการ 200 ล้านบาทขึ้นไป
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">ข้อดีของบริการ</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <span className="benefit-number">1.</span>
              <h3>เอกสารถูกต้องตามกฎหมาย</h3>
              <p>
                จัดเตรียม Disclosure Form ได้ถูกต้องและครบถ้วนตามที่กฎหมายกำหนด
              </p>
            </div>
            <div className="benefit-card">
              <span className="benefit-number">2.</span>
              <h3>การจัดทำ Local File มีคุณภาพ</h3>
              <p>
                จัดเตรียม Local File ให้สอดคล้องกับที่กฎหมายกำหนดและมีเนื้อหาครบถ้วน
              </p>
            </div>
            <div className="benefit-card">
              <span className="benefit-number">3.</span>
              <h3>ลดภาระงานภายในองค์กร</h3>
              <p>
                แบ่งเบาหน้าที่งานของฝ่ายบัญชีการเงิน หรือพนักงานส่วนที่เกี่ยวข้องของบริษัทท่าน เนื่องจากการจัดเตรียมเอกสารดังกล่าว ต้องศึกษาทำความเข้าใจกฎหมาย ตลอดทั้งวิเคราะห์ข้อมูลต่างๆ ซึ่งอาจกระทบต่อหน้าที่งานประจำของตำแหน่งนั้นๆ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="required-docs-section">
        <div className="container">
          <h2 className="section-title">สิ่งที่ลูกค้าต้องเตรียม</h2>
          <div className="docs-list">
            <div className="doc-item">
              <span className="doc-icon">📊</span>
              <div className="doc-content">
                <p>เอกสารแสดงโครงสร้างการถือหุ้นและความสัมพันธ์ของกิจการในกลุ่มเดียวกัน</p>
              </div>
            </div>
            <div className="doc-item">
              <span className="doc-icon">📋</span>
              <div className="doc-content">
                <p>ลักษณะการประกอบธุรกิจของบริษัท กับบริษัทในเครือ</p>
              </div>
            </div>
            <div className="doc-item">
              <span className="doc-icon">💼</span>
              <div className="doc-content">
                <p>รายการธุรกรรมระหว่างกันที่เกิดขึ้นในแต่ละรอบระยะเวลาบัญชี</p>
              </div>
            </div>
            <div className="doc-item">
              <span className="doc-icon">📁</span>
              <div className="doc-content">
                <p>corporate profile (ถ้ามี)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">ช่องทางการติดต่อ</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>โทรศัพท์</h3>
              <p>02-XXX-XXXX</p>
              <p>08X-XXX-XXXX</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <h3>อีเมล</h3>
              <p>info@company.com</p>
              <p>legal@company.com</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>ที่อยู่</h3>
              <p>เลขที่ XXX ถนน XXX</p>
              <p>แขวง XXX เขต XXX กรุงเทพฯ</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">🕐</div>
              <h3>เวลาทำการ</h3>
              <p>จันทร์ - ศุกร์: 9:00 - 18:00</p>
              <p>เสาร์: 9:00 - 16:00</p>
            </div>
          </div>
          
          <div className="contact-cta">
            <button className="cta-button">ปรึกษาฟรี</button>
            <p className="cta-text">พร้อมให้คำปรึกษาเบื้องต้นโดยไม่เสียค่าใช้จ่าย</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TransferPricing;
