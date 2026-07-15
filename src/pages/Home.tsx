import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, ShieldCheck, TrendingUp, Users, Building } from 'lucide-react';

export const Home: React.FC = () => {
  const [faturamento, setFaturamento] = useState<number>(30000);
  const [atividade, setAtividade] = useState<'servicos' | 'comercio'>('servicos');

  // Simulação simples do cálculo de economia fiscal
  const calcImpostoComum = () => {
    // Custo tributário tradicional estimado (alíquota fictícia comum)
    const taxa = atividade === 'servicos' ? 0.16 : 0.11;
    return faturamento * taxa;
  };

  const calcImpostoAssescor = () => {
    // Custo tributário planejado e otimizado com a Assescor
    const taxa = atividade === 'servicos' ? 0.06 : 0.04;
    return faturamento * taxa;
  };

  const economiaEstimada = calcImpostoComum() - calcImpostoAssescor();

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Seção de Apresentação Principal (Hero) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-assescor-slate-900 via-assescor-slate-800 to-assescor-blue-950 text-white py-20 md:py-32">
        {/* Efeitos de brilho visual de fundo (radial gradient) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-assescor-blue-500/10 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-assescor-gold-500/10 blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Proposta de Valor e Títulos */}
            <div className="space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-assescor-gold-500/10 text-assescor-gold-400 border border-assescor-gold-500/30 tracking-wider uppercase">
                Assessoria Contábil & Imóveis
              </span>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
                Contabilidade inteligente para o seu negócio <span className="text-transparent bg-clip-text bg-gradient-to-r from-assescor-gold-400 to-assescor-gold-500">crescer com segurança.</span>
              </h1>
              <p className="text-lg text-assescor-slate-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                Ajudamos você a legalizar sua empresa, reduzir impostos legalmente e realizar transações e avaliações imobiliárias seguras.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/contratar"
                  className="flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-assescor-gold-500 to-assescor-gold-600 hover:from-assescor-gold-400 hover:to-assescor-gold-500 text-white font-medium rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-base"
                >
                  <span>Abra sua Empresa ou Migre</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/servicos"
                  className="flex items-center justify-center px-8 py-4 bg-assescor-slate-800 hover:bg-assescor-slate-700 text-white font-medium rounded-xl border border-assescor-slate-700 transition-colors text-base"
                >
                  Conhecer Soluções
                </Link>
              </div>
            </div>

            {/* Representação Gráfica / Painel Flutuante */}
            <div className="hidden lg:flex justify-center relative">
              <div className="relative w-full max-w-[440px] aspect-[4/3] bg-gradient-to-tr from-assescor-slate-800/80 to-assescor-slate-900/80 border border-assescor-slate-700/50 rounded-2xl p-8 shadow-2xl backdrop-blur-xl animate-float">
                <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-assescor-gold-500/20 flex items-center justify-center border border-assescor-gold-500/30">
                  <TrendingUp className="w-6 h-6 text-assescor-gold-400" />
                </div>
                <h3 className="font-display font-bold text-white text-2xl mb-2">Painel de Economia</h3>
                <p className="text-sm text-assescor-slate-400 mb-6">Projeção estimada de redução tributária com planejamento fiscal ativo.</p>
                
                <div className="space-y-4">
                  <div className="bg-assescor-slate-900/50 p-4 rounded-xl border border-assescor-slate-800 flex justify-between items-center">
                    <span className="text-sm text-assescor-slate-400">Imposto Tradicional:</span>
                    <span className="font-semibold text-rose-400 text-lg">R$ 4.800,00</span>
                  </div>
                  <div className="bg-assescor-slate-900/50 p-4 rounded-xl border border-assescor-gold-500/20 flex justify-between items-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-1 bg-assescor-gold-500"></div>
                    <span className="text-sm text-assescor-slate-300">Imposto Otimizado:</span>
                    <span className="font-bold text-emerald-400 text-xl">R$ 1.800,00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Grade de Indicadores e Estatísticas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-assescor-slate-200 rounded-3xl p-8 md:p-12 shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-assescor-slate-100">
          <div className="flex flex-col items-center justify-center text-center p-4">
            <span className="font-display font-extrabold text-4xl text-assescor-blue-900 mb-1">+500</span>
            <span className="text-sm font-medium text-assescor-slate-500 uppercase tracking-wider">Clientes Atendidos</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-4">
            <span className="font-display font-extrabold text-4xl text-assescor-blue-900 mb-1">R$ 2.4M</span>
            <span className="text-sm font-medium text-assescor-slate-500 uppercase tracking-wider">Economia em Impostos</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-4">
            <span className="font-display font-extrabold text-4xl text-assescor-blue-900 mb-1">99%</span>
            <span className="text-sm font-medium text-assescor-slate-500 uppercase tracking-wider">Satisfação Geral</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-4">
            <span className="font-display font-extrabold text-4xl text-assescor-blue-900 mb-1">15 Anos</span>
            <span className="text-sm font-medium text-assescor-slate-500 uppercase tracking-wider">De Experiência</span>
          </div>
        </div>
      </section>

      {/* 3. Seção da Calculadora Interativa */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-assescor-blue-950 to-assescor-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl border border-assescor-slate-800">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-assescor-gold-500/20 flex items-center justify-center border border-assescor-gold-500/30 mx-auto">
              <Calculator className="w-6 h-6 text-assescor-gold-400" />
            </div>
            <h2 className="font-display font-bold text-3xl text-white">Simulador de Economia Tributária</h2>
            <p className="text-assescor-slate-300 text-sm md:text-base">
              Veja uma estimativa rápida do quanto você pode economizar em impostos mensais fazendo a migração e o planejamento tributário conosco.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Controles de Entrada */}
            <div className="space-y-8">
              {/* Seletor de Tipo de Atividade */}
              <div>
                <label className="block text-xs font-semibold text-assescor-slate-400 uppercase tracking-wider mb-3">Atividade da Empresa</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setAtividade('servicos')}
                    className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                      atividade === 'servicos'
                        ? 'border-assescor-gold-500 bg-assescor-gold-500/10 text-white font-semibold'
                        : 'border-assescor-slate-800 bg-assescor-slate-900/40 text-assescor-slate-400 hover:text-white'
                    }`}
                  >
                    Prestação de Serviços
                  </button>
                  <button
                    onClick={() => setAtividade('comercio')}
                    className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                      atividade === 'comercio'
                        ? 'border-assescor-gold-500 bg-assescor-gold-500/10 text-white font-semibold'
                        : 'border-assescor-slate-800 bg-assescor-slate-900/40 text-assescor-slate-400 hover:text-white'
                    }`}
                  >
                    Comércio / Varejo
                  </button>
                </div>
              </div>

              {/* Controle Deslizante de Faturamento (Slider) */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-semibold text-assescor-slate-400 uppercase tracking-wider">Faturamento Médio Mensal</label>
                  <span className="text-xl font-bold font-display text-assescor-gold-400">
                    R$ {faturamento.toLocaleString('pt-BR')}
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="200000"
                  step="5000"
                  value={faturamento}
                  onChange={(e) => setFaturamento(Number(e.target.value))}
                  className="w-full h-2 bg-assescor-slate-800 rounded-lg appearance-none cursor-pointer accent-assescor-gold-500"
                />
                <div className="flex justify-between text-[10px] text-assescor-slate-500 mt-2">
                  <span>R$ 5.000</span>
                  <span>R$ 100.000</span>
                  <span>R$ 200.000+</span>
                </div>
              </div>
            </div>

            {/* Painel de Resultados Calculados */}
            <div className="bg-assescor-slate-900/80 rounded-2xl p-6 border border-assescor-slate-800/80 text-center space-y-6 flex flex-col justify-center">
              <div>
                <span className="text-xs font-medium text-assescor-slate-400 uppercase tracking-wider block mb-1">
                  Economia Estimada por Mês
                </span>
                <div className="text-4xl md:text-5xl font-display font-extrabold text-emerald-400">
                  R$ {economiaEstimada.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
              <div className="border-t border-assescor-slate-800 pt-4 flex justify-around text-sm">
                <div>
                  <span className="text-xs text-assescor-slate-500 block">Antes (Estimado)</span>
                  <span className="text-rose-400 font-semibold">R$ {calcImpostoComum().toLocaleString('pt-BR')}</span>
                </div>
                <div>
                  <span className="text-xs text-assescor-slate-500 block">Com Assescor</span>
                  <span className="text-emerald-400 font-bold">R$ {calcImpostoAssescor().toLocaleString('pt-BR')}</span>
                </div>
              </div>
              <Link
                to="/contratar"
                className="w-full py-3 bg-assescor-gold-500 hover:bg-assescor-gold-600 text-white font-semibold rounded-xl transition-all shadow-md text-sm"
              >
                Garantir Essa Economia Agora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Diferenciais da Empresa (Grade de Benefícios) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-display font-bold text-3xl text-assescor-slate-900">Por que escolher a Assescor?</h2>
          <p className="text-assescor-slate-500 text-sm md:text-base">
            Combinamos a precisão técnica da contabilidade com a segurança patrimonial oferecida por corretagem de alta performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-assescor-slate-200 rounded-2xl p-8 hover:border-assescor-gold-500/40 hover:shadow-lg transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-assescor-blue-50 flex items-center justify-center text-assescor-blue-700">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-assescor-slate-900">Compliance & Segurança</h3>
            <p className="text-sm text-assescor-slate-500 leading-relaxed">
              Mantemos seu negócio 100% regular perante a Receita Federal, evitando multas e otimizando taxas tributárias de forma totalmente legal.
            </p>
          </div>

          <div className="bg-white border border-assescor-slate-200 rounded-2xl p-8 hover:border-assescor-gold-500/40 hover:shadow-lg transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-assescor-blue-50 flex items-center justify-center text-assescor-blue-700">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-assescor-slate-900">Abertura e Transição Sem Dor</h3>
            <p className="text-sm text-assescor-slate-500 leading-relaxed">
              Cuidamos de tudo. Se você já tem empresa, migramos toda a sua documentação do seu contador antigo sem interromper sua operação diária.
            </p>
          </div>

          <div className="bg-white border border-assescor-slate-200 rounded-2xl p-8 hover:border-assescor-gold-500/40 hover:shadow-lg transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-assescor-blue-50 flex items-center justify-center text-assescor-blue-700">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-assescor-slate-900">Atendimento Humanizado + IA</h3>
            <p className="text-sm text-assescor-slate-500 leading-relaxed">
              Gerente dedicado para sua conta no WhatsApp e um assistente virtual inteligente disponível 24h para tirar dúvidas tributárias.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
