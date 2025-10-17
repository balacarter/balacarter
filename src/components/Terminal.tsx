'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';

interface TerminalLine {
  type: 'input' | 'output' | 'error';
  content: string;
}

interface CommandResult {
  output: string[];
  error?: boolean;
}

// Safe command definitions - no code execution
const COMMANDS: Record<string, CommandResult> = {
  help: {
    output: [
      'Available commands:',
      '  about          - Learn about me',
      '  skills         - View my technical skills',
      '  experience     - See my work experience',
      '  projects       - Check out my projects',
      '  contact        - Get in touch',
      '  navigate <section> - Jump to a section (about, skills, experience, contact)',
      '  clear          - Clear the terminal',
      '  help           - Show this help message',
    ],
  },
  about: {
    output: [
      'Bala Carter',
      'Software Engineer',
      '',
      'Frontend specialist transitioning to full-stack development.',
      'Passionate about building modern, performant web applications.',
      '',
      'Currently working with React, TypeScript, and Node.js.',
    ],
  },
  skills: {
    output: [
      'Technical Skills:',
      '',
      '  Frontend:',
      '    • React, Preact, Next.js',
      '    • TypeScript, JavaScript',
      '    • HTML5, CSS3, Tailwind CSS',
      '    • Responsive Design, Accessibility',
      '',
      '  Backend (Learning):',
      '    • Node.js, Express',
      '    • Python, FastAPI',
      '    • RESTful APIs',
      '',
      '  Tools & Other:',
      '    • Git, GitHub',
      '    • VS Code, Windsurf',
      '    • Performance Optimization',
    ],
  },
  experience: {
    output: [
      'Work Experience:',
      '',
      'Current: Full Stack Engineer',
      '  • Building scalable web applications',
      '  • Frontend development with React & TypeScript',
      '  • Transitioning to full-stack role',
      '',
      'Type "projects" to see what I\'ve built!',
    ],
  },
  projects: {
    output: [
      'Recent Projects:',
      '',
      '  1. Personal Portfolio (This site!)',
      '     • Next.js 15, TypeScript, Tailwind CSS',
      '     • Interactive CLI, Contact form with backend',
      '     • Modular architecture, Type-safe APIs',
      '',
      '  2. Python Personal Projects',
      '     • Various backend experiments',
      '     • API development and scripting',
      '',
      'Scroll down to see more details!',
    ],
  },
  contact: {
    output: [
      'Get in touch:',
      '',
      '  • Scroll to the contact section below',
      '  • Or type: navigate contact',
      '',
      'Looking forward to hearing from you!',
    ],
  },
};

export default function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: 'output',
      content: 'Welcome to my portfolio! Type "help" to get started.',
    },
    { type: 'output', content: '' },
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new lines are added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    // Add input to history
    setLines((prev) => [...prev, { type: 'input', content: `$ ${cmd}` }]);

    // Handle special commands
    if (trimmedCmd === 'clear') {
      setLines([]);
      return;
    }

    if (trimmedCmd === 'navigate') {
      setLines((prev) => [
        ...prev,
        { type: 'output', content: 'Usage: navigate <section>' },
        {
          type: 'output',
          content: 'Available sections: about, skills, experience, contact',
        },
        { type: 'output', content: '' },
      ]);
      return;
    }

    if (trimmedCmd.startsWith('navigate ')) {
      const section = trimmedCmd.split(' ')[1];
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setLines((prev) => [
          ...prev,
          { type: 'output', content: `Navigating to ${section}...` },
          { type: 'output', content: '' },
        ]);
      } else {
        setLines((prev) => [
          ...prev,
          {
            type: 'error',
            content: `Section "${section}" not found. Try: about, skills, experience, contact`,
          },
          { type: 'output', content: '' },
        ]);
      }
      return;
    }

    // Execute predefined command
    const result = COMMANDS[trimmedCmd];
    if (result) {
      const outputLines = result.output.map((line) => ({
        type: (result.error ? 'error' : 'output') as 'output' | 'error',
        content: line,
      }));
      setLines((prev) => [
        ...prev,
        ...outputLines,
        { type: 'output', content: '' },
      ]);
    } else if (trimmedCmd) {
      setLines((prev) => [
        ...prev,
        {
          type: 'error',
          content: `Command not found: ${trimmedCmd}. Type "help" for available commands.`,
        },
        { type: 'output', content: '' },
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add to command history
    setCommandHistory((prev) => [...prev, input]);
    setHistoryIndex(-1);

    executeCommand(input);
    setInput('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // Navigate command history with up/down arrows
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Rainbow border wrapper */}
      <div className="relative p-[2px] rounded-xl overflow-hidden [background-clip:content-box] bg-gray-900">
        {/* Rotating gradient background - sits behind due to z-index */}
        <div
          className="absolute animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,#ff0000,#ff7f00,#ffff00,#00ff00,#0000ff,#8b00ff,#ff0000)]"
          style={{
            width: '350%',
            height: '300%',
            top: '-300px',
            left: '-460px',
          }}
        ></div>

        {/* Terminal container */}
        <div className="relative rounded-[10px] shadow-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
          {/* Subtle accent glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none animate-[glow-pulse_4s_ease-in-out_infinite]"></div>

          {/* Terminal Header */}
          <div className="relative bg-gradient-to-r from-gray-800 to-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700/50 backdrop-blur-sm">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-500/80 transition-all cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/80 transition-all cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50 hover:shadow-green-500/80 transition-all cursor-pointer"></div>
            </div>
            <span className="text-gray-400 text-sm ml-2 font-mono">
              guest@portfolio:~
            </span>
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalRef}
            onClick={() => inputRef.current?.focus()}
            className="relative p-4 h-96 overflow-y-auto font-mono text-sm cursor-text bg-black/10"
          >
            {lines.map((line, i) => (
              <div
                key={i}
                className={`${
                  line.type === 'input'
                    ? 'text-green-400'
                    : line.type === 'error'
                      ? 'text-red-400'
                      : 'text-gray-300'
                }`}
              >
                {line.content}
              </div>
            ))}

            {/* Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center">
              <span className="text-green-400 mr-2 font-bold">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-gray-100 caret-green-400 placeholder:text-gray-600"
                autoFocus
                spellCheck={false}
                autoComplete="off"
              />
            </form>
          </div>
        </div>
      </div>

      {/* Hint */}
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
        Try typing{' '}
        <code className="bg-gray-800/80 px-2 py-1 rounded text-green-400 border border-gray-700/50 font-mono text-xs">
          help
        </code>{' '}
        to get started
      </p>
    </div>
  );
}
