import { Calendar } from "@/components/calendar/Calendar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CardDataGaji() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Data Penggajian Pegawai</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 grid-cols-2">
            <div className="flex flex-col space-y-1">
              <Label htmlFor="name">Nama Pegawai</Label>
              <Input id="name" placeholder="Masukkan Nama" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Jabatan</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Junior</SelectItem>
                  <SelectItem value="sveltekit">Senior</SelectItem>
                  <SelectItem value="astro">Manager</SelectItem>
                  <SelectItem value="nuxt">Consultan</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1">
              <Label htmlFor="gaji">Gaji Pokok</Label>
              <Input id="gaji" placeholder="...." />
            </div>
            <div className="flex flex-col space-y-1">
              <Label htmlFor="no_rek">No Rekening</Label>
              <Input id="no_rek" placeholder="No rek" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
}
