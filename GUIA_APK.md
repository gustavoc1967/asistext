# AsistEXT — Publicar en tu teléfono (usuario gustavoc1967)

## Archivos de este kit
index.html · sw.js · manifest.json · jsbarcode.all.min.js · icon-192/512/maskable-512.png · privacidad.html

## PASO 1 — Crear el repositorio (una sola vez)
1. Entrá a **https://github.com/new** (con tu sesión iniciada).
2. **Repository name:** `asistext`  · marcá **Public** · **no** agregues README.
3. **Create repository**.

## PASO 2 — Subir los archivos
1. **Add file → Upload files**.
2. Arrastrá **todos los archivos sueltos** de esta carpeta (no la carpeta).
3. **Commit changes**.
   *(Al subir así, GitHub crea la rama `main`. Importante para el paso siguiente.)*

## PASO 3 — Activar la publicación
1. **Settings** → menú izquierdo → **Pages**.
2. **Source:** "Deploy from a branch".
3. **Branch:** primer desplegable **`main`** (NO `root`) · segundo **`/ (root)`**.
4. **Save** y esperá 1–2 minutos.
5. Tu app queda en: `https://gustavoc1967.github.io/asistext/`

## PASO 4 — Instalar en el teléfono (sin costo)
1. Abrí esa dirección en **Chrome** (Android). Probala en **incógnito** la primera
   vez para evitar cachés viejas.
2. Menú **⋮** → **Instalar app** / **Agregar a pantalla de inicio**.
3. Listo: ícono propio, pantalla completa y funcionamiento sin conexión.

## PASO 5 — APK (opcional, para compartir o Play Store)
1. **https://www.pwabuilder.com** → pegá tu dirección → **Android**.
2. *Package ID:* `py.upe.fcac.asistext` · *App name:* AsistEXT · **Signing key:** Create new.
3. **Download** → el `*-signed.apk` se instala en el teléfono; guardá el keystore.
4. Si aparece la barra del navegador: subí `assetlinks.json` a la carpeta
   `.well-known/` del repo (ver la guía general).

## Regla de oro
**Cada app en su propio repositorio.** Nunca dos apps en la misma dirección:
el navegador mezcla las versiones guardadas y te muestra la equivocada.

| App | Repositorio | Dirección |
|---|---|---|
| AsistEXT | asistext | https://gustavoc1967.github.io/asistext/ |
| AsistClase | asistclase | https://gustavoc1967.github.io/asistclase/ |
| CarnetEXT | carnetext | https://gustavoc1967.github.io/carnetext/ |
| CertEXT | certext | https://gustavoc1967.github.io/certext/ |
