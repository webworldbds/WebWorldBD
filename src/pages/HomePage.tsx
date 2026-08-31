import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Code2, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12 sm:py-20">
      <Container size="lg">
        {/* Hero Banner Scaffolding */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 text-xs font-semibold text-[var(--color-primary)]">
            <Sparkles className="w-4 h-4" />
            <span>Phase 1 Scaffolding & Design System</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-text)] tracking-tight leading-tight">
            {t.pages.home.title}
          </h1>

          <p className="text-lg sm:text-xl text-[var(--color-text-muted)] font-normal leading-relaxed">
            {t.pages.home.subtitle}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <NavLink to="/hire">
              <Button size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                {t.nav.hire}
              </Button>
            </NavLink>
            <NavLink to="/portfolio">
              <Button variant="outline" size="lg">
                {t.nav.portfolio}
              </Button>
            </NavLink>
          </div>
        </div>

        {/* Feature Highlights Grid Scaffolding */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text)]">Clean & Scalable Code</h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Architected using React, TypeScript, and modern modular patterns for high reliability.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text)]">Lightning Performance</h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Optimized styling tokens and responsive layouts tuned for all mobile & desktop viewports.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 text-cyan-600 dark:text-[var(--color-accent)] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text)]">Bilingual Foundation</h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Full English and Bangla translation dictionary with persisted user language selection.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
