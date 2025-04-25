
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C#", "PHP", "Python", "JavaScript"],
    },
    {
      title: "Backend Frameworks",
      skills: ["DotNet", "Django", "Node.js", "Core PHP"],
    },
    {
      title: "Frontend Technologies",
      skills: ["React", "HTML", "CSS", "jQuery"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Docker", "DigitalOcean", "Supabase", "Jira", "Swagger"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-portfolio-dark">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
