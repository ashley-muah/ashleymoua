import { Separator } from "@/components/ui/separator";
import { resumeData } from "@/lib/data/resume-data";

export function AboutSection() {
  const { personalInfo } = resumeData;

  return (
    <section id="about" className="pt-2 pb-6 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <Separator className="mb-6" />

        <p className="text-sm text-muted-foreground mb-4">
      I'm a student at UW Seattle studying Informatics and I make things happen. I am passionate about project management, program management, and marketing. I'm a creative thinker who loves seeing the bigger picture and building relationships with stakeholders + communities.
        </p>

        <ul className="space-y-2 text-sm text-muted-foreground">
          {
            personalInfo.abouts.slice(1).map((item, idx) => (
              <li key={idx}>• {item}</li>
            ))
          }
        </ul>
      </div>
    </section>
  );
}
