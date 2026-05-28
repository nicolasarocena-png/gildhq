export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  const res = await fetch(
    `https://dashboard.tecla.io/api/v1/gild/newsletter/${slug}`,
    {
      headers: {
        Origin: "https://gildhq.com",
        Referer: "https://gildhq.com/newsletter",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return new Response(JSON.stringify({ ok: false, error: "Upstream error" }), {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  }

  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
    },
  });
}
