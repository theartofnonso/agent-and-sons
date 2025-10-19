"use client"

import * as React from "react";
import * as RadixSeparator from "@radix-ui/react-separator";

export function Separator({ className = "w-full border-t border-black/10", ...props }: React.ComponentPropsWithoutRef<typeof RadixSeparator.Root>) {
	return (
		<RadixSeparator.Root decorative orientation="horizontal" className={className} {...props} />
	);
}

export default Separator;
