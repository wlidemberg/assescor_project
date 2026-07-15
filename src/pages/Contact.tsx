import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const Contact: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: 'Quais documentos são necessários para migrar de contabilidade?',
      answer: 'Para efetuar a migração, precisamos do Contrato Social atualizado, CNPJ, Inscrição Municipal/Estadual, código de acesso do Simples Nacional (se aplicável), balancetes e livro diário do último período, além da relação de funcionários ativos.',
    },
    {
      question: 'Quanto tempo leva para abrir uma empresa do zero?',
      answer: 'No estado de São Paulo, o processo costuma levar entre 5 e 10 dias úteis, dependendo da liberação do cadastro na Junta Comercial e dos alvarás da Prefeitura. Nós cuidamos de todas as etapas burocráticas.',
    },
    {
      question: 'O que faz o BPO Financeiro da Assescor?',
      answer: 'O BPO Financeiro terceiriza as operações de contas a pagar, contas a receber, conciliação bancária diária e emissão de notas fiscais da sua empresa, gerando relatórios de fluxo de caixa em tempo real para tomada de decisão.',
    },
    {
      question: 'A Assescor oferece assessoria para outros estados?',
      answer: 'Sim! Atendemos de forma 100% digital e segura empresas de serviços em todo o território nacional, e de comércio de acordo com a compatibilidade tributária estadual.',
    },
  ];

  const handleToggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nome && email && assunto && mensagem) {
      setSubmitted(true);
      setNome('');
      setEmail('');
      setAssunto('');
      setMensagem('');
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-semibold text-assescor-gold-500 uppercase tracking-widest bg-assescor-gold-50/80 px-3 py-1 rounded-full border border-assescor-gold-200">
          Canais de Atendimento
        </span>
        <h1 className="font-display font-bold text-4xl text-assescor-slate-900 sm:text-5xl">
          Fale com nossa equipe
        </h1>
        <p className="text-lg text-assescor-slate-500 font-light">
          Estamos prontos para atender suas demandas fiscais, societárias e imobiliárias.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Info Box */}
        <div className="bg-gradient-to-tr from-assescor-slate-900 to-assescor-blue-950 text-white rounded-3xl p-8 md:p-10 border border-assescor-slate-800 space-y-8 lg:col-span-1">
          <div className="space-y-3">
            <h3 className="font-display font-bold text-xl text-white">Informações Corporativas</h3>
            <p className="text-xs text-assescor-slate-400">Entre em contato direto através dos nossos canais oficiais ou visite nossa sede física.</p>
          </div>

          <div className="space-y-6 pt-4 border-t border-assescor-slate-800">
            <div className="flex items-start space-x-4 text-xs">
              <MapPin className="w-5 h-5 text-assescor-gold-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-1">Escritório Central</strong>
                <span className="text-assescor-slate-300">Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100</span>
              </div>
            </div>

            <div className="flex items-start space-x-4 text-xs">
              <Phone className="w-5 h-5 text-assescor-gold-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-1">Telefone Comercial</strong>
                <span className="text-assescor-slate-300">(11) 3254-8900</span>
              </div>
            </div>

            <div className="flex items-start space-x-4 text-xs">
              <Mail className="w-5 h-5 text-assescor-gold-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-1">E-mail para Orçamentos</strong>
                <span className="text-assescor-slate-300">contato@assescor.com.br</span>
              </div>
            </div>

            <div className="flex items-start space-x-4 text-xs">
              <Clock className="w-5 h-5 text-assescor-gold-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-1">Horário de Funcionamento</strong>
                <span className="text-assescor-slate-300">Segunda a Sexta: 08:30h às 18:00h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Box */}
        <div className="bg-white border border-assescor-slate-200 rounded-3xl p-8 md:p-10 shadow-xl lg:col-span-2 space-y-6">
          <div className="space-y-2">
            <h3 className="font-display font-bold text-2xl text-assescor-slate-900">Envie uma mensagem</h3>
            <p className="text-xs text-assescor-slate-400">Preencha o formulário abaixo e responderemos seu contato em até 2 horas comerciais.</p>
          </div>

          {submitted && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold rounded-xl">
              Mensagem enviada com sucesso! Um consultor entrará em contato em breve.
            </div>
          )}

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-assescor-slate-500 uppercase tracking-wider mb-2">Nome Completo</label>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full bg-white border border-assescor-slate-200 rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-assescor-gold-500 focus:border-assescor-gold-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-assescor-slate-500 uppercase tracking-wider mb-2">E-mail</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu e-mail"
                  className="w-full bg-white border border-assescor-slate-200 rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-assescor-gold-500 focus:border-assescor-gold-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-assescor-slate-500 uppercase tracking-wider mb-2">Assunto</label>
              <input
                type="text"
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
                placeholder="Ex: Dúvidas sobre tributação, Orçamento"
                className="w-full bg-white border border-assescor-slate-200 rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-assescor-gold-500 focus:border-assescor-gold-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-assescor-slate-500 uppercase tracking-wider mb-2">Mensagem</label>
              <textarea
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Escreva sua mensagem aqui..."
                rows={4}
                className="w-full bg-white border border-assescor-slate-200 rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-assescor-gold-500 focus:border-assescor-gold-500 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-assescor-slate-900 hover:bg-assescor-blue-950 text-white font-semibold rounded-xl text-xs flex items-center justify-center space-x-2 transition-all shadow-md"
            >
              <Send className="w-4 h-4 text-assescor-gold-400" />
              <span>Enviar Mensagem</span>
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-display font-bold text-3xl text-assescor-slate-900">Perguntas Frequentes</h2>
          <p className="text-sm text-assescor-slate-500">Respostas rápidas para as dúvidas tributárias mais recorrentes.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-assescor-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => handleToggleFaq(index)}
                className="w-full p-5 text-left flex justify-between items-center font-display font-semibold text-sm text-assescor-slate-900 hover:bg-slate-50"
              >
                <span>{faq.question}</span>
                {openFaqIndex === index ? (
                  <ChevronUp className="w-4 h-4 text-assescor-gold-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-assescor-gold-500 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === index && (
                <div className="p-5 border-t border-assescor-slate-100 bg-slate-50/50 text-xs leading-relaxed text-assescor-slate-500 font-medium">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
