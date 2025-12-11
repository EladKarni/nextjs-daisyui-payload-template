import SocialLinks from '@/ui/social-links';
import { personalInfo } from '@/constants/personal';
import { socialLinks } from '@/constants/social-links';

export default function Hero() {
  return (
    <section className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-base-content/80">
            {personalInfo.tagline}
          </h2>
          <p className="text-lg mb-8 text-base-content/70">
            I&apos;m a {personalInfo.roles.join(', ')}
          </p>
          <p className="text-base mb-8">
            with more than {personalInfo.yearsExperience} years of professional experience
          </p>
          <SocialLinks links={socialLinks} className="justify-center" iconSize="lg" />
          <div className="mt-12">
            <a href="#about" className="text-primary hover:underline">
              Scroll to learn more ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
