'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { TERMINAL_COMMANDS, VALID_SECTIONS, ValidSection } from '@/data/terminal-commands';

interface TerminalLine {
  type: 'input' | 'output' | 'error';
  content: string;
}

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
          content: `Available sections: ${VALID_SECTIONS.join(', ')}`,
        },
        { type: 'output', content: '' },
      ]);
      return;
    }

    if (trimmedCmd.startsWith('navigate ')) {
      const section = trimmedCmd.split(' ')[1] as ValidSection;
      const element = document.getElementById(section);
      if (element && VALID_SECTIONS.includes(section)) {
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
            content: `Section "${section}" not found. Try: ${VALID_SECTIONS.join(', ')}`,
          },
          { type: 'output', content: '' },
        ]);
      }
      return;
    }

    // Execute predefined command
    const result = TERMINAL_COMMANDS[trimmedCmd];
    if (result) {
      const outputLines = result.output.map((line: string) => ({
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
    <div className="w-full h-full flex flex-col">
      {/* Rainbow border wrapper */}
      <div className="relative p-[2px] rounded-xl overflow-hidden [background-clip:content-box] bg-gray-900 flex-1 flex flex-col">
        {/* Rotating gradient background - sits behind due to z-index */}
        <div
          className="absolute animate-[spin_3s_linear_infinite]"
          style={{
            width: '300%',
            height: '300%',
            top: '-100%',
            left: '-100%',
            background: 'conic-gradient(from 0deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff, #ff0000)',
            borderRadius: '50%',
          }}
        ></div>

        {/* Terminal container */}
        <div className="relative rounded-[10px] shadow-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 flex-1 flex flex-col">
          {/* Subtle accent glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none animate-[glow-pulse_4s_ease-in-out_infinite]"></div>

          {/* Terminal Header */}
          <div className="relative bg-gradient-to-r from-gray-800 to-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700/50 backdrop-blur-sm flex-shrink-0">
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
            className="relative p-4 flex-1 overflow-y-auto font-mono text-sm cursor-text bg-black/10 min-h-0"
            role="log"
            aria-live="polite"
            aria-label="Terminal output"
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
                aria-label="Terminal command input"
                autoFocus
                spellCheck={false}
                autoComplete="off"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
