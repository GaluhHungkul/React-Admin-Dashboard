import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEditProduct } from "@/zustand/useEditedProduct"
import { FormEvent } from "react"

type Props = {
    open : boolean;
    setOpen : (value?:boolean) => void;
}

const ModalEditProduct = ({ open, setOpen }) => {

    const { product } = useEditProduct()
    
    const handleEditProduct = async (e:FormEvent) => {
        e.preventDefault()
        const {  } = e.target
    }

    return (
    <Dialog open={open} onOpenChange={setOpen} >
      <form onSubmit={handleEditProduct}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="mb-4">Edit product</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue={product?.name} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Price (Rp)</Label>
              <Input id="username-1" name="username" defaultValue={product?.price} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Stock</Label>
              <Input id="username-1" name="username" defaultValue={product?.stock} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Image (sumber eksternal)</Label>
              <Input id="username-1" name="username" defaultValue={product?.img} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Edit</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}


export default ModalEditProduct