interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  title?: string;
}

export default function PixelButton({ children, title }: Props) {
  return (
    <button className="font-[family-name:var(--font-pixelify-sans)] relative block cursor-pointer">
      {title ? <span className="text-sm">{title}</span> : children}
    </button>
  );
}
