type Props = {
  title: string;
};

export default function Badge({ title }: Props) {
  return (
    <span className="font-[family-name:var(--font-pixelify-sans)] bg-zinc-300 text-zinc-700 py-1 px-2 rounded uppercase">
      # {title}
    </span>
  );
}
