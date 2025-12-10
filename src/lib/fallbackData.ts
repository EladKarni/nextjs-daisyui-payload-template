// Fallback data for when CMS is unavailable (e.g., during build without database)

export const fallbackHeroData = {
  title: "Building Tomorrow's Solutions Today",
  subtitle: "Welcome to Excellence",
  description:
    "We deliver innovative business solutions that drive growth and success. Partner with us to transform your vision into reality.",
  primaryCTA: {
    text: "Get Started",
    href: "/#contact",
  },
  secondaryCTA: {
    text: "Learn More",
    href: "/#about",
  },
  backgroundImage: "https://picsum.photos/id/0/1920/1080",
  backgroundVideo: "",
  overlay: true,
  overlayOpacity: 0.5,
};

export const fallbackAboutData = {
  title: "Your Trusted Business Partner",
  subtitle: "About Us",
  description:
    "We are dedicated to delivering exceptional business solutions tailored to your unique needs. With years of experience and a commitment to excellence, we help organizations achieve their goals through innovative strategies and proven methodologies.",
  stats: [
    { value: "100+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "10+", label: "Years of Experience" },
  ],
  imagePosition: "right" as const,
};

export const fallbackProjectsPageData = {
  title: "Featured Work",
  pageHeader: {
    label: "Our Portfolio",
    title: "Projects & Case Studies",
    description:
      "Explore our recent work and success stories. Each project demonstrates our commitment to delivering exceptional results.",
  },
};

export const fallbackProcessData = {
  title: "How We Work",
  subtitle: "Our Process",
  steps: [
    {
      number: "01",
      icon: "lightbulb",
      title: "Discovery",
      description:
        "We begin by understanding your needs, goals, and challenges to create a solid foundation for success.",
    },
    {
      number: "02",
      icon: "pencil-ruler",
      title: "Planning",
      description:
        "We develop a comprehensive strategy tailored to your objectives, ensuring alignment at every step.",
    },
    {
      number: "03",
      icon: "cube",
      title: "Execution",
      description:
        "Our team delivers solutions with precision and expertise, maintaining quality throughout the process.",
    },
    {
      number: "04",
      icon: "check-circle",
      title: "Delivery",
      description:
        "We ensure smooth deployment and provide ongoing support to guarantee your continued success.",
    },
  ],
};

export const fallbackServices = [
  {
    title: "Strategy Consulting",
    description:
      "Expert guidance to help you navigate complex business challenges and opportunities with confidence.",
    icon: "lightbulb",
  },
  {
    title: "Digital Development",
    description:
      "Custom software solutions built with modern technologies and best practices for optimal performance.",
    icon: "chip",
  },
  {
    title: "Business Analytics",
    description:
      "Data-driven insights to inform decision-making and drive growth through actionable intelligence.",
    icon: "ruler",
  },
  {
    title: "Creative Design",
    description:
      "Beautiful, user-centered designs that elevate your brand and engage your audience effectively.",
    icon: "lightning-bolt",
  },
  {
    title: "Technical Support",
    description:
      "Reliable support to keep your systems running smoothly with minimal downtime and maximum efficiency.",
    icon: "cube",
  },
  {
    title: "Project Management",
    description:
      "Expert coordination to ensure your projects are delivered on time, on budget, and exceed expectations.",
    icon: "triangle-ruler",
  },
];

export const fallbackProjects = [
  {
    title: "Enterprise Dashboard",
    description:
      "A comprehensive analytics platform for large organizations to track performance and make data-driven decisions.",
    slug: "enterprise-dashboard",
    image: "https://picsum.photos/id/0/1200/800",
    category: "Digital Solutions",
    technologies: ["React", "TypeScript", "Node.js"],
    featured: true,
  },
  {
    title: "Mobile Commerce App",
    description:
      "A seamless shopping experience for modern consumers with intuitive design and powerful features.",
    slug: "mobile-commerce-app",
    image: "https://picsum.photos/id/1/1200/800",
    category: "Mobile Development",
    technologies: ["React Native", "API Integration", "Payment Systems"],
    featured: true,
  },
  {
    title: "Brand Identity System",
    description:
      "A complete visual identity for a growing startup, including logo design, style guides, and brand assets.",
    slug: "brand-identity-system",
    image: "https://picsum.photos/id/180/1200/800",
    category: "Design",
    technologies: ["Design Systems", "Branding", "UI/UX"],
    featured: true,
  },
];

export const fallbackTestimonials = [
  {
    quote:
      "Working with Acme Corporation transformed our business. Their expertise and dedication exceeded our expectations at every turn.",
    author: "Alex Johnson",
    role: "CEO",
    company: "TechCorp Industries",
  },
  {
    quote:
      "The team delivered exceptional results on time and within budget. Their professionalism and attention to detail are remarkable.",
    author: "Maria Garcia",
    role: "Director of Operations",
    company: "Global Solutions Inc",
  },
  {
    quote:
      "Professional, knowledgeable, and results-driven. Acme Corporation is a true partner in our success.",
    author: "James Chen",
    role: "VP of Technology",
    company: "Enterprise Systems Ltd",
  },
];
