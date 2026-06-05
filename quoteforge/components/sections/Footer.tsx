import { Anvil, Mail } from "lucide-react";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#070E1A] border-t border-[#C9A84C15] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Logo + tagline */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-2 group" id="footer-logo">
              <div className="w-8 h-8 rounded-lg bg-[#C9A84C15] border border-[#C9A84C40] flex items-center justify-center">
                <Anvil className="w-4 h-4 text-[#C9A84C]" />
              </div>
              <span className="text-xl font-bold text-[#C9A84C]">QuoteForge</span>
            </a>
            <p className="text-[#6B7FA3] text-sm">Built for Indian Machinery Manufacturers</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#6B7FA3] hover:text-[#C9A84C] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Email */}
          <a
            href="mailto:contact@quoteforge.in"
            id="footer-email"
            className="flex items-center gap-2 text-sm text-[#6B7FA3] hover:text-[#C9A84C] transition-colors"
          >
            <Mail className="w-4 h-4" />
            contact@quoteforge.in
          </a>
        </div>

        <div className="border-t border-[#C9A84C10] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6B7FA3] text-xs">
            © 2026 QuoteForge. All rights reserved.
          </p>
          <p className="text-[#6B7FA3] text-xs">
            Made with ❤️ in Ahmedabad, India
          </p>
        </div>
      </div>
    </footer>
  );
}
