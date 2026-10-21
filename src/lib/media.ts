// Only owner-supplied Loom share links can become embedded players.
export function loomEmbedUrl(value: string): string | undefined {
  try {
    const url = new URL(value);
    const match = /^\/share\/([a-f0-9]{32})\/?$/.exec(url.pathname);
    if (
      url.origin !== "https://www.loom.com" ||
      !!url.username ||
      !!url.password ||
      !match
    )
      return undefined;
    return `https://www.loom.com/embed/${match[1]}?autoplay=0`;
  } catch {
    return undefined;
  }
}
