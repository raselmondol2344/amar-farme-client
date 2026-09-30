"use client";

import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import {Icon} from "@iconify/react";



import {Button,Description, FieldError, Form, Input, Label,TextField,Card,} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default  function SignInpage() {
   const onSubmit = async(e)=>{
          e.preventDefault();
  
          const formData = new FormData(e.currentTarget);
              const user = Object.fromEntries(formData.entries());
  
              const {data,error}=await authClient.signIn.email({
                  
                  email:user.email,
                  password:user.password,
                 
              })
              //console.log(user);
  
              if(data){
                toast.success('login successful!')
                  redirect("/")
  
              }
              if(error){
                  toast.error("login failed !")
              }
  
          
      };


      const handlegooglesignIn = async () => {
        const data = await authClient.signIn.social({
          provider: "google",
        });
      };



      
        
  return (
    <div className="min-h-screen bg-green-50 px-4 py-4">
      <div className="mx-auto max-w-4xl">

        {/* Signup Card */}
        <Card className="overflow-hidden border border-green-100 bg-white shadow-lg">
          <div className="grid md:grid-cols-2">

            {/* Left Image */}
            <div className="relative hidden min-h-[450px] md:block">
              <Image
                src="/asset/loginImage2.jpeg"
                alt="Fresh agricultural products"
                fill
                className="object-cover rounded-md"
              />
            </div>

            {/* Right Signup Form */}
            <div className="flex items-center justify-center px-5 py-5 md:px-6 md:py-4">
              <div className="w-full max-w-sm">

                {/* Heading */}
                <div className="mb-4 text-center">
                  <h1 className="text-2xl font-bold text-green-800">
                    WELCOME BACK
                  </h1>

                  <p className="mt-1 text-xs text-green-700">
                    stay with Amar Farme and enjoy fresh food
                  </p>
                </div>

                {/* Form */}
                <Form onSubmit={onSubmit} className="flex wax-4xl mx-auto flex-col gap-2.5">

                 
                  {/* Email */}
                  <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                      if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                      ) {
                        return "Please enter a valid email address";
                      }

                      return null;
                    }}
                  >
                    <Label className="text-green-400">Email</Label>
                    <Input placeholder="Enter your email address"  className="border border-green-100 bg-none" />
                    <FieldError />
                  </TextField>

                  {/* Password */}
                  <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                      if (value.length < 8) {
                        return "Password must be at least 8 characters";
                      }

                      if (!/[A-Z]/.test(value)) {
                        return "Password must contain at least one uppercase letter";
                      }

                      if (!/[0-9]/.test(value)) {
                        return "Password must contain at least one number";
                      }

                      return null;
                    }}
                  >
                    <Label className="text-green-400">Password</Label>
                    <Input placeholder="Enter your password" className="border border-green-100 bg-none" />

                    <Description>
                      8 characters, 1 uppercase & 1 number
                    </Description>


                  <FieldError />
                  </TextField>


                  

                  {/* Button */}
                  <Button
                    type="submit"
                    className="mt-1 w-full bg-green-600 font-semibold text-white hover:bg-green-700"
                  >
                    sign in
                  </Button>
                </Form>

                <div className="text-center py-1">or</div>
                
                                   <Button 
                                   onClick={handlegooglesignIn}
                                   
                                   className="w-full" variant="tertiary">
                                  <Icon icon="devicon:google" />
                                  Sign in with Google
                                </Button>
                

                {/* Login Text */}
                <p className="mt-3 text-center text-xs text-gray-500">
                  Already have not any account ?{" "}
                  <Link href='/signUp'>
                  <span className="cursor-pointer font-semibold text-green-600 hover:text-green-700">
                    create account
                  </span>
                  </Link>
                </p>

              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

