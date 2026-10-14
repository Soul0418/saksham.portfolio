"use client";

import { Mascot } from "page-mascot";

export default function MascotCorner() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Mascot
        directions="/mascots/portrait-directions.webp"
        reactions="/mascots/portrait-reactions.webp"
        size={120}
        label="a chibi version of me"
      />
    </div>
  );
}
