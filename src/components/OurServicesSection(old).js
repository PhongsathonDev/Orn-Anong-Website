import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: "⚖️",
    title: "บริการด้านกฎหมาย",
    desc: "คำปรึกษาทางกฎหมายและดำเนินคดี",
    details: [
      "งานกฎหมายธุรกิจ",
      "งานกฎหมายภาษีอากร",
      "งานอรรถคดีและบังคับคดี",
      "งาน Transfer Pricing",
    ],
    color: "#3b82f6",
    bgGradient: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
    shadowColor: "rgba(59, 130, 246, 0.25)",
    url: "/services/legal",
  },
  {
    icon: "📊",
    title: "บริการจัดทำบัญชีและเงินเดือน",
    desc: "บริการจัดทำบัญชีครบวงจร",
    details: [
      "บริการจัดทำบัญชี",
      "บริการจัดทำเงินเดือน",
      "จัดทำงบการเงิน",
      "ให้คำปรึกษาทางบัญชี",
    ],
    color: "#10b981",
    bgGradient: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",
    shadowColor: "rgba(16, 185, 129, 0.25)",
    url: "/services/accounting-payroll",
  },
  {
    icon: "📑",
    title: "บริการตรวจสอบบัญชี",
    desc: "ตรวจสอบโดยผู้สอบบัญชีรับอนุญาต",
    details: [
      "ตรวจสอบงบการเงิน",
      "สอบทานงบการเงิน",
      "ตรวจสอบการซื้อกิจการ",
      "ตรวจสอบพิเศษ",
    ],
    color: "#8b5cf6",
    bgGradient: "linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)",
    shadowColor: "rgba(139, 92, 246, 0.25)",
    url: "/services/audit",
  },
  {
    icon: "🔍",
    title: "บริการตรวจสอบภายใน",
    desc: "ประเมินระบบควบคุมและความเสี่ยง",
    details: [
      "งานตรวจสอบภายใน (IA)",
      "ประเมินระบบควบคุมภายใน",
      "รายงาน ESG",
      "ตรวจสอบระบบ IT",
    ],
    color: "#f59e0b",
    bgGradient: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
    shadowColor: "rgba(245, 158, 11, 0.25)",
    url: "/services/internal-audit",
  },
  {
    icon: "💻",
    title: "บริการออกแบบ พัฒนาเว็บไซต์และไอที",
    desc: "พัฒนาและดูแลระบบ IT ครบวงจร",
    details: [
      "ดูแลระบบคอมพิวเตอร์",
      "จำหน่ายซอฟต์แวร์",
      "บริการด้านเว็บไซต์",
      "วางระบบ Work From Home",
    ],
    color: "#ef4444",
    bgGradient: "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)",
    shadowColor: "rgba(239, 68, 68, 0.25)",
    url: "/services/web-it",
  },
];

