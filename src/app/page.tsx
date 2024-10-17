// Mantenha as importações
"use client";

import { FaMapMarkerAlt, FaRegClock, FaCheckCircle, FaTimesCircle, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Home() {
  // Array de depoimentos
  const testimonials = [
    {
      name: 'João Silva',
      text: 'A Barbearia do Siri é fantástica! Atendimento impecável e profissionais qualificados. Recomendo!',
      image: '/01.jpg' // Caminho para a imagem
    },
    {
      name: 'Antonio Melo',
      text: 'Ambiente agradável e atendimento excelente! Me senti super bem.',
      image: '/melo.png' // Caminho para a imagem
    },
    {
      name: 'Carlos Souza',
      text: 'Meu corte ficou perfeito! Sempre volto e indico para os amigos.',
      image: '/carlos.png' // Caminho para a imagem
    },
    {
      name: 'Pedro da Silva',
      text: 'Corte de cabelo impecável e atendimento de primeira. Um lugar que recomendo para todos!',
      image: '/pedro.png' // Caminho para a imagem
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Estado para controle de hover

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente desmontar
  }, [isHovered]);

  return (
    <>
      {/* Botão canto esquerdo da tela */}
      <section className="container h-[80vh] w-[90%] flex items-center bg-gray-900 rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/fundo.jpg')] bg-cover bg-center"></div>

        <div className="ml-20 relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4 transition-colors duration-300 ease-in-out hover:text-green-500">
            Um pouco de Siri Barbearia
          </h1>
          <p className="text-white mb-6 transition-colors duration-300 ease-in-out hover:text-green-500">
            Conheça a nossa história...
          </p>
          <a
            href="/views/about"
            className="inline-block px-8 py-3 bg-green-500 text-white rounded-full text-lg font-medium transition-colors duration-300 ease-in-out hover:bg-transparent hover:text-green-500 hover:border hover:border-green-500"
          >
            Sobre →
          </a>
        </div>
      </section>

      {/* Novo Container */}
      <section className="container h-[80vh] w-[90%] flex flex-col justify-center items-center bg-gray-800 rounded-lg mt-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/reserva.png')] bg-cover bg-center"></div>

        <div className="text-center relative z-10 mb-16">
          <h2 className="text-2xl font-bold text-white mb-4 transition-colors duration-300 ease-in-out hover:text-green-500">
            Porque o verdadeiro homem cuida do seu estilo! Agende seu corte e mostre quem você é.
          </h2>
          <p className="text-white mb-10 transition-colors duration-300 ease-in-out hover:text-green-500">
            Não perca tempo, venha realizar o seu agendamento agora!
          </p>
        </div>
        <div className="relative z-10">
          <a
            href="/views/contact"
            className="inline-block px-8 py-3 bg-green-500 text-white rounded-full text-lg font-medium transition-colors duration-300 ease-in-out hover:bg-transparent hover:text-green-500 hover:border hover:border-green-500"
          >
            Agendamento Online →
          </a>
        </div>
      </section>

      {/* Novo Container */}
      <section className="container h-auto w-[90%] flex flex-col bg-gray-800 rounded-lg mt-8 relative overflow-hidden">
        <div className="flex justify-center items-center bg-gray-700 p-4">
          <h3 className="text-lg font-bold text-white">Feedbacks dos Clientes</h3>
        </div>

        <div
          className="flex justify-center items-center bg-gray-700 p-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col items-center text-white">
            <img 
              src={testimonials[currentIndex].image} 
              alt={testimonials[currentIndex].name} 
              className="w-12 h-12 rounded-full mb-2" // Estilização da imagem
            />
            <h4 className="font-bold">{testimonials[currentIndex].name}</h4>
            <p className="text-lg italic text-center mt-1">"{testimonials[currentIndex].text}"</p>
          </div>
        </div>

        {/* Divs Inferiores (esquerda, meio, direita) */}
        <div className="flex flex-row justify-between p-4">
          {/* Div Inferior Esquerda */}
          <div className="min-w-[300px] max-w-[400px] bg-gray-700 p-7 m-5 rounded-lg text-white">
            <h4 className="font-bold">Horário de Atendimento</h4>
            <p>
              <FaRegClock className="inline-block mr-1 text-green-500" />
              Seg - Sex: 9h - 18h
            </p>
            <p>
              <FaRegClock className="inline-block mr-1 text-green-500" />
              Sab: 9h - 15h
            </p>

            <hr className="border-gray-500 my-4" />

            <h4 className="font-bold mt-4 mb-2 text-white">Contato</h4>
            <div className="text-white space-y-2">
              <p>
                <FaEnvelope className="inline-block mr-1" aria-label="Email" />
                <span className="ml-2">barbeariadosiri@outlook.com</span>
              </p>
              <p>
                <FaWhatsapp className="inline-block mr-1" aria-label="WhatsApp" />
                <span className="ml-2">+55 (81) 99999-9999</span>
              </p>
              <p>
                <FaPhone className="inline-block mr-1" aria-label="Telefone" />
                <span className="ml-2">+55 (81) 3333-3333</span>
              </p>
            </div>
          </div>

          {/* Div Inferior Meio */}
          <div className="min-w-[300px] max-w-[400px] bg-gray-700 p-4 m-2 rounded-lg text-white text-center">
            <img src="/inferior.png" alt="Logo da Barbearia Siri" className="w-2/3 h-auto rounded-lg mx-auto" />
            <p className="mt-2 border-b border-gray-500 pb-2">Barbearia do Siri</p>
            <p className="mt-2">
              <a
                href="http://www.barbeariadosiri.com"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.barbeariadosiri.com
              </a>
            </p>
          </div>

          {/* Div Inferior Direita */}
          <div className="min-w-[300px] max-w-[400px] bg-gray-700 p-4 m-2 rounded-lg text-white">
            <h4 className="mt-2 border-gray-500">
              <FaMapMarkerAlt className="inline-block mr-1" />
              Localização
            </h4>
            <p className="mt-2 border-b border-gray-500 pb-2">
              Rua Sargento Afonso Barreto, 41, Caruaru, CEP 0000-000
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.926393689691!2d-8.107425584683786!3d37.07242897989678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9434b1dcb93fdf6b%3A0xfef2f706de8d09b6!2sRua%20Sargento%20Afonso%20Barreto%2041%2C%20Caruaru%2C%20PE%2C%2000000-000!5e0!3m2!1spt-BR!2sbr!4v1695217354082!5m2!1spt-BR!2sbr"
              width="100%"
              height="150"
              style={{ border: 0 }}
              loading="lazy"
              title="Localização da Barbearia"
            ></iframe>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 p-4 border-t border-gray-600">
          <p>© 2024 VenicCode. Todos os direitos reservados.</p>
        </div>
      </section>
    </>
  );
}
