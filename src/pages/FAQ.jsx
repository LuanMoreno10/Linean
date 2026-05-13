import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FAQItem = ({ question, answer, isOpen, onToggle, panelId }) => {
    return (
        <div className="border-b border-gray-200 py-4 last:border-0">
            <button
                type="button"
                className="w-full flex justify-between items-center text-left focus:outline-none group"
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={panelId}
            >
                <span className="text-lg font-medium text-dark group-hover:text-primary-dark transition-colors pr-4">
                    {question}
                </span>
                <span className="text-gray-400" aria-hidden>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
            </button>
            <div
                id={panelId}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
            >
                <p className="text-gray-600 leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const { t } = useLanguage();

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: t('faq_page.items.q1'),
            answer: t('faq_page.items.a1')
        },
        {
            question: t('faq_page.items.q2'),
            answer: t('faq_page.items.a2')
        },
        {
            question: t('faq_page.items.q3'),
            answer: t('faq_page.items.a3')
        },
        {
            question: t('faq_page.items.q4'),
            answer: t('faq_page.items.a4')
        },
        {
            question: t('faq_page.items.q5'),
            answer: t('faq_page.items.a5')
        },
        {
            question: t('faq_page.items.q6'),
            answer: t('faq_page.items.a6')
        },
        {
            question: t('faq_page.items.q7'),
            answer: t('faq_page.items.a7')
        },
        {
            question: t('faq_page.items.q8'),
            answer: t('faq_page.items.a8')
        }
    ];

    return (
        <div className="pt-32 pb-20 min-h-screen bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-4 text-dark">
                    {t('faq_page.title')}
                </h1>
                <p className="text-center text-gray-500 mb-16 max-w-lg mx-auto">
                    {t('faq_page.subtitle')}
                </p>

                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                            panelId={`faq-panel-${index}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
