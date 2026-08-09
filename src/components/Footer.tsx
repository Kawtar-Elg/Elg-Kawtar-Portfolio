const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold tracking-tight mb-2 inline-block">
              Kawtar<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground">
              Mobile App Developer & UI/UX Designer
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>&copy; {currentYear} Kawtar El Gaddi. All rights reserved.</p>
            <p className="mt-1">Designed & Built with passion.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;