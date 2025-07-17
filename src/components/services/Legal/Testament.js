import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { FaGavel } from "react-icons/fa";
import { motion } from "framer-motion";
import { margin } from "@mui/system";

function Testament() {
  return (
    <div
      style={{
        background: "#f8f9fa",
        minHeight: "100vh",
        paddingTop: 0,
        paddingBottom: 48,
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
            {" "}
            จัดทำพินัยกรรม
          </h1>
          <p
            className="hero-subtitle"
            style={{ color: "rgba(255, 255, 255, 1)" }}
          >
            ให้คำปรึกษาและจัดทำพินัยกรรมเพื่อการจัดการทรัพย์สินหลังความตายอย่างมีประสิทธิภาพ
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
                    จัดทำพินัยกรรม
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
                      จัดทำพินัยกรรม
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
                      "การจัดทำพินัยกรรมเป็นเครื่องมือสำคัญในการวางแผนทรัพย์สินหลังความตาย
                      เพื่อให้แน่ใจว่าทรัพย์สินของคุณจะถูกจัดการตามความประสงค์ของคุณอย่างถูกต้องและมีประสิทธิภาพ"
                    </blockquote>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="mb-4"
                    style={{ fontSize: 17, color: "#222", lineHeight: 1.7 }}
                  >
                    การจัดทำพินัยกรรมเป็นกระบวนการที่สำคัญในการวางแผนทรัพย์สินหลังความตาย
                    เพื่อให้แน่ใจว่าทรัพย์สินของคุณจะถูกจัดการตามความประสงค์ของคุณอย่างถูกต้องและมีประสิทธิภาพ
                    ทีมงานของเรามีความเชี่ยวชาญในการให้คำปรึกษาและจัดทำพินัยกรรมที่เหมาะสมกับความต้องการและสถานการณ์ของแต่ละบุคคล
                    เราให้บริการที่ครอบคลุมตั้งแต่การให้คำปรึกษาเบื้องต้นเกี่ยวกับกฎหมายพินัยกรรม
                    การจัดทำพินัยกรรมที่ถูกต้องตามกฎหมาย
                    ไปจนถึงการให้คำแนะนำในการจัดการทรัพย์สินหลังความตาย
                    ทีมงานของเรามีประสบการณ์ในการจัดทำพินัยกรรมที่ซับซ้อนและมีความละเอียดอ่อน
                    เราเข้าใจถึงความสำคัญของการวางแผนทรัพย์สินและมุ่งมั่นที่จะให้บริการที่ดีที่สุดเพื่อให้คุณมั่นใจว่าทรัพย์สินของคุณจะถูกจัดการตามความประสงค์ของคุณอย่างถูกต้อง
                    และมีประสิทธิภาพ
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
                        1.
                        ดำเนินการตรวจสอบรวบรวมข้อเท็จจริงและเอกสารที่เกี่ยวข้อง
                      </ListGroup.Item>
                      <ListGroup.Item
                        style={{
                          background: "none",
                          border: 0,
                          paddingLeft: 0,
                          color: "#444",
                        }}
                      >
                        2. ดำเนินการไปพบท่านเพื่อเข้าร่วมประชุมและให้คำปรึกษา
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
                        ดำเนินการจัดทำพินัยกรรมและบันทึกข้อตกลงการถือครองและแบ่งทรัพย์สิน
                      </ListGroup.Item>
                      <ListGroup.Item
                        style={{
                          background: "none",
                          border: 0,
                          paddingLeft: 0,
                          color: "#444",
                        }}
                      >
                        4. ดำเนินการไปพบท่านเพื่อเข้าร่วมประชุมลงนามทำพินัยกรรม,
                        บันทึกข้อตกลง และร่วมลงนามเป็นพยาน
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
                        👤
                      </span>{" "}
                      บริการนี้เหมาะสำหรับ
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
                        <span>
                          1.
                          บุคคลธรรมดาที่มีทรัพย์สินและต้องการจัดสรรให้เป็นไปตามวัตถุประสงค์ของเจ้าของทรัพย์สิน
                        </span>
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
                        ✅
                      </span>{" "}
                      ข้อดี
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
                        <span>1. สะดวกและง่ายสำหรับการจัดการมรดก</span>
                      </ListGroup.Item>
                      <ListGroup.Item
                        style={{
                          background: "none",
                          border: 0,
                          paddingLeft: 0,
                          color: "#444",
                        }}
                      >
                        <span>2. ลดข้อขัดแย้งในครอบครัว</span>
                      </ListGroup.Item>
                      <ListGroup.Item
                        style={{
                          background: "none",
                          border: 0,
                          paddingLeft: 0,
                          color: "#444",
                        }}
                      >
                        <span>
                          3. สามารถระบุให้กับบุตรหรือภรรยานอกกฎหมายได้
                        </span>
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
                        📦
                      </span>{" "}
                      สิ่งที่ลูกค้าต้องเตรียม
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
                        <span>
                          1. รายละเอียดเกี่ยวกับทรัพย์สิน สินสมรส หนี้สิน
                        </span>
                      </ListGroup.Item>
                      <ListGroup.Item
                        style={{
                          background: "none",
                          border: 0,
                          paddingLeft: 0,
                          color: "#444",
                        }}
                      >
                        <span>
                          2. ข้อเท็จจริงที่เกิดขึ้นประกอบเอกสารหลักฐาน
                        </span>
                      </ListGroup.Item>
                      <ListGroup.Item
                        style={{
                          background: "none",
                          border: 0,
                          paddingLeft: 0,
                          color: "#444",
                        }}
                      >
                        <span>3. วัตถุประสงค์ที่แท้จริง</span>
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
                        }}
                      >
                        <span className="fw-bold">
                          ขึ้นอยู่กับการประมาณการชั่วโมงการทำงาน
                          โดยคิดจากชั่วโมงการทำงานจริงไม่รวมกับค่าใช้จ่ายเพื่อดำเนินการ
                        </span>
                      </ListGroup.Item>
                    </ListGroup>
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

export default Testament;
