# ALEPH — Contexto Completo de la Aplicación

> **Documento de Auditoría Funcional**
> Última actualización: Abril 2026
> Propósito: Referencia para la landing page — descripción exhaustiva de qué hace ALEPH, qué puede hacer el usuario, y qué lo diferencia.

---

## 1. ¿Qué es ALEPH?

ALEPH es una **aplicación de escritorio para Windows** que funciona como un **centro de control inteligente para tu sistema de archivos**. No es una colección de herramientas sueltas — es un **motor de automatización** que vigila, procesa, organiza y protege tus archivos en tiempo real, sin enviar jamás datos a la nube.

**En una frase:** ALEPH convierte tu caos digital en orden automático.

### Identidad y Posicionamiento

- **Tipo:** Aplicación de escritorio híbrida (Electron + Python)
- **Plataforma:** Windows (con potencial macOS/Linux a futuro)
- **Modelo:** Freemium (plan gratuito + Pro con Stripe)
- **Filosofía:** Local-First, Privacy-Focused, Automation-Driven
- **Símbolo:** ℵ (Aleph, la primera letra del alfabeto hebreo — representando el inicio, el orden primordial)

---

## 2. Filosofía Central

### 2.1 Automation Engine, no Toolbox

ALEPH no es una app donde el usuario abre una herramienta, la usa y la cierra. Es un **motor que trabaja por ti en segundo plano**. El paradigma fundamental es:

> **Trigger → Condition → Action**

- **Trigger (Disparador):** Un evento que inicia la regla — un archivo nuevo en una carpeta, una modificación, o un disparo manual.
- **Condition (Filtro):** Lógica condicional que determina si la regla aplica — por extensión, nombre, tamaño, fecha, regex.
- **Action (Acción):** La operación que se ejecuta — mover, renombrar, comprimir, convertir, notificar, y mucho más.

**Ejemplo real:** "Cada vez que descargue un PDF, comprimirlo automáticamente y moverlo a `Documentos/Trabajo`."

### 2.2 Local-First & Privacy-Focused

- **100% procesamiento local** — ningún archivo se sube a servidores externos.
- La IA solo se usa como capa de abstracción (traducir lenguaje natural a reglas), nunca como motor de ejecución.
- Los datos del usuario permanecen en su máquina.
- La app funciona completamente offline (**Modo Soberano**) — solo necesita conexión para autenticación y pagos.

### 2.3 Resiliencia Silenciosa

- Los errores de automatización se registran sin interrumpir al usuario.
- Archivos parciales/temporales (`.crdownload`, `.tmp`) son ignorados automáticamente.
- El sistema espera a que los archivos se estabilicen (descarga completa) antes de procesarlos.
- Resolución automática de conflictos de nombres (`archivo (1).pdf`, `archivo (2).pdf`).

---

## 3. Módulos y Funcionalidades

### 3.1 🔄 Motor de Automatización (Autonomous Core)

El corazón de ALEPH. Permite crear **reglas** que se ejecutan automáticamente cuando se cumplen las condiciones.

#### Triggers (Disparadores)
| Trigger | Descripción |
|---------|-------------|
| **Folder Watcher** | Monitorea una carpeta en tiempo real usando `watchdog`. Se dispara cuando se detecta un archivo nuevo o modificado. |
| **Manual** | La regla solo se ejecuta cuando el usuario la dispara manualmente desde la UI. |

#### Conditions (Filtros)
| Condición | Descripción | Ejemplo |
|-----------|-------------|---------|
| `extension_is` | El archivo tiene una extensión específica | `.pdf` |
| `extension_in` | El archivo tiene una de varias extensiones | `.jpg, .png, .webp` |
| `name_contains` | El nombre contiene un texto | `"factura"` |
| `name_starts_with` | El nombre empieza con un texto | `"IMG_"` |
| `name_ends_with` | El nombre (sin extensión) termina con un texto | `"_final"` |
| `name_matches` | El nombre coincide con un patrón regex | `^\d{4}-\d{2}-\d{2}.*` |
| `size_greater_than` | El archivo pesa más de X bytes | `10485760` (10 MB) |
| `size_less_than` | El archivo pesa menos de X bytes | `1024` (1 KB) |
| `created_today` | El archivo fue creado hoy | — |

