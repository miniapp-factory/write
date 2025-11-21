"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";

interface PurchaseProps {
  writerAddress: string;
  articleTitle: string;
}

const Purchase: FC<PurchaseProps> = ({ writerAddress, articleTitle }) => {
  const handlePurchase = () => {
    // Placeholder for purchase logic
    alert(`Purchasing "${articleTitle}" from ${writerAddress}`);
  };

  return (
    <Button variant="outline" onClick={handlePurchase}>
      Buy Article
    </Button>
  );
};

export default Purchase;
