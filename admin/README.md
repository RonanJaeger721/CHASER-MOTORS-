# Chaser Motors inventory management architecture

The public website is data-driven from `dist/data/vehicles.js`. Cards, filters, search, sorting, detail pages, comparison, saved cars, enquiries and recommendations consume the same records.

Keep administration private and authenticated. Organise vehicle entry into: **Basic Details**, **Specifications**, **Pricing**, **Features**, **Media**, and **Publishing**. Media accepts validated JPG, PNG, WebP and MP4 files or a hosted/YouTube video URL. Generate responsive thumbnails server-side.

Recommended future collections: `vehicles`, `vehicleMedia`, `vehicleEnquiries`, `vehicleRequests`. Public queries must return only published records. Never expose write credentials in browser code. Use `vehicle-schema.json` as the contract when connecting Firebase, Supabase, a CMS, or a custom API.