Las condiciones se pueden **encadenar con AND/OR** para crear filtros complejos.

#### Actions (Acciones Disponibles)
Organizadas en 5 categorías mediante el **Action Registry** (sistema modular y extensible):

**📁 File System**
| Acción | Clave | Descripción |
|--------|-------|-------------|
| Mover a carpeta | `fs.move_to` | Mueve el archivo a una carpeta destino. Auto-resuelve conflictos de nombre. |
| Copiar a carpeta | `fs.copy_to` | Copia el archivo preservando metadatos. |
| Renombrar | `fs.rename` | Cambia el nombre. Preserva extensión si no se especifica. |
| Agregar prefijo | `fs.add_prefix` | Agrega texto al inicio del nombre. |
| Agregar sufijo | `fs.add_suffix` | Agrega texto antes de la extensión. |
| Prefijo con fecha | `fs.add_date_prefix` | Agrega `YYYY-MM-DD_` al inicio del nombre. Formato personalizable. |
| Eliminar archivo | `fs.delete` | Elimina permanentemente. Detiene el pipeline. |
| Mover a Papelera | `fs.move_to_trash` | Envía a la Papelera de Reciclaje (reversible). |
| Organizar por extensión | `fs.organize_by_ext` | Mueve el archivo a una subcarpeta con el nombre de su extensión (`PDF/`, `JPG/`). |

**📄 Documents**
| Acción | Clave | Descripción |
|--------|-------|-------------|
| Comprimir PDF | `documents.compress_pdf` | Reduce el tamaño con 3 niveles de calidad: `web` (72dpi), `balanced` (150dpi), `print` (300dpi). Usa Ghostscript o PyPDF2. |
| Watermark PDF | `documents.watermark_pdf` | Añade marca de agua diagonal a todas las páginas. Configurable: texto, opacidad, posición, tamaño, color. |

**🖼️ Images**
| Acción | Clave | Descripción |
|--------|-------|-------------|
| Comprimir imagen | `images.compress` | Compresión inteligente con control de calidad (1-100). |
| Convertir formato | `images.convert_format` | Convierte entre JPG, PNG, WebP, BMP, TIFF. |
| Redimensionar | `images.resize` | Redimensiona manteniendo proporción con crop inteligente. |
| Watermark imagen | `images.watermark` | Marca de agua de texto con 9 posiciones y opacidad configurable. |

**🔒 Security**
| Acción | Clave | Descripción |
|--------|-------|-------------|
| Eliminar metadatos | `security.strip_metadata` | Elimina EXIF, GPS, autor y datos sensibles de imágenes. |
| Encriptar archivo | `security.encrypt_file` | Crea backup AES-256 encriptado del directorio del archivo. |

**🔔 Notifications**
| Acción | Clave | Descripción |
|--------|-------|-------------|
| Notificación de escritorio | `notify.desktop` | Muestra una notificación toast de Windows. Soporta placeholder `{filename}`. |
| Log a archivo | `notify.log_to_file` | Escribe una entrada en un archivo de log personalizado. |

#### Características del Engine
- **Pipeline chaining:** Las acciones se encadenan — el output de una es el input de la siguiente.
- **Error policies:** `continue` (salta errores) o `stop` (detiene el pipeline en el primer error).
- **Event broadcasting:** Eventos en tiempo real para actualizar la UI (watcher_started, rule_triggered, action_completed, etc.).
- **Execution log:** Historial persistente de las últimas 500 ejecuciones en JSON.
- **File stabilization:** Espera a que los archivos terminen de descargarse antes de procesarlos (3 checks consecutivos de tamaño estable).
- **Debouncing:** Evita procesar el mismo archivo dos veces en 5 segundos.
- **Kill Switch:** Pausar/detener toda la automatización con un solo clic.

---

### 3.2 📂 File Optimizer (Organizador Inteligente)

Una **interfaz visual completa** para explorar, analizar y organizar archivos manualmente o con asistencia inteligente.

