# Pokeamigos
Proyecto para la clase de Tópicos de Ingeniería de Software en express nodejs

Muestra información minimalista de "Pokeamigos" (completamente libres de infracciones de copyright), los cuales por propósitos académicos están guardados directamente en `pokeamigos-db.json`.

## Instalación y Uso

Se pretende crear una imagen propia de Docker para la aplicación, y desplegarla en GCP. Pero hasta ese momento, la Instalación se hace de forma local, con dos simples pasos.

```bash
# Clonación
git clone https://github.com/masalgaro/Pokeamigos.git # Usando HTTPS 
git clone git@github.com:masalgaro/Pokeamigos.git # Usando SSH 

# Instalación 
cd Pokeamigos && npm install # Instala todas las dependencias.
```

## Estructura 

Toda la información de los 'Pokeamigos' se guarda dentro de `pokeamigos-db.json`, si bien en la especificación de esta actividad no era necesario guardar esta información en una base de datos aparte, por propósitos de organización y limpieza, la ubicamos dentro de un archivo JSON aparte. Esto también permite modificar fácilmente los amigos y agregar más.
