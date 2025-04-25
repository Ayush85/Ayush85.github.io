
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+977 9844453285",
      href: "tel:+9779844453285",
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "ayushrestha8585@gmail.com",
      href: "mailto:ayushrestha8585@gmail.com",
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/ayushshrestha85/",
    },
    {
      icon: <Github size={24} />,
      title: "GitHub",
      value: "Check my repositories",
      href: "https://github.com/Ayush85",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-portfolio-dark">
              Contact Information
            </h3>
            <p className="text-gray-700 mb-8 max-w-md">
              Feel free to reach out to me through any of the following channels. 
              I'm always open to discussing new projects, opportunities, or partnerships.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.title === "LinkedIn" || method.title === "GitHub" ? "_blank" : undefined}
                  rel={method.title === "LinkedIn" || method.title === "GitHub" ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  <Card className="border-none hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-4 flex items-start">
                      <div className="mr-4 text-portfolio-primary">{method.icon}</div>
                      <div>
                        <h4 className="font-medium text-portfolio-dark">{method.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{method.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-portfolio-dark">
                  Send Me a Message
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Subject" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message" rows={5} />
                  </div>
                  <Button type="submit" className="w-full bg-portfolio-primary hover:bg-portfolio-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
