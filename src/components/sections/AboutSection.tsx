
import { Briefcase, Calendar, Code, Mail, Phone, User } from "lucide-react";

const AboutSection = () => {
  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+977 9844453285" },
    { icon: Mail, label: "Email", value: "ayushrestha8585@gmail.com" },
    { icon: User, label: "Location", value: "Kathmandu, Nepal" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-gray-700 mb-6">
              I am a passionate Full Stack Developer skilled in creating robust REST APIs and managing large projects. 
              As a disciplined, hardworking team player who is process-oriented, I enjoy tackling complex problems 
              and finding efficient solutions.
            </p>
            <p className="text-gray-700 mb-6">
              I'm currently looking for a long-term career in Web Development within a company that fosters 
              an open environment and great culture where I can continuously learn and contribute my skills and expertise.
            </p>
            <p className="text-gray-700">
              With experience across multiple technologies and frameworks including C#, PHP, Python, JavaScript, 
              and various front-end and back-end tools, I bring a versatile skill set to any development team.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-portfolio-dark">Contact Information</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="bg-portfolio-primary/10 p-2 rounded-full text-portfolio-primary mr-3">
                    <item.icon size={18} />
                  </span>
                  <div>
                    <span className="text-sm text-gray-500">{item.label}</span>
                    <p className="text-gray-800">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
