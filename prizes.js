// ========================================
// CONFIGURACIÓN DE PREMIOS
// ========================================

// Configuración de premios con imagen y nombre
const PRIZES_CONFIG = [
    {
        id: 1,
        name: "Steam Gift Card $10",
        imageUrl: "https://via.placeholder.com/100x100/8a2be2/ffffff?text=Steam",
        emoji: "🎮"
    },
    {
        id: 2,
        name: "Discord Nitro 1 mes",
        imageUrl: "https://via.placeholder.com/100x100/5865f2/ffffff?text=Discord",
        emoji: "🎁"
    },
    {
        id: 3,
        name: "1000 bits",
        imageUrl: "https://via.placeholder.com/100x100/9146ff/ffffff?text=Twitch",
        emoji: "💰"
    },
    {
        id: 4,
        name: "Emote personalizado",
        imageUrl: "https://via.placeholder.com/100x100/ff00ff/ffffff?text=Emote",
        emoji: "🎯"
    },
    {
        id: 5,
        name: "VIP por 1 semana",
        imageUrl: "https://via.placeholder.com/100x100/ffd700/000000?text=VIP",
        emoji: "🌟"
    },
    {
        id: 6,
        name: "Mod por 1 día",
        imageUrl: "https://via.placeholder.com/100x100/00ff00/000000?text=Mod",
        emoji: "🎪"
    },
    {
        id: 7,
        name: "Overlay personalizado",
        imageUrl: "https://via.placeholder.com/100x100/ff6b6b/ffffff?text=Overlay",
        emoji: "🎨"
    },
    {
        id: 8,
        name: "Playlist en stream",
        imageUrl: "https://via.placeholder.com/100x100/4ecdc4/ffffff?text=Music",
        emoji: "🎵"
    },
    {
        id: 9,
        name: "Pizza virtual",
        imageUrl: "https://via.placeholder.com/100x100/ff8c42/ffffff?text=Pizza",
        emoji: "🍕"
    },
    {
        id: 10,
        name: "Cambio de nombre",
        imageUrl: "https://via.placeholder.com/100x100/9b59b6/ffffff?text=Name",
        emoji: "🎭"
    },
    {
        id: 11,
        name: "Shoutout especial",
        imageUrl: "https://via.placeholder.com/100x100/e74c3c/ffffff?text=Shoutout",
        emoji: "🎪"
    },
    {
        id: 12,
        name: "Juego de Steam",
        imageUrl: "https://via.placeholder.com/100x100/3498db/ffffff?text=Game",
        emoji: "🎮"
    }
];

// ========================================
// INSTRUCCIONES PARA EDITAR PREMIOS
// ========================================

/*
PARA EDITAR LOS PREMIOS:

1. CAMBIAR NOMBRE:
   - Modifica el campo "name" de cada premio
   - Ejemplo: "name": "Mi Nuevo Premio"

2. CAMBIAR IMAGEN:
   - Reemplaza "imageUrl" con la URL de tu imagen
   - Puedes usar URLs de internet o rutas locales
   - Ejemplo: "imageUrl": "https://mi-sitio.com/imagen.jpg"
   - O local: "imageUrl": "./images/mi-imagen.png"

3. CAMBIAR EMOJI:
   - Modifica el campo "emoji" 
   - Ejemplo: "emoji": "🎉"

4. AGREGAR NUEVOS PREMIOS:
   - Copia un objeto existente y cambia el "id"
   - Asegúrate de que el ID sea único
   - El ID debe coincidir con la posición en el array

5. ELIMINAR PREMIOS:
   - Simplemente elimina la línea del premio
   - Asegúrate de que queden exactamente 12 premios

FORMATO DE IMAGEN RECOMENDADO:
- Tamaño: 100x100 píxeles
- Formato: PNG, JPG, o GIF
- Fondo: Transparente o que combine con el tema
*/

// Exportar configuración
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PRIZES_CONFIG };
}
