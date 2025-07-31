import AboutMeSection from '@/components/sections/AboutMeSection/AboutMeSection';
import ContactSection from '@/components/sections/ContactSection/ContactSection';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import ProfessionalExperienceSection from '@/components/sections/ProfessionalExperienceSection/ProfessionalExperienceSection';
import SkillsSection from '@/components/sections/SkillsSeaction/SkillsSection';
import Space from 'antd/es/space';

const Portfolio = () => {


  return (
    <>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <HeroSection />
        <AboutMeSection />
        <SkillsSection />
        <ProfessionalExperienceSection />
        <ContactSection />
      </Space>
    </>
  );
};

export default Portfolio;