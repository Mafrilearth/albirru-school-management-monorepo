import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 88,
        background: "linear-gradient(135deg, #059669 0%, #047857 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
        fontFamily: "sans-serif",
        borderRadius: "36px",
      }}
    >
      B
    </div>,
    {
      ...size,
    },
  );
}
