import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@/components/atoms/arrow-right-icon';
import { HomeIcon } from '@/components/atoms/home-icon';
import { CastIcon } from '@/components/atoms/cast-icon';
import { GridIcon } from '@/components/atoms/grid-icon';
import { SearchIcon } from '@/components/atoms/search-icon';
import { FilterIcon } from '@/components/atoms/filter-icon';
import { MusicIcon } from '@/components/atoms/music-icon';
import { PlusIcon } from '@/components/atoms/plus-icon';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../atoms/collapsible';
import { CardGame } from '../molecules/card-game';

export function HomePage() {
  return (
    <>
      <section className='relative h-[420px] before:gradient-top-el after:gradient-bottom-el md:h-[576px] md:before:bg-none'>
        <Image
          src='/images/hero.jpeg'
          alt='hero'
          fill
          quality={100}
          className='object-cover'
        />

        <div className='absolute z-10 w-full bottom-6 flex flex-col items-center gap-5 md:bottom-8'>
          <div className='carousel__control'>
            <button className='carousel__dot'></button>
            <button className='carousel__dot'></button>
            <button className='carousel__dot carousel__dot--active'></button>
            <button className='carousel__dot'></button>
            <button className='carousel__dot'></button>
          </div>

          <h1 className='text-2xl text-white md:text-3xl'>Chicky Run</h1>

          <Link
            href='#'
            className='flex items-center gap-1 text-sm text-white md:text-base'
          >
            Game Details
            <ArrowRightIcon className='w-3 h-3 md:w-4 md:h-4' />
          </Link>
        </div>
      </section>

      <section className='container md:flex md:gap-8 md:py-10'>
        <aside className='md:hidden'>
          <div className='flex overflow-x-auto'>
            <button className='h-menu__item'>
              <HomeIcon className='h-menu__item-icon' />
              Home
            </button>
            <button className='h-menu__item'>
              <CastIcon className='h-menu__item-icon' />
              Timeline
            </button>
            <button className='h-menu__item h-menu__item--active'>
              <GridIcon className='h-menu__item-icon' />
              games
            </button>
            <button className='h-menu__item'>
              <SearchIcon className='h-menu__item-icon' />
              Search
            </button>
            <button className='h-menu__item border-l border-gray-300'>
              <FilterIcon className='h-menu__item-icon' />
              Filter
            </button>
          </div>
        </aside>

        <aside className='hidden md:block w-1/5 py-5'>
          <div className='flex gap-2 items-center border-b border-gray-200 pb-3'>
            <span>
              <SearchIcon className='w-5 h-5 text-gray-400' />
            </span>
            <input
              type='text'
              placeholder='Search'
              className='text-sm text-gray-400 w-full focus:outline-none'
            />
          </div>
          <div className='py-4 space-y-1'>
            <button className='v-menu__item v-menu__item--active'>
              <HomeIcon className='v-menu__item-icon' />
              Home
            </button>
            <button className='v-menu__item'>
              <CastIcon className='v-menu__item-icon' />
              Timeline
            </button>
            <button className='v-menu__item'>
              <GridIcon className='v-menu__item-icon' />
              games
            </button>
          </div>
        </aside>

        <div className='md:w-4/5'>
          <div className='py-5'>
            <div className='flex items-center justify-between mb-5'>
              <h3 className='text-lg font-semibold uppercase'>Hot Game</h3>

              <select className='border border-gray-300 px-2 py-1 text-xs md:hidden'>
                <option disabled value='' selected>
                  Release Date
                </option>
              </select>
            </div>

            <div className='md:hidden'>
              <div className='max-w-[308px] rounded-[14px] overflow-hidden mx-auto'>
                <Image
                  src='/images/game1-bg.png'
                  width={308}
                  height={180}
                  alt=''
                  className='object-center'
                />
                <div className='p-5 space-y-5 bg-[#C48F03] text-white'>
                  <div>
                    <div className='flex gap-5'>
                      <Image
                        src='/images/game1-thumb.png'
                        width={60}
                        height={60}
                        alt=''
                        className='rounded-lg overflow-hidden'
                      />

                      <div className='space-y-1'>
                        <h4 className='font-semibold'>Tree Of Fortune</h4>
                        <p className='text-xs opacity-50'>
                          Legend has it that a farmer was granted a seed from a
                          deity.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='flex justify-between'>
                    <div className='space-y-1'>
                      <h5 className='text-sm font-normal'>MEDIUM</h5>
                      <p className='text-xs opacity-50'>Volatility</p>
                    </div>
                    <div className='space-y-1'>
                      <h5 className='text-sm font-normal'>95.01%</h5>
                      <p className='text-xs opacity-50'>RTP</p>
                    </div>
                    <div className='space-y-1'>
                      <h5 className='text-sm font-normal'>x5000</h5>
                      <p className='text-xs opacity-50'>Maximum Win</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='hidden md:grid md:grid-cols-1 md:gap-5 lg:grid-cols-2'>
              <CardGame
                id='1'
                background='/images/game3-bg.png'
                thumbnail='/images/game3-thumb.png'
                title='Wild Bandito 1'
                description='Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur necessitatibus, laudantium commodi recusandae at
                      perspiciatis corrupti accusamus quidem nam architecto
                      fugit. Quos, autem laborum fuga accusamus id quaerat
                      facere ipsam!'
              />
              <CardGame
                id='2'
                background='/images/game3-bg.png'
                thumbnail='/images/game3-thumb.png'
                title='Wild Bandito 2'
                description='Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur necessitatibus, laudantium commodi recusandae at
                      perspiciatis corrupti accusamus quidem nam architecto
                      fugit. Quos, autem laborum fuga accusamus id quaerat
                      facere ipsam!'
              />
            </div>
          </div>

          <div className='py-5'>
            <div className='flex items-center justify-between mb-5'>
              <h3 className='text-lg font-semibold uppercase'>
                Hottest Category
              </h3>
            </div>

            <div className='md:grid md:grid-cols-1 md:gap-5 lg:grid-cols-2'>
              <div className='space-y-5 md:grid-cols-1'>
                <div className='flex flex-col items-center gap-5'>
                  <div className='p-4 bg-gray-100 text-white rounded-3xl grid grid-cols-4 grid-rows-3 gap-4'>
                    <div className='col-span-2 row-span-2'>
                      <div className='w-full aspect-square rounded-2xl bg-[#5C6EFF] p-4 space-y-1.5'>
                        <MusicIcon className='w-5 h-5' />
                        <h4 className='text-lg font-normal'>Music</h4>
                        <p className='text-xs opacity-50'>
                          Music makes everything better, and these games will
                          grove to it!
                        </p>
                      </div>
                    </div>

                    <div className='col-span-1 row-span-1'>
                      <Image
                        src='/images/game1-thumb.png'
                        width={75}
                        height={75}
                        alt=''
                        className='w-full rounded-lg'
                      />
                    </div>

                    <div className='col-span-1 row-span-1'>
                      <Image
                        src='/images/game1-thumb.png'
                        width={75}
                        height={75}
                        alt=''
                        className='w-full rounded-lg'
                      />
                    </div>

                    <div className='col-span-2 row-span-2'>
                      <Image
                        src='/images/game2-thumb.png'
                        width={168}
                        height={168}
                        alt=''
                        className='w-full rounded-2xl overflow-hidden'
                      />
                    </div>

                    <div className='col-span-1 row-span-1'>
                      <Image
                        src='/images/game1-thumb.png'
                        width={75}
                        height={75}
                        alt=''
                        className='w-full rounded-lg'
                      />
                    </div>

                    <div className='col-span-1 row-span-1'>
                      <Image
                        src='/images/game1-thumb.png'
                        width={75}
                        height={75}
                        alt=''
                        className='w-full rounded-lg'
                      />
                    </div>
                  </div>

                  <div className='carousel__control text-[#9B9B9B] md:hidden'>
                    <button className='carousel__dot'></button>
                    <button className='carousel__dot'></button>
                    <button className='carousel__dot carousel__dot--active'></button>
                    <button className='carousel__dot'></button>
                    <button className='carousel__dot'></button>
                  </div>
                </div>

                <div className='md:hidden'>
                  <button className='flex items-center justify-center gap-2 h-12 py-6 w-full bg-gray-100 rounded-xl border border-gray-200 font-semibold'>
                    Load More
                    <PlusIcon className='w-5 h-5' />
                  </button>
                </div>
              </div>

              <div className='space-y-5 md:grid-cols-1'>
                <div className='flex flex-col items-center gap-5'>
                  <div className='p-4 bg-gray-100 text-white rounded-3xl grid grid-cols-4 grid-rows-3 gap-4'>
                    <div className='col-span-2 row-span-2'>
                      <div className='w-full aspect-square rounded-2xl bg-[#5C6EFF] p-4 space-y-1.5'>
                        <MusicIcon className='w-5 h-5' />
                        <h4 className='text-lg font-normal'>Music</h4>
                        <p className='text-xs opacity-50'>
                          Music makes everything better, and these games will
                          grove to it!
                        </p>
                      </div>
                    </div>

                    <div className='col-span-1 row-span-1'>
                      <Image
                        src='/images/game1-thumb.png'
                        width={75}
                        height={75}
                        alt=''
                        className='w-full rounded-lg'
                      />
                    </div>

                    <div className='col-span-1 row-span-1'>
                      <Image
                        src='/images/game1-thumb.png'
                        width={75}
                        height={75}
                        alt=''
                        className='w-full rounded-lg'
                      />
                    </div>

                    <div className='col-span-2 row-span-2'>
                      <Image
                        src='/images/game2-thumb.png'
                        width={168}
                        height={168}
                        alt=''
                        className='w-full rounded-2xl overflow-hidden'
                      />
                    </div>

                    <div className='col-span-1 row-span-1'>
                      <Image
                        src='/images/game1-thumb.png'
                        width={75}
                        height={75}
                        alt=''
                        className='w-full rounded-lg'
                      />
                    </div>

                    <div className='col-span-1 row-span-1'>
                      <Image
                        src='/images/game1-thumb.png'
                        width={75}
                        height={75}
                        alt=''
                        className='w-full rounded-lg'
                      />
                    </div>
                  </div>

                  <div className='carousel__control text-[#9B9B9B] md:hidden'>
                    <button className='carousel__dot'></button>
                    <button className='carousel__dot'></button>
                    <button className='carousel__dot carousel__dot--active'></button>
                    <button className='carousel__dot'></button>
                    <button className='carousel__dot'></button>
                  </div>
                </div>

                <div className='md:hidden'>
                  <button className='flex items-center justify-center gap-2 h-12 py-6 w-full bg-gray-100 rounded-xl border border-gray-200 font-semibold'>
                    Load More
                    <PlusIcon className='w-5 h-5' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container mb-8 md:hidden'>
        <Collapsible>
          <CollapsibleTrigger>WEB MAP</CollapsibleTrigger>
          <CollapsibleContent className='text-sm opacity-60'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            vel pariatur modi esse saepe consectetur unde possimus doloremque?
            Necessitatibus blanditiis amet, hic magnam pariatur laborum
            voluptatibus alias possimus fugiat veniam?
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger>ABOUT US</CollapsibleTrigger>
          <CollapsibleContent className='text-sm opacity-60'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            vel pariatur modi esse saepe consectetur unde possimus doloremque?
            Necessitatibus blanditiis amet, hic magnam pariatur laborum
            voluptatibus alias possimus fugiat veniam?
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger>EVENTS</CollapsibleTrigger>
          <CollapsibleContent className='text-sm opacity-60'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            vel pariatur modi esse saepe consectetur unde possimus doloremque?
            Necessitatibus blanditiis amet, hic magnam pariatur laborum
            voluptatibus alias possimus fugiat veniam?
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger>OUR PARTNERS</CollapsibleTrigger>
          <CollapsibleContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            vel pariatur modi esse saepe consectetur unde possimus doloremque?
            Necessitatibus blanditiis amet, hic magnam pariatur laborum
            voluptatibus alias possimus fugiat veniam?
          </CollapsibleContent>
        </Collapsible>
      </section>
    </>
  );
}
