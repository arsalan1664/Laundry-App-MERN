import { Button } from "./ui/button"

function Banner() {
    return (
        <div className="relative">
            <img alt="imag" src="/public/mt-1276-content-bg01.jpg" className="overflow-x-hidden"/>
            <div className="absolute top-10 my-12 mx-12 w-96">
                <h1 className=" text-white mt-6 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">We offer the best laundry service</h1>
                <p className="  text-xl text-muted-foreground">The Laundry Company provides a premium laundry,
                             ironing, dry cleaning and alteration service for domestic and small businesses in the US.</p>
                <Button className="mt-4">Client</Button>
            </div>
        </div>
    )
}

export default Banner
