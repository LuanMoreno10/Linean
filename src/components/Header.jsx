import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

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

    const isHome = location.pathname === '/';

    // Header background logic: White if scrolled or not on home, Transparent if on home and top
    const headerClass = `fixed w-full z-50 transition-all duration-300 ${isScrolled || !isHome ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'
        }`;

    const linkClass = `text-sm font-medium transition-colors hover:text-primary ${isScrolled || !isHome ? 'text-dark' : 'text-white'
        }`;

    return (
        <header className={headerClass}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="/" className={`text-2xl font-display font-bold tracking-tight transition-colors ${isScrolled || !isHome ? 'text-[#878787]' : 'text-white'}`}>
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
                            <a href="#" className="block px-6 py-3 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors">
                                {t('header.services.construction')}
                            </a>
                            <a href="#" className="block px-6 py-3 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors">
                                {t('header.services.credit')}
                            </a>
                            <a href="#" className="block px-6 py-3 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors">
                                {t('header.services.financing')}
                            </a>
                            <a href="#" className="block px-6 py-3 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors">
                                {t('header.services.realestate')}
                            </a>
                        </div>
                    </div>

                    <a href="/#contact" className={linkClass}>{t('header.contact')}</a>
                    <a href="/faq" className={linkClass}>{t('header.faq')}</a>
                    <button onClick={toggleLanguage} className={linkClass}>
                        PT | EN
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden ${isScrolled || !isHome ? 'text-dark' : 'text-white'}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4">
                    <a href="/#about" className="text-dark hover:text-primary" onClick={() => setIsMenuOpen(false)}>{t('header.about')}</a>
                    <div>
                        <button
                            className="flex items-center justify-between w-full text-dark hover:text-primary"
                            onClick={() => setIsMobileSubmenuOpen(!isMobileSubmenuOpen)}
                        >
                            <span>{t('header.group')}</span>
                            <ChevronDown size={16} className={`transform transition-transform ${isMobileSubmenuOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isMobileSubmenuOpen && (
                            <div className="pl-4 mt-2 flex flex-col space-y-2 border-l-2 border-gray-100 ml-1">
                                <a href="#" className="text-sm text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>{t('header.services.construction')}</a>
                                <a href="#" className="text-sm text-gray-600 hover:text-primary" onClick={() => setIsMenuOpen(false)}>{t('header.services.financing')}</a>
                            </div>
                        )}
                    </div>
                    <a href="/#contact" className="text-dark hover:text-primary" onClick={() => setIsMenuOpen(false)}>{t('header.contact')}</a>
                    <a href="/faq" className="text-dark hover:text-primary" onClick={() => setIsMenuOpen(false)}>{t('header.faq')}</a>
                    <button onClick={() => { toggleLanguage(); setIsMenuOpen(false); }} className="text-left text-dark hover:text-primary font-bold">
                        PT | EN
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
