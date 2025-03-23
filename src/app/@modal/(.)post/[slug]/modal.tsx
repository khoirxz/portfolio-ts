"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

export function PostModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDivElement>(null);
  const mainContent = document.getElementById("main-content");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      // when open, remove scroll
      document.body.style.overflow = "auto";
      if (mainContent) {
        mainContent.style.display = "none";
      }
    }
    return () => {
      // reset overflow when component unmounts
      document.body.style.overflow = "";
      if (mainContent) {
        mainContent.style.display = "block";
      }
    };
  }, [mainContent]);

  function onDismiss() {
    router.back();
  }

  return (
    <div className="fixed inset-0 overflow-auto bg-[color:var(--color-background)] w-full">
      <div ref={dialogRef} className="bg-white w-full h-full">
        <div className="min-h-screen h-full">
          <div className="max-w-lg mx-auto min-h-screen flex flex-col gap-5">
            <div className="flex items-center justify-end p-3 mt-16">
              <button
                className="cursor-pointer flex items-center gap-1 text-zinc-500 hover:text-zinc-800 transition-all"
                onClick={onDismiss}>
                <IoIosArrowBack size={20} className="w-5 h-5" />
                <span>Kembali</span>
              </button>
            </div>

            <div className="flex flex-col gap-3 justify-between pb-12 px-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
