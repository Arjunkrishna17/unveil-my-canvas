export const GridBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated Grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          animation: 'gridMove 20s linear infinite'
        }}
      />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Scan Line */}
      <div 
        className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"
        style={{
          animation: 'scanLine 8s linear infinite'
        }}
      />
      
      <style>{`
        @keyframes gridMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100px);
          }
        }
        
        @keyframes scanLine {
          0% {
            top: -2px;
          }
          100% {
            top: 100%;
          }
        }
      `}</style>
    </div>
  );
};
