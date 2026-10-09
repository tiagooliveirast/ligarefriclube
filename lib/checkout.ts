import { site } from "@/config/site";

const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "src",
  "sck",
] as const;

/**
 * Monta a URL de checkout da Hotmart repassando os parâmetros
 * de rastreamento (UTMs) da URL atual.
 * Seguro para SSR: retorna a URL base quando não há `window`.
 */
export function getCheckoutUrl(): string {
  const base = site.checkoutUrl;
  if (typeof window === "undefined") return base;
  try {
    const current = new URL(window.location.href);
    const target = new URL(base);
    for (const key of TRACKED_PARAMS) {
      const value = current.searchParams.get(key);
      if (value) target.searchParams.set(key, value);
    }
    return target.toString();
  } catch {
    return base;
  }
}

/** Dispara eventos de checkout (Meta Pixel + GA4) se os IDs existirem. */
export function trackInitiateCheckout(): void {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  };
  try {
    if (site.metaPixelId && typeof w.fbq === "function") {
      w.fbq("track", "InitiateCheckout");
    }
  } catch {
    /* noop */
  }
  try {
    if (site.ga4Id && typeof w.gtag === "function") {
      w.gtag("event", "begin_checkout", { currency: "BRL" });
    }
  } catch {
    /* noop */
  }
}

/** Handler padrão dos CTAs: rastreia e abre o checkout na mesma aba. */
export function goToCheckout(): void {
  trackInitiateCheckout();
  if (typeof window !== "undefined") {
    window.location.href = getCheckoutUrl();
  }
}
