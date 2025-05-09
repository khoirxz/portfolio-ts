import { globalConfig } from "../config";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="max-w-lg mx-auto flex flex-col px-4 lg:px-0">
        <div className="my-5 grid grid-cols-1 sm:grid-cols-2 items-center gap-3 sm:gap-0">
          <div>
            <div className="flex gap-1">
              <p className="text-sm text-center lg:text-left text-zinc-900 dark:text-zinc-400">
                {globalConfig.title}
              </p>
            </div>
          </div>

          <div>
            <div className="flex justify-center sm:justify-end gap-3">
              <a
                href="https://github.com/khoirxz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-zinc-500 text-sm">
                Github
              </a>
              <a
                href="https://instagram.com/rizqi.khoir"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-zinc-500 text-sm">
                Instagram
              </a>
              <a
                href="https://facebook.com/rootbackdor"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-zinc-500 text-sm">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
