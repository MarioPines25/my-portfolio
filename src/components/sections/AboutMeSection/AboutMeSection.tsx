import {
    colors,
    paragraphStyle,
    sectionTitleStyle
} from '@/styles/shared';
import {
    AimOutlined,
    BlockOutlined,
    CloudOutlined,
    CodeOutlined,
    DatabaseOutlined,
    TrophyOutlined,
    UserOutlined
} from '@ant-design/icons';
import Avatar from 'antd/es/avatar';
import Carousel from 'antd/es/carousel';
import Divider from 'antd/es/divider';
import Flex from 'antd/es/flex';
import Typography from 'antd/es/typography';
import type { ReactElement } from 'react';
import styles from './AboutMeSection.module.css';

const { Title, Paragraph } = Typography;

const AboutMeSection = () => {
    const createCarouselItem = (emoji: string | ReactElement, content: ReactElement) => {
        return (
            <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '32px',
                margin: '0 8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                border: '1px solid #f0f0f0',
                minHeight: '200px',
                display: 'flex',
                alignItems: 'center'
            }}>
                <Flex align="center" gap="large" style={{ width: '100%' }}>
                    <Avatar
                        size={56}
                        style={{
                            backgroundColor: colors.primary,
                            fontSize: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            boxShadow: `0 2px 8px ${colors.primary}40`
                        }}
                    >
                        {emoji}
                    </Avatar>
                    <div style={{ flex: 1 }}>
                        <Paragraph style={{
                            ...paragraphStyle,
                            margin: 0,
                            fontSize: '16px',
                            lineHeight: '1.6',
                            color: '#555',
                            fontWeight: '400'
                        }}>
                            {content}
                        </Paragraph>
                    </div>
                </Flex>
            </div>
        );
    };

    return (
        <section id="about" style={{ padding: '60px 0' }}>
            <Divider style={{ backgroundColor: colors.primary, margin: '0 0 48px 0' }} />
            <Title level={2} style={{
                ...sectionTitleStyle,
                textAlign: 'center',
                marginBottom: '16px'
            }}>
                Professional Profile
            </Title>
            <Paragraph style={{
                ...paragraphStyle,
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto 48px auto',
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#666666'
            }}>
                A results-driven software engineer with expertise in full-stack development, team leadership,
                and emerging technologies. Passionate about creating scalable solutions that drive business value
                and enhance user experiences across diverse industry sectors.
            </Paragraph>
            <div style={{
                margin: '0 auto',
                maxWidth: '1200px',
                padding: '0 24px'
            }}>
                <Carousel
                    arrows={true}
                    dots={true}
                    autoplay
                    autoplaySpeed={5000}
                    dotPosition="bottom"
                    className={styles.customCarousel}
                >
                    {createCarouselItem(<TrophyOutlined />, <span>Proven experience leading cross-functional teams and delivering enterprise-grade software solutions in agile environments.</span>)}
                    {createCarouselItem(<AimOutlined />, <span>Strategic involvement in product development lifecycle, from requirement analysis to deployment, ensuring alignment with business objectives.</span>)}
                    {createCarouselItem(<CodeOutlined />, <span>Full-stack expertise with modern technologies including React.js, TypeScript, Node.js, and AI integration platforms.</span>)}
                    {createCarouselItem(<CloudOutlined />, <span>Cloud infrastructure proficiency with Azure, Kubernetes, containerization, and automated CI/CD pipeline implementation.</span>)}
                    {createCarouselItem(<DatabaseOutlined />, <span>Advanced database management and optimization skills across SQL and NoSQL platforms for high-performance applications.</span>)}
                    {createCarouselItem(<BlockOutlined />, <span>Blockchain and Web3 development experience, including smart contracts, DeFi protocols, and decentralized application architecture.</span>)}
                    {createCarouselItem(<UserOutlined />, <span>Dedicated mentor and technical leader, fostering team growth through knowledge sharing and comprehensive onboarding programs.</span>)}
                </Carousel>
            </div>

            <Paragraph style={{
                ...paragraphStyle,
                textAlign: 'center',
                marginTop: '48px',
                fontStyle: 'italic',
                color: '#888888',
                maxWidth: '700px',
                margin: '48px auto 0 auto'
            }}>
                Committed to driving innovation through technology, fostering collaborative environments,
                and delivering solutions that create meaningful business impact.
            </Paragraph>
        </section>
    );
};

export default AboutMeSection;