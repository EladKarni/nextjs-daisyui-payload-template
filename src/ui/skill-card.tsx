import { Skill } from '@/types/skills';

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const levelColors = {
    beginner: 'badge-info',
    intermediate: 'badge-success',
    advanced: 'badge-warning',
    expert: 'badge-primary'
  };

  return (
    <div className="card bg-base-100 border border-base-300 hover:border-primary transition-colors">
      <div className="card-body items-center text-center p-6">
        <h3 className="font-semibold text-lg">{skill.name}</h3>

        <span className={`badge ${levelColors[skill.level]} badge-sm mt-2`}>
          {skill.level}
        </span>
      </div>
    </div>
  );
}
