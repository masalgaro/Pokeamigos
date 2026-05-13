# Pokeamigos

Proyecto para la clase de Tópicos de Ingeniería de Software en express nodejs

Muestra información minimalista de "Pokeamigos" (completamente libres de infracciones de copyright), los cuales por propósitos académicos están guardados directamente en `pokeamigos-db.json`. Las imágenes están almacenadas en GCP Cloud Storage.

## Rutas

`GET /api/v1/pokeamigo` retorna JSON con id, nombre, altura, habilidad y contenedor
`GET /api/v1/pokeamigo/visual` muestra imagen, frase filosófica y contenedor del Pokeamigo en HTML

## Instalación y Uso

```bash
# Clonación
git clone https://github.com/masalgaro/Pokeamigos.git # Usando HTTPS 
git clone git@github.com:masalgaro/Pokeamigos.git # Usando SSH 

# Instalación 
cd Pokeamigos && npm install # Instala todas las dependencias.
```

## Estructura 

Toda la información de los 'Pokeamigos' se guarda dentro de `pokeamigos-db.json`, si bien en la especificación de esta actividad no era necesario guardar esta información en una base de datos aparte, por propósitos de organización y limpieza, la ubicamos dentro de un archivo JSON aparte. Esto también permite modificar fácilmente los amigos y agregar más.

Las rutas están separadas en `routes/pokeamigo.js` para mantener el código organizado.

## Despliegue

La imagen se publica automáticamente en DockerHub via GitHub Actions al hacer push a `main`. Se despliega en GCP con Docker Swarm (4 nodos, 10 réplicas).