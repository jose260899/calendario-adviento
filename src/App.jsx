import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DayCard from './components/DayCard';
import DayModal from './components/DayModal';
import { CALENDAR_DAYS } from './data/calendarDays';
import { Sparkles, RotateCcw, Key } from 'lucide-react';

export default function App() {
  // Storage for opened doors and redeemed coupons
  const [openedDays, setOpenedDays] = useState(() => {
    try {
      const saved = localStorage.getItem('adviento_coquette_opened');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [redeemedCoupons, setRedeemedCoupons] = useState(() => {
    try {
      const saved = localStorage.getItem('adviento_coquette_redeemed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeModalDay, setActiveModalDay] = useState(null);

  // Secret developer unlock: only active if ?test=true is in the URL,
  // or if Jose activates the secret PIN in the footer
  const [secretUnlocked, setSecretUnlocked] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('test') === 'true';
    }
    return false;
  });

  // Calculate real date
  const now = new Date();
  const currentMonth = now.getMonth(); // 11 is December (0-indexed: Jan=0, ..., Nov=10, Dec=11)
  const currentDay = now.getDate();
  const currentYear = now.getFullYear();

  const isDecember = currentMonth === 11;

  // Calculate days remaining until December 1st if we are in November
  let daysUntilDecember = 0;
  if (!isDecember) {
    const decFirst = new Date(currentYear, 11, 1);
    const diffTime = decFirst - now;
    daysUntilDecember = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  }

  // Strict Date Logic:
  // A day is ONLY unlocked if:
  // 1) Secret developer mode is turned on (via URL ?test=true or secret PIN)
  // 2) OR it is December AND the day number <= today's day of December
  const isDayUnlocked = (dayNumber) => {
    if (secretUnlocked) return true;
    if (!isDecember) return false; // Strictly locked before December 1st!
    return dayNumber <= currentDay; // On Dec 1 -> only day 1; on Dec 2 -> 1 and 2, etc.
  };

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('adviento_coquette_opened', JSON.stringify(openedDays));
  }, [openedDays]);

  useEffect(() => {
    localStorage.setItem('adviento_coquette_redeemed', JSON.stringify(redeemedCoupons));
  }, [redeemedCoupons]);

  const handleOpenDay = (dayData) => {
    if (!openedDays.includes(dayData.day)) {
      setOpenedDays(prev => [...prev, dayData.day]);
    }
    setActiveModalDay(dayData);
  };

  const handleRedeemCoupon = (dayNumber) => {
    if (!redeemedCoupons.includes(dayNumber)) {
      setRedeemedCoupons(prev => [...prev, dayNumber]);
    }
  };

  // Secret PIN prompt for Jose only (so she cannot cheat)
  const handleSecretAccess = () => {
    if (secretUnlocked) {
      setSecretUnlocked(false);
      alert('Modo secreto desactivado. Calendario bloqueado por fecha real 🔒');
      return;
    }
    const pin = prompt('Código secreto de desarrollador (Jose):');
    if (pin === '1234' || pin?.toLowerCase() === 'amor') {
      setSecretUnlocked(true);
      alert('¡Acceso concedido! Todos los días desbloqueados para pruebas 🎀');
    } else if (pin !== null) {
      alert('¡Código incorrecto! A esperar a diciembre 🤫✨');
    }
  };

  const handleResetProgress = () => {
    if (window.confirm('¿Quieres reiniciar los días abiertos para empezar de cero?')) {
      setOpenedDays([]);
      setRedeemedCoupons([]);
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden flex flex-col justify-between selection:bg-coquette-200">
      {/* Floating background aesthetic touches */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        <span className="absolute top-10 left-4 text-xl animate-float-slow">🎀</span>
        <span className="absolute top-32 right-6 text-sm animate-sparkle-slow">✨</span>
        <span className="absolute top-80 left-8 text-xs text-coquette-300">🌸</span>
        <span className="absolute top-1/2 right-4 text-lg animate-float-slow">🎀</span>
        <span className="absolute bottom-24 left-6 text-sm animate-sparkle-slow">💖</span>
        <span className="absolute bottom-10 right-8 text-xl animate-float-slow">🎀</span>
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto px-4 pb-12">
        {/* Header Section */}
        <Header 
          openedCount={openedDays.length}
          totalDays={CALENDAR_DAYS.length}
          daysUntilDecember={daysUntilDecember}
          isDecember={isDecember}
        />

        {/* Secret badge if Jose activated test mode */}
        {secretUnlocked && (
          <div className="my-3 mx-1 p-2 bg-amber-50 border border-amber-300 rounded-xl text-[11px] text-amber-900 flex items-center justify-between gap-2 shadow-xs">
            <span>🔓 <strong>Modo Jose Activo:</strong> Días desbloqueados para revisión.</span>
            <button 
              onClick={() => setSecretUnlocked(false)}
              className="text-[10px] bg-amber-200 px-2 py-0.5 rounded font-bold hover:bg-amber-300"
            >
              Bloquear
            </button>
          </div>
        )}

        {/* 24 Calendar Doors Grid */}
        <main className="mt-4 grid grid-cols-3 sm:grid-cols-4 gap-2.5 sm:gap-3">
          {CALENDAR_DAYS.map((dayData) => {
            const isUnlocked = isDayUnlocked(dayData.day);
            const isOpened = openedDays.includes(dayData.day);
            const isToday = isDecember && currentDay === dayData.day;

            return (
              <DayCard
                key={dayData.day}
                dayData={dayData}
                isUnlocked={isUnlocked}
                isOpened={isOpened}
                isToday={isToday}
                isDecember={isDecember}
                onOpenDay={handleOpenDay}
              />
            );
          })}
        </main>

        {/* Footer info & controls */}
        <footer className="mt-10 text-center text-xs text-coquette-600/80 space-y-3">
          <p className="font-cursive text-lg text-coquette-700">
            Hecho con todo mi amor para mi atleta favorita 🎀
          </p>
          <div className="flex items-center justify-center gap-3 text-[11px] text-neutral-400">
            <button
              onClick={handleResetProgress}
              className="inline-flex items-center gap-1 hover:text-coquette-600 transition-colors"
            >
              <RotateCcw className="w-3 h-3" /> Reiniciar días abiertos
            </button>
            <span>•</span>
            {/* Secret key for Jose */}
            <button
              onClick={handleSecretAccess}
              className="opacity-30 hover:opacity-100 transition-opacity p-1"
              title="Acceso exclusivo Jose"
              aria-label="Acceso secreto"
            >
              <Key className="w-3 h-3 text-neutral-400 hover:text-coquette-500" />
            </button>
          </div>
        </footer>
      </div>

      {/* Pop-up Modal when clicking a day */}
      {activeModalDay && (
        <DayModal
          dayData={activeModalDay}
          onClose={() => setActiveModalDay(null)}
          onRedeemCoupon={handleRedeemCoupon}
          isRedeemed={redeemedCoupons.includes(activeModalDay.day)}
        />
      )}
    </div>
  );
}
