import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { SITE_CONFIG } from '../config/site';

export const HirePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12 sm:py-16">
      <Container size="lg">
        <SectionHeading
          badge="Hire Developer"
          title={t.pages.hire.title}
          subtitle={t.pages.hire.subtitle}
        />

        <div className="p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center space-y-4">
          <p className="text-base text-[var(--color-text-muted)] font-medium">
            Ready to initiate a project with {SITE_CONFIG.owner.name}?
          </p>
          <p className="text-xs text-[var(--color-text-subtle)]">
            Full project onboarding form and requirements wizard will be integrated in Phase 2.
          </p>
        </div>
      </Container>
    </div>
  );
};
