/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  output: "standalone",
  productionBrowserSourceMaps: true,

};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
