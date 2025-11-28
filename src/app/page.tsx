import HeroSection from "@/views/HeroSection";
import AboutSection from "@/views/AboutSection";
import ServicesSection from "@/views/ServicesSection";
import ProcessSection from "@/views/ProcessSection";
import FeaturedProjectsSection from "@/views/FeaturedProjectsSection";
import TestimonialsSection from "@/views/TestimonialsSection";
import ContactSection from "@/views/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Bringing Your Product Ideas to Life"
        subtitle="Welcome to YK Innovations"
        description="Expert mechanical engineering and rapid prototyping services. We transform concepts into functional prototypes, bridging the gap from design to manufacturing."
        primaryCTA={{
          text: "Start Your Project",
          href: "#contact",
        }}
        secondaryCTA={{
          text: "View Our Prototypes",
          href: "#projects",
        }}
        backgroundImage="https://picsum.photos/1920/1080?random=1"
        overlay={true}
        overlayOpacity={50}
      />

      {/* About Section */}
      <AboutSection
        title="Engineering Innovation, One Prototype at a Time"
        subtitle="About Us"
        description="At YK Innovations, we specialize in mechanical engineering and rapid prototyping for businesses developing new products. From initial CAD design to functional prototypes, we provide comprehensive engineering support to bring your ideas from concept to reality."
        stats={[
          { value: "150+", label: "Prototypes Delivered" },
          { value: "40+", label: "Business Partners" },
          { value: "8+", label: "Years Engineering" },
        ]}
        cta={{
          text: "Learn About Our Process",
          href: "#process",
        }}
        imagePosition="right"
      />

      {/* Featured Projects Section */}
      <FeaturedProjectsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
