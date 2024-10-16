"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 as SpinnerIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import * as z from "zod"
import posts from "@/config/posts"
import { servicesType1, servicesType2 } from "@/config/services"

const contactFormSchema = z.object({
  name: z.string().min(3, { message: "Your name must be at least 3 characters." }),
  email: z.string().email({ message: "Please provide a valid email." }),
  message: z.string()
    .min(4, { message: "Your message must be between 4 and 320 characters long." })
    .max(320, { message: "Your message must be between 4 and 320 characters long." }),
  category: z.string().min(1, { message: "Please select a category." }), 
  service: z.string().min(1, { message: "Please select a service." }),  
})

type ContactFormValues = z.infer<typeof contactFormSchema>

const defaultValues: Partial<ContactFormValues> = {
  name: "",
  email: "",
  message: "",
  category: "",
  service: "",
}

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [availableServices, setAvailableServices] = useState<Services[]>([])

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  })

  const handleCategoryChange = (category: string) => {
    const selectedPost = posts.find((post) => post.title === category)

    if (selectedPost) {
      const allServices = [...servicesType1, ...servicesType2]
      const filteredServices = allServices.filter((service) =>
        service.category.includes(selectedPost.title)
      )
      setAvailableServices(filteredServices)
    } else {
      setAvailableServices([])
    }
  }

  async function onSubmit(data: ContactFormValues) {
    console.log(data)
    try {
      setIsLoading(true)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          category: data.category, 
          service: data.service, 
        }),
      })
      setIsLoading(false)
      form.reset()

      if (!response?.ok) {
        return toast.error("Failed to send email.")
      }
    } catch (error) {
      toast.error("Failed to send email.")
    } finally {
      setIsLoading(false)
      toast.success("Your message has been sent.")
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto space-y-4 text-center">
          {/* Category Field */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <div className="mx-auto flex w-full max-w-md space-x-2">
                  <FormControl>
                    <select 
                      {...field}
                      className="form-select block w-full rounded-md border border-gray-300 px-3 py-2"
                      onChange={(e) => {
                        field.onChange(e)
                        handleCategoryChange(e.target.value) 
                      }}
                    >
                      <option value="">Select a category</option>
                      {posts.map((post) => (
                        <option key={post.id} value={post.title}>
                          {post.title}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Service Field */}
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service</FormLabel>
                <div className="mx-auto flex w-full max-w-md space-x-2">
                  <FormControl>
                    <select {...field} className="form-select block w-full rounded-md border border-gray-300 px-3 py-2">
                      <option value="">Select a service</option>
                      {availableServices.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                      {/* Adding the 'Other' option */}
                      <option value="other">Other</option>
                    </select>
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <div className="mx-auto flex w-full max-w-md space-x-2">
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <div className="mx-auto flex w-full max-w-md space-x-2">
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <div className="mx-auto flex w-full max-w-md space-x-2">
                  <FormControl>
                    <Textarea className="resize-none" {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full max-w-sm">
            {isLoading && <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />}
            Send
          </Button>
        </form>
      </Form>
    </>
  )
}

export default ContactForm
