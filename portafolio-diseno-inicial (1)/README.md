# Portafolio de diseño

Esta es una base inicial para un portafolio editorial con HTML/CSS, páginas de detalle y un panel Decap CMS.

## Configuración necesaria antes de usarlo

1. En `admin/config.yml`, cambia `TU_USUARIO_GITHUB` por tu nombre de usuario real de GitHub.
2. Sube todos estos archivos a la raíz del repositorio `portafolio-diseno`.
3. En Netlify, importa el repositorio. Para un sitio estático, usa como directorio de publicación la raíz (`.`) y no necesitas comando de compilación.
4. El panel de Decap CMS necesita autenticación OAuth para poder escribir en GitHub. Configúrala con el método de autenticación vigente descrito en la documentación oficial de Decap CMS y Netlify. No pegues tokens ni contraseñas en archivos públicos.
5. Prueba primero que puedes entrar a `/admin/`, guardar un proyecto de prueba y comprobar que aparece en la portada. No compartas el enlace como terminado hasta hacer esta prueba.

## Contenido

- `index.html`: portada.
- `project.html`: plantilla de detalle de proyecto.
- `style.css`: estilos.
- `js/projects.js`: carga las tarjetas desde `projects/projects.json`.
- `projects/projects.json`: lista editable de proyectos.
- `admin/`: panel de administración.

El ejemplo está marcado como no publicado. Sustitúyelo por tus proyectos desde el panel cuando la autenticación esté lista.
