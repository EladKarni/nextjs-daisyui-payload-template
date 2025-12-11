export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/EladKarni',
    icon: 'github',
    ariaLabel: 'Visit Elad\'s GitHub profile'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/elad-karni-5138b548',
    icon: 'linkedin',
    ariaLabel: 'Visit Elad\'s LinkedIn profile'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/light1c3',
    icon: 'instagram',
    ariaLabel: 'Visit Elad\'s Instagram profile'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/Light1c3',
    icon: 'facebook',
    ariaLabel: 'Visit Elad\'s Facebook profile'
  }
];
