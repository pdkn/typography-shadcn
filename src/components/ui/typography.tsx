import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

type Tag = keyof JSX.IntrinsicElements;

// variants
const typographyVariants = cva("", {
  variants: {
    size: {
      display:
        "text-[calc(var(--font-size-8)*var(--heading-font-size-adjust))]/[var(--heading-line-height-8)] tracking-[calc(var(--letter-spacing-8)+var(--heading-letter-spacing))] md:text-[calc(var(--font-size-9)*var(--heading-font-size-adjust))]/[var(--heading-line-height-9)] md:tracking-[calc(var(--letter-spacing-9)+var(--heading-letter-spacing))]",
      "heading-1":
        "text-[calc(var(--font-size-7)*var(--heading-font-size-adjust))]/[var(--heading-line-height-7)] tracking-[calc(var(--letter-spacing-7) + var(--heading-letter-spacing))] md:text-[calc(var(--font-size-8)*var(--heading-font-size-adjust))]/[var(--heading-line-height-8)] md:tracking-[calc(var(--letter-spacing-8)+var(--heading-letter-spacing))]",
      "heading-2":  "text-[calc(var(--font-size-6)*var(--heading-font-size-adjust))]/[var(--heading-line-height-6)] tracking-[calc(var(--letter-spacing-6)+var(--heading-letter-spacing))] md:text-[calc(var(--font-size-7)*var(--heading-font-size-adjust))]/[var(--heading-line-height-7)] md:tracking-[calc(var(--letter-spacing-7)+var(--heading-letter-spacing))]",
      "heading-3":  "text-[calc(var(--font-size-5)*var(--heading-font-size-adjust))]/[var(--heading-line-height-5)] tracking-[calc(var(--letter-spacing-5)+var(--heading-letter-spacing))] md:text-[calc(var(--font-size-6)*var(--heading-font-size-adjust))]/[var(--heading-line-height-6)] md:tracking-[calc(var(--letter-spacing-6)+var(--heading-letter-spacing))]",
      "heading-4":  "text-[calc(var(--font-size-4)*var(--heading-font-size-adjust))]/[var(--heading-line-height-4)] tracking-[calc(var(--letter-spacing-4)+var(--heading-letter-spacing))] md:text-[calc(var(--font-size-5)*var(--heading-font-size-adjust))]/[var(--heading-line-height-5)] md:tracking-[calc(var(--letter-spacing-5)+var(--heading-letter-spacing))]",
      "heading-5":  "text-[calc(var(--font-size-4)*var(--heading-font-size-adjust))]/[var(--heading-line-height-4)] tracking-[calc(var(--letter-spacing-4)+var(--heading-letter-spacing))]",
      "heading-6": "text-[calc(var(--font-size-3)*var(--heading-font-size-adjust))]/[var(--heading-line-height-3)] tracking-[calc(var(--letter-spacing-3)+var(--heading-letter-spacing))]",
      body: "text-[var(--font-size-3)]/[var(--line-height-3)] tracking-[var(--letter-spacing-3)]",
      "body-s": "text-[var(--font-size-2)]/[var(--line-height-2)] tracking-[var(--letter-spacing-2)]",
      "body-xs": "text-[var(--font-size-1)]/[var(--line-height-1)] tracking-[var(--letter-spacing-1)]",
    },
    family: {
      serif: "font-serif",
      sans: "font-sans",
      display: "font-display",
      mono: "font-mono",
    },
    weight: {
      thin: "font-thin",
      normal: "font-light",
      medium: "font-medium",
      bold: "font-bold",
    },
    padding: {
      none: "",
      sm: "py-1 md:py-2",
      md: "py-[15px] md:py-[30px]",
      lg: "py-[22px] md:py-[44px]",
    },
    theme: {
      cream: "text-cream",
      green: "text-green",
      blue: "text-blue",
      grey: "text-grey",
      charcoal: "text-charcoal",
    },
    reveal: {
      animate:
        "animate-in fade-in slide-in-from-bottom-10 duration-660 ease-in paused",
      none: "",
    },
  },
  defaultVariants: {
    size: "body",
    family: "serif",
    weight: "normal",
    padding: "none",
    theme: "green",
    reveal: "none",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  tag?: Tag;
}

const StyledElement = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      tag,
      size,
      family,
      weight,
      padding,
      theme,
      reveal,
      asChild = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    let templateTag = "p";
    if (tag) templateTag = tag;

    const Comp = asChild ? Slot : templateTag;

    // NOTE the order of options for typographyVariants()
    // is important to make typography as extendable as possilbe
    // via overwrites
    return (
      <Comp
        className={cn(
          typographyVariants({
            className,
            size,
            family,
            weight,
            padding,
            theme,
            reveal,
          })
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

const H1 = React.forwardRef<HTMLElement, TypographyProps>(
  ({ tag, size, family, weight, padding, theme, children, ...props }, ref) => {
    return (
      <StyledElement
        tag="h1"
        size={size ? size : "heading-1"}
        family={family ? family : "serif"}
        weight={weight ? weight : "bold"}
        theme={theme ? theme : "green"}
        padding={padding ? padding : "lg"}
        ref={ref}
        {...props}
      >
        {children}
      </StyledElement>
    );
  }
);

const H2 = React.forwardRef<HTMLElement, TypographyProps>(
  ({ tag, size, family, weight, padding, theme, children, ...props }, ref) => {
    return (
      <StyledElement
        tag="h2"
        size={size ? size : "heading-2"}
        family={family ? family : "serif"}
        weight={weight ? weight : "medium"}
        theme={theme ? theme : "green"}
        padding={padding ? padding : "md"}
        ref={ref}
        {...props}
      >
        {children}
      </StyledElement>
    );
  }
);

const H3 = React.forwardRef<HTMLElement, TypographyProps>(
  ({ tag, size, family, weight, padding, theme, children, ...props }, ref) => {
    return (
      <StyledElement
        tag="h3"
        size={size ? size : "heading-3"}
        family={family ? family : "serif"}
        weight={weight ? weight : "normal"}
        theme={theme ? theme : "green"}
        padding={padding ? padding : "md"}
        ref={ref}
        {...props}
      >
        {children}
      </StyledElement>
    );
  }
);

const H4 = React.forwardRef<HTMLElement, TypographyProps>(
  ({ tag, size, family, weight, theme, children, ...props }, ref) => {
    return (
      <StyledElement
        tag="h4"
        size={size ? size : "heading-4"}
        family={family ? family : "serif"}
        weight={weight ? weight : "normal"}
        theme={theme ? theme : "green"}
        ref={ref}
        {...props}
      >
        {children}
      </StyledElement>
    );
  }
);

const H5 = React.forwardRef<HTMLElement, TypographyProps>(
  ({ tag, size, family, weight, theme, children, ...props }, ref) => {
    return (
      <StyledElement
        tag="h5"
        size={size ? size : "heading-5"}
        family={family ? family : "serif"}
        weight={weight ? weight : "normal"}
        theme={theme ? theme : "green"}
        ref={ref}
        {...props}
      >
        {children}
      </StyledElement>
    );
  }
);

const H6 = React.forwardRef<HTMLElement, TypographyProps>(
  ({ tag, size, family, weight, theme, children, ...props }, ref) => {
    return (
      <StyledElement
        tag="h6"
        size={size ? size : "heading-6"}
        family={family ? family : "serif"}
        weight={weight ? weight : "normal"}
        theme={theme ? theme : "green"}
        ref={ref}
        {...props}
      >
        {children}
      </StyledElement>
    );
  }
);

const P = React.forwardRef<HTMLElement, TypographyProps>(
  ({ tag, size, family, weight, padding, theme, children, ...props }, ref) => {
    return (
      <StyledElement
        tag="p"
        size={size ? size : "body"}
        family={family ? family : "serif"}
        weight={weight ? weight : "normal"}
        padding={padding ? padding : "sm"}
        theme={theme ? theme : "grey"}
        ref={ref}
        {...props}
      >
        {children}
      </StyledElement>
    );
  }
);

const Small = React.forwardRef<HTMLElement, TypographyProps>(
  ({ tag, size, family, weight, theme, children, ...props }, ref) => {
    return (
      <StyledElement
        tag="p"
        size={size ? size : "body-s"}
        family={family ? family : "serif"}
        weight={weight ? weight : "normal"}
        theme={theme ? theme : "grey"}
        ref={ref}
        {...props}
      >
        {children}
      </StyledElement>
    );
  }
);

StyledElement.displayName = "styled element";
H1.displayName = "h1";
H2.displayName = "h2";
H3.displayName = "h3";
H4.displayName = "h4";
H5.displayName = "h5";
H6.displayName = "h6";
P.displayName = "p";
Small.displayName = "small";

export { StyledElement, H1, H2, H3, H4, H5, H6, P, Small, typographyVariants };
