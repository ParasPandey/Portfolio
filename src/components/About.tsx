import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive user interfaces and experiences'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Building fast, optimized applications for the best user experience'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams and communicating technical concepts'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate frontend developer with 3+ years of experience building 
            enterprise web applications. Currently working at TechCorp, contributing to 
            products that impact millions of users worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Currently working as a Frontend Developer at TechCorp, where I collaborate 
              with cross-functional teams to build and maintain React-based applications. 
              I focus on creating responsive, accessible user interfaces and optimizing performance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My role involves working closely with designers, backend developers, and product 
              managers to deliver features that enhance user experience. I also contribute to 
              our design system and mentor junior developers on the team.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                Problem Solver
              </span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                Team Player
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                Continuous Learner
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card key={index} className="hover-lift transition-smooth card-gradient border-0 shadow-card">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Fun Facts</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">25+</div>
              <div className="text-muted-foreground">Features Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">2M+</div>
              <div className="text-muted-foreground">Users Impacted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">∞</div>
              <div className="text-muted-foreground">Coffee Consumed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;