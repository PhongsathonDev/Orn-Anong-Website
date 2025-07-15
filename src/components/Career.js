
import React, { useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Arrow Components
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
        border: 'none',
        borderRadius: '50%',
        boxShadow: '0 2px 8px #eee',
        width: 44,
        height: 44,
        right: -48,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        fontSize: 22,
        color: '#7b7fd1',
        cursor: 'pointer',
        opacity: 1,
        position: 'absolute',
      }}
      onClick={onClick}
      aria-label="Next"
    >
      &#8594;
    </button>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
        border: 'none',
        borderRadius: '50%',
        boxShadow: '0 2px 8px #eee',
        width: 44,
        height: 44,
        left: -48,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        fontSize: 22,
        color: '#7b7fd1',
        cursor: 'pointer',
        opacity: 1,
        position: 'absolute',
      }}
      onClick={onClick}
      aria-label="Previous"
    >
      &#8592;
    </button>
  );
}



const courseData = [
  {
    title: "GraphQL: introduction to graphQL for beginners",
    category: "GraphQL",
    duration: "2h 46m",
    level: "Advance",
    rating: 4.5,
    reviews: 9300,
    author: "Ted Hawkins",
    color: "#f44ca4",
    icon: "🔗",
  },
  {
    title: "How to easily create a website with React",
    category: "React",
    duration: "3h 56m",
    level: "Beginner",
    rating: 4.5,
    reviews: 7700,
    author: "Morris Mccoy",
    color: "#1cc8ee",
    icon: "⚛️",
  },
  {
    title: "GraphQL: introduction to graphQL for beginners",
    category: "GraphQL",
    duration: "2h 46m",
    level: "Advance",
    rating: 4.5,
    reviews: 9300,
    author: "Ted Hawkins",
    color: "#f44ca4",
    icon: "🔗",
  },
  {
    title: "Angular - the complete guide for beginner",
    category: "Angular",
    duration: "1h 30m",
    level: "Beginner",
    rating: 4.5,
    reviews: 8890,
    author: "Juanita Bell",
    color: "#e44d4d",
    icon: "🅰️",
  },
];

const categories = [
  "All Categories",
  "Design",
  "Javascript",
  "Web Development",
];

function Career() {
  const [activeTab, setActiveTab] = useState(0);
  // Filter by category if not 'All Categories'
  const filteredCourses =
    activeTab === 0
      ? courseData
      : courseData.filter((c) => c.category === categories[activeTab]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(4, filteredCourses.length),
    slidesToScroll: 1,
    arrows: true,
    autoplay: activeTab === 0,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />, 
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ background: '#fafbff', minHeight: '100vh', paddingBottom: 60 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 20px 0 20px', marginTop: 150 }}>
        <div style={{ color: '#7b7fd1', fontWeight: 600, letterSpacing: 2, fontSize: 16, marginBottom: 10 }}>
          รับสมัครนักศึกษาฝึกงาน
        </div>
        <h1 style={{ fontSize: 44, fontWeight: 700, margin: 0 }}>โอกาสฝึกงานกับบริษัทของเรา</h1>
        <div style={{ fontSize: 20, color: '#555', margin: '18px 0 36px 0' }}>
          เปิดรับนักศึกษาฝึกงานในหลากหลายสาขา ร่วมเรียนรู้และพัฒนาทักษะกับทีมงานมืออาชีพ พร้อมประสบการณ์จริงในสายงาน
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 32, borderBottom: '2px solid #eee', marginBottom: 36 }}>
          {categories.map((cat, idx) => (
            <div
              key={cat}
              onClick={() => { setActiveTab(idx); }}
              style={{
                paddingBottom: 10,
                cursor: 'pointer',
                borderBottom: activeTab === idx ? '3px solid #7b7fd1' : '3px solid transparent',
                color: activeTab === idx ? '#7b7fd1' : '#888',
                fontWeight: 500,
                fontSize: 18,
                transition: 'color 0.2s',
              }}
            >
              {cat}
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div style={{ maxWidth: 1200, margin: '0 auto', marginBottom: 40 }}>
          <Slider {...sliderSettings}>
            {filteredCourses.map((course, idx) => (
              <div key={idx}>
                <div style={{
                  background: '#fff',
                  borderRadius: 16,
                  boxShadow: '0 2px 16px #f0f0f7',
                  width: 260,
                  minHeight: 320,
                  margin: '0 auto',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid #f2f2f2',
                }}>
                  <div style={{ background: course.color, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: 48 }}>{course.icon}</span>
                  </div>
                  <div style={{ padding: 20, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{course.category}</div>
                      <div style={{ fontWeight: 500, fontSize: 15, marginBottom: 12 }}>{course.title}</div>
                    </div>
                    <div style={{ fontSize: 14, color: '#888', marginBottom: 8 }}>
                      <span style={{ marginRight: 10 }}>⏱ {course.duration}</span>
                      <span>• {course.level}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 15, marginBottom: 8 }}>
                      <span style={{ color: '#f7b731', fontWeight: 700 }}>★ {course.rating}</span>
                      <span style={{ color: '#888' }}>({course.reviews.toLocaleString()})</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ width: 28, height: 28, borderRadius: '50%', background: '#eee', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>{course.author[0]}</span>
                      <span style={{ fontSize: 15 }}>{course.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Career;
