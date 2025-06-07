# Documento de Requisitos del Producto (PRD)

## Título del Producto

Aplicación Simple de Redes Sociales

## Versión del Documento

1.0.0

## Autor

Propietario del Producto / Líder Técnico en Contoso

## Última Actualización

2025-05-30

---

## 1. Resumen

El objetivo de este proyecto es construir un Servicio de Redes Sociales (SNS) básico pero funcional que permita a los usuarios crear, recuperar, actualizar y eliminar publicaciones; agregar comentarios; y dar/quitar me gusta a las publicaciones. El enfoque API-first asegura que pueda ser usado como backend para frontends web o móviles.

## 2. Contexto

Contoso es una empresa que vende productos para varias actividades al aire libre. El departamento de marketing de Contoso quiere lanzar un sitio web de redes sociales micro para promocionar sus productos a clientes existentes y potenciales. Como su primer MVP, el departamento de marketing quiere construir rápidamente el sitio web.

## 3. Objetivos y Metas

* Proporcionar operaciones CRUD para contenido generado por usuarios (publicaciones).
* Habilitar interacción social a través de comentarios y me gusta.
* Mantener simplicidad para casos de uso educativos y MVP.
* Asegurar diseño de API RESTful y manejo adecuado de errores.

## 4. Características Clave

### 4.1 Gestión de Publicaciones

* **Listar Publicaciones**

  * **GET** `/api/posts`
  * Historia de Usuario: Como usuario, quiero ver todas las publicaciones recientes para poder navegar lo que otros están compartiendo.

* **Crear Publicación**

  * **POST** `/api/posts`
  * Requerido: `username`, `content`
  * Historia de Usuario: Como usuario, quiero crear una nueva publicación para poder compartir algo con otros.

* **Obtener Publicación Individual**

  * **GET** `/api/posts/{postId}`
  * Historia de Usuario: Como usuario, quiero leer una publicación específica en detalle.

* **Actualizar Publicación**

  * **PATCH** `/api/posts/{postId}`
  * Requerido: `username`, `content`
  * Historia de Usuario: Como usuario, quiero actualizar mi publicación si cometí un error o tengo algo que agregar.

* **Eliminar Publicación**

  * **DELETE** `/api/posts/{postId}`
  * Historia de Usuario: Como usuario, quiero eliminar mi publicación si ya no quiero que sea compartida.

### 4.2 Gestión de Comentarios

* **Listar Comentarios de una Publicación**

  * **GET** `/api/posts/{postId}/comments`
  * Historia de Usuario: Como usuario, quiero leer todos los comentarios en una publicación.

* **Crear Comentario**

  * **POST** `/api/posts/{postId}/comments`
  * Requerido: `username`, `content`
  * Historia de Usuario: Como usuario, quiero comentar en una publicación para compartir mis pensamientos.

* **Obtener Comentario Específico**

  * **GET** `/api/posts/{postId}/comments/{commentId}`
  * Historia de Usuario: Como usuario, quiero ver un comentario específico en detalle.

* **Actualizar Comentario**

  * **PATCH** `/api/posts/{postId}/comments/{commentId}`
  * Requerido: `username`, `content`
  * Historia de Usuario: Como usuario, quiero corregir o revisar mi comentario.

* **Eliminar Comentario**

  * **DELETE** `/api/posts/{postId}/comments/{commentId}`
  * Historia de Usuario: Como usuario, quiero eliminar mi comentario si es necesario.

### 4.3 Sistema de Me Gusta

* **Dar Me Gusta a una Publicación**

  * **POST** `/api/posts/{postId}/likes`
  * Requerido: `username`
  * Historia de Usuario: Como usuario, quiero dar me gusta a una publicación para mostrar aprecio.

* **Quitar Me Gusta a una Publicación**

  * **DELETE** `/api/posts/{postId}/likes`
  * Historia de Usuario: Como usuario, quiero quitar mi me gusta si cambio de opinión.

## 5. Roles de Usuario y Permisos

* **Usuarios Anónimos**
  * Pueden leer publicaciones y comentarios.

* **Usuarios Autenticados (vía campo username)**
  * Pueden crear, actualizar, eliminar sus propias publicaciones y comentarios.
  * Pueden dar/quitar me gusta a publicaciones.

## 6. Contratos de API

* Definir el documento OpenAPI con la especificación v3.0.1 al menos.
* Usa códigos de estado HTTP estándar.
  * `200 OK`, `201 Created`, `204 No Content`, `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`
* Content-Type: `application/json`

## 7. Requisitos No Funcionales

* **Documentación**: La API debe estar completamente documentada usando Swagger UI.
* **Seguridad**: Validación de entrada y validación básica de solicitudes, incluso si la autenticación completa no está implementada.

## 8. Suposiciones y Dependencias

* Usar base de datos en memoria para este producto.
* No se incluye soporte para carga de archivos o medios.
* No hay flujos de registro de usuario o login/autenticación.
* No se requiere código de pruebas.

## 9. Métricas de Éxito

* Todos los endpoints de la API son alcanzables y responden como está documentado.
* Capaz de publicar, comentar, dar me gusta y eliminar recursos de extremo a extremo.
* Documentación clara de Swagger generada desde OpenAPI.

## 10. Fuera del Alcance

* Autenticación de usuario (OAuth, JWT, etc.)
* Actualizaciones en tiempo real o notificaciones
* Herramientas de moderación o reportes
* Cargas multimedia (imágenes, video)

---

**Disclaimer**: Este documento ha sido localizado por [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Por lo tanto, puede contener errores. Si encuentras alguna traducción que sea inapropiada o errónea, por favor crea un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
