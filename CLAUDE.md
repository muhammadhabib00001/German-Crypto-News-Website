## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Content Publishing & SEO Standards (LOCKED PERMANENT RULES)

Whenever publishing or updating news articles on CryptoPulse / newskrypt, you MUST strictly enforce these permanent rules without exception or prompting:

1. **Native German Target Language**:
   - Primary publication market is Germany (`de-DE`). All new articles must be written in native German.
   - Site default reader language is German (`googtrans=/en/de`).

2. **UI & Layout Formatting Integrity**:
   - **No Horizontal Dash Rules**: Do NOT use `---` horizontal lines anywhere inside article body content.
   - **No Raw Backtick Code Blocks**: Never wrap article body text, HTML components, or FAQs inside raw backtick boxes (\`\`\`html).
   - **Strict Key Metrics Container HTML**: When embedding custom metrics boxes or key highlights HTML containers, ALWAYS use standard double quotes `class="..."` and NEVER escaped quotes (`class=\...`).
   - **Streamlined Language Selector**: Maintain the streamlined 8-language menu with Deutsch (`DE`) at the top.

3. **No Duplicate Images**:
   - Every article must use a distinct, unique image URL.
   - Do NOT reuse an image URL or image file that is already published in another article on the site.
   - Each article must feature between **1 and 3 images** as per article requirement.

4. **No Duplicate Headings or Titles**:
   - Every article title and H1 must be completely unique across the entire publication.
   - Within an article, all section headings (H2, H3) must be distinct and non-repetitive.
   - Meta title must not exceed 58 characters and must align with the primary keyword.
   - Meta description must not exceed 158 characters.

5. **No Duplicate or Cannibalized Keywords/Tags**:
   - Each new article must target a fresh primary topic/angle without duplicate keyword targeting that causes keyword cannibalization.
   - Tags must accurately reflect specific entities, protocols, or regulatory themes covered in that article.

6. **Image Descriptions**:
   - Hero `imageAlt` and `imageCaption` must be descriptive, matching the title and subject matter of the article.

7. **Single External Keyword Citation Link**:
   - Every published article must contain **exactly 1 external link** anchored directly on the primary topic keyword in the body text (e.g. `[Solana](https://solana.com)` or `[1 bitcoin in euro](https://bitcoin.org)`).
   - Do NOT place external links anywhere else in the body text.

8. **Mandatory 4 FAQs Section**:
   - Every article must include exactly 4 concise, relevant FAQs at the end.
