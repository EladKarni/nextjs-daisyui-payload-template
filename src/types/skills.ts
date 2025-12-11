export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type SkillCategory = 'frontend' | 'backend' | 'mobile' | 'other';

export interface Skill {
  name: string;
  level: SkillLevel;
  category?: SkillCategory;
}
