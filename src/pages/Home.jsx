import { ArrowRight, Box, Shield, TrendingUp } from 'lucide-react';

const Home = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center bg-dark text-white overflow-hidden">
                {/* Abstract Background - mimicking the diagonal lines/shapes from prototype */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#1a1a1a]"></div>
                    {/* Diagonal Line */}
                    <div className="absolute top-0 left-0 w-full h-full border-b border-gray-700 transform -skew-y-12 origin-top-right scale-150 opacity-20"></div>
                    <div className="absolute bottom-0 right-0 w-full h-full border-t border-gray-700 transform -skew-y-12 origin-bottom-left scale-150 opacity-20"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 fade-in">
                        <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
                            Valorizamos imóveis e <br/>
                            <span className="text-gray-400">protegemos o seu investimento</span>
                        </h1>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-primary hover:bg-white hover:text-primary text-white px-8 py-3 rounded-none font-medium transition-all duration-300 border border-transparent hover:border-white">
                                Pedir orçamento
                            </button>
                            <button className="bg-accent text-dark hover:bg-white px-8 py-3 rounded-none font-medium transition-all duration-300">
                                Saber mais
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:flex justify-center items-center h-full relative">
                        {/* Placeholder for Hero Image */}
                        <div className="w-full h-96 bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-500">
                            Imagem 1
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-accent/20">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <div className="w-full aspect-square bg-gray-200 flex items-center justify-center border border-gray-300">
                            Imagem 2
                        </div>
                    </div>
                    <div className="order-1 md:order-2 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-dark">Quem somos?</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed font-sans">
                            <p>
                                <span className="font-bold">LINE-AN • Latin</span><br />
                                (n.) O nome LINEAN inspira-se no latim linea, que significa "alinhado", e nasce da fusão entre este conceito e a ideia de essência, evocando precisão, equilíbrio e continuidade.
                            </p>
                            <p>
                                Na LINEAN, não actuamos como a imobiliária tradicional que conheces. Somos uma empresa de investimento imobiliário com foco em criar oportunidades sólidas e sustentáveis.
                            </p>
                            <p>
                                Trabalhamos sempre de forma justa e equilibrada, asseguramos que tanto a empresa como o cliente alcançam resultados satisfatórios e duradouros.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-display font-bold text-dark">Equipa LINEAN</h2>
                            <div>
                                <h3 className="text-xl font-bold">William Santos</h3>
                                <p className="text-gray-500">Gerente e Gestor comercial</p>
                            </div>
                            <p className="text-gray-600">
                                Trabalho com imobiliário à quase 9 anos, e ao analisar o mercado imobiliário não só em Portugal, mas em diversos países... A LINEAN nasceu de um desejo sincero de ser única na sua metodologia e influência.
                            </p>
                            <div className="pt-4">
                                <p className="font-bold text-lg">Vai ter mais gente mas em breve</p>
                            </div>
                        </div>
                        <div>
                            <div className="w-full aspect-[4/5] bg-gray-100 flex items-center justify-center text-center p-8 border border-gray-200">
                                Foto do Breno <br /> Que ainda não tenho
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fundamentals Section */}
            <section id="fundamentals" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <h2 className="text-4xl font-display font-bold text-dark">Nosso fundamentos</h2>
                        <p className="text-gray-500 flex items-end">Faz isso ficar bonito, vou mandar-te varias cores de pilares...</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Pillar 1 */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-dark text-center">Transparência</h3>
                            <div className="flex justify-center py-6">
                                <Box size={64} className="text-primary" /> {/* Placeholder Icon */}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed text-center">
                                Na LINEAN, acreditamos que cada cliente merece clareza total em todas as etapas do processo.
                            </p>
                        </div>

                        {/* Pillar 2 */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-dark text-center">Rigor</h3>
                            <div className="flex justify-center py-6">
                                <Shield size={64} className="text-primary" /> {/* Placeholder Icon */}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed text-center">
                                Não deixamos espaço para o acaso. Do planeamento à execução, cada detalhe é tratado com precisão técnica.
                            </p>
                        </div>

                        {/* Pillar 3 */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-dark text-center">Resultados</h3>
                            <div className="flex justify-center py-6">
                                <TrendingUp size={64} className="text-primary" /> {/* Placeholder Icon */}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed text-center">
                                Trabalhamos para superar expectativas. A nossa abordagem estratégica traduz-se em soluções eficientes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-center mb-12 border-b border-black pb-4">
                        <h2 className="text-xl text-dark">o que dizem sobre a Linean</h2>
                        <div className="flex space-x-2">
                            {/* Navigation buttons would go here */}
                            <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">{'<'}</button>
                            <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">{'>'}</button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <p className="text-gray-600 italic">"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt..."</p>
                            <div>
                                <p className="font-bold text-dark">Senhor blbla</p>
                                <p className="text-sm text-gray-400">Cliente</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <p className="text-gray-600 italic">"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt..."</p>
                            <div>
                                <p className="font-bold text-dark">Senhor blbla</p>
                                <p className="text-sm text-gray-400">Cliente</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
