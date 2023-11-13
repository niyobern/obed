import Image from "next/image"
export default function Desciption(){
    return (
        <div className="flex flex-col bg-white">
            <div className="flex gap-8 md:w-1/2 mx-auto border-b border-gray-600 pb-6">
                <svg className="h-12 w-12 md:h-20 md:w-20 my-2" xmlns="http://www.w3.org/2000/svg" id="Capa_1" enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512"><g><path d="m386 0h-260c-24.813 0-45 20.187-45 45v197c0 24.813 20.187 45 45 45h260c24.813 0 45-20.187 45-45v-197c0-24.813-20.187-45-45-45z" fill="#6c6c6c"/><path d="m386 0h-130v287h130c24.813 0 45-20.187 45-45v-197c0-24.813-20.187-45-45-45z" fill="#404040"/><path d="m308.344 113.415-56.045-38.769c-7.583-5.244-17.367-5.845-25.536-1.563-8.167 4.282-13.24 12.67-13.24 21.891v77.062c0 9.191 5.05 17.566 13.178 21.857 3.636 1.919 7.597 2.869 11.545 2.868 4.881 0 9.742-1.451 13.938-4.318l56.046-38.294c6.723-4.594 10.749-12.197 10.771-20.339.021-8.14-3.962-15.765-10.657-20.395z" fill="#ffda2d"/><path d="m308.344 113.415-52.344-36.208v112.628l52.229-35.686c6.723-4.594 10.749-12.197 10.771-20.339.022-8.14-3.961-15.765-10.656-20.395z" fill="#fdbf00"/><path d="m453.621 301.688c-10.225-8.182-23.587-12.688-37.621-12.688-30.327 0-55 21.084-55 47v64c0 8.284 6.716 15 15 15h80c8.284 0 15-6.716 15-15v-64c0-12.971-6.335-25.477-17.379-34.312z" fill="#90cc1c"/><path d="m456 415c8.284 0 15-6.716 15-15v-64c0-12.971-6.335-25.477-17.379-34.313-10.225-8.181-23.587-12.687-37.621-12.687v126z" fill="#6b0"/><path d="m293.621 301.688c-10.225-8.182-23.587-12.688-37.621-12.688-30.327 0-55 21.084-55 47v64c0 8.284 6.716 15 15 15h80c8.284 0 15-6.716 15-15v-64c0-12.971-6.335-25.477-17.379-34.312z" fill="#ff712f"/><path d="m296 415c8.284 0 15-6.716 15-15v-64c0-12.971-6.335-25.477-17.379-34.313-10.225-8.181-23.587-12.687-37.621-12.687v126z" fill="#ff4c04"/><path d="m133.621 301.688c-10.225-8.182-23.587-12.688-37.621-12.688-30.327 0-55 21.084-55 47v64c0 8.284 6.716 15 15 15h80c8.284 0 15-6.716 15-15v-64c0-12.971-6.335-25.477-17.379-34.312z" fill="#27d8f6"/><path d="m136 415c8.284 0 15-6.716 15-15v-64c0-12.971-6.335-25.477-17.379-34.313-10.225-8.181-23.587-12.687-37.621-12.687v126z" fill="#3aaaff"/><path d="m466 385h-420c-24.813 0-45 20.187-45 45v37c0 24.813 20.187 45 45 45h420c24.813 0 45-20.187 45-45v-37c0-24.813-20.187-45-45-45z" fill="#ffda2d"/><path d="m466 385h-210v127h210c24.813 0 45-20.187 45-45v-37c0-24.813-20.187-45-45-45z" fill="#fdbf00"/><circle cx="416" cy="272" fill="#fed2a4" r="47"/><path d="m463 272c0-25.916-21.084-47-47-47v94c25.916 0 47-21.084 47-47z" fill="#ffbd86"/><circle cx="256" cy="272" fill="#fed2a4" r="47"/><path d="m303 272c0-25.916-21.084-47-47-47v94c25.916 0 47-21.084 47-47z" fill="#ffbd86"/><circle cx="96" cy="272" fill="#fed2a4" r="47"/><path d="m143 272c0-25.916-21.084-47-47-47v94c25.916 0 47-21.084 47-47z" fill="#ffbd86"/></g></svg>
                <div className=" flex flex-col gap-2">
                    <h1 className="font-bold text-xl md:p-2">Amasomo ateguwe bigezweho</h1>
                    <p className="leading-tight text-lg md:p-2">Tuvunagura mu bice amasomo akomeye tukayagira ayoroshye kandi yigika mu gihe gito.</p>
                    <div className="flex md:px-2 gap-2">
                        <Image
                          src="/images/play-button.svg"
                          alt="play"
                          className="h-4 w-4"
                          width={20}
                          height={20}
                        />
                        <span className="text-sky-600 font-medium">Reba video</span>
                    </div>
                </div>
            </div>
            <div className="flex gap-8 md:w-1/2 mx-auto border-b border-gray-600 pb-6">
                <svg className="h-12 w-12 md:h-24 md:w-24 my-2" id="Capa_1" enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m208.053 384.796v31.521c0 12.054-5.776 23.247-15.263 29.575l-22.915 15.285h172.249l-22.915-15.285c-9.487-6.328-15.263-17.521-15.263-29.575v-31.521c-31.532 0-64.361 0-95.893 0z" fill="#b1dbfc"/><path d="m208.053 384.796v31.521c0 12.054-5.776 23.247-15.263 29.575l-22.915 15.285h55.596l.483-.322c9.487-6.328 15.263-17.521 15.263-29.575v-21.822c0-5.357 4.342-9.699 9.699-9.699h53.029v-14.963z" fill="#8bcaff"/><path d="m358.16 460.071h-204.32c-5.689 0-10.301 4.612-10.301 10.301v11.535c0 5.689 4.612 10.301 10.301 10.301h204.32c5.689 0 10.301-4.612 10.301-10.301v-11.535c0-5.689-4.612-10.301-10.301-10.301z" fill="#dfebfa"/><path d="m200.63 481.907v-11.535c0-5.689 4.612-10.301 10.301-10.301h-57.091c-5.689 0-10.301 4.612-10.301 10.301v11.535c0 5.689 4.612 10.301 10.301 10.301h57.091c-5.689 0-10.301-4.611-10.301-10.301z" fill="#b1dbfc"/><g><g><path d="m482.31 19.791h-452.621c-16.371 0-29.689 13.318-29.689 29.689v306.986c0 16.371 13.318 29.689 29.689 29.689h452.621c16.371 0 29.689-13.318 29.689-29.689v-306.986c.001-16.371-13.318-29.689-29.689-29.689z" fill="#695d67"/></g></g><path d="m34.342 356.466v-306.986c0-16.371 13.318-29.689 29.689-29.689h-34.342c-16.371 0-29.689 13.318-29.689 29.689v306.986c0 16.371 13.318 29.689 29.689 29.689h34.341c-16.37.001-29.688-13.318-29.688-29.689z" fill="#554e56"/><g><path d="m32.137 88.075v2.06 259.611c0 2.36 1.912 4.272 4.272 4.272h439.182c2.359 0 4.272-1.912 4.272-4.272 0-6.921 0-186.243 0-261.671z" fill="#dfebfa"/></g><path d="m63.045 349.746v-259.61-2.06h-30.908v2.06 259.611c0 2.36 1.912 4.272 4.272 4.272h30.907c-2.359-.001-4.271-1.913-4.271-4.273z" fill="#b1dbfc"/><path d="m475.591 51.928h-398.09v38.207h402.361c0-17.883 0-30.339 0-33.936 0-2.359-1.912-4.271-4.271-4.271z" fill="#5cb3f8"/><path d="m78.531 51.928h-42.122c-2.359 0-4.272 1.912-4.272 4.272v33.936h46.394z" fill="#ff656f"/><path d="m67.315 51.928h-30.906c-2.359 0-4.272 1.912-4.272 4.272v33.936h30.906v-33.936c0-2.359 1.913-4.272 4.272-4.272z" fill="#ff4756"/><g><path d="m105.847 166.543-15.764-15.764c-5.66-5.66-5.66-14.837 0-20.498s14.838-5.661 20.498 0l5.516 5.515 13.457-13.457c5.66-5.661 14.838-5.661 20.498 0 5.66 5.66 5.66 14.837 0 20.498l-23.706 23.706c-5.661 5.66-14.839 5.66-20.499 0z" fill="#43cb8e"/></g><g><path d="m105.847 242.797-15.764-15.764c-5.66-5.66-5.66-14.837 0-20.498s14.838-5.661 20.498 0l5.516 5.515 13.457-13.457c5.66-5.661 14.838-5.661 20.498 0 5.66 5.66 5.66 14.837 0 20.498l-23.706 23.706c-5.661 5.661-14.839 5.661-20.499 0z" fill="#43cb8e"/></g><g><path d="m105.847 319.052-15.764-15.764c-5.66-5.66-5.66-14.837 0-20.498s14.838-5.661 20.498 0l5.516 5.515 13.457-13.457c5.66-5.661 14.838-5.661 20.498 0 5.66 5.66 5.66 14.837 0 20.498l-23.706 23.706c-5.661 5.661-14.839 5.661-20.499 0z" fill="#43cb8e"/></g><g fill="#8479c2"><path d="m413.649 129.194h-213.151c-5.318 0-9.629 4.311-9.629 9.629v11.236c0 5.318 4.311 9.629 9.629 9.629h213.151c5.318 0 9.629-4.311 9.629-9.629v-11.236c0-5.318-4.311-9.629-9.629-9.629z"/><path d="m413.649 205.449h-213.151c-5.318 0-9.629 4.311-9.629 9.629v11.236c0 5.318 4.311 9.629 9.629 9.629h213.151c5.318 0 9.629-4.311 9.629-9.629v-11.236c0-5.318-4.311-9.629-9.629-9.629z"/><path d="m413.649 281.704h-213.151c-5.318 0-9.629 4.311-9.629 9.629v11.236c0 5.318 4.311 9.629 9.629 9.629h213.151c5.318 0 9.629-4.311 9.629-9.629v-11.236c0-5.319-4.311-9.629-9.629-9.629z"/></g><path d="m239.606 150.058v-11.236c0-5.318 4.311-9.629 9.629-9.629h-48.737c-5.318 0-9.629 4.311-9.629 9.629v11.236c0 5.318 4.311 9.629 9.629 9.629h48.737c-5.318 0-9.629-4.311-9.629-9.629z" fill="#6e60b8"/><path d="m239.606 226.313v-11.236c0-5.318 4.311-9.629 9.629-9.629h-48.737c-5.318 0-9.629 4.311-9.629 9.629v11.236c0 5.318 4.311 9.629 9.629 9.629h48.737c-5.318 0-9.629-4.311-9.629-9.629z" fill="#6e60b8"/><path d="m239.606 302.568v-11.236c0-5.318 4.311-9.629 9.629-9.629h-48.737c-5.318 0-9.629 4.311-9.629 9.629v11.236c0 5.318 4.311 9.629 9.629 9.629h48.737c-5.318 0-9.629-4.311-9.629-9.629z" fill="#6e60b8"/></g></svg>                <div className=" flex flex-col gap-2">
                    <h1 className="font-bold text-xl md:p-2">Tugutegura gukora ibizamini</h1>
                    <p className="leading-tight text-lg md:p-2">Uru rubuga rufite imyitozo itandukanye igufasha kwitegura ibizamini bikenerwa nk&aposuruhushya rw&aposagateganyo rwo gutwara.</p>
                    <div className="flex md:px-2 gap-2">
                        <Image
                          src="/images/click.svg"
                          alt="play"
                          className="h-4 w-4"
                          width={20}
                          height={20}
                        />
                        <span className="text-sky-600 font-medium">Reba uko tubaza</span>
                    </div>
                </div>
            </div>
            <div className="flex gap-8 md:w-1/2 mx-auto border-b border-gray-600 pb-6">
                    <svg className="h-12 w-12 md:h-20 md:w-20 my-2" id="Capa_1" enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m505 70.25v299.5c0 32.74-26.631 59.371-59.371 59.371h-379.258c-32.74 0-59.371-26.631-59.371-59.371v-299.5c0-32.74 26.631-59.371 59.371-59.371h379.258c32.74 0 59.371 26.631 59.371 59.371z" fill="#ecf9fd"/><path d="m505 70.25v299.5c0 32.74-26.631 59.371-59.371 59.371h-189.629v-418.242h189.629c32.74 0 59.371 26.631 59.371 59.371z" fill="#d9f3fc"/><path d="m352.39 420v72c0 8.28-6.71 15-15 15h-162.78c-8.29 0-15-6.72-15-15v-72c0-8.28 6.71-15 15-15h162.78c8.29 0 15 6.72 15 15z" fill="#006aad"/><path d="m352.39 420v72c0 8.28-6.71 15-15 15h-81.39v-102h81.39c8.29 0 15 6.72 15 15z" fill="#004397"/><path d="m400 477h-288c-8.28 0-15 6.72-15 15s6.72 15 15 15h288c8.28 0 15-6.72 15-15s-6.72-15-15-15z" fill="#00357b"/><path d="m415 492c0 8.28-6.72 15-15 15h-144v-30h144c8.28 0 15 6.72 15 15z" fill="#001737"/><path d="m450.96 5h-389.92c-33.66 0-61.04 27.38-61.04 61.04v307.92c0 33.66 27.38 61.04 61.04 61.04h389.92c33.66 0 61.04-27.38 61.04-61.04v-307.92c0-33.66-27.38-61.04-61.04-61.04zm31.04 351h-452v-289.96c0-17.11 13.93-31.04 31.04-31.04h389.92c17.11 0 31.04 13.93 31.04 31.04z" fill="#00357b"/><path d="m512 66.04v307.92c0 33.66-27.38 61.04-61.04 61.04h-194.96v-79h226v-289.96c0-17.11-13.93-31.04-31.04-31.04h-194.96v-30h194.96c33.66 0 61.04 27.38 61.04 61.04z" fill="#001737"/><path d="m208 277h-24c-8.284 0-15 6.716-15 15s6.716 15 15 15h24c8.284 0 15-6.716 15-15s-6.716-15-15-15z" fill="#00357b"/><path d="m312 277h-24c-8.284 0-15 6.716-15 15s6.716 15 15 15h24c8.284 0 15-6.716 15-15s-6.716-15-15-15z" fill="#001737"/><path d="m176 69h-47.422c-8.284 0-15 6.716-15 15s6.716 15 15 15h32.422v65c0 8.284 6.716 15 15 15s15-6.716 15-15v-80c0-8.284-6.716-15-15-15z" fill="#00357b"/><path d="m356.09 149.02-21.34 81.31c-2.58 9.81-11.47 16.67-21.62 16.67h-129.78c-12.32 0-22.35-10.03-22.35-22.35v-81.3c0-12.32 10.03-22.35 22.35-22.35h151.12c14.644 0 25.338 13.842 21.62 28.02z" fill="#ffec00"/><path d="m356.09 149.02-21.34 81.31c-2.58 9.81-11.47 16.67-21.62 16.67h-57.13v-126h78.47c14.644 0 25.338 13.842 21.62 28.02z" fill="#ffd92e"/></g></svg>                <div className=" flex flex-col gap-2">
                    <h1 className="font-bold text-xl md:p-2">Ibiciro biboneye</h1>
                    <p className="leading-tight text-lg md:p-2">Uhitamo amasomo n&apos;imyitozo ihwanye n&apos;amafaranga wifuza gutanga, kandi ukanyurwa.</p>
                    <div className="flex md:px-2 gap-2">
                        <Image
                          src="/images/see.svg"
                          alt="play"
                          className="h-4 w-4"
                          width={20}
                          height={20}
                        />
                        <span className="text-sky-600 font-medium">Reba ibiciro</span>
                    </div>
                </div>
            </div>
        </div>
    )
}