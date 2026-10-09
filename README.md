# Liga Refriclube — Página de vendas

Landing page de vendas da **Liga Refriclube** (Turma Fundadora), feita com Next.js 14 + TypeScript + Tailwind + Framer Motion + Lenis. Página 100% estática (SSG), pronta para GitHub + Vercel.

## 1. Como rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

Build de produção:

```bash
npm run build
npm start
```

## 2. Onde editar preço, link, bonés e IDs de pixel

Tudo fica em **`config/site.ts`**:

| Campo | O que é |
|---|---|
| `checkoutUrl` | Link da Hotmart |
| `precoAvista` / `parcelas` | Preço exibido |
| `garantiaDias` | Dias de garantia (7) |
| `boneVagas` / `boneVagasRestantes` | Total e restantes (atualizar manualmente — **nunca** simular contagem) |
| `prazoOferta` | Data ISO para ativar o contador. `null` = **sem contador** |
| `instagram` | Perfil do Tiago |
| `whatsappDuvidas` | Link wa.me (vazio = usa fallback) |
| `metaPixelId` / `ga4Id` | IDs de rastreamento (vazio = não carrega) |
| `siteUrl` | URL pública (atualizar após o domínio) |

UTMs (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `src`, `sck`) são repassadas automaticamente ao checkout — ver `lib/checkout.ts`.

## 3. Onde colocar as fotos

Coloque os arquivos em `public/images/`:

- `bone.png` — foto do boné do Refriclube (de preferência com fundo removido)
- `tiago.jpg` — foto do Tiago (retrato vertical)
- `refriclube-app.png` — print do Refriclube no celular
- `logo-refriclube.svg` — logo (opcional)

Enquanto as fotos não existirem, **nada é exibido no lugar delas** (sem placeholder): a seção do Tiago mostra só o texto centralizado e a oferta mostra só o card de preço. Depois de colocar cada arquivo, ligue a flag correspondente em `config/site.ts`: `mostrarFotoTiago`, `mostrarFotoBone` ou `mostrarPrintApp` (todas começam em `false`).

## 4. Publicação: GitHub + Vercel

1. **Criar o repositório:**
   ```bash
   git add -A
   git commit -m "feat: landing page Liga Refriclube"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/liga-refriclube.git
   git push -u origin main
   ```
2. **Vercel:** em [vercel.com](https://vercel.com) → *Add New Project* → importe o repositório → **Deploy** (o framework Next.js é detectado sozinho, sem variável de ambiente).
3. **Domínio próprio:** no projeto da Vercel → *Settings → Domains* → adicione seu domínio e configure o DNS conforme instruído.
4. **Depois do domínio:** atualize `siteUrl` em `config/site.ts` e faça novo commit/push.

## 5. Como atualizar a página depois

Edite → commit → push. A Vercel publica sozinha a cada push na `main`.

```bash
git add -A
git commit -m "update: ..."
git push
```

## Pendências ([AJUSTAR] / TODO)

- [ ] Confirmar preço (R$ 947 à vista / 12x R$ 97,94)
- [ ] Quantidade de bonés (20) e regra de frete/envio
- [ ] Nome e conteúdo do curso bônus de gestão
- [ ] Revisar texto "Quem está por trás" com a história real
- [ ] Métodos de pagamento habilitados na Hotmart (Pix/boleto)
- [ ] WhatsApp de dúvidas, Meta Pixel ID, GA4 ID
- [ ] Cores oficiais do Refriclube (se existirem)
- [ ] Fotos reais em `public/images/`
- [ ] Termos de Uso / Privacidade (se existirem)
- [ ] `siteUrl` final após o domínio