#### Funciones del Organizador
- **Explorador de archivos** — Vista de carpeta con detalles (nombre, extensión, tamaño, fecha).
- **Organizar por extensión** — Clasifica automáticamente todos los archivos de una carpeta en subcarpetas: `Images/`, `Documents/`, `Videos/`, `Installers/`, `Archives/`, `Carpetas/`, `Otros/`.
- **Pack files** — Agrupa archivos seleccionados en una carpeta nueva con nombre personalizado.
- **Inspector de archivos** — Panel lateral con información exhaustiva:
  - Hash MD5 y SHA-256
  - Permisos (lectura, escritura, ejecución)
  - Timestamps (creación, modificación)
  - Datos EXIF para imágenes (cámara, apertura, ISO, focal, GPS con link a Google Maps)
  - Metadatos PDF (páginas, autor, título, creador)
  - Categoría MIME y tipo de archivo

#### Búsqueda Inteligente (Smart Search)
- Búsqueda por nombre de archivo (case-insensitive)
- Filtros avanzados:
  - Por extensión
  - Por rango de tamaño (mínimo/máximo)
  - Por cámara (modelo EXIF)
  - Por número de páginas PDF
  - Por rango de fecha de modificación
  - Por categoría de archivo

#### Detección de Duplicados
- Compara archivos por **hash criptográfico** (SHA-256 o MD5)
- **Optimización en 2 pasadas:** primero agrupa por tamaño (rápido), luego calcula hash solo de los candidatos
- Ordena por tamaño × cantidad (mayor ahorro de espacio primero)
- Muestra grupos de duplicados con paths, nombres y tamaños

#### Análisis de Carpetas (Treemap)
- Genera una estructura anidada recursiva del uso de disco
- Configurable por profundidad máxima
- Visualización para treemap en el frontend
- Muestra categoría de cada archivo y tamaño acumulado de carpetas

#### Categorías Dinámicas (Smart Categories)
- **Trabajo reciente:** Archivos modificados en los últimos 7 días
- **Archivos grandes:** Archivos mayores a 100 MB
- **Archivos viejos/sin usar:** No accedidos en más de 90 días
- **Estadísticas por categoría:** Conteo y tamaño total por tipo de archivo

---

### 3.3 📄 Document Studio

Suite completa de procesamiento de documentos PDF.

#### Operaciones PDF
| Función | Descripción |
|---------|-------------|
| **Comprimir** | 3 niveles de calidad. Ghostscript para compresión profesional, fallback a PyPDF2. Muestra porcentaje de reducción. |
| **Merge (Unir)** | Combina múltiples PDFs en uno solo. Mantiene el orden de la lista. |
| **Split (Dividir)** | Divide un PDF en archivos individuales por página o por chunks de N páginas. |
| **Rotar páginas** | Rotación selectiva por página o todas las páginas. Ángulos: 90°, 180°, 270°. |
| **Reordenar páginas** | Reorganiza las páginas en cualquier orden deseado mediante una lista de índices. |
| **Watermark (Marca de agua)** | Texto diagonal en todas las páginas. Configurable: texto, opacidad, posición (detrás/delante), tamaño de fuente, color (gris/rojo/azul). |
| **Thumbnails** | Genera miniaturas de las páginas del PDF para previsualización visual. Usa PyMuPDF, fallback a pdf2image, y luego placeholders. |

---

### 3.4 🖼️ Image Studio

Suite completa de procesamiento de imágenes con operaciones batch.

#### Operaciones de Imagen
| Función | Descripción |
|---------|-------------|
| **Conversión batch** | Convierte entre JPG, PNG, WebP, BMP, TIFF. También PDF→Imagen (cada página a imagen individual a 300 DPI). Multithreaded (8 workers). |
| **Auto-Enhance** | Mejora automática: +15% contraste, +20% nitidez, +10% saturación. Normalización automática de balance de blancos para imágenes oscuras o sobreexpuestas. |
| **Smart Compress** | Compresión JPEG con calidad configurable. Muestra reducción en % y bytes ahorrados por archivo. |
| **Watermark** | Marca de agua de texto con 9 posiciones, opacidad configurable, tamaño de fuente relativo al tamaño de la imagen. |
| **Resize for Social** | Redimensiona con crop inteligente para mantener aspect ratio del formato objetivo. Perfecto para preparar imágenes para redes sociales. |
| **Remove Background** | Eliminación de fondo con IA usando `rembg`. Output PNG con transparencia. |
| **Metadata & Histogram** | Extrae dimensiones, formato, modo de color, datos EXIF, y genera histograma RGB completo. |

