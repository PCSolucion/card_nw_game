// ========================================
// CONFIGURACIÓN DEL JUEGO DE CARTAS
// ========================================

// Configuración principal del juego
const GAME_CONFIG = {
    // Número total de cartas en el juego
    totalCards: 10,
    
    // Tiempo que se muestra la información de la carta volteada (en segundos)
    cardInfoDisplayTime: 3
};

// Configuración de imágenes de fondo para las cartas (cuando no están volteadas)
const CARD_BACKGROUND_IMAGES = [
    "https://res.cloudinary.com/pcsolucion/image/upload/v1755866338/06-Neishatun_f1qu6e.png",
    "https://res.cloudinary.com/pcsolucion/image/upload/v1755866320/05-Ifrit_uffxrx.png",
    "https://res.cloudinary.com/pcsolucion/image/upload/v1755866299/03-Tempest_etfu88.png",
    "https://res.cloudinary.com/pcsolucion/image/upload/v1755866300/04-Forge_a7kaxo.png",
    "https://res.cloudinary.com/pcsolucion/image/upload/v1755866300/02-Zhou_mwkaha.png",
    "https://res.cloudinary.com/pcsolucion/image/upload/v1755866299/03-Chardis_j0lakp.png",
    "https://res.cloudinary.com/pcsolucion/image/upload/v1755866300/04-Marius_dsyqde.png",
    "https://res.cloudinary.com/pcsolucion/image/upload/v1755866300/02-Lazarus_du8b14.png",
    "https://res.cloudinary.com/pcsolucion/image/upload/v1755866299/01-Isabella_sldeyi.png",
    "https://res.cloudinary.com/pcsolucion/image/upload/v1755866299/01-Dynasty_wd9x2f.png",


    // ========================================
    // AQUÍ PUEDES AGREGAR MÁS IMÁGENES DE FONDO
    // ========================================
    // Agrega las URLs de las imágenes aquí, una por línea:
    // "https://tu-imagen-1.png",
    // "https://tu-imagen-2.png",
    // "https://tu-imagen-3.png",
    // etc...
    // ========================================
];

// Configuración de colores (opcional - para personalización avanzada)
const COLOR_CONFIG = {
    primary: '#8a2be2',      // Púrpura principal
    secondary: '#00ffff',    // Cian secundario
    accent: '#ff00ff',       // Magenta de acento
    background: '#0a0a1a',   // Fondo oscuro
    text: '#ffffff',         // Texto blanco
    danger: '#ff4444'        // Color de peligro
};

// Configuración de animaciones
const ANIMATION_CONFIG = {
    cardFlipDuration: 300,   // Duración de la animación de volteo (ms)
    glowAnimationDuration: 2000, // Duración de la animación de glow (ms)
    hoverEffect: true,       // Efectos hover en las cartas
    smoothTransitions: true  // Transiciones suaves
};

// Configuración de texto y mensajes
const TEXT_CONFIG = {
    gameTitle: "MEMORY CARD GAME",
    restartButtonText: "🔄 REINICIAR",
    gameEndMessage: "🎮 ¡Juego terminado!",
    cardsFlippedMessage: "cartas reveladas"
};

// ========================================
// INSTRUCCIONES DE PERSONALIZACIÓN
// ========================================

/*
PARA CAMBIAR LOS PREMIOS:
1. Edita el archivo prizes.js
2. Modifica el array PRIZES_CONFIG
3. Cambia nombre, imagen y emoji de cada premio

PARA AGREGAR IMÁGENES DE FONDO DE CARTAS:
1. Agrega las URLs en el array CARD_BACKGROUND_IMAGES arriba
2. Una URL por línea, separadas por comas
3. Las imágenes se asignarán aleatoriamente a las cartas

PARA CAMBIAR LOS COLORES:
1. Edita COLOR_CONFIG
2. Usa códigos hexadecimales (#RRGGBB)

PARA CAMBIAR EL NÚMERO DE CARTAS:
1. Modifica GAME_CONFIG.totalCards
2. Asegúrate de tener premios para todas las cartas en prizes.js
3. El diseño se ajustará automáticamente
4. Actualmente configurado para 10 cartas en 2 filas de 5

CÓMO JUGAR:
- Haz clic en las cartas para revelar los premios
- Usa el botón "REINICIAR" para mezclar los premios en nuevas posiciones
- El juego termina cuando se revelan todas las cartas
*/

// Exportar configuración para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        GAME_CONFIG,
        CARD_BACKGROUND_IMAGES,
        COLOR_CONFIG,
        ANIMATION_CONFIG,
        TEXT_CONFIG
    };
}
