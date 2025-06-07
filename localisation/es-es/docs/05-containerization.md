# 05: Contenedorización

## Escenario

Contoso es una empresa que vende productos para varias actividades al aire libre. El departamento de marketing de Contoso quiere lanzar un sitio web de redes sociales micro para promocionar sus productos a clientes existentes y potenciales.

Ahora tienen tanto una aplicación backend basada en Java como una aplicación frontend basada en .NET. Quieren contenedorizarlas para que puedan ser desplegadas en cualquier plataforma.

Ahora, como ingeniero DevOps, debes contenedorizar ambas aplicaciones.

## Prerrequisitos

Consulta el documento [README](../README.md) para la preparación.

## Comenzando

- [Verificar Modo Agente de GitHub Copilot](#verificar-modo-agente-de-github-copilot)
- [Preparar Instrucciones Personalizadas](#preparar-instrucciones-personalizadas)
- [Contenedorizar Aplicación Java](#contenedorizar-aplicación-java)
- [Contenedorizar Aplicación .NET](#contenedorizar-aplicación-net)
- [Orquestar Contenedores](#orquestar-contenedores)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/containerization/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/containerization/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### Contenedorizar Aplicación Java

1. Asegúrate de estar usando el Modo Agente de GitHub Copilot con el modelo `Claude Sonnet 4` o `GPT-4.1`.
1. Usa un prompt como el siguiente para construir una imagen de contenedor para la aplicación Java.

    ```text
    Me gustaría construir una imagen de contenedor de una aplicación Java. Sigue las instrucciones a continuación.

    - La aplicación Java se encuentra en `java`.
    - Tu directorio de trabajo es la raíz del repositorio.
    - Identifica primero todos los pasos que vas a hacer.
    - Crea un Dockerfile, `Dockerfile.java`.
    - Usa Microsoft OpenJDK 21.
    - Usa el enfoque de construcción multi-etapa.
    - Extrae JRE del JDK.
    - Usa el número de puerto objetivo `8080` para la imagen del contenedor.
    ```

1. Haz clic en el botón ![imagen del botón keep](https://img.shields.io/badge/keep-blue) de GitHub Copilot para tomar los cambios.

1. Una vez que `Dockerfile.java` esté creado, construye la imagen del contenedor con el siguiente prompt.

    ```text
    Usa `Dockerfile.java` y construye una imagen de contenedor.

    - Usa `contoso-backend` como el nombre de la imagen del contenedor.
    - Usa `latest` como la etiqueta de la imagen del contenedor.
    - Verifica si la imagen del contenedor se construye correctamente.
    - Si la construcción falla, analiza los problemas y corrígelos.
    ```

1. Haz clic en el botón ![imagen del botón keep](https://img.shields.io/badge/keep-blue) de GitHub Copilot para tomar los cambios.

1. Una vez que la construcción tenga éxito, ejecuta la imagen del contenedor con el siguiente prompt.

    ```text
    Usa la imagen del contenedor recién construida, ejecuta un contenedor y verifica si la aplicación se está ejecutando correctamente.
    
    - Usa el puerto del host `8080`.
    ```

### Contenedorizar Aplicación .NET

1. Asegúrate de estar usando el Modo Agente de GitHub Copilot con el modelo `Claude Sonnet 4` o `GPT-4.1`.
1. Usa un prompt como el siguiente para construir una imagen de contenedor para la aplicación .NET.

    ```text
    Me gustaría construir una imagen de contenedor de una aplicación .NET. Sigue las instrucciones a continuación.

    - La aplicación .NET se encuentra en `dotnet`.
    - Tu directorio de trabajo es la raíz del repositorio.
    - Identifica primero todos los pasos que vas a hacer.
    - Crea un Dockerfile, `Dockerfile.dotnet`.
    - Usa .NET 9.
    - Usa el enfoque de construcción multi-etapa.
    - Usa el número de puerto objetivo `8080` para la imagen del contenedor.
    ```

1. Haz clic en el botón ![imagen del botón keep](https://img.shields.io/badge/keep-blue) de GitHub Copilot para tomar los cambios.

1. Una vez que `Dockerfile.dotnet` esté creado, construye la imagen del contenedor con el siguiente prompt.

    ```text
    Usa `Dockerfile.dotnet` y construye una imagen de contenedor.

    - Usa `contoso-frontend` como el nombre de la imagen del contenedor.
    - Usa `latest` como la etiqueta de la imagen del contenedor.
    - Verifica si la imagen del contenedor se construye correctamente.
    - Si la construcción falla, analiza los problemas y corrígelos.
    ```

1. Haz clic en el botón ![imagen del botón keep](https://img.shields.io/badge/keep-blue) de GitHub Copilot para tomar los cambios.

1. Una vez que la construcción tenga éxito, ejecuta la imagen del contenedor con el siguiente prompt.

    ```text
    Usa la imagen del contenedor recién construida, ejecuta un contenedor y verifica si la aplicación se está ejecutando correctamente.
    
    - Usa el puerto del host `3030`.
    ```

1. Asegúrate de que tanto las aplicaciones frontend como backend NO se estén comunicando entre sí porque aún no se conocen. Ejecuta el prompt como el siguiente.

    ```text
    Independientemente o no, remueve ambos contenedores que están ejecutándose actualmente.
    ```

### Orquestar Contenedores

1. Asegúrate de estar usando el Modo Agente de GitHub Copilot con el modelo `Claude Sonnet 4` o `GPT-4.1`.
1. Usa un prompt como el siguiente para construir un archivo Docker Compose.

    ```text
    Me gustaría crear un archivo Docker Compose. Sigue las instrucciones a continuación.
    
    - Tu directorio de trabajo es la raíz del repositorio.
    - Usa `Dockerfile.java` como aplicación backend.
    - Usa `Dockerfile.dotnet` como aplicación frontend.
    - Crea `compose.yaml` como el archivo Docker Compose.
    - Usa `contoso` como el nombre de la red.
    - Usa `contoso-backend` como el nombre del contenedor de la aplicación Java. Su puerto objetivo es 8080, y el puerto del host es 8080.
    - Usa `contoso-frontend` como el nombre del contenedor de la aplicación .NET. Su puerto objetivo es 8080, y el puerto del host es 3030.
    - Monta el volumen para la base de datos que usa la aplicación Java, `java/socialapp/sns_api.db`.
    ```

1. Haz clic en el botón ![imagen del botón keep](https://img.shields.io/badge/keep-blue) de GitHub Copilot para tomar los cambios.

1. Una vez que el archivo `compose.yaml` esté creado, ejecútalo y verifica si ambas aplicaciones se están ejecutando correctamente.

    ```text
    Ahora, ejecuta el archivo Docker compose y verifica si las aplicaciones se están ejecutando correctamente.
    ```

1. Abre un navegador web y navega a `http://localhost:3030`, y verifica si las aplicaciones están funcionando correctamente.

---

¡Felicidades! 🎉 ¡Has completado todas las sesiones del taller exitosamente!

---

**Disclaimer**: Este documento ha sido localizado por [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Por lo tanto, puede contener errores. Si encuentras alguna traducción que sea inapropiada o errónea, por favor crea un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
