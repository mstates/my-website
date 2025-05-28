// src/components/ui/SkipToContent.tsx
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="bg-primary text-primary-foreground fixed top-0 left-0 z-50 -translate-y-full p-2 focus:translate-y-0"
    >
      Skip to content
    </a>
  );
}
