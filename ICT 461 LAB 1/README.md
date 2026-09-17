# ICT461 Unit 1 — Course Registration Page

A standards-based, accessible, responsive course registration
interface built for ICT461 Unit 1 at Mulungushi University.

## Run it
1. Clone this repository.
2. Open the folder in VS Code.
3. Right-click index.html and choose "Open with Live Server",
   or open index.html directly in a browser.

## What it demonstrates
- Semantic HTML: header, nav, main, footer, labelled form controls
- Mobile-first responsive CSS with a 720px breakpoint
- Client-side validation with accessible, announced error messages
- Visible keyboard focus on every interactive element

## Accessibility testing done
- Full keyboard-only pass: every control reachable and visible
- Errors announced through aria-live and linked with aria-describedby

## Known limitation
Validation here is client-side only. In a production system every
rule would be repeated on the server, because client code can be
edited or bypassed by the user.

## Evidence
- elements.png — DevTools Elements panel
- network.png — DevTools Network panel