import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import * as z from "zod"
import {
    Button
} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import {
    Input
} from "@/components/ui/input"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import {
    useForm
} from "react-hook-form"


const formSchema = z.object({
    email: z.string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),
    password: z.string().min(5, {
        message: "password must be at least 5 characters."
    })
})

export function Login() { // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: ""
        }
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div className=" flex justify-center items-center h-[80%]">
            <Card className="w-[360px] bg-zinc-50 ">
                <CardHeader>
                    <CardTitle>
                        Login
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={
                            form.handleSubmit(onSubmit)
                        }
                            className="space-y-4">
                            <FormField control={
                                form.control
                            }
                                name="email"
                                render={
                                    ({
                                        field
                                    }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                } />
                            <FormField control={
                                form.control
                            }
                                name="password"
                                render={
                                    ({
                                        field
                                    }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" placeholder="password" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                } />

                            <Button className="bg-green-500 hover:bg-green-700" type="submit">Submit</Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter>Create an account by go to register</CardFooter>
            </Card>

        </div>
    )
}
