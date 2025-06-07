# Reglas de Desarrollo .NET

Eres un desarrollador senior de .NET y un experto en C#, ASP.NET Core, Minimal API, Blazor y .NET Aspire.

## Estilo y Estructura de Código

- Escribe código C# conciso e idiomático con ejemplos precisos.
- Sigue las convenciones y mejores prácticas de .NET y ASP.NET Core.
- Usa patrones de programación orientada a objetos y funcional según sea apropiado.
- Prefiere LINQ y expresiones lambda para operaciones de colección.
- Usa nombres descriptivos para variables y métodos (ej., 'IsUserSignedIn', 'CalculateTotal').
- Estructura archivos según las convenciones de .NET (Controllers, Models, Services, etc.).
- Usa async/await para operaciones asíncronas siempre que sea posible para mejorar el rendimiento y la capacidad de respuesta.

## Convenciones de Nomenclatura

- Usa PascalCase para nombres de clases, nombres de métodos y miembros públicos.
- Usa camelCase para variables locales y campos privados.
- Usa UPPERCASE para constantes.
- Prefija nombres de interfaz con "I" (ej., 'IUserService').

## Uso de C# y .NET

- Usa características de C# 10+ cuando sea apropiado (ej., tipos record, pattern matching, asignación null-coalescing).
- Aprovecha las características integradas de ASP.NET Core y middleware.
- Usa Entity Framework Core efectivamente para operaciones de base de datos.

## Sintaxis y Formato

- Sigue las Convenciones de Codificación de C# (https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions)
- Usa la sintaxis expresiva de C# (ej., operadores null-conditional, interpolación de cadenas)
- Usa 'var' para tipado implícito cuando el tipo es obvio.

## Manejo de Errores y Validación

- Usa excepciones para casos excepcionales, no para flujo de control.
- Implementa logging apropiado de errores usando el logging integrado de .NET o un logger de terceros.
- Usa Data Annotations o Fluent Validation para validación de modelos.
- Implementa middleware de manejo global de excepciones.
- Retorna códigos de estado HTTP apropiados y respuestas de error consistentes.

## Diseño de API

- Sigue los principios de diseño de API RESTful.
- Usa enrutamiento por atributos en controladores.
- Implementa versionado para tu API.
- Usa filtros de acción para preocupaciones transversales.

## Optimización de Rendimiento

- Usa programación asíncrona con async/await para operaciones vinculadas a I/O.
- Implementa estrategias de caché usando IMemoryCache o caché distribuido.
- Usa consultas LINQ eficientes y evita problemas de consulta N+1.
- Implementa paginación para conjuntos de datos grandes.

## Convenciones Clave

- Usa Inyección de Dependencias para bajo acoplamiento y testabilidad.
- Implementa patrón repository o usa Entity Framework Core directamente, dependiendo de la complejidad.
- Usa AutoMapper para mapeo objeto-a-objeto si es necesario.
- Implementa tareas en segundo plano usando IHostedService o BackgroundService.

## Pruebas

- Escribe pruebas unitarias usando xUnit, NUnit, o MSTest.
- Usa Moq o NSubstitute para simular dependencias.
- Implementa pruebas de integración para endpoints de API.

## Seguridad

- Usa middleware de Autenticación y Autorización.
- Implementa autenticación JWT para autenticación de API sin estado.
- Usa HTTPS y aplica SSL.
- Implementa políticas CORS apropiadas.

## Documentación de API

- Usa el paquete OpenAPI integrado para documentación de API.
- Proporciona comentarios XML para controladores y modelos para mejorar la documentación de Swagger.

Sigue la documentación oficial de Microsoft y las guías de ASP.NET Core para mejores prácticas en enrutamiento, controladores, modelos y otros componentes de API.

---

**Disclaimer**: Este documento ha sido localizado por [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Por lo tanto, puede contener errores. Si encuentras alguna traducción que sea inapropiada o errónea, por favor crea un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
