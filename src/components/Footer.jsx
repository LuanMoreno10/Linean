import { Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer id="contact" className="bg-white border-t border-gray-100 py-12 mt-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-xl font-display font-bold text-dark mb-2">LINEAN</h3>
                        <p className="text-gray-500 text-sm max-w-xs">
                            {t('footer.desc')}
                        </p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <a href="tel:912015415" className="flex items-center text-dark hover:text-primary-dark transition-colors">
                            <Phone size={18} className="mr-2" />
                            912 015 415
                        </a>
                        <a href="mailto:linean@outlook.pt" className="flex items-center text-dark hover:text-primary-dark transition-colors">
                            <Mail size={18} className="mr-2" />
                            linean@outlook.pt
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-100 mt-8 pt-8 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} {t('footer.rights')}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
