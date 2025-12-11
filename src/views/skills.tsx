import TitleText from '@/ui/TitleText';
import SubtitleText from '@/ui/SubtitleText';
import SkillCard from '@/ui/skill-card';
import { skills } from '@/constants/skills';

export default function Skills() {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TitleText sectionClasses="text-center mb-4">Technical Skills</TitleText>
        <SubtitleText sectionClasses="text-center mb-12 max-w-3xl mx-auto">
          Throughout my career, I&apos;ve gained experience with a diverse range of
          technologies and frameworks across web development, mobile applications,
          and software engineering.
        </SubtitleText>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
