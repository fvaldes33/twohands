import React from 'react';

const Fab = ({ size = 50, h = 'start', v = 'start', onClick, children }) => {

  const getPosition = () => {
    const css = [];

    if (v === 'start') css.push(['top', ':', '16px', ';']);
    if (v === 'center') css.push(['top', ':', '50%', ';'], ['transform', ':', 'translate3d(0, -50%, 0)', ';']);
    if (v === 'end') css.push(['bottom', ':', '16px', ';']);

    if (h === 'start') css.push(['left', ':', '16px', ';']);
    if (h === 'center') css.push(['left', ':', '50%', ';'], ['transform', ':', 'translate3d(-50%, 0%, 0)', ';']);
    if (h === 'end') css.push(['right', ':', '16px', ';']);

    return css.map(c => c.join('')).join('\n');
  }

  return (
    <>
      <div className="Fab" onClick={(e) => onClick(e)}>
        {children}
      </div>
      <style jsx>{`
        .Fab {
          align-items: center;
          background: white;
          border-radius: 50%;
          box-shadow: 0 4px 8px -4px rgba(0,0,0,0.5);
          display: flex;
          font-size: 1rem;
          height: ${size}px;
          justify-content: center;
          position: absolute;
          ${getPosition()}
          width: ${size}px;
          z-index: 99;
        }
      `}</style>
    </>
  );
}

export default Fab;
