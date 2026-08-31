export type Language = 'en' | 'bn';

export interface TranslationDictionary {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    certificates: string;
    blog: string;
    pricing: string;
    contact: string;
    hire: string;
  };
  brand: {
    name: string;
    tagline: string;
    owner: string;
    ownerTitle: string;
    location: string;
  };
  common: {
    themeLight: string;
    themeDark: string;
    switchLang: string;
    getStarted: string;
    contactUs: string;
    learnMore: string;
    viewAll: string;
    loading: string;
    copyright: string;
    quickLinks: string;
    contactInfo: string;
    followUs: string;
    hotline: string;
    phoneWhatsapp: string;
    email: string;
    telegram: string;
    phase1Notice: string;
  };
  pages: {
    home: { title: string; subtitle: string };
    about: { title: string; subtitle: string };
    services: { title: string; subtitle: string };
    portfolio: { title: string; subtitle: string };
    certificates: { title: string; subtitle: string };
    blog: { title: string; subtitle: string };
    pricing: { title: string; subtitle: string };
    contact: { title: string; subtitle: string };
    hire: { title: string; subtitle: string };
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      certificates: 'Certificates',
      blog: 'Blog',
      pricing: 'Pricing',
      contact: 'Contact',
      hire: 'Hire Me',
    },
    brand: {
      name: 'WebWorldBD',
      tagline: 'Your Vision. Our Code. Your Digital Success.',
      owner: 'Shafaet Hossen Sarip',
      ownerTitle: 'Website & App Developer',
      location: 'Kushtia, Bangladesh',
    },
    common: {
      themeLight: 'Light Mode',
      themeDark: 'Dark Mode',
      switchLang: 'বাংলা',
      getStarted: 'Get Started',
      contactUs: 'Contact Us',
      learnMore: 'Learn More',
      viewAll: 'View All',
      loading: 'Loading...',
      copyright: '© 2025 WebWorldBD. All rights reserved.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Information',
      followUs: 'Connect With Us',
      hotline: 'Hotline',
      phoneWhatsapp: 'Phone / WhatsApp',
      email: 'Email',
      telegram: 'Telegram',
      phase1Notice: 'Phase 1 Scaffolding: Content structure ready for Phase 2 integration.',
    },
    pages: {
      home: {
        title: 'Building Modern Digital Experiences',
        subtitle: 'Professional web and app development tailored for your business growth.',
      },
      about: {
        title: 'About WebWorldBD',
        subtitle: 'Learn about our passion for code, modern design, and digital craftsmanship.',
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive software development solutions for web, mobile, and cloud.',
      },
      portfolio: {
        title: 'Selected Work',
        subtitle: 'Showcasing high quality web applications and digital products.',
      },
      certificates: {
        title: 'Certifications & Qualifications',
        subtitle: 'Verified skills and technical background.',
      },
      blog: {
        title: 'Articles & Insights',
        subtitle: 'Tutorials, tech updates, and development insights.',
      },
      pricing: {
        title: 'Transparent Pricing',
        subtitle: 'Flexible packages designed for startups, businesses, and custom builds.',
      },
      contact: {
        title: 'Get in Touch',
        subtitle: 'Have a project in mind? Reach out to discuss your ideas.',
      },
      hire: {
        title: 'Hire Shafaet Hossen Sarip',
        subtitle: 'Let us turn your digital vision into robust, scalable software.',
      },
    },
  },
  bn: {
    nav: {
      home: 'হোম',
      about: 'আমাদের সম্পর্কে',
      services: 'সার্ভিসসমূহ',
      portfolio: 'পোর্টফোলিও',
      certificates: 'সার্টিফিকেট',
      blog: 'ব্লগ',
      pricing: 'মূল্য নির্ধারণ',
      contact: 'যোগাযোগ',
      hire: 'হায়ার করুন',
    },
    brand: {
      name: 'WebWorldBD',
      tagline: 'আপনার স্বপ্ন, আমাদের কোড, আপনার ডিজিটাল সাফল্য।',
      owner: 'শাফায়েত হোসেন সারিপ',
      ownerTitle: 'ওয়েবসাইট ও অ্যাপ ডেভেলপার',
      location: 'কুষ্টিয়া, বাংলাদেশ',
    },
    common: {
      themeLight: 'লাইট মোড',
      themeDark: 'ডার্ক মোড',
      switchLang: 'English',
      getStarted: 'শুরু করুন',
      contactUs: 'যোগাযোগ করুন',
      learnMore: 'আরও জানুন',
      viewAll: 'সব দেখুন',
      loading: 'লোড হচ্ছে...',
      copyright: '© ২০২৫ WebWorldBD। সর্বস্বত্ব সংরক্ষিত।',
      quickLinks: 'দ্রুত লিংক',
      contactInfo: 'যোগাযোগের তথ্য',
      followUs: 'আমাদের সাথে যুক্ত থাকুন',
      hotline: 'হটলাইন',
      phoneWhatsapp: 'ফোন / হোয়াটসঅ্যাপ',
      email: 'ইমেইল',
      telegram: 'টেলিগ্রাম',
      phase1Notice: 'ফেজ ১ স্কাফোল্ডিং: ফেজ ২ কন্টেন্ট যুক্ত করার জন্য প্রস্তুত।',
    },
    pages: {
      home: {
        title: 'আধুনিক ডিজিটাল অভিজ্ঞতা তৈরি',
        subtitle: 'আপনার ব্যবসায়ের সাফল্যের জন্য পেশাদার ওয়েব ও অ্যাপ ডেভেলপমেন্ট।',
      },
      about: {
        title: 'WebWorldBD সম্পর্কে',
        subtitle: 'আমাদের কোডিং প্যাশন এবং আধুনিক ডিজাইন সম্পর্কে জানুন।',
      },
      services: {
        title: 'আমাদের সার্ভিসসমূহ',
        subtitle: 'ওয়েব, মোবাইল ও ক্লাউডের জন্য সম্পূর্ণ সফটওয়্যার সলিউশন।',
      },
      portfolio: {
        title: 'আমাদের কাজসমূহ',
        subtitle: 'উচ্চমানের ওয়েব অ্যাপ্লিকেশন এবং ডিজিটাল প্রোডাক্টের পরিচিতি।',
      },
      certificates: {
        title: 'সার্টিফিকেট ও যোগ্যতা',
        subtitle: 'যাচাইকৃত দক্ষতা এবং প্রযুক্তিগত অভিজ্ঞতা।',
      },
      blog: {
        title: 'আর্টিকেল ও বার্তা',
        subtitle: 'টিউটোরিয়াল, টেক আপডেট এবং ডেভেলপমেন্ট গাইড।',
      },
      pricing: {
        title: 'স্বচ্ছ মূল্য তালিকা',
        subtitle: 'স্টার্টআপ ও ব্যবসায়ের জন্য নমনীয় বিকাশ প্যাকেজ।',
      },
      contact: {
        title: 'যোগাযোগ করুন',
        subtitle: 'কোনো প্রজেক্ট নিয়ে আলোচনা করতে চান? আমাদের ইমেইল বা কল করুন।',
      },
      hire: {
        title: 'শাফায়েত হোসেন সারিপ-কে হায়ার করুন',
        subtitle: 'আপনার ডিজিটাল স্বপ্নকে বাস্তব এবং টেকসই সফটওয়্যারে রূপান্তর করুন।',
      },
    },
  },
};
