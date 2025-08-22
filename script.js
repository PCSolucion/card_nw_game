// La configuración se carga desde config.js y prizes.js

// Inicialización del juego
console.log('Memory Card Game iniciado');

// Estado del juego
let gameState = {
    isGameActive: false,
    flippedCards: new Set(),
    currentPrizes: [], // Array mezclado de premios
    gameId: null // ID único para identificar la sesión actual
};

// Verificar elementos del DOM
function checkDOMElements() {
    const elements = {
        cardsGrid: document.getElementById('cardsGrid'),
        currentUser: document.getElementById('currentUser'),
        prizeInfo: document.getElementById('prizeInfo'),
        restartButton: document.getElementById('restartButton'),
        statusIndicator: document.getElementById('statusIndicator'),
        statusText: document.getElementById('statusText')
    };
    
    return elements;
}

// Elementos del DOM
const domElements = checkDOMElements();
const cardsGrid = domElements.cardsGrid;
const currentUserElement = domElements.currentUser;
const prizeInfoElement = domElements.prizeInfo;
const restartButton = domElements.restartButton;
const statusIndicator = domElements.statusIndicator;
const statusText = domElements.statusText;

// Inicialización del juego
function initGame() {
    // Verificar que los elementos del DOM estén disponibles
    if (!cardsGrid || !currentUserElement || !prizeInfoElement || !restartButton) {
        console.error('Error: Elementos del DOM no encontrados');
        checkDOMElements();
        return;
    }
    
    // Intentar cargar estado guardado
    const savedState = loadGameState();
    
    if (savedState) {
        // Restaurar estado guardado
        gameState = savedState;
        createCards();
        updateInfoPanel();
        setupEventListeners();
    } else {
        // Iniciar nuevo juego
        shufflePrizes();
        createCards();
        startGame();
        setupEventListeners();
    }
    
    // Inicializar conexión con Twitch
    initTwitchConnection();
}

// Mezclar los premios aleatoriamente
function shufflePrizes() {
    gameState.currentPrizes = [...PRIZES_CONFIG];
    
    for (let i = gameState.currentPrizes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [gameState.currentPrizes[i], gameState.currentPrizes[j]] = 
        [gameState.currentPrizes[j], gameState.currentPrizes[i]];
    }
}

// Crear las cartas
function createCards() {
    cardsGrid.innerHTML = '';
    
    const optimizedBackgroundImages = createOptimizedBackgroundArray();
    
    for (let i = 0; i < GAME_CONFIG.totalCards; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.index = i;
        
        const prize = gameState.currentPrizes[i];
        
        card.style.backgroundImage = `url(${optimizedBackgroundImages[i]})`;
        
        card.innerHTML = `
            <div class="card-number">${i + 1}</div>
            <div class="card-content">
                <img src="${prize.imageUrl}" alt="${prize.name}" class="card-prize-image" onerror="this.style.display='none'">
                <div class="card-prize-name">${prize.emoji} ${prize.name}</div>
            </div>
        `;
        
        if (gameState.flippedCards.has(i)) {
            card.classList.add('flipped');
        }
        
        card.addEventListener('click', () => handleCardClick(i));
        
        cardsGrid.appendChild(card);
    }
}

// Crear array optimizado de imágenes de fondo
function createOptimizedBackgroundArray() {
    const backgroundArray = [...CARD_BACKGROUND_IMAGES];
    return shuffleArray(backgroundArray);
}

// Función para mezclar array (Fisher-Yates)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Manejar clic en carta
function handleCardClick(cardIndex) {
    if (!gameState.isGameActive) return;
    
    if (gameState.flippedCards.has(cardIndex)) {
        return;
    }
    
    flipCard(cardIndex);
}

// Iniciar el juego
function startGame() {
    gameState.isGameActive = true;
    gameState.flippedCards.clear();
    gameState.gameId = generateGameId();
    
    saveGameState();
    updateInfoPanel();
}

