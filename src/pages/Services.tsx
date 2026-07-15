import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, BadgeDollarSign, Landmark, ChevronRight, UserCheck, Home, Key, ClipboardCheck } from 'lucide-react';

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'contabilidade' | 'corretagem'>('contabilidade');

  const contabilidadeServices = [
    {
      title: 'Abertura e Legalização de Empresas',
      description: 'Estruturação completa da sua empresa, desde a escolha do CNAE correto, contrato social, registros e alvarás.',
      details: ['Definição do Regime Tributário Ideal', 'Emissão de CNPJ e Cadastro Municipal/Estadual', 'Registro na Junta Comercial', 'Alvará de Funcionamento e Licenças'],
      icon: Landmark,
    },
    {
      title: 'Planejamento Tributário e Fiscal',
      description: 'Análise aprofundada da operação para reduzir legalmente a carga de impostos e aproveitar incentivos fiscais.',
      details: ['Cálculo Comparativo de Regimes', 'Recuperação de Créditos Fiscais', 'Apuração de Impostos (Simples, Presumido, Real)', 'Obrigações Acessórias Sem Erros'],
      icon: BadgeDollarSign,
    },
    {
      title: 'BPO Financeiro e Controladoria',
      description: 'Terceirização da sua gestão de contas a pagar, receber, fluxo de caixa e relatórios de lucros periódicos.',
      details: ['Conciliação Bancária Diária', 'Emissão de Notas Fiscais e Boletos', 'Relatórios Mensais de DRE e Balanço', 'Previsão de Fluxo de Caixa'],
      icon: BookOpen,
    },
    {
      title: 'Departamento Pessoal e Trabalhista',
      description: 'Gestão completa de admissões, rescisões, folha de pagamento e obrigações do eSocial de forma segura.',
      details: ['Processamento de Folha de Pagamento', 'Cálculos de Férias e Rescisões', 'Envio de dados ao eSocial', 'Orientação da Legislação Trabalhista'],
      icon: UserCheck,
    },
  ];

  const corretagemServices = [
    {
      title: 'Venda de Imóveis',
      description: 'Assessoria completa na compra e venda de imóveis residenciais, comerciais e corporativos, garantindo total segurança jurídica.',
      details: [
        'Divulgação nos principais portais imobiliários',
        'Fotos e vídeos profissionais do imóvel',
        'Análise cadastral e jurídica completa',
        'Acompanhamento pós-venda e escrituração',
      ],
      icon: Home,
    },
    {
      title: 'Locação de Imóveis',
      description: 'Gestão eficiente e segura para alugar seu imóvel ou encontrar o espaço ideal para o seu negócio, sem burocracia.',
      details: [
        'Análise de crédito e garantia locatícia',
        'Vistoria detalhada com laudo fotográfico',
        'Elaboração de contratos de locação seguros',
        'Cobrança e repasse financeiro automatizados',
      ],
      icon: Key,
    },
    {
      title: 'Avaliação de Imóveis',
      description: 'Parecer técnico especializado para determinar o valor real de mercado do seu patrimônio com precisão e conformidade legal.',
      details: [
        'Emissão de Laudo Técnico (PTAM)',
        'Análise comparativa de mercado detalhada',
        'Avaliação para fins judiciais e extrajudiciais',
        'Peritos credenciados e registrados no CNAI',
      ],
      icon: ClipboardCheck,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-semibold text-assescor-gold-500 uppercase tracking-widest bg-assescor-gold-50/80 px-3 py-1 rounded-full border border-assescor-gold-200">
          Nossas Soluções
        </span>
        <h1 className="font-display font-bold text-4xl text-assescor-slate-900 sm:text-5xl">
          Especialidades que impulsionam seu negócio
        </h1>
        <p className="text-lg text-assescor-slate-500 font-light">
          Uma estrutura robusta que atende desde as obrigações fiscais básicas até a intermediação e avaliação de imóveis de alta performance.
        </p>
      </div>

      {/* Tabs Selector */}
      <div className="flex justify-center">
        <div className="bg-assescor-slate-100 p-1.5 rounded-2xl flex space-x-1 border border-assescor-slate-200 max-w-md w-full">
          <button
            onClick={() => setActiveTab('contabilidade')}
            className={`flex-1 py-3.5 px-6 rounded-xl text-sm font-semibold tracking-wide transition-all ${
              activeTab === 'contabilidade'
                ? 'bg-white text-assescor-blue-900 shadow-md border border-assescor-slate-200'
                : 'text-assescor-slate-500 hover:text-assescor-slate-900'
            }`}
          >
            Contabilidade & BPO
          </button>
          <button
            onClick={() => setActiveTab('corretagem')}
            className={`flex-1 py-3.5 px-6 rounded-xl text-sm font-semibold tracking-wide transition-all ${
              activeTab === 'corretagem'
                ? 'bg-white text-assescor-blue-900 shadow-md border border-assescor-slate-200'
                : 'text-assescor-slate-500 hover:text-assescor-slate-900'
            }`}
          >
            Corretagem Imobiliária
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {activeTab === 'contabilidade'
          ? contabilidadeServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-assescor-slate-200 rounded-3xl p-8 hover:border-assescor-gold-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-assescor-blue-50 flex items-center justify-center text-assescor-blue-800 border border-assescor-blue-100/50">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-display font-bold text-xl text-assescor-slate-900">{service.title}</h3>
                      <p className="text-sm text-assescor-slate-500 leading-relaxed">{service.description}</p>
                    </div>
                    <ul className="space-y-2 border-t border-assescor-slate-100 pt-5">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-xs text-assescor-slate-600 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-assescor-gold-500 mr-2.5 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 pt-4">
                    <Link
                      to="/contratar"
                      className="inline-flex items-center text-sm font-semibold text-assescor-blue-700 hover:text-assescor-blue-900 group"
                    >
                      <span>Solicitar Proposta</span>
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              );
            })
          : corretagemServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-assescor-slate-200 rounded-3xl p-8 hover:border-assescor-gold-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-assescor-blue-50 flex items-center justify-center text-assescor-blue-800 border border-assescor-blue-100/50">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-display font-bold text-xl text-assescor-slate-900">{service.title}</h3>
                      <p className="text-sm text-assescor-slate-500 leading-relaxed">{service.description}</p>
                    </div>
                    <ul className="space-y-2 border-t border-assescor-slate-100 pt-5">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-xs text-assescor-slate-600 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-assescor-gold-500 mr-2.5 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 pt-4">
                    <Link
                      to="/contato"
                      className="inline-flex items-center text-sm font-semibold text-assescor-blue-700 hover:text-assescor-blue-900 group"
                    >
                      <span>Falar com um Corretor</span>
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
      </div>

      {/* Conversion Banner */}
      <section className="bg-gradient-to-r from-assescor-blue-950 to-assescor-slate-900 text-white rounded-3xl p-8 md:p-12 text-center space-y-6 border border-assescor-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-assescor-gold-500/5 blur-[80px] pointer-events-none"></div>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-white">Não sabe qual serviço atende melhor o seu momento?</h2>
        <p className="text-sm md:text-base text-assescor-slate-300 max-w-xl mx-auto font-light">
          Converse com um de nossos assessores corporativos. Faremos um diagnóstico rápido e gratuito da sua operação fiscal.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
          <Link
            to="/contratar"
            className="px-6 py-3 bg-assescor-gold-500 hover:bg-assescor-gold-600 text-white font-semibold rounded-xl transition-all shadow-md text-sm"
          >
            Fazer Diagnóstico Online
          </Link>
          <a
            href="https://wa.me/551132548900"
            className="px-6 py-3 bg-assescor-slate-800 hover:bg-assescor-slate-700 border border-assescor-slate-700 text-white font-semibold rounded-xl transition-all text-sm"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};
