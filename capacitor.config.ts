import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.anwar.tasks",
  appName: "Tasks",
  webDir: "dist",
  android: {
    allowMixedContent: false,
    backgroundColor: "#121212",
  },
};

export default config;
