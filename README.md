# Clínica Vida Plena — Site

Site institucional da Clínica Vida Plena (Talatona, Luanda).
Desenvolvido pela DDA-Web.

## Stack
- React + Vite + TypeScript
- Tailwind CSS v4
- wouter (routing)
- lucide-react (ícones)

## Como rodar localmente
```
npm install
npm run dev
```

## Build para produção
```
npm run build
```
Gera a pasta `dist/`, pronta para deploy na Vercel.

## Deploy na Vercel
1. Subir este repositório para o GitHub
2. Conectar o repositório na Vercel
3. Vercel deteta automaticamente o `vercel.json` e faz o build
4. Configurar domínio próprio (opcional)

## Páginas
- `/` — Home
- `/especialidades` — Especialidades médicas
- `/sobre` — Sobre a clínica
- `/contacto` — Contacto e marcação de consulta

## Personalização rápida
- Cores: `client/src/index.css` (variáveis `--accent`, `--secondary`)
- Contactos: substituir `+244923000000` e `geral@vidaplena.ao` em todas as páginas
- Logo: actualmente é texto "+" — substituir por imagem em `Navigation.tsx` e `Footer.tsx`
