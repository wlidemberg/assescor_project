import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, HelpCircle } from 'lucide-react';

export const Plans: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Bronze (Empreendedor)',
      description: 'Ideal para MEIs, profissionais liberais e autônomos iniciando suas atividades.',
      price: billingPeriod === 'monthly' ? 199 : 179,
      features: [
        'Apuração mensal de tributos e envio de guias',
        'Declaração anual do Simples/MEI',
        'Suporte por e-mail e chat virtual',
        'Acesso ao painel do cliente',
        'Controle básico de faturamento',
      ],
      notIncluded: [
        'Folha de pagamento e eSocial',
        'BPO Financeiro integrado',
        'Reunião de planejamento trimestral',
        'Gerente de conta dedicado',
      ],
      cta: 'Contratar Bronze',
      popular: false,
    },
    {
      name: 'Prata (Crescimento)',
      description: 'Perfeito para micro e pequenas empresas (ME/EPP) que buscam conformidade e agilidade.',
      price: billingPeriod === 'monthly' ? 399 : 359,
      features: [
        'Toda a apuração tributária (Simples Nacional)',
        'Departamento Pessoal (até 5 funcionários)',
        'Envio de obrigações fiscais acessórias',
        'Acesso completo à Área do Cliente',
        'Suporte por e-mail e WhatsApp comercial',
        'Planejamento tributário inicial',
      ],
      notIncluded: [
        'BPO Financeiro integrado',
        'Reunião de planejamento trimestral',
        'Gerente de conta dedicado',
      ],
      cta: 'Contratar Prata',
      popular: true,
    },
    {
      name: 'Ouro (Corporativo)',
      description: 'Solução completa para médias empresas com gestão financeira terceirizada integrada.',
      price: billingPeriod === 'monthly' ? 799 : 719,
      features: [
        'Apuração fiscal de regimes complexos',
        'Departamento Pessoal (até 15 funcionários)',
        'BPO Financeiro e Fluxo de Caixa integrado',
        'Gerente de conta dedicado no WhatsApp',
        'Reunião de planejamento fiscal trimestral',
        'Relatórios de Controladoria Mensais',
        'Integração direta com assessoria imobiliária',
      ],
      notIncluded: [],
      cta: 'Contratar Ouro',
      popular: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-semibold text-assescor-gold-500 uppercase tracking-widest bg-assescor-gold-50/80 px-3 py-1 rounded-full border border-assescor-gold-200">
          Tabela de Investimento
        </span>
        <h1 className="font-display font-bold text-4xl text-assescor-slate-900 sm:text-5xl">
          Planos claros, sem taxas escondidas
        </h1>
        <p className="text-lg text-assescor-slate-500 font-light">
          Escolha o pacote que mais se alinha com o volume operacional da sua empresa. Economize 10% optando pelo pagamento anual.
        </p>
      </div>

      {/* Toggle Selector */}
      <div className="flex justify-center items-center space-x-4">
        <span className={`text-sm font-semibold ${billingPeriod === 'monthly' ? 'text-assescor-blue-900' : 'text-assescor-slate-400'}`}>
          Mensal
        </span>
        <button
          onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
          className="w-12 h-6 rounded-full bg-assescor-slate-200 p-1 flex items-center relative transition-colors"
          style={{ backgroundColor: billingPeriod === 'annual' ? '#d99e12' : '#cbd5e1' }}
          aria-label="Alternar período de cobrança"
        >
          <span
            className={`w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-200 ${
              billingPeriod === 'annual' ? 'translate-x-6' : 'translate-x-0'
            }`}
          ></span>
        </button>
        <span className={`text-sm font-semibold flex items-center ${billingPeriod === 'annual' ? 'text-assescor-blue-900' : 'text-assescor-slate-400'}`}>
          Anual <span className="ml-1.5 text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full uppercase">Economize 10%</span>
        </span>
      </div>

      {/* Plans Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white border rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
              plan.popular
                ? 'border-assescor-gold-500 shadow-2xl ring-2 ring-assescor-gold-500/20 md:scale-105'
                : 'border-assescor-slate-200 shadow-lg hover:shadow-xl'
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-assescor-gold-500 text-white text-xs font-bold py-1 px-4 rounded-full uppercase tracking-wider">
                Mais Recomendado
              </span>
            )}

            <div>
              <div className="space-y-4 mb-6">
                <h3 className="font-display font-bold text-xl text-assescor-slate-900">{plan.name}</h3>
                <p className="text-xs text-assescor-slate-400 leading-relaxed min-h-[40px]">{plan.description}</p>
                <div className="flex items-baseline pt-2">
                  <span className="text-xs text-assescor-slate-400 font-medium">R$</span>
                  <span className="text-5xl font-display font-extrabold text-assescor-slate-950 px-1">
                    {plan.price}
                  </span>
                  <span className="text-xs text-assescor-slate-400 font-medium">/ mês</span>
                </div>
                {billingPeriod === 'annual' && (
                  <span className="text-[10px] text-emerald-600 font-medium block">
                    Cobrado anualmente (R$ {(plan.price * 12).toLocaleString('pt-BR')}/ano)
                  </span>
                )}
              </div>

              <div className="border-t border-assescor-slate-100 pt-6">
                <h4 className="text-xs font-bold text-assescor-slate-400 uppercase tracking-wider mb-4">
                  O que está incluso:
                </h4>
                <ul className="space-y-3.5">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs text-assescor-slate-700 leading-relaxed font-medium">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mr-2.5 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs text-assescor-slate-400 leading-relaxed font-medium">
                      <span className="w-4 h-4 text-assescor-slate-200 text-center font-bold flex-shrink-0 mr-2.5 mt-0.5 select-none">-</span>
                      <span className="line-through">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <Link
                to="/contratar"
                className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all duration-300 text-center block ${
                  plan.popular
                    ? 'bg-assescor-gold-500 hover:bg-assescor-gold-600 text-white shadow-lg shadow-assescor-gold-500/20'
                    : 'bg-assescor-slate-900 hover:bg-assescor-blue-950 text-white hover:shadow-lg'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Extra Advice Banner */}
      <section className="bg-assescor-slate-100 border border-assescor-slate-200 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-start space-x-4 max-w-2xl">
          <HelpCircle className="w-10 h-10 text-assescor-gold-500 flex-shrink-0 mt-1" />
          <div className="space-y-1">
            <h3 className="font-display font-bold text-lg text-assescor-slate-900">Precisa de um plano personalizado?</h3>
            <p className="text-xs md:text-sm text-assescor-slate-500 leading-relaxed">
              Caso seu faturamento mensal ultrapasse R$ 200 mil ou você necessite de contabilidade para Lucro Real, entre em contato para desenharmos uma proposta sob medida com nossa equipe de controladoria.
            </p>
          </div>
        </div>
        <Link
          to="/contato"
          className="px-6 py-3 bg-white hover:bg-assescor-slate-50 border border-assescor-slate-300 text-assescor-blue-900 font-semibold rounded-xl transition-all text-sm whitespace-nowrap"
        >
          Fale Conosco
        </Link>
      </section>
    </div>
  );
};
