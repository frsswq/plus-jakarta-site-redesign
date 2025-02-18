import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { fontWeightsLabel } from "@/data/fontShowcaseData";

interface FontShowcaseSelectWeightProps {
  value: string;
  onValueChange: (value: string) => void;
}
export default function FontShowcaseSelectWeight({
  value,
  onValueChange,
}: FontShowcaseSelectWeightProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger
        className="h-8 w-[125px] rounded-xs border-zinc-200 bg-white text-xs text-zinc-700
          hover:cursor-pointer hover:border-zinc-300 hover:bg-zinc-50/10 hover:font-[450]
          hover:text-black hover:shadow-2xs data-[state=open]:border-zinc-300
          data-[state=open]:font-[450] data-[state=open]:text-black
          data-[state=open]:shadow-2xs md:h-9 md:w-[250px] md:text-sm"
        aria-label="Select font weight"
      >
        <SelectValue aria-label={value} />
      </SelectTrigger>
      <SelectContent className="rounded-xs border-zinc-300 shadow-2xs">
        {fontWeightsLabel.map((weight) => (
          <SelectItem
            value={weight.value}
            key={weight.value}
            className="rounded-xs text-xs text-zinc-700 focus:cursor-pointer focus:bg-zinc-100
              focus:font-[450] focus:text-black md:text-sm"
          >
            {weight.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
