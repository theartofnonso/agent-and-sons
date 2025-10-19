import React, { cloneElement, isValidElement } from "react";
import { Slot } from "@radix-ui/react-slot";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	asChild?: boolean;
	size?: "sm" | "md";
	variant?: "ghost" | "default";
	className?: string;
	children: React.ReactNode;
};

export function Button({ asChild, size = "md", variant = "default", className = "", children, ...props }: ButtonProps) {
	const Comp = asChild ? Slot : "button";
	const sizeClasses = size === "sm" ? "h-8 px-3 text-xs" : "h-10 px-4 text-sm";
	const variantClasses =
		variant === "ghost"
			? "border border-transparent hover:bg-black/5 dark:hover:bg-white/10"
			: "border border-black/10 bg-black text-white hover:opacity-90 dark:border-white/10";
	const base = `inline-flex items-center justify-center rounded-md ${sizeClasses} ${variantClasses} ${className}`;

	return (
		<Comp className={base} {...props}>
			{children}
		</Comp>
	);
}

export default Button;


