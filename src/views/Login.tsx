import {
  Card,
  CardContent,
  CardDescription,
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
  FormDescription,
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
  username: z.string().min(2, {
      message: "Username must be at least 2 characters."
  })
})

export function Login() { // 1. Define your form.
  const form = useForm < z.infer < typeof formSchema >> ({
      resolver: zodResolver(formSchema),
      defaultValues: {
          username: ""
      }
  })

  // 2. Define a submit handler.
  function onSubmit(values : z.infer < typeof formSchema >) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
  }

  return (
      <div className=" flex justify-center items-center h-[80%] bg-zinc-50">
          <Card className="w-[360px]  ">
              <CardHeader>
                  <CardTitle>
                      Register
                  </CardTitle>
                  <CardDescription>
                      Join today
                  </CardDescription>
              </CardHeader>
              <CardContent>
                  <Form {...form}>
                      <form onSubmit={
                              form.handleSubmit(onSubmit)
                          }
                          className="space-y-8">
                          <FormField control={
                                  form.control
                              }
                              name="username"
                              render={
                                  ({
                                      field
                                  }) => (
                                      <FormItem>
                                          <FormLabel>Username</FormLabel>
                                          <FormControl>
                                              <Input placeholder="shadcn" {...field}/>
                                          </FormControl>
                                          <FormDescription>
                                              This is your public display name.
                                          </FormDescription>
                                          <FormMessage/>
                                      </FormItem>
                                  )
                              }/>
                          <FormField control={
                                  form.control
                              }
                              name="username"
                              render={
                                  ({
                                      field
                                  }) => (
                                      <FormItem>
                                          <FormLabel>Username</FormLabel>
                                          <FormControl>
                                              <Input placeholder="shadcn" {...field}/>
                                          </FormControl>
                                          <FormDescription>
                                              This is your public display name.
                                          </FormDescription>
                                          <FormMessage/>
                                      </FormItem>
                                  )
                              }/>
                          <Button type="submit">Submit</Button>
                      </form>
                  </Form>
              </CardContent>
              <CardFooter>Already Register? Go to Login</CardFooter>
          </Card>

      </div>
  )
}
