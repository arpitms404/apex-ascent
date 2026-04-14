import logo from "@/assets/logo-skilllogic.png";

const Footer = () => (
  <footer className="py-16 bg-foreground text-primary-foreground/80">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-1">
          <img src={logo} alt="SkillLogic Technologies" className="h-8 brightness-0 invert mb-4" />
          <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
            Engineering digital solutions that drive real business growth.
          </p>
        </div>

        {[
          {
            title: "Services",
            links: ["Website Development", "Mobile Apps", "Hospital ERP", "School ERP", "Banking Software"],
          },
          {
            title: "Company",
            links: ["About Us", "Our Process", "Careers", "Blog", "Contact"],
          },
          {
            title: "Connect",
            links: ["LinkedIn", "Twitter", "GitHub", "hello@skilllogic.in"],
          },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-display font-semibold text-primary-foreground text-sm mb-4">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-200">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} SkillLogic Technologies. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="font-body text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">Privacy Policy</a>
          <a href="#" className="font-body text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
