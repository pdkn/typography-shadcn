import {
  H1,
} from "@/components/ui/typography";

export const codeStringH1_Padding = 
`<H1 padding="lg" >
    Page H1 Title
</H1>
`

export function H1_Padding() {

  return (
      <H1
        padding="lg"
        reveal="none"
        className="border border-dashed border-cyan-300"
      >
        Page H1 Title
      </H1>
  )
}