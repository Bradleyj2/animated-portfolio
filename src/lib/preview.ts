/**
 * Draft homepage content is excluded from production builds unless
 * VITE_SHOW_DRAFT_CONTENT=true is set in a local .env.local file.
 */
export function isDraftContentVisible(): boolean {
  return (
    import.meta.env.DEV ||
    import.meta.env.VITE_SHOW_DRAFT_CONTENT === 'true'
  )
}
