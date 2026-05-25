# CV web Laura Peña

Sitio HTML/CSS/JS construido a partir del PDF original.

## Cómo usarlo

1. Abre `index.html` en tu navegador.
2. Para publicarlo, sube todo el contenido de esta carpeta a tu hosting.
3. Mantén la carpeta `assets/` junto a `index.html`, porque ahí está el retrato.

## Archivos

- `index.html`: estructura de la página.
- `styles.css`: dirección visual, responsive y marquesinas de scroll infinito.
- `script.js`: animación de aparición al hacer scroll.
- `assets/laura-portrait.webp`: retrato extraído del PDF.
- `assets/reference-page-1.jpg` y `assets/reference-page-2.jpg`: referencias visuales del PDF para comparar.

## Nota

El PDF original venía rasterizado, así que algunos textos pequeños de logros fueron recreados y limpiados para que funcionen mejor en web.


Actualización: se agregó Zelva Inc como experiencia actual, se removió “Conoce mi trabajo” y se dejó “Volver al cielo” como botón flotante.

## Cómo poner tu GIF en el espacio de la foto principal

1. Guarda tu GIF dentro de la carpeta `assets/`.
2. Ponle un nombre simple, por ejemplo: `laura-gif.gif`.
3. Abre `index.html`.
4. Busca esta línea:

```html
<img src="assets/laura-portrait.webp" alt="Espacio para GIF principal de Laura Peña" />
```

5. Cámbiala por:

```html
<img src="assets/laura-gif.gif" alt="GIF principal de Laura Peña" />
```

No necesitas tocar el CSS: el espacio circular ya quedó preparado para imagen o GIF.

Actualización 2: se quitó el botón “Para atrás” y el retrato principal quedó listo como espacio para reemplazar por GIF.
