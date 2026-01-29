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

                {/* Diagonal Lines Pattern */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full border-b border-gray-500/30 transform -skew-y-12 origin-top-right scale-150"></div>
                    <div className="absolute bottom-0 right-0 w-full h-full border-t border-gray-500/30 transform -skew-y-12 origin-bottom-left scale-150"></div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-xl space-y-8 fade-in">
                    <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
                        {t('hero.title')}
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-primary hover:bg-white hover:text-primary text-white px-8 py-3 rounded-none font-medium transition-all duration-300 border border-transparent hover:border-primary">
                            {t('hero.cta')}
                        </button>
                        <button className="bg-accent text-dark hover:bg-white px-8 py-3 rounded-none font-medium transition-all duration-300">
                            {t('hero.cta')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
