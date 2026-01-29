import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FundamentalsSection from '../components/FundamentalsSection';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';

const Home = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <HeroSection />

            {/* About Section */}
            <AboutSection />

            {/* Team Section */}
            <TeamSection />
            {/* Fundamentals Section */}
            <FundamentalsSection />

            {/* Testimonials Section */}
            <TestimonialsSection />
        </div>
    );
};


export default Home;
