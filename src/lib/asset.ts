// src/lib/asset.ts
export function asset(file: string): string {
    return `${import.meta.env.BASE_URL}${file.replace(/^\/+/, '')}`;
  }
  
  // (optional) also export default so both import styles work
  export default asset;
  