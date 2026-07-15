import React, { useState, useEffect } from 'react';
import { Lock, LogOut, CheckCircle, Calendar, CreditCard, Building, FileText, AlertCircle, Sparkles } from 'lucide-react';

interface Obligation {
  id: string;
  title: string;
  dueDate: string;
  description: string;
  completed: boolean;
}

interface Invoice {
  id: string;
  name: string;
  value: number;
  dueDate: string;
  status: 'A pagar' | 'Pago';
}

export const ClientArea: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Estado do Painel de Controle (Dashboard)
  const [companyDetails, setCompanyDetails] = useState({
    razaoSocial: 'Assescor Comercial Ltda',
    cnpj: '12.345.678/0001-90',
    regime: 'Simples Nacional',
  });

  const [obligations, setObligations] = useState<Obligation[]>([
    { id: '1', title: 'Enviar Notas Fiscais de Entrada/Saída', dueDate: '05/08/2026', description: 'Necessário para fechar o balancete fiscal do mês.', completed: false },
    { id: '2', title: 'Reunião Mensal de Resultados', dueDate: '15/08/2026', description: 'Alinhamento estratégico com seu gerente tributário da Assescor.', completed: false },
    { id: '3', title: 'Assinar Prorrogação de Convenção', dueDate: '20/08/2026', description: 'Assinatura digital via Clicksign do acordo do sindicato.', completed: true },
  ]);

  const [invoices, setInvoices] = useState<Invoice[]>([
    { id: 'inv-1', name: 'Guia DAS (Simples Nacional)', value: 1240.50, dueDate: '20/08/2026', status: 'A pagar' },
    { id: 'inv-2', name: 'Mensalidade Assessoria Assescor', value: 399.00, dueDate: '10/08/2026', status: 'Pago' },
    { id: 'inv-3', name: 'Guia FGTS Digital', value: 450.20, dueDate: '07/08/2026', status: 'A pagar' },
  ]);

  // Estado do Modal de Pagamento
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [showPayModal, setShowPayModal] = useState(false);

  // Carrega os dados do usuário cadastrado no Local Storage se disponível
  useEffect(() => {
    const saved = localStorage.getItem('assescor_registered_user');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        // Se estiver logado, preenchemos com os dados da empresa cadastrada
        if (isLoggedIn) {
          setCompanyDetails({
            razaoSocial: data.empresa.razaoSocial,
            cnpj: data.empresa.cnpj,
            regime: data.empresa.regime,
          });
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, [isLoggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Verifica contas criadas no Local Storage
    const saved = localStorage.getItem('assescor_registered_user');
    if (saved) {
      const data = JSON.parse(saved);
      if (email === data.email && password === data.password) {
        setIsLoggedIn(true);
        setErrorMsg('');
        return;
      }
    }

    // 2. Credenciais padrão de demonstração
    if (email === 'contato@assescor.com.br' && password === 'senha123') {
      setIsLoggedIn(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Credenciais inválidas. Use contato@assescor.com.br e senha123');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  const handleToggleObligation = (id: string) => {
    setObligations(
      obligations.map((ob) => (ob.id === id ? { ...ob, completed: !ob.completed } : ob))
    );
  };

  const handleOpenPayment = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setShowPayModal(true);
  };

  const handleConfirmPayment = () => {
    if (!selectedInvoice) return;
    setInvoices(
      invoices.map((inv) =>
        inv.id === selectedInvoice.id ? { ...inv, status: 'Pago' } : inv
      )
    );
    setShowPayModal(false);
    setSelectedInvoice(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {!isLoggedIn ? (
        /* Tela de Login */
        <div className="max-w-md mx-auto bg-white border border-assescor-slate-200 rounded-3xl p-8 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-assescor-blue-50 text-assescor-blue-800 flex items-center justify-center mx-auto border border-assescor-blue-100/50">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="font-display font-bold text-2xl text-assescor-slate-900">Acesso Restrito</h1>
            <p className="text-xs text-assescor-slate-400">Faça login para gerenciar suas obrigações e guias fiscais.</p>
          </div>

          {errorMsg && (
            <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold rounded-xl flex items-center">
              <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-assescor-slate-500 uppercase tracking-wider mb-2">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ex: contato@assescor.com.br"
                className="w-full bg-white border border-assescor-slate-200 rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-assescor-gold-500 focus:border-assescor-gold-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-assescor-slate-500 uppercase tracking-wider mb-2">Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ex: senha123"
                className="w-full bg-white border border-assescor-slate-200 rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-assescor-gold-500 focus:border-assescor-gold-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-assescor-slate-900 hover:bg-assescor-blue-950 text-white font-semibold rounded-xl text-sm transition-all shadow-md"
            >
              Entrar no Painel
            </button>
          </form>

          <div className="border-t border-assescor-slate-100 pt-4 text-center">
            <span className="text-[10px] text-assescor-slate-400">
              Credenciais de demonstração: <strong className="text-assescor-slate-600">contato@assescor.com.br</strong> / <strong className="text-assescor-slate-600">senha123</strong>
            </span>
          </div>
        </div>
      ) : (
        /* Tela do Painel (Dashboard) */
        <div className="space-y-8 animate-fadeIn">
          {/* Cabeçalho do Painel */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white border border-assescor-slate-200 rounded-3xl p-6 shadow-sm">
            <div className="space-y-1">
              <span className="text-xs text-assescor-gold-500 font-semibold uppercase tracking-wider block">Área do Cliente</span>
              <h1 className="font-display font-bold text-2xl text-assescor-slate-900">Olá, {companyDetails.razaoSocial}</h1>
            </div>
            <button
              onClick={handleLogout}
              className="inline-flex items-center space-x-2 px-4 py-2 border border-rose-200 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Sair da Conta</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Coluna da Esquerda: Empresa e Faturas a Pagar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Painel de dados cadastrais */}
              <div className="bg-white border border-assescor-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
                <div className="flex items-center space-x-3 mb-2">
                  <Building className="w-5 h-5 text-assescor-gold-500" />
                  <h3 className="font-display font-bold text-lg text-assescor-slate-900">Dados Cadastrais da Empresa</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="text-assescor-slate-400 block mb-1">Razão Social</span>
                    <span className="font-bold text-assescor-slate-800">{companyDetails.razaoSocial}</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="text-assescor-slate-400 block mb-1">CNPJ</span>
                    <span className="font-bold text-assescor-slate-800">{companyDetails.cnpj}</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="text-assescor-slate-400 block mb-1">Regime Tributário</span>
                    <span className="font-bold text-assescor-gold-600 uppercase flex items-center">
                      <Sparkles className="w-3.5 h-3.5 mr-1" />
                      {companyDetails.regime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Razão de contas a pagar */}
              <div className="bg-white border border-assescor-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
                <div className="flex items-center space-x-3">
                  <CreditCard className="w-5 h-5 text-assescor-gold-500" />
                  <h3 className="font-display font-bold text-lg text-assescor-slate-900">Contas a Pagar (Impostos e Honorários)</h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-assescor-slate-100 text-xs font-semibold text-assescor-slate-400 uppercase">
                        <th className="pb-3 font-semibold">Descrição</th>
                        <th className="pb-3 font-semibold">Vencimento</th>
                        <th className="pb-3 font-semibold">Valor</th>
                        <th className="pb-3 font-semibold">Status</th>
                        <th className="pb-3 text-right font-semibold">Ação</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-assescor-slate-100 text-xs font-medium">
                      {invoices.map((inv) => (
                        <tr key={inv.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-4 font-bold text-assescor-slate-800">{inv.name}</td>
                          <td className="py-4 text-assescor-slate-500">{inv.dueDate}</td>
                          <td className="py-4 font-bold text-assescor-slate-900">R$ {inv.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                          <td className="py-4">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                                inv.status === 'Pago'
                                  ? 'bg-emerald-100 text-emerald-700'
                                  : 'bg-amber-100 text-amber-700'
                              }`}
                            >
                              {inv.status}
                            </span>
                          </td>
                          <td className="py-4 text-right">
                            {inv.status === 'A pagar' ? (
                              <button
                                onClick={() => handleOpenPayment(inv)}
                                className="px-3.5 py-1.5 bg-assescor-gold-500 hover:bg-assescor-gold-600 text-white rounded-lg font-semibold hover:shadow-md transition-all"
                              >
                                Pagar
                              </button>
                            ) : (
                              <span className="text-emerald-500 font-bold flex items-center justify-end">
                                <CheckCircle className="w-4 h-4 mr-1" /> Pago
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Coluna da Direita: Agenda de compromissos do mês */}
            <div className="space-y-8">
              <div className="bg-white border border-assescor-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-assescor-gold-500" />
                  <h3 className="font-display font-bold text-lg text-assescor-slate-900">Compromissos e Guias</h3>
                </div>

                <div className="space-y-4">
                  {obligations.map((ob) => (
                    <div
                      key={ob.id}
                      onClick={() => handleToggleObligation(ob.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer select-none flex items-start space-x-3 ${
                        ob.completed
                          ? 'border-emerald-100 bg-emerald-50/20 opacity-70'
                          : 'border-assescor-slate-200 hover:border-assescor-gold-500/40 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={ob.completed}
                        onChange={() => {}} // controlado pelo clique do card
                        className="mt-1 h-4 w-4 text-assescor-gold-500 border-assescor-slate-300 rounded focus:ring-assescor-gold-500 pointer-events-none"
                      />
                      <div className="space-y-1">
                        <h4 className={`text-xs font-bold leading-tight ${ob.completed ? 'line-through text-assescor-slate-400' : 'text-assescor-slate-800'}`}>
                          {ob.title}
                        </h4>
                        <p className="text-[10px] text-assescor-slate-500 leading-normal">{ob.description}</p>
                        <span className="inline-block text-[9px] font-semibold text-assescor-gold-600 bg-assescor-gold-50 px-2 py-0.5 rounded">
                          Vence: {ob.dueDate}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Diálogo de Pagamento Simulado */}
      {showPayModal && selectedInvoice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-assescor-slate-950/65 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white border border-assescor-slate-200 rounded-3xl p-6 md:p-8 max-w-sm w-full shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <h3 className="font-display font-bold text-lg text-assescor-slate-950">Simulador de Pagamento PIX</h3>
              <p className="text-xs text-assescor-slate-400">Escaneie o QR Code abaixo para efetuar o pagamento da fatura.</p>
            </div>

            {/* Espaço reservado para o QR Code simulado */}
            <div className="w-48 h-48 bg-slate-100 border border-slate-200 rounded-2xl mx-auto flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-4 border border-dashed border-assescor-slate-400 flex flex-col items-center justify-center space-y-1 text-center">
                <div className="w-32 h-32 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-assescor-slate-900 to-assescor-slate-400 rounded p-1 flex flex-wrap gap-0.5 opacity-80">
                  {/* Representação visual simplificada de um QR code */}
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className={`w-3 h-3 ${i % 3 === 0 || i % 7 === 0 ? 'bg-assescor-slate-950' : 'bg-transparent'}`}></div>
                  ))}
                </div>
                <span className="text-[9px] font-bold text-assescor-slate-600 uppercase tracking-widest mt-1">PIX Ativo</span>
              </div>
            </div>

            <div className="bg-assescor-slate-50 p-4 rounded-xl border border-assescor-slate-200 text-xs space-y-1.5">
              <p className="text-assescor-slate-500"><strong className="text-assescor-slate-800">Item:</strong> {selectedInvoice.name}</p>
              <p className="text-assescor-slate-500"><strong className="text-assescor-slate-800">Valor total:</strong> R$ {selectedInvoice.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
              <p className="text-assescor-slate-500"><strong className="text-assescor-slate-800">Vencimento:</strong> {selectedInvoice.dueDate}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  setShowPayModal(false);
                  setSelectedInvoice(null);
                }}
                className="w-full py-3 border border-assescor-slate-300 hover:bg-slate-50 text-assescor-slate-700 font-semibold rounded-xl text-xs"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmPayment}
                className="w-full py-3 bg-gradient-to-r from-assescor-gold-500 to-assescor-gold-600 hover:from-assescor-gold-400 hover:to-assescor-gold-500 text-white font-semibold rounded-xl text-xs shadow-md"
              >
                Confirmar Pago
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
