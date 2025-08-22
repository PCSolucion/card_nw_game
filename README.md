# 🎮 Memory Card Game con Integración de Twitch

Un juego de cartas interactivo que se conecta con el chat de Twitch del canal @liiukiin. Los espectadores pueden voltear cartas escribiendo comandos en el chat.

## 🎯 Características

- **10 cartas interactivas** con premios únicos
- **Integración completa con Twitch** - Los espectadores controlan el juego
- **Comandos de chat** - `!carta 1` hasta `!carta 10`
- **Interfaz moderna** con animaciones suaves
- **Persistencia de estado** - El juego se guarda automáticamente
- **Reconexión automática** si se pierde la conexión con Twitch

## 🚀 Cómo Jugar

### Para los Espectadores:
1. Ve al canal de Twitch @liiukiin
2. Escribe en el chat: `!carta 1` para voltear la carta 1
3. Escribe `!carta 2` para voltear la carta 2
4. Y así sucesivamente hasta `!carta 10`
5. ¡Descubre todos los premios ocultos!

### Para el Streamer:
1. Configura las credenciales de Twitch (ver instrucciones abajo)
2. Abre el juego en tu navegador
3. El bot se conectará automáticamente al chat
4. Usa el botón "REINICIAR" para mezclar los premios

## ⚙️ Configuración de Twitch

### Paso 1: Crear Aplicación en Twitch Developer Console
1. Ve a [https://dev.twitch.tv/console](https://dev.twitch.tv/console)
2. Inicia sesión con tu cuenta de Twitch
3. Haz clic en "Register Your Application"
4. Completa el formulario:
   - **Name**: "Memory Card Game Bot"
   - **OAuth Redirect URLs**: `http://localhost`
   - **Category**: Application Integration
5. Haz clic en "Create"
6. Copia el **Client ID**

### Paso 2: Obtener OAuth Token
1. Ve a [https://twitchapps.com/tmi/](https://twitchapps.com/tmi/)
2. Haz clic en "Connect with Twitch"
3. Autoriza la aplicación
4. Copia el token que aparece (comienza con `oauth:`)

### Paso 3: Configurar el Juego
1. Abre el archivo `twitch-config.js`
2. Reemplaza `tu_client_id_aqui` con tu Client ID
3. Reemplaza `tu_oauth_token_aqui` con tu OAuth Token
4. Verifica que el canal sea correcto (`liiukiin`)

### Paso 4: Probar la Conexión
1. Abre `index.html` en tu navegador
2. Abre la consola del navegador (F12)
3. Deberías ver: "✅ Conectado a Twitch IRC"
4. Escribe en el chat: `!carta 1`
5. La carta 1 debería voltearse automáticamente

## 📁 Estructura de Archivos

```
Card game/
├── index.html          # Página principal del juego
├── script.js           # Lógica del juego y integración con Twitch
├── config.js           # Configuración general del juego
├── prizes.js           # Lista de premios y sus imágenes
├── twitch-config.js    # Configuración de Twitch (credenciales)
├── styles.css          # Estilos y animaciones
└── README.md           # Este archivo
```

## 🎁 Comandos Disponibles

| Comando | Acción |
|---------|--------|
| `!carta 1` | Voltea la carta 1 |
| `!carta 2` | Voltea la carta 2 |
| `!carta 3` | Voltea la carta 3 |
| ... | ... |
| `!carta 10` | Voltea la carta 10 |

## 🔧 Personalización

### Cambiar Premios:
1. Edita `prizes.js`
2. Modifica el array `PRIZES_CONFIG`
3. Cambia nombre, imagen y emoji de cada premio

### Cambiar Número de Cartas:
1. Edita `config.js`
2. Modifica `GAME_CONFIG.totalCards`
3. Actualiza `twitch-config.js` con el nuevo número máximo

### Cambiar Canal de Twitch:
1. Edita `twitch-config.js`
2. Cambia el valor de `channel`

## 🛠️ Solución de Problemas

### El bot no se conecta:
- Verifica que las credenciales sean correctas
- Asegúrate de que el canal exista y esté en vivo
- Revisa la consola del navegador para errores

### Los comandos no funcionan:
- Verifica que el juego esté activo
- Asegúrate de que las cartas no hayan sido volteadas
- Revisa que el formato del comando sea correcto

### Error de CORS:
- Ejecuta el juego desde un servidor web local
- Usa `python -m http.server` o similar

## 📝 Notas Importantes

- **Seguridad**: Nunca compartas tus credenciales de Twitch
- **Límites**: El bot respeta los límites de rate de Twitch
- **Reconexión**: Se reconecta automáticamente si pierde la conexión
- **Estado**: El progreso del juego se guarda automáticamente

## 🤝 Contribuir

Si quieres mejorar el juego:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Haz commit de tus cambios
4. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto. ¡Siéntete libre de usarlo y modificarlo!

---

**¡Disfruta jugando con tu comunidad de Twitch! 🎮✨**
