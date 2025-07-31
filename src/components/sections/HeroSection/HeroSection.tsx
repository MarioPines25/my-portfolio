import { DownloadOutlined, LinkedinOutlined } from '@ant-design/icons';
import Button from 'antd/es/button';
import Flex from 'antd/es/flex';
import {
    colors,
    primaryButtonStyle,
    secondaryButtonStyle
} from '@/styles/shared';
import Typography from 'antd/es/typography';
import Tooltip from 'antd/es/tooltip';
import AnimatedBackground from '@/components/AnimatedBackground/AnimatedBackground';

const { Title, Paragraph } = Typography;

const HeroSection = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <div style={{
            minHeight: '95vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            margin: '0 -50px'
        }}>
            <AnimatedBackground />

            <div style={{ textAlign: 'center', zIndex: 10, maxWidth: '600px' }}>
                <Title
                    level={1}
                    style={{
                        fontSize: '3.5rem',
                        fontWeight: 'bold',
                        marginBottom: '8px',
                        color: colors.dark,
                        lineHeight: '1.2'
                    }}
                >
                    Hey! I'm Mario.
                </Title>
                <Title
                    level={2}
                    style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        marginBottom: '24px',
                        color: colors.primary,
                        lineHeight: '1.2'
                    }}
                >
                    A Software Engineer.
                </Title>
                <Paragraph
                    style={{
                        fontSize: '18px',
                        color: colors.muted,
                        marginBottom: '40px',
                        lineHeight: '1.6',
                        maxWidth: '500px',
                        margin: '0 auto 40px'
                    }}
                >
                    I'm passionate about building scalable, business-driven software solutions
                    and creating engaging user experiences that bring products to life.
                </Paragraph>

                <Flex gap="middle" justify="center" wrap>
                    <Button
                        type="primary"
                        size="large"
                        onClick={() => scrollToSection('about')}
                        style={primaryButtonStyle}
                    >
                        About Me
                    </Button>
                    <Button
                        size="large"
                        icon={<DownloadOutlined />}
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = '/Mario_Pines_Madrid_CV.pdf';
                            link.download = 'Mario_Pines_Madrid_CV.pdf';
                            link.click();
                        }}
                        style={secondaryButtonStyle}
                    >
                        Download CV
                    </Button>
                </Flex>
                <Flex gap="large" justify="center" style={{ marginTop: '32px' }}>
                    <Tooltip title="Open LinkedIn profile" placement='bottom'>
                        <Button
                            type="text"
                            icon={<LinkedinOutlined />}
                            style={{ color: '#0077b5', fontSize: '35px' }}
                            onClick={() => window.open('https://www.linkedin.com/in/mario-pinés-madrid-558562172/', '_blank')}

                        />
                    </Tooltip>
                </Flex>
            </div>
        </div>
    )
}

export default HeroSection;