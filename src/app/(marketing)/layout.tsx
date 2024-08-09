import { Footer } from '@/components/organisms/footer';
import { Header } from '@/components/organisms/header';
import { Fragment } from 'react';

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </Fragment>
  );
}
