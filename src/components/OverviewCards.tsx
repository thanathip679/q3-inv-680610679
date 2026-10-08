import { useItemStore } from '@/store/dataStore';
import { useState , useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


export function OverviewCards() {
  const inventory = useItemStore((state) => state.inventory);
  const totalProducts = inventory.length;
  const [totalvalue, settotalvalue] = useState<number>(0);

  useEffect(() => {
    
    const stockvalue = inventory.map((s) => s.price * s.quantity);

    if (stockvalue.length === 0) {
      settotalvalue(0);
      return;
    }
    let sum = 0;
    for (let i = 0; i < stockvalue.length; i++) {
      sum += stockvalue[i];
    }
    settotalvalue(sum);
  }, []);

  const [totalunit, settotalunit] = useState<number>(0);

  useEffect(() => {
    
    const stockunit = inventory.map((s) => s.quantity);

    if (stockunit.length === 0) {
      settotalvalue(0);
      return;
    }
    let sum = 0;
    for (let i = 0; i < stockunit.length; i++) {
      sum += stockunit[i];
    }
    settotalunit(sum);
  }, []);
  
  return (
    
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Stock Value</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-red-500 font-bold" >฿{totalvalue}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-blue-500 font-bold">{totalProducts}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Units in Stock</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-green-700 font-bold">{totalunit}</div>
        </CardContent>
      </Card>
    </div>
  );
  
}




