"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

import BasicFormSchema from "@/lib/formSchemas/basicFormSchema";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function BasicFormComponent() {
    const form = useForm<z.infer<typeof BasicFormSchema>>({
        resolver: zodResolver(BasicFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            terms: true,
        },
    });

    const [formData, setFormData] = useState<z.infer<typeof BasicFormSchema> | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = (data: z.infer<typeof BasicFormSchema>) => {
        setFormData(data);
        setIsSubmitted(true);
        console.log("Bool is bool?", data.terms);
    };

    return (
        <Form {...form}>            
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md flex flex-col gap-[1rem]">
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <Input placeholder="John" {...field} />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <Input placeholder="Doe" {...field} />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder="email@example.com" {...field} />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder="********" {...field} />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <Input type="password" placeholder="********" {...field} />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                        <FormItem className="">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <FormLabel>I accept the terms and conditions</FormLabel>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
            {isSubmitted && formData && (
                <div className="mt-8 p-4 border rounded-md bg-gray-50">
                    <h2 className="text-lg font-bold">Form Data:</h2>
                    <pre>{JSON.stringify(formData, null, 2)}</pre>
                </div>
            )}
        </Form>
    );
}

