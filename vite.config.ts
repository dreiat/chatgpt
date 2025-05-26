
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
// FIX: Import fileURLToPath to define __dirname in ES module
import { fileURLToPath } from 'url';

export default defineConfig(({ mode }) => {
    // const env = loadEnv(mode, '.', ''); // No longer needed for API key
    // FIX: Define __filename and __dirname for ES module scope
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    return {
      // API Key is now hardcoded in chat-interface.tsx, so 'define' section for API_KEY is removed.
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});