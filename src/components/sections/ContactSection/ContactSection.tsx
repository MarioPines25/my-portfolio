import Divider from 'antd/es/divider';
import Flex from 'antd/es/flex';
import Typography from 'antd/es/typography';
import {
    colors,
    paragraphStyle,
    sectionTitleStyle
} from '@/styles/shared';
import styles from './ContactSection.module.css';

const { Title, Paragraph } = Typography;

const ContactSection = () => {
    return (
        <section id="contact" className={styles.contactSection}>
            <Divider style={{ backgroundColor: colors.primary, margin: '0 0 clamp(24px, 6vw, 48px) 0' }} />
            
            <div className={styles.contactContainer}>
                <Title level={2} className={styles.sectionTitle} style={{
                    ...sectionTitleStyle,
                    fontSize: 'clamp(24px, 6vw, 36px)'
                }}>
                    Get In Touch
                </Title>
                
                <Paragraph className={styles.sectionDescription} style={{
                    ...paragraphStyle,
                    fontSize: 'clamp(14px, 3.5vw, 16px)',
                    lineHeight: '1.6',
                    maxWidth: '700px',
                    margin: '0 auto clamp(32px, 6vw, 48px) auto'
                }}>
                    I'm always interested in discussing new opportunities, collaborating on exciting projects,
                    or simply connecting with fellow developers. Let's connect!
                </Paragraph>

                <Flex className={styles.contactLinks} justify="center" align="center" gap="large" wrap>
                    <div className={styles.contactItem}>
                        <Title level={4} style={{ 
                            color: colors.primary,
                            fontSize: 'clamp(14px, 3.5vw, 16px)',
                            fontWeight: '600',
                            margin: '0 0 8px 0'
                        }}>
                            Email
                        </Title>
                        <a 
                            href="mailto:mariopinesmadrid@gmail.com"
                            className={styles.contactLink}
                            style={{
                                color: colors.dark,
                                fontSize: 'clamp(16px, 4vw, 18px)',
                                fontWeight: '500',
                                textDecoration: 'none'
                            }}
                        >
                            mariopinesmadrid@gmail.com
                        </a>
                    </div>

                    <div className={styles.contactDivider} />

                    <div className={styles.contactItem}>
                        <Title level={4} style={{ 
                            color: colors.primary,
                            fontSize: 'clamp(14px, 3.5vw, 16px)',
                            fontWeight: '600',
                            margin: '0 0 8px 0'
                        }}>
                            LinkedIn
                        </Title>
                        <a 
                            href="https://linkedin.com/in/mario-pines-madrid"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.contactLink}
                            style={{
                                color: colors.dark,
                                fontSize: 'clamp(16px, 4vw, 18px)',
                                fontWeight: '500',
                                textDecoration: 'none'
                            }}
                        >
                            linkedin.com/in/mario-pines-madrid
                        </a>
                    </div>
                </Flex>

                <Paragraph className={styles.closingText} style={{
                    ...paragraphStyle,
                    color: colors.muted,
                    fontSize: 'clamp(13px, 3vw, 15px)',
                    lineHeight: '1.5',
                    maxWidth: '600px',
                    margin: 'clamp(32px, 6vw, 48px) auto 0 auto'
                }}>
                    Looking forward to hearing from you! Whether it's about a potential collaboration,
                    a job opportunity, or just to connect and share ideas.
                </Paragraph>
            </div>
        </section>
    );
}

export default ContactSection;