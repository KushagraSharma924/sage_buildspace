import React from 'react';

const Carousel: React.FC = () => {
  return (
    <main className=" flex w-full flex-1 flex-col md:pl-[272px] lg:pr-0">
      <div className="pt-8 min-h-[calc(100dvh-57px)] md:min-h-dvh flex flex-col gap-16">
        <div className="my-auto mx-auto flex flex-col gap-16">
          <h1 className="text-5xl font-extrabold tracking-tighter sm:text-7xl text-center">
            find and<br />be found.
          </h1>
          <div className="flex flex-col gap-4">
            {/* Carousel for People */}
            <div className="relative h-64 max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl" role="region" aria-roledescription="carousel">
              <div className="overflow-hidden">
                <div className="flex -ml-4" style={{ transform: 'translate3d(-1349.3px, 0px, 0px)' }}>
                  {/* Slide 1 */}
                  <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 max-w-48" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                    <div className="border text-card-foreground shadow-md group h-64 bg-transparent cursor-pointer opacity-80 hover:opacity-100">
                      <div className="p-3 flex flex-col gap-0">
                        <span className="group relative flex shrink-0 items-center justify-center overflow-hidden border bg-secondary size-14 w-full min-h-[96px] mb-2" style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}>
                          <img
                            alt="Mattia"
                            loading="lazy"
                            decoding="async"
                            src="https://sapi.buildspace.so/storage/v1/render/image/public/assets/17d64dd1-0b8e-44d6-b68c-cb5ceb6d706b/avatar?width=3840&resize=contain&quality=75"
                            className="aspect-square size-full object-cover grayscale group-hover:grayscale-0"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </span>
                        <h3 className="tracking-tight line-clamp-1 text-left font-medium text-lg lg:text-lg">Mattia</h3>
                      </div>
                      <div className="p-3 pt-0">
                        <h4 className="font-semibold tracking-tight line-clamp-3 truncate whitespace-break-spaces text-muted-foreground text-sm pb-0 text-left">
                          building a visual landing page builder for developers
                        </h4>
                      </div>
                    </div>
                  </div>
                  {/* Slide 2 */}
                  <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 max-w-48" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                    <div className="border text-card-foreground shadow-md group h-64 bg-transparent cursor-pointer opacity-80 hover:opacity-100">
                      <div className="p-3 flex flex-col gap-0">
                        <span className="group relative flex shrink-0 items-center justify-center overflow-hidden border bg-secondary size-14 w-full min-h-[96px] mb-2" style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}>
                          <img
                            alt="Kelli"
                            loading="lazy"
                            decoding="async"
                            src="https://sapi.buildspace.so/storage/v1/render/image/public/assets/17d64dd1-0b8e-44d6-b68c-cb5ceb6d706b/avatar?width=3840&resize=contain&quality=75"
                            className="aspect-square size-full object-cover grayscale group-hover:grayscale-0"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4 max-w-48" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                    <div className="border text-card-foreground shadow-md group h-64 bg-transparent cursor-pointer opacity-80 hover:opacity-100">
                      <div className="p-3 flex flex-col gap-0">
                        <span className="group relative flex shrink-0 items-center justify-center overflow-hidden border bg-secondary size-14 w-full min-h-[96px] mb-2" style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}>
                          <img
                            alt="Alec"
                            loading="lazy"
                            decoding="async"
                            src="https://sapi.buildspace.so/storage/v1/render/image/public/assets/477b3b94-21b0-4202-a1f8-94ae259bb057/j0lgaOa?width=3840&resize=contain&quality=75"
                            className="aspect-square size-full object-cover grayscale group-hover:grayscale-0"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
            </div>

            {/* Carousel for Buttons */}
            <div className="relative max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl" role="region" aria-roledescription="carousel">
              <div className="overflow-hidden">
                <div className="border-color: rgb(30 41 59) flex -ml-4" style={{ transform: 'translate3d(-1716.7px, 0px, 0px)' }}>
                  <div role="group" aria-roledescription="slide" className="shrink-0 grow-0 basis-full pl-4 mr-0 min-w-max max-w-max" style={{ transform: 'translate3d(2480px, 0px, 0px)' }}>
                    <button className="cursor-pointer border px-4 py-2 text-muted-foreground hover:text-primary">show me hardware people</button>
                  </div>
                  <div role="group" aria-roledescription="slide" className="shrink-0 grow-0 basis-full pl-4 mr-0 min-w-max max-w-max">
                    <button className="border-color: rgb(30 41 59) cursor-pointer border px-4 py-2 text-muted-foreground hover:text-primary">looking for a marketer</button>
                  </div>
                  <div role="group" aria-roledescription="slide" className="shrink-0 grow-0 basis-full pl-4 mr-0 min-w-max max-w-max">
                    <button className="border-color: rgb(30 41 59) cursor-pointer border px-4 py-2 text-muted-foreground hover:text-primary">need a producer for my album</button>
                  </div>
                  <div role="group" aria-roledescription="slide" className="shrink-0 grow-0 basis-full pl-4 mr-0 min-w-max max-w-max">
                    <button className="border-color: rgb(30 41 59) cursor-pointer border px-4 py-2 text-muted-foreground hover:text-primary">i need to hire a react engineer</button>
                  </div>
                  <div role="group" aria-roledescription="slide" className="shrink-0 grow-0 basis-full pl-4 mr-0 min-w-max max-w-max">
                    <button className="border-color: rgb(30 41 59) cursor-pointer border px-4 py-2 text-muted-foreground hover:text-primary">show me content creators</button>
                  </div>
                  <div role="group" aria-roledescription="slide" className="shrink-0 grow-0 basis-full pl-4 mr-0 min-w-max max-w-max">
                    <button className="border-color: rgb(30 41 59) cursor-pointer border px-4 py-2 text-muted-foreground hover:text-primary">experts on tiktok</button>
                  </div>
                  <div role="group" aria-roledescription="slide" className="shrink-0 grow-0 basis-full pl-4 mr-0 min-w-max max-w-max">
                    <button className="border-color: rgb(30 41 59) cursor-pointer border px-4 py-2 text-muted-foreground hover:text-primary">who are some people i should invest in?</button>
                  </div>
                  <div role="group" aria-roledescription="slide" className="shrink-0 grow-0 basis-full pl-4 mr-0 min-w-max max-w-max">
                    <button className="border-color: rgb(30 41 59) cursor-pointer border px-4 py-2 text-muted-foreground hover:text-primary">tell me the legend of naveed</button>
                  </div>
                  <div role="group" aria-roledescription="slide" className="shrink-0 grow-0 basis-full pl-4 mr-0 min-w-max max-w-max">
                    <button className="border-color: rgb(30 41 59) cursor-pointer border px-4 py-2 text-muted-foreground hover:text-primary">i'm building in gaming</button>
                  </div>
                  <div role="group" aria-roledescription="slide" className="shrink-0 grow-0 basis-full pl-4 mr-0 min-w-max max-w-max">
                    <button className="border-color: rgb(30 41 59) cursor-pointer border px-4 py-2 text-muted-foreground hover:text-primary">show me fast growing projects</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="sticky mt-auto md:max-w-xl bottom-0 mx-auto w-full bg-background/70 backdrop-blur-md">
        <div className="flex flex-col gap-4 border-t py-4 md:border-none px-4 md:px-0 md:py-6">
          <form>
            <div className="border-color: rgb(30 41 59) relative flex w-full grow flex-col justify-center overflow-hidden border bg-background">
              <textarea
                tabIndex={0}
                rows={1}
                placeholder="message sage..."
                spellCheck="false"
                className="w-full resize-none overflow-hidden bg-transparent py-3 pl-4 pr-10 outline-none placeholder:text-muted-foreground focus-within:outline-none"
                style={{ height: '48px !important' }}
              />
              <div className=" absolute right-2 z-10 flex items-center gap-1 sm:right-2">
                <button
                  disabled
                  className="relative inline-flex items-center justify-center rounded-md text-base font-semibold tracking-base ring-offset-background transition-colors focus-visible:outline-none disabled:opacity-50 shadow-none hover:bg-accent size-8 p-0 hover:text-primary/50 cursor-pointer"
                  type="submit"
                  data-state="closed"
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4">
                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" />
                  </svg>
                  <span className="sr-only">what are you working on</span>
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
