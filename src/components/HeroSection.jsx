import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const HeroSection = () => {
    const { t } = useLanguage();

    return (
        <section className="relative h-screen flex items-center text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Background Image - Replace with your actual image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("/imagem-1.png")',
                    }}
                ></div>

                {/* Dark Overlay for opacity */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-xl space-y-8 fade-in">
                    <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
                        {t('hero.title')}
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-4">
                       <Link to="/budget" className="bg-accent text-dark hover:bg-gray-500 hover:text-white px-8 py-3 rounded-none font-medium transition-all duration-300 text-center">
                            {t('hero.cta')}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
