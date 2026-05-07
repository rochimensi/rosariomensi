import type { NextConfig } from "next";
import { locales } from "./src/app/i18n/config";

/**
 * Locale HTML is fingerprinted only by deployment; treat it as long-lived at the CDN.
 * Browsers revalidate after max-age; shared caches use s-maxage + stale-while-revalidate.
 * Platforms like Vercel typically invalidate edge caches on deploy—adjust TTLs if yours does not.
 */
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
