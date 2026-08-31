import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';

export const ServicesPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12 sm:py-16">
      <Container size="lg">
        <SectionHeading
          badge="Services"
          title={t.pages.services.title}
          subtitle={t.pages.services.subtitle}
        />

        <div className="p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center space-y-4">
          <p className="text-base text-[var(--color-text-muted)] font-medium">
            {t.common.phase1Notice}
          </p>
          <p className="text-xs text-[var(--color-text-subtle)]">
            Full service offerings (Web Development, Mobile Apps, Custom APIs, Maintenance) will be integrated in Phase 2.
          </p>
        </div>
      </Container>
    </div>
  );
};
