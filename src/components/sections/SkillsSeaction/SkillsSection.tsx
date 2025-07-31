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
                'Relational Databases (PostgreSQL, MySQL)',
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
                    marginTop: '32px',
                    borderRadius: '12px',
                    border: `1px solid ${colors.lightGray}`,
                    boxShadow: '0 4px 12px rgba(128, 0, 32, 0.08)'
                }}
                styles={{ body: { padding: '32px' } }}
            >
                <Flex align="flex-start" gap="large" style={{ marginBottom: '32px' }}>
                    <Avatar
                        size={56}
                        style={{
                            backgroundColor: skill.accentColor,
                            fontSize: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            boxShadow: `0 2px 8px ${skill.accentColor}40`
                        }}
                    >
                        {skill.icon}
                    </Avatar>
                    <div style={{ flex: 1 }}>
                        <Title level={3} style={{
                            margin: '0 0 8px 0',
                            color: colors.primary,
                            fontSize: '22px',
                            fontWeight: '600',
                            lineHeight: '1.3'
                        }}>
                            {skill.title}
                        </Title>
                        <Paragraph style={{
                            ...paragraphStyle,
                            margin: 0,
                            fontSize: '15px',
                            color: colors.gray,
                            lineHeight: '1.5'
                        }}>
                            {skill.description}
                        </Paragraph>
                    </div>
                </Flex>

                <Flex wrap="wrap" gap="small">
                    {skill.technologies.map((tech, index) => (
                        <Tag
                            key={index}
                            color={skill.accentColor}
                            style={{
                                fontSize: '13px',
                                padding: '6px 12px',
                                borderRadius: '16px',
                                border: 'none',
                                fontWeight: '500'
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
        <section id="skills" style={{ padding: '60px 0' }}>
            <Divider style={{ backgroundColor: colors.primary, margin: '0 0 48px 0' }} />
            <Title level={2} style={{
                ...sectionTitleStyle,
                textAlign: 'center',
                marginBottom: '16px'
            }}>
                Technical Expertise
            </Title>
            <Paragraph style={{
                ...paragraphStyle,
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto 48px auto',
                fontSize: '16px',
                lineHeight: '1.6',
                color: colors.gray
            }}>
                Comprehensive expertise across the full technology stack, from frontend interfaces to backend architecture,
                cloud infrastructure, and emerging technologies. Proven experience delivering scalable solutions in
                enterprise environments.
            </Paragraph>

            <div style={{
                margin: '0 auto',
                maxWidth: '1200px',
                padding: '0 24px'
            }}>
                {/* Navigation buttons */}
                <Flex justify="center" wrap="wrap" gap="small" style={{ marginBottom: '32px' }}>
                    {Object.entries(buttonLabels).map(([key, label]) => (
                        <Button
                            key={key}
                            type={activeSkill === key ? 'primary' : 'default'}
                            onClick={() => setActiveSkill(key as SkillKey)}
                            className={styles.skillButton}
                            style={{
                                borderRadius: '20px',
                                fontWeight: '500',
                                height: '36px',
                                paddingLeft: '16px',
                                paddingRight: '16px',
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
                marginTop: '48px',
                fontStyle: 'italic',
                color: colors.muted,
                maxWidth: '600px',
                margin: '48px auto 0 auto'
            }}>
                Committed to continuous learning and staying current with emerging technologies
                while leveraging proven, enterprise-grade solutions.
            </Paragraph>
        </section>
    )
}

export default SkillsSection;
