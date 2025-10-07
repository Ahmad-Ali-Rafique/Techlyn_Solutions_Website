const ChatBot = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <div className="chat-prompt-text animate-fade-in">
        <span className="text-white font-medium text-sm tracking-wide drop-shadow-lg">
          Any questions?
        </span>
      </div>
      <div id="n8n-chat" />
    </div>
  );
};

export default ChatBot;