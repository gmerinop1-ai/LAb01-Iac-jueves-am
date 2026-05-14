# Lab01 IaC Jueves AM

Despliegue de 3 contenedores con Docker + Terraform:

- `web` (nginx)
- `api` (node)
- `db` (postgres)

Se manejan 2 ambientes con workspaces de Terraform:

- `dev`
- `qa`

## Arquitectura de puertos

DEV:

- web-dev: `4001:80`
- api-dev: `4002:3000`
- db-dev: `4003:5432`

QA:

- web-qa: `5001:80`
- api-qa: `5002:3000`
- db-qa: `5003:5432`

## Prerrequisitos

- Docker instalado y en ejecucion
- Terraform instalado
- Estar en Linux con permisos para usar Docker


## 1) Construir imagenes

Desde la raiz del proyecto:

```bash
cd ~/LAb01-Iac-jueves-am

docker build -t lab/api .
docker build -t lab/web .
docker build -t lab/db .
```

## 2) Inicializar Terraform

```bash
cd iac
terraform init
```

## 3) Levantar ambiente DEV

```bash
terraform workspace new dev
terraform plan
terraform apply 
```

## 4) Verificar ambiente DEV

```bash
docker ps
curl http://localhost:4001
curl http://localhost:4002
nc -zv localhost 4003
```

## 5) Levantar ambiente QA

```bash
terraform workspace select qa || terraform workspace new qa
terraform plan 
terraform apply 

## 6) Verificar ambiente QA

```bash
docker ps
curl http://localhost:5001
curl http://localhost:5002
nc -zv localhost 5003
```

## 7) Comandos utiles

Ver workspace actual:

```bash
terraform workspace show
```

Listar workspaces:

```bash
terraform workspace list
```

Destruir recursos del workspace actual:

```bash
terraform destroy -var-file=terraform.tfvars
```