"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
export function CopyEmail({
  email,
  fullWidth = false,
}: {
  email: string;
  fullWidth?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }
  return (
    <div>
      <Button
        variant="outline"
        className={fullWidth ? "w-full" : undefined}
        onClick={copy}
      >
        {status === "copied" ? (
          <Check size={14} aria-hidden />
        ) : (
          <Copy size={14} aria-hidden />
        )}
        {status === "copied"
          ? "Email copied"
          : status === "failed"
            ? "Try copying again"
            : "Copy email"}
      </Button>
      <p
        role="status"
        className={
          fullWidth && status !== "failed"
            ? "sr-only"
            : "mt-2 min-h-5 text-xs leading-relaxed text-muted-foreground"
        }
      >
        {status === "copied"
          ? "Ready to paste into your email app."
          : status === "failed"
            ? `Copy isn't available here. Select the email address above, or use the email link.`
            : ""}
      </p>
    </div>
  );
}
