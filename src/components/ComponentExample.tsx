import * as React from "react"
import { useStore } from '@nanostores/react';
import { currentExample } from '@/store/exampleStore';

import { cn } from "@/lib/utils"
import {
    H3,
    P,
    typographyVariants,
  } from "@/components/ui/typography";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { Separator } from "@/components/ui/separator"

import {RichTextBlock, codeStringRichTextBlock} from "@/components/examples/RichTextBlock"

// h1
import {H1_Display, codeStringH1_Display} from "@/components/examples/H1_Display"
import {H1_Padding, codeStringH1_Padding} from "@/components/examples/H1_Padding"
import {H1_Theme, codeStringH1_Theme} from "@/components/examples/H1_Theme"
import {H1_CustomColor, codeStringH1_CustomColor} from "@/components/examples/H1_CustomColor"
// h2
import {H2_Basic, codeStringH2_Basic} from "@/components/examples/H2_Basic"

const h1Examples = [
    {
        tsx: <H1_Display/>, 
        code:codeStringH1_Display,
        description: "Sometimes you want a big font for BIG impact. One that is sytlistically different to default h1 style",
    },
    {
        tsx: <H1_Padding/>,
        code:codeStringH1_Padding,
        description: "If you need to enforce vertical padding around a heading",
    },
    {
        tsx: <H1_Theme/>,
        code:codeStringH1_Theme,
        description: "If you need to have dynamic colors based on themes for a heading",
    },
    {
        tsx: <H1_CustomColor/>,
        code:codeStringH1_CustomColor,
        description: "Sometimes you have to breakout of the design system constraints and add something custom. className classes take presidence so you're always in complete control",
    },
]

const h2Examples = [
    {
        tsx: <H2_Basic/>, 
        code:codeStringH2_Basic,
        description: "simple implement default styles for a h2 tag ",
    }
]

interface ComponentExampleProps extends React.HTMLAttributes<HTMLDivElement> {

}

export function ComponentExample({
}:ComponentExampleProps) {

    const $currentExample = useStore(currentExample);

    let examples = null;

    switch ($currentExample) {
        case "Rich Text Block" :
            examples = [
                {
                    tsx: <RichTextBlock/>, 
                    code:codeStringRichTextBlock,
                    description: "Simplified version of Shadcn Typography",
                },
            ]
            break;
        case "h1":
            examples = h1Examples
          break;
        case "h2":
            examples = h2Examples
          break;
        default:
          break;
    }

    const reveal = typographyVariants({ reveal: "animate"});

  return (
    <div
      className={cn("group relative my-4 flex flex-col gap-8 flex-grow space-y-2")}
    >
         <H3>{$currentExample}</H3>

         {examples && examples.map((example, idx) => (
            <div key={`example${idx}`} className="w-full">
            <P className="max-w-[640px]">{example.description}</P>
            <Separator className="my-2" />
            <Tabs defaultValue="preview" className="relative w-full font-sans">
                <div className="flex items-center justify-between pb-3">
                <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                    <TabsTrigger
                    value="preview"
                    className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                    >
                    Preview
                    </TabsTrigger>
                    <TabsTrigger
                    value="code"
                    className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                    >
                    Code
                    </TabsTrigger>
                </TabsList>
                </div>
                <TabsContent value="preview" className="rounded-md border bg-slate-50">
                <div
                    className="flex px-4 w-full md:px-8 min-h-[350px] justify-center p-10 items-center"
                >
                    {example.tsx}
                </div>
                </TabsContent>
                <TabsContent value="code" className=" bg-zinc-900">
                <div className="flex min-h-[350px] justify-center p-10 items-center">
                    <pre><code>{example.code}</code></pre>      
                </div>
                </TabsContent>
            </Tabs>
            </div>
            ))}
    </div>
  )
}