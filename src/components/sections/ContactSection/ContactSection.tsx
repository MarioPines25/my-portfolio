import Button from 'antd/es/button';
import Card from 'antd/es/card';
import Divider from 'antd/es/divider';
import Flex from 'antd/es/flex';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import Typography from 'antd/es/typography';
import { useState } from 'react';
import {
    colors,
    paragraphStyle,
    sectionTitleStyle
} from '@/styles/shared';
import App from 'antd/es/app';
import styles from './ContactSection.module.css';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactSection = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const { message } = App.useApp();

    const handleSubmit = async (values: ContactFormData) => {
        setLoading(true);
        try {
            // Create mailto link with form data
            const subject = encodeURIComponent(values.subject || 'Contact from Portfolio');
            const body = encodeURIComponent(
                `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`
            );
            const mailtoLink = `mailto:mariopinesmadrid@gmail.com?subject=${subject}&body=${body}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            message.success('Email client opened! Please send the email from your email application.');
            form.resetFields();
        } catch (error) {
            message.error('Failed to open email client. Please try again.');
            console.error('Contact form error:', error);
        } finally {
            setLoading(false);
        }
    };

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
                    margin: '0 auto clamp(20px, 5vw, 32px) auto'
                }}>
                    I'm always interested in discussing new opportunities, collaborating on exciting projects,
                    or simply connecting with fellow developers. Feel free to reach out!
                </Paragraph>

                <Flex className={styles.contactFlex} justify="center">
                    <Card
                        className={styles.contactCard}
                        style={{
                            border: `1px solid ${colors.lightGray}`,
                            maxWidth: '600px',
                            width: '100%'
                        }}
                        title={
                            <Title level={4} style={{ 
                                margin: 0, 
                                color: colors.primary,
                                fontSize: 'clamp(18px, 4vw, 20px)'
                            }}>
                                Send Message
                            </Title>
                        }
                        styles={{ body: { padding: 'clamp(16px, 4vw, 24px)' } }}
                    >
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={handleSubmit}
                            requiredMark={false}
                        >
                            <Form.Item
                                name="name"
                                label={<span style={{ 
                                    color: colors.dark, 
                                    fontWeight: 'bold',
                                    fontSize: 'clamp(13px, 3vw, 14px)'
                                }}>Name</span>}
                                rules={[{ required: true, message: 'Please enter your name' }]}
                                className={styles.formItem}
                            >
                                <Input
                                    placeholder="Your full name"
                                    className={styles.inputField}
                                    style={{
                                        height: 'clamp(36px, 8vw, 40px)',
                                        fontSize: 'clamp(13px, 3vw, 14px)'
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                label={<span style={{ 
                                    color: colors.dark, 
                                    fontWeight: 'bold',
                                    fontSize: 'clamp(13px, 3vw, 14px)'
                                }}>Email</span>}
                                rules={[
                                    { required: true, message: 'Please enter your email' },
                                    { type: 'email', message: 'Please enter a valid email' }
                                ]}
                                className={styles.formItem}
                            >
                                <Input
                                    placeholder="your.email@example.com"
                                    className={styles.inputField}
                                    style={{
                                        height: 'clamp(36px, 8vw, 40px)',
                                        fontSize: 'clamp(13px, 3vw, 14px)'
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                name="subject"
                                label={<span style={{ 
                                    color: colors.dark, 
                                    fontWeight: 'bold',
                                    fontSize: 'clamp(13px, 3vw, 14px)'
                                }}>Subject</span>}
                                rules={[{ required: true, message: 'Please enter a subject' }]}
                                className={styles.formItem}
                            >
                                <Input
                                    placeholder="What would you like to discuss?"
                                    className={styles.inputField}
                                    style={{
                                        height: 'clamp(36px, 8vw, 40px)',
                                        fontSize: 'clamp(13px, 3vw, 14px)'
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                name="message"
                                label={<span style={{ 
                                    color: colors.dark, 
                                    fontWeight: 'bold',
                                    fontSize: 'clamp(13px, 3vw, 14px)'
                                }}>Message</span>}
                                rules={[{ required: true, message: 'Please enter your message' }]}
                                className={styles.formItem}
                            >
                                <TextArea
                                    rows={4}
                                    placeholder="Tell me about your project, opportunity, or just say hello!"
                                    className={styles.inputField}
                                    style={{
                                        minHeight: 'clamp(80px, 15vw, 100px)',
                                        fontSize: 'clamp(13px, 3vw, 14px)'
                                    }}
                                />
                            </Form.Item>

                            <Form.Item style={{ marginBottom: 0 }}>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={loading}
                                    className={styles.submitButton}
                                    style={{
                                        backgroundColor: colors.primary,
                                        borderColor: colors.primary,
                                        height: 'clamp(36px, 10vw, 44px)',
                                        fontSize: 'clamp(14px, 3.5vw, 16px)',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {loading ? 'Opening Email Client...' : 'Send Message'}
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Flex>

                <Paragraph className={styles.closingText} style={{
                    ...paragraphStyle,
                    color: colors.muted,
                    fontSize: 'clamp(13px, 3vw, 16px)',
                    lineHeight: '1.5',
                    maxWidth: '600px',
                    margin: 'clamp(20px, 5vw, 32px) auto 0 auto'
                }}>
                    Looking forward to hearing from you! Whether it's about a potential collaboration,
                    a job opportunity, or just to connect and share ideas.
                </Paragraph>
            </div>
        </section>
    );
}

export default ContactSection;