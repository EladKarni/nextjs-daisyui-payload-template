import Hero from "@/components/Hero";
import AboutSection from "@/views/AboutSection";
import ServicesSection from "@/views/ServicesSection";
import ProcessSection from "@/views/ProcessSection";
import FeaturedProjectsSection from "@/views/FeaturedProjectsSection";
import TestimonialsSection from "@/views/TestimonialsSection";
import ContactSection from "@/views/ContactSection";
import {
  heroData,
  aboutData,
  processData,
  services,
  testimonials,
  contactData,
  companyInfo,
  projectsSectionData,
  getFeaturedProjects,
} from "@/consts/demoData";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={heroData.title}
        subtitle={heroData.subtitle}
        description={heroData.description}
        primaryCTA={heroData.primaryCTA}
        secondaryCTA={heroData.secondaryCTA}
        backgroundImage={heroData.backgroundImage}
        backgroundVideo={heroData.backgroundVideo}
        overlay={heroData.overlay}
        overlayOpacity={heroData.overlayOpacity}
      />

      {/* About Section */}
      <AboutSection data={aboutData} />

      {/* Featured Projects Section */}
      <FeaturedProjectsSection
        data={featuredProjects}
        title={projectsSectionData.title}
      />

      {/* Services Section */}
      <ServicesSection data={services} />

      {/* Process Section */}
      <ProcessSection data={processData} />

      {/* Testimonials Section */}
      <TestimonialsSection data={testimonials} />

      {/* Contact Section */}
      <ContactSection contactData={contactData} companyInfo={companyInfo} />
    </main>
  );
}
