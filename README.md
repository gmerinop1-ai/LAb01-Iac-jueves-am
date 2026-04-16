# LAb01-Iac-jueves-am

tengo disponieble un documento index.html. Es una pagina que tiene como contenido WEB01.
Quiero desplegar esta pagina en el puerto 4001

## Ejecucion con Docker

### WEB01 en puerto 4001

```bash
docker build -t web01-image ./src/web01
docker run -d --name web01 -p 4001:80 web01-image
```

### WEB02 en puerto 4002

```bash
docker build -t web02-image ./src/web02
docker run -d --name web02 -p 4002:80 web02-image
```

### Verificar

```bash
curl http://localhost:4001
curl http://localhost:4002
```