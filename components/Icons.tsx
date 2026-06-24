type IconProps = {
  className?: string;
  title?: string;
};

export function YouTubeIcon({ className, title = 'YouTube' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 96 96" role="img" aria-label={title} xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="22" width="72" height="52" rx="17" fill="currentColor" />
      <path d="M42 35v26l23-13-23-13z" fill="#fff" />
    </svg>
  );
}

export function BlogIcon({ className, title = 'Blog' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 96 96" role="img" aria-label={title} xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="16" width="46" height="64" rx="8" fill="none" stroke="currentColor" strokeWidth="7" />
      <path d="M34 34h20M34 48h18M34 62h14" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d="M59 66l17-17 8 8-17 17-12 4 4-12z" fill="#fff" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
    </svg>
  );
}

export function BlueskyIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <path
        fill="currentColor"
        d="
          M32 33
          C27 23 18 12 10 8
          C5 6 3 9 5 15
          C8 25 17 33 28 37
          C19 38 11 44 10 51
          C9 58 20 57 28 47
          C30 44 31 40 32 36
          C33 40 34 44 36 47
          C44 57 55 58 54 51
          C53 44 45 38 36 37
          C47 33 56 25 59 15
          C61 9 59 6 54 8
          C46 12 37 23 32 33
          Z
        "
      />
    </svg>
  );
}

export function InstagramIcon({ className, title = 'Instagram' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 96 96" role="img" aria-label={title} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="instaGradient" x1="18" x2="78" y1="78" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FEDA75" />
          <stop offset=".35" stopColor="#FA7E1E" />
          <stop offset=".62" stopColor="#D62976" />
          <stop offset="1" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>
      <rect x="18" y="18" width="60" height="60" rx="18" fill="none" stroke="url(#instaGradient)" strokeWidth="7" />
      <circle cx="48" cy="48" r="15" fill="none" stroke="url(#instaGradient)" strokeWidth="7" />
      <circle cx="66" cy="30" r="5" fill="url(#instaGradient)" />
    </svg>
  );
}

export function GamepadIcon({ className, title = 'Games' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 96 96" role="img" aria-label={title} xmlns="http://www.w3.org/2000/svg">
      <path d="M26 35h44c10 0 17 8 18 19l2 15c1 8-7 14-14 10l-11-8H31l-11 8c-7 4-15-2-14-10l2-15c1-11 8-19 18-19z" fill="currentColor" />
      <path d="M27 54h18M36 45v18" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
      <circle cx="66" cy="53" r="4" fill="#fff" />
      <circle cx="77" cy="61" r="4" fill="#fff" />
    </svg>
  );
}

export function ArrowIcon({ className, title = 'Open link' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" role="img" aria-label={title} xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
