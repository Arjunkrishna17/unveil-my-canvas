interface FloatingShapeProps {
  className?: string;
  delay?: number;
}

export const FloatingShape = ({ className = "", delay = 0 }: FloatingShapeProps) => {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-20 animate-float ${className}`}
      style={{
        animationDelay: `${delay}s`,
      }}
    />
  );
};
