import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AboutSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);

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
                        Quem somos?
                    </h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed font-sans text-sm">
                        {/* Always visible paragraphs */}
                        <p>
                            <span className="font-bold italic">LINE-AN • Latin</span><br />
                            (n.) O nome LINEAN inspira-se no latim linea, que significa "alinhado", e nasce da fusão entre este conceito e a ideia de essência, evocando precisão, equilíbrio e continuidade. A sonoridade e a estética da marca foram concebidas para dialogar com a arquitectura moderna, sem perder o respeito pela elegância clássica que caracteriza a cidades portuguesas. Assim, a LINEAN posiciona-se como um nome que representa simultaneamente inovação e tradição, alinhando-se de forma perfeita com a harmonia visual e cultural da cidade.
                        </p>
                        {/* Expandable content - hidden on mobile unless expanded, always visible on desktop */}
                        <div className={`space-y-4 ${isExpanded ? 'block' : 'hidden'} md:block`}>
                            <p>
                                Na LINEAN, não actuamos como a imobiliária tradicional que conheces. Somos uma empresa de investimento imobiliário com foco em criar oportunidades sólidas e sustentáveis, valorizamos cada projecto com atenção ao detalhe e com uma visão estratégica.
                            </p>
                            <p>
                                Acreditamos que a confiança constrói-se com simplicidade e clareza. Por isso, mantemos uma comunicação directa, sem complicações, para que cada passo do processo seja transparente e de fácil compreensão.
                            </p>
                            <p>
                                Trabalhamos sempre de forma justa e equilibrada, asseguramos que tanto a empresa como o cliente alcançam resultados satisfatórios e duradouros.
                            </p>
                            <p>
                                Na LINEAN, cada investimento une segurança, qualidade e potencial de valorização, transformando património em valor real e construímos relações duradouras com cada parceiro.
                            </p>
                        </div>
                    </div>

                    {/* Expand/Collapse Button - Only visible on mobile */}
                    <div className="flex justify-center md:hidden pt-8">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="flex items-center gap-3 px-8 py-4 bg-primary text-white text-xs font-bold uppercase tracking-widest shadow-xl hover:shadow-2xl hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            <span>{isExpanded ? 'Ler menos' : 'Ler mais'}</span>
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
