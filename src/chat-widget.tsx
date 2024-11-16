import React, { useState, useRef, useEffect } from 'react';

interface ChatWidgetProps {
    chatUrl: string;
    buttonColor?: string;
    buttonHoverColor?: string;
    buttonSize?: string;
    getContext?: () => string;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({
    chatUrl,
    buttonColor = '#e74266',
    buttonHoverColor = '#d6365d',
    buttonSize = '64px',
    getContext,
}) => {
    const [iframeUrl, setIframeUrl] = useState(chatUrl);
    const [isChatVisible, setIsChatVisible] = useState(false);
    const chatFrameRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const context = getContext && getContext();
        if (context) {
            const url = new URL(chatUrl);
            url.searchParams.set('context', context);

            setIframeUrl(url.toString());
        }
    }, [getContext, chatUrl]);

    const toggleChatVisibility = () => {
        setIsChatVisible((prev) => !prev);
    }

    return (
        <>
            {/* Chat Frame */}
            <div
                ref={chatFrameRef}
                style={{
                    position: 'fixed',
                    bottom: `calc(${buttonSize} + 25px)`,
                    right: '1rem',
                    zIndex: 999,
                    display: isChatVisible ? 'flex' : 'none',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                }}
            >
                <iframe
                    src={iframeUrl}
                    style={{
                        border: 'none',
                        overflow: 'hidden',
                        transformOrigin: 'bottom right',
                        width: '90%',
                        maxWidth: '400px',
                        height: '80%',
                        maxHeight: '600px',
                    }}
                    title="Chat Widget"
                />
            </div>

            {/* Chat Button */}
            <div
                onClick={toggleChatVisibility}
                style={{
                    position: 'fixed',
                    bottom: '1rem',
                    right: '1rem',
                    zIndex: 9999,
                    cursor: 'pointer',
                }}
            >
                <div
                    style={{
                        background: buttonColor,
                        color: '#fff',
                        width: buttonSize,
                        height: buttonSize,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.15s ease, background 0.15s ease',
                    }}
                    className="chat-button"
                >
                    {/* SVG Icon */}
                    <svg viewBox="0 0 24 24" width="32" height="32">
                        <path
                            fill="currentColor"
                            d="M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8"
                        />
                    </svg>
                </div>
            </div>

            {/* Styles */}
            <style>{`
                .chat-button {
                    background: ${buttonColor};
                }
                .chat-button:hover {
                    background: ${buttonHoverColor} !important;
                    transform: scale(1.05);
                }
            `}</style>
        </>
    );
};
