import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from "./ui/accordion"
import {
    Button
} from "./ui/button"
import {
    Card
} from "./ui/card"
import Cart from "./Cart"
import {
    useDispatch
} from "react-redux"
import {
     add 
} from "@/Redux/feature/cartSlice"
import { DryCleanItems, IronItems, LaundryItems } from "./ItemsData"


function Body() {
    const dispatch = useDispatch();
    const buttons_Blue = LaundryItems.map((item) => (
        <Button onClick={()=>dispatch(add(item))} key={
                item.id
            }
            size={'Max'}
            variant={'blue'}>
            <img className="h-16"
                src={
                    item.image
                }
                alt={
                    `Image ${
                        item.id
                    }`
                }/>
        </Button>
    ));
    const buttons_Red = DryCleanItems.map((item) => (
        <Button onClick={()=>dispatch(add(item))} key={
                item.id
            }
            size={'Max'}
            variant={'red'}>
            <img className="h-16"
                src={
                    item.image
                }
                alt={
                    `Image ${
                        item.image
                    }`
                }/>
        </Button>
    ));
    const buttons_Green = IronItems.map((item) => (
        <Button onClick={()=>dispatch(add(item))} key={
                item.id
            }
            size={'Max'}
            variant={'green'}>
            <img className="h-16"
                src={
                    item.image
                }
                alt={
                    `Image ${
                        item.image
                    }`
                }/>
        </Button>
    ));
    return (
        <div className='flex  flex-col gap-4 lg:flex-row justify-around min-h-[90%] h-auto w-full bg-zinc-50 p-7 '>
            <div className="flex flex-col ">
                <Accordion type="single" collapsible className="w-full space-y-4">
                    <Card className="w-auto lg:w-[850px]  bg-white p-2">
                        <AccordionItem value="item-1" className='border-none'>
                            <AccordionTrigger className='scroll-m-20 hover:no-underline pl-6 pb-2  text-base '>Laundry</AccordionTrigger>
                            <AccordionContent className='p-5'>
                                <div className='grid grid-cols-2  sm:grid-cols-4 gap-4'>
                                    {buttons_Blue} </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Card>
                    <Card className="w-auto  bg-white p-2">
                        <AccordionItem value="item-2" className='border-none'>
                            <AccordionTrigger className='scroll-m-20 hover:no-underline pl-6 pb-2  text-base '>Dry Clean</AccordionTrigger>
                            <AccordionContent className='p-5'>
                                <div className='grid grid-cols-2  sm:grid-cols-4 gap-4'>
                                    {buttons_Green} </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Card>
                    <Card className="w-auto bg-white p-2">
                        <AccordionItem value="item-3" className='border-none'>
                            <AccordionTrigger className='scroll-m-20 hover:no-underline pl-6 pb-2  text-base '>Pressed/Ironed</AccordionTrigger>
                            <AccordionContent className='p-5'>
                                <div className='grid grid-cols-2  sm:grid-cols-4 gap-4'>
                                    {buttons_Red} </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Card>
                </Accordion>
            </div>
            <div>
                <Cart/>
            </div>
        </div>
    )
}

export default Body
