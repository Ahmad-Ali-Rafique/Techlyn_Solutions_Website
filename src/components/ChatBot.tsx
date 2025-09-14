import { useEffect } from 'react';

declare global {
  interface Window {
    n8nChat?: {
      createChat: (config: {
        webhookUrl: string;
        target: string;
        defaultLanguage: string;
        title: string;
        subtitle: string;
        theme: string;
      }) => void;
    };
  }
}

const ChatBot = () => {
  useEffect(() => {
    // Load the n8n chat script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/index.umd.js';
    script.async = true;
    
    script.onload = () => {
      // Initialize the chatbot when script loads
      if (window.n8nChat) {
        window.n8nChat.createChat({
          webhookUrl: "https://ssadasd.app.n8n.cloud/webhook/0c5ff7c7-2c16-44e0-ab16-cba74437244d/chat",
          target: "#n8n-chat",
          defaultLanguage: "en",
          title: "Techlyn AI Assistant",
          subtitle: "How can we help with your AI automation needs?",
          theme: "light",
        });
      }
    };
    
    document.head.appendChild(script);
    
    // Cleanup
    return () => {
      const existingScript = document.querySelector('script[src="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/index.umd.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return <div id="n8n-chat" className="fixed bottom-4 right-4 z-50" />;
};

export default ChatBot;