---

### 3.5 🔐 Security Center

Módulo de seguridad integral con 3 sub-módulos.

#### 3.5.1 Backup & Recovery
| Función | Descripción |
|---------|-------------|
| **Backup encriptado** | Crea un ZIP con cifrado **AES-256** usando `pyzipper`. Password personalizable. Si `pyzipper` no está disponible, crea ZIP estándar con advertencia. |
| **Backup incremental** | Solo respalda archivos modificados desde el último backup. Genera un manifiesto JSON para comparar en futuras ejecuciones. Óptimo para folders grandes. |
| **Restaurar backup** | Extrae un backup completo o encriptado a una carpeta destino. |

#### 3.5.2 Privacy Vault
| Función | Descripción |
|---------|-------------|
| **Escaneo de metadatos** | Analiza un archivo y muestra todos los metadatos presentes: cámara, software, fecha, GPS. Detecta si hay información sensible antes de Strip. |
| **Strip Metadata** | Elimina completamente todos los metadatos EXIF, GPS, autor de JPG, PNG, TIFF. Crea archivos limpios. |
| **Secure Shred** | Eliminación segura inspirada en **DoD 5220.22-M**: sobreescritura múltiple con datos random, complemento y random. Renombrado a nombre random antes de eliminar. Configurable en número de pasadas (default: 3). |

#### 3.5.3 System Audit
| Función | Descripción |
|---------|-------------|
| **Hash Calculator** | Calcula hash SHA-256, SHA-512 o MD5 de cualquier archivo. Para verificar integridad o autenticidad. |
| **Integrity Manifest** | Genera un archivo `.axis-integrity.json` con SHA-256 de cada archivo en una carpeta. Sirve como "snapshot" del estado de integridad. |
| **Verificación de integridad** | Compara el estado actual contra un manifiesto previo. Detecta archivos: verificados ✓, modificados ⚠, eliminados ✗, y nuevos 🆕. |
| **Scanner de archivos grandes** | Escanea una carpeta buscando archivos por encima de un umbral (default: 100 MB). También detecta archivos ocultos (Windows y Unix-style). |
| **Security Health Score** | Puntuación de salud de seguridad (0-100) con calificación A/B/C/D basada en: frecuencia de backups, integridad verificada, y estado del módulo. |

#### 3.5.4 Cloud Mirroring (Futuro)
- Hooks preparados para **AWS S3** y **Google Drive**
- Pendiente de implementación de autenticación

---

### 3.6 📊 Dashboard

Panel principal con métricas holísticas del sistema en tiempo real.

| Métrica | Fuente |
|---------|--------|
| **Almacenamiento** | Disco primario: total, usado, libre, porcentaje (stdlib + fallbacks para Windows) |
| **Memoria RAM** | Total, usada, disponible, porcentaje (psutil o ctypes fallback) |
| **Info del sistema** | OS, máquina, hostname, versión de Python, CPU count |
| **Automatización** | Reglas activas/totales, espacio ahorrado, archivos procesados, éxitos/fallos |
| **Security Score** | Puntuación de salud de seguridad |
| **Segmentación** | Breakdown de archivos procesados por tipo de acción |
| **Actividad reciente** | Feed de las últimas acciones ejecutadas con timestamp |

El dashboard implementa un **cache de 30 segundos** (TTL) para evitar queries excesivos.

---

### 3.7 🔍 OCR & Deep Search Engine

Motor de indexación y búsqueda dentro del contenido de archivos.

| Función | Descripción |
|---------|-------------|
| **OCR de imágenes** | Extrae texto de JPG, PNG, BMP, TIFF, WebP usando **Tesseract** (español + inglés). |
| **Extracción de texto PDF** | Usa **PyMuPDF** para texto nativo. Para páginas escaneadas, renderiza a imagen y aplica OCR. |
| **Indexación de archivos** | Crea un índice JSON local (`metadata_index.json`) con el contenido textual de cada archivo, hash SHA-256, y metadatos. |
| **Indexación de carpeta** | Indexa todos los archivos soportados en una carpeta (recursivo opcional). |
| **Deep Search** | Busca dentro del contenido indexado (no solo por nombre). Devuelve contexto alrededor del match (±50 caracteres). |
| **Auto-indexación** | Los archivos nuevos detectados por el Watcher se indexan automáticamente si son PDF o imagen. |

