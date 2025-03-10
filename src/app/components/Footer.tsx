const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-700">
      <div className="max-w-[500px] w-full mx-auto border-l border-dotted border-r border-zinc-700 flex flex-col">
        <div className="my-5 grid grid-cols-1 sm:grid-cols-2 items-center gap-3 sm:gap-0">
          <div>
            <p className="font-[family-name:var(--font-fira-code)] text-xs text-zinc-700 p-1">
              .text-title-footer
            </p>
            <div className="border-t border-b border-dotted border-zinc-700 flex gap-1">
              <span className="w-2 bg-black/10 dark:bg-white/10 border-r border-zinc-700 flex-shrink-0"></span>
              <p className="dark:text-zinc-200 text-zinc-600 text-sm">
                Rizqi Khoirurrohman
              </p>
            </div>
          </div>

          <div>
            <p className="font-[family-name:var(--font-fira-code)] text-xs text-zinc-700 p-1">
              .socials
            </p>
            <div className="border-t border-b border-dotted border-zinc-700 flex">
              <div className="flex gap-1 relative">
                <span className="w-2 bg-white/10 border-r border-zinc-700 flex-shrink-0"></span>
                <a
                  href="https://github.com/khoirxz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-zinc-500 text-sm">
                  Github
                </a>
                <span className="w-2 bg-white/10 border-l border-zinc-700 flex-shrink-0"></span>
                <div className="absolute top-0 right-0 h-full w-px border-r border-dotted border-zinc-700"></div>
              </div>
              <div className="flex gap-1 relative">
                <span className="w-2 bg-white/10 border-r border-zinc-700 flex-shrink-0"></span>
                <a
                  href="https://instagram.com/rizqi.khoir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-zinc-500 text-sm">
                  Instagram
                </a>
                <span className="w-2 bg-white/10 border-l border-zinc-700 flex-shrink-0"></span>
                <div className="absolute top-0 right-0 h-full w-px border-r border-dotted border-zinc-700"></div>
              </div>
              <div className="flex gap-1 relative">
                <span className="w-2 bg-white/10 border-r border-zinc-700 flex-shrink-0"></span>
                <a
                  href="https://facebook.com/rootbackdor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-zinc-500 text-sm">
                  Facebook
                </a>
                <span className="w-2 bg-white/10 border-l border-zinc-700 flex-shrink-0"></span>
                <div className="absolute top-0 right-0 h-full w-px border-r border-dotted border-zinc-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
