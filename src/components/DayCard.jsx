import React, { useState } from 'react';
import { Lock, Heart, Check, Sparkles, Gift, Camera, Music, Coffee, Flame, Crown, HeartHandshake, UtensilsCrossed, Moon, Tv, Compass } from 'lucide-react';

const ICON_MAP = {
  Sparkles,
  Heart,
  Gift,
  Camera,
  Music,
  Coffee,
  Flame,
  Crown,
  HeartHandshake,
  UtensilsCrossed,
  Moon,
  Tv,
  Compass
};

export default function DayCard({ dayData, isUnlocked, isOpened, isToday, isDecember, onOpenDay }) {
  const [wiggling, setWiggling] = useState(false);
  const [shakeMessage, setShakeMessage] = useState(null);

  const IconComponent = ICON_MAP[dayData.icon] || Sparkles;

  const handleClick = () => {
    if (!isUnlocked) {
      setWiggling(true);
      // Custom sweet message depending on whether December has started
      if (!isDecember) {
        setShakeMessage('¡No hagas trampas! 🎀 Empieza el 1 de dic');
      } else {
        setShakeMessage(`¡Aún no! ⏳ Se abre el ${dayData.day} de dic`);
      }
      setTimeout(() => setWiggling(false), 500);
      setTimeout(() => setShakeMessage(null), 2500);
      return;
    }
    onOpenDay(dayData);
  };

  const isGrandFinale = dayData.day === 24;

  return (
    <div className="relative group">
      {/* Toast message if tapped while locked */}
      {shakeMessage && (
        <div className="absolute -top-11 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap bg-coquette-900 text-white text-[10px] font-semibold px-3 py-1.5 rounded-full shadow-lg border border-coquette-400 animate-bounce pointer-events-none">
          {shakeMessage}
        </div>
      )}

      <button
        onClick={handleClick}
        className={`w-full aspect-square relative rounded-2xl p-2.5 flex flex-col items-center justify-between transition-all duration-300 text-center select-none active:scale-95 ${
          wiggling ? 'animate-wiggle' : ''
        } ${
          isOpened
            ? 'bg-white/95 border-2 border-coquette-300 shadow-sm'
            : isUnlocked
            ? isGrandFinale
              ? 'bg-gradient-to-br from-coquette-300 via-rose-300 to-coquette-400 border-2 border-coquette-400 shadow-coquette-lg animate-pulse-subtle text-white'
              : 'bg-white border-2 border-coquette-300 shadow-coquette hover:shadow-coquette-lg hover:-translate-y-1'
            : 'bg-cream-100/70 border border-coquette-200/60 opacity-75 shadow-none cursor-not-allowed'
        }`}
      >
        {/* Ribbon Bow Decoration on Top */}
        <div className="w-full flex justify-between items-center text-xs">
          <span className="text-sm select-none">
            {isGrandFinale ? '👑' : '🎀'}
          </span>
          {isOpened ? (
            <span className="flex items-center justify-center w-5 h-5 bg-coquette-100 text-coquette-600 rounded-full">
              <Check className="w-3 h-3 stroke-[3]" />
            </span>
          ) : isUnlocked ? (
            <span className="flex items-center justify-center w-5 h-5 bg-coquette-50 text-coquette-500 rounded-full animate-sparkle-slow">
              <Sparkles className="w-3 h-3" />
            </span>
          ) : (
            <span className="flex items-center justify-center w-5 h-5 bg-cream-200/90 text-coquette-400 rounded-full">
              <Lock className="w-2.5 h-2.5" />
            </span>
          )}
        </div>

        {/* Big Day Number */}
        <div className="flex flex-col items-center justify-center flex-1 my-0.5">
          <span
            className={`font-serif text-2xl sm:text-3xl font-bold leading-none tracking-tight ${
              isGrandFinale && isUnlocked
                ? 'text-white drop-shadow-sm'
                : isOpened
                ? 'text-coquette-700'
                : isUnlocked
                ? 'text-coquette-900'
                : 'text-neutral-400'
            }`}
          >
            {dayData.day}
          </span>
          <span className="text-[9px] uppercase tracking-wider font-semibold opacity-70 mt-0.5">
            {isOpened ? dayData.badge.split(' ')[0] : 'Diciembre'}
          </span>
        </div>

        {/* Card Footer Tag */}
        <div className="w-full pt-1 border-t border-coquette-100/80 flex items-center justify-center">
          {isOpened ? (
            <div className="flex items-center gap-1 text-[10px] text-coquette-600 font-medium truncate max-w-full">
              <IconComponent className="w-2.5 h-2.5 shrink-0" />
              <span className="truncate">{dayData.badge}</span>
            </div>
          ) : isUnlocked ? (
            <span className={`text-[10px] font-semibold tracking-wide ${isGrandFinale ? 'text-white' : 'text-coquette-600'}`}>
              ¡Abrir hoy! ✨
            </span>
          ) : (
            <span className="text-[9px] text-neutral-400 font-medium flex items-center gap-1">
              <Lock className="w-2 h-2" /> Bloqueado
            </span>
          )}
        </div>
      </button>
    </div>
  );
}
