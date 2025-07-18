import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { FaGavel } from "react-icons/fa";
import { motion } from "framer-motion";
import { margin } from "@mui/system";

function TransferPricing() {
  return (
    <div
      style={{
        background: "#f8f9fa",
        minHeight: "100vh",
        paddingTop: 0,
        paddingBottom: 48,
        fontFamily: "Prompt, sans-serif",
      }}
    >
      <section
        className="hero-section"
        style={{
          fontFamily: "Prompt, sans-serif",
          background: `url(https://www.rayonglaw.com/wp-content/uploads/2024/09/%E0%B8%97%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%B0%E0%B8%A2%E0%B8%AD%E0%B8%87-1.webp) no-repeat center center/cover`,
        }}
      >
        <div className="hero-content">
          <h1
            className="hero-title"
            style={{ marginTop: "80px", color: "rgba(255, 75, 75, 1)" }}
          >
            Transfer Pricing
          </h1>
          <p
            className="hero-subtitle"
            style={{ color: "rgba(255, 255, 255, 1)" }}
          >
            บริษัทหรือห้างหุ้นส่วนนิติบุคคลที่เข้าลักษณะความสัมพันธ์ตามที่กฎหมายกำหนด
            จะต้องเตรียมความพร้อมเพื่อทำความเข้าใจและดำเนินการให้สอดคล้องกับหลักเกณฑ์ที่กฎหมายกำหนด
          </p>
        </div>
      </section>
      {/* Breadcrumbs Section - Red Tone */}
      <Container fluid="md" style={{ marginTop: 0 }}>
        <Row className="justify-content-center">
          <Col xs={120} md={110} lg={100} xl={90} xxl={80}>
            <motion.nav
              aria-label="breadcrumb"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{ marginBottom: 0 }}
            >
              <ol
                className="breadcrumb"
                style={{
                  background: "rgba(255, 255, 255, 1)",
                  borderRadius: 14,
                  padding: "12px 24px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  gap: 8,
                  fontSize: 16,
                  fontWeight: 500,
                  marginBottom: 0,
                  alignItems: "center",
                  flexWrap: "wrap",
                  border: "1px solid #ffffffff",
                }}
              >
                <motion.li
                  className="breadcrumb-item"
                  whileHover={{ scale: 1.08, color: "#848484ff" }}
                  style={{ transition: "0.2s", marginRight: 4 }}
                >
                  <a
                    href="/"
                    style={{
                      color: "#848484ff",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    <span style={{ marginRight: 4, fontSize: 18 }}></span>
                    หน้าแรก
                  </a>
                </motion.li>
                <span
                  style={{ color: "#848484ff", fontSize: 20, margin: "0 4px" }}
                >
                  ›
                </span>
                <motion.li
                  className="breadcrumb-item"
                  whileHover={{ scale: 1.08, color: "#848484ff" }}
                  style={{ transition: "0.2s", marginRight: 4 }}
                >
                  <a
                    href="/services"
                    style={{
                      color: "#848484ff",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    <span style={{ marginRight: 4, fontSize: 20 }}></span>
                    บริการของเรา
                  </a>
                </motion.li>
                <span
                  style={{ color: "#ffb3b3", fontSize: 18, margin: "0 4px" }}
                >
                  ›
                </span>
                <motion.li
                  className="breadcrumb-item"
                  whileHover={{ scale: 1.08, color: "#848484ff" }}
                  style={{ transition: "0.2s", marginRight: 4 }}
                >
                  <a
                    href="/services"
                    style={{
                      color: "#ff7070ff",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    <span style={{ marginRight: 4, fontSize: 20 }}></span>
                    Transfer Pricing
                  </a>
                </motion.li>
              </ol>
            </motion.nav>
          </Col>
        </Row>
      </Container>
      <Container fluid="md">
        <Row className="justify-content-center" style={{ marginTop: 24 }}>
          <Col xs={120} md={110} lg={100} xl={90} xxl={80}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Card
                className="border-0 shadow-sm"
                style={{ borderRadius: 18, background: "#fff" }}
              >
                <Card.Body style={{ padding: 40, marginBottom: 32 }}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="d-flex align-items-center mb-3"
                  >
                    <FaGavel className="me-2" color=" #db3b3bff" size={28} />
                    <h2
                      className="fw-bold mb-0"
                      style={{ fontSize: 28, letterSpacing: 0.5 }}
                    >
                      Transfer Pricing
                    </h2>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mb-4"
                    style={{
                      background: "#f3f4f6",
                      borderRadius: 12,
                      padding: 20,
                      marginBottom: 32,
                    }}
                  >
                    <blockquote
                      className="mb-0"
                      style={{
                        fontSize: 16,
                        color: "#555",
                        fontStyle: "italic",
                        borderLeft: "4px solid #db3b3bff",
                        paddingLeft: 16,
                      }}
                    >
                      "สืบเนื่องจากที่มีบทบัญญัติแห่งกฎหมายตามประมวลรัษฎากรและแนวทางปฏิบัติของกรมสรรพากรเกี่ยวกับกำหนดราคาโอนระหว่างบริษัท"
                    </blockquote>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="mb-4"
                    style={{ fontSize: 17, color: "#222", lineHeight: 1.7 }}
                  >
                    สืบเนื่องจากที่มีบทบัญญัติแห่งกฎหมายตามประมวลรัษฎากรและแนวทางปฏิบัติของกรมสรรพากรเกี่ยวกับกำหนดราคาโอนระหว่างบริษัทหรือห้างหุ้นส่วนนิติบุคคลที่มีความสัมพันธ์กัน
                    (Transfer Pricing)
                    โดยกำหนดให้บริษัทหรือห้างหุ้นส่วนนิติบุคคลที่มีความสัมพันธ์กัน
                    (บริษัทในเครือเดียวกัน)
                    จัดทำรายงานเพื่อเปิดเผยข้อมูลเกี่ยวกับบริษัทหรือห้างหุ้นส่วนนิติบุคคลที่มีความสัมพันธ์กันและมูลค่ารวมของธุรกรรมระหว่างกันในแต่ละรอบระยะเวลาบัญชี
                    ซึ่งใช้บังคับสำหรับรอบระยะเวลาบัญชีปี 2562 เป็นต้นไป
                    ด้วยเหตุนี้
                    บริษัทหรือห้างหุ้นส่วนนิติบุคคลที่เข้าลักษณะความสัมพันธ์ตามที่กฎหมายกำหนด
                    จะต้องเตรียมความพร้อม
                    เพื่อทำความเข้าใจและดำเนินการให้สอดคล้องกับหลักเกณฑ์ที่กฎหมายกำหนด
                  </motion.p>
                  <hr className="my-4" style={{ opacity: 0.15 }} />
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="mb-4"
                  >
                    <h4
                      className="fw-semibold mb-3 d-flex align-items-center"
                      style={{ color: "#db3b3bff", fontSize: 20 }}
                    >
                      <span className="me-2" role="img" aria-label="service">
                        📝
                      </span>{" "}
                      รูปแบบการให้บริการ
                    </h4>
                    <ListGroup variant="flush">
                      <ListGroup.Item
                        style={{
                          background: "none",
                          border: 0,
                          paddingLeft: 0,
                          color: "#444",
                        }}
                      >
                        1. ศึกษาข้อเท็จจริง ตรวจทาน
                        และวิเคราะห์ข้อมูลของบริษัทในกลุ่มของบริษัทท่านที่มีความสัมพันธ์ระหว่างกันและข้อกำหนดของธุรกรรมระหว่างกัน
                        ตามกฎหมายมาตรการป้องกันการกำหนดราคาโอนระหว่างบริษัทที่มีความสัมพันธ์กัน
                      </ListGroup.Item>
                      <ListGroup.Item
                        style={{
                          background: "none",
                          border: 0,
                          paddingLeft: 0,
                          color: "#444",
                        }}
                      >
                        2.
                        จัดทำแบบรายงานประจำปีสำหรับบริษัทหรือห้างหุ้นส่วนนิติบุคคลที่มีความสัมพันธ์กันตามมาตรา
                        71 ทวิ แห่งประมวลรัษฎากร (Disclosure Form) ของบริษัทท่าน
                        พร้อมยื่นแบบต่อกรมสรรพากร
                      </ListGroup.Item>
                      <ListGroup.Item
                        style={{
                          background: "none",
                          border: 0,
                          paddingLeft: 0,
                          color: "#444",
                        }}
                      >
                        3.
                        จัดทำเอกสารหรือหลักฐานแสดงข้อมูลที่จำเป็นสำหรับการวิเคราะห์ข้อกำหนดของธุรกรรมระหว่างกันของบริษัทท่าน
                        (Local File)
                      </ListGroup.Item>
                      <ListGroup.Item
                        style={{
                          background: "none",
                          border: 0,
                          paddingLeft: 0,
                          color: "#444",
                        }}
                      >
                        4. ตรวจทาน Disclosure Form และ / หรือ Local File
                        ที่บริษัทท่านจัดทำด้วยตนเอง
                        พร้อมให้ความเห็นหรือข้อเสนอแนะเพิ่มเติม
                        เพื่อให้สอดคล้องกับกฎหมายที่เกี่ยวข้องกำหนด
                      </ListGroup.Item>
                      <ListGroup.Item
                        style={{
                          background: "none",
                          border: 0,
                          paddingLeft: 0,
                          color: "#444",
                        }}
                      >
                        5. เข้าร่วมประชุมเพื่อนำเสนอและให้ความเห็น คำแนะนำ
                        ตามความเหมาะสม (ถ้ามี)
                      </ListGroup.Item>
                      <ListGroup.Item
                        style={{
                          background: "none",
                          border: 0,
                          paddingLeft: 0,
                          color: "#444",
                        }}
                      >
                        6. ให้คำปรึกษาแนะนำเกี่ยวกับกฎหมาย
                        รวมทั้งแนวทางในการดำเนินงานในส่วนที่เกี่ยวข้อง
                      </ListGroup.Item>
                    </ListGroup>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0 }}
                    className="mb-4"
                  >
                    <h4
                      className="fw-semibold mb-3 d-flex align-items-center"
                      style={{ color: "#db3b3bff", fontSize: 20 }}
                    >
                      <span className="me-2" role="img" aria-label="price">
                        💸
                      </span>{" "}
                      อัตราค่าบริการ
                    </h4>
                    <ListGroup variant="flush">
                      <ListGroup.Item
                        style={{
                          background: "none",
                          border: 0,
                          paddingLeft: 0,
                          color: "#444",
                          marginBottom: 24,
                        }}
                      >
                        <span className="fw-bold">
                          ราคาขึ้นอยู่กับลักษณะโครงสร้างของธุรกิจ
                          และรายการธุรกรรม
                        </span>
                      </ListGroup.Item>
                    </ListGroup>

                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.7 }}
                      className="mb-4"
                    >
                      <h4
                        className="fw-semibold mb-3 d-flex align-items-center"
                        style={{ color: "#db3b3bff", fontSize: 20 }}
                      >
                        <span className="me-2" role="img" aria-label="service">
                          📦
                        </span>{" "}
                        สิ่งที่จะได้รับ
                      </h4>
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          style={{
                            background: "none",
                            border: 0,
                            paddingLeft: 0,
                            color: "#444",
                          }}
                        >
                          1.
                          แบบรายงานประจำปีสำหรับบริษัทหรือห้างหุ้นส่วนนิติบุคคลที่มีความสัมพันธ์กันตามมาตรา
                          71 ทวิ แห่งประมวลรัษฎากร (Disclosure Form)
                        </ListGroup.Item>
                        <ListGroup.Item
                          style={{
                            background: "none",
                            border: 0,
                            paddingLeft: 0,
                            color: "#444",
                          }}
                        >
                          2.
                          เอกสารหรือหลักฐานแสดงข้อมูลที่จำเป็นสำหรับการวิเคราะห์ข้อกำหนดของธุรกรรมระหว่างกันของบริษัทท่าน
                          (Local File)
                        </ListGroup.Item>
                        <ListGroup.Item
                          style={{
                            background: "none",
                            border: 0,
                            paddingLeft: 0,
                            color: "#444",
                          }}
                        >
                          3. รายงานผลการตรวจทาน Disclosure Form และ / หรือ Local
                          File
                        </ListGroup.Item>
                      </ListGroup>
                      {/* ตารางข้อมูลบริการ */}
                      <div style={{ margin: "32px 0" }}>
                        <Card
                          style={{
                            borderRadius: 8,
                            border: " 1px solid #eee",
                            overflowX: "auto",
                            background:
                              "linear-gradient(135deg, #fff7f7 0%, #ffeaea 100%)",
                          }}
                        >
                          <Card.Body style={{ padding: 0 }}>
                            <table
                              className="table"
                              style={{
                                marginBottom: 0,
                                fontSize: 17,
                                borderRadius: 8,
                                overflow: "hidden",
                                minWidth: 320,
                              }}
                            >
                              <thead>
                                <tr
                                  style={{
                                    background:
                                      "linear-gradient(90deg, #ffeaea 0%, #ffd6d6 100%)",
                                  }}
                                >
                                  <th
                                    style={{
                                      width: "30%",
                                      textAlign: "center",
                                      verticalAlign: "middle",
                                      fontWeight: 700,
                                      color: "#db3b3b",
                                      fontSize: 19,
                                      padding: "18px 8px",
                                      borderTopLeftRadius: 20,
                                    }}
                                  >
                                    <span role="img" aria-label="target">
                                      🎯
                                    </span>{" "}
                                    <span style={{ marginLeft: 6 }}>
                                      บริการนี้เหมาะสำหรับ
                                    </span>
                                  </th>
                                  <th
                                    style={{
                                      width: "35%",
                                      textAlign: "center",
                                      verticalAlign: "middle",
                                      fontWeight: 700,
                                      color: "#db3b3b",
                                      fontSize: 19,
                                      padding: "18px 8px",
                                    }}
                                  >
                                    <span role="img" aria-label="benefit">
                                      🌟
                                    </span>{" "}
                                    <span style={{ marginLeft: 6 }}>ข้อดี</span>
                                  </th>
                                  <th
                                    style={{
                                      width: "35%",
                                      textAlign: "center",
                                      verticalAlign: "middle",
                                      fontWeight: 700,
                                      color: "#db3b3b",
                                      fontSize: 19,
                                      padding: "18px 8px",
                                      borderTopRightRadius: 20,
                                    }}
                                  >
                                    <span role="img" aria-label="prepare">
                                      📝
                                    </span>{" "}
                                    <span style={{ marginLeft: 6 }}>
                                      สิ่งที่ลูกค้าต้องเตรียม
                                    </span>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td
                                    style={{
                                      verticalAlign: "top",
                                      background: "#fff",
                                      borderBottom: "none",
                                      borderLeft: "none",
                                      borderRight: "none",
                                      borderRadius: 0,
                                      padding: "20px 16px",
                                      fontSize: 16,
                                      color: "#444",
                                    }}
                                  >
                                    <ul
                                      style={{
                                        paddingLeft: 18,
                                        marginBottom: 0,
                                      }}
                                    >
                                      <li>
                                        นิติบุคคลที่ประกอบธุรกิจในลักษณะของบริษัทในเครือ
                                        ไม่ว่าจะเป็นบริษัทแม่ หรือเป็นบริษัทลูก
                                      </li>
                                      <li>
                                        นิติบุคคลที่มีรายได้จากการประกอบกิจการหรือเนื่องจากการประกอบกิจการ
                                        200 ล้านบาทขึ้นไป
                                      </li>
                                    </ul>
                                  </td>
                                  <td
                                    style={{
                                      verticalAlign: "top",
                                      background: "#fff",
                                      borderBottom: "none",
                                      borderLeft: "none",
                                      borderRight: "none",
                                      borderRadius: 0,
                                      padding: "20px 16px",
                                      fontSize: 16,
                                      color: "#444",
                                    }}
                                  >
                                    <ul
                                      style={{
                                        paddingLeft: 18,
                                        marginBottom: 0,
                                      }}
                                    >
                                      <li>
                                        จัดเตรียม Disclosure Form ได้ถูกต้อง
                                      </li>
                                      <li>
                                        จัดเตรียม Local File
                                        ให้สอดคล้องกับที่กฎหมายกำหนด
                                      </li>
                                      <li>
                                        แบ่งเบาหน้าที่งานของฝ่ายบัญชีการเงิน
                                        หรือพนักงานส่วนที่เกี่ยวข้องของบริษัทท่าน
                                        เนื่องจากการจัดเตรียมเอกสารดังกล่าว
                                        ต้องศึกษาทำความเข้าใจกฎหมาย
                                        ตลอดทั้งวิเคราะห์ข้อมูลต่างๆ
                                        ซึ่งอาจกระทบต่อหน้าที่งานประจำของตำแหน่งนั้นๆ
                                      </li>
                                    </ul>
                                  </td>
                                  <td
                                    style={{
                                      verticalAlign: "top",
                                      background: "#fff",
                                      borderBottom: "none",
                                      borderLeft: "none",
                                      borderRight: "none",
                                      borderRadius: 0,
                                      padding: "20px 16px",
                                      fontSize: 16,
                                      color: "#444",
                                    }}
                                  >
                                    <ul
                                      style={{
                                        paddingLeft: 18,
                                        marginBottom: 0,
                                      }}
                                    >
                                      <li>
                                        เอกสารแสดงโครงสร้างการถือหุ้นและความสัมพันธ์ของกิจการในกลุ่มเดียวกัน
                                      </li>
                                      <li>
                                        ลักษณะการประกอบธุรกิจของบริษัท
                                        กับบริษัทในเครือ
                                      </li>
                                      <li>
                                        รายการธุรกรรมระหว่างกันที่เกิดขึ้นในแต่ละรอบระยะเวลาบัญชี
                                      </li>
                                      <li>corporate profile (ถ้ามี)</li>
                                    </ul>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </Card.Body>
                        </Card>
                      </div>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0 }}
                  >
                    <hr
                      style={{
                        border: "none",
                        borderTop: "2px solid #e0e0e0",
                        margin: "32px 0 24px 0",
                        marginBottom: "32px",
                        opacity: 0.7,
                      }}
                    />
                    <h4
                      className="fw-semibold mb-3 d-flex align-items-center"
                      style={{ color: "#db3b3bff", fontSize: 20 }}
                    >
                      <span className="me-2" role="img" aria-label="related">
                        🔗
                      </span>{" "}
                      บริการอื่นๆ
                    </h4>
                    <Row xs={1} md={3} className="g-3">
                      <Col>
                        <Card
                          className="h-100 shadow-sm"
                          style={{
                            borderRadius: 14,
                            background: "#f3f4f6",
                            border: "none",
                          }}
                        >
                          <Card.Body>
                            <Card.Title
                              style={{
                                color: "#db3b3bff",
                                fontWeight: 600,
                                fontSize: 18,
                              }}
                            >
                              งานกฎหมายภาษีอากร
                            </Card.Title>
                            <Card.Text style={{ color: "#444", fontSize: 15 }}>
                              ให้คำปรึกษาและดำเนินการเกี่ยวกับกฎหมายภาษีอากรทุกประเภท
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card
                          className="h-100 shadow-sm"
                          style={{
                            borderRadius: 14,
                            background: "#f3f4f6",
                            border: "none",
                          }}
                        >
                          <Card.Body>
                            <Card.Title
                              style={{
                                color: "#db3b3bff",
                                fontWeight: 600,
                                fontSize: 18,
                              }}
                            >
                              งานอรรถคดีและบังคับคดี
                            </Card.Title>
                            <Card.Text style={{ color: "#444", fontSize: 15 }}>
                              รับดำเนินคดีและบังคับคดีในทุกขั้นตอนอย่างมืออาชีพ
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                        <Card
                          className="h-100 shadow-sm"
                          style={{
                            borderRadius: 14,
                            background: "#f3f4f6",
                            border: "none",
                          }}
                        >
                          <Card.Body>
                            <Card.Title
                              style={{
                                color: "#db3b3bff",
                                fontWeight: 600,
                                fontSize: 18,
                              }}
                            >
                              งานกฎหมายอื่น ๆ ที่เกี่ยวกับการค้าและบุคคล
                            </Card.Title>
                            <Card.Text style={{ color: "#444", fontSize: 15 }}>
                              ครอบคลุมงานกฎหมายที่เกี่ยวข้องกับการค้าและบุคคลทุกประเภท
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </motion.div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TransferPricing;
