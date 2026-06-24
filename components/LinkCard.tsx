import type { ReactNode } from 'react';
import { ArrowIcon } from './Icons';

export type LinkCardProps = {
  href: string;
  title: string;
  description: string;
  className?: string;
  icon: ReactNode;
};

export function LinkCard({ href, title, description, icon, className = '' }: LinkCardProps) {
  return (
    <a className={`link-card ${className}`} href={href} aria-label={`${title}: ${description}`}>
      <span className="link-card__icon" aria-hidden="true">{icon}</span>
      <span className="link-card__text">
        <span className="link-card__title">{title}</span>
        <span className="accent-line" />
        <span className="link-card__description">{description}</span>
      </span>
      <span className="link-card__arrow" aria-hidden="true"><ArrowIcon /></span>
    </a>
  );
}
