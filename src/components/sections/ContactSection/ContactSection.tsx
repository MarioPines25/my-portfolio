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
        <section id="contact">
            <Divider style={{ backgroundColor: colors.primary }} />
            <Title level={2} style={sectionTitleStyle}>Get In Touch</Title>
            <Paragraph style={{ ...paragraphStyle, marginBottom: '32px' }}>
                I'm always interested in discussing new opportunities, collaborating on exciting projects,
                or simply connecting with fellow developers. Feel free to reach out!
            </Paragraph>

            <Flex gap="large" wrap style={{ alignItems: 'flex-start' }}>
                <Card
                    style={{
                        flex: 1,
                        minWidth: '400px',
                        border: `1px solid ${colors.lightGray}`,
                        borderRadius: '12px'
                    }}
                    title={
                        <Title level={4} style={{ margin: 0, color: colors.primary }}>
                            Send Message
                        </Title>
                    }
                >
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={handleSubmit}
                        requiredMark={false}
                    >
                        <Form.Item
                            name="name"
                            label={<span style={{ color: colors.dark, fontWeight: 'bold' }}>Name</span>}
                            rules={[{ required: true, message: 'Please enter your name' }]}
                        >
                            <Input
                                placeholder="Your full name"
                                style={{ borderRadius: '8px', padding: '8px 12px' }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            label={<span style={{ color: colors.dark, fontWeight: 'bold' }}>Email</span>}
                            rules={[
                                { required: true, message: 'Please enter your email' },
                                { type: 'email', message: 'Please enter a valid email' }
                            ]}
                        >
                            <Input
                                placeholder="your.email@example.com"
                                style={{ borderRadius: '8px', padding: '8px 12px' }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="subject"
                            label={<span style={{ color: colors.dark, fontWeight: 'bold' }}>Subject</span>}
                            rules={[{ required: true, message: 'Please enter a subject' }]}
                        >
                            <Input
                                placeholder="What would you like to discuss?"
                                style={{ borderRadius: '8px', padding: '8px 12px' }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="message"
                            label={<span style={{ color: colors.dark, fontWeight: 'bold' }}>Message</span>}
                            rules={[{ required: true, message: 'Please enter your message' }]}
                        >
                            <TextArea
                                rows={4}
                                placeholder="Tell me about your project, opportunity, or just say hello!"
                                style={{ borderRadius: '8px' }}
                            />
                        </Form.Item>

                        <Form.Item style={{ marginBottom: 0 }}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={loading}
                                style={{
                                    backgroundColor: colors.primary,
                                    borderColor: colors.primary,
                                    borderRadius: '8px',
                                    height: '44px',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    width: '100%'
                                }}
                            >
                                {loading ? 'Opening Email Client...' : 'Send Message'}
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Flex>

            <Paragraph style={{
                ...paragraphStyle,
                marginTop: '32px',
                textAlign: 'center',
                fontStyle: 'italic',
                color: colors.muted
            }}>
                Looking forward to hearing from you! Whether it's about a potential collaboration,
                a job opportunity, or just to connect and share ideas.
            </Paragraph>
        </section>
    );
}

export default ContactSection;