import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";

interface ImageType {
  caption: string;
  url: string;
}

interface ProjectDrawerProps {
  open: boolean;
  onClose: (open: boolean) => void;
  title: string;
  images?: ImageType[];
}

const ProjectScreenshots: React.FC<ProjectDrawerProps> = ({
  open,
  onClose,
  title,
  images = [],
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="fixed w-[90%] max-w-none h-auto max-h-[90%] rounded-lg flex flex-col bg-background text-foreground dark:bg-card dark:text-card-foreground">
        <DialogHeader className="p-4 border-b border-border">
          <DialogTitle className=" text-primary">{title}</DialogTitle>
          <DialogDescription className="text-muted-foreground"></DialogDescription>
        </DialogHeader>

        <div className="relative flex-1 flex justify-center items-center overflow-hidden">
          {images.length > 0 && (
            <Carousel className="w-full max-w-3xl mx-auto">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="flex flex-col items-center justify-center relative"
                  >
                    {/* Image Container */}
                    <div className="relative w-full max-h-[80vh] h-auto overflow-hidden rounded-lg flex items-center justify-center">
                      <Image
                        src={image.url}
                        alt={image.caption || "Image"}
                        width={800}
                        height={600}
                        style={{ objectFit: "contain" }}
                        className="rounded-lg"
                        priority
                      />
                    </div>

                    {/* Caption */}
                    <div className="mt-2 text-foreground px-4 py-2">
                      <p className="text-center text-sm font-medium italic">
                        {image.caption || "No caption available"}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation Arrows - Positioned inside */}
              <CarouselPrevious className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 p-2 rounded-full shadow-md" />
              <CarouselNext className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 p-2 rounded-full shadow-md" />
            </Carousel>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectScreenshots;
