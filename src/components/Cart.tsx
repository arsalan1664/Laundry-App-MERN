import {
    Avatar,
    AvatarImage
} from '@radix-ui/react-avatar'
import {
    ScrollArea
} from '@radix-ui/react-scroll-area'
import {
    Minus,
    Plus
} from 'lucide-react'
import {
    Button
} from './ui/button'
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from './ui/card'

function Cart() {
    return (
        <Card className="  w-auto h-full bg-white flex flex-col justify-between">

            <CardHeader>
                <CardTitle>Cart</CardTitle>
                <CardDescription>Add items in your Cartd to checkout</CardDescription>
            </CardHeader>
            <ScrollArea className="h-full w-full rounded-md my-2">
                <CardContent className="h-5/6 space-y-2">
                    <div className="border rounded-3xl w-full p-5 flex justify-between items-center gap-1 ">
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src="/hat.png" alt="coat"/>
                            </Avatar>
                            <h1>hat</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button size={'Min'}
                                className="rounded-full"><Minus size={16}/></Button>
                            <h1>3</h1>
                            <Button size={'Min'}
                                className="rounded-full"><Plus size={16}/></Button>
                        </div>
                    </div>
                </CardContent>
            </ScrollArea>
            <CardFooter className="justify-end">
                <Button className="bg-green-400 hover:bg-green-700 w-full">Submit</Button>
            </CardFooter>
        </Card>
    )
}

export default Cart
