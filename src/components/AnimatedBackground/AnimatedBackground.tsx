import { colors } from '@/styles/shared';

const AnimatedBackground = () => {
    // CSS animations for floating effect
    const floatingAnimation1 = `
        @keyframes float1 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(20px, -15px) rotate(5deg); }
            50% { transform: translate(-10px, -25px) rotate(-3deg); }
            75% { transform: translate(15px, -5px) rotate(7deg); }
        }
    `;
    
    const floatingAnimation2 = `
        @keyframes float2 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(-25px, 20px) rotate(-8deg); }
            50% { transform: translate(30px, 10px) rotate(4deg); }
            75% { transform: translate(-15px, -10px) rotate(-5deg); }
        }
    `;
    
    const floatingAnimation3 = `
        @keyframes float3 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(15px, -20px) scale(1.1); }
            66% { transform: translate(-20px, 15px) scale(0.9); }
        }
    `;

    const floatingAnimation4 = `
        @keyframes float4 {
            0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
            50% { transform: translate(25px, -30px) rotate(180deg) scale(1.2); }
        }
    `;

    return (
        <>
            <style>
                {floatingAnimation1}
                {floatingAnimation2}
                {floatingAnimation3}
                {floatingAnimation4}
            </style>
            
            {/* Top right primary rectangle */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '10%',
                width: '100px',
                height: '100px',
                background: colors.primary,
                borderRadius: '20px',
                opacity: 0.8,
                animation: 'float1 6s ease-in-out infinite'
            }} />

            {/* Top left primary rectangle */}
            <div style={{
                position: 'absolute',
                top: '40%',
                right: '70%',
                width: '100px',
                height: '100px',
                background: colors.primary,
                borderRadius: '20px',
                opacity: 0.8,
                animation: 'float2 8s ease-in-out infinite'
            }} />
            
            {/* Left dark circle */}
            <div style={{
                position: 'absolute',
                top: '60%',
                left: '5%',
                width: '80px',
                height: '80px',
                background: colors.dark,
                borderRadius: '50%',
                opacity: 0.7,
                animation: 'float3 7s ease-in-out infinite'
            }} />

            {/* Right dark circle */}
            <div style={{
                position: 'absolute',
                top: '40%',
                left: '80%',
                width: '80px',
                height: '80px',
                background: colors.dark,
                borderRadius: '50%',
                opacity: 0.7,
                animation: 'float1 9s ease-in-out infinite reverse'
            }} />

            {/* Bottom right gray rectangle */}
            <div style={{
                position: 'absolute',
                bottom: '15%',
                right: '15%',
                width: '120px',
                height: '120px',
                background: colors.gray,
                borderRadius: '30px',
                opacity: 0.6,
                animation: 'float4 10s ease-in-out infinite'
            }} />

            {/* Top right gray rectangle */}
            <div style={{
                position: 'absolute',
                bottom: '80%',
                right: '40%',
                width: '120px',
                height: '120px',
                background: colors.gray,
                borderRadius: '30px',
                opacity: 0.6,
                animation: 'float2 12s ease-in-out infinite reverse'
            }} />

            {/* Top left light gray small rectangle */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '20%',
                width: '60px',
                height: '60px',
                background: colors.lightGray,
                borderRadius: '15px',
                opacity: 0.8,
                animation: 'float3 5s ease-in-out infinite'
            }} />

            {/* Bottom left primary small rectangle */}
            <div style={{
                position: 'absolute',
                top: '80%',
                left: '40%',
                width: '60px',
                height: '60px',
                background: colors.primary,
                borderRadius: '15px',
                opacity: 0.8,
                animation: 'float1 11s ease-in-out infinite'
            }} />
        </>
    );
};

export default AnimatedBackground;
