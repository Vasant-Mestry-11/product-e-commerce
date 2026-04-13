import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */

  /* SCSS configuaration */
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

export default nextConfig;
