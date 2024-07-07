import { Dialog, DialogContent } from "@/components/ui/dialog";

import { type CarouselApi } from "@/components/ui/carousel";

import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn, getFileExtension } from "@/lib/utils";
import { LucidePlay } from "lucide-react";

type CarouselDialogProps = {
  open: boolean;
  onOpenChange: (state: boolean) => void;
  items: string[];
};

export function CarouselDialog({
  open,
  onOpenChange,
  items,
}: CarouselDialogProps) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const [api, setApi] = useState<CarouselApi>();

  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onCarouselItemSelected = () => {
      setCurrentItemIndex(api.selectedScrollSnap());

      const item = document.getElementById(
        `preview-${api.selectedScrollSnap()}`,
      );

      item?.scrollIntoView();
    };

    api.on("select", onCarouselItemSelected);

    return () => {
      api.off("select", onCarouselItemSelected);
    };
  }, [api]);

  const setItemInCarousel = useCallback(
    (newItemIndex: number) => {
      if (!api) return;

      api.scrollTo(newItemIndex, true);
    },
    [api],
  );

  useEffect(() => {
    if (open) setItemInCarousel(currentItemIndex);
  }, [currentItemIndex, open, setItemInCarousel]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:w-[70vw] min-w-[70vw]">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="w-full">
            {items.map((item) => (
              <CarouselItem key={item}>
                <>
                  {getFileExtension(item) === "png" ? (
                    <Image
                      src={item}
                      width={1000}
                      height={1000}
                      alt={`Examples of my work - ${item}`}
                      className={cn("object-contain w-full")}
                    />
                  ) : (
                    <video
                      width="640"
                      height="360"
                      controls
                      className="h-[50vh]"
                    >
                      <source src={item} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext></CarouselNext>
          <CarouselPrevious></CarouselPrevious>
        </Carousel>

        <div className="flex items-center gap-4 overflow-x-auto py-4 px-4 w-full">
          {items.map((item, index) => (
            <>
              {getFileExtension(item) === "png" ? (
                <Image
                  id={`preview-${index}`}
                  onClick={() => setItemInCarousel(index)}
                  key={index}
                  src={item}
                  width={1000}
                  height={1000}
                  alt={`Examples of my work - ${item}`}
                  className={cn(
                    "h-[60px] w-[60px] object-contain cursor-pointer border rounded-xl",
                    index === currentItemIndex &&
                      "border-[3px] border-purple-500 cursor-default",
                  )}
                />
              ) : (
                <div
                  id={`preview-${index}`}
                  onClick={() => setItemInCarousel(index)}
                  key={index}
                  className={cn(
                    "flex items-center border rounded-xl justify-center h-[60px] w-[60px] cursor-pointer shrink-0",
                    index === currentItemIndex &&
                      "border-[3px] border-purple-500 cursor-default",
                  )}
                >
                  <LucidePlay />
                </div>
              )}
            </>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
