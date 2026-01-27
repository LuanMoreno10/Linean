import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

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
                {/* Logo */}
                <Link to="/" className="text-2xl font-display font-bold text-primary tracking-tight">
                    LINEAN
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="/#about" className={linkClass}>Quem somos</a>
                    <a href="/#team" className={linkClass}>Grupo LINEAN</a>
                    <a href="/#contact" className={linkClass}>Contactos</a>
                    <Link to="/faq" className={linkClass}>FAQ'S</Link>
                    <button className={linkClass}>PT | EN</button>
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
                    <a href="/#about" className="text-dark hover:text-primary" onClick={() => setIsMenuOpen(false)}>Quem somos</a>
                    <a href="/#team" className="text-dark hover:text-primary" onClick={() => setIsMenuOpen(false)}>Grupo LINEAN</a>
                    <a href="/#contact" className="text-dark hover:text-primary" onClick={() => setIsMenuOpen(false)}>Contactos</a>
                    <Link to="/faq" className="text-dark hover:text-primary" onClick={() => setIsMenuOpen(false)}>FAQ'S</Link>
                </div>
            )}
        </header>
    );
};

export default Header;
