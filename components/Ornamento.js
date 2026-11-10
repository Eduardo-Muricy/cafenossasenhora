// Filete — grão — filete, usado abaixo dos títulos
export default function Ornamento({ claro = false, className = "" }) {
  const linha = claro ? "bg-aureola/50" : "bg-mostarda";
  return (
    <div aria-hidden className={`mx-auto mt-5 mb-10 flex items-center justify-center gap-3 ${className}`}>
      <span className={`h-px w-12 ${linha}`} />
      <span className="h-3.5 w-2.5 rotate-[20deg] rounded-full border border-mostarda bg-mostarda/30 shadow-[inset_-2px_0_0_var(--mostarda)]" />
      <span className={`h-px w-12 ${linha}`} />
    </div>
  );
}
