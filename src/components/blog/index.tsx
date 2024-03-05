const callouts = [
  {
    name: 'Post format audio blogs',
    description:
      'Nunc aliquet, justo non commodo congue, velit sem pulvinarenim, acbibendum mi mi eget libero. Maecenas ac viverraenim, et laoreet...',
    imageSrc: 'public/blog-4-1-720x484.jpg',
    imageAlt: 'flower',
    href: '#',
  },
  {
    name: 'Post format audio blogs',
    description:
      'Nunc aliquet, justo non commodo congue, velit sem pulvinarenim, acbibendum mi mi eget libero. Maecenas ac viverraenim, et laoreet...',
    imageSrc: 'public/blog-4-1-720x484.jpg',
    imageAlt: 'flower',
    href: '#',
  },
  {
    name: 'Post format audio blogs',
    description:
      'Nunc aliquet, justo non commodo congue, velit sem pulvinarenim, acbibendum mi mi eget libero. Maecenas ac viverraenim, et laoreet...',
    imageSrc: 'public/blog-4-1-720x484.jpg',
    imageAlt: 'flower',
    href: '#',
  },
];

export default function Blod() {
  return (
    <div className='bg-gray-100 mr-3 ml-3'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32'>
          <div className='mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
            {callouts.map((callout, index) => (
              <div key={index} className='group relative'>
                <div className='relative h-60 w-full overflow-hidden  bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64'>
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className='h-full w-full object-cover object-center'
                  />
                </div>
                <h3 className='mt-6 text-sm text-gray-500'>
                  <a href={callout.href}>
                    <span className='absolute inset-0' />
                    {callout.name}
                  </a>
                </h3>
                <p className='text-base font-semibold text-gray-900'>{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
