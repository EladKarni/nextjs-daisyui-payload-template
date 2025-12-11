import Image from 'next/image';
import { cn } from '@/util/utils';
import { PortfolioProject } from '@/types/portfolio';

interface ProjectCardProps {
  project: PortfolioProject;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
    >
      <figure className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
          <span className="text-white opacity-0 group-hover:opacity-100 text-lg font-semibold">
            View Details
          </span>
        </div>
      </figure>

      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p className="text-base-content/70">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map(tag => (
            <span key={tag} className="badge badge-primary badge-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
