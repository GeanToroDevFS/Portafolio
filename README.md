# Portafolio de Gean Franco Muñoz Toro

Sitio personal de Gean Franco Muñoz Toro, tecnólogo en Desarrollo de Software. Presenta su perfil, la experiencia en Fexton S.A.S. y los proyectos académicos de la Universidad del Valle.

## Tecnologías

- React 19
- TypeScript
- Vite 6
- Tailwind CSS 4
- React Router 7
- Framer Motion
- EmailJS, para el formulario de contacto

## Requisitos

- Node.js 20 o superior
- npm

## Instalación

```bash
npm install
```

## Variables de entorno

Copia `.env.example` a `.env`. No subas `.env` al repositorio: ya está en `.gitignore`.

```env
VITE_GITHUB_URL=
VITE_LINKEDIN_URL=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
VITE_MY_EMAIL=
```

`VITE_GITHUB_URL` y `VITE_LINKEDIN_URL` son enlaces públicos y deben incluir `https://`. Si GitHub queda vacío, el botón abre `https://github.com/GeanToroDevFS`. LinkedIn abre solo la URL escrita en `VITE_LINKEDIN_URL`.

Las variables `VITE_*` quedan visibles en el JavaScript compilado. No guardes contraseñas, tokens privados ni secretos en ellas. La clave de EmailJS que usa este proyecto es la clave pública del servicio.

El teléfono no se muestra en la página. El correo tampoco se escribe como texto: el icono del pie abre un enlace `mailto:` con `VITE_MY_EMAIL`. Si esa variable está vacía, el icono no aparece. El mismo valor es el destino del formulario. La hoja de vida está en `public/Cv/HvAc.pdf`.

Si EmailJS no está configurado, el sitio sigue funcionando y el formulario avisa que todavía no puede enviar.

## Desarrollo

```bash
npm run dev
```

## Compilación

```bash
npm run build
npm run preview
```

## Pruebas y lint

```bash
npm test
npm run lint
```

`npm run test:watch` deja Vitest en modo observación.

## Ramas

La rama principal del repositorio es `master`. El portafolio se trabaja y se publica desde `Gfmt`; esa rama no es la principal.

## Despliegue

El proyecto está preparado para Vercel. `vercel.json` reescribe las rutas de React Router hacia `index.html`.

El dominio es `https://www.geantoro.dev`. `public/robots.txt` apunta a `https://www.geantoro.dev/sitemap.xml`, y ese sitemap lista `/`, `/about` y `/projects`.

En el panel del proyecto hay que crear las mismas variables de `.env.example` y volver a desplegar si cambian, porque Vite las incorpora al construir. La rama de producción en Vercel debe ser `Gfmt`.

## EmailJS

1. Crea un servicio y una plantilla en EmailJS.
2. Usa los campos `from_name`, `from_email`, `message`, `to_email`, `date` y `reply_link`.
3. Copia el ID del servicio, el ID de la plantilla y la clave pública a las variables de entorno.
4. No pegues esos valores en el código ni en este archivo.
