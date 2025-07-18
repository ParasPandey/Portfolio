import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Analytics Dashboard',
      description: 'A comprehensive analytics dashboard built with React and D3.js featuring real-time data visualization, interactive charts, and customizable reports.',
      image: project1,
      technologies: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin panel. Built for scalability and performance.',
      image: project2,
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS', 'Vercel'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration features, and mobile-responsive design.',
      image: project3,
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript', 'Expo'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover-lift transition-smooth card-gradient border-0 shadow-card overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 hero-gradient text-white hover-glow"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="hover-lift"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="px-8 py-3 rounded-full text-lg font-semibold hover-lift"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;