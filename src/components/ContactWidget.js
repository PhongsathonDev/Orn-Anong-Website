import React, { useState } from "react";
import { FaFacebookSquare, FaLine, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function ContactWidget() {
  const [showContactWidget, setShowContactWidget] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
      }}
    >
      {/* Contact Options */}
      {showContactWidget && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          style={{
            marginBottom: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {/* Facebook */}
          <motion.a
            href="https://www.facebook.com/thailandtaxlaw/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: " #1877f2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(24, 119, 242, 0.3)",
              fontSize: "20px",
            }}
          >
            <FaFacebookSquare />
          </motion.a>

          {/* Line */}
          <motion.a
            href="https://line.me/R/ti/p/@443namoj"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: " #00c300",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(0, 195, 0, 0.3)",
              fontSize: "20px",
            }}
          >
            <FaLine />
          </motion.a>

          {/* Gmail */}
          <motion.a
            href="mailto:info@ornanongaccounting.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "#ea4335",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(234, 67, 53, 0.3)",
              fontSize: "20px",
            }}
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>
      )}

      {/* Main Contact Button */}
      <motion.button
        onClick={() => setShowContactWidget(!showContactWidget)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg, #667eea 0%,rgb(94, 75, 162) 100%)",
          border: "none",
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
          boxShadow: "0 6px 20px rgba(102, 126, 234, 0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.1)";
          e.target.style.boxShadow = "0 8px 25px rgba(102, 126, 234, 0.6)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.4)";
        }}
      >
        {showContactWidget ? "✕" : "💭"}
      </motion.button>
    </div>
  );
}

export default ContactWidget;
