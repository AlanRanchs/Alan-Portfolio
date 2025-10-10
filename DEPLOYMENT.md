# 🚀 Guía de Despliegue en GitHub Pages

## Paso 1: Verificar que estés en la rama principal

```powershell
git branch
```

Deberías ver `* main` (la rama actual). Si no estás en main, cámbiate:

```powershell
git checkout main
```

## Paso 2: Agregar todos los cambios al staging

```powershell
git add .
```

## Paso 3: Hacer commit de los cambios

```powershell
git commit -m "Add portfolio with neobrutalism design and contact form"
```

Si es tu primer commit, Git podría pedirte configurar tu identidad:

```powershell
git config --global user.email "tu-email@gmail.com"
git config --global user.name "Tu Nombre"
```

Luego vuelve a intentar el commit.

## Paso 4: Subir los cambios a GitHub

```powershell
git push origin main
```

Si es la primera vez que haces push, Git podría pedirte autenticación.

## Paso 5: Desplegar a GitHub Pages

```powershell
npm run deploy
```

Este comando:
1. Ejecuta `npm run build` automáticamente (genera la carpeta `dist/`)
2. Crea/actualiza la rama `gh-pages`
3. Sube el contenido de `dist/` a la rama `gh-pages`

## Paso 6: Configurar GitHub Pages (solo la primera vez)

1. Ve a tu repositorio en GitHub: https://github.com/AlanRanchs/Alan-Portfolio
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click en **Save**

## Paso 7: Esperar el despliegue

GitHub Pages tardará 1-3 minutos en desplegar tu sitio. Puedes ver el progreso en:
- **Settings → Pages** (verás un mensaje "Your site is ready to be published" o "Your site is published")
- **Actions** tab (verás el workflow de despliegue)

## 🌐 Tu Portfolio Estará Disponible en:

```
https://alanranchs.github.io/Alan-Portfolio/
```

---

## 🔄 Para Futuras Actualizaciones

Cuando hagas cambios y quieras actualizar tu portfolio:

```powershell
# 1. Agregar cambios
git add .

# 2. Hacer commit
git commit -m "Descripción de los cambios"

# 3. Subir a GitHub
git push origin main

# 4. Desplegar
npm run deploy
```

---

## ⚠️ Solución de Problemas Comunes

### Error: "gh-pages is not recognized"

Instala gh-pages:
```powershell
npm install -D gh-pages
```

### Error: "Permission denied" al hacer push

Necesitas autenticar con GitHub. Opciones:
1. **Token de acceso personal**: Ve a GitHub → Settings → Developer settings → Personal access tokens
2. **GitHub CLI**: Instala GitHub CLI y ejecuta `gh auth login`

### El sitio no se actualiza

1. Limpia la caché del navegador (Ctrl + Shift + R)
2. Espera 2-3 minutos más
3. Verifica que el deploy se completó en la pestaña "Actions" de GitHub

### Error: "fatal: not a git repository"

Inicializa Git:
```powershell
git init
git remote add origin https://github.com/AlanRanchs/Alan-Portfolio.git
```

---

## ✅ Checklist de Verificación

Antes de desplegar, asegúrate de que:

- [ ] Todos los archivos están guardados
- [ ] El servidor de desarrollo funciona correctamente (`npm run dev`)
- [ ] No hay errores de TypeScript o ESLint
- [ ] El Access Key de Web3Forms está configurado en `ContactForm.tsx`
- [ ] Las rutas de las imágenes son correctas
- [ ] El `base` en `vite.config.ts` es `/Alan-Portfolio/`

---

## 📝 Comandos Útiles

```powershell
# Ver el estado de Git
git status

# Ver el historial de commits
git log --oneline

# Ver las ramas
git branch -a

# Construir localmente para probar
npm run build

# Previsualizar el build localmente
npm run preview
```

---

## 🎉 ¡Listo!

Una vez completados todos los pasos, tu portfolio estará en línea en:
**https://alanranchs.github.io/Alan-Portfolio/**

Compártelo en LinkedIn, tu CV, y donde quieras mostrar tu trabajo! 🚀
