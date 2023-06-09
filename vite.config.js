import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default ({ mode }) => {
    return defineConfig({
        plugins: [react()],
        define: {
            'process.env.NODE_ENV': `"${mode}"`,
        },
        server: {
            host: '127.0.0.1'
        }  
    });
};
