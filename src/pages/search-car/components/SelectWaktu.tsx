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

const SelectWaktu = ({ field }: SelectWaktuProps) => {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
      <SelectTrigger>
        <SelectValue placeholder="Pilih waktu ambil" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="10:00">10:00</SelectItem>
        <SelectItem value="11:00">11:00</SelectItem>
        <SelectItem value="12:00">12:00</SelectItem>
        <SelectItem value="13:00">13:00</SelectItem>
        <SelectItem value="14:00">14:00</SelectItem>
        <SelectItem value="15:00">15:00</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectWaktu;
