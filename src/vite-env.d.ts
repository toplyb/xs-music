/// <reference types="vite/client" />

interface ImportMetaEnv {
  // VITE_KEY 就是在 .env 文件中定义的键名
  readonly VITE_KEY: string;
}
