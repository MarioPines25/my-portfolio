import Layout from "antd/es/layout";

const { Footer } = Layout;
const AppFooter = () => {
    return (
        <Footer style={{ textAlign: 'center' }}>
            © {new Date().getFullYear()} Mario Pinés Madrid
        </Footer>
    );
};

export default AppFooter;
