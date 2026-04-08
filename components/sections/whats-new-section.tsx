import { Separator } from "@/components/ui/separator";
import { resumeData } from "@/lib/data/resume-data";

export function WhatsNewSection() {
  const { personalInfo } = resumeData;

  return (
    <section id="whats-new" className="pt-2 pb-6 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">What&apos;s New With Me?</h2>
        <Separator className="mb-6" />

        <p className="text-sm text-muted-foreground mb-4">
          Read about me! <a href="https://waopportunityscholarship.org/get-involved/news/ashleys-journey-from-uncertainity-to-opportunity/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Ashley&apos;s Journey from Uncertainty to Opportunity</a>
        </p>

        <ul className="space-y-2 text-sm text-muted-foreground">
          {personalInfo.whatsNew.map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}