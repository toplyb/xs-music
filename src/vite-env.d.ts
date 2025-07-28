/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  // VITE_KEY 就是在 .env 文件中定义的键名
  readonly VITE_KEY: string;
}
