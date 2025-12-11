import { WorkExperience } from '@/types/work-experience';

interface WorkTimelineItemProps {
  job: WorkExperience;
  index: number;
}

export default function WorkTimelineItem({ job, index }: WorkTimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Timeline dot */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-base-100 z-10" />

      {/* Content */}
      <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-primary">{job.company}</h3>
            <p className="font-semibold">{job.role}</p>
            <p className="text-sm text-base-content/60">
              {job.startDate} - {job.endDate}
            </p>
            <p className="mt-4 text-base-content/80">{job.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
