import Avatar from 'antd/es/avatar';
import Button from 'antd/es/button';
import Card from 'antd/es/card';
import Divider from 'antd/es/divider';
import Flex from 'antd/es/flex';
import Tag from 'antd/es/tag';
import Typography from 'antd/es/typography';
import { useState } from 'react';
import {
    colors,
    paragraphStyle,
    sectionTitleStyle
} from '@/styles/shared';
import styles from './SkillsSection.module.css';

const { Title, Paragraph } = Typography;

type SkillKey = 'frontend' | 'backend' | 'infrastructure' | 'blockchain' | 'practices' | 'leadership';

const SkillsSection = () => {
    const [activeSkill, setActiveSkill] = useState<SkillKey>('frontend');

    const skillsData = {
        frontend: {
            icon: '💻',
            title: 'Frontend Development',
            description: 'Modern, responsive web applications with focus on user experience and performance optimization',
            technologies: [
                'React.js',
                'TypeScript',
                'Ant Design',
                'React Native',
                'HTML5/CSS3',
                'React Testing Library'
            ],
            bgColor: '#fdf2f5',
            accentColor: '#800020'
        },
        backend: {
            icon: '⚙️',
            title: 'Backend Development',
            description: 'Enterprise-grade server architecture, API design and implementation',
            technologies: [
                'Node.js',
                'Express.js',
                'Python',
                'FastAPI',
                'REST APIs',
                'GraphQL'
            ],
            bgColor: '#f5f2fd',
            accentColor: '#6b1a52'
        },
        infrastructure: {
            icon: '🗄️',
            title: 'Infrastructure & DevOps',
            description: 'Cloud-native solutions, containerization, and scalable database management',
            technologies: [
                'SQL (PostgreSQL, MySQL)',
                'No-SQL Databases (MongoDB)',
                'Azure Cloud',
                'Kubernetes',
                'Docker',
                'AWS Services'
            ],
            bgColor: '#f8f5f2',
            accentColor: '#a0522d'
        },
        blockchain: {
            icon: '⛓️',
            title: 'Blockchain & Web3',
            description: 'Decentralized application development and smart contract architecture',
            technologies: [
                'Ethereum (ethers.js)',
                'Smart Contracts',
                'DeFi Protocols',
                'Web3 Integration'
            ],
            bgColor: '#f2f5fd',
            accentColor: '#4b0e2e'
        },
        practices: {
            icon: '🛠️',
            title: 'Development Practices',
            description: 'Quality assurance, automation, and industry-standard development methodologies',
            technologies: [
                'Git/GitHub',
                'CI/CD Pipelines',
                'Jest',
                'Vitest',
                'Agile/Scrum',
                'SDLC',
                'TDD/BDD',
                'Code Review'
            ],
            bgColor: '#faf2f2',
            accentColor: '#b8002c'
        },
        leadership: {
            icon: '👨‍💼',
            title: 'Leadership & Strategy',
            description: 'Technical leadership, process optimization, and cross-platform development expertise',
            technologies: [
                'Technical Leadership',
                'Team Mentoring',
                'Process Design and Optimization',
                'Architecture Design',
                'Database Design'
            ],
            bgColor: '#f2f2fa',
            accentColor: '#5c1a3d'
        }
    };

    const buttonLabels: Record<SkillKey, string> = {
        frontend: 'Frontend',
        backend: 'Backend',
        infrastructure: 'Infrastructure',
        blockchain: 'Blockchain',
        practices: 'Practices',
        leadership: 'Leadership'
    };

    const currentSkill = skillsData[activeSkill];

    const createSkillContent = (skill: typeof currentSkill) => {
        return (
            <Card 
                className={styles.skillContent}
                style={{
                    marginTop: 'clamp(20px, 4vw, 32px)',
                    borderRadius: '12px',
                    border: `1px solid ${colors.lightGray}`,
                    boxShadow: '0 4px 12px rgba(128, 0, 32, 0.08)'
                }}
                styles={{ body: { padding: 'clamp(16px, 4vw, 32px)' } }}
            >
                <Flex 
                    align="flex-start" 
                    gap="large" 
                    className={styles.skillHeader}
                >
                    <Avatar
                        size={56}
                        className={styles.skillAvatar}
                        style={{
                            backgroundColor: skill.accentColor,
                            fontSize: 'clamp(18px, 4vw, 24px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            boxShadow: `0 2px 8px ${skill.accentColor}40`,
                            width: 'clamp(48px, 12vw, 56px)',
                            height: 'clamp(48px, 12vw, 56px)'
                        }}
                    >
                        {skill.icon}
                    </Avatar>
                    <div className={styles.skillInfo}>
                        <Title level={3} style={{
                            margin: '0 0 8px 0',
                            color: colors.primary,
                            fontSize: 'clamp(18px, 4.5vw, 22px)',
                            fontWeight: '600',
                            lineHeight: '1.3'
                        }}>
                            {skill.title}
                        </Title>
                        <Paragraph style={{
                            ...paragraphStyle,
                            margin: 0,
                            fontSize: 'clamp(14px, 3.5vw, 15px)',
                            color: colors.gray,
                            lineHeight: '1.5'
                        }}>
                            {skill.description}
                        </Paragraph>
                    </div>
                </Flex>

                <Flex className={styles.techTagsContainer}>
                    {skill.technologies.map((tech, index) => (
                        <Tag
                            key={index}
                            color={skill.accentColor}
                            style={{
                                fontSize: 'clamp(11px, 2.8vw, 13px)',
                                padding: 'clamp(4px, 1.5vw, 6px) clamp(8px, 2.5vw, 12px)',
                                borderRadius: '16px',
                                border: 'none',
                                fontWeight: '500',
                                marginBottom: '4px'
                            }}
                        >
                            {tech}
                        </Tag>
                    ))}
                </Flex>
            </Card>
        );
    };

    return (
        <section id="skills" style={{ padding: 'clamp(32px, 8vw, 60px) 0' }}>
            <Divider style={{ backgroundColor: colors.primary, margin: '0 0 clamp(24px, 6vw, 48px) 0' }} />
            <Title level={2} style={{
                ...sectionTitleStyle,
                textAlign: 'center',
                marginBottom: 'clamp(12px, 3vw, 16px)',
                fontSize: 'clamp(24px, 6vw, 36px)',
                padding: '0 16px'
            }}>
                Technical Expertise
            </Title>
            <Paragraph style={{
                ...paragraphStyle,
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto clamp(24px, 6vw, 48px) auto',
                fontSize: 'clamp(14px, 3.5vw, 16px)',
                lineHeight: '1.6',
                color: colors.gray,
                padding: '0 16px'
            }}>
                Comprehensive expertise across the full technology stack, from frontend interfaces to backend architecture,
                cloud infrastructure, and emerging technologies. Proven experience delivering scalable solutions in
                enterprise environments.
            </Paragraph>

            <div style={{
                margin: '0 auto',
                maxWidth: '1200px',
                padding: '0 clamp(12px, 3vw, 24px)'
            }}>
                {/* Navigation buttons */}
                <Flex className={styles.skillButtonGroup}>
                    {Object.entries(buttonLabels).map(([key, label]) => (
                        <Button
                            key={key}
                            type={activeSkill === key ? 'primary' : 'default'}
                            onClick={() => setActiveSkill(key as SkillKey)}
                            className={styles.skillButton}
                            style={{
                                borderRadius: 'clamp(14px, 4vw, 20px)',
                                fontWeight: '500',
                                height: 'clamp(28px, 8vw, 36px)',
                                paddingLeft: 'clamp(10px, 3vw, 16px)',
                                paddingRight: 'clamp(10px, 3vw, 16px)',
                                fontSize: 'clamp(12px, 3vw, 14px)',
                                backgroundColor: activeSkill === key ? colors.primary : '#ffffff',
                                borderColor: activeSkill === key ? colors.primary : colors.lightGray,
                                color: activeSkill === key ? '#ffffff' : colors.primary,
                                transition: 'all 0.2s ease'
                            }}
                        >
                            {label}
                        </Button>
                    ))}
                </Flex>

                {/* Active skill content */}
                {createSkillContent(currentSkill)}
            </div>

            <Paragraph style={{
                ...paragraphStyle,
                textAlign: 'center',
                marginTop: 'clamp(24px, 6vw, 48px)',
                fontStyle: 'italic',
                color: colors.muted,
                maxWidth: '600px',
                margin: 'clamp(24px, 6vw, 48px) auto 0 auto',
                fontSize: 'clamp(13px, 3vw, 16px)',
                padding: '0 16px'
            }}>
                Committed to continuous learning and staying current with emerging technologies
                while leveraging proven, enterprise-grade solutions.
            </Paragraph>
        </section>
    )
}

export default SkillsSection;
