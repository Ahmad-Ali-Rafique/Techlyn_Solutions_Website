import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const suites = [
  { id: 'ai-communication', name: 'AI Communication Suite', available: true },
  { id: 'marketing', name: 'Marketing Suite', available: false },
  { id: 'automation', name: 'Automation Suite', available: false },
  { id: 'vision', name: 'Vision Suite', available: false },
];

export const GlobalSuitesSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleSuiteClick = (suiteId: string) => {
    navigate('/suites');
    // Small delay to ensure navigation completes
    setTimeout(() => {
      const element = document.getElementById('suites-content');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <aside
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] border-r border-border bg-card/95 backdrop-blur-sm z-40 transition-all duration-300 ${
        isCollapsed ? 'w-14' : 'w-64'
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 w-6 h-6 rounded-full bg-gradient-to-r from-[#0b3c74] to-[#e60000] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>

      <div className="p-6 overflow-y-auto h-full">
        {!isCollapsed ? (
          <>
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#0b3c74] to-[#e60000] bg-clip-text text-transparent flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[#e60000]" />
              Techlyn Suites
            </h2>
            <nav className="space-y-3">
              {suites.map((suite) => (
                <button
                  key={suite.id}
                  onClick={() => suite.available && handleSuiteClick(suite.id)}
                  disabled={!suite.available}
                  className={`
                    w-full text-left px-4 py-3 rounded-lg transition-all duration-300
                    ${
                      suite.available
                        ? 'bg-muted/50 hover:bg-gradient-to-r hover:from-[#0b3c74] hover:to-[#e60000] hover:text-white hover:shadow-md text-foreground'
                        : 'bg-muted/20 text-muted-foreground cursor-not-allowed'
                    }
                  `}
                >
                  <div className="font-medium text-sm">{suite.name}</div>
                  {!suite.available && (
                    <div className="text-xs mt-1 opacity-60">Coming Soon</div>
                  )}
                </button>
              ))}
            </nav>
          </>
        ) : (
          <div className="flex flex-col items-center gap-4 pt-2">
            <Sparkles className="w-6 h-6 text-[#e60000]" />
            {suites.map((suite) => (
              <button
                key={suite.id}
                onClick={() => suite.available && handleSuiteClick(suite.id)}
                disabled={!suite.available}
                className={`
                  w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300
                  ${
                    suite.available
                      ? 'bg-muted/50 hover:bg-gradient-to-r hover:from-[#0b3c74] hover:to-[#e60000] hover:text-white'
                      : 'bg-muted/20 text-muted-foreground cursor-not-allowed'
                  }
                `}
                title={suite.name}
              >
                <span className="text-xs font-bold">
                  {suite.name.split(' ').map(word => word[0]).join('')}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
};
