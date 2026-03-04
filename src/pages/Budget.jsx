import { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import emailjs from '@emailjs/browser';

const Budget = () => {
    const { t } = useLanguage();
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'construção',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        // EmailJS integration
        // 1. Create an account at https://www.emailjs.com/
        // 2. Add an Email Service (e.g., Gmail) and get the Service ID
        // 3. Create an Email Template and get the Template ID
        // 4. Get your Public Key from Account -> API Keys
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: 'construction',
                    message: ''
                });
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <div className="pt-32 pb-20 min-h-screen bg-white">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-dark mb-4">
                                {t('budget_page.title')}
                            </h1>
                            <p className="text-gray-500 text-lg text-center">
                                {t('budget_page.subtitle')}
                            </p>
                        </div>

                        {status === 'success' ? (
                            <div className="bg-accent/20 p-8 rounded-sm text-center border border-accent">
                                <h3 className="text-2xl font-display font-bold text-dark mb-2">
                                    {t('budget_page.form.success')}
                                </h3>
                            </div>
                        ) : (
                            <form ref={form} onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 shadow-sm border border-gray-100 rounded-sm">
                                {status === 'error' && (
                                    <div className="bg-red-100 text-red-700 p-4 rounded-sm text-center mb-6">
                                        Ocorreu um erro ao enviar o pedido. Por favor, tente novamente.
                                    </div>
                                )}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-bold text-dark uppercase tracking-wider">
                                            {t('budget_page.form.name')}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-gray-50 border border-gray-200 p-3 outline-none focus:border-primary transition-colors text-dark"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-bold text-dark uppercase tracking-wider">
                                            {t('budget_page.form.email')}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-gray-50 border border-gray-200 p-3 outline-none focus:border-primary transition-colors text-dark"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-bold text-dark uppercase tracking-wider">
                                            {t('budget_page.form.phone')}
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-gray-50 border border-gray-200 p-3 outline-none focus:border-primary transition-colors text-dark"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="service" className="text-sm font-bold text-dark uppercase tracking-wider">
                                            {t('budget_page.form.service')}
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full bg-gray-50 border border-gray-200 p-3 outline-none focus:border-primary transition-colors text-dark appearance-none"
                                            >
                                                <option value="Construção">{t('budget_page.form.service_options.construction')}</option>
                                                <option value="Remodelação">{t('budget_page.form.service_options.renovation')}</option>
                                                <option value="Design">{t('budget_page.form.service_options.design')}</option>
                                                <option value="Consultoria">{t('budget_page.form.service_options.consulting')}</option>
                                                <option value="Outro">{t('budget_page.form.service_options.other')}</option>
                                            </select>
                                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                                                    <path d="M6 9L1 4h10L6 9z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-bold text-dark uppercase tracking-wider">
                                        {t('budget_page.form.message')}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border border-gray-200 p-3 outline-none focus:border-primary transition-colors text-dark resize-none"
                                    ></textarea>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full bg-primary hover:bg-primary-dark text-white font-bold uppercase tracking-widest py-4 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {status === 'submitting' ? t('budget_page.form.submitting') : t('budget_page.form.submit')}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Budget;
