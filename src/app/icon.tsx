import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          background: siteConfig.brand.primary,
          color: "white",
          fontFamily: "Arial, sans-serif",
          fontSize: 24,
          fontWeight: 700,
        }}
      >
        {siteConfig.business.shortName}
      </div>
    ),
    size,
  );
}