---

### 3.8 🏷️ AI Tagging (Etiquetado Inteligente)

Sistema de clasificación automática de archivos basado en contenido.

| Función | Descripción |
|---------|-------------|
| **Etiquetado por extensión** | Clasifica como Document, Image, Video, Archive. |
| **Etiquetado por keywords** | Analiza nombre de archivo y contenido buscando keywords de 8 categorías: Invoice, Contract, Report, Design, Code, Personal, Work, Financial. |
| **Etiquetado OCR** | Para imágenes: aplica OCR y busca keywords en el texto extraído. 2+ coincidencias = tag. |
| **Tags manuales** | El usuario puede agregar/eliminar tags personalizados. |
| **Tags sugeridos** | Sugiere tags basados en patrones del nombre (ej: si contiene 4 dígitos seguidos → "Dated"). |
| **Cache** | Los tags se mantienen en memoria para acceso rápido. |

---

### 3.9 ⌨️ Command Palette & System Tray

#### Command Palette (Spotlight-like)
- Accesible con **hotkey global** (ej: `Ctrl+Shift+Space`)
- Funciona como ventana standalone transparente (aparece como overlay del sistema)
- Búsqueda rápida de comandos, navegación entre vistas
- Ejecución directa de acciones del sistema
- Se cierra con `Escape` o al perder foco

#### System Tray
- ALEPH vive en la **bandeja del sistema** como un icono persistente
- **Popup de bandeja** con acciones rápidas:
  - Quick Organize (organizar archivos rápidamente)
  - Pausar/reanudar automatización
  - Ver estado del watcher
- Deep links para navegar directamente a vistas específicas
- Actualización de estado de automatización en tiempo real

---

### 3.10 ⚙️ Settings (Configuración)

Panel de configuración completo:

| Sección | Opciones |
|---------|----------|
| **Perfil** | Información de cuenta, avatar, plan de suscripción |
| **Apariencia** | Tema (claro/oscuro/sistema), idioma (ES/EN/DE) |
| **Auto-launch** | Iniciar ALEPH con Windows |
| **Stealth Mode** | Ocultar la ventana al minimizar (solo tray) |
| **Suscripción** | Gestión de plan Pro, portal de billing Stripe |
| **Export Logs** | Exportar logs de diagnóstico |

---

### 3.11 🔑 Authentication & Monetización

#### Autenticación
- **Supabase Auth** como proveedor
- OAuth deep-link flow (abre navegador externo para auth)
- Sesión persistida en la app
- Auth splash screen mientras se verifica sesión
- Gate de autenticación: app completa solo accesible tras login

#### Monetización
- **Freemium model:**
  - **Free:** Funcionalidades base con límites (ej: 3 GB máximo en organizador)
  - **Pro:** Sin límites, features premium
- **Stripe Integration:**
  - Checkout Sessions para upgrade
  - Customer Portal para gestión de suscripción
  - Webhooks para confirmación de pago
  - Modal de celebración post-upgrade
  - Banners de renovación y expiración

---

### 3.12 🌐 Internacionalización (i18n)

- Soporte para **3 idiomas:** Español, English, Deutsch
- Implementado con `i18next`
- Traducciones completas de toda la UI

---

### 3.13 🛡️ Seguridad de la API Local

- **API Token** interno: cada request del frontend al backend Python incluye un header `X-Aleph-Token`
- El token se genera en el proceso principal de Electron y se comparte via IPC
- Previene que otros procesos locales accedan a la API de ALEPH

---

### 3.14 💾 Base de Datos

- **SQLite** como motor de datos (WAL mode, foreign keys)
- Auto-migración desde `rules.json` legacy
- Tablas:
  - `rules` — Almacena las reglas de automatización con trigger/conditions/actions en JSON
  - `stats` — Registra cada ejecución con: tipo de acción, archivo, regla, estado, bytes antes/después, duración
- Índices optimizados para queries del dashboard

---

### 3.15 🔌 Conectividad (Offline Guard)

