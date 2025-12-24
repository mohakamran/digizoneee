"use client";

import { offices } from "@/lib/data";

export const ContactMaps = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {offices.map((office) => (
        <div
          key={`${office.city}-map`}
          className="overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-emerald-500/10"
        >
          <iframe
            title={`${office.city} office map`}
            src={office.mapEmbed}
            className="h-56 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      ))}
    </div>
  );
};
