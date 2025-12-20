import { resumeData } from "@/lib/data/resume-data";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar } from "lucide-react";

export function ProjectsSection() {
  const { projects } = resumeData;

  return (
    <section id="projects" className="py-6 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <Separator className="mb-6" />

        <div className="space-y-4">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                  <CardTitle className="text-base">
                    {project.name}
                  </CardTitle>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{project.date}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Trophy className="h-4 w-4 text-primary" />
                    <h3 className="text-sm font-semibold">Achievements</h3>
                  </div>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
