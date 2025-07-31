import Space from 'antd/es/space';
import Button from 'antd/es/button';
import Tooltip from 'antd/es/tooltip';
import { UpOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { colors } from '@/styles/shared';
import AboutMeSection from '@/components/sections/AboutMeSection/AboutMeSection';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import ProfessionalExperienceSection from '@/components/sections/ProfessionalExperienceSection/ProfessionalExperienceSection';
import SkillsSection from '@/components/sections/SkillsSeaction/SkillsSection';
import ContactSection from '@/components/sections/ContactSection/ContactSection';

const Portfolio = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 300px or more
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <HeroSection />
        <AboutMeSection />
        <SkillsSection  />
        <ProfessionalExperienceSection />
        <ContactSection />
      </Space>
      
            {/* Floating Back to Top Button */}
      {showButton && (
        <Tooltip title="Back to Top" placement="left">
          <Button 
            type="primary"
            shape="circle"
            size="large"
            icon={<UpOutlined />}
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: '30px',
              width: '50px',
              height: '50px',
              backgroundColor: colors.primary,
              borderColor: colors.primary,
              boxShadow: `0 4px 12px rgba(128, 0, 32, 0.3)`,
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = `0 6px 16px rgba(128, 0, 32, 0.4)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = `0 4px 12px rgba(128, 0, 32, 0.3)`;
            }}
          />
        </Tooltip>
      )}
    </>
  );
};

export default Portfolio;