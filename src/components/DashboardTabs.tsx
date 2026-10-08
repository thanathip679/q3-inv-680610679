import { OverviewCards } from "./OverviewCards";
import { CategoryCards } from "./CategoryCards";
import { Button } from "@/components/ui/button"
import { useState } from "react";

export function DashboardTabs() {
  const [showOverviewCards, setShowOverviewCards] = useState(true);
  const [showCategory, setShowCategory] = useState(true);
  return (
    
    <div className="w-full">
      {showOverviewCards ? (
        <>
          <Button
            onClick={() => setShowOverviewCards(false)}
            variant="outline"
          >
            Overview
          </Button>
        </>
      ) : (
        <OverviewCards />
      )}

      {showCategory ? (
        <>
          <Button
            onClick={() => setShowCategory(false)}
            variant="outline"
          >
            By Category
          </Button>
        </>
      ) : (
        <CategoryCards />
      )}

    </div>
    
  
  );
}
