# Sesame

Prueba tecnica para Sesame de Oscar Roza Fernandez.

## 🌐 Demo

Puedes ver la aplicación en funcionamiento aquí: [https://sesame-prueba.vercel.app/](https://sesame-prueba.vercel.app/)

## 📱 Compatibilidad

La aplicación es compatible con dispositivos móviles con un diseño responsive que se adapta a diferentes tamaños de
pantalla, garantizando su uso tanto en dispositivos de escritorio como en tablets y smartphones.

## 🚀 Tecnologías Principales

- Vue 3.5.13
- TypeScript 5.8.0
- Vite 6.2.4
- Pinia 3.0.1 (para gestión de estado)
- Vue Router 4.5.0
- @tailwindcss/vite 4.1.4

## 📋 Prerequisitos

Antes de comenzar, asegúrate de tener instalado en tu máquina:

- Node.js (última versión LTS recomendada)
- npm (incluido con Node.js)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/) (y que Docker Desktop esté abierto)

---

## 🛠️ Instalación

## 🚀 Pasos para montar el proyecto

### 1. Crear una carpeta donde alojar el proyecto

```bash
  mkdir sesame-prueba
```

### 2. Acceder a la carpeta creada

```bash
  cd sesame-prueba
```

### 3. Clonar el repositorio de GitHub

```bash
  git clone https://github.com/Oscar2492/sesame-prueba.git
```

> 🔁 Reemplaza la URL por la del repositorio real si es diferente.

### 4. Acceder a la carpeta del proyecto clonado

```bash
  cd repositorio
```

---

## 🐳 Construir y ejecutar el contenedor Docker

### 5. Construir la imagen de Docker

```bash
  docker build -t sesame-prueba-oscar .
```

> ⚠️ **IMPORTANTE**: Asegúrate de que Docker Desktop esté abierto y corriendo.  
> Si no lo está, el comando `docker build` no funcionará.

### 6. Ejecutar el contenedor

```bash
  docker run -p 5173:5173 sesame-prueba-oscar
```

> 🎯 Esto levantará el proyecto y podrás acceder desde tu navegador en:  
> `http://localhost:5173`

---

## ✅ ¡Listo!

Tu proyecto está corriendo correctamente en un contenedor Docker.  
Puedes detener el contenedor con `CTRL + C` o buscar su ID y detenerlo con:

```bash
  docker ps
docker stop <ID_DEL_CONTENEDOR>
```

---

Si tienes cualquier problema, revisa que:

- Docker Desktop esté abierto
- El puerto 5173 no esté siendo usado por otra app
- El `Dockerfile` esté en la raíz del proyecto

---

## 🧪 Ejecutar tests

Puedes ejecutar los tests del proyecto con el siguiente comando:

```bash
  npm run test
```

> 🧠 Si vas a ejecutar los tests **desde tu entorno local**, asegúrate de instalar las dependencias primero con:

```bash
  npm install
```

> 🐳 Si ejecutas el proyecto desde Docker, el `npm install` ya se ejecuta automáticamente al construir la imagen, así que
> no hace falta hacerlo manualmente.

---

## 🗒️ Comentarios del proyecto

- He decidido filtrar el estado de vacante "Oferta" ya que no aparecía representado en el diseño proporcionado. Valoré
  la posibilidad de mantenerlo, pero al no contar con un icono específico para dicho estado, opté por excluirlo para
  mantener la coherencia visual.
- Considero que una mejora interesante sería incluir un menú de edición de la información del candidato. Este permitiría
  completar campos adicionales como *email, dirección, género, LinkedIn*, entre otros.
  La idea sería que, desde cada tarjeta de candidato, al hacer clic en el icono de los tres puntos verticales, se
  desplegara un menú contextual con la opción **"Editar candidato"**, la cual redirigiría a un formulario dedicado para
  dicha edición.
- Otra mejora pendiente es implementar el uso del estado `isLoading` que ya existe en los stores para mostrar un
  indicador de carga (spinner) durante las llamadas a la API de datos.
- La aplicación está traducida al inglés y al español, utilizando vue-i18n para gestionar las traducciones. Esto permite
  a los usuarios cambiar el idioma dinámicamente mediante un selector de idioma, garantizando una experiencia accesible
  para usuarios de ambos idiomas.