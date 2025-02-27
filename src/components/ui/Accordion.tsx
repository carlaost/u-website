import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { type VariantProps, cva } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/utils/cn';

const Accordion = AccordionPrimitive.Root;

export { Accordion };

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b border-slate-6', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const accordionTriggerVariants = cva(
  'flex flex-1 items-center justify-between py-4 text-base font-medium transition-all hover:text-slate-12 md:text-lg [&[data-state=open]>svg]:rotate-180',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        subtle: 'justify-start gap-2 bg-transparent p-1 text-sm font-medium',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>,
    VariantProps<typeof accordionTriggerVariants> {
  asChild?: boolean;
}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, variant, asChild = false, ...props }, ref) => {
  if (asChild) {
    return (
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          ref={ref}
          className={cn(
            accordionTriggerVariants({ variant, className }),
            'p-0'
          )}
          {...props}
        >
          {children}
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );
  }

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(accordionTriggerVariants({ variant, className }))}
        {...props}
      >
        {children}
        <ChevronDown className="size-4 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'overflow-hidden px-1 transition-all',
      'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { AccordionContent, AccordionItem, AccordionTrigger };