const OurServicesSection = () => (
  <div
    id="our-services"
    style={{
      paddingTop: "140px",
      paddingBottom: "120px",
      background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Background decorative elements */}
    <div
      style={{
        position: "absolute",
        top: "15%",
        left: "-8%",
        width: "400px",
        height: "400px",
        background:
          "linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(16, 185, 129, 0.08))",
        borderRadius: "50%",
        filter: "blur(60px)",
      }}
    ></div>
    <div
      style={{
        position: "absolute",
        bottom: "10%",
        right: "-10%",
        width: "350px",
        height: "350px",
        background:
          "linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(245, 158, 11, 0.08))",
        borderRadius: "50%",
        filter: "blur(50px)",
      }}
    ></div>

    <div className="container">
      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          style={{
            fontSize: "2.8rem",
            fontWeight: "800",
            fontFamily: "Prompt, sans-serif",
            background:
              "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #10b981 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "0.8rem",
          }}
        >
          บริการของเรา
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          style={{
            height: "3px",
            background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #10b981)",
            margin: "0 auto 1.5rem auto",
            borderRadius: "2px",
          }}
        ></motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            fontSize: "1.1rem",
            color: "#475569",
            fontFamily: "Prompt, sans-serif",
            maxWidth: "550px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          เราให้บริการครบวงจรทางด้านบัญชีและการเงิน ด้วยทีมงานมืออาชีพ
          พร้อมมาตรฐานสากลและเทคโนโลยีล้ำสมัย
        </motion.p>
      </motion.div>

      {/* Services Grid */}
      <div className="row g-4 justify-content-center">
        {services.map((item, i) => (
          <motion.div
            className="col-lg-4 col-md-6 mb-4"
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="h-100 position-relative"
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                padding: "1.5rem 1.4rem",
                borderRadius: "18px",
                boxShadow: `0 8px 25px ${item.shadowColor}`,
                border: `2px solid ${item.color}20`,
                backdropFilter: "blur(15px)",
                overflow: "hidden",
                cursor: "pointer",
                minHeight: "280px",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 15px 40px ${item.shadowColor}`;
                e.currentTarget.style.borderColor = `${item.color}40`;
                e.currentTarget.style.background = "rgba(255, 255, 255, 1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 8px 25px ${item.shadowColor}`;
                e.currentTarget.style.borderColor = `${item.color}20`;
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.95)";
              }}
            >
              {/* Background Pattern */}
              <div
                style={{
                  position: "absolute",
                  top: "-50px",
                  right: "-50px",
                  width: "120px",
                  height: "120px",
                  background: `linear-gradient(135deg, ${item.color}10, ${item.color}05)`,
                  borderRadius: "50%",
                  zIndex: 0,
                }}
              ></div>

              <div
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  left: "-30px",
                  width: "80px",
                  height: "80px",
                  background: `linear-gradient(45deg, ${item.color}08, transparent)`,
                  borderRadius: "50%",
                  zIndex: 0,
                }}
              ></div>

              {/* Content */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: "60px",
                    height: "60px",
                    background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                    boxShadow: `0 6px 16px ${item.color}40`,
                    fontSize: "1.6rem",
                  }}
                >
                  <span style={{ color: "white" }}>{item.icon}</span>
                </motion.div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    fontFamily: "Prompt, sans-serif",
                    color: item.color,
                    marginBottom: "0.6rem",
                    lineHeight: "1.2",
                    height: "auto",
                    overflow: "hidden",
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.9rem",
                    fontFamily: "Prompt, sans-serif",
                    color: "#475569",
                    marginBottom: "1rem",
                    fontWeight: "500",
                    lineHeight: "1.4",
                  }}
                >
                  {item.desc}
                </p>

                {/* Details */}
                <div style={{ marginTop: "auto" }}>
                  {item.details.slice(0, 2).map((detail, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.15 + idx * 0.1,
                      }}
                      viewport={{ once: true }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "0.4rem",
                        minHeight: "18px",
                        paddingBottom: "1px",
                      }}
                    >
                      <div
                        style={{
                          width: "6px",
                          height: "6px",
                          background: `linear-gradient(45deg, ${item.color}, ${item.color}aa)`,
                          borderRadius: "50%",
                          marginRight: "0.8rem",
                          flexShrink: 0,
                        }}
                      ></div>
                      <span
                        style={{
                          fontSize: "0.85rem",
                          fontFamily: "Prompt, sans-serif",
                          color: "#64748b",
                          lineHeight: "1.3",
                        }}
                      >
                        {detail}
                      </span>
                    </motion.div>
                  ))}

                  {/* Last Detail with Button */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
                    viewport={{ once: true }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "0.4rem",
                      minHeight: "18px",
                      paddingBottom: "1px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flex: 1,
                      }}
                    >
                      <div
                        style={{
                          width: "6px",
                          height: "6px",
                          background: `linear-gradient(45deg, ${item.color}, ${item.color}aa)`,
                          borderRadius: "50%",
                          marginRight: "0.8rem",
                          flexShrink: 0,
                        }}
                      ></div>
                      <span
                        style={{
                          fontSize: "0.85rem",
                          fontFamily: "Prompt, sans-serif",
                          color: "#64748b",
                          lineHeight: "1.3",
                        }}
                      >
                        {item.details[2]}
                      </span>
                    </div>

                    {/* More Info Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.15 + 0.3 }}
                      viewport={{ once: true }}
                      style={{ marginLeft: "0.8rem" }}
                    >
                      <a
                        href={
                          item.url ||
                          `/services/${item.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`
                        }
                        style={{ textDecoration: "none" }}
                      >
                        <motion.button
                          whileHover={{ scale: 1.03, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                          style={{
                            background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
                            border: "none",
                            color: "white",
                            padding: "6px 12px",
                            borderRadius: "16px",
                            fontSize: "0.8rem",
                            fontFamily: "Prompt, sans-serif",
                            fontWeight: "600",
                            boxShadow: `0 3px 8px ${item.color}25`,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            transition: "all 0.3s ease",
                            width: "fit-content",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = `0 4px 12px ${item.color}35`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = `0 3px 8px ${item.color}25`;
                          }}
                        >
                          <span>ดูเพิ่มเติม</span>
                          <motion.span
                            style={{ fontSize: "0.8rem" }}
                            animate={{ x: [0, 3, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            →
                          </motion.span>
                        </motion.button>
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          padding: "2rem 1.5rem",
          borderRadius: "16px",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          maxWidth: "800px",
          margin: "2rem auto 0 auto",
        }}
      >
        <h3
          style={{
            fontSize: "1.6rem",
            fontFamily: "Prompt, sans-serif",
            color: "#1e293b",
            marginBottom: "0.8rem",
            fontWeight: "700",
          }}
        >
          พร้อมให้บริการคุณแล้ว
        </h3>
        <p
          style={{
            fontSize: "1rem",
            fontFamily: "Prompt, sans-serif",
            color: "#475569",
            marginBottom: "1.5rem",
            lineHeight: "1.6",
          }}
        >
          สนใจบริการของเราหรือต้องการคำปรึกษาเพิ่มเติม?
          ติดต่อเราเพื่อรับคำปรึกษาฟรีและเริ่มต้นความร่วมมือที่ดีที่สุด
        </p>
        <a href="#contract">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{
              background:
                "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #10b981 100%)",
              border: "none",
              color: "white",
              padding: "15px 40px",
              borderRadius: "30px",
              fontSize: "1.1rem",
              fontFamily: "Prompt, sans-serif",
              fontWeight: "600",
              boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
              cursor: "pointer",
            }}
          >
            ติดต่อเราเลย →
          </motion.button>
        </a>
      </motion.div>
    </div>
  </div>
);

export default OurServicesSection;
