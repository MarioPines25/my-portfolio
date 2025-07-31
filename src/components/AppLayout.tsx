
import Portfolio from '@/pages/Portfolio';
import { colors } from '@/styles/shared';
import { DownloadOutlined, LinkedinOutlined, UpOutlined } from '@ant-design/icons';
import App from 'antd/es/app';
import Button from 'antd/es/button';
import FloatButton from 'antd/es/float-button';
import Layout from 'antd/es/layout';
import Tooltip from 'antd/es/tooltip';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

const { Content } = Layout;

const AppLayout = () => {
    const { message } = App.useApp();
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/my-portfolio/Mario_Pines_Madrid_CV.pdf';
        link.download = 'Mario_Pines_Madrid_CV.pdf';
        link.click();
        message.success('CV downloaded successfully!');
    }

    const openLinkedInProfile = () => {
        window.open('https://www.linkedin.com/in/mario-pinés-madrid-558562172/', '_blank');
    }

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
        <Layout style={{ minHeight: '100vh' }}>
            <AppHeader />
            <Content style={{ padding: '88px 50px 24px 50px', background: '#fff' }}>
                <Routes>
                    <Route path="/" element={<Portfolio />} />
                </Routes>
            </Content>
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
                            left: '30px',
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
            {showButton && (<>
                <FloatButton
                    style={{ insetBlockEnd: 140 }}
                    icon={<DownloadOutlined />}
                    type="primary"
                    onClick={downloadCV}
                    tooltip={{
                        title: 'Download CV',
                        placement: 'left',
                    }}
                />

                <FloatButton
                    style={{ insetBlockEnd: 80 }}
                    icon={<LinkedinOutlined />}
                    type='primary'
                    onClick={openLinkedInProfile}
                    tooltip={{
                        title: 'Open LinkedIn Profile',
                        placement: 'left',
                    }}
                />
            </>
            )}

            <AppFooter />
        </Layout >
    )
}

export default AppLayout;