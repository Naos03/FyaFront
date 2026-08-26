# FyaFront - Aplicación Móvil de Créditos

Aplicación móvil híbrida desarrollada con **Ionic y Angular** para la gestión y registro de créditos de **Fya Social Capital**. Está preparada para compilarse nativamente para Android mediante App Bundles (.aab).

## Tecnologías y Herramientas

- **Ionic Framework** (Componentes UI nativos)
- **Angular** (Lógica, enrutamiento, standalone components)
- **Capacitor** (Puente nativo para compilar en Android)
- **Reactive Forms** (Validación dinámica de formularios)

## Características Principales

1. **Interfaz Intuitiva:** Listado de créditos y formulario de registro utilizando la librería visual de Ionic.
2. **Validación de Formularios Reactivos:**
   - Nombre (mínimo 3 caracteres).
   - Cédula (6 a 10 dígitos numéricos).
   - Monto mínimo y validación estricta de rangos para la tasa de interés y los plazos.
3. **Consumo de API Seguro:** Integración con el backend a través de `HttpClient`, inyectando cabeceras de autorización (`Bearer Token`) en cada petición HTTP.
4. **Despliegue Nativo:** Configurado con Android Studio y Capacitor para la generación de empaquetados oficiales para la Play Store.

## Compilación para Android (.aab / .apk)

Para generar el archivo instalable o de producción, ejecuta los siguientes comandos en la raíz del proyecto:

1. `ionic build` (Compila los assets web)
2. `npx cap sync android` (Sincroniza los archivos con la plataforma móvil)
3. `npx cap open android` (Abre Android Studio para compilar y firmar el APK/AAB)