- **Modo Soberano (Offline):** La app detecta automáticamente si hay conexión a internet
- Check ultraligero via TCP socket a Google DNS (8.8.8.8:53)
- Decorator `@require_online` para funciones que necesitan red
- Cache de estado de conectividad
- Funciones que requieren red (auth, pagos) fallan gracefully con mensaje informativo

---

## 4. Arquitectura Técnica (Resumen No-Técnico)

| Capa | Tecnología | Rol |
|------|-----------|-----|
| **Interfaz** | React + Tailwind + Framer Motion | La cara bonita — lo que el usuario ve y toca |
| **Contenedor** | Electron | Hace que sea una app de escritorio instalable |
| **Cerebro** | Python (FastAPI) | Procesa archivos, ejecuta reglas, OCR, seguridad |
| **Comunicación** | HTTP localhost + IPC | El frontend habla con Python, y Python responde |
| **Datos** | SQLite + JSON | Almacena reglas, estadísticas y configuración |
| **Auth & Payments** | Supabase + Stripe | Login y suscripciones |

---

## 5. Interfaz de Usuario — Vistas Principales

| Vista | Archivo | Descripción |
|-------|---------|-------------|
| **Dashboard** | `Dashboard.jsx` | Panel principal con métricas, actividad, widgets |
| **Automations** | `Automation.jsx` | Gestión de reglas: crear, editar, activar/desactivar, onboarding con templates |
| **Pipeline Builder** | `PipelineBuilder.jsx` | Constructor visual de pipelines Trigger→Condition→Action |
| **File Optimizer** | `Optimizer.jsx` | Explorador + organizador + inspector + búsqueda + duplicados |
| **Documents** | `Documents.jsx` | Suite PDF: merge, split, compress, rotate, reorder, watermark |
| **Converter** | `Converter.jsx` | Conversión batch de formatos de imagen/PDF |
| **Security** | `Security.jsx` | Centro de seguridad: backup, privacy vault, audit |
| **Backup** | `Backup.jsx` | Interfaz dedicada de backup con progreso y recuperación |
| **Settings** | `Settings.jsx` | Configuración, perfil, suscripción, apariencia |
| **Auth Portal** | `AuthPortal.jsx` | Pantalla de login/registro |
| **Command Palette** | `CommandPalette.jsx` | Palette de comandos (overlay en ventana principal) |
| **Standalone Palette** | `StandalonePalette.jsx` | Palette en ventana independiente (accesible desde hotkey global) |
| **Tray Popup** | `TrayPopup.jsx` | Mini panel desde el system tray |

---

## 6. Flujos de Uso Principales

### 🔄 Flujo 1: Automatización de Downloads
1. El usuario crea una regla: "Cuando aparezca un PDF en Downloads → Comprimir → Mover a Documentos/Trabajo"
2. ALEPH activa un watcher en la carpeta `Downloads`
3. El usuario descarga un PDF desde el navegador
4. ALEPH detecta el archivo nuevo, espera a que se estabilice
5. Verifica las condiciones (extensión = .pdf ✓)
6. Ejecuta el pipeline: Comprimir PDF → Mover a destino
7. Envía notificación toast de Windows
8. Registra la ejecución en el log y estadísticas

### 📁 Flujo 2: Limpieza de Carpeta
1. El usuario abre el File Optimizer y selecciona una carpeta
2. Ve los archivos con el explorador integrado
3. Ejecuta "Encontrar Duplicados" → ALEPH escanea por hash SHA-256
4. Revisa los grupos de duplicados y elimina los sobrantes
5. Ejecuta "Organizar por Extensión" → archivos se clasifican en subcarpetas
6. Revisa el treemap para ver el uso de espacio visual

### 🔐 Flujo 3: Protección de Privacidad
1. El usuario tiene fotos con datos GPS embebidos
2. Abre el Privacy Vault y arrastra las fotos
3. Escanea metadatos → ve que tienen GPS, cámara, fecha
4. Ejecuta Strip Metadata → se crean copias limpias sin EXIF
5. Opcional: ejecuta Secure Shred en los originales (DoD 5220.22-M)

