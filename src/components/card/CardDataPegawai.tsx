// import { Calendar } from "@/components/calendar/Calendar";
import { DatePicker } from "../calendar/DatePicker";
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

export default function CardDataPegawai() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Data Pribadi Pegawai</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center space-y-2">
            <div className="flex items-center space-y-1 justify-between">
              <Label className="w-1/3" htmlFor="name">
                Nama Pegawai
              </Label>
              <Input
                className="justify-end"
                id="name"
                placeholder="Masukkan Nama"
              />
            </div>
            <div className="flex w-full items-center space-y-1">
              <Label htmlFor="birth" className="w-1/4">
                Tempat, Tanggal Lahir
              </Label>
              <DatePicker />
            </div>
            <div className="flex items-center space-y-1.5">
              <Label className="w-1/3" htmlFor="framework">
                Jenis Kelamin
              </Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Laki-Laki</SelectItem>
                  <SelectItem value="sveltekit">Perempuan</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-y-1">
              <Label className="w-1/3" htmlFor="alamat">
                Alamat
              </Label>
              <Input id="alamat" placeholder="Alamat Rumah" />
            </div>
            <div className="flex items-center space-y-1">
              <Label className="w-1/3" htmlFor="no_hp">
                No Telephone
              </Label>
              <Input id="no_hp" placeholder="Nomer Handphone" />
            </div>
            <div className="flex items-center space-y-1">
              <Label className="w-1/3" htmlFor="email">
                Email
              </Label>
              <Input id="email" placeholder="Email" />
            </div>

            <div className="flex items-center space-y-1.5">
              <Label className="w-1/3" htmlFor="framework">
                Jabatan
              </Label>
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
