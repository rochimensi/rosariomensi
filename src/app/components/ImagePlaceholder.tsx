export function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="relative overflow-hidden border border-black/10 bg-[linear-gradient(135deg,rgba(17,17,17,0.08),rgba(17,17,17,0.02)_35%,rgba(255,255,255,0.7)_70%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(17,17,17,0.18),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(17,17,17,0.1),transparent_22%),radial-gradient(circle_at_50%_80%,rgba(17,17,17,0.08),transparent_20%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#f7f4ee] to-transparent" />
      <span className="relative z-10 inline-flex h-full min-h-[inherit] items-end p-6 text-xs uppercase tracking-[0.21rem] text-black/55">
        {label}
      </span>
    </div>
  );
}
