import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, Heart, Sparkles, Check, CheckCircle2, Circle, 
  ExternalLink, Gift, Clock, Flame, Dumbbell 
} from 'lucide-react';

export default function DayModal({ dayData, onClose, onRedeemCoupon, isRedeemed }) {
  const [completedSteps, setCompletedSteps] = useState({});

  useEffect(() => {
    // Launch celebratory confetti when modal opens
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#ff85a1', '#ffd1dc', '#f75c82', '#fff0f5', '#d4af37']
    });
  }, [dayData.day]);

  if (!dayData) return null;

  const { type, content, title, day, badge } = dayData;

  const toggleChecklist = (idx) => {
    setCompletedSteps(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-sm max-h-[90vh] overflow-y-auto bg-white rounded-3xl border-2 border-coquette-200 shadow-coquette-lg p-5 flex flex-col text-neutral-800 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-coquette-100/80 text-coquette-700 flex items-center justify-center hover:bg-coquette-200 transition-colors z-10"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Ribbon & Day Tag */}
        <div className="flex flex-col items-center text-center mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-coquette-100 rounded-full text-coquette-700 text-xs font-semibold mb-1 shadow-sm">
            <span>🎀</span>
            <span>Día {day} de Diciembre</span>
            <span>•</span>
            <span className="text-coquette-600">{badge}</span>
          </div>
          <h2 className="font-serif text-xl font-bold text-coquette-900 mt-1 leading-snug">
            {title}
          </h2>
        </div>

        {/* Dynamic Content Based on Type */}
        <div className="my-2 flex-1">
          {/* TYPE: PHOTO */}
          {type === 'photo' && (
            <div className="flex flex-col items-center">
              {/* Polaroid Frame */}
              <div className="bg-white p-3 pb-5 rounded-lg shadow-md border border-neutral-200 w-full transform rotate-[-1deg] transition-transform hover:rotate-0">
                <div className="aspect-[4/3] w-full overflow-hidden rounded bg-pink-100 relative">
                  <img
                    src={content.imageUrl}
                    alt={content.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-xs text-[10px] font-bold text-coquette-700 px-2 py-0.5 rounded-full shadow-xs">
                    💕 Nosotros
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="font-cursive text-xl text-coquette-800 leading-tight">
                    {content.caption}
                  </p>
                  <p className="text-[10px] text-neutral-400 mt-1 font-mono uppercase">
                    {content.polaroidDate}
                  </p>
                </div>
              </div>

              {content.note && (
                <div className="mt-4 p-3 bg-coquette-50/70 border border-coquette-100 rounded-2xl text-xs text-coquette-900 leading-relaxed text-center italic">
                  "{content.note}"
                </div>
              )}
            </div>
          )}

          {/* TYPE: COUPON */}
          {type === 'coupon' && (
            <div className="relative border-2 border-dashed border-coquette-300 rounded-2xl p-4 bg-gradient-to-b from-coquette-50/60 to-white overflow-hidden shadow-inner">
              <div className="text-center mb-3">
                <span className="text-xs uppercase font-mono tracking-widest text-coquette-500 font-bold">
                  ★ CUPÓN EXCLUSIVO ★
                </span>
                <h3 className="font-serif text-lg font-bold text-coquette-900 mt-1">
                  {content.subtitle}
                </h3>
                <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                  {content.description}
                </p>
              </div>

              <div className="my-3 pt-3 border-t border-dashed border-coquette-200 text-[11px] text-neutral-500 whitespace-pre-line leading-relaxed bg-white/80 p-2.5 rounded-xl">
                {content.terms}
              </div>

              {/* Redeem Button / Stamp */}
              <div className="mt-4 text-center">
                {isRedeemed ? (
                  <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-coquette-600 text-white rounded-full text-xs font-bold shadow-md transform rotate-[-2deg]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>¡CANJEADO CON ÉXITO! 💖</span>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      onRedeemCoupon(day);
                      confetti({
                        particleCount: 60,
                        spread: 70,
                        origin: { y: 0.7 }
                      });
                    }}
                    className="w-full py-2.5 px-4 bg-gradient-to-r from-coquette-400 to-coquette-500 text-white font-semibold text-xs rounded-xl shadow-coquette hover:from-coquette-500 hover:to-coquette-600 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <span>{content.buttonText || 'Canjear Cupón 🎀'}</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* TYPE: MISSION (Hybrid Athlete) */}
          {type === 'mission' && (
            <div className="space-y-3">
              <div className="p-3 bg-coquette-50 border border-coquette-200 rounded-2xl text-xs space-y-1.5">
                <div className="flex items-center justify-between font-semibold text-coquette-800">
                  <span className="flex items-center gap-1 text-coquette-600">
                    <Flame className="w-3.5 h-3.5 fill-coquette-500 text-coquette-500" />
                    Objetivo:
                  </span>
                  <span className="text-[10px] bg-white px-2 py-0.5 rounded-full border border-coquette-200 text-coquette-700">
                    {content.difficulty || 'Pareja Fit'}
                  </span>
                </div>
                <p className="text-neutral-700 leading-relaxed font-medium">
                  {content.objective || content.plan}
                </p>
                {content.penalty && (
                  <p className="text-coquette-700 text-[11px] pt-1">
                    <strong className="font-semibold">Penalización divertida:</strong> {content.penalty}
                  </p>
                )}
                {content.destination && (
                  <p className="text-neutral-600 text-[11px] pt-1">
                    <strong className="font-semibold">Destino:</strong> {content.destination}
                  </p>
                )}
              </div>

              {content.checklist && (
                <div className="bg-white border border-coquette-100 rounded-2xl p-3">
                  <p className="text-[11px] font-bold text-coquette-800 mb-2 uppercase tracking-wide">
                    Pasos de la misión:
                  </p>
                  <div className="space-y-2">
                    {content.checklist.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => toggleChecklist(idx)}
                        className="w-full flex items-start gap-2 text-left text-xs p-1.5 rounded-lg hover:bg-coquette-50/50 transition-colors"
                      >
                        {completedSteps[idx] ? (
                          <CheckCircle2 className="w-4 h-4 text-coquette-500 shrink-0 mt-0.5" />
                        ) : (
                          <Circle className="w-4 h-4 text-coquette-300 shrink-0 mt-0.5" />
                        )}
                        <span className={`leading-tight ${completedSteps[idx] ? 'line-through text-neutral-400' : 'text-neutral-700'}`}>
                          {item}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TYPE: RECIPE */}
          {type === 'recipe' && (
            <div className="bg-amber-50/50 border border-coquette-200 rounded-2xl p-4 text-xs space-y-3">
              <div className="text-center border-b border-coquette-200/60 pb-2">
                <p className="font-semibold text-coquette-800 text-sm">{content.subtitle}</p>
                <p className="text-[10px] text-neutral-500 font-mono mt-0.5">⏱️ {content.prepTime}</p>
              </div>

              <div>
                <p className="font-bold text-coquette-900 text-[11px] mb-1.5 uppercase">Ingredientes:</p>
                <ul className="space-y-1 text-neutral-700 text-[11px]">
                  {content.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-coquette-500">•</span>
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-coquette-200/60 text-neutral-600 text-[11px] leading-relaxed">
                <p>{content.instructions}</p>
                <p className="mt-2 text-coquette-700 font-medium italic">{content.coquetteTouch}</p>
              </div>
            </div>
          )}

          {/* TYPE: MUSIC */}
          {type === 'music' && (
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 border border-coquette-200 rounded-2xl p-4 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-coquette-500 text-white flex items-center justify-center shadow-md animate-pulse-subtle">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-neutral-900 text-sm">
                  {content.songTitle}
                </h4>
                <p className="text-xs text-neutral-600 mt-1 italic">
                  "{content.dedication}"
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={content.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#1DB954] text-white text-xs font-bold rounded-full shadow hover:bg-[#1aa34a] transition-colors"
                >
                  <span>Abrir en Spotify</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}

          {/* TYPE: CLUE (Secret Physical Gift) */}
          {type === 'clue' && (
            <div className="bg-gradient-to-b from-rose-50 to-pink-50 border-2 border-coquette-300 rounded-2xl p-4 text-center space-y-3 shadow-inner">
              <div className="text-3xl animate-bounce">🎁</div>
              <h4 className="font-serif font-bold text-coquette-900 text-sm">
                ¡Misión de Búsqueda!
              </h4>
              <p className="text-xs text-coquette-800 italic bg-white/80 p-2.5 rounded-xl border border-coquette-200">
                "{content.riddle}"
              </p>
              <div className="text-[11px] text-neutral-600 text-left bg-white/70 p-2.5 rounded-xl space-y-1">
                <p><strong>Pista:</strong> {content.hint}</p>
                <p><strong>Tu recompensa:</strong> {content.reward}</p>
              </div>
              <p className="text-[10px] text-coquette-600 font-bold uppercase tracking-wider">
                {content.footer}
              </p>
            </div>
          )}

          {/* TYPE: LETTER */}
          {type === 'letter' && (
            <div className="paper-card border border-coquette-200 rounded-2xl p-4 shadow-sm space-y-3">
              <div className="border-b border-coquette-200/50 pb-2 text-center">
                <p className="font-cursive text-xl text-coquette-700">
                  {content.subtitle || 'Para mi persona favorita'}
                </p>
              </div>
              
              {content.text && (
                <div className="text-xs text-neutral-700 leading-relaxed whitespace-pre-line space-y-2">
                  {content.text}
                </div>
              )}

              {content.items && (
                <div className="space-y-1.5 text-xs text-neutral-700">
                  {content.items.map((item, i) => (
                    <p key={i} className="leading-relaxed bg-white/70 p-1.5 rounded-lg border border-coquette-100">
                      {item}
                    </p>
                  ))}
                </div>
              )}

              {content.quote && (
                <div className="pt-2 text-center text-xs font-serif italic text-coquette-800 font-semibold">
                  {content.quote}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Bottom Action Button */}
        <div className="mt-4 pt-3 border-t border-coquette-100">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-coquette-100 text-coquette-800 font-semibold text-xs hover:bg-coquette-200 active:scale-98 transition-colors flex items-center justify-center gap-1.5"
          >
            <Heart className="w-3.5 h-3.5 fill-coquette-400 text-coquette-500" />
            <span>Guardar y Cerrar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
