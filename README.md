# Proyecto React Native

Este es un proyecto móvil creado con [**React Native CLI**](https://github.com/react-native-community/cli), compatible con Android e iOS. Este repositorio contiene todo el código fuente necesario para correr la app localmente, me siento en el deber de mencionar que no fue creado con expo que es el framework de react native.

---

## Requisitos Previos

Antes de ejecutar el proyecto, es **obligatorio** configurar correctamente el ambiente de desarrollo. Sigue los siguientes pasos:

### 1. Instalar Android Studio

[Descargar Android Studio](https://developer.android.com/studio)

Durante la instalación, selecciona la opción **"Standard"**. Asegúrate de tener instalados:

- Android SDK
- Android SDK Build-Tools
- Platform Tools
- Android Emulator
- Android 13 (API 33) o superior

> Luego, abre Android Studio, crea un emulador desde el **AVD Manager**, o conecta un celular real con "Depuración USB" habilitada.

---

### 2. Instalar Node.js, Git y Java

- [Node.js LTS](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- Java JDK 11 o superior (generalmente se instala con Android Studio)

---

### 3. Instalar dependencias y correr proyecto

Abre una terminal y ejecuta:

```bash
yarn install
npm run android
