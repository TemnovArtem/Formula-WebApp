import { defineConfig } from 'cypress';

import generated from "@cypress/code-coverage/task";

export default defineConfig({
    component: {
        devServer: { framework: 'react', bundler: 'vite' },
        setupNodeEvents(on, config) {
            generated(on, config);
            return config;
        },
        supportFile: 'cypress/support/component.js',
    },
    e2e: {
        setupNodeEvents(on, config) {
            generated(on, config);
            return config;
        },
        supportFile: 'cypress/support/e2e.js',
    },
});