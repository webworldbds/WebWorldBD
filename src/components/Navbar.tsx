import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Sun, Moon, Globe, Menu, X, ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Container } from './Container';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.services, path: '/services' },
    { label: t.nav.portfolio, path: '/portfolio' },
    { label: t.nav.certificates, path: '/certificates' },
    { label: t.nav.blog, path: '/blog' },
    { label: t.nav.pricing, path: '/pricing' },
    { label: t.nav.contact, path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur-md transition-colors duration-200">
      <Container size="xl">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo / Brand */}
          <NavLink to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform duration-200">
              W
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[var(--color-text)] leading-none">
                WebWorld<span className="text-[var(--color-primary)]">BD</span>
              </span>
              <span className="text-[10px] text-[var(--color-text-muted)] tracking-wider uppercase font-medium mt-0.5">
                Digital Agency
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 font-medium text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'text-[var(--color-primary)] font-semibold bg-[var(--color-primary)]/10'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-hover)]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Header Controls & Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-surface-hover)] transition-colors cursor-pointer"
              title="Switch Language"
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              <span>{t.common.switchLang}</span>
            </button>

            {/* Dark/Light Mode Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-surface-hover)] transition-colors cursor-pointer"
              title={theme === 'dark' ? t.common.themeLight : t.common.themeDark}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Desktop CTA Button */}
            <div className="hidden sm:block">
              <NavLink to="/hire">
                <Button size="sm" icon={<ChevronRight className="w-4 h-4" />}>
                  {t.nav.hire}
                </Button>
              </NavLink>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-surface-hover)] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-[var(--color-border)] bg-[var(--color-surface)] px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'text-[var(--color-primary)] font-semibold bg-[var(--color-primary)]/10'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-hover)]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="pt-3 border-t border-[var(--color-border)]">
            <NavLink to="/hire" className="block w-full">
              <Button className="w-full" icon={<ChevronRight className="w-4 h-4" />}>
                {t.nav.hire}
              </Button>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};
