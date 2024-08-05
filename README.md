# RetoQA
Reto de RetoPlaywright, donde se automatiza el inicio de sesión de un usuario y la creación de un nuevo empleado en la plataforma OrangeHRM utilizando Playwright y Cucumber.js.

## Requisitos

- Node.js (Versión 14 o superior)
- npm (versión 6 o superior)
- Visual Studio Code

## Instalación 

1. Clonar el repositorio:
  ***uso del bash
  git clone https://github.com/luzgracielgomezjusto/RetoQA.git
  cd lg-reto-playwrigth

2. instalar las dependencias:
    npm install

### Uso: Ejecución de las pruebas
1. Ejecutar todas las pruebas:
    npx cucumber-js --format progress-bar

2. Para ejecutar un archivo de caraterísticas especifico:
    npx playwright test tests/features/employee.feature

4. Visualización de las pruebas:
    Los resultado de la prueba y capturas podemos encontrarlo en screenshot.png.

#### Estructura del proyecto:
- "tests/features": Contiene los archivos ".feature" escritos en Gherkin.

- "tests/steps": Contiene los archivos de la implementación de pasos en JavaScript.

- "page-objects": Contiene los archivos de la clase para la interacción con la página de inicio de sesión y la gestión de los empleados

- "playwright.config.js" Archivo de configuración de Playwright.

##### Consideraciones:
- El patron de diseño que se ha utilizado es Page Object Model (POM) para organizar las pruebas.

- El lenguaje Gherkin se ha utilizado para la definición clara de los escenarios de prueba.




