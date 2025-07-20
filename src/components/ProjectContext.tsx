import React, { useState } from "react";
import { CardContent } from "./ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectContext = ({project}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <CardContent className="p-6">
      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
      <div>
        <p
          className={`text-muted-foreground mb-4 text-sm leading-relaxed transition-all duration-300 ${
            isExpanded ? "" : "line-clamp-4"
          }`}
        >
          {project.description}
        </p>
        {project.description.length > 150 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-500 text-sm font-medium hover:underline focus:outline-none mb-4"
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        )}
      </div>

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
          style={{ cursor: "pointer" }}
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
          style={{ cursor: "pointer" }}
        >
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </CardContent>
  );
};

export default ProjectContext;
