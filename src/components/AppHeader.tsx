import Avatar from 'antd/es/avatar';
import Flex from 'antd/es/flex';
import Layout from 'antd/es/layout';
import Menu from 'antd/es/menu';
import Space from 'antd/es/space';
import Typography from 'antd/es/typography';
import { useEffect, useState } from 'react';

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'contact'];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      key: 'about',
      label: 'About',
      onClick: () => scrollToSection('about'),
    },
    {
      key: 'skills',
      label: 'Skills',
      onClick: () => scrollToSection('skills'),
    },
    {
      key: 'experience',
      label: 'Experience',
      onClick: () => scrollToSection('experience'),
    },
    {
      key: 'contact',
      label: 'Contact',
      onClick: () => scrollToSection('contact'),
    },
  ];

  return (
    <Header style={{
      backgroundColor: '#f8f9fa',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <Space size="middle" style={{ alignItems: 'center' }}>
        <Avatar
          size={40}
          src="/mario_pines.jpeg"
          alt="Mario Pinés Madrid"
        />
        <Title level={4} style={{
          color: '#800020',
          margin: 0,
          fontWeight: 'bold',
          display: 'block'
        }}>
          <span style={{ display: 'none' }} className="hide-on-small">Mario Pinés Madrid</span>
        </Title>
        <Title level={5} style={{
          color: '#2c2c2c',
          margin: 0,
          fontWeight: 'bold',
          display: 'block'
        }}>
          <span style={{ display: 'none' }} className="hide-on-small">Software Engineer</span>
        </Title>
      </Space>
      <Flex>
        <Menu
          theme="light"
          mode="horizontal"
          selectedKeys={[activeSection]}
          items={menuItems}
          style={{
            border: 'none',
            backgroundColor: 'transparent',
            fontWeight: 'bold'
          }}
        />
      </Flex>
    </Header>
  )
}

export default AppHeader