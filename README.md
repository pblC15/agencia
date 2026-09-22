# Agência Goolbe

## Executar a agência
```bash
npm install
npm run dev
```

A agência usa por padrão `http://localhost:5173`.

## Demonstrações locais dos projetos
Os cards estão configurados para abrir as demonstrações em outra aba:

- Panela Cheia: `http://localhost:5174`
- Camila Nutri Esportiva: `http://localhost:5175`
- Matheus Fernandes Advocacia: `http://localhost:5176`
- Dr. Rodrigo Leite: `http://localhost:5177`

Cada demonstração precisa estar sendo servida na porta correspondente. Se os projetos forem sites estáticos, você pode usar, dentro da pasta de cada projeto, por exemplo:

```bash
npx serve . -l 5174
```

Troque a porta para 5175, 5176 ou 5177 conforme o projeto. Se o projeto usar Vite, use `npm run dev -- --port 5174` (ajustando a porta).

Quando publicar os projetos, altere apenas `demoUrl` em `src/data.ts` para a URL real/subdomínio.

## Build
```bash
npm run build
```
