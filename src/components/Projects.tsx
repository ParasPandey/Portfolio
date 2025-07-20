import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import ProjectContext from "./ProjectContext";

const Projects = () => {
  const projects = [
    {
      title: "Scalable Product Licensing Portal",
      description:
        "Designed and developed a scalable product licensing portal from the ground up, enabling users and partners to efficiently purchase and manage licenses. The portal streamlined procurement workflows and improved product usage tracking, significantly enhancing operational efficiency.",
      image: project1,
      technologies: [
        "React",
        "Redux Toolkit",
        "React Query",
        "React Form Hook",
        "Typescript",
        "JavaScript",
        "Tailwind CSS",
        "AG Grid",
      ],
      liveUrl: null,
      githubUrl: null,
    },
    {
      title: "STYLE LOFT - ONLINE STORE",
      description:
        "Developed a scalable, full-stack e-commerce platform for branded apparel, enabling users to browse, purchase, and manage stylish clothing across multiple popular brands. Designed and implemented the entire database schema to manage products, users, and orders, ensuring smooth procurement workflows and comprehensive product usage tracking. Built a user-friendly and responsive UI in React, integrated RESTful APIs built with Node.js for reliable backend operations, and implemented real-time updates with Firebase. Integrated Razorpay for secure payments, and enabled email notifications upon successful registration for enhanced user engagement.",
      image: project2,
      technologies: [
        "React",
        "Redux Toolkit",
        "Express.js",
        "MongoDB",
        "HTML5",
        "JavaScript",
        "CSS3",
        "Razorpay",
      ],
      liveUrl: null,
      githubUrl: null,
    },
    {
      title: "MovieBox - TMDB Explorer",
      description:
        "Developed a dynamic web application that fetches and displays movies, web series, and shows from the TMDB API. Features include Google authentication (via Firebase), real-time user profile and subscription management, and a fully responsive UI. Users can explore detailed information about each title, including trailers and additional videos, for a comprehensive viewing experience.",
      image: project3,
      technologies: [
        "React",
        "Firebase Authentication",
        "Firebase Realtime Database",
        "TMDB API",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Responsive Design",
      ],
      liveUrl: null,
      githubUrl: null,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A mix of professional work at Nagarro and personal projects that
            showcase my frontend development skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover-lift transition-smooth card-gradient border-0 shadow-card overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>

            <ProjectContext project={project}/>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="px-8 py-3 rounded-full text-lg font-semibold hover-lift"
            asChild
          >
            <a
              href="https://github.com/ParasPandey?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
