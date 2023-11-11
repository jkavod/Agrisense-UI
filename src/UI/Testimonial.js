import React, { useState, useEffect } from 'react';

export default function Example() {
  const [activeIndex, setActiveIndex] = useState(0);

  const quotes = [
    {
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.',
      author: 'Judith Black',
      role: 'CEO of Workcation',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
     text:
       'amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.',
     author: 'Juan Jullian',
     role: 'CEO of Juln',
     imageUrl:
       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
   },
   {
    text:
      'ABbbbababababab',
    author: 'Jones Tonn',
    role: 'CEO of Tonnix',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  ];

  const goToNextQuote = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextQuote, 5000); // Change this value to control the time between quotes (in milliseconds)

    return () => clearInterval(intervalId);
  }, [quotes.length]);

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
       <div className='flex flex-col gap-5 justify-center items-center mb-10'>
        <h1 className='text-4xl font-bold text-center'>What Customer Says</h1>
        <p className='text-xl text-gray-500 text-center'>Ut totam hymenaeos a quasi enim, duis erat mollitia, pellentesque ac metus!</p>
       </div>

        {/* Carousel Content */}
        <div className="relative mt-10 border-dotted border-b-2 border-gray-300 pb-6">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out ${
                index === activeIndex ? "block" : "hidden"
              }`}
            >
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>{quote.text}</p>
              </blockquote>
              <figcaption className="mt-10">
                <img
                  className="mx-auto h-10 w-10 rounded-full"
                  src={quote.imageUrl}
                  alt={`${quote.author}'s headshot`}
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">{quote.author}</div>
                  <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-gray-600">{quote.role}</div>
                </div>
              </figcaption>
            </div>
          ))}
        </div>
        {/* End Carousel Content */}
      </div>
    </div>
  );
}
