import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// variants
const typographyVariants = cva("", {
  variants: {
    tag: {
      h1: "",
      h2: "",
      h3: "",
      h4: "",
      h5: "",
      h6: "",
      p: "",
    },
    size: {
      display: "text-[50px]/[58px] md:text-[3.875em]/[70px]",
      "heading-1":
        "text-[32px]/[36px] tracking-tight md:tracking-normal md:text-[48px]/[58px]",
      "heading-2": "text-[32px]/tight md:text-[40px]/tight",
      "heading-3": "text-[25px]/tight md:text-[32px]/[36px]",
      "heading-4": "text-[25px]/tight",
      "heading-5": "text-[20px]/[28px]",
      "heading-6": "text-[18px]/tight",
      body: "text-[16px]/[22px] font-light",
      "body-s": "text-[13px]/tight font-light",
      "body-xs": "text-[10px]/tight font-light",
    },
    family: {
      serif:  "font-serif",
      sans: "font-sans",
      display: "font-display",
      mono: "font-mono",
    },
    weight: {
        thin:   "font-thin",
        normal: "font-light",
        medium: "font-medium",
        bold: "font-bold",
    },
    padding: {
      none: "",
      sm: "py-2 md:py-4",
      md: "py-[15px] md:py-[30px]",
      lg: "py-[30px] md:py-[72px]",
    },
    theme: {
      cream: "text-cream",
      green: "text-green",
      blue: "text-blue",
      grey: "text-grey",
      charcoal: "text-charcoal",
    },
    reveal: {
      animate: "animate-in fade-in slide-in-from-bottom-10 duration-660 ease-in paused",
      none: "",
    },
  },
  defaultVariants: {
    tag: "p",
    size: "body",
    family: "serif",
    weight: "normal",
    padding: "none",
    theme: "green",
    reveal: "animate",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

const Text = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      tag,
      size,
      family,
      weight,
      padding,
      theme,
      asChild = false,
      className,
      children,
      ...props
    },
    ref,
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
          typographyVariants({ className, size, family, weight, tag, padding, theme }),
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

const H1 = React.forwardRef<HTMLElement, TypographyProps>(
  ({ tag, size, family, weight, children, ...props }, ref) => {
    return (
      <Text
        tag="h1"
        size={size ? size : "heading-1"}
        family={family ? family : "serif"}
        weight={weight ? weight : "bold"}
        ref={ref}
        {...props}
      >
        {children}
      </Text>
    );
  },
);

const H2 = React.forwardRef<HTMLElement, TypographyProps>(
  ({ tag, size, family,weight, children, ...props }, ref) => {
    return (
      <Text
        tag="h2"
        size={size ? size : "heading-2"}
        family={family ? family : "serif"}
        weight={weight ? weight : "medium"}
        ref={ref}
        {...props}
      >
        {children}
      </Text>
    );
  },
);

const H3 = React.forwardRef<HTMLElement, TypographyProps>(
  (
    { tag, size, family, weight, padding, theme, className = "", children, ...props },
    ref,
  ) => {
    let color = "text-green";
    switch (theme) {
      case "blue":
        color = "text-blue";
        break;
      case "charcoal":
        color = "text-charcoal";
        break;
      default:
        break;
    }
    return (
      <Text
        tag="h3"
        size={size ? size : "heading-3"}
        family={family ? family : "serif"}
        weight={weight ? weight : "normal"}
        padding={padding}
        className={cn(color, className)}
        ref={ref}
        {...props}
      >
        {children}
      </Text>
    );
  },
);

const H4 = React.forwardRef<HTMLElement, TypographyProps>(
  ({ tag, size,family, weight, theme, className, children, ...props }, ref) => {
    let color = "text-green";
    return (
      <Text
        tag="h4"
        size={size ? size : "heading-4"}
        family={family ? family : "serif"}
        weight={weight ? weight : "normal"}
        className={cn(color, className)}
        ref={ref}
        {...props}
      >
        {children}
      </Text>
    );
  },
);

const H5 = React.forwardRef<HTMLElement, TypographyProps>(
  ({ tag, size, family, weight, theme, className, children, ...props }, ref) => {
    let color = "text-green";
    return (
      <Text
        tag="h5"
        size={size ? size : "heading-5"}
        family={family ? family : "serif"}
        weight={weight ? weight : "normal"}
        className={cn(color, className)}
        ref={ref}
        {...props}
      >
        {children}
      </Text>
    );
  },
);

const H6 = React.forwardRef<HTMLElement, TypographyProps>(
  ({ tag, size, family, weight, theme, className, children, ...props }, ref) => {
    let color = "text-green";
    return (
      <Text
        tag="h6"
        size={size ? size : "heading-6"}
        family={family ? family : "serif"}
        weight={weight ? weight : "normal"}
        className={cn(color, className)}
        ref={ref}
        {...props}
      >
        {children}
      </Text>
    );
  },
);

const P = React.forwardRef<HTMLElement, TypographyProps>(
  ({ tag, size, family, weight, theme, className, children, ...props }, ref) => {
    return (
      <Text
        tag="p"
        size={size ? size : "body"}
        family={family ? family : "serif"}
        weight={weight ? weight : "normal"}
        theme={theme ? theme : "grey"}
        className={className}
        ref={ref}
        {...props}
      >
        {children}
      </Text>
    );
  },
);

const Small = React.forwardRef<HTMLElement, TypographyProps>(
  ({ tag, size, family, weight, theme, children, ...props }, ref) => {
    return (
      <Text
        tag="p"
        size={size ? size : "body-s"}
        family={family ? family : "serif"}
        weight={weight ? weight : "normal"}
        theme={theme ? theme : "grey"}
        ref={ref}
        {...props}
      >
        {children}
      </Text>
    );
  },
);

Text.displayName = "text";
H1.displayName = "h1";
H2.displayName = "h2";
H3.displayName = "h3";
H4.displayName = "h4";
H5.displayName = "h5";
H6.displayName = "h6";
P.displayName = "p";
Small.displayName = "small";

export { Text, H1, H2, H3, H4, H5, H6, P, Small, typographyVariants };
