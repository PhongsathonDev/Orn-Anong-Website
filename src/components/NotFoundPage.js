import React from "react";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/Home-page.css"; // ใช้ class .bg-animated ด้วย

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-animated"></div>

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh", position: "relative", zIndex: 1 }}
      >
        <motion.div
          className="text-center p-5 rounded-4 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            fontFamily: "Prompt, sans-serif",
            maxWidth: "600px",
          }}
        >
          <motion.h1
            className="mb-4"
            style={{ fontSize: "6rem", fontWeight: "bold", color: "#dc3545" }}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            404
          </motion.h1>
          <motion.h2
            className="mb-3"
            style={{ fontSize: "2rem", fontWeight: "500" }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            ไม่พบหน้าที่คุณค้นหา
          </motion.h2>
          <p style={{ fontSize: "1.2rem", color: "#555" }}>
            ลิงก์ที่คุณพยายามเข้าถึงอาจไม่ถูกต้องหรือถูกลบไปแล้ว
          </p>
          <Button
            variant="primary"
            size="lg"
            className="mt-4"
            style={{ fontFamily: "Prompt, sans-serif", fontSize: "1.2rem" }}
            onClick={() => navigate("/home")}
          >
            กลับหน้าหลัก
          </Button>
        </motion.div>
      </div>
    </>
  );
}

export default NotFoundPage;
