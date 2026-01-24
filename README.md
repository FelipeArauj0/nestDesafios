# 🧠 NestJS Desafios

Repositório criado para armazenar **desafios práticos e exercícios** desenvolvidos durante meus estudos de **NestJS**, tanto no curso quanto nos desafios feitos em conjunto aqui com o ChatGPT.

O objetivo deste repositório é consolidar o aprendizado através da prática, aplicando conceitos reais de backend e organização de código.

---

## 📂 Estrutura do repositório

Cada pasta representa um desafio ou mini-projeto independente:

```
    nestDesafios/
    ├── desafio-chat/
    │ ├── src/
    │ ├── README.md (opcional)
    │ └── ...
```

---

## 🚀 Desafios já realizados

### ✅ Desafio 01 – CRUD de Recados
**Conceitos praticados:**
- Estrutura básica do NestJS
- Controllers e Services
- CRUD (Create, Read, Update, Delete)
- DTOs (Data Transfer Objects)
- Validação com `class-validator`
- `ValidationPipe` global
- Tratamento de erros (`NotFoundException`, `BadRequest`)
- Boas práticas de tipagem (evitando `any`)

📁 Pasta: `desafio-chat`

---

# 🚀 Desafio 02 — Autenticação Simples com NestJS

## 📌 Objetivo

Construir uma API REST utilizando **NestJS**, **TypeORM** e **PostgreSQL**, implementando um **fluxo básico de autenticação** com cadastro de usuários, login e proteção de rotas utilizando **JWT**.

Este desafio tem como foco praticar:
- DTOs e validação de entrada
- Entities com TypeORM
- Regras de negócio
- Autenticação com JWT
- Proteção de rotas com Guards

---

## 🧠 Conceitos praticados

- Arquitetura de módulos no NestJS
- DTOs (`class-validator`)
- Entities e sincronização com banco de dados
- Hash de senha
- Login e autenticação
- JWT e Guards
- Boas práticas de API REST

---

## 🛠️ Tecnologias utilizadas

- Node.js
- NestJS
- TypeORM
- PostgreSQL
- class-validator
- class-transformer
- JWT
- bcrypt

---

## 📁 Estrutura esperada do projeto

```
    src/
    ├── auth/
    │ ├── auth.controller.ts
    │ ├── auth.service.ts
    │ ├── auth.module.ts
    │ ├── dto/
    │ │ └── login.dto.ts
    │ └── jwt.strategy.ts
    │
    ├── users/
    │ ├── users.controller.ts
    │ ├── users.service.ts
    │ ├── users.module.ts
    │ ├── dto/
    │ │ └── create-user.dto.ts
    │ └── entities/
    │ └── user.entity.ts
    │
    ├── app.module.ts
    └── main.ts
```

---

## 🧩 Requisitos do desafio

### 🔐 Usuário (User)

#### Entity: `User`
O sistema deve possuir uma entidade de usuário com os seguintes campos:

- `id` (gerado automaticamente)
- `email` (único)
- `password` (senha criptografada)
- `createdAt` (data de criação automática)

---

### 📦 DTOs

#### `CreateUserDto`
- `email`: string (obrigatório, formato de email válido)
- `password`: string (obrigatório, mínimo de 6 caracteres)

#### `LoginDto`
- `email`: string (obrigatório)
- `password`: string (obrigatório)

---

## 📌 Regras de negócio

### ➕ Cadastro de usuário
**Rota:** `POST /users`

- Deve criar um novo usuário
- O email deve ser único
- A senha deve ser salva com **hash**
- A resposta **não deve retornar a senha**

---

### 🔑 Login
**Rota:** `POST /auth/login`

- Recebe email e senha
- Valida se o usuário existe
- Valida se a senha está correta
- Retorna um **JWT token**

Exemplo de resposta:
```json
{
  "access_token": "jwt_token_aqui"
}

```
---

## 🔒 Rota protegida

Criar pelo menos uma rota protegida por JWT.

Exemplo:

```
    GET /profile
```

Só pode ser acessada com token válido

Deve retornar os dados do usuário autenticado

## 🔐 Autenticação

* Utilizar JWT

* Criar um AuthGuard

* Token deve ser enviado via header:
```
    Authorization: Bearer <token>
```

## ⚙️ Configurações obrigatórias

* Usar ValidationPipe global

* Usar whitelist: true

* Usar forbidNonWhitelisted: true

* Usar transform: true

## 🧪 Testes esperados

* Criar usuário com dados válidos

* Não permitir cadastro com email * duplicado

* Não permitir login com senha incorreta

* Login retorna token válido

* Rota protegida retorna erro 401 sem token

* Rota protegida funciona com token válido

## 🚫 O que NÃO deve ser feito

* Não salvar senha em texto puro

* Não retornar senha em nenhuma resposta

* Não usar any nos DTOs

* Não ignorar validações

## 📚 Extras (opcional)

* Criar DTO de resposta

* Criar decorator para pegar usuário logado

* Separar melhor as responsabilidades dos módulos

## 🏁 Critério de conclusão

O desafio será considerado concluído quando:

* Todas as rotas funcionarem corretamente

* As validações estiverem ativas

* O fluxo de autenticação estiver funcional

* O código estiver organizado e legível

## 🛠️ Tecnologias utilizadas

- Node.js
- NestJS
- TypeScript
- class-validator
- class-transformer
- Git & GitHub

---

## 🎯 Objetivo do repositório

- Praticar NestJS de forma progressiva
- Criar uma base sólida de backend
- Manter um histórico público de evolução
- Servir como material de estudo e portfólio

---

## 📌 Observações

Este repositório é focado em **aprendizado**, portanto os projetos podem evoluir ou ser refatorados conforme novos conceitos forem estudados.

---

👨‍💻 Desenvolvido por **Felipe Araújo**
