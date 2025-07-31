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
            <div className={styles.experienceCard}>
                <Flex 
                    align="center" 
                    gap="large" 
                    className={styles.cardHeader}
                >
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
                    <div style={{ flex: 1, width: '100%' }}>
                        <Title level={3} style={{
                            margin: '0 0 4px 0',
                            color: colors.primary,
                            fontSize: 'clamp(18px, 4vw, 22px)',
                            fontWeight: '600'
                        }}>
                            {title}
                        </Title>
                        <Title level={4} style={{
                            margin: '0 0 8px 0',
                            color: '#666',
                            fontSize: 'clamp(16px, 3.5vw, 18px)',
                            fontWeight: '500'
                        }}>
                            {company}
                        </Title>
                        <Tag color="blue" className={styles.periodTag}>
                            {period}
                        </Tag>
                    </div>
                </Flex>

                <div className={styles.cardContent}>
                    <Title level={5} style={{
                        color: colors.primary,
                        marginBottom: 'clamp(12px, 3vw, 16px)',
                        fontSize: 'clamp(16px, 3.5vw, 18px)',
                        fontWeight: '600'
                    }}>
                        Key Achievements:
                    </Title>
                    <Space direction="vertical" size="middle" className={styles.achievementsList}>
                        {achievements.map((achievement, index) => (
                            <Paragraph key={index} className={styles.achievementItem} style={{
                                ...paragraphStyle
                            }}>
                                <span className={styles.achievementBullet}>•</span>
                                {achievement}
                            </Paragraph>
                        ))}
                    </Space>
                </div>

                <div>
                    <Title level={5} style={{
                        color: colors.primary,
                        marginBottom: 'clamp(8px, 2vw, 12px)',
                        fontSize: 'clamp(16px, 3.5vw, 18px)',
                        fontWeight: '600'
                    }}>
                        Technology Stack:
                    </Title>
                    <Space wrap size="small">
                        {techStack.map((tech, index) => (
                            <Tag key={index} className={styles.techTag}>
                                {tech}
                            </Tag>
                        ))}
                    </Space>
                </div>
            </div>
        );
    };

    return (
        <section id="experience" style={{ padding: 'clamp(32px, 8vw, 60px) 0' }}>
            <Divider style={{ backgroundColor: colors.primary, margin: '0 0 clamp(24px, 6vw, 48px) 0' }} />
            <Title level={2} style={{
                ...sectionTitleStyle,
                textAlign: 'center',
                marginBottom: 'clamp(12px, 3vw, 16px)',
                fontSize: 'clamp(24px, 6vw, 36px)',
                padding: '0 16px'
            }}>
                Professional Experience
            </Title>
            <Paragraph style={{
                ...paragraphStyle,
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto clamp(24px, 6vw, 48px) auto',
                fontSize: 'clamp(14px, 3.5vw, 16px)',
                lineHeight: '1.6',
                color: '#666666',
                padding: '0 16px'
            }}>
                A progressive journey through innovative technologies and leadership roles, from blockchain solutions
                to AI-powered applications, consistently delivering scalable enterprise solutions.
            </Paragraph>

            <div style={{
                margin: '0 auto',
                maxWidth: '1200px',
                padding: '0 clamp(12px, 3vw, 24px)'
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
                marginTop: 'clamp(24px, 6vw, 48px)',
                fontStyle: 'italic',
                color: '#888888',
                maxWidth: '700px',
                margin: 'clamp(24px, 6vw, 48px) auto 0 auto',
                fontSize: 'clamp(13px, 3vw, 16px)',
                padding: '0 16px'
            }}>
                Each role has shaped my expertise in both technical execution and strategic leadership,
                building a foundation for delivering innovative solutions in rapidly evolving technology landscapes.
            </Paragraph>
        </section>
    )
}

export default ProfessionalExperienceSection;