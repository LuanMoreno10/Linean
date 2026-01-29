import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AboutSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { t } = useLanguage();

    return (
        <section id="about" className="py-20 bg-[#E8DCC8]">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
                {/* Image Side - Left */}
                <div className="">
                    <div className="relative w-full aspect-square border-2 border-gray-800 overflow-hidden">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: 'url("/imagem2.png")',
                            }}
                        ></div>
                    </div>
                </div>

                {/* Text Side - Right */}
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-600">
                        {t('about.title')}
                    </h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed font-sans text-sm">
                        {/* Always visible paragraphs */}
                        <p>
                            <span className="font-bold italic">{t('about.p1_title')}</span><br />
                            {t('about.p1_text')}
                        </p>
                        {/* Expandable content - hidden on mobile unless expanded, always visible on desktop */}
                        <div className={`space-y-4 ${isExpanded ? 'block' : 'hidden'} md:block`}>
                            <p>
                                {t('about.p2')}
                            </p>
                            <p>
                                {t('about.p3')}
                            </p>
                            <p>
                                {t('about.p4')}
                            </p>
                            <p>
                                {t('about.p5')}
                            </p>
                        </div>
                    </div>

                    {/* Expand/Collapse Button - Only visible on mobile */}
                    <div className="flex justify-center md:hidden pt-8">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="flex items-center gap-3 px-8 py-4 bg-primary text-white text-xs font-bold uppercase tracking-widest shadow-xl hover:shadow-2xl hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            <span>{isExpanded ? t('about.read_less') : t('about.read_more')}</span>
                            <ChevronDown
                                size={14}
                                className={`transition-transform duration-500 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
