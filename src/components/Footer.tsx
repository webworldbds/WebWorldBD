import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, Send, ExternalLink, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { useLanguage } from '../contexts/LanguageContext';
import { Container } from './Container';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.services, path: '/services' },
    { label: t.nav.portfolio, path: '/portfolio' },
    { label: t.nav.certificates, path: '/certificates' },
    { label: t.nav.blog, path: '/blog' },
    { label: t.nav.pricing, path: '/pricing' },
    { label: t.nav.contact, path: '/contact' },
    { label: t.nav.hire, path: '/hire' },
  ];

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] transition-colors duration-200 mt-auto">
      <Container size="xl" className="py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Owner Info Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-white font-bold text-lg shadow-md">
                W
              </div>
              <span className="font-extrabold text-xl tracking-tight text-[var(--color-text)]">
                WebWorld<span className="text-[var(--color-primary)]">BD</span>
              </span>
            </div>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed font-medium">
              "{t.brand.tagline}"
            </p>
            <div className="pt-2 text-xs text-[var(--color-text-subtle)] space-y-1">
              <p className="font-semibold text-[var(--color-text-muted)]">{t.brand.owner}</p>
              <p>{t.brand.ownerTitle}</p>
              <p className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)] inline shrink-0" />
                {t.brand.location}
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text)] mb-4">
              {t.common.quickLinks}
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors inline-block py-1"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text)] mb-4">
              {t.common.contactInfo}
            </h3>
            <ul className="space-y-3 text-sm text-[var(--color-text-muted)]">
              <li>
                <span className="block text-xs text-[var(--color-text-subtle)] font-medium">
                  {t.common.email}
                </span>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-2 mt-0.5 break-all"
                >
                  <Mail className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li>
                <span className="block text-xs text-[var(--color-text-subtle)] font-medium">
                  {t.common.phoneWhatsapp}
                </span>
                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.phoneWhatsAppRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-2 mt-0.5"
                >
                  <Phone className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                  {SITE_CONFIG.contact.phoneWhatsApp}
                </a>
              </li>
              <li>
                <span className="block text-xs text-[var(--color-text-subtle)] font-medium">
                  {t.common.hotline}
                </span>
                <a
                  href={`tel:${SITE_CONFIG.contact.hotlineRaw}`}
                  className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-2 mt-0.5"
                >
                  <Phone className="w-4 h-4 text-[var(--color-secondary)] shrink-0" />
                  {SITE_CONFIG.contact.hotline}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links & Channels Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text)] mb-4">
              {t.common.followUs}
            </h3>
            <div className="space-y-2.5 text-sm">
              <a
                href={SITE_CONFIG.contact.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg border border-[var(--color-border)] hover:bg-[var(--color-surface-hover)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
              >
                <Send className="w-4 h-4 text-sky-500" />
                <span>Telegram Support</span>
                <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-50" />
              </a>

              <a
                href={SITE_CONFIG.contact.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg border border-[var(--color-border)] hover:bg-[var(--color-surface-hover)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
              >
                <span className="font-bold text-blue-600 text-base leading-none">f</span>
                <span>Facebook Page</span>
                <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-50" />
              </a>

              <a
                href={SITE_CONFIG.contact.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg border border-[var(--color-border)] hover:bg-[var(--color-surface-hover)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
              >
                <span className="font-bold text-xs uppercase tracking-tighter">TikTok</span>
                <span>TikTok Profile</span>
                <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-50" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 mt-12 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-text-subtle)]">
          <p>{t.common.copyright}</p>
          <p className="text-center sm:text-right">
            Designed & Developed with excellence by{' '}
            <span className="font-semibold text-[var(--color-text-muted)]">WebWorldBD</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};
