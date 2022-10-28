import Image from '~/components/Image';
function Banner() {
    function nextSlide() {
        let activeSlide = document.querySelector('.slide.translate-x-0');
        activeSlide.classList.remove('translate-x-0');
        activeSlide.classList.add('-translate-x-full');

        let nextSlide = activeSlide.nextElementSibling;
        nextSlide.classList.remove('translate-x-full');
        nextSlide.classList.add('translate-x-0');
    }

    function previousSlide() {
        let activeSlide = document.querySelector('.slide.translate-x-0');
        activeSlide.classList.remove('translate-x-0');
        activeSlide.classList.add('translate-x-full');

        let previousSlide = activeSlide.previousElementSibling;
        previousSlide.classList.remove('-translate-x-full');
        previousSlide.classList.add('translate-x-0');
    }
    return (
        <div className="relative overflow-hidden w-full h-96">
            <div className="absolute inset-0 w-full h-full flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-0 slide">
                <Image src="https://picsum.photos/1200/400?random=1" className="w-full" />
            </div>
            <div className="absolute inset-0 w-full h-full flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">
                <Image src="https://picsum.photos/1200/400?random=2" className="w-full" />
            </div>
            <div className="absolute inset-0 w-full h-full flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">
                <Image src="https://picsum.photos/1200/400?random=3" className="w-full" />
            </div>
            <div
                onClick={nextSlide}
                className="fixed bottom-0 right-0 bg-white w-16 h-16 flex items-center justify-center text-black cursor-pointer"
            >
                &#x276F;
            </div>
            <div
                onClick={previousSlide}
                className="fixed bottom-0 right-0 bg-white w-16 h-16 mr-16 flex items-center justify-center text-black cursor-pointer"
            >
                &#x276E;
            </div>
        </div>
    );
}

export default Banner;
