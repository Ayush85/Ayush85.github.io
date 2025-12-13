
import { Button } from "@/components/ui/button";
import { ChevronDown, Download } from "lucide-react";
import profileImage from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 -z-10"></div>
      
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-dark animate-slide-up">
              Hi, I'm <span className="text-portfolio-primary">Ayush Shrestha</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mt-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Full Stack Developer
            </h2>
            <p className="text-gray-600 mt-6 max-w-lg animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Passionate about creating robust web applications and managing large projects.
              A disciplined, hardworking team player who is process-oriented and enjoys problem-solving.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button asChild className="bg-portfolio-primary hover:bg-portfolio-primary/90">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#experience">View Experience</a>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a href="/cv.pdf" download="Ayush_Shrestha_CV.pdf">
                  <Download size={18} />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <img src={profileImage} alt="Ayush Shrestha" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll Down">
            <ChevronDown className="text-portfolio-primary" size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
