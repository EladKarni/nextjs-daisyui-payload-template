import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { cn } from '@/util/utils';
import { SocialLink } from '@/constants/social-links';

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
  iconSize?: 'sm' | 'md' | 'lg';
}

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  facebook: FaFacebook,
};

export default function SocialLinks({
  links,
  className,
  iconSize = 'md'
}: SocialLinksProps) {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className={cn('flex gap-4', className)}>
      {links.map((link) => {
        const IconComponent = iconMap[link.icon as keyof typeof iconMap];
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.ariaLabel}
            className="btn btn-circle btn-ghost hover:btn-primary transition-colors"
          >
            {IconComponent && <IconComponent className={sizeClasses[iconSize]} />}
          </a>
        );
      })}
    </div>
  );
}
