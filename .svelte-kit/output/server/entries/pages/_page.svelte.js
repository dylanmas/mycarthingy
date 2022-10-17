import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index.js";
const Spotify = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var loaded = false;
  setTimeout(
    () => {
      loaded = true;
    },
    2e3
  );
  return `<div class="${"animate-launch w-full h-full text-xl bg-neutral-700 flex flex-col text-white overflow-hidden font-circular"}">${loaded == false ? `<div class="${"animate-flash w-full h-full bg-slate-800 flex flex-col items-center"}"><img class="${"h-20 mt-auto"}" src="${"https://cdn.freebiesupply.com/logos/large/2x/spotify-2-logo-png-transparent.png"}">
            <svg class="${"animate-spin mb-auto mt-4"}" width="${"50px"}" height="${"50px"}" viewBox="${"0 0 24 24"}" fill="${"none"}"><path opacity="${"0.2"}" fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"}" fill="${"white"}"></path><path d="${"M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"}" fill="${"white"}"></path></svg></div>` : `<div class="${"animate-brighten overflow-y-scroll"}"><div class="${"flex items-center bg-neutral-800 p-4 shadow-lg fixed h-20 w-full"}"><h1 class="${"mr-auto text-4xl font-circularbold"}">Good evening</h1>
            <button class="${"border-4 ml-1 p-2 rounded-md border-transparent active:animate-launch"}">Home</button>
            <button class="${"border-4 ml-1 p-2 rounded-md border-transparent active:animate-launch"}">Search</button>
            <button class="${"border-4 ml-1 p-2 rounded-md border-transparent active:animate-launch"}">Library</button>
            <button class="${"border-4 ml-1 p-2 rounded-md border-transparent active:animate-launch"}">Apps</button>
            <button class="${"border-4 ml-1 p-2 rounded-md border-transparent active:animate-launch"}">Settings</button></div>
        ${`<div class="${"p-4 flex flex-col mt-20 mb-20"}"><h1>Your daily rotation</h1>
            <div class="${""}"></div></div>`}
        <div class="${"flex flex-col bg-neutral-800 w-full h-[calc(100vh+80px)] mt-20 px-4 overflow-hidden fixed top-0 transition-all duration-500"}" style="${"transform: translateY(" + escape("calc(100vh - 160px)", true) + ");"}"><div class="${"flex items-center bg-neutral-800 shadow-lg h-20 mb-4"}"><button class="${"bg-neutral-300 rounded-lg shadow-lg flex mr-4 items-center text-black active:scale-95 transition-all"}"><svg viewBox="${"0 0 24 24"}" fill="${"black"}" class="${"w-6 h-6 mx-2"}"><path fill-rule="${"evenodd"}" d="${"M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"}" clip-rule="${"evenodd"}"></path></svg>
                    <img src="${"https://f4.bcbits.com/img/a1024330960_10.jpg"}" class="${"rounded-lg shadow-lg h-14"}"></button>
                
                <svg viewBox="${"0 0 24 24"}" fill="${"currentColor"}" class="${"w-10 h-10"}"><path d="${"M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z"}"></path></svg>
                <svg viewBox="${"0 0 24 24"}" fill="${"currentColor"}" class="${"ml-4 w-10 h-10"}"><path fill-rule="${"evenodd"}" d="${"M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"}" clip-rule="${"evenodd"}"></path></svg>
                <svg viewBox="${"0 0 24 24"}" fill="${"currentColor"}" class="${"ml-4 w-10 h-10"}"><path d="${"M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z"}"></path></svg>
                <div class="${"ml-auto text-right"}"><h1 class="${"text-2xl font-circularbold"}">Rhinestone Cowboy</h1>
                    <h1 class="${"text-xl font-circular text-neutral-400"}">Madvillainy</h1></div></div>

            <button class="${"bg-neutral-300 rounded-full shadow-lg flex items-center text-black w-10 h-10 rotate-180 mb-4 active:scale-95 transition-all"}"><svg viewBox="${"0 0 24 24"}" fill="${"black"}" class="${"w-6 h-6 mx-2"}"><path fill-rule="${"evenodd"}" d="${"M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"}" clip-rule="${"evenodd"}"></path></svg></button>

            <h1 class="${"text-2xl font-circularbold"}">Rhinestone Cowboy</h1>
            <h1 class="${"text-xl font-circular text-neutral-400"}">Madvillainy</h1></div></div>`}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var currentime = "";
  setInterval(
    () => {
      var time = new Date();
      currentime = (time.getHours() > 12 ? time.getHours() - 12 : time.getHours()) + ":" + time.getMinutes() + " " + (time.getHours() > 12 ? "PM" : "AM");
    },
    250
  );
  return `<div class="${"w-full h-[100vh] bg-neutral-700 flex flex-col text-white overflow-hidden"}"><div class="${"w-full text-3xl font-bold bg-neutral-900 shadow-md flex items-center z-20 p-2"}"><button class="${"font-normal mr-auto duration-1000 flex items-center p-2 bg-neutral-100 rounded-full text-black shadow-md"}"><svg viewBox="${"0 0 24 24"}" fill="${"currentColor"}" class="${"w-6 h-6"}"><path fill-rule="${"evenodd"}" d="${"M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"}" clip-rule="${"evenodd"}"></path></svg></button>
        <svg viewBox="${"0 0 24 24"}" fill="${"currentColor"}" class="${"w-6 h-6 m-2"}"><path fill-rule="${"evenodd"}" d="${"M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"}" clip-rule="${"evenodd"}"></path></svg>
        <h1 class="${""}">${escape(currentime)}</h1></div>
    <div class="${"absolute flex z-30 left-[50%] -translate-x-[50%] mt-[6px]"}"><button class="${"text-xl bg-green-900 shadow-lg rounded-lg flex flex-col items-center active:scale-95 active:brightness-75 transition-all"}"><img class="${"w-5 m-3"}" src="${"https://cdn.freebiesupply.com/logos/large/2x/spotify-2-logo-png-transparent.png"}"></button>
        <button class="${"ml-2 text-xl bg-blue-900 shadow-lg rounded-lg flex flex-col items-center active:scale-95 active:brightness-75 transition-all"}"><svg viewBox="${"0 0 24 24"}" fill="${"currentColor"}" class="${"w-5 h-5 m-3"}"><path fill-rule="${"evenodd"}" d="${"M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"}" clip-rule="${"evenodd"}"></path></svg></button>
        <button class="${"ml-2 text-xl bg-red-900 shadow-lg rounded-lg flex flex-col items-center active:scale-95 active:brightness-75 transition-all"}"><svg viewBox="${"0 0 24 24"}" fill="${"currentColor"}" class="${"w-5 h-5 m-3"}"><path fill-rule="${"evenodd"}" d="${"M20.432 4.103a.75.75 0 00-.364-1.455L4.128 6.632l-.2.033C2.498 6.904 1.5 8.158 1.5 9.575v9.175a3 3 0 003 3h15a3 3 0 003-3V9.574c0-1.416-.997-2.67-2.429-2.909a49.016 49.016 0 00-7.255-.658l7.616-1.904zm-9.585 8.56a.75.75 0 010 1.06l-.005.006a.75.75 0 01-1.06 0l-.006-.005a.75.75 0 010-1.061l.005-.005a.75.75 0 011.06 0l.006.005zM9.781 15.85a.75.75 0 001.061 0l.005-.005a.75.75 0 000-1.061l-.005-.005a.75.75 0 00-1.06 0l-.006.005a.75.75 0 000 1.06l.005.006zm-1.055-1.066a.75.75 0 010 1.06l-.005.006a.75.75 0 01-1.061 0l-.005-.005a.75.75 0 010-1.06l.005-.006a.75.75 0 011.06 0l.006.005zM7.66 13.73a.75.75 0 001.061 0l.005-.006a.75.75 0 000-1.06l-.005-.005a.75.75 0 00-1.06 0l-.006.005a.75.75 0 000 1.06l.005.006zM9.255 9.75a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V10.5a.75.75 0 01.75-.75h.008zm3.624 3.28a.75.75 0 00.275-1.025L13.15 12a.75.75 0 00-1.025-.275l-.006.004a.75.75 0 00-.275 1.024l.004.007a.75.75 0 001.024.274l.007-.003zm-1.38 5.126a.75.75 0 01-1.024-.274l-.004-.007a.75.75 0 01.275-1.024l.006-.004a.75.75 0 011.025.274l.004.007a.75.75 0 01-.275 1.024l-.006.004zm.282-6.776a.75.75 0 00-.274-1.025l-.007-.003a.75.75 0 00-1.024.274l-.004.007a.75.75 0 00.274 1.024l.007.004a.75.75 0 001.024-.274l.004-.007zm1.369 5.129a.75.75 0 01-1.025.274l-.006-.003a.75.75 0 01-.275-1.025l.004-.006a.75.75 0 011.025-.275l.006.004a.75.75 0 01.275 1.024l-.004.007zm-.145-1.502a.75.75 0 00.75-.75v-.007a.75.75 0 00-.75-.75h-.008a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008zm-3.75 2.243a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V18a.75.75 0 01.75-.75h.008zm-2.871-.47a.75.75 0 00.274-1.025l-.003-.006a.75.75 0 00-1.025-.275l-.006.004a.75.75 0 00-.275 1.025l.004.006a.75.75 0 001.024.274l.007-.003zm1.366-5.12a.75.75 0 01-1.025-.274l-.004-.006a.75.75 0 01.275-1.025l.006-.003a.75.75 0 011.025.274l.004.007a.75.75 0 01-.275 1.024l-.006.004zm.281 6.215a.75.75 0 00-.275-1.024l-.006-.004a.75.75 0 00-1.025.274l-.003.007a.75.75 0 00.274 1.024l.007.004a.75.75 0 001.024-.274l.004-.007zM6.655 12.76a.75.75 0 01-1.025.274l-.006-.003a.75.75 0 01-.275-1.025L5.353 12a.75.75 0 011.025-.275l.006.004a.75.75 0 01.275 1.024l-.004.007zm-1.15 2.248a.75.75 0 00.75-.75v-.007a.75.75 0 00-.75-.75h-.008a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008zM17.25 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm1.5 6a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"}" clip-rule="${"evenodd"}"></path></svg></button></div>
    ${`<div class="${"h-full z-10"}">${validate_component(Spotify, "Spotify").$$render($$result, {}, {}, {})}</div>`}
    ${``}
    ${``}
    ${``}</div>`;
});
export {
  Page as default
};