### 📄 Flujo 4: Procesamiento de PDFs
1. El usuario tiene 10 PDFs que necesita combinar
2. Abre Document Studio y los arrastra al área de merge
3. Reordena los PDFs en el orden deseado
4. Ejecuta Merge → obtiene un PDF combinado
5. Le aplica una marca de agua "CONFIDENCIAL"
6. Lo comprime en calidad "web" para enviar por email

---

## 7. Diferenciadores Clave

| Característica | ALEPH | Herramientas comunes |
|---------------|-------|---------------------|
| **Procesamiento** | 100% local, nunca sube archivos | Muchas requieren upload a servidores |
| **Automatización** | Reglas inteligentes que trabajan solas 24/7 | Herramientas manuales, un uso a la vez |
| **Pipeline** | Acciones encadenadas (comprimir → mover → notificar) | Una operación a la vez |
| **Extensibilidad** | Action Registry modular — agregar nuevas acciones es plug-and-play | Funcionalidad fija |
| **Seguridad** | AES-256, DoD Shred, integrity manifests | Básico o inexistente |
| **OCR integrado** | Busca dentro del contenido de imágenes y PDFs escaneados | Solo búsqueda por nombre |
| **System Tray** | Siempre disponible, un clic para organizar | Hay que abrir la app completa |
| **Offline** | Funciona sin internet (Modo Soberano) | Requieren conexión |

---

## 8. Métricas que Puede Mostrar al Usuario

- **Archivos procesados** totales (lifetime)
- **Espacio ahorrado** en MB (por compresión y deduplicación)
- **Reglas activas** vs totales
- **Tasa de éxito** de automatizaciones
- **Almacenamiento** del disco: total/usado/libre
- **RAM** del sistema: total/usada/libre
- **Security Health Score** (0-100, grado A-D)
- **Actividad reciente** con timestamps
- **Breakdown por tipo de acción** (cuántas veces se usó cada módulo)

---

## 9. Glosario de Términos de la App

| Término | Significado |
|---------|-------------|
| **Rule** | Una regla de automatización completa (trigger + conditions + actions) |
| **Trigger** | El evento que dispara una regla |
| **Condition** | Un filtro que el archivo debe cumplir |
| **Action** | Una operación atómica sobre un archivo |
| **Pipeline** | La cadena de acciones de una regla |
| **Watcher** | El monitor de carpetas en tiempo real |
| **Kill Switch** | Botón para detener toda la automatización |
| **Action Registry** | Catálogo central de todas las acciones disponibles |
| **Sovereign Mode** | Modo offline — la app funciona sin internet |
| **Privacy Vault** | Módulo de protección de privacidad (strip metadata, shred) |
| **Integrity Manifest** | Snapshot criptográfico del estado de una carpeta |
| **Deep Search** | Búsqueda dentro del contenido de archivos (OCR) |
| **Smart Categories** | Clasificación dinámica: recientes, grandes, sin usar |
| **Treemap** | Visualización del uso de disco por carpeta |

---

## 10. Datos Técnicos para la Landing

### Formatos Soportados

**Imágenes:** PNG, JPG, JPEG, GIF, BMP, WebP, TIFF, ICO, SVG
**Videos:** MP4, MOV, AVI, MKV, WebM, FLV, WMV
**Documentos:** PDF, XLSX, DOCX, TXT, PPTX, DOC, XLS, CSV, RTF
**Instaladores:** EXE, MSI, DMG, PKG, DEB, RPM
**Archivos comprimidos:** ZIP, RAR, 7Z, TAR, GZ, BZ2
**Código:** PY, JS, JSX, TS, TSX, HTML, CSS, Java, C++, C, H

### Números Concretos
- **20+ acciones** disponibles en el Action Registry
- **9 tipos de condiciones** para filtrar archivos
- **3 niveles de compresión** PDF (web/balanced/print)
- **8 threads** para conversión batch de imágenes
- **3 idiomas** soportados (ES, EN, DE)
- **500 entradas** de log de ejecución persistidas
- **3 algoritmos de hash** (MD5, SHA-256, SHA-512)
- **3 pasadas** de secure shred (inspirado en DoD 5220.22-M)
- **AES-256** para encriptación de backups
- **Cache de 30s** en el dashboard para rendimiento
- **OCR bilingüe** (español + inglés)
