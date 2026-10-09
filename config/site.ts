export const site = {
  nome: "Liga Refriclube",
  checkoutUrl: "https://pay.hotmart.com/J107959357P",
  precoAvista: "R$ 947",
  precoAvistaCentavos: ",00",
  parcelas: "12x de R$ 97,94",
  garantiaDias: 7,
  boneVagas: 20, // quantidade total de bonés
  boneVagasRestantes: 20, // atualizar manualmente; NUNCA simular contagem
  prazoOferta: null as string | null, // ex: "2026-10-31T23:59:00-03:00" — se null, NÃO mostrar contador
  instagram: "https://instagram.com/tiagooliveiratecnico",
  instagramHandle: "@tiagooliveiratecnico",
  refriclubeUrl: "https://refriclube.app.br",
  // [AJUSTAR] WhatsApp para dúvidas — ex: "https://wa.me/55719XXXXXXXX?text=Tenho%20uma%20d%C3%BAvida%20sobre%20a%20Liga"
  whatsappDuvidas: "",
  metaPixelId: "", // [AJUSTAR] vazio = não carrega
  ga4Id: "", // [AJUSTAR] vazio = não carrega
  // [AJUSTAR] após o deploy/domínio
  siteUrl: "https://ligarefriclube.vercel.app",
} as const;

export type SiteConfig = typeof site;
