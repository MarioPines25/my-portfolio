import Avatar from 'antd/es/avatar';
import Carousel from 'antd/es/carousel';
import Divider from 'antd/es/divider';
import Flex from 'antd/es/flex';
import Space from 'antd/es/space';
import Tag from 'antd/es/tag';
import Typography from 'antd/es/typography';
import {
    colors,
    paragraphStyle,
    sectionTitleStyle
} from '@/styles/shared';
import styles from './ProfessionalExperienceSection.module.css';

const { Title, Paragraph } = Typography;

const ProfessionalExperienceSection = () => {
    const createCarouselItem = (logoSrc: string, title: string, company: string, period: string, achievements: string[], techStack: string[]) => {
        return (
            <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '32px',
                margin: '0 8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                border: '1px solid #f0f0f0',
                minHeight: '500px'
            }}>
                <Flex align="center" gap="large" style={{ marginBottom: '32px' }}>
                    <Avatar
                        size={72}
                        src={logoSrc}
                        style={{
                            backgroundColor: colors.primary,
                            flexShrink: 0,
                            border: `2px solid ${colors.primary}`,
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                    <div style={{ flex: 1 }}>
                        <Title level={3} style={{
                            margin: '0 0 4px 0',
                            color: colors.primary,
                            fontSize: '22px',
                            fontWeight: '600'
                        }}>
                            {title}
                        </Title>
                        <Title level={4} style={{
                            margin: '0 0 8px 0',
                            color: '#666',
                            fontSize: '18px',
                            fontWeight: '500'
                        }}>
                            {company}
                        </Title>
                        <Tag color="blue" style={{
                            fontSize: '13px',
                            padding: '4px 12px',
                            fontWeight: '500'
                        }}>
                            {period}
                        </Tag>
                    </div>
                </Flex>

                <div style={{ marginBottom: '24px' }}>
                    <Title level={5} style={{
                        color: colors.primary,
                        marginBottom: '16px',
                        fontSize: '18px',
                        fontWeight: '600'
                    }}>
                        Key Achievements:
                    </Title>
                    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                        {achievements.map((achievement, index) => (
                            <Paragraph key={index} style={{
                                ...paragraphStyle,
                                fontSize: '15px',
                                lineHeight: '1.6',
                                margin: 0,
                                color: '#555',
                                paddingLeft: '16px',
                                position: 'relative'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    left: '0',
                                    color: colors.primary,
                                    fontWeight: 'bold'
                                }}>•</span>
                                {achievement}
                            </Paragraph>
                        ))}
                    </Space>
                </div>

                <div>
                    <Title level={5} style={{
                        color: colors.primary,
                        marginBottom: '12px',
                        fontSize: '18px',
                        fontWeight: '600'
                    }}>
                        Technology Stack:
                    </Title>
                    <Space wrap size="small">
                        {techStack.map((tech, index) => (
                            <Tag key={index} style={{
                                fontSize: '12px',
                                padding: '4px 8px',
                                backgroundColor: '#f8f9ff',
                                border: '1px solid #d6e4ff',
                                color: '#1890ff'
                            }}>
                                {tech}
                            </Tag>
                        ))}
                    </Space>
                </div>
            </div>
        );
    };

    return (
        <section id="experience" style={{ padding: '60px 0' }}>
            <Divider style={{ backgroundColor: colors.primary, margin: '0 0 48px 0' }} />
            <Title level={2} style={{
                ...sectionTitleStyle,
                textAlign: 'center',
                marginBottom: '16px'
            }}>
                Professional Experience
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
                A progressive journey through innovative technologies and leadership roles, from blockchain solutions
                to AI-powered applications, consistently delivering scalable enterprise solutions.
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
                    autoplaySpeed={15000}
                    dotPosition="bottom"
                    className={styles.customCarousel}
                >
                    {createCarouselItem(
                        '/my-portfolio/stealth.jpeg',
                        'Software Engineer',
                        'Stealth Mode Startup',
                        'Apr 2025 - Present · 4+ months',
                        [
                            'Architecting and developing cutting-edge products using modern technologies and AI integrations',
                            'Building scalable full-stack applications with advanced AI capabilities',
                            'Implementing speech-to-text solutions using Assembly AI for enhanced user experiences',
                            'Developing intelligent conversational interfaces powered by Anthropic AI',
                            'Creating robust data pipelines and API architectures for AI-driven applications'
                        ],
                        ['PostgreSQL', 'Node.js', 'React.js', 'MongoDB', 'Python', 'FastAPI', 'Assembly AI', 'Anthropic AI', 'TypeScript']
                    )}

                    {createCarouselItem(
                        '/my-portfolio/nexplore-logo.jpeg',
                        'Software Engineer',
                        'NEXPLORE (ACS Group)',
                        'Feb 2022 - Apr 2025 · 3 years 3 months',
                        [
                            'Contributed to international product development within ACS Group, collaborating with global teams across multiple time zones',
                            'Led and managed autonomous development teams of 3-4 engineers, ensuring high-impact delivery and technical excellence',
                            'Played pivotal role in product requirement analysis and end-to-end feature development lifecycle',
                            'Architected and bootstrapped new applications within the product ecosystem to meet diverse client requirements',
                            'Mentored junior developers and led comprehensive onboarding programs for new team members'
                        ],
                        ['TypeScript', 'React.js', 'Node.js', 'Azure Cloud', 'Kubernetes', 'Jest', 'GitHub Actions', 'Agile/Scrum']
                    )}

                    {createCarouselItem(
                        '/my-portfolio/clluc-logo.jpeg',
                        'Blockchain Developer',
                        'Clluc · Madrid, Spain',
                        'Oct 2019 - Feb 2022 · 2 years 5 months',
                        [
                            'Developed enterprise-grade blockchain applications leveraging Ethereum technology for secure transaction processing',
                            'Collaborated with diverse client portfolio to implement custom software solutions, optimizing business operations',
                            'Designed and built responsive web and mobile applications with seamless user experiences and modern UI/UX',
                            'Integrated Ethereum blockchain using ethers.js for secure smart contract interactions and DeFi protocols',
                            'Built cross-platform solutions including Microsoft PowerApps integrations and native Android applications'
                        ],
                        ['TypeScript', 'React.js', 'React Native', 'Node.js', 'Ethereum', 'ethers.js', 'PowerApps', 'Kotlin Android']
                    )}
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
                Each role has shaped my expertise in both technical execution and strategic leadership,
                building a foundation for delivering innovative solutions in rapidly evolving technology landscapes.
            </Paragraph>
        </section>
    )
}

export default ProfessionalExperienceSection;