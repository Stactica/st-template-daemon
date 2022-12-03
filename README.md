# ST Template Daemon

## Requirements

- Docker
- NodeJS

## Install

```bash
npm install
docker compose pull
```

## Run

```bash
docker compose up -d mongo
npm run dev
```

## Build

```bash
npm run build
```

## Migrations

```bash
npx prisma migrate dev --name init
```

## Seeds

```bash
npm run seed
```

## Test

```bash
npm test
```
