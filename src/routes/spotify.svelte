<script>
    var loaded = false;

    setTimeout(() => {
        loaded = true;
    }, 2000);

    var screen = "home"

    var switchplay = () => {
        showplay = !showplay;
    }
    var showplay = false;
</script>

<div class="animate-launch w-full h-full text-xl bg-neutral-700 flex flex-col text-white overflow-hidden font-circular">
    {#if loaded == false}
        <div class="animate-flash w-full h-full bg-slate-800 flex flex-col items-center">   
            <img class="h-20 mt-auto" src="https://cdn.freebiesupply.com/logos/large/2x/spotify-2-logo-png-transparent.png" />
            <svg class="animate-spin mb-auto mt-4" width="50px" height="50px" viewBox="0 0 24 24" fill="none">
                <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white"/>
                <path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="white"/>
            </svg>
        </div>
    {:else}
        
    <div class="animate-brighten overflow-y-scroll">
        <div class="flex items-center bg-neutral-800 p-4 shadow-lg fixed h-20 w-full">
            <h1 class="mr-auto text-4xl font-circularbold">Good evening</h1>
            <button on:click={() => {
                showplay = true;
            }} class="border-4 ml-1 p-2 rounded-md border-transparent active:animate-launch">Home</button>
            <button class="border-4 ml-1 p-2 rounded-md border-transparent active:animate-launch">Search</button>
            <button class="border-4 ml-1 p-2 rounded-md border-transparent active:animate-launch">Library</button>
            <button class="border-4 ml-1 p-2 rounded-md border-transparent active:animate-launch">Apps</button>
            <button class="border-4 ml-1 p-2 rounded-md border-transparent active:animate-launch">Settings</button>
        </div>
        {#if screen == "home"}
        <div class="p-4 flex flex-col mt-20 mb-20">
            <h1>Your daily rotation</h1>
            <div class="">

            </div>
        </div>
        {/if}
        <div class="flex flex-col bg-neutral-800 w-full h-[calc(100vh+80px)] mt-20 px-4 overflow-hidden fixed top-0 transition-all duration-500" style="transform: translateY({showplay == false ? "calc(100vh - 160px)" : "-100px"});">
            <div class="flex items-center bg-neutral-800 shadow-lg h-20 mb-4">
                <button on:click={switchplay} class="bg-neutral-300 rounded-lg shadow-lg flex mr-4 items-center text-black active:scale-95 transition-all">
                    <svg viewBox="0 0 24 24" fill="black" class="w-6 h-6 mx-2">
                    <path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clip-rule="evenodd" />
                    </svg>
                    <img src="https://f4.bcbits.com/img/a1024330960_10.jpg" class="rounded-lg shadow-lg h-14" />
                </button>
                
                <svg viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
                <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" class="ml-4 w-10 h-10">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                </svg>
                <svg viewBox="0 0 24 24" fill="currentColor" class="ml-4 w-10 h-10">
                <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
                </svg>
                <div class="ml-auto text-right">
                    <h1 class="text-2xl font-circularbold">Rhinestone Cowboy</h1>
                    <h1 class="text-xl font-circular text-neutral-400">Madvillainy</h1>
                </div>
            </div>

            <button on:click={switchplay} class="bg-neutral-300 rounded-full shadow-lg flex items-center text-black w-10 h-10 rotate-180 mb-4 active:scale-95 transition-all">
                <svg viewBox="0 0 24 24" fill="black" class="w-6 h-6 mx-2">
                <path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clip-rule="evenodd" />
                </svg>
            </button>

            <h1 class="text-2xl font-circularbold">Rhinestone Cowboy</h1>
            <h1 class="text-xl font-circular text-neutral-400">Madvillainy</h1>
        </div>
    </div>
    {/if}
</div>