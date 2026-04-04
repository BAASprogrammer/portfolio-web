# 🚀 Portafolio Profesional | Bárbara Arias (BAASprogrammer)

¡Bienvenido a mi portafolio! Este es un proyecto de vanguardia diseñado para presentar mi trayectoria, habilidades y proyectos de una manera moderna, rápida y visualmente impactante.

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?logo=vercel&logoColor=white)](https://vercel.com/)

---

## ✨ Características Principales

- **Diseño Premium & Moderno**: Estética basada en *Glassmorphism* con una paleta de colores vibrantes (fucsia, índigo, cian) sobre un fondo oscuro profundo y elegante.
- **Arquitectura Robusta**: Desarrollado con **React 19** y **TypeScript**, garantizando un código mantenible, escalable y libre de errores en tiempo de ejecución.
- **Performance de Élite**: Impulsado por **Vite 7**, ofreciendo una experiencia del lado del usuario instantánea y un flujo de desarrollo extremadamente ágil.
- **Estilos de Nueva Generación**: Implementado con **Tailwind CSS v4** y **PostCSS 8**, aprovechando las mejores prácticas de diseño atómico y utilidades modernas.
- **Experiencia Inmersiva**: Fondo animado dinámico (`AnimatedBackground`), micro-interacciones suaves y efectos de iluminación CSS que dan vida al sitio.
- **Navegación Inteligente**: Sistema de scroll sincronizado mediante **Context API** (`ScrollContext`) para una transición fluida entre las secciones de la aplicación.
- **Formulario de Contacto Funcional**: Middleware de backend mediante **Vercel Serverless Functions** (`api/send-email.ts`) conectado con **Formspree** para una entrega de mensajes segura.
- **Totalmente Responsive**: Diseño adaptable que brilla tanto en smartphones como en monitores de alta resolución, incluyendo un menú lateral dinámico para dispositivos táctiles.

---

## 🛠️ Stack Tecnológico

| Área | Tecnologías |
| :--- | :--- |
| **Frontend** | React 19, TypeScript, Context API |
| **Estilos** | Tailwind CSS v4, PostCSS 8 |
| **Backend** | Vercel Serverless Functions (Node.js) |
| **Herramientas** | Vite 7, ESLint, Prettier |
| **Email Service** | Formspree API |

---

## 📂 Estructura del Proyecto

El proyecto sigue una estructura modular y clara, facilitando la expansión de nuevas funcionalidades:

```bash
Portfolio-Web/
├── api/                    # ⚡ Serverless Functions (Backend)
│   └── send-email.ts       # Endpoint para procesamiento de formularios
├── frontend/               # 🎨 Aplicación Frontend
│   ├── public/             # Archivos estáticos accesibles directamente
│   ├── src/
│   │   ├── assets/         # Recursos multimedia (Fuentes, Imágenes, Previews)
│   │   ├── components/     # Componentes de UI (Sidebar, Footer, AnimatedBG)
│   │   ├── context/        # Estado global (Gestión de Scroll y Secciones)
│   │   ├── pages/          # Componentes de sección (About, Projects, Skills, etc.)
│   │   ├── types/          # Definiciones de interfaces TypeScript
│   │   ├── App.tsx         # Layout principal y punto de entrada de la UI
│   │   └── index.css       # Estilos globales y tokens de diseño Tailwind
│   ├── tailwind.config.js  # Personalización del diseño
│   └── vite.config.ts      # Configuración de compilación y optimización
├── vercel.json             # Configuración del ecosistema Vercel
└── README.md
```

---

## 🚀 Instalación y Uso

### Requisitos Previos
- **Node.js** (v18 o superior)
- **npm** o **yarn**

### Pasos para ejecución local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/BAASprogrammer/Portfolio-Web.git
   cd Portfolio-Web
   ```

2. **Instalar dependencias del frontend:**
   ```bash
   cd frontend
   npm install
   ```

3. **Configurar Variables de Entorno:**
   Crea un archivo `.env` en la raíz del proyecto para habilitar el backend o el formulario:
   ```env
   FORMSPREE_ID=tu_id_aca
   ```

4. **Lanzar el modo desarrollo:**
   ```bash
   npm run dev
   ```

---

## 📝 Variables de Entorno Configurables

Para que el formulario de contacto funcione correctamente en producción, debes configurar las siguientes claves en tu proveedor de hosting (ej. Vercel):

- `FORMSPREE_ID`: El ID de tu endpoint proporcionado por [Formspree](https://formspree.io/).

---

## 🌐 Despliegue

La infraestructura está preparada para un despliegue CI/CD automático en **Vercel**. Cualquier cambio en la rama `main` actualizará automáticamente el sitio en vivo.

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de adaptarlo y usarlo para destacar tu propio talento.

---

<p align="center">
  Desarrollado con ❤️ por <b>Bárbara Arias (BAASprogrammer)</b><br>
  <i>Ubicada en Chile, trabajando para el mundo.</i>
</p>
