# Busan Itinerary Planner

Static travel itinerary page for a six-day Busan plan.

## Files

- `index.html` - page markup
- `styles.css` - responsive layout and gallery styles
- `app.js` - itinerary data, Google Maps links, filters, and photo carousel

## Local Preview

Open `index.html` directly in a browser, or run:

```powershell
python -m http.server 5173 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:5173`.

## GitHub Pages

This project is ready to deploy from the repository root on the `main` branch.

## Google Maps Photos

The page intentionally does not embed third-party placeholder photos as destination photos. To show photos that are guaranteed to come from each Google Maps place, the site needs a Google Maps Platform API key and an implementation using Google Places API / Place Photos.
