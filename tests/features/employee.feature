Feature: Gestión de empleados en OrangeHRM

    Scenario: Inicio de sesión exitoso
        Given el usuario está en la página de inicio de sesión
        When el usuario ingresa el nombre del usuario "Admin" y la contraseña "admin123"
        Then el usuario debería ver la página de Dashboard
    


    Scenario: Creación de un nuevo empleado
    Given el usuario ha iniciado sesión correctamente
    When el usuario navega a la página de PIM
    And el usuario agrega un nuevo empleado con nombre "Lucia" y apellido "Gomez"
    Then el usuario debería ver "Lucia Gomez" en la lista de empleados