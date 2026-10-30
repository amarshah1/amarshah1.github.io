# Instructions for Claude

## Hands off `src/content/posts/`

**Do not read, modify, summarize, or quote from any file in `src/content/posts/`.**

The blog posts in that directory are personal writing. They are off-limits to any AI assistant — no reading them to "understand the codebase," no editing them for typos, no using them as context, no quoting passages in conversation. If a task seems to require touching a file in `src/content/posts/`, stop and ask the user how to proceed instead.

This applies recursively: subdirectories, individual `.md` / `.mdx` files, and any future files placed there. The only acceptable interactions are file listings (e.g. `ls`) that show only filenames, never contents.

If you're refactoring the schema for posts or changing how posts are rendered, you may need to touch `src/content.config.ts` or `src/pages/posts/`, but not the post files themselves.
