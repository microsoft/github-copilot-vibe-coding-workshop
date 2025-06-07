# 02: Desarrollo Frontend JavaScript

## Escenario

Contoso es una empresa que vende productos para varias actividades al aire libre. El departamento de marketing de Contoso quiere lanzar un sitio web de redes sociales micro para promocionar sus productos a clientes existentes y potenciales.

Como desarrollador JavaScript, vas a construir una aplicación frontend JavaScript usando React comunicándose con la aplicación API backend Python.

## Prerrequisitos

Consulta el documento [README](../README.md) para la preparación.

## Comenzando

- [Verificar Modo Agente de GitHub Copilot](#verificar-modo-agente-de-github-copilot)
- [Preparar Instrucciones Personalizadas](#preparar-instrucciones-personalizadas)
- [Preparar Proyecto de Aplicación](#preparar-proyecto-de-aplicación)
- [Preparar Servidor MCP Figma](#preparar-servidor-mcp-figma)
- [Generar Componentes UI desde Figma](#generar-componentes-ui-desde-figma)
- [Ejecutar Aplicación Backend FastAPI](#ejecutar-aplicación-backend-fastapi)
- [Construir Aplicación Frontend React](#construir-aplicación-frontend-react)
- [Verificar Aplicación Frontend React](#verificar-aplicación-frontend-react)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/javascript/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/javascript/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### Preparar Proyecto de Aplicación

1. Asegúrate de estar usando el Modo Agente de GitHub Copilot con el modelo `Claude Sonnet 4` o `GPT-4.1`.
1. Asegúrate de que el servidor MCP `context7` esté funcionando.
1. Usa un prompt como el siguiente para crear un proyecto de aplicación web React.

    ```text
    Me gustaría crear un andamio para una aplicación web React. Sigue las instrucciones a continuación.
    
    - Asegúrate de que sea la aplicación web, no la aplicación móvil.
    - Tu directorio de trabajo es `javascript`.
    - Identifica primero todos los pasos que vas a hacer.
    - Usa ViteJS como el framework de la aplicación frontend.
    - Usa configuraciones predeterminadas al inicializar el proyecto.
    - Usa `SimpleSocialMediaApplication` como el nombre del proyecto al inicializar.
    - Usa el número de puerto `3000`.
    - Solo inicializa el proyecto. NO vayas más allá.
    ```

1. Haz clic en el botón ![imagen del botón "keep"](https://img.shields.io/badge/keep-blue) de GitHub Copilot para tomar los cambios.

### Preparar Servidor MCP Figma

1. Asegúrate de haber configurado [Servidores MCP](./00-setup.md#configurar-servidores-mcp).
1. Obtén el token de acceso personal (PAT) de [Figma](https://www.figma.com/).
1. Abre la Paleta de Comandos presionando F1 o `Ctrl`+`Shift`+`P` en Windows o `Cmd`+`Shift`+`P` en Mac OS, y busca `MCP: List Servers`.
1. Elige `Framelink Figma MCP` y luego haz clic en `Start Server`.
1. Ingresa el PAT que obtuviste de Figma.

### Generar Componentes UI desde Figma

1. Asegúrate de estar usando el Modo Agente de GitHub Copilot con el modelo `Claude Sonnet 4` o `GPT-4.1`.
1. Asegúrate de estar ejecutando el servidor MCP Figma.
1. Copia la [plantilla de diseño Figma](https://www.figma.com/community/file/1495954632647006209) a tu cuenta.

   ![Página de plantilla de diseño Figma](../../../docs/images/javascript-01.png)

1. Haz clic derecho en cada sección - `Home`, `Search`, `Post Details`, `Post Modal` y `Name Input Modal` 👉 Selecciona `Copy/Paste as` 👉 Selecciona `Copy link to selection` para obtener el enlace a cada sección. Toma nota de los cinco enlaces.

### Ejecutar Aplicación Backend FastAPI

1. Asegúrate de que la aplicación backend FastAPI esté funcionando.

    ```text
    Ejecuta la API backend FastAPI, que se encuentra en el directorio `python`.
    ```

   > **NOTA**: Puedes usar la aplicación de muestra [`complete/python`](../complete/python/) en su lugar.

1. Si usas GitHub Codespaces, asegúrate de que el número de puerto `8000` esté configurado como `público` en lugar de `privado`. De lo contrario, obtendrás el error `401` al acceder desde la aplicación frontend.

### Construir Aplicación Frontend React

1. Asegúrate de estar usando el Modo Agente de GitHub Copilot con el modelo `Claude Sonnet 4` o `GPT-4.1`.
1. Asegúrate de que el servidor MCP `context7` esté funcionando.
1. Asegúrate de tener todos los enlaces de sección Figma de 5 obtenidos de la [sección anterior](#generar-componentes-ui-desde-figma).
1. Agrega [`product-requirements.md`](../product-requirements.md) y [`openapi.yaml`](../openapi.yaml) a GitHub Copilot.
1. Usa un prompt como el siguiente para construir la aplicación basada en los requisitos y el documento OpenAPI.

    ```text
    Me gustaría construir una aplicación web React. Sigue las instrucciones a continuación.
    
    - Tu directorio de trabajo es `javascript`.
    - Identifica primero todos los pasos que vas a hacer.
    - Hay una aplicación API backend ejecutándose en `http://localhost:8000`.
    - Usa `openapi.yaml` que describe todos los endpoints y esquema de datos.
    - Usa el número de puerto `3000`.
    - Crea todos los componentes UI definidos en este enlace: {{FIGMA_SECTION_LINK}}.
    - NO agregues nada no relacionado con los componentes UI.
    - NO agregues nada no definido en `openapi.yaml`.
    - NO modifiques nada definido en `openapi.yaml`.
    - Da indicación visual cuando la API backend no esté disponible o no sea alcanzable por cualquier razón.
    ```

1. Repite cuatro veces más para los otros cuatro enlaces de diseño Figma.
1. Haz clic en el botón ![imagen del botón "keep"](https://img.shields.io/badge/keep-blue) de GitHub Copilot para tomar los cambios.

### Verificar Aplicación Frontend React

1. Asegúrate de que la aplicación backend FastAPI esté funcionando.

    ```text
    Ejecuta la API backend FastAPI, que se encuentra en el directorio `python`.
    ```

1. Verifica si está construida correctamente o no.

    ```text
    Ejecuta la aplicación React y verifica si la aplicación se está ejecutando correctamente.

    Si la ejecución de la aplicación falla, analiza los problemas y corrígelos.
    ```

1. Abre un navegador web y navega a `http://localhost:3000`.
1. Verifica si tanto las aplicaciones frontend como backend están funcionando correctamente.
1. Haz clic en el botón `[keep]` de GitHub Copilot para tomar los cambios.

---

Bien. Has completado el paso "JavaScript". Vamos al [PASO 03: Migración Java desde Python](./03-java.md).

---

**Disclaimer**: Este documento ha sido localizado por [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Por lo tanto, puede contener errores. Si encuentras alguna traducción que sea inapropiada o errónea, por favor crea un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
