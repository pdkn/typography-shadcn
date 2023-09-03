import * as React from "react"
import { useStore } from '@nanostores/react';
import { currentExample } from '@/store/exampleStore';
import { open } from '@/store/asideStore';

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const tags = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
]

const customTags = [
    "span",
    "address",
    "div",
    "input",
]

 
export function SideNav() {

    // read the store value with the `useStore` hook
  //const $currentStore = useStore(currentExample);
  //const $open = useStore(open);

  return (
    <ScrollArea className="h-screen w-48 rounded-md border">
        <div className="p-4">
          <button className="text-sm" onClick={() => {
            currentExample.set("Rich Text Block");
            open.set(false)
          }}>Rich Text Block
          </button>
          <Separator className="my-2" />
      </div>
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Text Tags</h4>
        {tags.map((tag) => (
          <>
          <button key={tag} className="text-sm" onClick={() => {
            currentExample.set(tag);
            open.set(false)
          }}>{tag}
          </button>
            <Separator className="my-2" />
          </>
        ))}
      </div>
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Custom Tags</h4>
        {customTags.map((tag) => (
          <div key={tag}>
            <button key={tag} className="text-sm" onClick={() => {
            currentExample.set(tag);
            open.set(false)
          }}>{tag}
            </button>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
