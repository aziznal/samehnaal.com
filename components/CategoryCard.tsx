"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { CarouselDialog } from "./CarouselDialog";
import { useCallback, useState } from "react";

type CategoryCardProps = {
  thumbnailSrc: string;
  thumbnailAlignment?: "object-left" | "object-center" | "object-right";

  title: string;
  description: string;

  /** Links to the images that fall under the given category */
  images: string[];
};

export function CategoryCard({
  thumbnailSrc,
  thumbnailAlignment,
  images,
  title,
  description,
}: CategoryCardProps) {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  const openCarousel = useCallback(() => {
    if (isCarouselOpen) return;
    setIsCarouselOpen(true);
  }, [isCarouselOpen]);

  return (
    <>
      <div
        className="border border-slate-800 h-[450px] w-[275px] p-1.5 rounded-xl transition-all hover:bg-slate-800 cursor-pointer"
        onClick={openCarousel}
      >
        {/* TODO: replace with an image */}
        <Image
          src={thumbnailSrc}
          width={800}
          height={800}
          alt="imageSrc"
          className={cn(
            "w-full bg-slate-600 h-[275px] rounded-lg mb-3 object-cover",
            thumbnailAlignment,
          )}
        />

        <div className="px-2">
          <h3 className="font-medium mb-1">{title}</h3>

          <span className="text-slate-400 text-sm">{description}</span>
        </div>
      </div>

      <CarouselDialog
        open={isCarouselOpen}
        onOpenChange={setIsCarouselOpen}
        items={images}
      />
    </>
  );
}
