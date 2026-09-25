/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_ANALYTICS_PROVIDER?: 'plausible' | 'umami' | 'none';
  readonly PUBLIC_ANALYTICS_DOMAIN?: string;
  readonly PUBLIC_ANALYTICS_SRC?: string;
  readonly PUBLIC_UMAMI_SRC?: string;
  readonly PUBLIC_UMAMI_WEBSITE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
