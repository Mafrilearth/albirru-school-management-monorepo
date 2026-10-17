import { ImageResponse } from "next/og";

export const size = {
  width: 48,
  height: 48,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#020617",
        padding: "4px",
      }}
    >
      <svg
        viewBox="6 4.5 88 116"
        width="40"
        height="40"
        style={{ width: "100%", height: "100%" }}
      >
        {/* Outer Shield (White Border on dark base for extreme tab clarity) */}
        <path
          d="M 50 18 L 82 34 L 82 74 A 32 34 0 0 1 18 74 L 18 34 Z"
          fill="#ffffff"
          stroke="#ffffff"
          strokeWidth="24"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
        />

        {/* Inner Shield (Amber/Yellow Base) */}
        <path
          d="M 50 18 L 82 34 L 82 74 A 32 34 0 0 1 18 74 L 18 34 Z"
          fill="#f59e0b"
        />

        {/* Central Emblem: 16 Lancip */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 50 43 A 28 28 0 0 1 70 63 A 28 28 0 0 1 50 83 A 28 28 0 0 1 30 63 A 28 28 0 0 1 50 43 Z M 50 40.5 L 51.1 57.6 L 54.0 53.3 L 53.1 58.4 L 61.0 52.0 L 54.6 59.9 L 59.7 59.0 L 55.4 61.9 L 72.5 63 L 55.4 64.1 L 59.7 67.0 L 54.6 66.1 L 61.0 74.0 L 53.1 67.6 L 54.0 72.7 L 51.1 68.4 L 50 85.5 L 48.9 68.4 L 46.0 72.7 L 46.9 67.6 L 39.0 74.0 L 45.4 66.1 L 40.3 67.0 L 44.6 64.1 L 27.5 63 L 44.6 61.9 L 40.3 59.0 L 45.4 59.9 L 39.0 52.0 L 46.9 58.4 L 46.0 53.3 L 48.9 57.6 Z"
          fill="#020617"
        />
      </svg>
    </div>,
    {
      ...size,
    },
  );
}
