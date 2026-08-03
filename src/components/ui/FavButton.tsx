import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";


export default function FavoriteButton() {
  const [favo, setfavor] = useState(false);

  return (
    <Button  size="icon"  onClick={() => setfavor(!favo)}className="">  <Heart className={`h-5 w-5 transition-all duration-300 ${favo? "fill-red-500 text-black scale-100": "fill-transparent text-black scale-100"}`}/> </Button>
  );
}