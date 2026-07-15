import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = '551132548900';
  const message = encodeURIComponent('Olá! Gostaria de falar com um especialista da Assescor sobre serviços contábeis.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      {/* Dica de Tela (Tooltip) */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-assescor-slate-900 text-white text-xs font-medium py-2 px-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-assescor-slate-800">
        Fale Conosco no WhatsApp
      </div>

      {/* Anel de pulso em segundo plano */}
      <div className="absolute inset-0 rounded-full bg-emerald-500/35 animate-pulse-ring"></div>

      {/* Botão Principal */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95 focus:outline-none"
        aria-label="Fale conosco pelo WhatsApp"
      >
        {/* Ícone SVG do WhatsApp */}
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.015 14.074.99 11.603.99c-5.438 0-9.863 4.37-9.868 9.8-.001 1.83.49 3.618 1.424 5.163l-.955 3.486 3.617-.936c1.552.845 3.124 1.288 4.838 1.288zm9.89-6.924c-.269-.135-1.59-.783-1.836-.872-.247-.09-.427-.135-.607.135-.18.27-.697.872-.852 1.05-.157.18-.313.202-.583.067-.27-.135-1.14-.42-2.17-1.34-1.03-.92-1.72-2.05-1.92-2.39-.2-.34-.02-.52.15-.69.15-.15.34-.39.51-.59.17-.2.23-.34.34-.57.11-.22.06-.42-.03-.59-.09-.17-.78-1.89-1.07-2.58-.28-.68-.57-.59-.78-.6-.2-.01-.43-.01-.66-.01-.22 0-.59.08-.9.42-.31.34-1.19 1.16-1.19 2.83 0 1.68 1.23 3.3 1.4 3.53.17.22 2.42 3.69 5.87 5.18.82.35 1.46.57 1.96.73.82.26 1.57.22 2.16.14.66-.1 2.03-.83 2.31-1.63.29-.8.29-1.48.2-1.63-.08-.15-.3-.24-.57-.37z" />
        </svg>
      </a>
    </div>
  );
};
