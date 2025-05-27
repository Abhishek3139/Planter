
export function Footer() {
  return (
    <footer>
      <div className='mt-8 bg-[#15803D] pt-9'>
        <div className='mx-auto w-full max-w-[1166px] px-4 xl:px-0'>
          <div className='flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10'>

            {/* Logo and Description */}
            <div className='md:w-[316px]'>
              <h1 className='text-white text-[24px] font-extrabold'>
                <span className='text-rose-600'>YOUR</span>LOGO
              </h1>
              <p className='mt-[18px] text-[15px] font-normal text-white/80'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugit non. Incidunt dolorum adipisci, tempore asperiores nemo odio facere officiis enim animi placeat eaque nesciunt alias beatae id, at dicta.
              </p>

              {/* Social Media Icons */}
              <div className='mt-[18px] flex gap-4'>
                {[
                  { href: '#', src: 'https://www.englishyaari.com/img/facebook.svg', alt: 'facebook icon' },
                  { href: '/', src: 'https://www.englishyaari.com/img/linkdin.svg', alt: 'linkedin icon' },
                  { href: '/', src: 'https://www.englishyaari.com/img/instagram1.svg', alt: 'instagram icon' },
                  { href: '', src: 'https://www.englishyaari.com/img/twitter.svg', alt: 'twitter icon' },
                  { href: 'https://www.youtube.com/', src: 'https://www.englishyaari.com/img/youtube.svg', alt: 'youtube icon' },
                ].map((item, i) => (
                  <a key={i} className='hover:scale-110' target='_blank' href={item.href} rel="noopener noreferrer">
                    <img src={item.src} alt={item.alt} width='36' height='36' loading='lazy' />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className='md:w-[316px] mt-6 md:mt-0 space-y-[23px]'>
              {/* Phone */}
              <div className='flex'>
                <div className='flex h-[38px] w-[38px] items-center justify-center rounded-full'>
                  {/* Phone Icon */}
                  📞
                </div>
                <div className='ml-[18px]'>
                  <a href='tel:+911800123444' className='text-[14px] font-medium text-white'>
                    +91 1800123444
                  </a>
                  <p className='text-[12px] font-medium text-white'>Support Number</p>
                </div>
              </div>

              {/* Email */}
              <div className='flex'>
                <div className='flex h-[38px] w-[38px] items-center justify-center rounded-full'>
                  📧
                </div>
                <div className='ml-[18px]'>
                  <a href='mailto:help@lorem.com' className='text-[14px] font-medium text-white'>
                    help@lorem.com
                  </a>
                  <p className='text-[12px] font-medium text-white'>Support Email</p>
                </div>
              </div>

              {/* Address */}
              <div className='flex'>
                <div className='flex h-[38px] w-[38px] items-center justify-center rounded-full'>
                  📍
                </div>
                <div className='ml-[18px]'>
                  <p className='text-[14px] font-medium text-white'>
                    Sub Nerul, Mumbai, India, 123456
                  </p>
                  <p className='text-[12px] font-medium text-white'>Address</p>
                </div>
              </div>
            </div>

            {/* Page Links */}
            <div className='mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]'>
              <div>
                <p className='text-[18px] font-medium'>Pages</p>
                <ul className='mt-3 space-y-[15px]'>
                  {[
                    { name: 'Home', href: '/' },
                    { name: 'News', href: '/our-tutors' },
                    { name: 'Contact', href: '/become-a-tutor' },
                    { name: 'Plans and pricing', href: '/plans-and-pricing' },
                  ].map((link, i) => (
                    <li key={i}>
                      <a
                        className='text-[15px] font-normal hover:font-semibold hover:text-white/80'
                        href={link.href}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
