/**
 * Static Demo Data
 *
 * This file contains all the static content for the website.
 * Edit this file to update the content displayed on the site.
 */

import type {
  AboutSectionData,
  ProcessSectionData,
  Service,
  Project,
  Testimonial,
  ContactData,
  CompanyInfo,
  FooterData,
  ProjectsSectionData,
} from "@/types";

// =============================================================================
// HERO SECTION
// =============================================================================

export interface HeroData {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  backgroundVideo?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

export const heroData: HeroData = {
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

// =============================================================================
// ABOUT SECTION
// =============================================================================

export const aboutData: AboutSectionData = {
  title: "Your Trusted Business Partner",
  subtitle: "About Us",
  description:
    "We are dedicated to delivering exceptional business solutions tailored to your unique needs. With years of experience and a commitment to excellence, we help organizations achieve their goals through innovative strategies and proven methodologies.",
  stats: [
    { value: "100+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "10+", label: "Years of Experience" },
  ],
  imagePosition: "right",
};

// =============================================================================
// PROJECTS SECTION (Page Header)
// =============================================================================

export const projectsSectionData: ProjectsSectionData = {
  title: "Featured Work",
  pageHeader: {
    label: "Our Portfolio",
    title: "Projects & Case Studies",
    description:
      "Explore our recent work and success stories. Each project demonstrates our commitment to delivering exceptional results.",
  },
};

// =============================================================================
// PROCESS SECTION
// =============================================================================

export const processData: ProcessSectionData = {
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

// =============================================================================
// SERVICES
// =============================================================================

export const services: Service[] = [
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

// =============================================================================
// TESTIMONIALS
// =============================================================================

export const testimonials: Testimonial[] = [
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

// =============================================================================
// CONTACT SECTION
// =============================================================================

export const contactData: ContactData = {
  title: "Get In Touch",
  nameLabel: "Name",
  namePlaceholder: "Your name",
  emailLabel: "Email",
  emailPlaceholder: "your@email.com",
  messageLabel: "Message",
  messagePlaceholder: "Your message",
  submitButtonText: "Send Message",
};

// =============================================================================
// COMPANY INFO
// =============================================================================

export const companyInfo: CompanyInfo = {
  companyName: "Acme Corporation",
  tagline:
    "Your Trusted Business Partner. We deliver innovative solutions that drive growth and success.",
  email: "contact@acmecorp.com",
  phone: "+1 (555) 123-4567",
  phoneHref: "tel:+15551234567",
  address: {
    street: "123 Business Street",
    city: "San Francisco",
    state: "CA",
    zip: "94102",
  },
  socialMedia: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
};

// =============================================================================
// FOOTER SECTION
// =============================================================================

export const footerData: FooterData = {
  services: [
    { label: "Strategy Consulting", href: "/#solutions" },
    { label: "Digital Development", href: "/#solutions" },
    { label: "Business Analytics", href: "/#solutions" },
    { label: "Creative Design", href: "/#solutions" },
  ],
  showQuickLinks: true,
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  copyrightText: "Acme Corporation. All rights reserved.",
};

// =============================================================================
// PROJECTS (List View)
// =============================================================================

export interface ProjectListItem extends Project {
  image: string;
}

export const projects: ProjectListItem[] = [
  {
    id: "1",
    title: "Enterprise Dashboard",
    description:
      "A comprehensive analytics platform for large organizations to track performance and make data-driven decisions.",
    slug: "enterprise-dashboard",
    image: "https://picsum.photos/id/0/1200/800",
    category: "Digital Solutions",
    technologies: [
      { technology: "React", id: "1" },
      { technology: "TypeScript", id: "2" },
      { technology: "Node.js", id: "3" },
    ],
    featured: true,
  },
  {
    id: "2",
    title: "Mobile Commerce App",
    description:
      "A seamless shopping experience for modern consumers with intuitive design and powerful features.",
    slug: "mobile-commerce-app",
    image: "https://picsum.photos/id/1/1200/800",
    category: "Mobile Development",
    technologies: [
      { technology: "React Native", id: "1" },
      { technology: "API Integration", id: "2" },
      { technology: "Payment Systems", id: "3" },
    ],
    featured: true,
  },
  {
    id: "3",
    title: "Brand Identity System",
    description:
      "A complete visual identity for a growing startup, including logo design, style guides, and brand assets.",
    slug: "brand-identity-system",
    image: "https://picsum.photos/id/180/1200/800",
    category: "Design",
    technologies: [
      { technology: "Design Systems", id: "1" },
      { technology: "Branding", id: "2" },
      { technology: "UI/UX", id: "3" },
    ],
    featured: true,
  },
];

// =============================================================================
// PROJECT DETAILS (Individual Project Pages)
// =============================================================================

export interface ProjectDetail extends Project {
  heroImage: string;
  image: string;
  client?: string;
  duration?: string;
  year?: string;
  fullDescription?: {
    root: {
      children: Array<{
        type: string;
        children?: Array<{
          type: string;
          text?: string;
          format?: number;
        }>;
        listType?: string;
        tag?: string;
      }>;
    };
  };
  features?: Array<{ feature: string; id: string }>;
  challenge?: string;
  solution?: string;
  results?: Array<{ value: string; metric: string; id: string }>;
  gallery?: Array<{ image: string; caption?: string; id: string }>;
}

export const projectDetails: Record<string, ProjectDetail> = {
  "enterprise-dashboard": {
    id: "1",
    title: "Enterprise Dashboard",
    description:
      "A comprehensive analytics platform for large organizations to track performance and make data-driven decisions.",
    slug: "enterprise-dashboard",
    heroImage: "https://picsum.photos/id/0/1200/800",
    image: "https://picsum.photos/id/0/1200/800",
    category: "Digital Solutions",
    technologies: [
      { technology: "React", id: "1" },
      { technology: "TypeScript", id: "2" },
      { technology: "Node.js", id: "3" },
      { technology: "PostgreSQL", id: "4" },
      { technology: "Chart.js", id: "5" },
    ],
    featured: true,
    client: "Global Enterprise Inc.",
    duration: "6 months",
    year: "2024",
    fullDescription: {
      root: {
        children: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "We developed a comprehensive enterprise dashboard solution that empowers large organizations to track key performance indicators, visualize complex data sets, and make informed business decisions. The platform integrates with multiple data sources and provides real-time analytics capabilities.",
              },
            ],
          },
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "The dashboard features customizable widgets, role-based access control, and advanced reporting capabilities that enable stakeholders at all levels to access the insights they need.",
              },
            ],
          },
        ],
      },
    },
    features: [
      { feature: "Real-time data visualization", id: "1" },
      { feature: "Custom widget builder", id: "2" },
      { feature: "Role-based access control", id: "3" },
      { feature: "Advanced filtering and search", id: "4" },
      { feature: "Export to multiple formats", id: "5" },
      { feature: "Mobile-responsive design", id: "6" },
    ],
    challenge:
      "The client needed a unified view of data from 15+ disparate systems, with real-time updates and complex permission requirements.",
    solution:
      "We built a scalable microservices architecture with a centralized data warehouse, custom API gateway, and flexible role-based access system.",
    results: [
      { value: "45%", metric: "Faster Decision Making", id: "1" },
      { value: "30%", metric: "Cost Reduction", id: "2" },
      { value: "99.9%", metric: "Uptime", id: "3" },
    ],
    gallery: [
      {
        image: "https://picsum.photos/id/1/1200/800",
        caption: "Dashboard Overview",
        id: "1",
      },
      {
        image: "https://picsum.photos/id/2/1200/800",
        caption: "Analytics View",
        id: "2",
      },
      {
        image: "https://picsum.photos/id/3/1200/800",
        caption: "Custom Reports",
        id: "3",
      },
    ],
    createdAt: "2024-01-15T00:00:00.000Z",
    updatedAt: "2024-01-15T00:00:00.000Z",
  },
  "mobile-commerce-app": {
    id: "2",
    title: "Mobile Commerce App",
    description:
      "A seamless shopping experience for modern consumers with intuitive design and powerful features.",
    slug: "mobile-commerce-app",
    heroImage: "https://picsum.photos/id/1/1200/800",
    image: "https://picsum.photos/id/1/1200/800",
    category: "Mobile Development",
    technologies: [
      { technology: "React Native", id: "1" },
      { technology: "API Integration", id: "2" },
      { technology: "Payment Systems", id: "3" },
      { technology: "Firebase", id: "4" },
      { technology: "Stripe", id: "5" },
    ],
    featured: true,
    client: "Retail Innovations LLC",
    duration: "4 months",
    year: "2024",
    fullDescription: {
      root: {
        children: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "We created a cutting-edge mobile commerce application that delivers a seamless shopping experience across iOS and Android platforms. The app features intuitive navigation, secure payment processing, and personalized product recommendations.",
              },
            ],
          },
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "Built with performance and user experience in mind, the application handles thousands of concurrent users while maintaining fast load times and smooth animations.",
              },
            ],
          },
        ],
      },
    },
    features: [
      { feature: "One-tap checkout", id: "1" },
      { feature: "Personalized recommendations", id: "2" },
      { feature: "Secure payment integration", id: "3" },
      { feature: "Wishlist and saved items", id: "4" },
      { feature: "Order tracking", id: "5" },
      { feature: "Push notifications", id: "6" },
    ],
    challenge:
      "The client needed a mobile app that could handle high traffic during flash sales while providing a smooth user experience.",
    solution:
      "We implemented optimistic UI updates, intelligent caching strategies, and a robust backend infrastructure with auto-scaling capabilities.",
    results: [
      { value: "250%", metric: "Increase in Mobile Sales", id: "1" },
      { value: "4.8/5", metric: "App Store Rating", id: "2" },
      { value: "65%", metric: "User Retention Rate", id: "3" },
    ],
    gallery: [
      {
        image: "https://picsum.photos/id/4/1200/800",
        caption: "Product Catalog",
        id: "1",
      },
      {
        image: "https://picsum.photos/id/5/1200/800",
        caption: "Checkout Flow",
        id: "2",
      },
      {
        image: "https://picsum.photos/id/6/1200/800",
        caption: "User Profile",
        id: "3",
      },
    ],
    createdAt: "2024-02-20T00:00:00.000Z",
    updatedAt: "2024-02-20T00:00:00.000Z",
  },
  "brand-identity-system": {
    id: "3",
    title: "Brand Identity System",
    description:
      "A complete visual identity for a growing startup, including logo design, style guides, and brand assets.",
    slug: "brand-identity-system",
    heroImage: "https://picsum.photos/id/180/1200/800",
    image: "https://picsum.photos/id/180/1200/800",
    category: "Design",
    technologies: [
      { technology: "Design Systems", id: "1" },
      { technology: "Branding", id: "2" },
      { technology: "UI/UX", id: "3" },
      { technology: "Figma", id: "4" },
      { technology: "Adobe Creative Suite", id: "5" },
    ],
    featured: true,
    client: "TechStart Ventures",
    duration: "3 months",
    year: "2024",
    fullDescription: {
      root: {
        children: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "We developed a comprehensive brand identity system for a fast-growing startup in the technology sector. The project included logo design, color palette development, typography selection, and creation of detailed brand guidelines.",
              },
            ],
          },
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                text: "The brand system was designed to be flexible and scalable, allowing the company to maintain consistency across all touchpoints while adapting to different contexts and mediums.",
              },
            ],
          },
        ],
      },
    },
    features: [
      { feature: "Custom logo design", id: "1" },
      { feature: "Comprehensive brand guidelines", id: "2" },
      { feature: "Color palette and typography system", id: "3" },
      { feature: "Marketing collateral templates", id: "4" },
      { feature: "Social media assets", id: "5" },
      { feature: "Presentation templates", id: "6" },
    ],
    challenge:
      "The startup needed a professional brand identity that would help them stand out in a crowded market while appealing to both investors and customers.",
    solution:
      "We conducted extensive market research and stakeholder interviews to create a distinctive visual identity that balances professionalism with approachability.",
    results: [
      { value: "85%", metric: "Brand Recognition Increase", id: "1" },
      { value: "3x", metric: "Social Media Engagement", id: "2" },
      { value: "100%", metric: "Stakeholder Satisfaction", id: "3" },
    ],
    gallery: [
      {
        image: "https://picsum.photos/id/7/1200/800",
        caption: "Logo Variations",
        id: "1",
      },
      {
        image: "https://picsum.photos/id/8/1200/800",
        caption: "Brand Guidelines",
        id: "2",
      },
      {
        image: "https://picsum.photos/id/9/1200/800",
        caption: "Marketing Materials",
        id: "3",
      },
    ],
    createdAt: "2024-03-10T00:00:00.000Z",
    updatedAt: "2024-03-10T00:00:00.000Z",
  },
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get featured projects for homepage display
 */
export function getFeaturedProjects(): ProjectListItem[] {
  return projects.filter((p) => p.featured);
}

/**
 * Get all projects
 */
export function getAllProjects(): ProjectListItem[] {
  return projects;
}

/**
 * Get project by slug
 */
export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectDetails[slug];
}

/**
 * Get all project slugs (for static generation)
 */
export function getAllProjectSlugs(): string[] {
  return Object.keys(projectDetails);
}
