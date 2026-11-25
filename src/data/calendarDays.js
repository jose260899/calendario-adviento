// Tipos de contenido:
// 'photo' -> Foto estilo polaroid con dedicatoria (solo para los días que tengáis fotos buenas o graciosas)
// 'coupon' -> Vale interactivo canjeable (con botón de canjear)
// 'mission' -> Reto o misión fit de pareja para el día
// 'recipe' -> Receta fit coquette
// 'music' -> Canción o playlist para entrenar o romancear
// 'clue' -> Pista para encontrar un regalito físico sorpresa escondido
// 'letter' -> Carta de amor sincera con estética coquette

export const CALENDAR_DAYS = [
  {
    day: 1,
    type: 'letter',
    title: '¡Bienvenida a Diciembre, mi amor! 🎀✨',
    badge: 'Comienza la magia',
    icon: 'Sparkles',
    themeColor: 'from-pink-100 to-rose-100',
    content: {
      subtitle: 'Nuestra temporada favorita empieza hoy',
      text: 'Este calendario lo he creado pensando en nosotros: en lo mucho que me gusta verte sonreír, en nuestras rutinas, en compartir kilómetros y barras de gimnasio, y en verte siempre tan bonita incluso cuando acabamos reventados.\n\nCada día de aquí al 24 de diciembre tendrás una sorpresa: a veces un detalle, a veces un vale para mí, a veces una foto o una misión. ¡Prepárate para el mes más coquette y fuerte del año!',
      quote: '"Fuerte para la vida, coquette para el corazón." 🩰💕'
    }
  },
  {
    day: 2,
    type: 'coupon',
    title: 'Vale por: Masaje de Descarga Post-Entreno 💆‍♀️',
    badge: 'Vale Canjeable #1',
    icon: 'HeartHandshake',
    themeColor: 'from-rose-50 to-pink-100',
    content: {
      subtitle: 'Válido para gemelos, espalda o trapecios',
      description: 'Canjeable hoy o el día de la semana que más cargada estés. Incluye aceitito, música relajante y cero quejas del masajista (o sea, yo).',
      terms: '• Duración: 20 minutos de puro relax\n• Nivel de presión: el que tú me ordenes\n• Sin fecha de caducidad',
      buttonText: 'Canjear Masaje Ahora 🎀'
    }
  },
  {
    day: 3,
    type: 'photo',
    title: 'La sonrisa más bonita del mundo 🏔️💖',
    badge: 'Mi Chica Favorita',
    icon: 'Camera',
    themeColor: 'from-pink-50 to-pink-100',
    content: {
      imageUrl: '/fotos/chica-montana.jpg',
      caption: 'Mírale la carita a mi deportista favorita.',
      note: 'Me encanta esta foto tuya. Tienes una luz increíble y esa sonrisa me alegra cualquier día, por muy duro que sea el entreno o la semana. ¡Eres la más preciosa!',
      polaroidDate: 'Nuestros Recuerdos'
    }
  },
  {
    day: 4,
    type: 'mission',
    title: 'Misión Pareja Fit: El Reto de la Plancha ⏱️',
    badge: 'Reto del Día',
    icon: 'Flame',
    themeColor: 'from-amber-50 to-pink-100',
    content: {
      difficulty: 'Nivel Coquette & Fuerte',
      objective: 'Aguantar 45 segundos de plank abdominal mirándonos a los ojos fijamente.',
      penalty: 'El primero que sonría o se caiga tiene que darle 5 besitos al otro.',
      bonus: 'Si ambos aguantamos el tiempo completo, nos ganamos un snack dulce post-cena.',
      checklist: [
        'Colocar la esterilla en el salón',
        'Mirarse a los ojos sin reírse (¡dificultad 100/100!)',
        'Celebrar con un abrazo apretado'
      ]
    }
  },
  {
    day: 5,
    type: 'music',
    title: 'Nuestra Canción de PR / Tirada Larga 🎧',
    badge: 'Ritmo & Flow',
    icon: 'Music',
    themeColor: 'from-purple-50 to-pink-100',
    content: {
      songTitle: 'Para cuando las piernas pesan pero el corazón empuja',
      recommendation: 'Póntela hoy cuando vayas a correr o en el último set de sentadillas.',
      dedication: 'Cada vez que suena esta canción me acuerdo de tu determinación y de cómo nunca te rindes. Eres imparable.',
      spotifyQuery: 'energy workout pop',
      spotifyUrl: 'https://open.spotify.com'
    }
  },
  {
    day: 6,
    type: 'coupon',
    title: 'Vale por: Tú eliges el entreno de hoy 📋',
    badge: 'Vale Canjeable #2',
    icon: 'Trophy',
    themeColor: 'from-pink-50 to-rose-100',
    content: {
      subtitle: 'Poder absoluto para la jefa',
      description: 'Hoy tú mandas. Tú decides los ejercicios, los ritmos de carrera o los descansos. Yo solo digo "sí, mi amor" y hago lo que me pidas.',
      terms: '• Válido tanto para sesión de gimnasio como para rodaje\n• Yo llevo el agua y te animo en cada serie',
      buttonText: 'Hacer que Jose obedezca 👑'
    }
  },
  {
    day: 7,
    type: 'recipe',
    title: 'Receta: Smoothie "Princess PR" de Fresa 🍓🥛',
    badge: 'Cocina Fit Coquette',
    icon: 'Coffee',
    themeColor: 'from-pink-100 to-red-50',
    content: {
      subtitle: 'Rosa, delicioso y con 28g de proteína',
      prepTime: '3 minutos (preparado por mí)',
      ingredients: [
        '1 taza de fresas congeladas (color rosa perfecto)',
        '1 scoop de proteína de vainilla o fresa',
        '200ml de leche de almendras o avena',
        '1 cucharadita de semillas de chía o lino',
        'Topping: un toque de chocolate negro rallado'
      ],
      instructions: 'Bátelo todo bien frío. Te prometo hacértelo cuando me lo pidas como merienda después de reventar el entreno.',
      coquetteTouch: 'Se sirve con pajita mona y mucho amor. 🎀'
    }
  },
  {
    day: 8,
    type: 'clue',
    title: 'Pista Secreta: Hay algo para ti... 🕵️‍♀️🎀',
    badge: 'Regalo Físico Oculto',
    icon: 'Gift',
    themeColor: 'from-rose-100 to-pink-200',
    content: {
      riddle: '¿Dónde guardas aquello que siempre llevas a entrenar pero nunca sale a correr solo?',
      hint: 'Revisa el bolsillo pequeño de tu bolsa del gimnasio / abrigo de correr.',
      reward: 'Un detallito coquette para que entrenes más cómoda (coletero de seda / calcetines con lazo / tu barrita favorita).',
      footer: '¡Ve a buscarlo antes de que te lo quite!'
    }
  },
  {
    day: 9,
    type: 'letter',
    title: 'Lo que más admiro cuando te veo entrenar 🏋️‍♀️',
    badge: 'Palabras de Corazón',
    icon: 'Sparkles',
    themeColor: 'from-pink-50 to-rose-50',
    content: {
      subtitle: 'Eres más fuerte de lo que crees',
      text: 'A veces te exiges muchísimo y te enfadas si un día las piernas no responden o el peso cuesta más. Pero yo desde fuera te miro y solo veo disciplina, superación y una tía increíble.\n\nMe encanta cómo te recoges el pelo con tu pinza antes de una serie pesada, cómo respiras hondo antes de salir a correr con frío, y esa sonrisa que pones cuando terminas reventada pero sabiendo que lo has bordado.',
      quote: 'Tu constancia me inspira todos los días. 💖'
    }
  },
  {
    day: 10,
    type: 'coupon',
    title: 'Vale por: Desayuno Fit Coquette en la Cama 🥞',
    badge: 'Vale Canjeable #3',
    icon: 'UtensilsCrossed',
    themeColor: 'from-amber-50 to-pink-50',
    content: {
      subtitle: 'Servicio de habitaciones VIP',
      description: 'Tortitas de avena proteicas en forma de corazón, café recién hecho y fruta fresca cortada bonita, todo servido en la cama.',
      terms: '• No tienes que mover un dedo hasta que acabes de comer\n• Incluye besos ilimitados mientras se cocina',
      buttonText: 'Encargar Desayuno en la Cama 🥞'
    }
  },
  {
    day: 11,
    type: 'photo',
    title: 'Nuestra versión: "Sudar con estilo" 👟',
    badge: 'Foto & Recuerdo',
    icon: 'Camera',
    themeColor: 'from-pink-50 to-pink-100',
    content: {
      imageUrl: 'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=800&auto=format&fit=crop',
      caption: 'Los mejores domingos son los de sudar juntos y luego no movernos del sofá.',
      note: '¿Quién dijo que el running no puede ser coquette? Aquí tienes una foto de esas que demuestran que somos el mejor equipo de atletas.',
      polaroidDate: 'Nuestras aventuras'
    }
  },
  {
    day: 12,
    type: 'mission',
    title: 'Misión: Rodaje "Ritmo Cháchara" + Café ☕🏃‍♀️',
    badge: 'Cita en Zapatillas',
    icon: 'Compass',
    themeColor: 'from-pink-50 to-rose-100',
    content: {
      plan: 'Rodaje suave a ritmo conversacional (Zona 2 real, nada de picarse).',
      destination: 'Terminar en una cafetería bonita para pedir matcha o café de especialidad con tostada rica.',
      rule: 'Prohibido mirar el reloj para ver los ritmos; hoy solo importa charlar y disfrutar de la mañana juntos.',
      checklist: [
        'Ropa de correr calentita y cómoda',
        'Ritmo donde podamos hablar sin ahogarnos',
        'El café y las tostadas van por mi cuenta ☕'
      ]
    }
  },
  {
    day: 13,
    type: 'coupon',
    title: 'Vale por: Siesta Post-Entreno sin Culpa 🧸',
    badge: 'Vale Canjeable #4',
    icon: 'Moon',
    themeColor: 'from-purple-50 to-pink-50',
    content: {
      subtitle: 'Recuperación muscular de élite',
      description: 'Manta suave, persianas bajadas, modo avión en el móvil y siesta abrazados sin alarmas.',
      terms: '• La ciencia dice que el músculo crece descansando\n• Modo cucharita obligatorio',
      buttonText: 'Activar Modo Hibernación 🛌'
    }
  },
  {
    day: 14,
    type: 'music',
    title: 'La Canción de la Vuelta a la Calma 🌸',
    badge: 'Momento Relax',
    icon: 'Music',
    themeColor: 'from-rose-50 to-pink-100',
    content: {
      songTitle: 'Para cuando nos estiramos en la esterilla al atardecer',
      recommendation: 'Música suave para desconectar la mente y sentir el cuerpo relajarse.',
      dedication: 'Me encanta ese momento cuando se apagan las luces del gym o volvemos a casa en el coche de noche con las manos agarradas sobre la palanca.',
      spotifyQuery: 'chill acoustic romance',
      spotifyUrl: 'https://open.spotify.com'
    }
  },
  {
    day: 15,
    type: 'clue',
    title: 'Pista Secreta: Revisa tu mesita de noche 🌙🎀',
    badge: 'Regalo Físico Oculto',
    icon: 'Gift',
    themeColor: 'from-pink-100 to-rose-200',
    content: {
      riddle: '¿Qué hidrata tus labios cuando el viento del invierno azota en las tiradas largas?',
      hint: 'Busca bajo tu almohada o en el cajón de las cremas.',
      reward: 'Un bálsamo o hidratante súper cuqui para que el frío no te pare.',
      footer: '¡Abre el paquete despacito y disfruta del olor!'
    }
  },
  {
    day: 16,
    type: 'letter',
    title: 'Las 5 cosas que me vuelven loco de ti 🥰',
    badge: 'Top 5 de Mi Chica',
    icon: 'Heart',
    themeColor: 'from-rose-50 to-pink-100',
    content: {
      items: [
        '1. La energía y la sonrisa con la que me recibes siempre.',
        '2. Cómo te concentras antes de levantar una barra pesada.',
        '3. Tu estilo para combinar conjuntos de entreno con accesorios monos.',
        '4. Que seas mi apoyo cuando a mí me cuesta motivarme.',
        '5. Tus abrazos cuando estamos cansados: son mi lugar favorito en el mundo.'
      ],
      quote: 'Gracias por ser mi persona y mi compañera de vida. 🎀'
    }
  },
  {
    day: 17,
    type: 'coupon',
    title: 'Vale por: Snack de Antojo Post-Entreno Patrocinado 🍫',
    badge: 'Vale Canjeable #5',
    icon: 'Sparkle',
    themeColor: 'from-pink-50 to-amber-50',
    content: {
      subtitle: 'Antojos sin remordimientos',
      description: 'El dulce, helado, barrita premium o merienda que se te antoje hoy. Yo voy a comprártelo donde haga falta.',
      terms: '• No se cuentan calorías hoy\n• Se disfruta con ganas',
      buttonText: 'Pedir mi Antojo Ahora 🍩'
    }
  },
  {
    day: 18,
    type: 'photo',
    title: 'El mejor equipo de ruta y de vida 🏍️💨💕',
    badge: 'Nuestras Aventuras',
    icon: 'Camera',
    themeColor: 'from-pink-50 to-rose-50',
    content: {
      imageUrl: '/fotos/pareja-motos.jpg',
      caption: 'Mil curvas, mil metas y siempre a tu lado.',
      note: 'No solo compartimos entrenos, kilómetros y barras: compartimos la vida entera y cada aventura en moto o donde sea. Eres mi compañera de ruta favorita para siempre.',
      polaroidDate: 'Nuestras Rutas'
    }
  },
  {
    day: 19,
    type: 'mission',
    title: 'Misión: Sesión de Estiramientos con Velas 🕯️🧘‍♀️',
    badge: 'Relax & Bienestar',
    icon: 'Sparkles',
    themeColor: 'from-purple-50 to-pink-100',
    content: {
      ambiance: 'Luces apagadas, una vela con olor rico y música suave.',
      routine: '15 minutos de movilidad de caderas, isquios y espalda.',
      extra: 'Te ayudo a profundizar los estiramientos con cuidado para que te sientas flotando.',
      checklist: [
        'Encender la velita perfumada',
        'Esterilla doble para los dos',
        'Cero teléfonos durante la sesión'
      ]
    }
  },
  {
    day: 20,
    type: 'coupon',
    title: 'Vale por: Lavar y preparar tu Shaker / Bidones 🫧',
    badge: 'Vale Canjeable #6',
    icon: 'Sparkles',
    themeColor: 'from-blue-50 to-pink-100',
    content: {
      subtitle: 'El acto de servicio más sincero',
      description: 'La tarea más odiada del mundo fitness: fregar el shaker olvidado o rellenar electrolitos. Hoy lo hago yo sin rechistar.',
      terms: '• Quedará impecable y oliendo a limpio\n• Te lo dejo listo para tu próximo entreno',
      buttonText: 'Darle el Shaker Sucio a Jose 🧴'
    }
  },
  {
    day: 21,
    type: 'recipe',
    title: 'Receta: Avena Calentita de Galleta y Canela 🥣✨',
    badge: 'Desayuno Navideño Fit',
    icon: 'Coffee',
    themeColor: 'from-amber-50 to-pink-50',
    content: {
      subtitle: 'Sabor a Navidad para recargar glucógeno',
      prepTime: '5 minutos en cazuela',
      ingredients: [
        '40g de copos de avena finos',
        'Leche templada con canela en rama y ralladura de naranja',
        '1 cucharada de crema de almendras o cacahuete',
        '1 scoop de proteína sabor galleta o vainilla',
        'Frambuesas frescas por encima'
      ],
      instructions: 'La textura cremosa perfecta para las mañanas frías antes de ir a entrenar.',
      coquetteTouch: 'Se come con cuchara dorada y sonriendo. 🎀'
    }
  },
  {
    day: 22,
    type: 'clue',
    title: 'Pista Secreta: ¡Estamos muy cerca de Navidad! 🎄🎀',
    badge: 'Regalo Físico Oculto',
    icon: 'Gift',
    themeColor: 'from-rose-100 to-pink-200',
    content: {
      riddle: 'Allí donde descansas tus pies al llegar a casa tras un entreno duro...',
      hint: 'Cerca de tus zapatillas favoritas.',
      reward: 'Unos calcetines súper suaves y calentitos para recuperar piernas en casa.',
      footer: '¡Busca bien que el lazo rosa te dará la pista!'
    }
  },
  {
    day: 23,
    type: 'coupon',
    title: 'Vale por: Noche de Película Navideña y Palomitas 🎬🍿',
    badge: 'Vale Canjeable #7',
    icon: 'Tv',
    themeColor: 'from-red-50 to-pink-100',
    content: {
      subtitle: 'La víspera perfecta',
      description: 'Tú eliges la película (incluso si es la comedia romántica navideña más cursi del catálogo). Palomitas, mantita y sofá garantizados.',
      terms: '• No se vale quedarse dormido en los primeros 10 minutos\n• Abrazos obligatorios durante toda la peli',
      buttonText: 'Elegir Película Navideña 🎀'
    }
  },
  {
    day: 24,
    type: 'letter',
    title: 'Día 24: Feliz Nochebuena, Mi Amor 💖🎄🎀',
    badge: 'El Gran Día',
    icon: 'Crown',
    themeColor: 'from-pink-100 to-rose-200',
    content: {
      subtitle: 'El mejor regalo de este año eres tú',
      text: 'Hemos llegado al día 24. Espero que este calendario te haya sacado tantas sonrisas como a mí haciéndolo para ti.\n\nCompartir mi vida, mis metas, mis entrenos y mis días contigo es lo más bonito que me ha pasado. Eres fuerte, eres preciosa, eres dulce y eres la compañera con la que quiero cruzar todas las metas que nos propongamos.\n\nHoy no hay solo una dedicatoria: ¡tienes tu regalo esperándote en persona! Te amo con todo mi corazón.',
      quote: '"Para siempre tu mayor fan y tu mejor compañero de equipo." 🎀🥂✨'
    }
  }
];
