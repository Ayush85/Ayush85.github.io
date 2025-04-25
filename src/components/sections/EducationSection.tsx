
import { Card, CardContent } from "@/components/ui/card";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <Card className="border-none shadow-md mx-auto max-w-3xl">
          <CardContent className="p-6 flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6 md:border-r border-gray-200 flex flex-col items-center md:items-start justify-center">
              <span className="text-sm text-gray-500">2018 - 2023</span>
              <h3 className="text-xl font-semibold text-portfolio-dark mt-1">Bachelor in Computer Engineering</h3>
              <p className="text-gray-700 mt-1">Tribhuwan University, Nepal</p>
            </div>
            
            <div className="md:w-2/3 md:pl-6 flex items-center">
              <p className="text-gray-700">
                Completed Bachelor in Computer Engineering from Tribhuwan University, gaining a strong foundation in software development, algorithm design, data structures, and various programming languages. The coursework and projects helped me develop critical thinking and problem-solving skills essential for a career in software development.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;
