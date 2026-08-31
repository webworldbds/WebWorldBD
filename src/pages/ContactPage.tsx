import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { SITE_CONFIG } from '../config/site';
import { Mail, Phone, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12 sm:py-16">
      <Container size="lg">
        <SectionHeading
          badge="Contact"
          title={t.pages.contact.title}
          subtitle={t.pages.contact.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-3">
            <Mail className="w-8 h-8 text-[var(--color-primary)]" />
            <h3 className="font-bold text-lg text-[var(--color-text)]">{t.common.email}</h3>
            <p className="text-sm text-[var(--color-text-muted)] break-all">{SITE_CONFIG.contact.email}</p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-3">
            <Phone className="w-8 h-8 text-[var(--color-accent)]" />
            <h3 className="font-bold text-lg text-[var(--color-text)]">{t.common.phoneWhatsapp}</h3>
            <p className="text-sm text-[var(--color-text-muted)]">{SITE_CONFIG.contact.phoneWhatsApp}</p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-3">
            <Send className="w-8 h-8 text-sky-500" />
            <h3 className="font-bold text-lg text-[var(--color-text)]">{t.common.telegram}</h3>
            <p className="text-sm text-[var(--color-text-muted)]">saripsupportBD</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
