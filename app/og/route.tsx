import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET() {
  const earthEmoji = '\u{1F30E}';
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {'earthEmoji'}
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
}
