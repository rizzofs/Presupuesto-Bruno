# Presupuesto Remises Bruno - PWA

Aplicación web progresiva (PWA) para generar presupuestos de servicios de remises.

## Características

### 📱 Progressive Web App (PWA)
- **Instalable**: Se puede instalar como una aplicación nativa
- **Offline**: Funciona sin conexión a internet
- **Responsive**: Optimizada para móviles y tablets
- **Actualizaciones automáticas**: Se actualiza automáticamente

### 📄 Generación de PDF
- **Generación básica**: Función de imprimir vista previa
- **Optimizada para impresión**: Estilos específicos para impresión

### 🎨 Interfaz
- **Wizard de 4 pasos**: Formulario guiado
- **Vista previa**: Antes de generar el PDF
- **Diseño responsive**: Funciona en todos los dispositivos

## Instalación

### Para usuarios:
1. Abre la aplicación en Chrome/Edge
2. Aparecerá un botón "📱 Instalar App" en la parte superior
3. Haz clic en "Instalar"
4. La app se instalará en tu dispositivo

### Para desarrolladores:
1. Clona el repositorio
2. Abre `index.html` en un servidor web (no funciona con `file://`)
3. La PWA se registrará automáticamente

## Archivos principales

- `index.html` - Aplicación principal
- `manifest.json` - Configuración de la PWA
- `sw.js` - Service Worker para funcionalidad offline
- `Logo.jpg` - Icono de la aplicación

## Funcionalidades técnicas

### Service Worker
- Cachea recursos estáticos
- Funciona offline
- Actualizaciones automáticas

### Manifest
- Configuración de la app
- Iconos y colores
- Comportamiento de instalación

### PDF Generation
- **Impresión**: Función de imprimir vista previa
- **Estilos optimizados**: Para impresión directa

## Compatibilidad

- ✅ Chrome/Edge (Android/Desktop)
- ✅ Safari (iOS/macOS)
- ✅ Firefox (Desktop)
- ⚠️ Firefox (Android) - Limitado

## Notas de desarrollo

La aplicación está optimizada para funcionar como PWA con:
- Service Worker para cache y offline
- Manifest para instalación
- API de compartir para PDFs
- Indicadores de estado online/offline