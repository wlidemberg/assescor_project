import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, User, Briefcase, FileText, Phone, Award } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Início', path: '/', icon: Award },
    { name: 'Serviços', path: '/servicos', icon: Briefcase },
    { name: 'Planos', path: '/planos', icon: FileText },
    { name: 'Contratar', path: '/contratar', icon: FileText },
    { name: 'Contato', path: '/contato', icon: Phone },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-assescor-slate-900/90 text-white backdrop-blur-md border-b border-assescor-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logotipo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-assescor-blue-500 to-assescor-gold-500 flex items-center justify-center font-display font-bold text-xl text-white shadow-lg transition-transform group-hover:scale-105">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-assescor-gold-400 transition-colors">
                  ASSESCOR
                </span>
                <span className="text-[10px] tracking-widest text-assescor-slate-400 uppercase -mt-1">
                  Assessoria & Corretagem
                </span>
              </div>
            </Link>
          </div>

          {/* Navegação Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-assescor-gold-400 font-semibold border-b-2 border-assescor-gold-500 rounded-none'
                      : 'text-assescor-slate-300 hover:text-white hover:bg-assescor-slate-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Botões de Chamada de Ação (CTA) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/area-cliente"
              className="flex items-center space-x-2 px-4 py-2 border border-assescor-gold-500/50 rounded-md text-sm font-medium text-assescor-gold-400 hover:bg-assescor-gold-500 hover:text-white transition-all duration-300"
            >
              <User className="w-4 h-4" />
              <span>Área do Cliente</span>
            </Link>
          </div>

          {/* Botão de Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-assescor-slate-400 hover:text-white hover:bg-assescor-slate-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menu</span>
              {isOpen ? <X className="h-6 h-6" /> : <Menu className="h-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-assescor-slate-900 border-b border-assescor-slate-800 animate-fadeIn" id="mobile-menu">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium transition-all ${
                      isActive
                        ? 'bg-assescor-blue-900/40 text-assescor-gold-400 border-l-4 border-assescor-gold-500'
                        : 'text-assescor-slate-300 hover:bg-assescor-slate-800 hover:text-white'
                    }`
                  }
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </NavLink>
              );
            })}
            <div className="pt-4 pb-2 border-t border-assescor-slate-800 px-3">
              <Link
                to="/area-cliente"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-assescor-blue-600 to-assescor-blue-700 rounded-md text-sm font-medium text-white hover:from-assescor-blue-500 hover:to-assescor-blue-600 transition-all shadow-md"
              >
                <User className="w-5 h-5" />
                <span>Área do Cliente</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
