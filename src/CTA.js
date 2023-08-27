import React from 'react';

function CTA({ text, onClick, className = "cta-btn" }) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}
export default CTA;
