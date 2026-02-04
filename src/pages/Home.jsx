import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FundamentalsSection from '../components/FundamentalsSection';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
    return (
        <div className="w-full">
            {/* Hero Section - No scroll animation as it's above fold */}
            <HeroSection />

            {/* About Section */}
            <AnimatedSection>
                <AboutSection />
            </AnimatedSection>

            {/* Team Section */}
            <AnimatedSection>
                <TeamSection />
            </AnimatedSection>

            {/* Fundamentals Section */}
            <AnimatedSection>
                <FundamentalsSection />
            </AnimatedSection>

            {/* Testimonials Section */}
            <AnimatedSection>
                <TestimonialsSection />
            </AnimatedSection>
        </div>
    );
};


export default Home;
