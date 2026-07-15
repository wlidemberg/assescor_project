import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { AIChatWidget } from './components/AIChatWidget';

// Páginas
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Plans } from './pages/Plans';
import { Hire } from './pages/Hire';
import { Contact } from './pages/Contact';
import { ClientArea } from './pages/ClientArea';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-assescor-slate-50 font-sans antialiased text-assescor-slate-800">
        {/* Cabeçalho de Navegação */}
        <Navbar />

        {/* Área de Conteúdo Principal */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/planos" element={<Plans />} />
            <Route path="/contratar" element={<Hire />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/area-cliente" element={<ClientArea />} />
          </Routes>
        </main>

        {/* Rodapé Global */}
        <Footer />

        {/* Widgets Flutuantes */}
        <AIChatWidget />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
