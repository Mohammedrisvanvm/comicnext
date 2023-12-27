"use client";
import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { cn, formatPrice } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import { useCart } from "@/hooks/use-cart";
import { ScrollArea } from "./ui/scroll-area";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";

export const Cart = () => {
  const { items } = useCart();


  const itemcount = items.length;

const [isMounted,setIsMounted]=useState<boolean>(false)

useEffect(()=>{
setIsMounted(true)
},[])
  const cartTotal = items.reduce(
    (total, { product }) => total + product.price,
    0
  );
  const fee = 1;
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCart
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 "
        ></ShoppingCart>

        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {isMounted?itemcount:0}
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0  sm:max-w-lg ">
        <SheetHeader className="space-y-2.5">
          <SheetTitle>Cart ({itemcount})</SheetTitle>
          {itemcount > 0 ? (
            <>
              <div className="flex w-full  pr-6 ">
                <ScrollArea>
                  {items.map(({ product }) => (
                    <CartItem key={product.id} product={product} />
                  ))}
                </ScrollArea>
              </div>
              <div className="space-y-4 pr-6">
                <Separator />
                <div className="space-y-6 text-small">
                  <div className="flex  justify-between ">
                    <span className=""> shipping</span>
                    <span>free</span>
                  </div>
                  <div className="flex justify-between ">
                    <span> Transaction Fee</span>
                    <span>{formatPrice(fee)}</span>
                  </div>
                  <div className="flex justify-between ">
                    <span> Total</span>
                    <span>{formatPrice(cartTotal + fee)}</span>
                  </div>
                </div>
                <SheetFooter>
                  <SheetTrigger asChild>
                    <Link
                      href="/cart"
                      className={cn(buttonVariants({ className: "w-full" }))}
                    >
                      Continue To CheckOut
                    </Link>
                  </SheetTrigger>
                </SheetFooter>
              </div>
            </>
          ) : (
            <>
              <div className="flex h-96 flex-col items-center justify-center space-y-1 ">
                <div
                  aria-hidden="true"
                  className="relative mb-4 h-60 w-60 text-muted-foreground"
                >
                  <Image
                    src="/hippo-empty-cart.png"
                    fill
                    alt="empty shopping cart"
                  />
                </div>
                <div className="text-xl font-semibold">Your cart is empty</div>
                <SheetTrigger asChild>
                  <Link
                    href={"/products"}
                    className={buttonVariants({
                      variant: "link",
                      size: "sm",
                      className: "text-sm text-muted-foreground text-blue-500",
                    })}
                  >
                    Add items to cart to checkout
                  </Link>
                </SheetTrigger>
              </div>
            </>
          )}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
