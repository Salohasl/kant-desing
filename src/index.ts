import './styles.scss';

function showDescriptionText() {
    const servicesBlocks: NodeListOf<HTMLElement> = document.querySelectorAll('.services-block');
    const servicesItemShows: NodeListOf<HTMLElement> = document.querySelectorAll('.services-item__show');

    servicesBlocks.forEach((item, index) => {
        item.addEventListener('mouseover', () => {
            // Закрытие всех.services-item__show
            Array.from(servicesItemShows).forEach(show => {
                if (show!== servicesItemShows[index]) { // Если это не соответствующий блок
                    show.classList.remove('show'); // Удаляем класс 'show', если он есть
                }
            });

            // Раскрытие соответствующего.services-item__show
            const correspondingShow = servicesItemShows[index];
            if (correspondingShow) {
                correspondingShow.classList.add('show'); // Добавляем класс 'show' для раскрытия
                setTimeout(() => {
                    correspondingShow.classList.remove('show'); //удаление спустя 2.5 сек
                }, 2500);
            }
        });
    });
}

showDescriptionText();


const advantages: NodeListOf<Element> = document.querySelectorAll('.animation');

const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('anim');
            observer.unobserve(entry.target);
        }
    });
};

// Create an instance of IntersectionObserver
const observer = new IntersectionObserver(observerCallback, {
    rootMargin: '0px',
    threshold: 0.5
});

// Observe each advantage element
advantages.forEach((advantag) => {
    observer.observe(advantag);
});

