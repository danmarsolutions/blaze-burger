import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen bg-white flex flex-col items-center justify-center">
      <p className='mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-600'>COMING SOON</p>
      <div className="w-96 lg:w-[800px]">
        <Image
          src="/wordmark.png"
          alt="Blaze Burger"
          width={776}
          height={321}
          className="h-auto w-full"
          priority
        />
      </div>
      <p className='text-sm font-medium uppercase tracking-[0.2em] text-gray-600'>208 Queens Quay West</p>
      <p className='text-sm font-medium uppercase tracking-[0.2em] text-gray-600'>Toronto, ON M5J 2Y5</p>
    </div>
  )
}
