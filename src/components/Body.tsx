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
    Card} from "./ui/card"
import Cart from "./Cart"



const LaundryItems = [
    {
        "id": 1,
        "item": "Laundry",
        "title": "Gloves",
        "image": "/baby-gloves.png",    
    },
    {
        "id": 2,
        "item": "Laundry",
        "title": "Clothes",
        "image": "/clothes.png",    
    },
    {
        "id": 3,
        "item": "Laundry",
        "title": "Socks",
        "image": "/socks.png",    
    },
    {
        "id": 4,
        "item": "Laundry",
        "title": "Dress",
        "image": "/dress.png",    
    },
    {
        "id": 5,
        "item": "Laundry",
        "title": "Hat",
        "image": "/hat.png",    
    },
    {
        "id": 6,
        "item": "Laundry",
        "title": "Shirt",
        "image": "/hawaiian-shirt.png",    
    },
    {
        "id": 7,
        "item": "Laundry",
        "title": "Pants",
        "image": "/pants.png",    
    },
    {
        "id": 8,
        "item": "Laundry",
        "title": "Shawl",
        "image": "/shawl.png",    
    },
    
]

const DryCleanItems = [
    {
        "id": 1,
        "item": "Dry Clean",
        "title": "Gloves",
        "image": "/baby-gloves.png",    
    },
    {
        "id": 2,
        "item": "Dry Clean",
        "title": "Clothes",
        "image": "/clothes.png",    
    },
    {
        "id": 3,
        "item": "Dry Clean",
        "title": "Socks",
        "image": "/socks.png",    
    },
    {
        "id": 4,
        "item": "Dry Clean",
        "title": "Dress",
        "image": "/dress.png",    
    },
    {
        "id": 5,
        "item": "Dry Clean",
        "title": "Hat",
        "image": "/hat.png",    
    },
    {
        "id": 6,
        "item": "Dry Clean",
        "title": "Shirt",
        "image": "/hawaiian-shirt.png",    
    },
    {
        "id": 7,
        "item": "Dry Clean",
        "title": "Pants",
        "image": "/pants.png",    
    },
    {
        "id": 8,
        "item": "Dry Clean",
        "title": "Shawl",
        "image": "/shawl.png",    
    },
    
]

const IronItems = [
    {
        "id": 1,
        "item": "Iron",
        "title": "Gloves",
        "image": "/baby-gloves.png",    
    },
    {
        "id": 2,
        "item": "Iron",
        "title": "Clothes",
        "image": "/clothes.png",    
    },
    {
        "id": 3,
        "item": "Iron",
        "title": "Socks",
        "image": "/socks.png",    
    },
    {
        "id": 4,
        "item": "Iron",
        "title": "Dress",
        "image": "/dress.png",    
    },
    {
        "id": 5,
        "item": "Iron",
        "title": "Hat",
        "image": "/hat.png",    
    },
    {
        "id": 6,
        "item": "Iron",
        "title": "Shirt",
        "image": "/hawaiian-shirt.png",    
    },
    {
        "id": 7,
        "item": "Iron",
        "title": "Pants",
        "image": "/pants.png",    
    },
    {
        "id": 8,
        "item": "Iron",
        "title": "Shawl",
        "image": "/shawl.png",    
    },
    
]





function Body() {
    const buttons_Blue = LaundryItems.map((item) => (
        <Button key={item.id}
            size={'Max'}
            variant={'blue'}>
            <img className="h-16"
                src={item.image}
                alt={
                    `Image ${item.id}`
                }/>
        </Button>
    ));
    const buttons_Red = DryCleanItems.map((item) => (
        <Button key={item.id}
            size={'Max'}
            variant={'red'}>
            <img className="h-16"
                src={item.image}
                alt={
                    `Image ${item.image}`
                }/>
        </Button>
    ));
    const buttons_Green = IronItems.map((item) => (
        <Button key={item.id}
            size={'Max'}
            variant={'green'}>
            <img className="h-16"
                src={item.image}
                alt={
                    `Image ${item.image}`
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
