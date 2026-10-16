export default function OIAILogo({ 
  size = 40, 
  showText = true, 
  variant = 'dark', // 'dark' | 'light' | 'white'
  className = '' 
}) {
  const isLight = variant === 'light';
  const textColor = isLight ? '#f5efe3' : '#0b2540';
  const subColor = isLight ? '#38bdf8' : '#0096c7';

  return (
    <div className={`oiai-logo-wrap ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      <svg 
        viewBox="0 0 240 240" 
        width={size} 
        height={size} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, transition: 'transform 0.3s ease' }}
      >
        <defs>
          <linearGradient id={`blade-g1-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00b4d8" />
            <stop offset="60%" stopColor="#0096c7" />
            <stop offset="100%" stopColor="#0077b6" />
          </linearGradient>
          <linearGradient id={`blade-g2-${size}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0077b6" />
            <stop offset="70%" stopColor="#0096c7" />
            <stop offset="100%" stopColor="#48cae4" />
          </linearGradient>
        </defs>

        <g transform="translate(120, 120)">
          {/* 6 blades (60-deg increments) */}
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <g key={deg} transform={`rotate(${deg})`}>
              <path 
                d="M 0,-18 L 32,-72 L 78,-58 L 54,-14 L 24,-10 Z" 
                fill={`url(#blade-g1-${size})`} 
              />
              <path 
                d="M 32,-72 L 78,-58 L 54,-14 Z" 
                fill={`url(#blade-g2-${size})`} 
                opacity="0.9" 
              />
            </g>
          ))}

          {/* Central circular core */}
          <circle cx="0" cy="0" r="35" fill="#ffffff" stroke="#0096c7" strokeWidth="2.5" />
          <text 
            x="0" 
            y="12" 
            fontFamily="'DM Sans', 'Inter', sans-serif" 
            fontSize="38" 
            fontWeight="900" 
            fill="#0b2540" 
            textAnchor="middle" 
            letterSpacing="-0.5"
          >
            Ai
          </text>
        </g>
      </svg>

      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span style={{ 
            fontFamily: "'DM Sans', sans-serif", 
            fontWeight: 800, 
            fontSize: size > 40 ? '18px' : '15px', 
            letterSpacing: '-0.3px', 
            color: textColor 
          }}>
            Odisha Institute of <span style={{ color: subColor, fontWeight: 900 }}>Ai</span>
          </span>
          <span style={{ 
            fontFamily: "'Oswald', sans-serif", 
            letterSpacing: '1.8px', 
            fontSize: '9px', 
            color: subColor,
            fontWeight: 700,
            textTransform: 'uppercase'
          }}>
            OIAI • BHUBANESWAR
          </span>
        </div>
      )}
    </div>
  );
}
