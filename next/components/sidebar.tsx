import React from 'react'

const sidebar = () => {
  return (
    <div>
    <div  className="fixed inset-y-0 hidden w-[256px] border-r border-dashed bg-card py-6 pl-6 transition-all md:block">
      <div  className="relative flex h-full flex-col gap-2">
        <a  className="pl-2" href="/">
          <div  className="flex w-full items-center">
            <svg width="28" height="28" viewBox="0 0 142 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M56.7217 9.77302L62.3521 3.93267C66.3898 -0.739584 74.159 -1.71578 79.108 3.56807L138.745 67.2401C143.66 72.4872 142.378 80.9182 136.123 84.4863L76.4861 118.507C72.3766 120.851 67.7095 120.281 64.3443 117.867L5.62655 84.3704C-0.628203 80.8023 -1.90994 72.3713 3.00467 67.1242C5.26775 64.7081 8.90886 64.1658 11.7845 65.8167L64.3443 95.8885V73.2996L30.0497 53.8039C25.2072 51.0184 24.2219 44.4809 28.0298 40.4061L28.0368 40.3986L28.0424 40.3926C30.8094 37.444 35.2569 36.7833 38.7699 38.8002L64.3443 53.2077V31.4034L56.2082 26.3126C51.2242 23.4513 46.7253 20.4457 50.6477 16.258L56.7217 9.77302Z" fill="currentColor"></path>
            </svg>
          </div>
        </a>
        <div  className="text-gray-600 flex w-full flex-col gap-0 pt-4 md:pr-6">
          <a href="/">
            <button  className="hover:text-gray-400 relative inline-flex items-center justify-center rounded-md font-semibold tracking-base ring-offset-background transition-colors focus-visible:outline-none disabled:opacity-50 text-base leading-none text-muted-foreground shadow-none hover:text-primary px-0 py-2 h-auto">discover</button>
          </a>
          <a href="/projects">
            <button  className="hover:text-gray-400 relative inline-flex items-center justify-center rounded-md font-semibold tracking-base ring-offset-background transition-colors focus-visible:outline-none disabled:opacity-50 text-base leading-none text-muted-foreground shadow-none hover:text-primary px-0 py-2 h-auto">projects</button>
          </a>
          <div  className="my-3 w-full border-b border-dashed text-gray-900"></div>
          <p  className="text-base font-medium leading-6 tracking-base pr-6 text-muted-foreground">welcome to sage, a place to find dope people building cool shit.</p>
          <br />
          <br />
          <p  className="text-base font-medium leading-6 tracking-base pr-6 text-muted-foreground">this is the place where people work on ideas they are passionate about.</p>
          <br />
          <br />
          <p  className="text-base font-medium leading-6 tracking-base pr-6 text-muted-foreground">give it a try.</p>
          <br />
          <br />
          <p  className="text-base font-medium leading-6 tracking-base pr-6 text-muted-foreground">see you in a search soon.</p>
        </div>
        <div  className="mt-auto flex flex-col gap-3 pr-6">
          <button  className="bg-white text-black relative inline-flex items-center justify-center  text-base font-semibold tracking-base ring-offset-background transition-colors focus-visible:outline-none disabled:opacity-50 bg-primary text-primary-foreground shadow-md hover:bg-primary/90 h-[42px] px-4 py-2">sign up</button>
          <button className="relative inline-flex items-center justify-center  text-base font-semibold tracking-base shadow ring-offset-background transition-colors focus-visible:outline-none disabled:opacity-50 border border-input hover:bg-accent hover:opacity-80 h-[42px] px-4 py-2">log in</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default sidebar
