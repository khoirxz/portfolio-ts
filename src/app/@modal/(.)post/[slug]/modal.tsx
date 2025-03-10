"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import Footer from "@/app/components/Footer";

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
      <div ref={dialogRef} className="bg-transparent w-full h-full">
        <div className="text-white min-h-screen h-full">
          <div className="border-b border-zinc-700">
            <div className="max-w-[500px] mx-auto border-r border-l border-zinc-700 border-dotted">
              <div className="pt-20">
                <p className="font-[family-name:var(--font-fira-code)] text-xs text-zinc-700 p-1">
                  .box-modal
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[500px] min-h-screen mx-auto flex flex-col gap-5 border-r border-l border-zinc-700 border-dotted">
            <div className="flex items-center justify-end p-3">
              <button className="cursor-pointer" onClick={onDismiss}>
                <IoMdClose
                  size={20}
                  className="border border-zinc-700 w-6 h-6 dark:text-zinc-200 text-zinc-600"
                />
              </button>
            </div>

            <div className="flex flex-col gap-3 justify-between pb-12">
              {children}
            </div>
          </div>
          <div className="w-full border-t border-dotted border-zinc-700">
            <Footer />
          </div>
        </div>
        <button className="modal-backdrop" onClick={onDismiss}></button>
      </div>
    </div>
  );
}
