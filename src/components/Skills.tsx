import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "Javascript", level: 90 },
        { name: "React", level: 95 },
        { name: "Redux", level: 80 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 60 },
        { name: "Next.js", level: 50 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 40 },
        { name: "MongoDB", level: 40 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Figma", level: 80 },
        { name: "Jest", level: 80 },
      ],
    },
  ];

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className="hero-gradient h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="hover-lift transition-smooth card-gradient border-0 shadow-card"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-center">
                  {category.title}
                </h3>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Javascript",
              "Material UI",
              "React",
              "React Query",
              "Redux",
              "Next.js",
              "TypeScript",
              'Tailwind CSS',
              "Jest",
              "Git",
            ].map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-muted/50 rounded-full text-sm font-medium hover-lift transition-smooth"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
