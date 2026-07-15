import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Award, Shield, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-assescor-slate-900 border-t border-assescor-slate-800 text-assescor-slate-400">
      {/* Top Banner with Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-assescor-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <Award className="w-8 h-8 text-assescor-gold-500 flex-shrink-0" />
            <div>
              <h4 className="font-display font-medium text-white text-sm">Registro CRC Ativo</h4>
              <p className="text-xs text-assescor-slate-500">Conformidade e contabilidade regularizada.</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <Shield className="w-8 h-8 text-assescor-blue-400 flex-shrink-0" />
            <div>
              <h4 className="font-display font-medium text-white text-sm">Segurança de Dados</h4>
              <p className="text-xs text-assescor-slate-500">Processamento LGPD e chaves criptografadas.</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <FileText className="w-8 h-8 text-assescor-gold-500 flex-shrink-0" />
            <div>
              <h4 className="font-display font-medium text-white text-sm">Assessoria Completa</h4>
              <p className="text-xs text-assescor-slate-500">Desde a abertura até o planejamento tributário.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-assescor-blue-500 to-assescor-gold-500 flex items-center justify-center font-display font-bold text-base text-white">
                A
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white">
                ASSESCOR
              </span>
            </div>
            <p className="text-sm leading-relaxed text-assescor-slate-400">
              Transformando a contabilidade em inteligência de negócios. Sua parceira estratégica em assessoria contábil e corretagem imobiliária de alta performance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Navegação
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-white transition-colors">Serviços Contábeis</Link>
              </li>
              <li>
                <Link to="/planos" className="hover:text-white transition-colors">Planos de Assessoria</Link>
              </li>
              <li>
                <Link to="/contratar" className="hover:text-white transition-colors">Legalizar ou Migrar</Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-white transition-colors">Fale Conosco</Link>
              </li>
            </ul>
          </div>

          {/* Services Quicklist */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Soluções
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Abertura de Empresas</li>
              <li className="hover:text-white cursor-pointer transition-colors">BPO Financeiro e Fluxo</li>
              <li className="hover:text-white cursor-pointer transition-colors">Planejamento Tributário</li>
              <li className="hover:text-white cursor-pointer transition-colors">Corretagem Imobiliária</li>
              <li className="hover:text-white cursor-pointer transition-colors">Consultoria Trabalhista</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-3">
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contato
            </h3>
            <div className="flex items-start space-x-3 text-sm">
              <MapPin className="w-5 h-5 text-assescor-gold-500 flex-shrink-0 mt-0.5" />
              <span>Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Phone className="w-5 h-5 text-assescor-gold-500 flex-shrink-0" />
              <span>(11) 3254-8900</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Mail className="w-5 h-5 text-assescor-gold-500 flex-shrink-0" />
              <span>contato@assescor.com.br</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-assescor-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-assescor-slate-500">
          <p>© {currentYear} Assescor Assessoria e Corretagem Ltda. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
