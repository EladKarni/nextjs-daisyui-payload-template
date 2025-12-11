import TitleText from '@/ui/TitleText';
import WorkTimelineItem from '@/ui/work-timeline-item';
import { workExperience } from '@/constants/work-experience';

export default function WorkExperience() {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <TitleText sectionClasses="text-center mb-12">Work Experience</TitleText>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20" />

          <div className="space-y-12">
            {workExperience.map((job, index) => (
              <WorkTimelineItem
                key={`${job.company}-${job.startDate}`}
                job={job}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
