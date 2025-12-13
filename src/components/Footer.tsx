import { Github, Linkedin, Mail, Phone } from "lucide-react";
const Footer = () => {
  return <footer className="bg-portfolio-dark text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Ayush Shrestha

          </h2>
            <p className="mt-2 text-gray-400">Full Stack Developer based in Kathmandu, Nepal</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="mailto:ayushrestha8585@gmail.com" className="hover:text-portfolio-primary transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="tel:+9779844453285" className="hover:text-portfolio-primary transition-colors" aria-label="Phone">
              <Phone size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-primary transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Ayush Shrestha. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;