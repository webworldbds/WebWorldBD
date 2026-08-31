import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { SITE_CONFIG } from '../config/site';

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12 sm:py-16">
      <Container size="lg">
        <SectionHeading
          badge="About Us"
          title={t.pages.about.title}
          subtitle={t.pages.about.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-4">
            <h3 className="text-xl font-bold text-[var(--color-text)]">
              {SITE_CONFIG.owner.name}
            </h3>
            <p className="text-sm font-semibold text-[var(--color-primary)]">
              {SITE_CONFIG.owner.title} — {SITE_CONFIG.owner.location}
            </p>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              {SITE_CONFIG.owner.education}. Over 1 year of hands-on experience in HTML, CSS, JavaScript, Node.js, Python, Firebase, databases, and authentication systems with a long-standing passion for building high performance web applications.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-4">
            <h3 className="text-xl font-bold text-[var(--color-text)]">Our Vision & Mission</h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              At WebWorldBD, our mission is to empower businesses and individuals with robust, modern, and accessible software solutions. We deliver top-tier code quality, modern UX designs, and responsive interfaces.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
