'use client'
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '../resizable-navbar'

import { FileDown } from 'lucide-react'
import { ModeToggle } from './theme-trigerred'
import { useState } from 'react'
import React from 'react'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'

import { Footer } from '../footer'
import { navItems } from '@/data/nav'

export function NavbarComponent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


  return (
    <div className="relative w-full">
      <Navbar className="top-5">
        {/* Desktop Navigation */}
        <NavBody className="">
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4 z-99  ">
            <a href="/Muhammad Dustin-resume (11).pdf" download>
              <Button variant="default"><FileDown /></Button>
            </a>
            <ModeToggle />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className='flex justify-center items-center'>

              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
              <ModeToggle />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">

              <a href="/Muhammad Dustin-resume (11).pdf" download className="w-full">
                <Button variant="default" className="w-full flex justify-center gap-2">
                  <FileDown className="w-4 h-4" /> Download CV
                </Button>
              </a>

            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <div className=" w-full min-h-screen md:p-26 md:pt-16 p-6 pt-8 flex flex-col ">
        <main className="flex-grow">
          {children}
        </main>
        {!isHomePage && <Footer />}
      </div>

      {/* Navbar */}
    </div >
  )
}
