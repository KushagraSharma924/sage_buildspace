import React from 'react';
import '../app/App.css';

const Carousel: React.FC = () => {
  return (
    <main className="flex w-full flex-1 flex-col md:pl-[272px] lg:pr-0">
      <div className="pt-8 min-hover:text-white h-[calc(100dvh-7px)] md:min-hover:text-white flex flex-col gap-16">
        <div className="my-18 mx-auto flex flex-col gap-16">
          <h1 className="text-5xl font-extrabold tracking-tighter sm:text-7xl text-center">
            find and<br />be found.
          </h1>
          <div className="flex flex-col gap-4">
            {/* Carousel for People */}
            <div className="relative hover:text-white h-64 max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-6xl carousel-container" role="region" aria-roledescription="carousel">
              <div className="carousel">
                {/* Slide 1 */}
                <div role="group" aria-roledescription="slide" className="carousel-item shrink-0 grow-0 basis-full pl-4 max-w-[240px]">
                  <div className="border text-card-foreground shadow-md group hover:text-white h-64 bg-transparent cursor-pointer opacity-80 hover:opacity-100 border-[#3a3a3a]">
                    <div className="p-3 flex flex-col gap-0">
                      <span className="group relative flex shrink-0 items-center justify-center overflow-hidden border bg-secondary size-14 w-full min-hover:text-white h-[96px] mb-2 border-[#3a3a3a]">
                        <img
                          alt="Mattia"
                          loading="lazy"
                          decoding="async"
                          src="https://sapi.buildspace.so/storage/v1/render/image/public/assets/17d64dd1-0b8e-44d6-b68c-cb5ceb6d706b/avatar?width=3840&resize=contain&quality=75"
                          className="aspect-square size-full object-cover grayscale group-hover:grayscale-0"
                        />
                      </span>
                      <h3 className="tracking-tight line-clamp-1 text-left font-medium text-lg lg:text-lg ">Mattia</h3>
                    </div>
                    <div className="p-3 pt-0">
                      <h4 className="font-semibold tracking-tight line-clamp-3 truncate whitespace-break-spaces text-muted-foreground text-sm pb-0 text-left">
                        building a visual landing page builder for developers
                      </h4>
                    </div>
                  </div>
                </div>
                {/* Slide 2 */}
                <div role="group" aria-roledescription="slide" className="carousel-item shrink-0 grow-0 basis-full pl-4 max-w-[240px]">
                  <div className="border text-card-foreground shadow-md group hover:text-white h-64 bg-transparent cursor-pointer opacity-80 hover:opacity-100 border-[#3a3a3a]">
                    <div className="p-3 flex flex-col gap-0">
                      <span className="group relative flex shrink-0 items-center justify-center overflow-hidden border bg-secondary size-14 w-full min-hover:text-white h-[96px] mb-2 border-[#3a3a3a]">
                        <img
                          alt="Kelli"
                          loading="lazy"
                          decoding="async"
                          src="https://sapi.buildspace.so/storage/v1/render/image/public/assets/17d64dd1-0b8e-44d6-b68c-cb5ceb6d706b/avatar?width=3840&resize=contain&quality=75"
                          className="aspect-square size-full object-cover grayscale group-hover:grayscale-0"
                        />
                      </span>
                      <h3 className="tracking-tight line-clamp-1 text-left font-medium text-lg lg:text-lg">Kelli</h3>
                    </div>
                    <div className="p-3 pt-0">
                      <h4 className="font-semibold tracking-tight line-clamp-3 truncate whitespace-break-spaces text-muted-foreground text-sm pb-0 text-left">
                        building a visual landing page builder for developers
                      </h4>
                    </div>
                  </div>
                </div>
                {/* Slide 3 */}
                <div role="group" aria-roledescription="slide" className="carousel-item shrink-0 grow-0 basis-full pl-4 max-w-[240px]">
                  <div className="border text-card-foreground shadow-md group hover:text-white h-64 bg-transparent cursor-pointer opacity-80 hover:opacity-100 border-[#3a3a3a]">
                    <div className="p-3 flex flex-col gap-0">
                      <span className="group relative flex shrink-0 items-center justify-center overflow-hidden border bg-secondary size-14 w-full min-hover:text-white h-[96px] mb-2 border-[#3a3a3a]">
                        <img
                          alt="Alec"
                          loading="lazy"
                          decoding="async"
                          src="https://sapi.buildspace.so/storage/v1/render/image/public/assets/477b3b94-21b0-4202-a1f8-94ae259bb057/j0lgaOa?width=3840&resize=contain&quality=75"
                          className="aspect-square size-full object-cover grayscale group-hover:grayscale-0"
                        />
                      </span>
                      <h3 className="tracking-tight line-clamp-1 text-left font-medium text-lg lg:text-lg">Alec</h3>
                    </div>
                    <div className="p-3 pt-0">
                      <h4 className="font-semibold tracking-tight line-clamp-3 truncate whitespace-break-spaces text-muted-foreground text-sm pb-0 text-left">
                        crafting the next-gen builder community & fine-tuning cod loadouts with badgunny
                      </h4>
                    </div>
                  </div>
                </div>
                {/* Slide 4 */}
                <div role="group" aria-roledescription="slide" className="carousel-item shrink-0 grow-0 basis-full pl-4 max-w-[240px] ">
                  <div className="border text-card-foreground shadow-md group hover:text-white h-64 bg-transparent cursor-pointer opacity-80 hover:opacity-100 border-[#3a3a3a]">
                    <div className="p-3 flex flex-col gap-0">
                      <span className="group relative flex shrink-0 items-center justify-center overflow-hidden border bg-secondary size-14 w-full min-hover:text-white h-[96px] mb-2 border-[#3a3a3a]">
                        <img
                          alt="Alec"
                          loading="lazy"
                          decoding="async"
                          src="https://sapi.buildspace.so/storage/v1/render/image/public/assets/477b3b94-21b0-4202-a1f8-94ae259bb057/j0lgaOa?width=3840&resize=contain&quality=75"
                          className="aspect-square size-full object-cover grayscale group-hover:grayscale-0"
                        />
                      </span>
                      <h3 className="tracking-tight line-clamp-1 text-left font-medium text-lg lg:text-lg">Alec</h3>
                    </div>
                    <div className="p-3 pt-0">
                      <h4 className="font-semibold tracking-tight line-clamp-3 truncate whitespace-break-spaces text-muted-foreground text-sm pb-0 text-left">
                        crafting the next-gen builder community & fine-tuning cod loadouts with badgunny
                      </h4>
                    </div>
                  </div>
                </div>
                {/* Slide 5 */}
                <div role="group" aria-roledescription="slide" className="carousel-item shrink-0 grow-0 basis-full pl-4 max-w-[240px] border-[#0a0a0a]">
                  <div className="border text-card-foreground shadow-md group hover:text-white h-64 bg-transparent cursor-pointer opacity-80 hover:opacity-100 border-[#3a3a3a]">
                    <div className="p-3 flex flex-col gap-0">
                      <span className="group relative flex shrink-0 items-center justify-center overflow-hidden border bg-secondary size-14 w-full min-hover:text-white h-[96px] mb-2 border-[#3a3a3a]">
                        <img
                          alt="Alec"
                          loading="lazy"
                          decoding="async"
                          src="https://sapi.buildspace.so/storage/v1/render/image/public/assets/477b3b94-21b0-4202-a1f8-94ae259bb057/j0lgaOa?width=3840&resize=contain&quality=75"
                          className="aspect-square size-full object-cover grayscale group-hover:grayscale-0"
                        />
                      </span>
                      <h3 className="tracking-tight line-clamp-1 text-left font-medium text-lg lg:text-lg">Alec</h3>
                    </div>
                    <div className="p-3 pt-0">
                      <h4 className="font-semibold tracking-tight line-clamp-3 truncate whitespace-break-spaces text-muted-foreground text-sm pb-0 text-left">
                        crafting the next-gen builder community & fine-tuning cod loadouts with badgunny
                      </h4>
                    </div>
                  </div>
                </div>
                {/* Slide 6 */}
                <div role="group" aria-roledescription="slide" className="carousel-item shrink-0 grow-0 basis-full pl-4 max-w-[240px]">
                  <div className="border text-card-foreground shadow-md group hover:text-white h-64 bg-transparent cursor-pointer opacity-80 hover:opacity-100 border-[#3a3a3a]">
                    <div className="p-3 flex flex-col gap-0">
                      <span className="group relative flex shrink-0 items-center justify-center overflow-hidden border bg-secondary size-14 w-full min-hover:text-white h-[96px] mb-2 border-[#3a3a3a]">
                        <img
                          alt="Alec"
                          loading="lazy"
                          decoding="async"
                          src="https://sapi.buildspace.so/storage/v1/render/image/public/assets/477b3b94-21b0-4202-a1f8-94ae259bb057/j0lgaOa?width=3840&resize=contain&quality=75"
                          className="aspect-square size-full object-cover grayscale group-hover:grayscale-0"
                        />
                      </span>
                      <h3 className="tracking-tight line-clamp-1 text-left font-medium text-lg lg:text-lg">Alec</h3>
                    </div>
                    <div className="p-3 pt-0">
                      <h4 className="font-semibold tracking-tight line-clamp-3 truncate whitespace-break-spaces text-muted-foreground text-sm pb-0 text-left">
                        crafting the next-gen builder community & fine-tuning cod loadouts with badgunny
                      </h4>
                    </div>
                  </div>
                </div>
                {/* Slide 7 */}
                <div role="group" aria-roledescription="slide" className="carousel-item shrink-0 grow-0 basis-full pl-4 max-w-[240px]">
                  <div className="border text-card-foreground shadow-md group hover:text-white h-64 bg-transparent cursor-pointer opacity-80 hover:opacity-100 border-[#3a3a3a]">
                    <div className="p-3 flex flex-col gap-0">
                      <span className="group relative flex shrink-0 items-center justify-center overflow-hidden border bg-secondary size-14 w-full min-hover:text-white h-[96px] mb-2 border-[#3a3a3a]">
                        <img
                          alt="Alec"
                          loading="lazy"
                          decoding="async"
                          src="https://sapi.buildspace.so/storage/v1/render/image/public/assets/477b3b94-21b0-4202-a1f8-94ae259bb057/j0lgaOa?width=3840&resize=contain&quality=75"
                          className="aspect-square size-full object-cover grayscale group-hover:grayscale-0"
                        />
                      </span>
                      <h3 className="tracking-tight line-clamp-1 text-left font-medium text-lg lg:text-lg">Alec</h3>
                    </div>
                    <div className="p-3 pt-0">
                      <h4 className="font-semibold tracking-tight line-clamp-3 truncate whitespace-break-spaces text-muted-foreground text-sm pb-0 text-left">
                        crafting the next-gen builder community & fine-tuning cod loadouts with badgunny
                      </h4>
                    </div>
                  </div>
                </div>
                {/* Slide 8 */}
                <div role="group" aria-roledescription="slide" className="carousel-item shrink-0 grow-0 basis-full pl-4 max-w-[240px]">
                  <div className="border text-card-foreground shadow-md group hover:text-white h-64 bg-transparent cursor-pointer opacity-80 hover:opacity-100 border-[#3a3a3a]">
                    <div className="p-3 flex flex-col gap-0">
                      <span className="group relative flex shrink-0 items-center justify-center overflow-hidden border bg-secondary size-14 w-full min-hover:text-white h-[96px] mb-2 border-[#3a3a3a]">
                        <img
                          alt="Alec"
                          loading="lazy"
                          decoding="async"
                          src="https://sapi.buildspace.so/storage/v1/render/image/public/assets/477b3b94-21b0-4202-a1f8-94ae259bb057/j0lgaOa?width=3840&resize=contain&quality=75"
                          className="aspect-square size-full object-cover grayscale group-hover:grayscale-0"
                        />
                      </span>
                      <h3 className="tracking-tight line-clamp-1 text-left font-medium text-lg lg:text-lg">Alec</h3>
                    </div>
                    <div className="p-3 pt-0">
                      <h4 className="font-semibold tracking-tight line-clamp-3 truncate whitespace-break-spaces text-muted-foreground text-sm pb-0 text-left">
                        crafting the next-gen builder community & fine-tuning cod loadouts with badgunny
                      </h4>
                    </div>
                  </div>
                </div>
                {/* Additional Slides */}
                <div role="group" aria-roledescription="slide" className="carousel-item shrink-0 grow-0 basis-full pl-4 max-w-[240px]">
                  <div className="border text-card-foreground shadow-md group hover:text-white h-64 bg-transparent cursor-pointer opacity-80 hover:opacity-100">
                    <div className="p-3 flex flex-col gap-0">
                      <span className="group relative flex shrink-0 items-center justify-center overflow-hidden border bg-secondary size-14 w-full min-hover:text-white h-[96px] mb-2">
                        <img
                          alt="Alec"
                          loading="lazy"
                          decoding="async"
                          src="https://sapi.buildspace.so/storage/v1/render/image/public/assets/477b3b94-21b0-4202-a1f8-94ae259bb057/j0lgaOa?width=3840&resize=contain&quality=75"
                          className="aspect-square size-full object-cover grayscale group-hover:grayscale-0"
                        />
                      </span>
                      <h3 className="tracking-tight line-clamp-1 text-left font-medium text-lg lg:text-lg">Alec</h3>
                    </div>
                    <div className="p-3 pt-0">
                      <h4 className="font-semibold tracking-tight line-clamp-3 truncate whitespace-break-spaces text-muted-foreground text-sm pb-0 text-left">
                        crafting the next-gen builder community & fine-tuning cod loadouts with badgunny
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel for top-Buttons */}
            <div className="text-gray-400 relative xl:max-w-6xl overflow-hidden border-gray-800 carousel-container" role="region" aria-roledescription="carousel">
              <div className= "gap-4 top-button-carousel">
                <button className="button-item hover:text-white h-10 flex-shrink-0 cursor-pointer border px-4 py-1 text-muted-foreground hover:text-primary border-[#353434]">looking for a marketer</button>
                <button className="button-item hover:text-white h-10 flex-shrink-0 cursor-pointer border px-4 py-1 text-muted-foreground hover:text-primary border-[#353434]">show me hardware people</button>
                <button className="button-item hover:text-white h-10 flex-shrink-0 cursor-pointer border px-4 py-1 text-muted-foreground hover:text-primary border-[#353434]">need a producer for my album</button>
                <button className="button-item hover:text-white h-10 flex-shrink-0 cursor-pointer border border-primary  px-4 py-1 text-muted-foreground hover:text-primary border-[#353434]">i need to hire a react engineer</button>
                <button className="button-item hover:text-white h-10 flex-shrink-0 cursor-pointer border px-4 py-1 text-muted-foreground hover:text-primary border-[#353434]">show me content creators</button>
                <button className="button-item hover:text-white h-10 flex-shrink-0 cursor-pointer border px-4 py-1 text-muted-foreground hover:text-primary border-[#353434]">experts on tiktok</button>
                <button className="button-item hover:text-white h-10 flex-shrink-0 cursor-pointer border px-4 py-1 text-muted-foreground hover:text-primary border-[#353434]">who are some people i should invest in?</button>
                <button className="button-item hover:text-white h-10 flex-shrink-0 cursor-pointer border px-4 py-1 text-muted-foreground hover:text-primary border-[#353434]">tell me the legend of naveed</button>
                <button className="button-item hover:text-white h-10 flex-shrink-0 cursor-pointer border px-4 py-1 text-muted-foreground hover:text-primary border-[#353434]">i'm building in gaming</button>
                <button className="button-item hover:text-white h-10 flex-shrink-0 cursor-pointer border px-1 py-1 text-muted-foreground hover:text-primary border-[#353434]">show me fast growing projects</button>
              </div>
            </div>
            {/* Carousel for bottom-Buttons */}
            <div className="text-gray-400 relative xl:max-w-6xl overflow-hidden border-gray-800 carousel-container " role="region" aria-roledescription="carousel">
              <div className="gap-4 bottom-button-carousel">
                <button className="button-item hover:text-white h-10 flex-shrink-0 cursor-pointer border px-4 py-1 text-muted-foreground hover:text-primary border-[#353434]">looking for a marketer</button>
                <button className="button-item hover:text-white h-10 flex-shrink-0 cursor-pointer border px-4 py-1 text-muted-foreground hover:text-primary border-[#353434]">show me hardware people</button>
                <button className="button-item hover:text-white h-10 flex-shrink-0 cursor-pointer border px-4 py-1 text-muted-foreground hover:text-primary border-[#353434]">need a producer for my album</button>
                <button className="button-item hover:text-white h-10 flex-shrink-0 cursor-pointer border border-primary  px-4 py-1 text-muted-foreground hover:text-primary border-[#353434]">i need to hire a react engineer</button>
                <button className="button-item hover:text-white h-10 flex-shrink-0 cursor-pointer border px-4 py-1 text-muted-foreground hover:text-primary border-[#353434]">show me content creators</button>
                <button className="button-item hover:text-white h-10 flex-shrink-0 cursor-pointer border px-4 py-1 text-muted-foreground hover:text-primary border-[#353434]">experts on tiktok</button>
                <button className="button-item hover:text-white h-10 flex-shrink-0 cursor-pointer border px-4 py-1 text-muted-foreground hover:text-primary border-[#353434]">who are some people i should invest in?</button>
                <button className="button-item hover:text-white h-10 flex-shrink-0 cursor-pointer border px-4 py-1 text-muted-foreground hover:text-primary border-[#353434]">tell me the legend of naveed</button>
                <button className="button-item hover:text-white h-10 flex-shrink-0 cursor-pointer border px-4 py-1 text-muted-foreground hover:text-primary border-[#353434]">i'm building in gaming</button>
                <button className="button-item hover:text-white h-10 flex-shrink-0 cursor-pointer border px-1 py-1 text-muted-foreground hover:text-primary border-[#353434]">show me fast growing projects</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="sticky mt-auto md:max-w-xl bottom-0 mx-auto w-full bg-background/70 backdrop-blur-md">
        <div className="flex flex-col gap-4 border-t py-4 md:border-none px-4 md:px-0 md:py-6">
          <form>
            <div className="relative flex w-full grow flex-col justify-center overflow-hidden border bg-background">
              <textarea
                tabIndex={0}
                rows={1}
                placeholder="message sage..."
                spellCheck="false"
                className="w-full resize-none overflow-hidden bg-transparent py-3 pl-4 pr-10 outline-none placeholder:text-muted-foreground focus-within:outline-none"
                
              />
              <div className="absolute right-2 z-10 flex items-center gap-1 sm:right-2">
                <button
                  disabled
                  className="relative inline-flex items-center justify-center rounded-md text-base font-semibold tracking-base ring-offset-background transition-colors focus-visible:outline-none disabled:opacity-50 shadow-none hover:bg-accent size-8 p-0 bg-primary border-[#fffbfb] text-primary border-[#353434]-foreground hover:bg-primary border-white/90 disabled:pointer-events-none text-white"
                  aria-label="Send message"
                  type="button"
                >
                  {/* Hero Icon Send */}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Carousel;