// Voltear una carta
function flipCard(cardIndex) {
    const card = document.querySelector(`[data-index="${cardIndex}"]`);
    if (!card) return;
    
    gameState.flippedCards.add(cardIndex);
    saveGameState();
    card.classList.add('flipped');
    
    const prize = gameState.currentPrizes[cardIndex];
    showCardInfo(cardIndex + 1, prize);
    
    if (gameState.flippedCards.size === GAME_CONFIG.totalCards) {
        endGame();
        setTimeout(() => {
            sendChatMessage('🎉 ¡Juego terminado! Todas las cartas fueron reveladas');
        }, 1000);
    }
}

// Mostrar información de la carta volteada
function showCardInfo(cardNumber, prize) {
    currentUserElement.textContent = `🎯 Carta ${cardNumber}`;
    prizeInfoElement.textContent = `🎁 ${prize.emoji} ${prize.name}`;
    
    setTimeout(() => {
        currentUserElement.textContent = '';
        prizeInfoElement.textContent = '';
    }, GAME_CONFIG.cardInfoDisplayTime * 1000);
}

// Actualizar panel de información
function updateInfoPanel() {
    const flippedCount = gameState.flippedCards.size;
    const totalCards = GAME_CONFIG.totalCards;
    
    if (flippedCount > 0) {
        currentUserElement.textContent = `📊 ${flippedCount}/${totalCards} cartas reveladas`;
    } else {
        currentUserElement.textContent = '';
    }
}

// Finalizar el juego
function endGame() {
    gameState.isGameActive = false;
    showGameSummary();
}

// Mostrar resumen del juego
function showGameSummary() {
    currentUserElement.textContent = TEXT_CONFIG.gameEndMessage;
    prizeInfoElement.textContent = `📊 ${gameState.flippedCards.size}/${GAME_CONFIG.totalCards} ${TEXT_CONFIG.cardsFlippedMessage}`;
}

// Reiniciar el juego
function restartGame() {
    shufflePrizes();
    gameState.flippedCards.clear();
    gameState.isGameActive = false;
    clearGameState();
    createCards();
    
    currentUserElement.textContent = '';
    prizeInfoElement.textContent = '';
    
    startGame();
    
    sendChatMessage('🔄 ¡Juego reiniciado! Haz clic en las cartas para voltearlas');
    
    setTimeout(() => {
        sendChatMessage('🎮 ¡Nuevo juego iniciado! Haz clic en las cartas para participar');
    }, 2000);
}

// Configurar event listeners
function setupEventListeners() {
    restartButton.addEventListener('click', restartGame);
}

// ========================================
// FUNCIONES DE PERSISTENCIA
// ========================================

// Generar ID único para el juego
function generateGameId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Guardar estado del juego en localStorage
function saveGameState() {
    try {
        const stateToSave = {
            ...gameState,
            flippedCards: Array.from(gameState.flippedCards)
        };
        localStorage.setItem('memoryCardGameState', JSON.stringify(stateToSave));
    } catch (error) {
        console.warn('No se pudo guardar el estado del juego:', error);
    }
}

// Cargar estado del juego desde localStorage
function loadGameState() {
    try {
        const savedState = localStorage.getItem('memoryCardGameState');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            parsedState.flippedCards = new Set(parsedState.flippedCards);
            return parsedState;
        }
    } catch (error) {
        console.warn('No se pudo cargar el estado del juego:', error);
    }
    return null;
}

// Limpiar estado guardado
function clearGameState() {
    try {
        localStorage.removeItem('memoryCardGameState');
    } catch (error) {
        console.warn('No se pudo limpiar el estado del juego:', error);
    }
}

// ========================================
// INTEGRACIÓN CON TWITCH
// ========================================

// La configuración de Twitch se carga desde twitch-config.js

// Estado de la conexión de Twitch
let twitchState = {
    isConnected: false,
    socket: null,
    reconnectAttempts: 0,
    maxReconnectAttempts: 5
};

