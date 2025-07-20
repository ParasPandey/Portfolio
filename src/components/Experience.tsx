import React from "react";
import exp1 from '@/assets/experience-1.jpg'

const experiences = [
  {
    role: "Software Engineer",
    company: "Nagarro",
    location: "Remote / India",
    duration: "2022 – Present",
    image: exp1,
    responsibilities: [
      "Led the end-to-end development of a scalable product licensing portal, allowing users and partners to seamlessly manage purchases, streamlining procurement, and improving product usage tracking.",
      "Implemented Redux Toolkit and React Query to simplify state management and async data handling, reducing debugging time by 30% and API redundancy by 25%.",
      "Integrated AG Grid to efficiently handle large, dynamic datasets with advanced features like sorting, filtering, and pagination, boosting data processing performance by 40%.",
      "Enhanced form performance using React Hook Form and optimized rendering with memoization techniques (React.memo, useMemo, useCallback), improving responsiveness and load time.",
      "Maintained high development standards with 90%+ unit test coverage, and ensured accessibility compliance for users of all abilities, improving overall product quality.",
      "Collaborated cross-functionally within Agile teams, mentoring juniors, contributing to design systems, and delivering pixel-perfect, accessible UIs across devices.",
    ],
    tech: [
      "React",
      "Redux Toolkit",
      "Javascript",
      "TypeScript",
      "React Query",
      "AG Grid",
      "SCSS",
      "React Form Hook",
      "Jest",
      "Material UI",
    ],
  },
  // You can add more experience objects as needed
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            My Experience
          </h2>
        </div>
        <div className="space-y-12 max-w-5xl mx-auto">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-muted rounded-xl shadow-sm p-8 md:p-10 flex flex-col md:flex-row"
            >
              <div className="md:w-1/4 mb-4 md:mb-0 flex flex-col items-center">
                <img
                  src={exp.image}
                  alt={exp.role}
                  className="w-40 h-40 mb-4 rounded-full object-cover shadow-md"
                />
                <h3 className="text-xl font-semibold mb-1 text-primary">
                  {exp.role}
                </h3>
                <p className="text-base text-muted-foreground">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.location}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {exp.duration}
                </p>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <ul className="list-disc list-outside pl-6 space-y-3 text-muted-foreground leading-relaxed text-base md:text-lg">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-accent text-xs font-medium px-4 py-2 rounded-md text-white  rounded-full text-lg font-semibold hover-lift cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
