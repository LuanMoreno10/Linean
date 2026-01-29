import { Box, Shield, TrendingUp } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';

const Home = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <HeroSection />

            {/* About Section */}
            <AboutSection />

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
                                Trabalho com imobiliário à quase 9 anos, e o analisar o mercado imobiliário não só
                                em Portugal, mas em diversos países do mundo por onde passei, percebi um
                                padrão comum entre todos os investidores, mediadores e proprietários em relação
                                à forma de negociar. Surgiu em mim então um profundo desejo de fazer melhor e
                                de forma mais justa para todos os envolventes. A LINEAN nasceu de um desejo
                                sincero de ser única na sua metodologia e influência.
                                Tenho orgulho de fazer parte deste projeto.
                            </p>
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
