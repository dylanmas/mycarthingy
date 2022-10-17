<script>
    import {goto} from "$app/navigation"
	import Nav from "./nav.svelte";
	import Radio from "./radio.svelte";
    import Spotify from "./spotify.svelte";
    import Modal from './modal.svelte';
    var nav = "spotify";

    var currentime = ""

    setInterval(() => {
        var time = new Date();
        currentime = (time.getHours() > 12 ? time.getHours() - 12 : time.getHours()) + ":" + time.getMinutes() + " " + (time.getHours() > 12 ? "PM" : "AM");
    }, 250);
</script>

<div class="w-full h-[100vh] bg-neutral-700 flex flex-col text-white overflow-hidden">
    <div class="w-full text-3xl font-bold bg-neutral-900 shadow-md flex items-center z-20 p-2">
        <button on:click={() => {nav = "home"}} class="font-normal mr-auto duration-1000 flex items-center p-2 bg-neutral-100 rounded-full text-black shadow-md">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
            </svg>
        </button>
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 m-2">
            <path fill-rule="evenodd" d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
        </svg>
        <h1 class=" ">{currentime}</h1>
    </div>
    <div class="absolute flex z-30 left-[50%] -translate-x-[50%] mt-[6px]">
        <button on:click={() => {nav = "spotify"}} class="text-xl bg-green-900 shadow-lg rounded-lg flex flex-col items-center active:scale-95 active:brightness-75 transition-all">
            <img class="w-5 m-3" src="https://cdn.freebiesupply.com/logos/large/2x/spotify-2-logo-png-transparent.png" />
        </button>
        <button on:click={() => {nav = "nav"}} class="ml-2 text-xl bg-blue-900 shadow-lg rounded-lg flex flex-col items-center active:scale-95 active:brightness-75 transition-all">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 m-3">
            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg>
        </button>
        <button on:click={() => {nav = "radio"}} class="ml-2 text-xl bg-red-900 shadow-lg rounded-lg flex flex-col items-center active:scale-95 active:brightness-75 transition-all">
           <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 m-3">
            <path fill-rule="evenodd" d="M20.432 4.103a.75.75 0 00-.364-1.455L4.128 6.632l-.2.033C2.498 6.904 1.5 8.158 1.5 9.575v9.175a3 3 0 003 3h15a3 3 0 003-3V9.574c0-1.416-.997-2.67-2.429-2.909a49.016 49.016 0 00-7.255-.658l7.616-1.904zm-9.585 8.56a.75.75 0 010 1.06l-.005.006a.75.75 0 01-1.06 0l-.006-.005a.75.75 0 010-1.061l.005-.005a.75.75 0 011.06 0l.006.005zM9.781 15.85a.75.75 0 001.061 0l.005-.005a.75.75 0 000-1.061l-.005-.005a.75.75 0 00-1.06 0l-.006.005a.75.75 0 000 1.06l.005.006zm-1.055-1.066a.75.75 0 010 1.06l-.005.006a.75.75 0 01-1.061 0l-.005-.005a.75.75 0 010-1.06l.005-.006a.75.75 0 011.06 0l.006.005zM7.66 13.73a.75.75 0 001.061 0l.005-.006a.75.75 0 000-1.06l-.005-.005a.75.75 0 00-1.06 0l-.006.005a.75.75 0 000 1.06l.005.006zM9.255 9.75a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V10.5a.75.75 0 01.75-.75h.008zm3.624 3.28a.75.75 0 00.275-1.025L13.15 12a.75.75 0 00-1.025-.275l-.006.004a.75.75 0 00-.275 1.024l.004.007a.75.75 0 001.024.274l.007-.003zm-1.38 5.126a.75.75 0 01-1.024-.274l-.004-.007a.75.75 0 01.275-1.024l.006-.004a.75.75 0 011.025.274l.004.007a.75.75 0 01-.275 1.024l-.006.004zm.282-6.776a.75.75 0 00-.274-1.025l-.007-.003a.75.75 0 00-1.024.274l-.004.007a.75.75 0 00.274 1.024l.007.004a.75.75 0 001.024-.274l.004-.007zm1.369 5.129a.75.75 0 01-1.025.274l-.006-.003a.75.75 0 01-.275-1.025l.004-.006a.75.75 0 011.025-.275l.006.004a.75.75 0 01.275 1.024l-.004.007zm-.145-1.502a.75.75 0 00.75-.75v-.007a.75.75 0 00-.75-.75h-.008a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008zm-3.75 2.243a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V18a.75.75 0 01.75-.75h.008zm-2.871-.47a.75.75 0 00.274-1.025l-.003-.006a.75.75 0 00-1.025-.275l-.006.004a.75.75 0 00-.275 1.025l.004.006a.75.75 0 001.024.274l.007-.003zm1.366-5.12a.75.75 0 01-1.025-.274l-.004-.006a.75.75 0 01.275-1.025l.006-.003a.75.75 0 011.025.274l.004.007a.75.75 0 01-.275 1.024l-.006.004zm.281 6.215a.75.75 0 00-.275-1.024l-.006-.004a.75.75 0 00-1.025.274l-.003.007a.75.75 0 00.274 1.024l.007.004a.75.75 0 001.024-.274l.004-.007zM6.655 12.76a.75.75 0 01-1.025.274l-.006-.003a.75.75 0 01-.275-1.025L5.353 12a.75.75 0 011.025-.275l.006.004a.75.75 0 01.275 1.024l-.004.007zm-1.15 2.248a.75.75 0 00.75-.75v-.007a.75.75 0 00-.75-.75h-.008a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008zM17.25 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm1.5 6a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" clip-rule="evenodd" />
            </svg>
        </button>
    </div>
    {#if nav == "spotify"}
        <div class="h-full z-10">
            <Spotify />
        </div>
    {/if}
    {#if nav == "nav"}
        <div class="h-full z-10">
            <Nav />
        </div>
    {/if}
    {#if nav == "radio"}
        <div class="h-full z-10">
            <Radio />
        </div>
    {/if}
    {#if nav == "home"}
        <div class="animate-launch p-4 grid grid-cols-6 grid-rows-4 gap-4">
            <button on:click={() => {nav = "nav"}} class="col-span-2 row-span-2 bg-blue-900 rounded-lg shadow-lg text-xl flex flex-col items-center active:scale-95 active:brightness-75 transition-all">
                <h1 class="mt-2">Pick a destination...</h1>
            </button>
            <button on:click={() => {nav = "nav"}} class="text-xl p-6 flex flex-col items-center active:scale-95 active:brightness-75 transition-all">
                <div class="rounded-full bg-blue-900 p-3 w-full shadow-lg">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="">
                    <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                    </svg>
                </div>
                <h1 class="mt-2">Navigate</h1>
            </button>
            <button on:click={() => {nav = "spotify"}} class="text-xl p-6 w-50 flex flex-col items-center active:scale-95 active:brightness-75 transition-all">
                <div class="rounded-full bg-green-900 w-full shadow-lg">
                    <img src="https://cdn.freebiesupply.com/logos/large/2x/spotify-2-logo-png-transparent.png" />

                </div>
                <h1 class="mt-2">Spotify</h1>
            </button>
            <button on:click={() => {nav = "radio"}} class="text-xl p-6 w-50 flex flex-col items-center active:scale-95 active:brightness-75 transition-all">
                <div class="rounded-full overflow-hidden bg-white w-full shadow-lg">
                    <img src="https://th.bing.com/th/id/R.a55dcefb77a2f2705506242f5b9f4e38?rik=52MJlKiAV1rCPg&riu=http%3a%2f%2ffreevector.co%2fwp-content%2fuploads%2f2010%2f09%2fapple-carplay-icon.png&ehk=yKVKle6QlcwtHGlWCUOkA1Hz4Ae63HLSkJRoDR864UQ%3d&risl=&pid=ImgRaw&r=0"/> -->

                </div>
                <h1 class="mt-2">CarPlay</h1>
            </button>
            <button on:click={() => {nav = "pandora"}} class="text-xl p-6 w-50 flex flex-col items-center active:scale-95 active:brightness-75 transition-all">
                <div class="rounded-full bg-white overflow-hidden w-full shadow-lg">
                    <img src="https://blog.pandora.com/wp-content/uploads/2016/10/pandora_logo_with_bkgd_rbg_shadow.png" />

                </div>
                <h1 class="mt-2">Pandora</h1>
            </button>
            <button on:click={() => {nav = "radio"}} class="text-xl p-6 w-50 flex flex-col items-center active:scale-95 active:brightness-75 transition-all">
                <div class="rounded-full bg-red-900 p-3 w-full shadow-lg">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="">
                    <path fill-rule="evenodd" d="M20.432 4.103a.75.75 0 00-.364-1.455L4.128 6.632l-.2.033C2.498 6.904 1.5 8.158 1.5 9.575v9.175a3 3 0 003 3h15a3 3 0 003-3V9.574c0-1.416-.997-2.67-2.429-2.909a49.016 49.016 0 00-7.255-.658l7.616-1.904zm-9.585 8.56a.75.75 0 010 1.06l-.005.006a.75.75 0 01-1.06 0l-.006-.005a.75.75 0 010-1.061l.005-.005a.75.75 0 011.06 0l.006.005zM9.781 15.85a.75.75 0 001.061 0l.005-.005a.75.75 0 000-1.061l-.005-.005a.75.75 0 00-1.06 0l-.006.005a.75.75 0 000 1.06l.005.006zm-1.055-1.066a.75.75 0 010 1.06l-.005.006a.75.75 0 01-1.061 0l-.005-.005a.75.75 0 010-1.06l.005-.006a.75.75 0 011.06 0l.006.005zM7.66 13.73a.75.75 0 001.061 0l.005-.006a.75.75 0 000-1.06l-.005-.005a.75.75 0 00-1.06 0l-.006.005a.75.75 0 000 1.06l.005.006zM9.255 9.75a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V10.5a.75.75 0 01.75-.75h.008zm3.624 3.28a.75.75 0 00.275-1.025L13.15 12a.75.75 0 00-1.025-.275l-.006.004a.75.75 0 00-.275 1.024l.004.007a.75.75 0 001.024.274l.007-.003zm-1.38 5.126a.75.75 0 01-1.024-.274l-.004-.007a.75.75 0 01.275-1.024l.006-.004a.75.75 0 011.025.274l.004.007a.75.75 0 01-.275 1.024l-.006.004zm.282-6.776a.75.75 0 00-.274-1.025l-.007-.003a.75.75 0 00-1.024.274l-.004.007a.75.75 0 00.274 1.024l.007.004a.75.75 0 001.024-.274l.004-.007zm1.369 5.129a.75.75 0 01-1.025.274l-.006-.003a.75.75 0 01-.275-1.025l.004-.006a.75.75 0 011.025-.275l.006.004a.75.75 0 01.275 1.024l-.004.007zm-.145-1.502a.75.75 0 00.75-.75v-.007a.75.75 0 00-.75-.75h-.008a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008zm-3.75 2.243a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V18a.75.75 0 01.75-.75h.008zm-2.871-.47a.75.75 0 00.274-1.025l-.003-.006a.75.75 0 00-1.025-.275l-.006.004a.75.75 0 00-.275 1.025l.004.006a.75.75 0 001.024.274l.007-.003zm1.366-5.12a.75.75 0 01-1.025-.274l-.004-.006a.75.75 0 01.275-1.025l.006-.003a.75.75 0 011.025.274l.004.007a.75.75 0 01-.275 1.024l-.006.004zm.281 6.215a.75.75 0 00-.275-1.024l-.006-.004a.75.75 0 00-1.025.274l-.003.007a.75.75 0 00.274 1.024l.007.004a.75.75 0 001.024-.274l.004-.007zM6.655 12.76a.75.75 0 01-1.025.274l-.006-.003a.75.75 0 01-.275-1.025L5.353 12a.75.75 0 011.025-.275l.006.004a.75.75 0 01.275 1.024l-.004.007zm-1.15 2.248a.75.75 0 00.75-.75v-.007a.75.75 0 00-.75-.75h-.008a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008zM17.25 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm1.5 6a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" clip-rule="evenodd" />
                    </svg>

                </div>
                <h1 class="mt-2">Radio and Bluetooth</h1>
            </button>
            <button on:click={() => {nav = "pandora"}} class="text-xl px-6 pt-6 flex flex-col items-center active:scale-95 active:brightness-75 transition-all">
                <div class="rounded-full bg-blue-300 p-4 w-full shadow-lg">
                    <img src="https://descargar.org/wp-content/uploads/2018/02/android-auto-logo.png" />
                    
                </div>
                <h1 class="mt-2">Android Auto</h1>
            </button>
            <button on:click={() => {nav = "pandora"}} class="text-xl p-6 flex flex-col items-center active:scale-95 active:brightness-75 transition-all">
                <div class="rounded-full bg-orange-800 p-3 w-full shadow-lg">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="">
                <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                <path fill-rule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clip-rule="evenodd" />
                </svg>
                </div>
                <h1 class="mt-2 ">Phone</h1>
            </button>
            <button on:click={() => {nav = "pandora"}} class="text-xl p-6 flex flex-col items-center active:scale-95 active:brightness-75 transition-all">
                <div class="rounded-full bg-cyan-800 p-3 w-full shadow-lg">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="">
                    <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd" />
                    </svg>
                </div>
                <h1 class="mt-2 ">App Shop</h1>
            </button>
            <button on:click={() => {nav = "nav"}} class="col-span-4 bg-neutral-900 rounded-lg shadow-lg text-xl flex flex-col items-center active:scale-95 active:brightness-75 transition-all">
                <h1 class="mt-2">Start a song...</h1>
            </button>
            <button on:click={() => {nav = "allapps"}} class="text-xl p-6 flex flex-col items-center active:scale-95 active:brightness-75 transition-all">
                <div class="rounded-full bg-neutral-800 p-3 w-full shadow-lg">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                    </svg>
                </div>
                <h1 class="mt-2 ">All Apps</h1>
            </button>
            <button on:click={() => {nav = "pandora"}} class="text-xl p-6 flex flex-col items-center active:scale-95 active:brightness-75 transition-all">
                <div class="rounded-full bg-black p-3 w-full shadow-lg">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="">
                    <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd" />
                    </svg>
                </div>
                <h1 class="mt-2 ">Settings</h1>
            </button>
        </div>
    {/if}
</div>