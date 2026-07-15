import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, User } from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

export const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Olá! Sou o Assistente Virtual da Assescor. Posso ajudar você a tirar dúvidas sobre tributos, abertura de empresas ou migração de contabilidade. O que você gostaria de saber hoje?',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const quickReplies = [
    { text: 'Como abrir uma empresa?', keyword: 'abrir' },
    { text: 'Como migrar de contador?', keyword: 'migrar' },
    { text: 'O que é Simples Nacional?', keyword: 'simples' },
    { text: 'Falar com um especialista', keyword: 'especialista' },
  ];

  const getBotResponse = (input: string): string => {
    const text = input.toLowerCase();
    
    if (text.includes('abrir') || text.includes('abertura') || text.includes('legalizar') || text.includes('criar empresa')) {
      return 'Para abrir sua empresa, nós cuidamos de toda a burocracia! Precisaremos definir: 1) Atividade (CNAE), 2) Quadro societário e 3) Capital Social. Você pode simular a abertura diretamente na nossa aba "Contratar" ou clicar em "Falar com especialista" para te ligarmos!';
    }
    
    if (text.includes('migrar') || text.includes('mudar') || text.includes('trocar') || text.includes('contador')) {
      return 'Migrar para a Assescor é simples e rápido! Nós cuidamos da transição com a sua contabilidade anterior, sem complicação ou multas. Você só precisa fornecer o seu CNPJ atual e o faturamento médio. Acesse a página "Contratar" para ver sua proposta de transição agora mesmo!';
    }
    
    if (text.includes('simples') || text.includes('nacional') || text.includes('tributo') || text.includes('regime')) {
      return 'O Simples Nacional é um regime tributário simplificado para micro e pequenas empresas, unificando 8 impostos em uma única guia (DAS). A alíquota inicial para serviços costuma ser de 6% (Anexo III). Quer que façamos um cálculo comparativo gratuito com Lucro Presumido para o seu negócio?';
    }
    
    if (text.includes('especialista') || text.includes('humano') || text.includes('contato') || text.includes('falar') || text.includes('ligar')) {
      return 'Com certeza! Você pode falar direto com nosso time de atendimento humano clicando no botão do WhatsApp logo abaixo, ou preenchendo o formulário de contato na página "/contato". Qual o seu telefone com DDD para entrarmos em contato?';
    }

    if (text.includes('mei')) {
      return 'O MEI (Microempreendedor Individual) é ideal para quem fatura até R$ 81 mil por ano e tem no máximo 1 funcionário. O imposto mensal é fixo e baixo (cerca de R$ 70-80). Caso seu faturamento supere isso, ajudamos você a desenquadrar e migrar para Microempresa (ME) de forma segura!';
    }

    return 'Entendi sua mensagem. Nós da Assescor oferecemos assessoria contábil completa, planejamento tributário avançado e corretagem imobiliária (venda, locação e avaliação de imóveis). Gostaria que um especialista entrasse em contato para analisar seu caso sem compromisso? Se sim, me informe seu e-mail ou telefone.';
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Math.random().toString(),
      sender: 'user',
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simular atraso na resposta do robô assistente
    setTimeout(() => {
      const responseText = getBotResponse(text);
      const botMessage: Message = {
        id: Math.random().toString(),
        sender: 'bot',
        text: responseText,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage(inputValue);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-40">
      {/* Botão Flutuante de Ação */}
      {!isOpen && (
        <div className="group relative">
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-assescor-slate-900 text-white text-xs font-medium py-2 px-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-assescor-slate-800">
            Dúvidas Tributárias? Pergunte à IA
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-assescor-blue-800 to-assescor-blue-900 text-assescor-gold-400 hover:text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-6 active:scale-95 border border-assescor-gold-500/40 relative"
            aria-label="Abrir assistente virtual"
          >
            <Bot className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-assescor-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-assescor-gold-500"></span>
            </span>
          </button>
        </div>
      )}

      {/* Caixa de Conversa Expandida (Chatbox) */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-assescor-slate-200 flex flex-col overflow-hidden animate-fadeIn select-none">
          {/* Cabeçalho do Chat */}
          <div className="bg-gradient-to-r from-assescor-slate-900 to-assescor-blue-950 p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-assescor-slate-800 flex items-center justify-center border border-assescor-gold-500/30">
                <Bot className="w-6 h-6 text-assescor-gold-400" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-sm leading-tight text-white">
                  Assistente Virtual Assescor
                </h3>
                <span className="text-[10px] text-emerald-400 flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block mr-1 animate-pulse"></span>
                  Online e Pronto
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-assescor-slate-400 hover:text-white hover:bg-assescor-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mensagens da Conversa */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start space-x-2 ${
                  msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                    msg.sender === 'user'
                      ? 'bg-assescor-gold-500 text-white'
                      : 'bg-assescor-slate-200 text-assescor-slate-700'
                  }`}
                >
                  {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-assescor-blue-600 text-white rounded-tr-none'
                      : 'bg-white text-assescor-slate-800 border border-assescor-slate-200 rounded-tl-none'
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-line">{msg.text}</p>
                  <span
                    className={`block text-[9px] mt-1 text-right ${
                      msg.sender === 'user' ? 'text-assescor-blue-200' : 'text-assescor-slate-400'
                    }`}
                  >
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-assescor-slate-200 flex items-center justify-center text-xs text-assescor-slate-700 flex-shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-assescor-slate-200 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                  <div className="flex space-x-1">
                    <span className="w-2 h-2 bg-assescor-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-assescor-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-assescor-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Respostas Rápidas (Atalhos) */}
          <div className="p-3 border-t border-assescor-slate-100 bg-white flex flex-wrap gap-1.5">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(reply.text)}
                className="text-[11px] font-medium text-assescor-blue-700 bg-assescor-blue-50 border border-assescor-blue-100 hover:bg-assescor-blue-100 rounded-full py-1.5 px-3 transition-colors text-left"
              >
                {reply.text}
              </button>
            ))}
          </div>

          {/* Área de Envio de Mensagem */}
          <div className="p-3 bg-white border-t border-assescor-slate-200 flex items-center space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Digite sua dúvida aqui..."
              className="flex-1 bg-assescor-slate-50 border border-assescor-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-assescor-gold-500 focus:border-assescor-gold-500 placeholder-assescor-slate-400"
            />
            <button
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim()}
              className="p-2.5 rounded-xl bg-assescor-slate-900 text-assescor-gold-400 hover:text-white hover:bg-assescor-blue-950 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
