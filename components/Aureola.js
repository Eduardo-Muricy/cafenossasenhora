// Raios da auréola do logo, girando bem devagar atrás do título
const RAIOS = 36;

export default function Aureola({ className = "" }) {
  return (
    <svg aria-hidden viewBox="-100 -100 200 200" className={`aureola pointer-events-none ${className}`}>
      <g stroke="var(--mostarda)" strokeLinecap="round">
        {Array.from({ length: RAIOS }, (_, i) => {
          const a = (i / RAIOS) * Math.PI * 2;
          const longo = i % 2 === 0;
          const r1 = 34;
          const r2 = longo ? 98 : 80;
          return (
            <line
              key={i}
              x1={(Math.cos(a) * r1).toFixed(2)}
              y1={(Math.sin(a) * r1).toFixed(2)}
              x2={(Math.cos(a) * r2).toFixed(2)}
              y2={(Math.sin(a) * r2).toFixed(2)}
              strokeWidth={longo ? 0.6 : 0.35}
              strokeOpacity={longo ? 0.55 : 0.35}
            />
          );
        })}
      </g>
      <circle r="30" fill="none" stroke="var(--mostarda)" strokeOpacity="0.4" strokeWidth="0.5" />
    </svg>
  );
}
