// ========================================
// CONFIGURACIÓN DE PREMIOS
// ========================================

// ========================================
// CONFIGURACIÓN DE PREMIOS DE ORO
// ========================================

// Configuración de premios con cantidades de oro
const PRIZES_CONFIG = [
    // 7 premios de 1,000 oro
    {
        id: 1,
        name: "1,000 Oro",
        amount: 1000,
        imageUrl: "https://res.cloudinary.com/pcsolucion/image/upload/v1756533278/gempoucht1_d7u0c0.png",
        isJackpot: false
    },
    {
        id: 2,
        name: "1,000 Oro",
        amount: 1000,
        imageUrl: "https://res.cloudinary.com/pcsolucion/image/upload/v1756533278/gempoucht1_d7u0c0.png",
        isJackpot: false
    },
    {
        id: 3,
        name: "1,000 Oro",
        amount: 1000,
        imageUrl: "https://res.cloudinary.com/pcsolucion/image/upload/v1756533278/gempoucht1_d7u0c0.png",
        isJackpot: false
    },
    {
        id: 4,
        name: "1,000 Oro",
        amount: 1000,
        imageUrl: "https://res.cloudinary.com/pcsolucion/image/upload/v1756533278/gempoucht1_d7u0c0.png",
        isJackpot: false
    },
    {
        id: 5,
        name: "1,000 Oro",
        amount: 1000,
        imageUrl: "https://res.cloudinary.com/pcsolucion/image/upload/v1756533278/gempoucht1_d7u0c0.png",
        isJackpot: false
    },
    {
        id: 6,
        name: "1,000 Oro",
        amount: 1000,
        imageUrl: "https://res.cloudinary.com/pcsolucion/image/upload/v1756533278/gempoucht1_d7u0c0.png",
        isJackpot: false
    },
    {
        id: 7,
        name: "1,000 Oro",
        amount: 1000,
        imageUrl: "https://res.cloudinary.com/pcsolucion/image/upload/v1756533278/gempoucht1_d7u0c0.png",
        isJackpot: false
    },
    // 1 premio de 1,500 oro
    {
        id: 8,
        name: "1,500 Oro",
        amount: 1500,
        imageUrl: "https://res.cloudinary.com/pcsolucion/image/upload/v1756533278/gempoucht1_d7u0c0.png",
        isJackpot: false
    },
    // 1 premio de 2,000 oro
    {
        id: 9,
        name: "2,000 Oro",
        amount: 2000,
        imageUrl: "https://res.cloudinary.com/pcsolucion/image/upload/v1756533278/gempoucht1_d7u0c0.png",
        isJackpot: false
    },
    // 1 premio gordo de 5,000 oro
    {
        id: 10,
        name: "5,000 Oro",
        amount: 5000,
        imageUrl: "https://res.cloudinary.com/pcsolucion/image/upload/v1756532956/coinpile_q2bwi9.png",
        isJackpot: true
    }
];

// ========================================
// INSTRUCCIONES PARA EDITAR PREMIOS DE ORO
// ========================================

/*
SISTEMA DE PREMIOS DE ORO:

1. DISTRIBUCIÓN ACTUAL:
   - 7 premios de 1,000 oro (gem pouch icon)
   - 1 premio de 1,500 oro (gem pouch icon)
   - 1 premio de 2,000 oro (gem pouch icon)
   - 1 premio gordo de 5,000 oro (coin pile icon)

2. CAMBIAR CANTIDADES:
   - Modifica el campo "amount" para cambiar la cantidad de oro
   - Modifica el campo "name" para actualizar el texto mostrado
   - Ejemplo: "amount": 2500, "name": "2,500 Oro"

3. CAMBIAR ICONOS:
   - Gem pouch: https://res.cloudinary.com/pcsolucion/image/upload/v1756533278/gempoucht1_d7u0c0.png
   - Coin pile: https://res.cloudinary.com/pcsolucion/image/upload/v1756532956/coinpile_q2bwi9.png

4. PREMIO GORDO:
   - Marca con "isJackpot": true para efectos especiales
   - Solo debe haber UN premio gordo por juego
   - Usa el icono de coin pile para el premio gordo

5. MEZCLA ALEATORIA:
   - Los premios se mezclan automáticamente en cada juego
   - La distribución se mantiene pero las posiciones cambian

NOTAS IMPORTANTES:
- Mantén exactamente 10 premios
- El premio gordo debe tener el mayor valor
- Los iconos están optimizados para el tamaño de las cartas
*/

// Exportar configuración
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PRIZES_CONFIG };
}
