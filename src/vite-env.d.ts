/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SHOW_DRAFT_CONTENT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
