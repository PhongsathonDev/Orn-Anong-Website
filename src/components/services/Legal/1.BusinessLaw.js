import React from "react";
import { Container, Row, Col, Card, ListGroup, Badge } from "react-bootstrap";



function BusinessLaw() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-light position-relative py-5 mb-0" style={{background: 'linear-gradient(120deg, #f8fafc 60%, #e3e6ee 100%)'}}>
        <Container>
          <Row className="justify-content-center align-items-center text-center">
            <Col md={10} lg={8}>
              <h1 className="display-5 fw-bold text-primary mb-3" style={{letterSpacing: '-1px'}}>
                บริการงานกฎหมายธุรกิจ
              </h1>
              <p className="lead text-secondary mb-0">
                งานกฎหมายธุรกิจ ให้คำปรึกษากฎหมายทุกประเภท วางระบบนิติกรรมสัญญา และจัดทำนิติกรรมสัญญาเกี่ยวกับบุคคลและธุรกิจการค้าทุกประเภท<br />
                จัดทำเอกสารทางกฎหมายและดำเนินงานทางกฎหมายเกี่ยวกับธุรกิจการค้าให้แก่บุคคล นิติบุคคลและวิสาหกิจทุกประเภท
              </p>
            </Col>
          </Row>
        </Container>
        {/* Overlay shape */}
        <div style={{position: 'absolute', right: 0, top: 0, width: 180, height: 180, background: 'radial-gradient(circle at 80% 20%, #e3e6ee 60%, transparent 100%)', opacity: 0.7, zIndex: 1}} />
      </div>

      {/* Service Details Section */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="shadow-sm border-0 rounded-4">
              <Card.Body className="p-4 p-md-5">
                <h2 className="h4 fw-bold mb-4 text-primary">รูปแบบการให้บริการ</h2>
                <ListGroup as="ol" numbered className="mb-4 ps-3">
                  <ListGroup.Item as="li" className="border-0 ps-0">ให้บริการคำปรึกษาและแนะนำเป็นรายเรื่อง</ListGroup.Item>
                  <ListGroup.Item as="li" className="border-0 ps-0">ให้บริการคำปรึกษาและแนะนำเป็นรายปี</ListGroup.Item>
                  <ListGroup.Item as="li" className="border-0 ps-0">ดำเนินคดีจนกว่าคดีจะสิ้นสุด</ListGroup.Item>
                  <ListGroup.Item as="li" className="border-0 ps-0">บังคับคดีจนถึงที่สุด</ListGroup.Item>
                </ListGroup>

                <h2 className="h4 fw-bold mb-4 text-primary">อัตราค่าบริการ <Badge bg="info" className="ms-1">เบื้องต้น</Badge></h2>
                <ListGroup as="ol" numbered className="mb-4 ps-3">
                  <ListGroup.Item as="li" className="border-0 ps-0">
                    คิดค่าบริการตามอัตราชั่วโมงการทำงานมาตรฐานของนักวิชาชีพ ดังนี้
                    <ListGroup as="ul" className="mt-2 mb-2 ps-4">
                      <ListGroup.Item as="li" className="border-0 ps-0">– ระดับกรรมการบริหาร <span className="text-success">10,000 – 20,000 บาท</span></ListGroup.Item>
                      <ListGroup.Item as="li" className="border-0 ps-0">– ระดับผู้ช่วยหัวหน้าฝ่ายขึ้นไป <span className="text-success">8,000 – 10,000 บาท</span></ListGroup.Item>
                      <ListGroup.Item as="li" className="border-0 ps-0">– ระดับที่ปรึกษากฎหมาย <span className="text-success">5,000 – 7,500 บาท</span></ListGroup.Item>
                      <ListGroup.Item as="li" className="border-0 ps-0">– ระดับเจ้าหน้าที่สนับสนุนงานกฎหมาย <span className="text-success">3,500 – 4,500 บาท</span></ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" className="border-0 ps-0">คิดค่าบริการเป็นการเหมา ตามประเภทของงาน และลักษณะของงาน</ListGroup.Item>
                  <ListGroup.Item as="li" className="border-0 ps-0">คิดค่าบริการเป็นรายปี โดยจะตกลงกันก่อนล่วงหน้าว่าจะใช้บริการปีละชั่วโมงและเป็นเงินเท่าใด (ซึ่งจะเป็นอัตราที่ประหยัดกว่า ข้อ 1.)</ListGroup.Item>
                </ListGroup>

                <h2 className="h4 fw-bold mb-4 text-primary">บริการที่เกี่ยวข้อง</h2>
                <ListGroup as="ol" numbered className="ps-3">
                  <ListGroup.Item as="li" className="border-0 ps-0">งานกฎหมายภาษีอากร</ListGroup.Item>
                  <ListGroup.Item as="li" className="border-0 ps-0">งานอรรถคดีและบังคับคดี</ListGroup.Item>
                  <ListGroup.Item as="li" className="border-0 ps-0">งานกฎหมายอื่น ๆ ที่เกี่ยวกับการค้าและบุคคล</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BusinessLaw;
