Este proyecto es una app de Registro de Usuarios

* Una aplicación web Full Stack desarrollada con React para el frontend, Flask para el backend y MongoDB Atlas como base de datos en la nube. 

* Permite registrar usuarios, validar sus datos y visualizar la lista de registros.

//Tecnologías utilizadas

- Frontend: React, HTML, CSS, Axios
- Backend: Flask, Flask-CORS, PyMongo
- Base de datos: MongoDB Atlas
- Entorno de desarrollo: GitHub Codespaces
- Control de versiones: Git y GitHub

//Funcionalidades

* Formulario de registro con:
  - Nombre completo
  - Correo electrónico
  - Contraseña
* Validaciones:
  - Todos los campos son obligatorios
  - Correo en formato válido
  - Contraseña con al menos 6 caracteres
* Verificación de correos ya registrados
* Contraseña encriptada antes de guardar
* Almacenamiento en MongoDB Atlas
* Visualización de usuarios registrados (sin contraseña)
* API REST:
  - POST /api/registro (Registra un nuevo usuario)
  - GET /api/usuarios (Crea una lista con todos los usuarios resgistrados)

//Como ejecutar el proyecto

- git clone https://github.com/Fsepulvedap/registro-de-usuario-prueba-TIT.git
- cd registro-de-usuario-prueba-TIT

* Backend:
    - cd backend
    - pip install -r requirements.txt
    - python run.py

* Frontend:
    - cd frontend
    - npm install
    - npm start

// Resumen del desarrollo del proyecto

* Planificación y definición del objetivo:
    - Se definió crear una app full stack para registrar usuarios, validando datos en frontend y backend, guardando en base de datos y mostrando la lista de usuarios.

* Configuración del entorno:
    - Se configuró el entorno de desarrollo con GitHub Codespaces, instalando React para el frontend y Flask para el backend, además de configurar MongoDB Atlas para la base de datos.

* Desarrollo del backend:

    - Se creó una API REST con Flask que incluye rutas para registrar usuarios y obtener la lista de usuarios.

    - Se implementaron validaciones en el servidor para los campos recibidos.

    - Se integró MongoDB con PyMongo para almacenamiento.

    - Se agregó hashing de contraseñas para seguridad.

    - Se resolvieron errores relacionados con CORS para permitir comunicación entre frontend y backend.

* Desarrollo del frontend:

    - Se construyó un formulario de registro con React, validando campos y enviando datos al backend.

    - Se creó un componente para mostrar la lista de usuarios registrados, obteniendo datos desde el backend.

    - Se manejaron estados y mensajes de error o éxito para mejorar la experiencia de usuario.

* Pruebas y ajustes:

    - Se probaron los endpoints y el flujo completo de registro y visualización.

    - Se corrigieron errores de conexión, validaciones y UI.

    - Se aseguró la persistencia de datos en la base y la correcta encriptación de contraseñas.

* Documentación y control de versiones:

    - Se desarrolló el proyecto en un repositorio público en GitHub.

    - Se agregó al colaborador requerido (bosnan-dev).

    - Se redactó el README para explicar el proyecto, sus funcionalidades y cómo correrlo.


* Autor:
    - FERNANDO SEPULVEDA
    - GitHub: FsepulvedaP