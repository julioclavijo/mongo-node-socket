# Aplicación de Notas

Esta es una aplicación simple de notas que utiliza Node.js, Socket.io y MongoDB.

## Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/julioclavijo/mongo-node-socket
```

2. Instala las dependencias:

```bash
cd tu_repositorio
npm install
```

## Configuración

Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables de entorno:

```
MONGODB_URI=tu_uri_de_MongoDB
```

## Uso

1. Inicia el servidor:

```bash
npm run dev
```

2. Abre tu navegador y visita [http://localhost:3000](http://localhost:3000).

## Funcionalidades

- **Agregar Nota**: Agrega una nueva nota con un título y una descripción.
- **Eliminar Nota**: Elimina una nota existente haciendo clic en el botón "Eliminar".
- **Editar Nota**: Haz clic en una nota para cargarla en el formulario y editarla.
- **Sincronización en tiempo real**: La aplicación utiliza Socket.io para actualizar las notas en tiempo real entre múltiples clientes.

## Tecnologías Utilizadas

- **Express**: Para el manejo del servidor.
- **Socket.io**: Para la comunicación en tiempo real entre el cliente y el servidor.
- **MongoDB**: Base de datos NoSQL utilizada para almacenar las notas.
- **Spectre.css**: Framework CSS utilizado para el diseño de la aplicación.

## Captura de pantalla
![](/doc/img/captura-pantalla-notas.png)

## Licencia
MIT
Vea [LICENSE](/LICENSE.txt) para más información.