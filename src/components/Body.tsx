import {
    Minus,
    Plus,
} from "lucide-react"
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
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "./ui/card"
import {
    Avatar
} from "./ui/avatar"
import {
    AvatarImage
} from "@radix-ui/react-avatar"
import { ScrollArea } from "./ui/scroll-area"

function Body() {
    return (
        <div className='flex justify-between h-[90vh] w-full bg-zinc-50 p-7 '>
            <div className="flex flex-col">
                <Accordion type="single" collapsible className="w-full space-y-4">
                    <Card className="w-[850px]  bg-white p-2">
                        <AccordionItem value="item-1" className='border-none'>
                            <AccordionTrigger className='scroll-m-20 hover:no-underline pl-6 pb-2  text-base '>Laundry</AccordionTrigger>
                            <AccordionContent className='p-5'>
                                <div className='grid grid-cols-4 gap-4'>
                                    <Button size={'Max'}
                                        variant={'blue'}><img className="h-16" src="/baby-gloves.png"/></Button>
                                    <Button size={'Max'}
                                        variant={'blue'}><img className="h-16" src="/clothes.png"/></Button>
                                    <Button size={'Max'}
                                        variant={'blue'}><img className="h-16" src="/socks.png"/></Button>
                                    <Button size={'Max'}
                                        variant={'blue'}><img className="h-16" src="/dress.png"/></Button>
                                    <Button size={'Max'}
                                        variant={'blue'}><img className="h-16" src="/hat.png"/></Button>
                                    <Button size={'Max'}
                                        variant={'blue'}><img className="h-16" src="/hawaiian-shirt.png"/></Button>
                                    <Button size={'Max'}
                                        variant={'blue'}><img className="h-16" src="/pants.png"/></Button>
                                    <Button size={'Max'}
                                        variant={'blue'}><img className="h-16" src="/shawl.png"/></Button>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Card>
                    <Card className="w-[850px]  bg-white p-2">
                        <AccordionItem value="item-2" className='border-none'>
                            <AccordionTrigger className='scroll-m-20 hover:no-underline pl-6 pb-2  text-base '>Dry Clean</AccordionTrigger>
                            <AccordionContent className='p-5'>
                                <div className='grid grid-cols-4 gap-4'>
                                    <Button size={'Max'}
                                        variant={'green'}><img className="h-16" src="/baby-gloves.png"/></Button>
                                    <Button size={'Max'}
                                        variant={'green'}><img className="h-16" src="/clothes.png"/></Button>
                                    <Button size={'Max'}
                                        variant={'green'}><img className="h-16" src="/socks.png"/></Button>
                                    <Button size={'Max'}
                                        variant={'green'}><img className="h-16" src="/dress.png"/></Button>
                                    <Button size={'Max'}
                                        variant={'green'}><img className="h-16" src="/hat.png"/></Button>
                                    <Button size={'Max'}
                                        variant={'green'}><img className="h-16" src="/hawaiian-shirt.png"/></Button>
                                    <Button size={'Max'}
                                        variant={'green'}><img className="h-16" src="/pants.png"/></Button>
                                    <Button size={'Max'}
                                        variant={'green'}><img className="h-16" src="/shawl.png"/></Button>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Card>
                    <Card className="w-[850px]  bg-white p-2">
                        <AccordionItem value="item-3" className='border-none'>
                            <AccordionTrigger className='scroll-m-20 hover:no-underline pl-6 pb-2  text-base '>Pressed/Ironed</AccordionTrigger>
                            <AccordionContent className='p-5'>
                                <div className='grid grid-cols-4 gap-4'>
                                    <Button size={'Max'}
                                        variant={'red'}><img className="h-16" src="/baby-gloves.png"/></Button>
                                    <Button size={'Max'}
                                        variant={'red'}><img className="h-16" src="/clothes.png"/></Button>
                                    <Button size={'Max'}
                                        variant={'red'}><img className="h-16" src="/socks.png"/></Button>
                                    <Button size={'Max'}
                                        variant={'red'}><img className="h-16" src="/dress.png"/></Button>
                                    <Button size={'Max'}
                                        variant={'red'}><img className="h-16" src="/hat.png"/></Button>
                                    <Button size={'Max'}
                                        variant={'red'}><img className="h-16" src="/hawaiian-shirt.png"/></Button>
                                    <Button size={'Max'}
                                        variant={'red'}><img className="h-16" src="/pants.png"/></Button>
                                    <Button size={'Max'}
                                        variant={'red'}><img className="h-16" src="/shawl.png"/></Button>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Card>
                </Accordion>


            </div>
            <div>
                <Card className="w-[350px] h-full bg-white flex flex-col justify-between">

                    <CardHeader>
                        <CardTitle>Cart</CardTitle>
                        <CardDescription>Add items in your Cartd to checkout</CardDescription>
                    </CardHeader>
                    <ScrollArea className="h-full w-full rounded-md my-2">
                    <CardContent className="h-5/6 space-y-2">
                        <div className="border rounded-3xl w-full p-5 flex justify-between items-center ">
                            <div className="flex items-center gap-5">
                                <Avatar>
                                    <AvatarImage src="/hat.png" alt="coat"/>
                                </Avatar>
                                <h1>hat</h1>
                            </div>
                            <div className="flex items-center gap-3">
                                <Button size={'Min'}
                                    className="rounded-full"><Minus size={16}/></Button>
                                    <h1>x 3</h1>
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
            </div>
        </div>
    )
}

export default Body
