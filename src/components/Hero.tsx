import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const openResume = () => {
    window.open(
      "https://drive.google.com/drive/folders/1yP7o6912PpFxjuCWCDwACQYaughy3nLZ?usp=sharing",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Hero Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="text-gradient animate-float">Paras Pandey</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Frontend Developer at Nagarro
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Frontend developer specializing in React and modern web
            technologies. Building scalable user interfaces and contributing to
            enterprise applications that serve thousands of users.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              onClick={scrollToProjects}
              className="hero-gradient hover-glow text-white px-8 py-3 rounded-full text-lg font-semibold"
            >
              View My Work
            </Button>
            <Button
              onClick={openResume}
              className="hero-gradient hover-glow text-white px-8 py-3 rounded-full text-lg font-semibold"
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
            <Button
              onClick={scrollToContact}
              className="hero-gradient hover-glow text-white px-8 py-3 rounded-full text-lg font-semibold"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/ParasPandey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover-lift"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/paras-pandey-b938b3183/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover-lift"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:pparas923@gmail.com"
              className="text-muted-foreground hover:text-primary transition-smooth hover-lift"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 animate-float" />
      <div
        className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-accent/10 animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-20 w-12 h-12 rounded-full bg-primary/5 animate-float"
        style={{ animationDelay: "2s" }}
      />
    </section>
  );
};

export default Hero;
