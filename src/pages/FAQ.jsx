import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4 last:border-0">
            <button
                className="w-full flex justify-between items-center text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-medium text-dark group-hover:text-primary transition-colors pr-4">
                    {question}
                </span>
                <span className="text-gray-400">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
            </button>
            <div
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
    const faqs = [
        {
            question: "A LINEAN compra imóveis?",
            answer: "Não necessariamente. O foco não é comprar imóveis, mas valorizar ativos através de parcerias estruturadas. Em casos pontuais pode haver aquisição, mas não é o modelo principal."
        },
        {
            question: "Como funciona para proprietários?",
            answer: "O proprietário entra com o imóvel. A LINEAN entra com a estratégia, projeto, gestão, obra e custos. Após a venda, o lucro da valorização é dividido conforme contrato."
        },
        {
            question: "E se o imóvel estiver degradado ou inacabado?",
            answer: "É exatamente esse o tipo de imóvel que procuramos. Ativos parados, degradados, herdados ou mal aproveitados fazem parte do nosso foco."
        },
        {
            question: "O proprietário perde o controlo do imóvel?",
            answer: "Não. Tudo é contratualizado. O proprietário mantém proteção jurídica e visibilidade sobre todo o processo, do início à venda."
        },
        {
            question: "A LINEAN assume os custos da obra?",
            answer: "Sim, nos modelos de parceria. Os custos são assumidos pela operação e recuperados apenas no momento da venda, conforme definido em contrato."
        },
        {
            question: "Existe risco para o proprietário?",
            answer: "O risco é mitigado por contrato e controlo de custos. O proprietário não investe capital adicional nem gere a obra."
        },
        {
            question: "Trabalham com investidores?",
            answer: "Sim. Estruturamos sociedades onde investidores participam com capital, com percentagens proporcionais e total transparência sobre cada projeto."
        },
        {
            question: "Como posso avançar?",
            answer: "Contacto direto. Analisamos o imóvel e dizemos de forma clara se faz sentido avançar ou não."
        }
    ];

    return (
        <div className="pt-32 pb-20 min-h-screen bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-4 text-dark">
                    Perguntas frequentes
                </h1>
                <p className="text-center text-gray-500 mb-16 max-w-lg mx-auto">
                    Encontre abaixo respostas para as perguntas mais frequentes.
                    Se não encontrar o que procura, entre em contacto connosco.
                </p>

                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
