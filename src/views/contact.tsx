'use client';

import TitleText from '@/ui/TitleText';
import ContactForm from '@/ui/contact-form';
import { contactInfo } from '@/constants/contact-info';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TitleText sectionClasses="text-center mb-12">Get In Touch</TitleText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send Me A Message</h3>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-base-content/70">
                    {contactInfo.location.city}, {contactInfo.location.state}
                    <br />
                    {contactInfo.location.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a
                    href={contactInfo.phoneLink}
                    className="text-base-content/70 hover:text-primary"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href={contactInfo.emailLink}
                    className="text-base-content/70 hover:text-primary"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-base-200 rounded-lg">
              <p className="text-base-content/80">
                I&apos;m always interested in hearing about new opportunities and
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
