'use client';

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();

    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger>
                    <Image src="/icons/hamburger.svg" width={30} height={30} alt="Menu icon" className="cursor-pointer"/>
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-white">
                    <Link href="/" className="cursor-pointer items-center flex gap-1 px-4">
                        <Image src="/icons/logo.svg" width={34} height={34} alt="banquee logo" />
                        <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Banquee</h1>
                    </Link>
                    <div className="mobilenav-sheet">
                        <SheetClose asChild>
                            <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                            {sidebarLinks.map((link, index) => {
                                const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);

                                return (
                                    <Link href={link.route} key={link.label} className={cn('sidebar-link', {'bg-bank-gradient': isActive})}>
                                        <div className="relative size-6">
                                            <Image src={link.imgURL} alt={link.label} fill className={cn({'brightness-[3] invert-0': isActive})}/>
                                        </div>
                                        <p className={cn('sidebar-label', {'!text-white': isActive})}>{link.label}</p>
                                    </Link>
                                )
                            })}
                            </nav>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav