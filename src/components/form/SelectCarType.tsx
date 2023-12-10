import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectWaktuProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any;
}

const SelectCarType = ({ field }: SelectWaktuProps) => {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
      <SelectTrigger>
        <SelectValue placeholder="Pilih tipe mobil" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Automatic">Automatic</SelectItem>
        <SelectItem value="Automanual">Automanual</SelectItem>
        <SelectItem value="Manual">Manual</SelectItem>
        <SelectItem value="CVT">CVT</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectCarType;
