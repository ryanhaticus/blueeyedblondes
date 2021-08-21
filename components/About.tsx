/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
const About = () => {
  return (
    <div className='relative py-16 bg-white overflow-hidden'>
      <div className='hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full'>
        <div
          className='relative h-full text-lg max-w-prose mx-auto'
          aria-hidden='true'
        >
          <svg
            className='absolute top-12 left-full transform translate-x-32'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
          >
            <defs>
              <pattern
                id='74b3fd99-0a6f-4271-bef2-e80eeafdf357'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className='text-gray-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill='url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)'
            />
          </svg>
          <svg
            className='absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
          >
            <defs>
              <pattern
                id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className='text-gray-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)'
            />
          </svg>
          <svg
            className='absolute bottom-12 left-full transform translate-x-32'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
          >
            <defs>
              <pattern
                id='d3eb07ae-5182-43e6-857d-35c643af9034'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className='text-gray-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill='url(#d3eb07ae-5182-43e6-857d-35c643af9034)'
            />
          </svg>
        </div>
      </div>
      <div className='relative px-4 sm:px-6 lg:px-8'>
        <div className='text-lg max-w-prose mx-auto'>
          <h1>
            <span className='block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase'>
              About Us
            </span>
            <span className='mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Blue Eyed Blondes
            </span>
          </h1>
          <p className='mt-8 text-xl text-gray-500 leading-8'>
            We're two sisters, both born with Usher Syndrome 1B, that have been
            fighting for a cure since the very beginning. Blessed with blue eyes
            and blonde hair, we are using the sight we have to raise money for
            our disorder by encouraging friends and family to join us in our
            battle.
          </p>
        </div>
        <div className='mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto'>
          <p>
            The disease is characterized by a profound deafness accompanied with
            retinitis pigmentosa (RP), a breakdown of the cells in the retina.
            To date, we have overcome numerous challenges in order to lead
            fulfilling lives and strive in our interests, nonetheless.
            Accompanied by hard work...
          </p>
          <ul role='list'>
            <li>
              We've cochlear implants and continually work to improve our
              auditory comprehension.
            </li>
            <li>
              Growing up, we attended speech therapy and worked closely with
              speech language pathologists to develop excelling motor skills.
            </li>
            <li>... and so much more.</li>
          </ul>
          <h2>Our participation in research</h2>
          <p>
            As we fight for a cure, we've made it a staple to participate in
            research about RP and continue to support doctors across the nation.
            We've been as close as Iowa to as far as Portland, Oregon to attend
            state of the art facilities and undergo hours of visual testing in
            hopes of being one of the stepping stones towards the light at the
            end of the tunnel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
