import { useLanguage } from '../context/LanguageContext';

const FundamentalsSection = () => {
    const { t } = useLanguage();

    return (
        <section id="fundamentals" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="mb-12 text-left">
                    <h2 className="text-4xl font-display font-bold text-gray-400">{t('fundamentals.title')}</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-12 lg:gap-16">

                    {/* Pillar 1: Transparência */}
                    <div className="space-y-6 text-center group">
                        <h3 className="text-3xl font-display font-bold text-gray-400">{t('fundamentals.transparency_title')}</h3>
                        <div className="flex justify-center h-48 items-center">
                            <img
                                src="/transparenciapreto.png"
                                alt="Transparência"
                                className="h-full object-contain opacity-90 group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <p className="text-dark font-sans text-sm leading-relaxed text-justify">
                            {t('fundamentals.transparency_text')}
                        </p>
                    </div>

                    {/* Pillar 2: Rigor */}
                    <div className="space-y-6 text-center group">
                        <h3 className="text-3xl font-display font-bold text-gray-400">{t('fundamentals.rigor_title')}</h3>
                        <div className="flex justify-center h-48 items-center">
                            <img
                                src="/rigorpreto.png"
                                alt="Rigor"
                                className="h-full object-contain opacity-90 group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <p className="text-dark font-sans text-sm leading-relaxed text-justify">
                            {t('fundamentals.rigor_text')}
                        </p>
                    </div>

                    {/* Pillar 3: Resultados */}
                    <div className="space-y-6 text-center group">
                        <h3 className="text-3xl font-display font-bold text-gray-400">{t('fundamentals.results_title')}</h3>
                        <div className="flex justify-center h-48 items-center">
                            <img
                                src="/resultadospreto.png"
                                alt="Resultados"
                                className="h-full object-contain opacity-90 group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <p className="text-dark font-sans text-sm leading-relaxed text-justify">
                            {t('fundamentals.results_text')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FundamentalsSection;
