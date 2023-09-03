import {
  H1,
} from "@/components/ui/typography";

export const codeStringH1_Display = 
`< H1 family="display" padding='lg' className="bg-cream" >
    Page H1 Display Title
</H1>
`

export function H1_Display() {

  return (
        <H1
        family="display"
        size="display"
        padding="lg"
        reveal="none"
        className="border border-dashed border-cyan-300 bg-cream"
      >
        Page H1 Display Title
      </H1>
  )
}