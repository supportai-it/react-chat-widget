import { useEffect } from 'react';

const ChatWidget = ({
    chatUrl,
    buttonColor = '#e74266',
    buttonHoverColor = '#d6365d',
    buttonSize = '64px',
    frameWidth = '400',
    frameHeight = '600'
}) => {
    useEffect(() => {
        const chatFrame = document.createElement('div');
        chatFrame.id = 'chat-frame';
        chatFrame.style.position = 'fixed';
        chatFrame.style.bottom = `calc(${buttonSize} + 25px)`;
        chatFrame.style.right = '1rem';
        chatFrame.style.zIndex = '999';
        chatFrame.style.display = 'none';

        const iframe = document.createElement('iframe');
        iframe.src = chatUrl;
        iframe.width = frameWidth;
        iframe.height = frameHeight;
        iframe.style.border = 'none';
        iframe.style.overflow = 'hidden';
        iframe.style.transformOrigin = 'bottom right';

        chatFrame.appendChild(iframe);

        const chatButton = document.createElement('div');
        chatButton.id = 'chat-btn';
        chatButton.style.position = 'fixed';
        chatButton.style.bottom = '1rem';
        chatButton.style.right = '1rem';
        chatButton.style.zIndex = '9999';
        chatButton.style.cursor = 'pointer';

        const buttonCircle = document.createElement('div');
        buttonCircle.style.background = buttonColor;
        buttonCircle.style.color = '#fff';
        buttonCircle.style.width = buttonSize;
        buttonCircle.style.height = buttonSize;
        buttonCircle.style.borderRadius = '50%';
        buttonCircle.style.display = 'flex';
        buttonCircle.style.alignItems = 'center';
        buttonCircle.style.justifyContent = 'center';
        buttonCircle.style.transition = 'transform 0.15s ease, background 0.15s ease';

        buttonCircle.addEventListener('mouseenter', () => {
            buttonCircle.style.transform = 'scale(1.05)';
            buttonCircle.style.background = buttonHoverColor;
        });
        buttonCircle.addEventListener('mouseleave', () => {
            buttonCircle.style.transform = 'scale(1)';
            buttonCircle.style.background = buttonColor;
        });

        const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgIcon.setAttribute('viewBox', '0 0 24 24');
        svgIcon.setAttribute('width', '32');
        svgIcon.setAttribute('height', '32');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('fill', 'currentColor');
        path.setAttribute('d', 'M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8');

        svgIcon.appendChild(path);
        buttonCircle.appendChild(svgIcon);
        chatButton.appendChild(buttonCircle);

        document.body.appendChild(chatFrame);
        document.body.appendChild(chatButton);

        chatButton.addEventListener('click', () => {
            chatFrame.style.display = chatFrame.style.display === 'none' ? 'block' : 'none';
        });

        return () => {
            chatFrame.remove();
            chatButton.remove();
        };
    }, [chatUrl, buttonColor, buttonHoverColor, buttonSize, frameWidth, frameHeight]);

    return null;
};

export default ChatWidget;
