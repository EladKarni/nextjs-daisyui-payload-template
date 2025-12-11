import { config as loadEnv } from "dotenv";
import { getPayload } from "payload";
import config from "../src/payload.config";
import path from "path";

// Load .env.local file
loadEnv({ path: path.resolve(process.cwd(), ".env.local") });

const seed = async () => {
  const payload = await getPayload({ config });

  console.log("🌱 Starting database seed...");
  console.log("📊 Database URL:", process.env.DATABASE_URL);

  try {
    // Create admin user
    console.log("👤 Creating admin user...");
    const existingUsers = await payload.find({
      collection: "users",
      limit: 1,
    });

    console.log(`   Found ${existingUsers.docs.length} existing users`);
    if (existingUsers.docs.length === 0) {
      await payload.create({
        collection: "users",
        data: {
          email: "admin@example.com",
          password: "password123",
        },
      });
      console.log(
        "✅ Admin user created (email: admin@example.com, password: password123)"
      );
    } else {
      console.log("ℹ️  Admin user already exists");
    }

    // Create Services
    console.log("🔧 Creating services...");
    const services = [
      {
        title: "CAD Modeling & Design",
        description:
          "Professional 3D modeling and technical drawings for product development, mechanical parts, and assemblies using industry-standard CAD software.",
        icon: "lightning-bolt",
        order: 1,
      },
      {
        title: "Engineering Consulting",
        description:
          "Expert engineering advice and consultation for product feasibility, design optimization, and technical problem-solving across various industries.",
        icon: "chip",
        order: 2,
      },
      {
        title: "Product Development",
        description:
          "End-to-end product development services from concept to production-ready designs, ensuring quality and manufacturability.",
        icon: "ruler",
        order: 3,
      },
      {
        title: "Rapid Prototyping",
        description:
          "Quick turnaround prototyping services using 3D printing and other rapid manufacturing methods to validate designs early.",
        icon: "triangle-ruler",
        order: 4,
      },
      {
        title: "PCB Design & Development",
        description:
          "Custom printed circuit board design and development for embedded systems, IoT devices, and electronic products.",
        icon: "pcb",
        order: 5,
      },
      {
        title: "Embedded Systems",
        description:
          "Firmware development and embedded systems design for microcontrollers, sensors, and connected devices.",
        icon: "code-brackets",
        order: 6,
      },
    ];

    for (const service of services) {
      const existing = await payload.find({
        collection: "services",
        where: { title: { equals: service.title } },
        limit: 1,
      });

      if (existing.docs.length === 0) {
        await payload.create({
          collection: "services",
          data: service,
        });
        console.log(`  ✓ Created service: ${service.title}`);
      }
    }

    // Create Testimonials
    console.log("💬 Creating testimonials...");
    const testimonials = [
      {
        quote:
          "The engineering expertise and attention to detail on our project was exceptional. They delivered a product that exceeded our expectations in both quality and functionality.",
        author: "Sarah Johnson",
        role: "CEO",
        company: "TechStart Solutions",
        rating: 5,
        featured: true,
        order: 1,
      },
      {
        quote:
          "Outstanding work on our medical device prototype. The team understood our complex requirements and delivered a design that passed FDA testing on the first submission.",
        author: "Dr. Michael Chen",
        role: "Chief Product Officer",
        company: "MedTech Innovations",
        rating: 5,
        featured: true,
        order: 2,
      },
      {
        quote:
          "From concept to production, the process was seamless. Their CAD modeling and prototyping services saved us months of development time.",
        author: "Emily Rodriguez",
        role: "Product Manager",
        company: "Industrial Robotics Inc",
        rating: 5,
        featured: true,
        order: 3,
      },
      {
        quote:
          "The PCB design work was flawless. Our IoT device went from breadboard to production in record time thanks to their expertise.",
        author: "James Wilson",
        role: "Founder",
        company: "ConnectHome",
        rating: 5,
        featured: false,
        order: 4,
      },
    ];

    for (const testimonial of testimonials) {
      const existing = await payload.find({
        collection: "testimonials",
        where: {
          author: { equals: testimonial.author },
          company: { equals: testimonial.company },
        },
        limit: 1,
      });

      if (existing.docs.length === 0) {
        await payload.create({
          collection: "testimonials",
          data: testimonial,
        });
        console.log(
          `  ✓ Created testimonial: ${testimonial.author} - ${testimonial.company}`
        );
      }
    }

    // Create Projects
    console.log("📁 Creating projects...");
    const projects = [
      {
        title: "Smart Home IoT Hub",
        slug: "smart-home-iot-hub",
        description:
          "A central control hub for managing smart home devices with custom PCB design and embedded firmware.",
        fullDescription: {
          root: {
            type: "root",
            children: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Developed a comprehensive smart home control system featuring a custom-designed PCB with ESP32 integration, multi-protocol support (WiFi, Zigbee, Z-Wave), and a beautiful touch interface. The system manages lighting, climate control, security, and entertainment devices from a single hub.",
                  },
                ],
              },
            ],
          },
        },
        client: "ConnectHome",
        duration: "8 months",
        year: "2024",
        featured: true,
        order: 1,
        features: [
          { feature: "Multi-protocol wireless connectivity" },
          { feature: "Custom PCB with power management" },
          { feature: "Real-time device monitoring" },
          { feature: "Voice assistant integration" },
        ],
        technologies: [
          { technology: "ESP32 microcontroller" },
          { technology: "KiCAD for PCB design" },
          { technology: "C++ firmware" },
          { technology: "MQTT protocol" },
        ],
        challenge:
          "Creating a reliable multi-protocol hub that could communicate with various smart home ecosystems while maintaining low power consumption and ensuring data security.",
        solution:
          "Implemented a modular architecture with dedicated radio modules, efficient power management, and encrypted local communication protocols.",
        results: [
          { metric: "Device compatibility", value: "200+ devices" },
          { metric: "Power consumption", value: "45% reduction" },
          { metric: "Response time", value: "<100ms" },
        ],
      },
      {
        title: "Industrial Robotic Arm Controller",
        slug: "industrial-robotic-arm-controller",
        description:
          "Precision controller for 6-axis industrial robotic arm with real-time motion planning and safety features.",
        fullDescription: {
          root: {
            type: "root",
            children: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Designed and manufactured a high-precision controller for industrial automation. Features include inverse kinematics calculations, collision detection, and integration with industrial PLCs. The system provides sub-millimeter accuracy for automated assembly operations.",
                  },
                ],
              },
            ],
          },
        },
        client: "Industrial Robotics Inc",
        duration: "10 months",
        year: "2023",
        featured: true,
        order: 2,
        features: [
          { feature: "Real-time motion planning" },
          { feature: "Safety interlock system" },
          { feature: "Modbus TCP communication" },
          { feature: "Teach pendant interface" },
        ],
        technologies: [
          { technology: "STM32 microcontroller" },
          { technology: "Altium Designer" },
          { technology: "Real-time Linux" },
          { technology: "CAN bus" },
        ],
        challenge:
          "Achieving precise positioning with repeatability under ±0.05mm while maintaining safety compliance and real-time performance.",
        solution:
          "Developed custom motion control algorithms with predictive path planning and implemented redundant safety systems meeting ISO 10218 standards.",
        results: [
          { metric: "Positioning accuracy", value: "±0.03mm" },
          { metric: "Cycle time improvement", value: "35%" },
          { metric: "Safety rating", value: "ISO 10218 compliant" },
        ],
      },
      {
        title: "Portable Medical Diagnostic Device",
        slug: "portable-medical-diagnostic-device",
        description:
          "FDA-compliant portable diagnostic device for point-of-care testing with wireless data transmission.",
        fullDescription: {
          root: {
            type: "root",
            children: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Created a handheld medical diagnostic device for rapid testing in clinical settings. The device features precision sensors, secure data transmission, and compliance with medical device regulations. Includes custom injection-molded enclosure design.",
                  },
                ],
              },
            ],
          },
        },
        client: "MedTech Innovations",
        duration: "12 months",
        year: "2024",
        featured: true,
        order: 3,
        features: [
          { feature: "Multi-parameter testing" },
          { feature: "Secure cloud connectivity" },
          { feature: "Battery life: 500+ tests" },
          { feature: "FDA 510(k) cleared" },
        ],
        technologies: [
          { technology: "Medical-grade sensors" },
          { technology: "Bluetooth Low Energy" },
          { technology: "SolidWorks CAD" },
          { technology: "ISO 13485 process" },
        ],
        challenge:
          "Meeting stringent FDA requirements while creating a user-friendly device that healthcare professionals could operate reliably in various environments.",
        solution:
          "Implemented comprehensive validation testing, robust error handling, and designed an intuitive interface with visual and audio feedback.",
        results: [
          { metric: "FDA clearance", value: "First submission" },
          { metric: "Test accuracy", value: "99.2%" },
          { metric: "User satisfaction", value: "4.8/5" },
        ],
      },
      {
        title: "Automotive Sensor Module",
        slug: "automotive-sensor-module",
        description:
          "Ruggedized environmental sensor module for automotive applications with CAN bus integration.",
        fullDescription: {
          root: {
            type: "root",
            children: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Developed a compact sensor module for automotive applications capable of operating in extreme conditions. Features multi-sensor fusion, vibration resistance, and compliance with automotive standards.",
                  },
                ],
              },
            ],
          },
        },
        client: "AutoTech Systems",
        duration: "6 months",
        year: "2023",
        featured: false,
        order: 4,
        features: [
          { feature: "Temperature range: -40°C to 125°C" },
          { feature: "IP67 waterproof rating" },
          { feature: "Vibration resistant design" },
          { feature: "CAN 2.0B interface" },
        ],
        technologies: [
          { technology: "Automotive-grade components" },
          { technology: "ADAS testing" },
          { technology: "Eagle PCB" },
          { technology: "Conformal coating" },
        ],
        challenge:
          "Creating a reliable sensor that could withstand harsh automotive environments while maintaining accuracy across a wide temperature range.",
        solution:
          "Used automotive-grade components, implemented thermal management, and extensive environmental testing to ensure reliability.",
        results: [
          { metric: "Operating temperature", value: "-40°C to 125°C" },
          { metric: "MTBF", value: "50,000 hours" },
          { metric: "Production cost", value: "30% reduction" },
        ],
      },
    ];

    for (const project of projects) {
      const existing = await payload.find({
        collection: "projects",
        where: { slug: { equals: project.slug } },
        limit: 1,
      });

      if (existing.docs.length === 0) {
        await payload.create({
          collection: "projects",
          data: project as any,
        });
        console.log(`  ✓ Created project: ${project.title}`);
      }
    }

    // Update Globals
    console.log("🌍 Updating global settings...");

    // Company Info
    await payload.updateGlobal({
      slug: "company-info",
      data: {
        companyName: "Engineering Solutions Pro",
        email: "contact@engineeringsolutions.com",
        phone: "+1 (555) 123-4567",
        address: "123 Innovation Drive, Tech Valley, CA 94025",
        socialMedia: {
          linkedin: "https://linkedin.com/company/engineering-solutions",
          twitter: "https://twitter.com/engsolutions",
          github: "https://github.com/engsolutions",
        },
      },
    });
    console.log("  ✓ Updated company info");

    // Hero Section
    await payload.updateGlobal({
      slug: "hero-section",
      data: {
        title: "Engineering Excellence",
        subtitle: "Transforming Ideas into Reality",
        description:
          "We specialize in CAD modeling, PCB design, and rapid prototyping to bring your innovative products to life.",
        ctaText: "Start Your Project",
        ctaLink: "/contact",
        secondaryCtaText: "View Our Work",
        secondaryCtaLink: "/projects",
      },
    });
    console.log("  ✓ Updated hero section");

    // About Section
    await payload.updateGlobal({
      slug: "about-section",
      data: {
        title: "About Us",
        subtitle: "Engineering Experts You Can Trust",
        description:
          "With over 15 years of experience in mechanical engineering, electronics design, and product development, we help companies bring innovative products to market faster and more efficiently.",
        stats: [
          { label: "Projects Completed", value: "200+" },
          { label: "Years of Experience", value: "15+" },
          { label: "Client Satisfaction", value: "98%" },
          { label: "Industries Served", value: "12+" },
        ],
      },
    });
    console.log("  ✓ Updated about section");

    // Process Section
    await payload.updateGlobal({
      slug: "process-section",
      data: {
        title: "Our Process",
        subtitle: "From Concept to Creation",
        steps: [
          {
            number: "01",
            icon: "lightbulb",
            title: "Discovery & Planning",
            description:
              "We start by understanding your needs, requirements, and project goals through detailed consultation.",
          },
          {
            number: "02",
            icon: "design",
            title: "Design & Engineering",
            description:
              "Our team creates detailed CAD models, schematics, and technical documentation for your review.",
          },
          {
            number: "03",
            icon: "flask",
            title: "Prototyping & Testing",
            description:
              "We build and test prototypes to validate designs and ensure they meet all specifications.",
          },
          {
            number: "04",
            icon: "shield",
            title: "Production Support",
            description:
              "We provide manufacturing support and documentation to ensure smooth transition to production.",
          },
        ],
      },
    });
    console.log("  ✓ Updated process section");

    // Contact Section
    await payload.updateGlobal({
      slug: "contact-section",
      data: {
        title: "Get In Touch",
        subtitle: "Let's Build Something Amazing Together",
        description:
          "Ready to start your project? Contact us today for a free consultation and quote.",
        showContactInfo: true,
        showSocialMedia: true,
      },
    });
    console.log("  ✓ Updated contact section");

    // Footer Section
    await payload.updateGlobal({
      slug: "footer-section",
      data: {
        copyrightText:
          "© 2024 Engineering Solutions Pro. All rights reserved.",
        links: [
          { label: "Privacy Policy", url: "/privacy" },
          { label: "Terms of Service", url: "/terms" },
        ],
        showSocialMedia: true,
      },
    });
    console.log("  ✓ Updated footer section");

    // Projects Section
    await payload.updateGlobal({
      slug: "projects-section",
      data: {
        title: "Featured Projects",
        subtitle: "Showcasing Our Engineering Excellence",
        description:
          "Explore our portfolio of successful engineering projects across various industries.",
        showFeaturedOnly: true,
        projectsPerPage: 6,
      },
    });
    console.log("  ✓ Updated projects section");

    console.log("\n✅ Database seeding completed successfully!");
    console.log("\n📝 What was seeded:");
    console.log("   ✓ 6 Services");
    console.log("   ✓ 4 Testimonials");
    console.log("   ✓ 4 Projects (without hero images)");
    console.log(
      "   ✓ All Global Settings (Hero, About, Process, Contact, Footer, Projects Section, Company Info)"
    );
    console.log(
      "\n💡 Note: Projects were created without hero images. You can add images via /admin panel"
    );
    console.log("\n🔐 Admin credentials:");
    console.log("   Email: admin@example.com");
    console.log("   Password: password123");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }

  process.exit(0);
};

seed();
