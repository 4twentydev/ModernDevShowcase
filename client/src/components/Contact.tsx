import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: FormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    mutate(data);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 className="text-2xl font-semibold" variants={itemVariants}>Contact Information</motion.h3>
            
            <motion.div className="flex items-start space-x-4" variants={itemVariants}>
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full">
                <i className="fas fa-envelope text-primary"></i>
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a href="mailto:alex@example.com" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-blue-400 transition-colors">
                  alex@example.com
                </a>
              </div>
            </motion.div>
            
            <motion.div className="flex items-start space-x-4" variants={itemVariants}>
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full">
                <i className="fas fa-phone text-primary"></i>
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a href="tel:+11234567890" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-blue-400 transition-colors">
                  +1 (123) 456-7890
                </a>
              </div>
            </motion.div>
            
            <motion.div className="flex items-start space-x-4" variants={itemVariants}>
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full">
                <i className="fas fa-map-marker-alt text-primary"></i>
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-slate-600 dark:text-slate-400">San Francisco, California</p>
              </div>
            </motion.div>
            
            <motion.h3 className="text-2xl font-semibold pt-4" variants={itemVariants}>Follow Me</motion.h3>
            <motion.div className="flex space-x-6" variants={itemVariants}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary dark:hover:text-blue-400 transition-colors">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary dark:hover:text-blue-400 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary dark:hover:text-blue-400 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary dark:hover:text-blue-400 transition-colors">
                <i className="fab fa-dribbble"></i>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          {...field} 
                          className="w-full p-3 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="john@example.com" 
                          type="email" 
                          {...field} 
                          className="w-full p-3 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Project Inquiry" 
                          {...field} 
                          className="w-full p-3 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message here..." 
                          {...field} 
                          rows={5}
                          className="w-full p-3 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full py-3 px-6 bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isPending ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