// Inicializar conexión con Twitch
function initTwitchConnection() {
    updateTwitchStatus('connecting', 'Conectando a Twitch...');
    
    // Verificar si las credenciales están configuradas
    if (TWITCH_CONFIG.clientId === 'tu_client_id_aqui' || TWITCH_CONFIG.oauthToken === 'tu_oauth_token_aqui') {
        console.log('Advertencia: Credenciales de Twitch no configuradas');
        updateTwitchStatus('error', 'Credenciales no configuradas');
        return;
    }
    
    // Crear WebSocket para conectarse al chat de Twitch
    const ws = new WebSocket('wss://irc-ws.chat.twitch.tv:443');
    
    ws.onopen = function() {
        twitchState.isConnected = true;
        twitchState.reconnectAttempts = 0;
        updateTwitchStatus('connected', 'Conectado a Twitch');
        
        // Autenticarse con Twitch
        ws.send('PASS oauth:' + TWITCH_CONFIG.oauthToken);
        ws.send('NICK ' + TWITCH_CONFIG.channel);
        ws.send('JOIN #' + TWITCH_CONFIG.channel);
        
        // Enviar mensaje al chat
        sendChatMessage('🎮 ¡Juego de cartas iniciado! Haz clic en las cartas para voltearlas');
    };
    
    ws.onmessage = function(event) {
        const message = event.data;
        
        // Manejar ping/pong para mantener la conexión
        if (message.includes('PING')) {
            ws.send('PONG :tmi.twitch.tv');
            return;
        }
        
        // Los mensajes del chat ya no se procesan para comandos de cartas
        // Solo se mantiene la conexión para el estado visual
    };
    
    ws.onclose = function() {
        twitchState.isConnected = false;
        updateTwitchStatus('error', 'Conexión perdida');
        
        // Intentar reconectar
        if (twitchState.reconnectAttempts < twitchState.maxReconnectAttempts) {
            twitchState.reconnectAttempts++;
            updateTwitchStatus('connecting', `Reconectando... (${twitchState.reconnectAttempts}/${twitchState.maxReconnectAttempts})`);
            setTimeout(initTwitchConnection, 5000);
        } else {
            updateTwitchStatus('error', 'Error de conexión');
        }
    };
    
    ws.onerror = function(error) {
        console.error('Error en la conexión de Twitch:', error);
        updateTwitchStatus('error', 'Error de conexión');
    };
    
    twitchState.socket = ws;
}



// Los mensajes del chat ya no se procesan para comandos de cartas
// Solo se mantiene la conexión para el estado visual

// Los comandos de Twitch para voltear cartas ya no están disponibles
// Solo se pueden voltear las cartas haciendo clic en ellas

// Función para enviar mensaje al chat
function sendChatMessage(message) {
    if (twitchState.isConnected && twitchState.socket && twitchState.socket.readyState === WebSocket.OPEN) {
        try {
            twitchState.socket.send(`PRIVMSG #${TWITCH_CONFIG.channel} :${message}`);
        } catch (error) {
            console.error('Error enviando mensaje al chat:', error);
        }
    }
}

// Función para actualizar el estado visual de Twitch
function updateTwitchStatus(status, message) {
    if (statusIndicator && statusText) {
        statusIndicator.classList.remove('connected', 'connecting', 'error');
        statusIndicator.classList.add(status);
        statusText.textContent = message;
    }
}

// Función para desconectar de Twitch
function disconnectTwitch() {
    if (twitchState.socket) {
        twitchState.socket.close();
        twitchState.isConnected = false;
        updateTwitchStatus('error', 'Desconectado');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', initGame);

// Las cartas solo se pueden voltear haciendo clic en ellas

// Exportar funciones para uso externo
window.MemoryCardGame = {
    startGame,
    endGame,
    restartGame,
    getGameState: () => gameState,
    getPrizes: () => gameState.currentPrizes,
    saveGameState,
    loadGameState,
    clearGameState,
    // Funciones de Twitch (solo para estado visual)
    initTwitchConnection,
    disconnectTwitch,
    sendChatMessage,
    getTwitchState: () => twitchState
};
