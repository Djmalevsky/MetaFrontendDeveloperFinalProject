import React from 'react';

function CTA({ text, onClick, className = "cta-btn" }) {
  return (
    <button aria-label="Click Here to Reserve a Table!" className={className} onClick={onClick}>
      {text}
    </button>
  );
}
export default CTA;
