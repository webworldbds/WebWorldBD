import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';

export const CertificatesPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12 sm:py-16">
      <Container size="lg">
        <SectionHeading
          badge="Qualifications"
          title={t.pages.certificates.title}
          subtitle={t.pages.certificates.subtitle}
        />

        <div className="p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center space-y-4">
          <p className="text-base text-[var(--color-text-muted)] font-medium">
            {t.common.phase1Notice}
          </p>
          <p className="text-xs text-[var(--color-text-subtle)]">
            Verified skill credentials and polytechnic electronics certification details will be listed here in Phase 2.
          </p>
        </div>
      </Container>
    </div>
  );
};
