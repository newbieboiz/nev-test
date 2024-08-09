import { LinkedInIcon } from '@/components/atoms/linkedin-icon';
import { LogoIcon } from '@/components/atoms/logo-icon';
import { TwitterIcon } from '@/components/atoms/twitter-icon';
import { YoutubeIcon } from '@/components/atoms/youtube-icon';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className='border-t border-gray-200'>
      <div className='container py-8 md:py-16'>
        <div className='md:flex md:justify-between md:gap-x-8'>
          <div className='space-y-6 md:w-52'>
            <div className='space-y-3'>
              <Link href='#'>
                <LogoIcon className='w-auto h-8 text-gray-400' />
              </Link>
              <p className='text-xs text-gray-400'>
                Valletta Buildings, South Street, Valletta - VLT 1103 Malta
              </p>
            </div>

            <div className='flex items-center gap-4'>
              <Link href='#'>
                <TwitterIcon className='w-5 h-5' />
              </Link>
              <Link href='#'>
                <YoutubeIcon className='w-5 h-5' />
              </Link>
              <Link href='#'>
                <LinkedInIcon className='w-5 h-5' />
              </Link>
            </div>
          </div>

          <div className='hidden md:flex gap-x-16 lg:gap-x-20'>
            <div>
              <h5 className='font-semibold uppercase text-sm mb-4'>Web map</h5>
              <div className='flex flex-col gap-y-2'>
                <Link href='#' className='capitalize text-xs text-gray-400'>
                  Home
                </Link>
                <Link href='#' className='capitalize text-xs text-gray-400'>
                  Games
                </Link>
                <Link href='#' className='capitalize text-xs text-gray-400'>
                  News
                </Link>
                <Link href='#' className='capitalize text-xs text-gray-400'>
                  Match
                </Link>
                <Link href='#' className='capitalize text-xs text-gray-400'>
                  Company
                </Link>
                <Link href='#' className='capitalize text-xs text-gray-400'>
                  Events
                </Link>
                <Link href='#' className='capitalize text-xs text-gray-400'>
                  Partners
                </Link>
              </div>
            </div>

            <div>
              <h5 className='font-semibold uppercase text-sm mb-4'>About us</h5>
              <div className='flex flex-col gap-y-2'>
                <Link href='#' className='capitalize text-xs text-gray-400'>
                  Licensing
                </Link>
                <Link href='#' className='capitalize text-xs text-gray-400'>
                  Certification
                </Link>
                <Link href='#' className='capitalize text-xs text-gray-400'>
                  Responsible gaming
                </Link>
                <Link href='#' className='capitalize text-xs text-gray-400'>
                  Exhibitions
                </Link>
                <Link href='#' className='capitalize text-xs text-gray-400'>
                  Copyright protection
                </Link>
                <Link href='#' className='capitalize text-xs text-gray-400'>
                  Privacy policy
                </Link>
              </div>
            </div>

            <div>
              <h5 className='font-semibold uppercase text-sm mb-4'>EVENTS</h5>
              <div className='flex flex-col gap-y-2'>
                <Link href='#' className='capitalize text-xs text-gray-400'>
                  PG ICE 2017
                </Link>
                <Link href='#' className='capitalize text-xs text-gray-400'>
                  PG ICE 2018
                </Link>
                <Link href='#' className='capitalize text-xs text-gray-400'>
                  PG ICE 2019
                </Link>
                <Link href='#' className='capitalize text-xs text-gray-400'>
                  About ICE
                </Link>
              </div>
            </div>

            <div>
              <h5 className='font-semibold uppercase text-sm mb-4'>
                OUR PARTNERS
              </h5>
              <div className='flex flex-col gap-y-2'>
                <Link href='#' className='capitalize text-xs text-gray-400'>
                  Relax Gaming
                </Link>
                <Link href='#' className='capitalize text-xs text-gray-400'>
                  Leander Games
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr className='bg-gray-200 my-8' />

        <p className='text-xs opacity-40'>
          COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
