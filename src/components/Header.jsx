import React, { useState } from 'react';
import { Sparkles, Heart, Dumbbell, Flame, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Header({ openedCount, totalDays = 24, daysUntilDecember, isDecember }) {
  const percentage = Math.round((openedCount / totalDays) * 100);
  const [zoomedPhoto, setZoomedPhoto] = useState(null);

  const handlePhotoClick = (photoSrc, label) => {
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.3 },
      colors: ['#ff85a1', '#ffd1dc', '#fff0f5', '#d4af37']
    });
    setZoomedPhoto({ src: photoSrc, label });
  };

  return (
    <header className="relative pt-6 pb-4 px-3 text-center max-w-lg mx-auto">
      {/* Decorative Ribbon Header */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur-sm border border-coquette-200 rounded-full shadow-sm text-xs font-medium text-coquette-700 mb-2">
        <span>🎀</span>
        <span>Edición Especial Coquette & Fit</span>
        <span>🎀</span>
      </div>

      {/* Main Title with Elegant Typography */}
      <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-coquette-900 leading-tight">
        Nuestro Calendario <br />
        <span className="font-cursive text-3xl sm:text-4xl text-coquette-500 font-normal">de Adviento</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-1.5 text-xs sm:text-sm text-coquette-800/80 max-w-xs mx-auto leading-relaxed">
        24 días de detalles, risas, entrenos juntos y mucho amor para mi deportista favorita 💕✨
      </p>

      {/* --- DUO POLAROID SCRAPBOOK (Cover Photos) --- */}
      <div className="my-5 relative flex items-center justify-center gap-2 sm:gap-4 px-2">
        {/* Central Ribbon Bow Pin */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 text-2xl select-none filter drop-shadow-sm animate-float-slow">
          🎀
        </div>

        {/* Polaroid 1: Her smiling in mountains */}
        <button
          onClick={() => handlePhotoClick('/fotos/chica-montana.jpg', 'Mi chica favorita 🏔️💕')}
          className="group relative w-36 sm:w-44 bg-white p-2 sm:p-2.5 pb-4 sm:pb-5 rounded-xl shadow-coquette border border-coquette-200 transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 text-left active:scale-95"
          title="Toca para ver foto"
        >
          {/* Pastel Washi Tape */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-coquette-200/80 backdrop-blur-xs rounded-xs border border-coquette-300/40 rotate-1 shadow-xs pointer-events-none" />

          {/* Photo Frame */}
          <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-pink-50 relative shadow-inner">
            <img
              src="/fotos/chica-montana.jpg"
              alt="Mi chica bonita en la montaña"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute bottom-1 right-1 bg-white/90 backdrop-blur-xs text-[9px] font-bold text-coquette-700 px-1.5 py-0.5 rounded-full shadow-xs">
              ✨ Ella
            </span>
          </div>

          {/* Handwritten Caption */}
          <div className="mt-2 text-center">
            <p className="font-cursive text-base sm:text-lg text-coquette-800 leading-none">
              Mi princesa 💖
            </p>
            <p className="text-[8px] sm:text-[9px] text-neutral-400 font-mono tracking-wider mt-0.5 uppercase">
              La más bonita
            </p>
          </div>
        </button>

        {/* Polaroid 2: The two kissing by the motorbikes */}
        <button
          onClick={() => handlePhotoClick('/fotos/pareja-motos.jpg', 'Tú y Yo: Rutas, entrenos y vida 🏍️💨💕')}
          className="group relative w-36 sm:w-44 bg-white p-2 sm:p-2.5 pb-4 sm:pb-5 rounded-xl shadow-coquette border border-coquette-200 transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 text-left active:scale-95"
          title="Toca para ver foto"
        >
          {/* Pastel Washi Tape */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-rose-200/80 backdrop-blur-xs rounded-xs border border-rose-300/40 -rotate-2 shadow-xs pointer-events-none" />

          {/* Photo Frame */}
          <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-pink-50 relative shadow-inner">
            <img
              src="/fotos/pareja-motos.jpg"
              alt="Nosotros en las motos con vistas al mar"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute bottom-1 right-1 bg-white/90 backdrop-blur-xs text-[9px] font-bold text-coquette-700 px-1.5 py-0.5 rounded-full shadow-xs">
              🏍️ Nosotros
            </span>
          </div>

          {/* Handwritten Caption */}
          <div className="mt-2 text-center">
            <p className="font-cursive text-base sm:text-lg text-coquette-800 leading-none">
              Rutas & Vida 💨
            </p>
            <p className="text-[8px] sm:text-[9px] text-neutral-400 font-mono tracking-wider mt-0.5 uppercase">
              Siempre contigo
            </p>
          </div>
        </button>
      </div>

      {/* Motivational Hybrid Badge */}
      <div className="flex items-center justify-center gap-3 mt-1 text-[11px] font-semibold text-coquette-600">
        <span className="inline-flex items-center gap-1 bg-coquette-100/70 px-2.5 py-0.5 rounded-full">
          <Dumbbell className="w-3 h-3 text-coquette-500" /> Fuerza
        </span>
        <span className="text-coquette-300">•</span>
        <span className="inline-flex items-center gap-1 bg-coquette-100/70 px-2.5 py-0.5 rounded-full">
          <Flame className="w-3 h-3 text-coquette-500" /> Running
        </span>
        <span className="text-coquette-300">•</span>
        <span className="inline-flex items-center gap-1 bg-coquette-100/70 px-2.5 py-0.5 rounded-full">
          <Sparkles className="w-3 h-3 text-coquette-500" /> Coquette
        </span>
      </div>

      {/* Countdown to December 1st (if not December yet) */}
      {!isDecember && daysUntilDecember > 0 && (
        <div className="mt-4 p-3 bg-gradient-to-r from-coquette-100 via-rose-100 to-coquette-100 border border-coquette-200 rounded-2xl shadow-sm text-center">
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-coquette-800 mb-0.5">
            <Clock className="w-3.5 h-3.5 text-coquette-600" />
            <span>Cuenta atrás para el 1 de Diciembre</span>
          </div>
          <p className="text-xs text-coquette-700">
            Faltan <span className="font-bold text-coquette-900 text-sm">{daysUntilDecember}</span> {daysUntilDecember === 1 ? 'día' : 'días'} para desbloquear la primera casilla 🎀
          </p>
        </div>
      )}

      {/* Progress Bar Container */}
      <div className="mt-4 bg-white/90 backdrop-blur-md border border-coquette-200 rounded-2xl p-3 shadow-coquette">
        <div className="flex justify-between items-center text-xs font-semibold text-coquette-800 mb-1.5 px-1">
          <span className="flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 fill-coquette-400 text-coquette-500" /> Progreso de Amor
          </span>
          <span className="text-coquette-600 font-mono text-[11px]">
            {openedCount} de {totalDays} días ({percentage}%)
          </span>
        </div>
        
        {/* Progress Track */}
        <div className="w-full h-2.5 bg-coquette-100 rounded-full overflow-hidden p-0.5">
          <div 
            className="h-full bg-gradient-to-r from-coquette-300 via-coquette-400 to-coquette-500 rounded-full transition-all duration-700 ease-out shadow-inner"
            style={{ width: `${Math.max(percentage, 3)}%` }}
          />
        </div>

        {percentage === 100 && (
          <p className="mt-2 text-xs font-medium text-coquette-600 animate-bounce">
            ¡Has completado todos los días! ¡Feliz Navidad mi vida! 🎄💖
          </p>
        )}
      </div>

      {/* Lightbox / Zoom Modal if tapping cover photos */}
      {zoomedPhoto && (
        <div 
          onClick={() => setZoomedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in cursor-pointer"
        >
          <div 
            className="relative max-w-xs w-full bg-white p-3 pb-6 rounded-2xl shadow-2xl border-2 border-coquette-200 text-center animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-100">
              <img 
                src={zoomedPhoto.src} 
                alt={zoomedPhoto.label} 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-cursive text-xl text-coquette-800 mt-3">
              {zoomedPhoto.label}
            </p>
            <button
              onClick={() => setZoomedPhoto(null)}
              className="mt-3 px-4 py-1.5 bg-coquette-100 text-coquette-800 rounded-full text-xs font-semibold hover:bg-coquette-200"
            >
              Cerrar 🎀
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
