"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 as SpinnerIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as z from "zod";
import { servicesType1, servicesType2 } from '@/config/services';
import posts from "@/config/posts";

const contactFormSchema = z.object({
  name: z.string().min(3, { message: "Your name must be at least 3 characters." }),
  email: z.string().email({ message: "Please provide a valid email." }),
  message: z.string().min(10, { message: "Your message must be at least 10 characters long." }).max(320),
  category: z.string().min(1, { message: "Please select a category." }), // Changed minimum length to 1
  service: z.string().min(1, { message: "Please select a service." }), // Changed minimum length to 1
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const defaultValues: Partial<ContactFormValues> = {
  name: "",
  email: "",
  category: "",
  service: "",
  message: "",
}

const services = [...servicesType1, ...servicesType2];

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredServices, setFilteredServices] = useState<Services[]>([]);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  });

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    setSelectedCategory(category);
    const filtered = services.filter(service => service.category.includes(category));
    setFilteredServices(filtered);
    setSelectedService(null); // Reset selected service when category changes
  };

  const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(event.target.value);
  };

  async function onSubmit(data: ContactFormValues) {
    console.log(data);
    try {
      setIsLoading(true);
      console.log("Sending data to server...");
      
      // Check if category and service are selected
      if (!selectedCategory || !selectedService) {
        toast.error("Please select both a category and a service.");
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          category: selectedCategory, 
          service: selectedService, 
        }),
      });

      console.log("Response received:", response);
      form.reset(); // Reset form values after successful submission
      setSelectedCategory(null); // Reset category state
      setSelectedService(null); // Reset service state

      if (!response.ok) {
        return toast.error("Failed to send email.");
      }

      toast.success("Your message has been sent.");
    } catch (error) {
      toast.error("Failed to send email.");
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto space-y-4 text-center w-full max-w-xl"
        >
          {/* Category Selection */}
          <div className="flex items-center space-x-4">
            <FormLabel className="w-24 text-left">Category</FormLabel>
            <select
              onChange={handleCategoryChange}
              className="w-full max-w-md rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out m-0"
              placeholder="Select a category"
            >
              <option value="">Select a category</option>
              {posts.map((post) => (
                <option key={post.id} value={post.title}>
                  {post.title}
                </option>
              ))}
            </select>
          </div>

          {/* Service Selection */}
          {selectedCategory && filteredServices.length > 0 && (
            <div className="flex items-center space-x-4">
              <FormLabel className="w-24 text-left">Service</FormLabel>
              <select
                onChange={handleServiceChange}
                className="w-full max-w-md rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out m-0"
                placeholder="Select a service"
              >
                <option value="">Select a service</option>
                {filteredServices.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between space-x-2">
                <FormLabel className="w-32 text-left">Name</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input {...field} placeholder="Enter your name" className="w-full max-w-md rounded-md border-gray-300" />
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
              <FormItem className="flex items-center justify-between space-x-2">
                <FormLabel className="w-32 text-left">Email</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input {...field} placeholder="Enter your email" className="w-full max-w-md rounded-md border-gray-300" />
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
              <FormItem className="flex items-center justify-between space-x-2">
                <FormLabel className="w-32 text-left">Message</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Enter your message"
                      className="w-full max-w-md rounded-md border-gray-300 resize-none"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full max-w-sm">
            {isLoading && <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />}
            Send
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ContactForm;
