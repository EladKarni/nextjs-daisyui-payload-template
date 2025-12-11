'use client';

import Image from 'next/image';
import Button from './button';
import { PortfolioProject } from '@/types/portfolio';

interface ProjectModalProps {
  project: PortfolioProject;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-base-100 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-96">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 btn btn-circle btn-sm"
          >
            ✕
          </button>
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="badge badge-primary">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-base-content/80 mb-6">
            {project.fullDescription}
          </p>

          <div className="flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Live Site
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
