


import React from "react";

function Certificate() {
  return (
    <div className="Certificate" style={{
      marginTop: '150px',
      marginBottom: '150px',
      minHeight: '70vh',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 40,
      background: '#fff',
      fontFamily: 'Prompt, sans-serif',
    }}>
      {/* Left Section */}
      <div style={{
        flex: '0 0 35%',
        maxWidth: '35%',
        minWidth: 320,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '0 24px',
        boxSizing: 'border-box',
      }}>
        <div style={{ height: 3, width: 48, background: '#f53f3fff', marginBottom: 24, borderRadius: 2 }} />
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
          <span style={{ fontSize: 38, fontWeight: 600, color: '#222', letterSpacing: -1 }}>In Numbers</span>
          <span style={{ marginLeft: 8, marginTop: 8 }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 2v6M14 20v6M2 14h6M20 14h6M5.636 5.636l4.243 4.243M18.121 18.121l4.243 4.243M5.636 22.364l4.243-4.243M18.121 9.879l4.243-4.243" stroke="#ff6f61" strokeWidth="2" strokeLinecap="round"/></svg>
          </span>
        </div>
        <div style={{ fontSize: 19, color: '#444', marginBottom: 40, lineHeight: 1.5, maxWidth: 400 }}>
          Since we opened our doors, to become now, a premier Bangkok accounting company with highly experienced, knowledgeable associates.
        </div>
        <a href="#quote" style={{ textDecoration: 'none' }}>
          <button style={{
            background: '#1a232c',
            color: '#fff',
            fontSize: 16,
            fontWeight: 500,
            border: 'none',
            borderRadius: 32,
            padding: '16px 38px',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}>
            GET A QUOTE
            <span style={{ display: 'inline-block', transform: 'translateY(1px)' }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M8 14h12M16 10l4 4-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </button>
        </a>
      </div>
      {/* Right Section */}
      <div style={{
        flex: '0 0 40%',
        maxWidth: '100%',
        minWidth: 0,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
      }}>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <img
            src="https://png.pngtree.com/png-clipart/20250513/original/pngtree-certificate-design-vector-png-image_20949637.png"
            alt="Associates"
            style={{
              width: '900px',
              maxWidth: 1280,
              height: '720px',
              borderRadius: 32,
              objectFit: 'cover',
              boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
            }}
          />
          {/* Associates Label */}
          <div style={{
            position: 'absolute',
            top: 24,
            right: 500,
            background: '#fff',
            color: '#222',
            fontSize: 22,
            fontWeight: 500,
            padding: '10px 32px',
            borderRadius: 24,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}>
            Associates
          </div>
          {/* Big Number */}
          <div style={{
            position: 'absolute',
            left: 24,
            bottom: 12,
            fontSize: 160,
            fontWeight: 700,
            color: 'rgba(255,255,255,0.85)',
            textShadow: '0 2px 16px rgba(0,0,0,0.18)',
            lineHeight: 1,
            pointerEvents: 'none',
            userSelect: 'none',
          }}>
            40
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
