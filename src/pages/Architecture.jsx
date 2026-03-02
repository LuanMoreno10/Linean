import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Architecture = () => {
    const { t } = useLanguage();

    return (
        <div className="pt-32 pb-20 min-h-screen bg-white">
            <div className="container mx-auto px-6 max-w-3xl text-center">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-12 text-dark">
                    {t('architecture_page.title')}
                </h1>

                <div className="text-left text-gray-600 space-y-6 text-lg leading-relaxed">
                    <p>{t('architecture_page.p1')}</p>
                    <p>{t('architecture_page.p2')}</p>
                    <p>{t('architecture_page.p3')}</p>
                    <p>{t('architecture_page.p4')}</p>
                </div>
            </div>
        </div>
    );
};

export default Architecture;
