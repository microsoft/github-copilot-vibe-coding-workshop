# 04: Migración .NET desde JavaScript

## Escenario

Contoso es una empresa que vende productos para varias actividades al aire libre. El departamento de marketing de Contoso quiere lanzar un sitio web de redes sociales micro para promocionar sus productos a clientes existentes y potenciales.

Ya tienen una aplicación frontend escrita en JavaScript, más específicamente en React. Sin embargo, de repente, enviaron nuevos requisitos para redesarrollar la aplicación frontend usando .NET, especialmente en Blazor.

Ahora, como desarrollador .NET, debes migrar la aplicación React existente a Blazor. Tienes muy poco conocimiento de JavaScript y React, por cierto.

## Prerrequisitos

Consulta el documento [README](../README.md) para la preparación.

## Comenzando

- [Verificar Modo Agente de GitHub Copilot](#verificar-modo-agente-de-github-copilot)
- [Preparar Instrucciones Personalizadas](#preparar-instrucciones-personalizadas)
- [Preparar Proyecto de Aplicación Web Blazor](#preparar-proyecto-de-aplicación-web-blazor)
- [Ejecutar Aplicación Backend Spring Boot](#ejecutar-aplicación-backend-spring-boot)
- [Migrar Aplicación Web React](#migrar-aplicación-web-react)
- [Verificar Aplicación Frontend Blazor](#verificar-aplicación-frontend-blazor)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/dotnet/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/dotnet/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### Preparar Proyecto de Aplicación Web Blazor

1. Asegúrate de estar usando el Modo Agente de GitHub Copilot con el modelo `Claude Sonnet 4` o `GPT-4.1`.
1. Asegúrate de que el servidor MCP `context7` esté funcionando.
1. Usa un prompt como el siguiente para crear un andamio para un proyecto de aplicación web Blazor.

    ```text
    Me gustaría crear un andamio para una aplicación web Blazor. Sigue las instrucciones a continuación.

    - Usa context7.
    - Tu directorio de trabajo es `dotnet`.
    - Identifica primero todos los pasos que vas a hacer.
    - Muéstrame la lista de proyectos .NET relacionados con Blazor y pídeme que elija.
    - Genera un proyecto Blazor.
    - Usa el nombre de proyecto `Contoso.BlazorApp`.
    - Actualiza `launchSettings.json` para cambiar el número de puerto a `3031` para HTTP, `43031` para HTTPS.
    - Crea una solución, `ContosoWebApp`, y agrega el proyecto Blazor a esta solución.
    - Construye la aplicación Blazor y verifica si la aplicación se construye correctamente.
    - Ejecuta esta aplicación Blazor y verifica si la aplicación se ejecuta correctamente.
    - Si la construcción o ejecución de la aplicación falla, analiza los problemas y corrígelos.
    ```

1. Haz clic en el botón ![imagen del botón keep](https://img.shields.io/badge/keep-blue) de GitHub Copilot para tomar los cambios.

### Ejecutar Aplicación Backend Spring Boot

1. Asegúrate de que la aplicación backend Spring Boot esté funcionando.

    ```text
    Ejecuta la API backend Spring Boot, que se encuentra en el directorio `java`.
    ```

   > **NOTA**: Puedes usar la aplicación de muestra [`complete/java`](../complete/java/) en su lugar.

1. Si usas GitHub Codespaces, asegúrate de que el número de puerto `8080` esté configurado como `público` en lugar de `privado`. De lo contrario, obtendrás el error `401` al acceder desde la aplicación frontend.

### Migrar Aplicación Web React

1. Asegúrate de estar usando el Modo Agente de GitHub Copilot con el modelo `Claude Sonnet 4` o `GPT-4.1`.
1. Asegúrate de que el servidor MCP `context7` esté funcionando.
1. Usa un prompt como el siguiente para migrar React a Blazor.

    ```text
    Ahora, estamos migrando la aplicación web basada en React existente a una aplicación web Blazor. Sigue las instrucciones a continuación para la migración.
    
    - Usa context7.
    - La aplicación React existente se encuentra en `javascript`.
    - Tu directorio de trabajo es `dotnet/Contoso.BlazorApp`.
    - Identifica primero todos los pasos que vas a hacer.
    - Hay una aplicación API backend ejecutándose en `http://localhost:8080`.
    - Analiza la estructura de la aplicación de la aplicación React existente.
    - Migra todos los componentes React a los de Blazor. Ambos componentes correspondientes deben ser lo más exactamente similares entre sí como sea posible.
    - Migra todos los elementos CSS necesarios de React a Blazor.
    - Al migrar elementos JavaScript de React a Blazor, maximiza el uso de las características nativas de Blazor tanto como sea posible. Si tienes que usar JavaScript, usa las características JSInterop de Blazor.
    - Si es necesario, agrega paquetes NuGet que sean compatibles con .NET 9.
    ```

1. Una vez que la migración haya terminado, usa un prompt como el siguiente para verificar el resultado de la migración.

    ```text
    Me gustaría construir la aplicación Blazor. Sigue las instrucciones.

    - Usa context7.
    - Construye la aplicación Blazor y verifica si la aplicación se construye correctamente.
    - Si la construcción de la aplicación falla, analiza los problemas y corrígelos.
    ```

   > **NOTA**:
   >
   > - Hasta que la construcción tenga éxito, itera este paso.
   > - Si la construcción sigue fallando, revisa los mensajes de error y pregúntales al Agente GitHub Copilot para resolverlos.

1. Haz clic en el botón ![imagen del botón keep](https://img.shields.io/badge/keep-blue) de GitHub Copilot para tomar los cambios.
1. Una vez que la construcción tenga éxito, usa un prompt como el siguiente para verificar el resultado de la migración.

    ```text
    Me gustaría ejecutar la aplicación Blazor. Sigue las instrucciones.

    - Usa context7.
    - Ejecuta esta aplicación Blazor y verifica si la aplicación se ejecuta correctamente.
    - Ignora el error de conexión de la aplicación API backend en esta etapa.
    - Si la ejecución de la aplicación falla, analiza los problemas y corrígelos.
    ```

### Verificar Aplicación Frontend Blazor

1. Asegúrate de que la aplicación backend Spring Boot esté funcionando.

    ```text
    Ejecuta la API backend Spring Boot, que se encuentra en el directorio `java`.
    ```

1. Haz clic en el botón ![imagen del botón keep](https://img.shields.io/badge/keep-blue) de GitHub Copilot para tomar los cambios.
1. Verifica si está construida correctamente o no.

    ```text
    Ejecuta la aplicación Blazor y verifica si la aplicación se está ejecutando correctamente.

    Si la ejecución de la aplicación falla, analiza los problemas y corrígelos.
    ```

1. Abre un navegador web y navega a `http://localhost:3031`.
1. Verifica si tanto las aplicaciones frontend como backend están funcionando correctamente.
1. Haz clic en el botón ![imagen del botón keep](https://img.shields.io/badge/keep-blue) de GitHub Copilot para tomar los cambios.

---

Bien. Has completado el paso ".NET". Vamos al [PASO 05: Contenedorización](./05-containerization.md).

---

**Disclaimer**: Este documento ha sido localizado por [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Por lo tanto, puede contener errores. Si encuentras alguna traducción que sea inapropiada o errónea, por favor crea un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
