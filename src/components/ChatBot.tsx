import { useEffect, useState } from 'react';

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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if script already exists
    let script = document.querySelector('script[src="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/index.umd.js"]') as HTMLScriptElement;
    
    if (!script) {
      // Create and load the n8n chat script
      script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/index.umd.js';
      script.async = true;
      document.head.appendChild(script);
    }
    
    const initializeChat = () => {
      console.log('Attempting to initialize n8n chat...');
      
      if (window.n8nChat) {
        console.log('n8nChat found, creating chat...');
        try {
          window.n8nChat.createChat({
            webhookUrl: "https://ssadasd.app.n8n.cloud/webhook/0c5ff7c7-2c16-44e0-ab16-cba74437244d/chat",
            target: "#n8n-chat",
            defaultLanguage: "en",
            title: "Techlyn AI Assistant",
            subtitle: "How can we help with your AI automation needs?",
            theme: "light",
          });
          setIsLoaded(true);
          console.log('n8n chat initialized successfully');
        } catch (error) {
          console.error('Error initializing n8n chat:', error);
        }
      } else {
        console.log('n8nChat not available yet, retrying...');
        setTimeout(initializeChat, 100);
      }
    };

    script.onload = initializeChat;
    script.onerror = () => console.error('Failed to load n8n chat script');
    
    // If script was already loaded or n8nChat is available, try to initialize immediately
    if (window.n8nChat) {
      initializeChat();
    }

    return () => {
      // Don't remove script on cleanup to avoid reload issues
    };
  }, []);

  return (
    <>
      <div id="n8n-chat" className="fixed bottom-4 right-4 z-50" />
      {!isLoaded && (
        <div className="fixed bottom-4 right-4 z-50 w-14 h-14 bg-gradient-to-r from-primary to-destructive rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
          <span className="text-white font-bold text-sm">T</span>
        </div>
      )}
    </>
  );
};

export default ChatBot;