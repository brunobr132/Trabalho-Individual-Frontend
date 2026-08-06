import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";


export default function FavoriteButton() {
  const [ativo, setativo] = useState(false);

  return (
    <Button size="icon" onClick={() => setativo(!ativo)} className="-ml-6" aria-label="Favoritar">
      <Heart className={`h-6 w-6 transition-all duration-300 ${ativo ? "fill-red-500 text-black" : "fill-transparent text-black"}`} />
    </Button>
  );
}