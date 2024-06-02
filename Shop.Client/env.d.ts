interface ImportMetaEnv {
    readonly VITE_LOCAL_PATH: string;
    readonly VITE_LOCAL_PORT: string;
    readonly VITE_API_PATH: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
