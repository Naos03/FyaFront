# **Requerimientos Frontend \- FyaFront**

## **Descripción General**

El objetivo es desarrollar una aplicación frontend (FyaFront) que permita registrar y consultar créditos, cumpliendo con los estándares de la prueba técnica de Fya Social Capital. La aplicación debe contar con una interfaz de usuario clara y funcional, e interactuar con el backend de forma segura y eficiente.

## **Tecnologías Requeridas**

> * Framework: Ionic (con compilación mediante Capacitor)  
> * Despliegue Móvil: Compilación a Android App Bundle (.aab) o .apk  
> * Interacciones asíncronas y consumo de API.

## **Módulos y Funcionalidades**

### **1\. Módulo de Registro de Créditos**

Debe implementarse un formulario que permita al usuario ingresar la información del crédito y contar con un botón claro y funcional para "Registrar".

| Campo | Tipo/Validación   |
| :---- | :---- |
| Nombre del cliente | Texto, obligatorio |
| Cédula o ID | Alfanumérico, obligatorio |
| Valor del crédito | Numérico, obligatorio (validar monto positivo) |
| Tasa de interés | Numérico (porcentaje), obligatorio |
| Plazo en meses | Numérico (entero), obligatorio |
| Comercial que registra el crédito | Texto, obligatorio |

### **2\. Módulo de Consulta de Créditos**

Debe mostrarse una tabla con todos los créditos previamente registrados.

> * **Filtros:** Permitir búsqueda por nombre del cliente, ID, o nombre del comercial.  
> * **Ordenamiento:** La tabla debe permitir ordenar los resultados por fecha de registro o valor del crédito.

### **3\. Seguridad y Validaciones (Opcionales pero Valorados)**

> * Implementación de validación de datos en tiempo real en los formularios del frontend.  
> * Manejo seguro de la sesión utilizando JWT (JSON Web Tokens) para acceder a los módulos de registro y consulta.  
> * Escapar adecuadamente las entradas para prevenir posibles inyecciones.

## **Requisitos de Entrega**

> * El código fuente debe estar alojado en un repositorio de GitHub dedicado exclusivamente al frontend.  
> * Debe incluir un archivo README.md con instrucciones claras para la ejecución del proyecto local.  
> * Debe incluir un archivo AGENTS.md detallando el uso de herramientas de IA durante el desarrollo.  
> * Proporcionar el archivo .aab o .apk generado para la evaluación móvil.  
> * (Opcional, suma puntos) Enlace al deploy del frontend.