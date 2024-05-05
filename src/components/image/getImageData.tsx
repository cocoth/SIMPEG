/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PByIKtsv8h3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className="text-xl">Upload your profile picture</CardTitle>
        <CardDescription>JPEG, PNG, GIF. Max file size 10MB.</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-4 py-6">
        <div className="grid w-24 h-24 border-dashed border-2 border-gray-200 rounded-lg place-items-center text-gray-500">
          <img
            alt="Placeholder"
            className="rounded-lg border-white"
            height="96"
            src="/placeholder.svg"
            style={{
              aspectRatio: "96/96",
              objectFit: "cover",
            }}
            width="96"
          />
          <div className="flex h-0 w-full border-dashed border-t-2 border-gray-200 items-center justify-center rounded-b-lg">
            <UploadIcon className="h-6 w-6" />
            <span className="sr-only">Upload</span>
          </div>
          <input className="absolute inset-0 opacity-0 w-full cursor-pointer" type="file" />
        </div>
        <div className="grid w-full max-w-sm items-start gap-1.5">
          <Button className="w-full">Upload</Button>
        </div>
      </CardContent>
    </Card>
  )
}

function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}