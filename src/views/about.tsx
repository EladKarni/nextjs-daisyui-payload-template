import Image from 'next/image';
import TitleText from '@/ui/TitleText';
import { personalInfo } from '@/constants/personal';
import { contactInfo } from '@/constants/contact-info';

export default function About() {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TitleText sectionClasses="text-center mb-12">About Me</TitleText>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:col-span-1">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bio and Details */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">Who Am I?</h3>
            <p className="text-base-content/80 mb-6 leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="font-semibold">Name:</p>
                <p className="text-base-content/70">{personalInfo.name}</p>
              </div>
              <div>
                <p className="font-semibold">Location:</p>
                <p className="text-base-content/70">
                  {contactInfo.location.city}, {contactInfo.location.state}
                </p>
              </div>
              <div>
                <p className="font-semibold">Phone:</p>
                <p className="text-base-content/70">{contactInfo.phone}</p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p className="text-base-content/70">{contactInfo.email}</p>
              </div>
            </div>

            <div className="flex gap-4 flex-wrap">
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn btn-primary"
              >
                Download Resume
              </a>
              <a
                href="#portfolio"
                className="btn btn-outline btn-secondary"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
