'use client';

import { useState } from 'react';
import TitleText from '@/ui/TitleText';
import ProjectCard from '@/ui/project-card';
import ProjectModal from '@/ui/project-modal';
import { portfolioProjects } from '@/constants/portfolio-projects';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const selectedProjectData = portfolioProjects.find(p => p.id === selectedProject);

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TitleText sectionClasses="text-center mb-12">Featured Projects</TitleText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project.id)}
            />
          ))}
        </div>
      </div>

      {selectedProject && selectedProjectData && (
        <ProjectModal
          project={selectedProjectData}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
