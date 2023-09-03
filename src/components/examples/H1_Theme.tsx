import {
    H1,
  } from "@/components/ui/typography";
  
  export const codeStringH1_Theme = 
  `<H1 padding="lg" theme="blue" className="px-4 md:px-20">
      Page H1 Title
  </H1>
  `
  
  export function H1_Theme() {
  
    return (
        <H1
          padding="lg"
          theme="blue"
          reveal="none"
          className="px-4 md:px-20 border border-dashed border-cyan-300"
        >
          Page H1 Title | Blue
        </H1>
    )
  }