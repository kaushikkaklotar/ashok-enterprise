# Ashok Enterprise

Next.js App Router and Tailwind CSS website for Ashok Enterprise, Surat.

## Run locally

Use Node.js 22 or newer. Run `npm ci`, then `npm run dev`. The site runs on port 4173.

Run `npm run build` for the static export in `out/`. The project can also deploy directly on Vercel using the Next.js preset.

## Content and enquiries

Business information, product ranges and enquiry text are in `app/page.tsx`. Styles and motion are in `app/globals.css`. Metadata is in `app/layout.tsx`.

Product links and the enquiry form open WhatsApp for +91 9904262935. The form prepares a message; the visitor must send it in WhatsApp. No enquiry is stored on a server. Prices, stock and delivery arrangements are confirmed directly with the business.

## Assets

The supplied Ashoklogo.png is retained as `public/logo.png`. Product photography is sourced from the user-provided reference site https://homeessentials.in/ and used to illustrate product categories; specific inventory has not been confirmed. Replace category photography with actual Ashok Enterprise product photos when supplied.

Reference collections: `/collections/food-storage-containers`, `/collections/bins-boxes-and-baskets`, `/collections/lunch-boxes`.

## Accessibility and motion

Semantic sections, labelled inputs, keyboard-accessible navigation, native FAQ details, focus styles and a skip link are included. Scroll reveals and hover transitions respect reduced-motion preferences.
