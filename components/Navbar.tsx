"use client"
import React from 'react';

import Image from 'next/image';
import { Button } from './ui/Button';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { GrMenu } from 'react-icons/gr';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  Sheettrigger
} from '@/components/ui/sheet';

export const Navbar = ({}):any =>{
  return(
    <nav className="w-full backdrop-blur-md bg-white bg-opacity-30 z-50 fixed h-24 flex justify-between items-center py-10 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <Link href="">
        <Image
          alt="logo"
          className="cursor-pointer w-40"
          src="/images/logo.svg"
          height={100}
          width={170}
        />
      </Link>
    </nav>
  )
}

export default Navbar