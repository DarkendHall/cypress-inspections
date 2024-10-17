import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: "http://localhost:5173",
        testIsolation: true,
        viewportHeight: 1024,
        viewportWidth: 1280,
        retries: {
            runMode: 2,
            openMode: 0,
        },
        screenshotOnRunFailure: false,
    },
});
