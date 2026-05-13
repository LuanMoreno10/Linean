import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { t } = useLanguage();

    const testimonials = [
        {
            id: 1,
            text: t('testimonials.t1'),
            name: "Diogo Silva",
            role: t('testimonials.role_investor')
        },
        {
            id: 2,
            text: t('testimonials.t2'),
            name: "Marek Pukel",
            role: t('testimonials.role_investor')
        },
        {
            id: 3,
            text: t('testimonials.t3'),
            name: "António Carvalho | Imounidos Construções",
            role: t('testimonials.role_partner')
        },
        {
            id: 4,
            text: t('testimonials.t4'),
            name: "Joana Pereira",
            role: t('testimonials.role_client')
        }

    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    // Calculate which items to show based on current index
    // We show 2 items at a time
    const visibleTestimonials = [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length]
    ];

    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center mb-12 border-b border-gray-300 pb-4">
                    <h2 className="text-xl text-dark">{t('testimonials.title')}</h2>
                    <div className="flex space-x-2">
                        <button
                            type="button"
                            onClick={prevSlide}
                            aria-label={t('testimonials.prev_aria')}
                            className="w-8 h-8 rounded-full bg-gray-200 text-gray-900 flex items-center justify-center hover:bg-gray-300 transition-colors"
                        >
                            <ChevronLeft size={16} aria-hidden />
                        </button>
                        <button
                            type="button"
                            onClick={nextSlide}
                            aria-label={t('testimonials.next_aria')}
                            className="w-8 h-8 rounded-full bg-gray-200 text-gray-900 flex items-center justify-center hover:bg-gray-300 transition-colors"
                        >
                            <ChevronRight size={16} aria-hidden />
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {visibleTestimonials.map((testimonial) => (
                        <div key={testimonial.id} className="space-y-4 fade-in">
                            <p className="text-gray-600 italic">"{testimonial.text}"</p>
                            <div>
                                <p className="font-bold text-dark">{testimonial.name}</p>
                                <p className="text-sm text-gray-600">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
