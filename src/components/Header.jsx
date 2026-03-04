import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);
    const location = useLocation();
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const isHome = location.pathname === '/';

    // Header background logic: White if scrolled or not on home, Transparent if on home and top
    const headerClass = `fixed w-full z-50 transition-all duration-300 ${isScrolled || !isHome || isMenuOpen ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'
        }`;

    const linkClass = `text-sm font-medium transition-colors hover:text-primary ${isScrolled || !isHome || isMenuOpen ? 'text-dark' : 'text-white'
        }`;

    return (
        <header className={headerClass}>
            <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
                <a href="/" className={`text-2xl font-display font-bold tracking-tight transition-colors ${isScrolled || !isHome || isMenuOpen ? 'text-[#878787]' : 'text-white'}`}>
                    LINEAN
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="/#about" className={linkClass}>{t('header.about')}</a>

                    {/* Grupo LINEAN Dropdown */}
                    <div className="relative group">
                        <button className={`${linkClass} flex items-center space-x-1 outline-none`}>
                            <span>{t('header.group')}</span>
                            <ChevronDown size={14} />
                        </button>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-sm py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-left border-t-2 border-primary">
                            <Link to="/construtora" className="block px-6 py-3 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors">
                                {t('header.services.construction')}
                            </Link>
                            <Link to="/arquitetura" className="block px-6 py-3 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors">
                                {t('header.services.architecture')}
                            </Link>
                            <Link to="/mediacao-imobiliaria" className="block px-6 py-3 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors">
                                {t('header.services.realestate')}
                            </Link>
                        </div>
                    </div>

                    <a href="/#contact" className={linkClass}>{t('header.contact')}</a>
                    <a href="/faq" className={linkClass}>{t('header.faq')}</a>
                    <button onClick={toggleLanguage} className={linkClass}>
                        <span className={language === 'pt' ? 'font-bold' : 'font-normal'}>PT</span>
                        <span className="mx-1">|</span>
                        <span className={language === 'en' ? 'font-bold' : 'font-normal'}>EN</span>
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden relative z-50 ${isScrolled || !isHome || isMenuOpen ? 'text-dark' : 'text-white'}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="md:hidden fixed inset-0 top-0 left-0 w-full h-[100dvh] bg-white z-40 pt-28 px-6 flex flex-col overflow-y-auto pb-8"
                    >
                        <nav className="flex flex-col space-y-6 text-2xl font-medium mt-4">
                            <a href="/#about" className="text-dark hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                                {t('header.about')}
                            </a>

                            <div className="flex flex-col space-y-4">
                                <button
                                    className="flex items-center justify-between w-full text-dark hover:text-primary transition-colors text-left"
                                    onClick={() => setIsMobileSubmenuOpen(!isMobileSubmenuOpen)}
                                >
                                    <span>{t('header.group')}</span>
                                    <motion.div
                                        animate={{ rotate: isMobileSubmenuOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown size={24} />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {isMobileSubmenuOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-4 border-l-2 border-primary/20 flex flex-col space-y-4 py-2 mt-2">
                                                <Link to="/construtora" className="text-xl text-gray-600 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                                                    {t('header.services.construction')}
                                                </Link>
                                                <Link to="/arquitetura" className="text-xl text-gray-600 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                                                    {t('header.services.architecture')}
                                                </Link>
                                                <Link to="/mediacao-imobiliaria" className="text-xl text-gray-600 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                                                    {t('header.services.realestate')}
                                                </Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <a href="/#contact" className="text-dark hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                                {t('header.contact')}
                            </a>
                            <a href="/faq" className="text-dark hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                                {t('header.faq')}
                            </a>
                        </nav>

                        <div className="mt-auto pt-10">
                            <div className="flex items-center space-x-4 border-t border-gray-100 pt-6">
                                <button
                                    onClick={() => { if (language !== 'pt') toggleLanguage(); setIsMenuOpen(false); }}
                                    className={`text-lg transition-colors ${language === 'pt' ? 'font-bold text-primary' : 'text-gray-500 hover:text-dark'}`}
                                >
                                    PT
                                </button>
                                <span className="text-gray-300">|</span>
                                <button
                                    onClick={() => { if (language !== 'en') toggleLanguage(); setIsMenuOpen(false); }}
                                    className={`text-lg transition-colors ${language === 'en' ? 'font-bold text-primary' : 'text-gray-500 hover:text-dark'}`}
                                >
                                    EN
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
