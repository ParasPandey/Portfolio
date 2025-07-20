import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code following best practices",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating beautiful, intuitive user interfaces and experiences",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Building fast, optimized applications for the best user experience",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working effectively in teams and communicating technical concepts",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-center">
            {/* Profile Photo */}
            <img
              src="/src/assets/my-pic.JPEG" // Replace with your actual photo path
              alt="Paras Pandey"
              className="w-52 h-52 md:w-60 md:h-60 aspect-square rounded-full object-cover shadow-lg mb-6 md:mb-0 md:mr-10"
              style={{ display: "block" }}
            />
            {/* About Me Text */}
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed text-left">
              As a frontend engineer at Nagarro, I’m passionate about
              transforming complex concepts into intuitive, responsive digital
              experiences. With a solid foundation in computer science and deep
              expertise in JavaScript, React, and modern web technologies, I
              excel at building scalable, high-performance applications with
              polished design. My commitment to clean, maintainable code and
              continuous learning drives me to adopt the latest tools and best
              practices in web development. I love tackling real-world
              challenges and enjoy collaborating to deliver products that truly
              make an impact for users around the globe.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 mt-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              My journey as a frontend developer has been driven by a passion
              for crafting seamless digital experiences and solving real-world
              challenges with technology. At Nagarro, I work alongside diverse
              teams to architect and maintain robust React applications that
              blend performance with polished design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I thrive on building intuitive, responsive user interfaces while
              championing accessibility and web best practices. Whether
              collaborating with designers, engineers, or product managers, I
              aim to deliver features that truly elevate user experience. Beyond
              coding, I contribute to our design system and enjoy mentoring
              teammates, fostering a culture of growth and continuous
              improvement.
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
              <Card
                key={index}
                className="hover-lift transition-smooth card-gradient border-0 shadow-card"
              >
                <CardContent className="p-6 text-center">
                  <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
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
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-muted-foreground">Features Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">2M+</div>
              <div className="text-muted-foreground">Users Impacted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">∞</div>
              <div className="text-muted-foreground">Tea Consumed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
