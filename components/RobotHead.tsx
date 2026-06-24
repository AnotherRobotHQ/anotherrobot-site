type RobotHeadProps = {
  variant?: 'orange' | 'white';
  className?: string;
  title?: string;
};

export function RobotHead({ variant = 'orange', className, title = 'AnotherRobot robot head' }: RobotHeadProps) {
  const isWhite = variant === 'white';
  const primary = isWhite ? '#ffffff' : 'var(--robot-orange)';
  const cutout = isWhite ? 'var(--robot-orange)' : '#ffffff';

  return (
    <svg
      className={className}
      viewBox="0 0 400 320"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="24" y="116" width="34" height="88" rx="16" fill={primary} />
      <rect x="342" y="116" width="34" height="88" rx="16" fill={primary} />
      <rect x="70" y="50" width="260" height="220" rx="46" fill={primary} />
      <rect x="101" y="104" width="84" height="72" rx="20" fill={cutout} />
      <rect x="215" y="104" width="84" height="72" rx="20" fill={cutout} />
      <rect x="180" y="133" width="40" height="18" rx="9" fill={cutout} />
      <path d="M160 202c9 28 70 28 80 0H160z" fill={cutout} />
    </svg>
  );
}
