
import { DownloadOutlined, LinkedinOutlined } from '@ant-design/icons';
import App from 'antd/es/app';
import FloatButton from 'antd/es/float-button';
import Layout from 'antd/es/layout';
import { Route, Routes } from 'react-router-dom';
import Portfolio from '@/pages/Portfolio';
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

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <AppHeader />
            <Content style={{ padding: '88px 50px 24px 50px', background: '#fff' }}>
                <Routes>
                    <Route path="/" element={<Portfolio />} />
                </Routes>
            </Content>
            <>
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
            <AppFooter />
        </Layout >
    )
}

export default AppLayout;