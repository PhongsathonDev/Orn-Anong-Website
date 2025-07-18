import React from 'react';
import { ReactTyped } from 'react-typed';
import '../../components/css/Main.css';

function Main() {
  return (
    <div style={{ textAlign: 'center', marginTop: '80px', fontFamily: 'Prompt, sans-serif' }}>
      <h1 style={{ fontSize: '3.7rem', fontWeight: 'bold', color: '#211c3a', lineHeight: '1.2', letterSpacing: '2px' }}>
        เราจัดการเรื่องบัญชีและภาษีของท่านด้วย
        <span className="animated-underline">
          <ReactTyped
            strings={["ความใส่ใจ", "ความเชี่ยวชาญ", "ความโปร่งใส"]}
            typeSpeed={80}
            backSpeed={50}
            backDelay={2000}
            loop
          />
        </span>
      </h1>
      <p style={{ color: '#413f49ff', fontSize: '1.7rem', marginTop: '32px' }}>
        ผู้เชี่ยวชาญด้านบัญชี การสอบบัญชี และการให้คำปรึกษาทางการเงินด้วยทีมงานมืออาชีพและประสบการณ์จริงกว่า 40 ปี
      </p>
    </div>
  );
}

export default Main;
