import { useLanguage } from '../context/LanguageContext';

const TeamSection = () => {
    const { t } = useLanguage();

    return (
        <section id="team" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-display font-bold text-dark">{t('team.title')}</h2>
                        <div>
                            <h3 className="text-xl font-bold">William Santos</h3>
                            <p className="text-gray-500">{t('team.member_role')}</p>
                        </div>
                        <p className="text-gray-600">
                            {t('team.member_desc')}
                        </p>
                    </div>
                    <div>
                        <div 
                            className="w-3/4 mx-auto aspect-[4/5] bg-gray-100 flex items-center justify-center text-center p-8 bg-cover bg-center bg-no-repeat" 
                            style={{
                                backgroundImage: 'url("/breno-3.webp")',
                            }}>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;