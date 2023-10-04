new fullpage('#fullpage', {
    //options here
    autoScrolling: false,
    scrollHorizontally: false,

});


let DefaultValue = 700;

const getHue = (index) => {
    return index % 360;
};

const CreateAndAppendXAxis = (element, className, parent, delay, baseUnit) => {
    const BaseUnit = baseUnit;
    const Element = document.createElement(element);

    Element.classList.add(className);
    parent.appendChild(Element);

    anime({
        targets: Element,
        rotate: {
            value: delay * Math.PI,
            easing: "easeOutCirc"
        },
        opacity: [0, 1],
        height: { value: [0, delay], duration: delay * 60, easing: "easeInSine" },
        width: { value: 0.2, duration: delay * 30, easing: "easeInOutSine" },
        translateX: {
            value: `-=${Math.cos(delay) * baseUnit}`,
            duration: delay * 3,
            easing: "easeInCubic",

        },
        translateY: {
            value: `-=${Math.sin(delay) * baseUnit}`,
            duration: delay * 10,
            easing: "easeOutCubic",
        },
        backgroundColor: () => {
            return [`hsl(${delay}, 10%, 0%)`, `hsl(${getHue(delay)}, 100%, 60%)`];
        },
        delay: () => {
            return DefaultValue / (delay * baseUnit);
        },
        direction: "alternate",
        loop: true,
    });
};

const DrawTimelineXAxis = () => {
    const Target = document.querySelectorAll(
        "#fractal-animation .fractal-animation-circle"
    );
    for (let i = 0; i < DefaultValue; i++) {
        CreateAndAppendXAxis(
            "div",
            "fractal-animation-circle-element",
            Target[0],
            i,
            i / 10
        );
    }
};

DrawTimelineXAxis();


const tada = document.getElementById('tada');

// 하트 이모지 10개를 동적으로 생성
for (let i = 0; i < 40; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.textContent = '❤️';
    heart.style.top = `${Math.random() * 100}vh`;
    heart.style.left = `${Math.random() * 10}vw`;
    tada.appendChild(heart);
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            anime({
                targets: '.heart',
                translateY: [-1000, 0],
                translateX: anime.stagger(100, { start: -50 }),
                scale: anime.stagger([1, 1.5], { start: 1 }),
                opacity: [0, 1],
                duration: 2000,
                easing: 'easeInOutExpo',
                delay: anime.stagger(100, { start: 500 }),
            });
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(tada);


const chatper2 = document.getElementById('chatper2');

const observer2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            anime({
                targets: 'body',
                backgroundColor: "#000000",
                duration: 1000,
                easing: 'easeInOutExpo',
            });
            anime({
                targets: '.fractal-animation',
                scale: [4, 1],

            })
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer2.observe(chapter2);