import { DollarSign, Plus, Power } from "lucide-react"
import { Button } from "./ui/button"

function Header() {
  return (
    <div className="h-16 w-full bg-white border-b flex justify-between items-center">
        <h2 className="ml-4 text-lg">Luandry App</h2>
        <div>
        <Button size={'sm'}  variant={'link'} className=" gap-2 mr-2 "> <Plus size={16} />New Order </Button>
        <Button size={'sm'}  variant={'link'} className=" gap-2 mr-2 "> <DollarSign size={16} />Checkout </Button>
        </div>
        <Button size={'sm'}  variant={'link'} className=" gap-2 mr-2 "> <Power size={16} />Logout </Button>
    </div>
  )
}

export default Header