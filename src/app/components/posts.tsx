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
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    } else if (overlayRef.current) {
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
            className="bg-white rounded-lg shadow-lg p-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-auto z-50 max-w-5xl w-full max-h-[90vh]">
            <button
              onClick={handleCloseDrawer}
              className="absolute right-4 top-4 text-xl font-bold cursor-pointer">
              <X className="text-gray-600 hover:text-gray-800 transition-colors" />
            </button>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative max-w-[500px] w-full aspect-video mb-4">
                <Image
                  src={item.node.thumbnail.src}
                  alt={item.node.thumbnail.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">
                  {item.node.title}
                </h2>
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
                    className="text-blue-600 hover:underline text-xs bg-blue-100 px-2.5 py-1 rounded-full font-semibold flex items-center gap-2">
                    Lihat proyek{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
