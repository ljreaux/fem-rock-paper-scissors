"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const RulesButton = () => {
  return (
    <Link
      href="?modal=true"
      className="text-white border-2 border-white/[0.5] tracking-[.3rem] rounded-xl px-12 py-3 text-xl font-light ml-auto"
    >
      <button>RULES</button>
    </Link>
  );
};

export default RulesButton;

export const Modal = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto flex justify-center items-center">
          <div className="bg-white m-auto p-8 w-[75%] rounded-lg">
            <div className="flex items-center justify-between">
              <p className="text-4xl font-bold">RULES</p>
              <Link
                href={pathname}
                className="flex items-center justify-center"
              >
                <button type="button">
                  <Image
                    src={"/images/icon-close.svg"}
                    alt="close modal"
                    width={24}
                    height={24}
                  />
                </button>
              </Link>
            </div>
            <div className="relative w-full flex items-center justify-center p-8">
              <Image
                src={"/images/image-rules.svg"}
                alt="rules"
                width={400}
                height={400}
              />
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};
