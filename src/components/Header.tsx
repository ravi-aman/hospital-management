'use client';

import * as React from "react";
import Link from "next/link";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Logo from "@/components/Logo";

const components = [
    {
        title: "Check Blood",
        href: "/user/blood",
        description: "Quickly locate available blood supplies and manage your inventory with ease.",
    },
    {
        title: "Check Oxygen Cylinders",
        href: "#",
        description: "Find and track available oxygen cylinders to ensure timely access.",
    },
    {
        title: "Book Appointment",
        href: "#",
        description: "Schedule appointments at hospitals or clinics effortlessly.",
    },
    {
        title: "Check Medicine",
        href: "#",
        description: "Search for and manage medicine availability and inventory efficiently.",
    },
    {
        title: "Check Beds",
        href: "/user/beds",
        description: "Find available hospital beds in your area with real-time updates.",
    },
    {
        title: "Share Your Data",
        href: "#",
        description: "Share your data for research purposes and get exciting rewards or tokens.",
    },
    {
        title: "Ask for Donation",
        href: "#",
        description: "Get donations for your needs.",
    },
    {
        title: "Test Availability",
        href: "#",
        description: "Find available tests in your area with real-time updates.",
    },
    {
        title: "Availability of Treatments",
        href: "#",
        description: "Find available treatments in your area with real-time updates.",
    },
    {
        title: "Find Insurance",
        href: "#",
        description: "Find appropriate insurance for you.",
    },
];

export function Header() {
    return (
        <div className="flex flex-col md:flex-row justify-between w-full bg-black relative top-0 z-100">
            <div className="logo flex justify-center md:justify-start w-full md:w-auto p-4">
                <Logo />
            </div>
            <div className="navigationMenu w-full md:w-auto pt-4 md:pt-0 z-100 flex justify-center md:justify-start">
                <NavigationMenu>
                    <NavigationMenuList className="flex flex-col md:flex-row">
                        <NavigationMenuItem>
                            <Link href="/user/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Home
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/user/"
                                            >
                                                <Icons.logo className="h-6 w-6" />
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    Rk
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Comprehensive healthcare management platform offering bed, blood, oxygen, and medicine tracking, along with appointment scheduling and hospital system management.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="/hospital/" title="Hospital">
                                        Manage hospital systems, register facilities, and track patient services.
                                    </ListItem>
                                    <ListItem href="#" title="Doctor">
                                        Find doctors, manage appointments, and access medical profiles.
                                    </ListItem>
                                    <ListItem href="#" title="Medicine Distributor">
                                        Oversee medicine distribution, manage stock, and streamline supply chains.
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                    {components.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="#z" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Contact us
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="profile">
                <div className="flex items-center justify-between px-10 py-5 w-100 text-white mt-10 md:ml-15 md:pt-0 z-100 md:justify-start">
                    {/* Render different components based on sign-in status */}
                    <SignedIn>
                        {/* Display the user's profile or menu through UserButton */}
                        <UserButton />
                    </SignedIn>

                    <SignedOut>
                        {/* Show the SignInButton when the user is not signed in */}
                        <SignInButton />
                    </SignedOut>
                </div>
            </div>
        </div>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
