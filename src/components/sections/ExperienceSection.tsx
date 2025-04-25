
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Mentor Friends Pvt. Ltd.",
      position: "Full Stack Developer",
      period: "Dec 2024 – Present",
      responsibilities: [
        "Developed FreeSchemaAccessControl, a scalable access control system.",
        "Integrated MQTT for real-time synchronization.",
        "Created a custom CI/CD system for automation.",
        "Maintained Freeschema backend and C# packages.",
      ],
    },
    {
      company: "Urban Nepal Consulting Pvt. Ltd.",
      position: "Full Stack Developer",
      period: "Jun 2023 – Sep 2024",
      responsibilities: [
        "Built features for the Optix SAAS application.",
        "Used Django to scale backend systems.",
        "Managed file storage with Digital Ocean Spaces.",
      ],
    },
    {
      company: "Logicseed",
      position: "Jr. Full Stack Developer",
      period: "Feb 2023 – Jun 2023",
      responsibilities: [
        "Maintained HR System and Upaya Business Solution.",
      ],
    },
    {
      company: "Logicseed",
      position: "Intern",
      period: "Nov 2022 – Jan 2023",
      responsibilities: [
        "Developed Ledger Module and Election Data App.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-portfolio-primary before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-portfolio-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="text-white">{index + 1}</span>
              </div>
              
              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-lg font-semibold text-portfolio-dark">
                    {exp.position}
                  </CardTitle>
                  <CardDescription>
                    {exp.company} | {exp.period}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600 text-sm">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
