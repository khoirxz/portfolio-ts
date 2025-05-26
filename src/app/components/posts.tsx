"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { X } from "lucide-react";
import { gsap } from "gsap";
import { Edge } from "../types/posts";

export default function Posts({ item }: { item: Edge }) {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOpenDrawer = () => {
    setIsOpen(true);
  };

  const handleCloseDrawer = () => {
    if (drawerRef.current) {
      gsap.to(drawerRef.current, {
        y: "100%",
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => setIsOpen(false),
      });
    }
  };

  useEffect(() => {
    if (isOpen && drawerRef.current) {
      gsap.fromTo(
        drawerRef.current,
        { y: "100%" },
        { y: "0%", duration: 0.5, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  // Overlay effect when drawer is open
  useEffect(() => {
    if (isOpen && overlayRef.current) {
      // remove scroll from body
      document.body.style.overflow = "hidden";
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    } else if (overlayRef.current) {
      // restore scroll to body
      document.body.style.overflow = "auto";
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <>
      <div key={item.node.id} onClick={handleOpenDrawer}>
        <div className="p-4 hover:bg-black/5 rounded-lg cursor-pointer transition-all">
          <div className="flex flex-col gap-1 w-full">
            <div className="relative w-full aspect-video rounded-sm mb-4">
              <Image
                src={item.node.thumbnail.src}
                alt={item.node.thumbnail.title}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg object-cover"
              />
            </div>
            <h1 className="font-semibold px-1">{item.node.title}</h1>
            <p className="text-sm px-1">{item.node.description}</p>
          </div>
        </div>
      </div>

      {/* Drawer */}
      {isOpen && (
        <div
          ref={overlayRef}
          className="fixed bottom-0 left-0 right-0 bg-black/20 shadow-2xl p-6 z-30 h-screen ">
          <div
            ref={drawerRef}
            className="bg-white rounded-t-lg shadow-lg p-10 fixed bottom-0 left-0 right-0 overflow-y-auto min-h-10/12 z-50 max-w-5xl mx-auto">
            <button
              onClick={handleCloseDrawer}
              className="absolute right-4 top-4 text-xl font-bold cursor-pointer">
              <X className="text-gray-600 hover:text-gray-800 transition-colors" />
            </button>
            <div className="relative max-w-[500px] aspect-video mb-4">
              <Image
                src={item.node.thumbnail.src}
                alt={item.node.thumbnail.title}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg object-cover"
              />
            </div>
            <h2 className="text-lg font-semibold mb-2">{item.node.title}</h2>
            <div className="flex items-center gap-2 mb-4">
              {item.node.category.map((cat) => (
                <span
                  key={cat.id}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                  {cat.title}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-600">{item.node.description}</p>
            {/* Tambah konten detail lain di sini */}
            <div className="flex mt-5">
              <a
                href={item.node.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline inline-block">
                Watch Live
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
