# 03: Migración Java desde Python

## Escenario

Contoso es una empresa que vende productos para varias actividades al aire libre. El departamento de marketing de Contoso quiere lanzar un sitio web de redes sociales micro para promocionar sus productos a clientes existentes y potenciales.

Debido a que un desarrollador Python dejó la empresa, las partes interesadas pidieron migrar la aplicación API backend Python existente a Java, usando Spring Boot.

Ahora, como desarrollador Java, debes migrar la aplicación FastAPI existente a Spring Boot. Tienes muy poco conocimiento de Python y FastAPI, por cierto.

## Prerrequisitos

Consulta el documento [README](../README.md) para la preparación.

## Comenzando

- [Verificar Modo Agente de GitHub Copilot](#verificar-modo-agente-de-github-copilot)
- [Preparar Instrucciones Personalizadas](#preparar-instrucciones-personalizadas)
- [Preparar Proyecto Spring Boot](#preparar-proyecto-spring-boot)
- [Migrar Aplicación API FastAPI](#migrar-aplicación-api-fastapi)
- [Verificar Aplicación Backend Spring Boot](#verificar-aplicación-backend-spring-boot)

### Verificar Modo Agente de GitHub Copilot

1. Haz clic en el ícono de GitHub Copilot en la parte superior de GitHub Codespace o VS Code y abre la ventana de GitHub Copilot.

   ![Abrir GitHub Copilot Chat](../../../docs/images/setup-02.png)

1. Si se te pide iniciar sesión o registrarte, hazlo. Es gratuito.
1. Asegúrate de estar usando el Modo Agente de GitHub Copilot.

   ![Modo Agente de GitHub Copilot](../../../docs/images/setup-03.png)

1. Selecciona el modelo ya sea `GPT-4.1` o `Claude Sonnet 4`.
1. Asegúrate de haber configurado [Servidores MCP](./00-setup.md#configurar-servidores-mcp).

### Preparar Instrucciones Personalizadas

1. Establece la variable de entorno de `$REPOSITORY_ROOT`.

   ```bash
   # bash/zsh
   REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
   ```

   ```powershell
   # PowerShell
   $REPOSITORY_ROOT = git rev-parse --show-toplevel
   ```

1. Copia las instrucciones personalizadas.

    ```bash
    # bash/zsh
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/java/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/java/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### Preparar Proyecto Spring Boot

1. Asegúrate de estar usando el Modo Agente de GitHub Copilot con el modelo `Claude Sonnet 4` o `GPT-4.1`.
1. Asegúrate de que el servidor MCP `context7` esté funcionando.
1. Instala Spring Boot CLI.

    ```bash
    sdk install springboot
    ```

1. Usa un prompt como el siguiente para crear un andamio para un proyecto de aplicación Spring Boot.

    ```text
    Me gustaría crear un andamio para una aplicación Spring Boot. Sigue las instrucciones a continuación.

    - Usa context7.
    - Tu directorio de trabajo es `java`.
    - Identifica primero todos los pasos que vas a hacer.
    - Usa Spring Boot CLI para crear el proyecto de aplicación Spring Boot.
    - Usa Gradle como el gestor de paquetes Java.
    - Usa el nombre de paquete `com.contoso.socialapp`.
    - Usa el ID de artefacto `socialapp`.
    - Usa el ID de grupo `com.contoso`.
    - Usa el tipo de paquete `jar`.
    - Usa la versión OpenJDK `21`.
    - Agrega dependencias - `Spring Web`, `Spring Boot Actuator` y `Lombok`.
    - Usa el número de puerto `8080`.
    - Asegúrate de permitir CORS desde cualquier lugar.
    - Construye la aplicación Spring Boot y verifica si la aplicación se construye correctamente.
    - Ejecuta esta aplicación Spring Boot y verifica si la aplicación se ejecuta correctamente.
    - Si la construcción o ejecución de la aplicación falla, analiza los problemas y corrígelos.
    ```

1. Haz clic en el botón ![imagen del botón "keep"](https://img.shields.io/badge/keep-blue) de GitHub Copilot para tomar los cambios.

### Migrar Aplicación API FastAPI

1. Asegúrate de estar usando el Modo Agente de GitHub Copilot con el modelo `Claude Sonnet 4` o `GPT-4.1`.
1. Asegúrate de que el servidor MCP `context7` esté funcionando.
1. Agrega [`product-requirements.md`](../product-requirements.md) y [`openapi.yaml`](../openapi.yaml) a GitHub Copilot.
1. Usa un prompt como el siguiente para migrar FastAPI a Spring Boot.

    ```text
    Ahora, estamos migrando la aplicación API basada en FastAPI existente a una aplicación API Spring Boot. Sigue las instrucciones a continuación para la migración.
    
    - Usa context7.
    - La aplicación FastAPI existente se encuentra en `python`.
    - Tu directorio de trabajo es `java/socialapp`.
    - Identifica primero todos los pasos que vas a hacer.
    - Analiza la estructura de la aplicación de la aplicación FastAPI existente.
    - Migra todos los endpoints. Ambos endpoints correspondientes deben ser exactamente iguales entre sí.
    - Usa SQLite como la base de datos.
    - Usa `sns_api.db` como el nombre de la base de datos SQLite.
    - La base de datos siempre debe ser inicializada cuando se inicie la aplicación.
    - Usa `openapi.yaml` que describe todos los endpoints y esquema de datos.
    - La aplicación API debe renderizar la página Swagger UI a través de un endpoint predeterminado.
    - La aplicación API debe renderizar exactamente el mismo documento OpenAPI a través de un endpoint predeterminado.
    - NO agregues nada no definido en `openapi.yaml`.
    - NO modifiques nada definido en `openapi.yaml`.
    - Si es necesario, agrega más paquetes para OpenAPI y Swagger UI.
    ```

1. Haz clic en el botón ![imagen del botón "keep"](https://img.shields.io/badge/keep-blue) de GitHub Copilot para tomar los cambios.
1. Una vez que la migración haya terminado, usa un prompt como el siguiente para verificar el resultado de la migración.

    ```text
    Me gustaría construir la aplicación Spring Boot. Sigue las instrucciones.

    - Usa context7.
    - Construye la aplicación Spring Boot y verifica si la aplicación se construye correctamente.
    - Si la construcción de la aplicación falla, analiza los problemas y corrígelos.
    ```

   > **NOTA**:
   >
   > - Hasta que la construcción tenga éxito, itera este paso.
   > - Si la construcción sigue fallando, revisa los mensajes de error y pregúntales al Agente GitHub Copilot para resolverlos.

1. Haz clic en el botón ![imagen del botón "keep"](https://img.shields.io/badge/keep-blue) de GitHub Copilot para tomar los cambios.

### Verificar Aplicación Backend Spring Boot

1. Una vez que la aplicación esté construida, verifica si está escrita correctamente o no.

    ```text
    Ejecuta la aplicación Spring Boot y verifica si la aplicación se está ejecutando correctamente verificando todos los endpoints. También verifica que el endpoint OpenAPI renderice exactamente el mismo contenido que `openapi.yaml`.

    Si la ejecución de la aplicación falla, analiza los problemas y corrígelos. Usa context7.
    ```

1. Abre un navegador web y navega a `http://localhost:8080`.
1. Haz clic en el botón ![imagen del botón "keep"](https://img.shields.io/badge/keep-blue) de GitHub Copilot para tomar los cambios.

---

Bien. Has completado el paso "Java". Vamos al [PASO 04: Migración .NET desde JavaScript](./04-dotnet.md).

---

**Disclaimer**: Este documento ha sido localizado por [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Por lo tanto, puede contener errores. Si encuentras alguna traducción que sea inapropiada o errónea, por favor crea un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
