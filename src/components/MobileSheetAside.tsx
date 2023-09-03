
import { useStore } from '@nanostores/react';
import { open } from '@/store/asideStore';
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { BookOpen } from 'lucide-react';
import {SideNav} from "@/components/SideNav"

export function MobileSheetAside() {

    const $open = useStore(open);

    return (
    <div className=" md:hidden">
    <Sheet open={$open} onOpenChange={open.set}>
        <SheetTrigger asChild>
          <Button variant="outline">< BookOpen/></Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SideNav />
        </SheetContent>
    </Sheet>
    </div>
    )
  }