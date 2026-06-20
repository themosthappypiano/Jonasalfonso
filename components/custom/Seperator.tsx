import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";

function CustomSeperator({
  className,
  hideLines = false,
}: {
  className?: string;
  hideLines?: boolean;
}) {
  return (
    <>
      {!hideLines && <Separator />}
      <div
        className={cn(
          "h-12 w-full bg-background bg-[size:10px_10px] text-primary/5 [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]",
          className,
        )}
      />
      {!hideLines && <Separator />}
    </>
  );
}

export default CustomSeperator;
