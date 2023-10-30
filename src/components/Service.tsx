import {
    Shirt
} from 'lucide-react'
import {
    Waves
} from 'lucide-react'
import {
    Droplet
} from 'lucide-react'

function Service() {
    return (
        <>
            <div className="container flex flex-col mx-auto bg-zinc-100">
                <div className="w-full draggable">
                    <div className="container flex flex-col items-center gap-16 mx-auto my-32">
                        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                            <div className="flex flex-col items-center gap-3 px-8 py-10 bg-background rounded-3xl shadow-main">
                                <span>
                                    <Waves size={40}
                                        color="#0fccc9"
                                        strokeWidth={1.25}/>
                                </span>
                                <p className="text-2xl  text-dark-grey-900">Laundry Services</p>
                                <p className=" text-center text-sm leading-7 text-muted-foreground">
                                    Let us pick up your dirty laundry, sort it, stains, dry, fold and deliver back to you in one neat, easy package.
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-3 px-8 py-10 bg-background rounded-3xl shadow-main">
                                <span>
                                    <Shirt size={40}
                                        color="#0fccc9"
                                        strokeWidth={1.25}/>
                                </span>
                                <p className="text-2xl  text-dark-grey-900">Dry Cleaning Services</p>
                                <p className="text-center text-sm leading-7 text-muted-foreground">
                                SMU students and local residents love on our reliable dry cleaning services for the fast, accurate, top quality results.
                                </p>

                            </div>
                            <div className="flex flex-col items-center gap-3 px-8 py-10 bg-background rounded-3xl shadow-main">
                                <span>
                                    <Droplet size={40}
                                        color="#0fccc9"
                                        strokeWidth={1.25}/>
                                </span>
                                <p className="text-2xl  text-dark-grey-900">
                                    Carpet Cleaning Services
                                </p>
                                <p className="text-center text-sm leading-7 text-muted-foreground">
                                To keep carpet at peak performance, we recommend professional deep cleaning your every 12 to 18 months.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Service
