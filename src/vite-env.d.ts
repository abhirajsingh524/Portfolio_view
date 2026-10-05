/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_EMAIL?: string;
  readonly VITE_CONTACT_PHONE?: string;
  readonly VITE_CHARACTER_MODEL_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
