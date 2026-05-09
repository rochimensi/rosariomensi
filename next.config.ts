import type { NextConfig } from "next";
import { locales } from "./src/app/i18n/config";

const DOC_CACHE_CONTROL =
  "public, max-age=3600, s-maxage=2592000, stale-while-revalidate=86400";

const nextConfig: NextConfig = {
  async headers() {
    return locales.map((locale) => ({
      source: `/${locale}`,
      headers: [{ key: "Cache-Control", value: DOC_CACHE_CONTROL }],
    }));
  },
};

export default nextConfig;
