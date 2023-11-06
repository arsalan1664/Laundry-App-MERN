import {
    Avatar,
    AvatarImage
} from '@radix-ui/react-avatar'
import {
    ScrollArea
} from '@radix-ui/react-scroll-area'
import {
    Minus,
    Plus,
    X
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
import {
    useDispatch,
    useSelector
} from 'react-redux'
import {  CartItem, decrement, increment, remove } from '@/Redux/feature/cartSlice'


function Cart() {
    const cart = useSelector((state : any) => state.cart.items);
    // 
    const dispatch = useDispatch();

    console.log(cart);


    return (
        <Card className="  w-auto h-full bg-white flex flex-col justify-between">
            <CardHeader>
                <CardTitle>Cart</CardTitle>
                <CardDescription>Add items in your Cartd to checkout</CardDescription>
            </CardHeader>


            <CardContent className="h-5/6 space-y-2  ">
                <ScrollArea className="h-full w-full rounded-md my-2">
                    {
                    cart.map((i:CartItem) => (
                        <div className={`${[i.color]} relative border rounded-3xl w-full p-5 flex justify-between items-center my-2`}>
                            <Button onClick={()=>dispatch(remove(i))} size={'Min'} variant={'ghost'}
                                className="rounded-full absolute top-1 right-1"><X size={16}/></Button>
                            <div className="flex items-center gap-3">
                                <Avatar className='w-8 h-8'>
                                    <AvatarImage src={
                                            i.image
                                        }
                                        alt="hat"/>
                                </Avatar>
                                <h1>{
                                    i.title
                                }</h1>
                            </div>
                            <div className="flex items-center gap-">
                                <Button size={'Min'} onClick={()=>dispatch(decrement(i))}
                                    className="rounded-full"><Minus size={16}/></Button>
                                <Card className='px-3'>{i.count}</Card>
                                <Button size={'Min'} onClick={()=>dispatch(increment(i))}
                                    className="rounded-full"><Plus size={16}/></Button>
                            </div>
                        </div>
                    ))
                } </ScrollArea>
            </CardContent>
            <CardFooter className="justify-end">
                <Button className="bg-green-400 hover:bg-green-700 w-full">Submit</Button>
            </CardFooter>

        </Card>
    )
}

export default Cart






