import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Building2, UserPlus } from 'lucide-react';

type FlowType = 'legalizar' | 'migrar' | null;

interface Partner {
  name: string;
  cpf: string;
}

export const Hire: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);
  const [flow, setFlow] = useState<FlowType>(null);

  // Form states - Legalizar
  const [partners, setPartners] = useState<Partner[]>([{ name: '', cpf: '' }]);
  const [atividade, setAtividade] = useState('');
  const [capitalSocial, setCapitalSocial] = useState('');

  // Form states - Migrar
  const [cnpj, setCnpj] = useState('');
  const [regime, setRegime] = useState('simples');
  const [faturamento, setFaturamento] = useState('');

  // Form states - Contact & Auth (shared step 3)
  const [nomeContato, setNomeContato] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const selectFlow = (type: FlowType) => {
    setFlow(type);
    setStep(2);
    setErrorMessage('');
  };

  const handleAddPartner = () => {
    setPartners([...partners, { name: '', cpf: '' }]);
  };

  const handlePartnerChange = (index: number, field: keyof Partner, value: string) => {
    const updated = [...partners];
    updated[index][field] = value;
    setPartners(updated);
  };

  const handleRemovePartner = (index: number) => {
    if (partners.length === 1) return;
    setPartners(partners.filter((_, i) => i !== index));
  };

  const validateStep2 = () => {
    if (flow === 'legalizar') {
      if (!atividade.trim()) return 'Informe a atividade prevista.';
      if (!capitalSocial.trim()) return 'Informe o capital social.';
      for (const partner of partners) {
        if (!partner.name.trim() || !partner.cpf.trim()) {
          return 'Preencha todos os dados dos sócios.';
        }
      }
    } else if (flow === 'migrar') {
      if (!cnpj.trim() || cnpj.length < 14) return 'Informe um CNPJ válido.';
      if (!faturamento.trim()) return 'Informe o faturamento médio.';
    }
    return '';
  };

  const handleNextStep = () => {
    const error = validateStep2();
    if (error) {
      setErrorMessage(error);
      return;
    }
    setErrorMessage('');
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nomeContato.trim() || !email.trim() || !telefone.trim() || !password.trim()) {
      setErrorMessage('Por favor, preencha todos os campos de contato e senha.');
      return;
    }

    // Save details to Local Storage for Client Area login integration
    const userAccount = {
      nomeContato,
      email,
      telefone,
      password,
      empresa: {
        razaoSocial: flow === 'legalizar' ? 'Nova Empresa - Em Abertura' : 'Empresa Migrada Ltda',
        cnpj: flow === 'legalizar' ? '00.000.000/0001-00' : cnpj,
        regime: flow === 'legalizar' ? 'Simples Nacional (Previso)' : regime.toUpperCase(),
        faturamento: flow === 'legalizar' ? capitalSocial : faturamento,
        fluxoOrigem: flow,
      },
    };

    localStorage.setItem('assescor_registered_user', JSON.stringify(userAccount));
    setStep(4);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Visual Step Progress bar */}
      <div className="flex justify-between items-center mb-10 max-w-md mx-auto relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-assescor-slate-200 -translate-y-1/2 -z-10"></div>
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-semibold text-xs border-2 transition-all ${
              step >= s
                ? 'bg-assescor-gold-500 border-assescor-gold-500 text-white'
                : 'bg-white border-assescor-slate-200 text-assescor-slate-400'
            }`}
          >
            {s}
          </div>
        ))}
      </div>

      {/* Main card */}
      <div className="bg-white border border-assescor-slate-200 rounded-3xl p-8 md:p-12 shadow-xl">
        {/* Step 1: Flow Selection */}
        {step === 1 && (
          <div className="space-y-8 text-center">
            <div className="space-y-3">
              <h1 className="font-display font-bold text-3xl text-assescor-slate-900">Como podemos ajudar sua empresa?</h1>
              <p className="text-sm text-assescor-slate-500 max-w-lg mx-auto">
                Selecione o serviço de onboarding que você deseja iniciar hoje e simule sua proposta em poucos minutos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <button
                onClick={() => selectFlow('legalizar')}
                className="group border border-assescor-slate-200 hover:border-assescor-gold-500 p-8 rounded-2xl text-left space-y-4 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 rounded-xl bg-assescor-blue-50 text-assescor-blue-700 flex items-center justify-center group-hover:bg-assescor-gold-500 group-hover:text-white transition-all">
                  <UserPlus className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-assescor-slate-900">Legalizar uma Empresa</h3>
                <p className="text-xs text-assescor-slate-500 leading-relaxed">
                  Quero abrir uma nova empresa do zero (CNPJ, contrato social, alvarás) com assessoria completa.
                </p>
              </button>

              <button
                onClick={() => selectFlow('migrar')}
                className="group border border-assescor-slate-200 hover:border-assescor-gold-500 p-8 rounded-2xl text-left space-y-4 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 rounded-xl bg-assescor-blue-50 text-assescor-blue-700 flex items-center justify-center group-hover:bg-assescor-gold-500 group-hover:text-white transition-all">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-assescor-slate-900">Migrar/Alterar de Contador</h3>
                <p className="text-xs text-assescor-slate-500 leading-relaxed">
                  Já possuo uma empresa ativa e gostaria de transferir a contabilidade para a inteligência da Assescor.
                </p>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Flow Form Details */}
        {step === 2 && (
          <div className="space-y-6">
            <button
              onClick={() => setStep(1)}
              className="inline-flex items-center text-xs font-semibold text-assescor-slate-400 hover:text-assescor-slate-900 transition-colors mb-2"
            >
              <ArrowLeft className="w-4 h-4 mr-1" /> Voltar
            </button>

            {flow === 'legalizar' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-display font-bold text-2xl text-assescor-slate-900">Abertura de Empresa</h2>
                  <p className="text-xs text-assescor-slate-400">Preencha os dados dos sócios e atividade prevista.</p>
                </div>

                {errorMessage && <p className="text-xs text-rose-500 font-semibold">{errorMessage}</p>}

                {/* Partners List */}
                <div className="space-y-4">
                  <label className="block text-xs font-semibold text-assescor-slate-500 uppercase tracking-wider">Sócios</label>
                  {partners.map((partner, index) => (
                    <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end bg-assescor-slate-50 p-4 rounded-xl border border-assescor-slate-200">
                      <div>
                        <label className="block text-[11px] font-medium text-assescor-slate-500 mb-1">Nome Completo</label>
                        <input
                          type="text"
                          value={partner.name}
                          onChange={(e) => handlePartnerChange(index, 'name', e.target.value)}
                          placeholder="Ex: João Silva"
                          className="w-full bg-white border border-assescor-slate-200 rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-assescor-gold-500 focus:border-assescor-gold-500"
                        />
                      </div>
                      <div className="relative">
                        <label className="block text-[11px] font-medium text-assescor-slate-500 mb-1">CPF</label>
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            value={partner.cpf}
                            onChange={(e) => handlePartnerChange(index, 'cpf', e.target.value)}
                            placeholder="000.000.000-00"
                            className="w-full bg-white border border-assescor-slate-200 rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-assescor-gold-500 focus:border-assescor-gold-500"
                          />
                          {partners.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemovePartner(index)}
                              className="px-2.5 py-2 bg-rose-50 border border-rose-200 hover:bg-rose-100 text-rose-600 font-semibold rounded-lg text-xs"
                            >
                              Remover
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleAddPartner}
                    className="py-2 px-4 border border-dashed border-assescor-gold-500 text-assescor-gold-600 hover:bg-assescor-gold-50/50 rounded-xl text-xs font-semibold"
                  >
                    + Adicionar Sócio
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-assescor-slate-500 uppercase tracking-wider mb-2">Atividade Prevista</label>
                    <input
                      type="text"
                      value={atividade}
                      onChange={(e) => setAtividade(e.target.value)}
                      placeholder="Ex: Consultoria em TI, E-commerce..."
                      className="w-full bg-white border border-assescor-slate-200 rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-assescor-gold-500 focus:border-assescor-gold-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-assescor-slate-500 uppercase tracking-wider mb-2">Capital Social Pretendido (R$)</label>
                    <input
                      type="number"
                      value={capitalSocial}
                      onChange={(e) => setCapitalSocial(e.target.value)}
                      placeholder="Ex: 10000"
                      className="w-full bg-white border border-assescor-slate-200 rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-assescor-gold-500 focus:border-assescor-gold-500"
                    />
                  </div>
                </div>

                <button
                  onClick={handleNextStep}
                  className="w-full py-3.5 bg-assescor-slate-900 hover:bg-assescor-blue-950 text-white font-semibold rounded-xl text-sm transition-all"
                >
                  Continuar para Contato
                </button>
              </div>
            )}

            {flow === 'migrar' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-display font-bold text-2xl text-assescor-slate-900">Migração de Contabilidade</h2>
                  <p className="text-xs text-assescor-slate-400">Insira as informações atuais da sua empresa.</p>
                </div>

                {errorMessage && <p className="text-xs text-rose-500 font-semibold">{errorMessage}</p>}

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-assescor-slate-500 uppercase tracking-wider mb-2">CNPJ Atual</label>
                    <input
                      type="text"
                      value={cnpj}
                      onChange={(e) => setCnpj(e.target.value)}
                      placeholder="Ex: 00.000.000/0000-00"
                      maxLength={18}
                      className="w-full bg-white border border-assescor-slate-200 rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-assescor-gold-500 focus:border-assescor-gold-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-assescor-slate-500 uppercase tracking-wider mb-2">Regime Tributário Atual</label>
                      <select
                        value={regime}
                        onChange={(e) => setRegime(e.target.value)}
                        className="w-full bg-white border border-assescor-slate-200 rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-assescor-gold-500 focus:border-assescor-gold-500"
                      >
                        <option value="simples">Simples Nacional</option>
                        <option value="presumido">Lucro Presumido</option>
                        <option value="mei">MEI</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-assescor-slate-500 uppercase tracking-wider mb-2">Faturamento Médio Mensal (R$)</label>
                      <input
                        type="number"
                        value={faturamento}
                        onChange={(e) => setFaturamento(e.target.value)}
                        placeholder="Ex: 45000"
                        className="w-full bg-white border border-assescor-slate-200 rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-assescor-gold-500 focus:border-assescor-gold-500"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleNextStep}
                  className="w-full py-3.5 bg-assescor-slate-900 hover:bg-assescor-blue-950 text-white font-semibold rounded-xl text-sm transition-all"
                >
                  Continuar para Contato
                </button>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Contact & Password details */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <button
              onClick={() => setStep(2)}
              className="inline-flex items-center text-xs font-semibold text-assescor-slate-400 hover:text-assescor-slate-900 transition-colors mb-2"
            >
              <ArrowLeft className="w-4 h-4 mr-1" /> Voltar
            </button>

            <div>
              <h2 className="font-display font-bold text-2xl text-assescor-slate-900">Informações de Contato e Acesso</h2>
              <p className="text-xs text-assescor-slate-400">Preencha seus dados para receber o orçamento e criar sua conta na Área do Cliente.</p>
            </div>

            {errorMessage && <p className="text-xs text-rose-500 font-semibold">{errorMessage}</p>}

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-assescor-slate-500 uppercase tracking-wider mb-2">Seu Nome Completo</label>
                <input
                  type="text"
                  value={nomeContato}
                  onChange={(e) => setNomeContato(e.target.value)}
                  placeholder="Ex: João da Silva"
                  className="w-full bg-white border border-assescor-slate-200 rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-assescor-gold-500 focus:border-assescor-gold-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-assescor-slate-500 uppercase tracking-wider mb-2">E-mail Corporativo</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ex: joao@suaempresa.com"
                    className="w-full bg-white border border-assescor-slate-200 rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-assescor-gold-500 focus:border-assescor-gold-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-assescor-slate-500 uppercase tracking-wider mb-2">WhatsApp / Telefone</label>
                  <input
                    type="tel"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="Ex: (11) 99999-9999"
                    className="w-full bg-white border border-assescor-slate-200 rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-assescor-gold-500 focus:border-assescor-gold-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-assescor-slate-500 uppercase tracking-wider mb-2">Defina uma Senha de Acesso</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mínimo 6 caracteres"
                  className="w-full bg-white border border-assescor-slate-200 rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-assescor-gold-500 focus:border-assescor-gold-500"
                  required
                />
                <span className="text-[10px] text-assescor-slate-400 block mt-1">
                  Você usará este e-mail e senha para acessar o painel do cliente no topo da tela.
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-assescor-gold-500 to-assescor-gold-600 hover:from-assescor-gold-400 hover:to-assescor-gold-500 text-white font-semibold rounded-xl text-sm transition-all shadow-lg shadow-assescor-gold-500/10"
            >
              Finalizar Cadastro e Ver Proposta
            </button>
          </form>
        )}

        {/* Step 4: Success View */}
        {step === 4 && (
          <div className="text-center space-y-8 py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-3">
              <h2 className="font-display font-bold text-3xl text-assescor-slate-900">Cadastro Realizado com Sucesso!</h2>
              <p className="text-sm text-assescor-slate-500 max-w-md mx-auto">
                Seus dados foram processados. Nossa proposta de serviço e transição já foi gerada e está disponível no seu painel.
              </p>
            </div>

            <div className="bg-assescor-slate-50 p-6 rounded-2xl border border-assescor-slate-200 max-w-sm mx-auto text-left space-y-2 text-xs">
              <p className="text-assescor-slate-500"><strong className="text-assescor-slate-800">E-mail de acesso:</strong> {email}</p>
              <p className="text-assescor-slate-500"><strong className="text-assescor-slate-800">Senha:</strong> (a senha que você definiu)</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button
                onClick={() => navigate('/area-cliente')}
                className="px-6 py-3.5 bg-assescor-slate-900 hover:bg-assescor-blue-950 text-white font-semibold rounded-xl transition-all text-sm shadow-md"
              >
                Ir para Área do Cliente
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3.5 bg-white hover:bg-assescor-slate-50 border border-assescor-slate-300 text-assescor-slate-700 font-semibold rounded-xl transition-all text-sm"
              >
                Voltar ao Início
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
