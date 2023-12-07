
import { Button } from './ui/button'

function Navbar() {
    return (
        <nav className='flex justify-center items-center w-full h-16 border-b-2 border-primary-foreground'>
            <div className='h-4/6 w-11/12  flex justify-between items-center'>
                <div>Laundry App</div>
                <div>
                    <Button variant={'outline'} className='bg-[#0fccc9]'>
                        Client Area
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
