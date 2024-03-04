"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { TypewriterEffect } from "./TypewriterEffect";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Signup from "../Auth/Signup/Signup";
import Signin from "../Auth/Signin/Signin";
import { useEffect, useState } from "react";
import axios from "axios";

export function BannerRender() {
  const [user, setUser] = useState({
    username: "",
    email: "",
  });

  const [words, setwords] = useState([
    {
      text: "Write",
    },
    {
      text: "awesome",
    },
    {
      text: "articles",
    },
    {
      text: "with",
    },
    {
      text: "NEXTBlog.",
      className: "text-primary dark:text-primary",
    },
  ]);

  const fetchUser = async () => {
    try {
      const response = await axios.get("api/user/getDetails");

      if (response.status === 200) {
        setUser({
          username: response.data.data.username,
          email: response.data.data.email,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (user.username) {
      const words = [
        { text: "Welcome" },
        { text: "back" },
        { text: user.username, className: "text-primary dark:text-primary" },
        { text: "to" },
        { text: "NEXTBlog." },
      ];

      setwords(words);
    }
  }, [user.username]);

  return (
    <div className='flex flex-col items-center justify-center h-[40rem] '>
      <p className='text-neutral-600 dark:text-neutral-200 text-base  mb-10'>
        The road to freedom starts from here
      </p>
      <TypewriterEffect words={words} />
      <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10 text-foreground'>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant='outline'>
              <span className='py-2 px-6'>Join now</span>
            </Button>
          </DialogTrigger>
          <DialogContent className='max-w-[350px]'>
            <DialogHeader>
              <DialogTitle>Create an account</DialogTitle>
            </DialogHeader>
            <DialogDescription />
            <Signup />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button className='bg-secondary text-foreground'>
              <span className='py-2 px-6'>Signup</span>
            </Button>
          </DialogTrigger>
          <DialogContent className='max-w-[350px]'>
            <DialogHeader>
              <DialogTitle>Signin to your account</DialogTitle>
            </DialogHeader>
            <DialogDescription />
            <Signin />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
