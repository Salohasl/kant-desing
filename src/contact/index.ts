import './style.scss'; 

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