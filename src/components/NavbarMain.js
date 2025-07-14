import React, { useState, useRef } from "react";
import { Navbar, Dropdown } from "react-bootstrap";
import logoImage from "../image/favicon.jpg";

const NavbarMain = () => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const hideDropdownTimeout = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false); // เพิ่ม state สำหรับ navigation scroll

  // เพิ่ม useEffect สำหรับตรวจจับการ scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); // เปลี่ยนสไตล์เมื่อ scroll ลงมา 100px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // เพิ่ม delay 250ms ก่อนซ่อน dropdown
  const handleServicesMouseEnter = () => {
    if (hideDropdownTimeout.current) {
      clearTimeout(hideDropdownTimeout.current);
      hideDropdownTimeout.current = null;
    }
    setShowServicesDropdown(true);
  };

  const handleServicesMouseLeave = () => {
    hideDropdownTimeout.current = setTimeout(() => {
      setShowServicesDropdown(false);
      setHoveredCategory(null);
    }, 250);
  };

  // เพิ่ม delay 250ms ก่อนซ่อน category dropdown
  const handleCategoryMouseEnter = (category) => {
    if (hideDropdownTimeout.current) {
      clearTimeout(hideDropdownTimeout.current);
      hideDropdownTimeout.current = null;
    }
    setHoveredCategory(category);
  };

  const handleCategoryMouseLeave = () => {
    hideDropdownTimeout.current = setTimeout(() => {
      setHoveredCategory(null);
    }, 250);
  };

  return (
  <div className="custom-navbar"
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: isScrolled ? "10px 20px" : "20px 20px",
      background: isScrolled 
        ? "rgba(255, 255, 255, 0.7)" 
        : "transparent",
      backdropFilter: isScrolled ? "blur(50px)" : "none",
      borderBottom: isScrolled 
        ? "1px solid rgba(0, 0, 0, 0.1)" 
        : "none",
      transition: "all 0.3s ease",
      boxShadow: isScrolled 
        ? "0 2px 20px rgba(0, 0, 0, 0.1)" 
        : "none"
    }}
  >
    <div className="nav-left">
      <Navbar.Brand href="/home" className="d-flex align-items-center">
        <img
          src={logoImage}
          alt="Logo"
          width="75"
          height="75"
          className="me-2"
          style={{ 
            borderRadius: "50%",
            transition: "all 0.3s ease"
          }}
        />
        <span
          className="fw-bold fs-4"
          style={{ 
            fontFamily: "Prompt, sans-serif",
            color: isScrolled ? " #1e293b" : "rgb(0, 0, 0)",
            transition: "all 0.3s ease",
          }}
        >
          &nbsp;&nbsp; ORNANONG ACCOUNTING
        </span>
      </Navbar.Brand>
    </div>
    
    <div className="nav-right">
      <a href="/home" style={{ textDecoration: "none" }}>
        <span 
          className="nav-item"
          style={{
            color: isScrolled ? " #1e293b" : "rgb(0, 0, 0)",
            transition: "all 0.3s ease",
          }}
        >
          หน้าแรก
        </span>
      </a>
      <div className="divider" style={{
        backgroundColor: isScrolled ? "rgb(115, 118, 122)" : "rgba(0, 0, 0, 0.5)",
        transition: "all 0.3s ease"
      }} />
      <a href="#getstart" style={{ textDecoration: "none" }}>
        <span 
          className="nav-item"
          style={{
            color: isScrolled ? " #1e293b" : "rgb(0, 0, 0)",
            transition: "all 0.3s ease",
          }}
        >
          เกี่ยวกับเรา
        </span>
      </a>
      <div className="divider" style={{
        backgroundColor: isScrolled ? "rgb(115, 118, 122)" : "rgba(0, 0, 0, 0.5)",
        transition: "all 0.3s ease"
      }} />
      
      <div 
        className="services-dropdown-container"
        onMouseEnter={handleServicesMouseEnter}
        onMouseLeave={handleServicesMouseLeave}
        style={{ position: "relative", display: "inline-block" }}
      >
        <a href="/home#our-services" style={{ textDecoration: "none" }}>
          <span 
            className="nav-item"
            style={{
              color: isScrolled ? " #1e293b" : "rgb(0, 0, 0)",
              transition: "all 0.3s ease",
            }}
          >
            บริการของเรา
          </span>
        </a>
        {showServicesDropdown && (
          <div
            className="services-dropdown"
            style={{
              position: "absolute",
              top: "100%",
              right: "-50px",
              minWidth: "320px",
              borderRadius: "16px",
              zIndex: 1001,
              border: "1px solid rgba(0, 0, 0, 0.08)",
              marginTop: "12px",
              background: isScrolled
                ? "rgba(255,255,255,1)"
                : "rgba(255,255,255,0.5)",
              backdropFilter: isScrolled ? "blur(50px)" : "blur(50px)",
              boxShadow: isScrolled
                ? "0 2px 20px rgba(0,0,0,0.1)"
                : "0 4px 24px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease"
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <div
                onMouseEnter={() => handleCategoryMouseEnter('legal')}
                onMouseLeave={handleCategoryMouseLeave}
                style={{ position: "relative" }}
              >
                <a href="/services/legal" style={{ textDecoration: "none" }}>
                  <div style={{ 
                    padding: "16px 20px",
                    borderRadius: "12px",
                    cursor: "pointer",
                    backgroundColor: hoveredCategory === 'legal' ? "rgba(59, 130, 246, 0.08)" : "transparent",
                    transition: "all 0.3s ease",
                    boxShadow: hoveredCategory === 'legal' ? "0 4px 12px rgba(59, 130, 246, 0.15)" : "none"
                  }}>
                    <span style={{ 
                      color: "#1e293b", 
                      fontWeight: "600", 
                      fontSize: "15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}>
                      บริการด้านกฎหมาย 
                      <span style={{ fontSize: "12px", color: "#64748b" }}>→</span>
                    </span>
                  </div>
                </a>
                {hoveredCategory === 'legal' && (
                  <div
                    onMouseEnter={() => handleCategoryMouseEnter('legal')}
                    onMouseLeave={handleCategoryMouseLeave}
                    style={{
                      position: "absolute",
                      right: "100%",
                      top: "0",
                      minWidth: "380px",
                      boxShadow: isScrolled
                        ? "0 2px 20px rgba(0,0,0,0.1)"
                        : "0 4px 24px rgba(0,0,0,0.08)",
                      borderRadius: "16px",
                      padding: "20px",
                      zIndex: 1002,
                      border: "1px solid rgba(0, 0, 0, 0.08)",
                      marginRight: "12px",
                      background: isScrolled
                        ? "rgba(255,255,255,1)"
                        : "rgba(255,255,255,0.98)",
                      backdropFilter: "blur(50px)",
                      boxShadow: isScrolled
                        ? "0 2px 20px rgba(0,0,0,0.1)"
                        : "0 4px 24px rgba(0,0,0,0.08)",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <h6 style={{ 
                      color: "#1e293b", 
                      fontWeight: "700", 
                      marginBottom: "16px",
                      fontSize: "16px",
                      borderBottom: "3px solid #3b82f6",
                      paddingBottom: "10px",
                      background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}>
                      บริการด้านกฎหมาย
                    </h6>
                    <ul style={{ 
                      listStyle: "none", 
                      padding: 0, 
                      margin: 0,
                      fontSize: "14px",
                      lineHeight: "1.6"
                    }}>
                      <li style={{ 
                        marginBottom: "10px", 
                        color: "#64748b", 
                        cursor: "pointer", 
                        padding: "8px 12px", 
                        borderRadius: "8px",
                        transition: "all 0.2s ease",
                        borderLeft: "3px solid transparent"
                      }} 
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#f1f5f9";
                            e.target.style.borderLeftColor = "#3b82f6";
                            e.target.style.color = "#1e293b";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.borderLeftColor = "transparent";
                            e.target.style.color = "#64748b";
                          }}>
                        • งานกฎหมายธุรกิจ
                      </li>
                      <li style={{ 
                        marginBottom: "10px", 
                        color: "#64748b", 
                        cursor: "pointer", 
                        padding: "8px 12px", 
                        borderRadius: "8px",
                        transition: "all 0.2s ease",
                        borderLeft: "3px solid transparent"
                      }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#f1f5f9";
                            e.target.style.borderLeftColor = "#3b82f6";
                            e.target.style.color = "#1e293b";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.borderLeftColor = "transparent";
                            e.target.style.color = "#64748b";
                          }}>
                        • งานกฎหมายภาษีอากร
                      </li>
                      <li style={{ 
                        marginBottom: "10px", 
                        color: "#64748b", 
                        cursor: "pointer", 
                        padding: "8px 12px", 
                        borderRadius: "8px",
                        transition: "all 0.2s ease",
                        borderLeft: "3px solid transparent"
                      }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#f1f5f9";
                            e.target.style.borderLeftColor = "#3b82f6";
                            e.target.style.color = "#1e293b";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.borderLeftColor = "transparent";
                            e.target.style.color = "#64748b";
                          }}>
                        • งานอรรถคดีและบังคับคดี
                      </li>
                      <li style={{ 
                        marginBottom: "10px", 
                        color: "#64748b", 
                        cursor: "pointer", 
                        padding: "8px 12px", 
                        borderRadius: "8px",
                        transition: "all 0.2s ease",
                        borderLeft: "3px solid transparent"
                      }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#f1f5f9";
                            e.target.style.borderLeftColor = "#3b82f6";
                            e.target.style.color = "#1e293b";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.borderLeftColor = "transparent";
                            e.target.style.color = "#64748b";
                          }}>
                        • งานกฎหมายอื่น ๆ ที่เกี่ยวกับการค้าและบุคคล
                      </li>
                      <li style={{ 
                        marginBottom: "10px", 
                        color: "#64748b", 
                        cursor: "pointer", 
                        padding: "8px 12px", 
                        borderRadius: "8px",
                        transition: "all 0.2s ease",
                        borderLeft: "3px solid transparent"
                      }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#f1f5f9";
                            e.target.style.borderLeftColor = "#3b82f6";
                            e.target.style.color = "#1e293b";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.borderLeftColor = "transparent";
                            e.target.style.color = "#64748b";
                          }}>
                        • งาน Transfer Pricing
                      </li>
                      <li style={{ 
                        marginBottom: "10px", 
                        color: "#64748b", 
                        cursor: "pointer", 
                        padding: "8px 12px", 
                        borderRadius: "8px",
                        transition: "all 0.2s ease",
                        borderLeft: "3px solid transparent"
                      }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#f1f5f9";
                            e.target.style.borderLeftColor = "#3b82f6";
                            e.target.style.color = "#1e293b";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.borderLeftColor = "transparent";
                            e.target.style.color = "#64748b";
                          }}>
                        • บริการจัดทำพินัยกรรม
                      </li>
                      <li style={{ 
                        marginBottom: "10px", 
                        color: "#64748b", 
                        cursor: "pointer", 
                        padding: "8px 12px", 
                        borderRadius: "8px",
                        transition: "all 0.2s ease",
                        borderLeft: "3px solid transparent"
                      }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#f1f5f9";
                            e.target.style.borderLeftColor = "#3b82f6";
                            e.target.style.color = "#1e293b";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.borderLeftColor = "transparent";
                            e.target.style.color = "#64748b";
                          }}>
                        • บริการด้านอรรถคดี(ต่อสู้ในชั้นศาล) คดีแพ่งสามัญ
                      </li>
                      <li style={{ 
                        marginBottom: "10px", 
                        color: "#64748b", 
                        cursor: "pointer", 
                        padding: "8px 12px", 
                        borderRadius: "8px",
                        transition: "all 0.2s ease",
                        borderLeft: "3px solid transparent"
                      }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#f1f5f9";
                            e.target.style.borderLeftColor = "#3b82f6";
                            e.target.style.color = "#1e293b";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.borderLeftColor = "transparent";
                            e.target.style.color = "#64748b";
                          }}>
                        • บริการทำสัญญาหย่าโดยความยินยอม ฟ้องหย่า และการจัดการทรัพย์สิน
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div
                onMouseEnter={() => handleCategoryMouseEnter('accounting')}
                onMouseLeave={handleCategoryMouseLeave}
                style={{ position: "relative" }}
              >
                <a href="/services/accounting-payroll" style={{ textDecoration: "none" }}>
                  <div style={{ 
                    padding: "16px 20px",
                    borderRadius: "12px",
                    cursor: "pointer",
                    backgroundColor: hoveredCategory === 'accounting' ? "rgba(16, 185, 129, 0.08)" : "transparent",
                    transition: "all 0.3s ease",
                    boxShadow: hoveredCategory === 'accounting' ? "0 4px 12px rgba(16, 185, 129, 0.15)" : "none"
                  }}>
                    <span style={{ 
                      color: "#1e293b", 
                      fontWeight: "600", 
                      fontSize: "15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}>
                      บริการจัดทำบัญชีและเงินเดือน 
                      <span style={{ fontSize: "12px", color: "#64748b" }}>→</span>
                    </span>
                  </div>
                </a>
                {hoveredCategory === 'accounting' && (
                  <div
                    onMouseEnter={() => handleCategoryMouseEnter('accounting')}
                    onMouseLeave={handleCategoryMouseLeave}
                    style={{
                      position: "absolute",
                      right: "100%",
                      top: "0",
                      minWidth: "320px",
                      boxShadow: isScrolled
                        ? "0 2px 20px rgba(0,0,0,0.1)"
                        : "0 4px 24px rgba(0,0,0,0.08)",
                      borderRadius: "16px",
                      padding: "20px",
                      zIndex: 1002,
                      border: "1px solid rgba(0, 0, 0, 0.08)",
                      marginRight: "12px",
                      background: isScrolled
                        ? "rgba(255,255,255,1)"
                        : "rgba(255,255,255,0.98)",
                      backdropFilter: isScrolled ? "blur(50px)" : "blur(20px)",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <h6 style={{ 
                      color: "#1e293b", 
                      fontWeight: "700", 
                      marginBottom: "16px",
                      fontSize: "16px",
                      borderBottom: "3px solid #10b981",
                      paddingBottom: "10px",
                      background: "linear-gradient(135deg, #10b981, #059669)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}>
                      บริการจัดทำบัญชีและเงินเดือน
                    </h6>
                    <ul style={{ 
                      listStyle: "none", 
                      padding: 0, 
                      margin: 0,
                      fontSize: "14px",
                      lineHeight: "1.6"
                    }}>
                      <li style={{ 
                        marginBottom: "10px", 
                        color: "#64748b", 
                        cursor: "pointer", 
                        padding: "8px 12px", 
                        borderRadius: "8px",
                        transition: "all 0.2s ease",
                        borderLeft: "3px solid transparent"
                      }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#f0fdf4";
                            e.target.style.borderLeftColor = "#10b981";
                            e.target.style.color = "#1e293b";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.borderLeftColor = "transparent";
                            e.target.style.color = "#64748b";
                          }}>
                        • บริการจัดทำบัญชี
                      </li>
                      <li style={{ 
                        marginBottom: "10px", 
                        color: "#64748b", 
                        cursor: "pointer", 
                        padding: "8px 12px", 
                        borderRadius: "8px",
                        transition: "all 0.2s ease",
                        borderLeft: "3px solid transparent"
                      }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#f0fdf4";
                            e.target.style.borderLeftColor = "#10b981";
                            e.target.style.color = "#1e293b";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.borderLeftColor = "transparent";
                            e.target.style.color = "#64748b";
                          }}>
                        • บริการจัดทำเงินเดือน
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div
                onMouseEnter={() => handleCategoryMouseEnter('audit')}
                onMouseLeave={handleCategoryMouseLeave}
                style={{ position: "relative" }}
              >
                <a href="/services/audit" style={{ textDecoration: "none" }}>
                  <div style={{ 
                    padding: "16px 20px",
                    borderRadius: "12px",
                    cursor: "pointer",
                    backgroundColor: hoveredCategory === 'audit' ? "rgba(245, 158, 11, 0.08)" : "transparent",
                    transition: "all 0.3s ease",
                    boxShadow: hoveredCategory === 'audit' ? "0 4px 12px rgba(245, 158, 11, 0.15)" : "none"
                  }}>
                    <span style={{ 
                      color: "#1e293b", 
                      fontWeight: "600", 
                      fontSize: "15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}>
                      บริการตรวจสอบบัญชี 
                      <span style={{ fontSize: "12px", color: "#64748b" }}>→</span>
                    </span>
                  </div>
                </a>
                {hoveredCategory === 'audit' && (
                  <div
                    onMouseEnter={() => handleCategoryMouseEnter('audit')}
                    onMouseLeave={handleCategoryMouseLeave}
                    style={{
                      position: "absolute",
                      right: "100%",
                      top: "0",
                      minWidth: "420px",
                      boxShadow: isScrolled
                        ? "0 2px 20px rgba(0,0,0,0.1)"
                        : "0 4px 24px rgba(0,0,0,0.08)",
                      borderRadius: "16px",
                      padding: "20px",
                      zIndex: 1002,
                      border: "1px solid rgba(0, 0, 0, 0.08)",
                      marginRight: "12px",
                      background: isScrolled
                        ? "rgba(255,255,255,1)"
                        : "rgba(255,255,255,0.98)",
                      backdropFilter: isScrolled ? "blur(50px)" : "blur(20px)",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <h6 style={{ 
                      color: "#1e293b", 
                      fontWeight: "700", 
                      marginBottom: "16px",
                      fontSize: "16px",
                      borderBottom: "3px solid #f59e0b",
                      paddingBottom: "10px",
                      background: "linear-gradient(135deg, #f59e0b, #d97706)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}>
                      บริการตรวจสอบบัญชี
                    </h6>
                    <ul style={{ 
                      listStyle: "none", 
                      padding: 0, 
                      margin: 0,
                      fontSize: "14px",
                      lineHeight: "1.6"
                    }}>
                      {['บริการตรวจสอบงบการเงิน', 'บริการสอบทานงบการเงิน', 'บริการตรวจสอบการซื้อกิจการ (Due Diligence)', 'บริการตรวจสอบพิเศษ (Special Audit)', 'บริการที่ปรึกษาบัญชี และ บริการที่เกี่ยวเนื่อง'].map((item, index) => (
                        <li key={index} style={{ 
                          marginBottom: "10px", 
                          color: "#64748b", 
                          cursor: "pointer", 
                          padding: "8px 12px", 
                          borderRadius: "8px",
                          transition: "all 0.2s ease",
                          borderLeft: "3px solid transparent"
                        }}
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = "#fffbeb";
                              e.target.style.borderLeftColor = "#f59e0b";
                              e.target.style.color = "#1e293b";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor = "transparent";
                              e.target.style.borderLeftColor = "transparent";
                              e.target.style.color = "#64748b";
                            }}>
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div
                onMouseEnter={() => handleCategoryMouseEnter('internal')}
                onMouseLeave={handleCategoryMouseLeave}
                style={{ position: "relative" }}
              >
                <a href="/services/internal-audit" style={{ textDecoration: "none" }}>
                  <div style={{ 
                    padding: "16px 20px",
                    borderRadius: "12px",
                    cursor: "pointer",
                    backgroundColor: hoveredCategory === 'internal' ? "rgba(139, 92, 246, 0.08)" : "transparent",
                    transition: "all 0.3s ease",
                    boxShadow: hoveredCategory === 'internal' ? "0 4px 12px rgba(139, 92, 246, 0.15)" : "none"
                  }}>
                    <span style={{ 
                      color: "#1e293b", 
                      fontWeight: "600", 
                      fontSize: "15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}>
                      บริการตรวจสอบภายใน 
                      <span style={{ fontSize: "12px", color: "#64748b" }}>→</span>
                    </span>
                  </div>
                </a>
                {hoveredCategory === 'internal' && (
                  <div
                    onMouseEnter={() => handleCategoryMouseEnter('internal')}
                    onMouseLeave={handleCategoryMouseLeave}
                    style={{
                      position: "absolute",
                      right: "100%",
                      top: "0",
                      minWidth: "480px",
                      boxShadow: isScrolled
                        ? "0 2px 20px rgba(0,0,0,0.1)"
                        : "0 4px 24px rgba(0,0,0,0.08)",
                      borderRadius: "16px",
                      padding: "20px",
                      zIndex: 1002,
                      border: "1px solid rgba(0, 0, 0, 0.08)",
                      marginRight: "12px",
                      background: isScrolled
                        ? "rgba(255,255,255,1)"
                        : "rgba(255,255,255,0.98)",
                      backdropFilter: isScrolled ? "blur(50px)" : "blur(20px)",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <h6 style={{ 
                      color: "#1e293b", 
                      fontWeight: "700", 
                      marginBottom: "16px",
                      fontSize: "16px",
                      borderBottom: "3px solid #8b5cf6",
                      paddingBottom: "10px",
                      background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}>
                      บริการตรวจสอบภายใน
                    </h6>
                    <ul style={{ 
                      listStyle: "none", 
                      padding: 0, 
                      margin: 0,
                      fontSize: "14px",
                      lineHeight: "1.6",
                      maxHeight: "300px",
                      overflowY: "auto"
                    }}>
                      {[
                        'บริการงานตรวจสอบภายใน (IA)',
                        'บริการงานประเมินระบบการควบคุมภายใน (IPO)',
                        'บริการงานประเมินตนเองเกี่ยวกับมาตรการต่อต้านทุจริตคอร์รัปชัน (CAC)',
                        'บริการงานการสอบทานและประเมินความเชื่อมั่นในคุณภาพงานตรวจสอบภายใน (QAR)',
                        'บริการงานประเมินระบบ IT (IT Audit)',
                        'บริการงานพัฒนาระบบ',
                        'บริการงานพัฒนาธุรกิจ',
                        'บริการงานตรวจสอบพิเศษ',
                        'บริการรายงาน ESG',
                        'บริการ Due Diligence',
                        'บริการรายงาน Carbon Footprint',
                        'บริการที่ปรึกษาจัดตั้งหน่วยงานตรวจสอบภายใน',
                        'บริการการกำกับดูแลและจัดการการใช้งานเทคโนโลยีปัญญาประดิษฐ์',
                        'บริการประเมินความพร้อมการกำกับดูแลปัญญาประดิษฐ์'
                      ].map((item, index) => (
                        <li key={index} style={{ 
                          marginBottom: "8px", 
                          color: "#64748b", 
                          cursor: "pointer", 
                          padding: "6px 12px", 
                          borderRadius: "8px",
                          transition: "all 0.2s ease",
                          borderLeft: "3px solid transparent"
                        }}
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = "#faf5ff";
                              e.target.style.borderLeftColor = "#8b5cf6";
                              e.target.style.color = "#1e293b";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor = "transparent";
                              e.target.style.borderLeftColor = "transparent";
                              e.target.style.color = "#64748b";
                            }}>
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div
                onMouseEnter={() => handleCategoryMouseEnter('it')}
                onMouseLeave={handleCategoryMouseLeave}
                style={{ position: "relative" }}
              >
                <a href="/services/web-it" style={{ textDecoration: "none" }}>
                  <div style={{ 
                    padding: "16px 20px",
                    borderRadius: "12px",
                    cursor: "pointer",
                    backgroundColor: hoveredCategory === 'it' ? "rgba(239, 68, 68, 0.08)" : "transparent",
                    transition: "all 0.3s ease",
                    boxShadow: hoveredCategory === 'it' ? "0 4px 12px rgba(239, 68, 68, 0.15)" : "none"
                  }}>
                    <span style={{ 
                      color: "#1e293b", 
                      fontWeight: "600", 
                      fontSize: "15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}>
                      บริการออกแบบ พัฒนาเว็บไซต์และไอที 
                      <span style={{ fontSize: "12px", color: "#64748b" }}>→</span>
                    </span>
                  </div>
                </a>
                {hoveredCategory === 'it' && (
                  <div
                    onMouseEnter={() => handleCategoryMouseEnter('it')}
                    onMouseLeave={handleCategoryMouseLeave}
                    style={{
                      position: "absolute",
                      right: "100%",
                      top: "0",
                      minWidth: "480px",
                      boxShadow: isScrolled
                        ? "0 2px 20px rgba(0,0,0,0.1)"
                        : "0 4px 24px rgba(0,0,0,0.08)",
                      borderRadius: "16px",
                      padding: "20px",
                      zIndex: 1002,
                      border: "1px solid rgba(0, 0, 0, 0.08)",
                      marginRight: "12px",
                      background: isScrolled
                        ? "rgba(255,255,255,1)"
                        : "rgba(255,255,255,0.98)",
                      backdropFilter: isScrolled ? "blur(50px)" : "blur(20px)",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <h6 style={{ 
                      color: "#1e293b", 
                      fontWeight: "700", 
                      marginBottom: "16px",
                      fontSize: "16px",
                      borderBottom: "3px solid #ef4444",
                      paddingBottom: "10px",
                      background: "linear-gradient(135deg, #ef4444, #dc2626)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}>
                      บริการออกแบบ พัฒนาเว็บไซต์และไอที
                    </h6>
                    <ul style={{ 
                      listStyle: "none", 
                      padding: 0, 
                      margin: 0,
                      fontSize: "14px",
                      lineHeight: "1.6"
                    }}>
                      {[
                        'บริการดูแลระบบคอมพิวเตอร์และไอที (IT Maintenance Service)',
                        'บริการจัดจำหน่ายซอฟต์แวร์และอุปกรณ์คอมพิวเตอร์ (IT Merchandise)',
                        'บริการด้านเว็บไซต์',
                        'บริการวางระบบ Work From Home',
                        'บริการจำหน่ายระบบป้องกันข้อมูลรั่วไหล Data Loss Prevention (DLP)'
                      ].map((item, index) => (
                        <li key={index} style={{ 
                          marginBottom: "10px", 
                          color: "#64748b", 
                          cursor: "pointer", 
                          padding: "8px 12px", 
                          borderRadius: "8px",
                          transition: "all 0.2s ease",
                          borderLeft: "3px solid transparent"
                        }}
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = "#fef2f2";
                              e.target.style.borderLeftColor = "#ef4444";
                              e.target.style.color = "#1e293b";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor = "transparent";
                              e.target.style.borderLeftColor = "transparent";
                              e.target.style.color = "#64748b";
                            }}>
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="divider" style={{
        backgroundColor: isScrolled ? " rgb(115, 118, 122)" : "rgba(0, 0, 0, 0.5)",
        transition: "all 0.3s ease"
      }} />
      <a href="#contract" style={{ textDecoration: "none" }}>
        <span 
          className="nav-item"
          style={{
            color: isScrolled ? " #1e293b" : "rgb(0, 0, 0)",
            transition: "all 0.3s ease",
          }}
        >
          ติดต่อเรา
        </span>
      </a>
      <div />
    </div>
  </div>
  );
};

export default NavbarMain;
