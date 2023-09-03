import {
    H1,
  } from "@/components/ui/typography";
  
  export const codeStringH1_CustomColor = 
  `<H1 theme="blue" className="text-purple-500 bg-green-bg" >
      Page H1 Title | Custom Colour
  </H1>
  `
  
  export function H1_CustomColor() {
  
    return (
        <H1
          theme="blue"
          padding="none"
          className="text-purple-500 bg-green-bg border border-dashed border-cyan-300"
        >
          Page H1 Title | Custom Colour
        </H1>
    )
  }