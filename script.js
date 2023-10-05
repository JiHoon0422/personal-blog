new fullpage('#fullpage', {
    //options here
    autoScrolling: false,
    scrollHorizontally: false,
    setMouseWheelScrolling: false,

});


let DefaultValue = 200;

const getHue = (index) => {
    return index % 360;
};

let loopTrigger = true;

const CreateAndAppendXAxis = (element, className, parent, delay, baseUnit) => {
    const Element = document.createElement(element);
    let index = 1;
    Element.classList.add(className);
    parent.appendChild(Element);

    anime({
        targets: Element,
        rotate: {
            value: delay * Math.PI * 10,
            easing: "easeInOutSine",
            duration: delay * 5000,
        },

        height: { value: anime.random(delay, delay * 3), duration: delay * 50, easing: "easeInOutExpo" },
        width: { value: anime.random(delay, delay * 3), duration: delay * 50, easing: "easeInOutExpo" },
        translateX: {
            value: `-=${Math.cos(delay) * baseUnit / 3}`,
            duration: delay * 50,
            easing: "easeInOutSine",

        },
        translateY: {
            value: `-=${Math.sin(delay) * baseUnit / 3}`,
            duration: delay * 100,
            easing: "easeInOutExpo",
        },
        borderRadius: anime.random(0, 100),
        backgroundColor: () => {
            return [`hsl(${delay}, 0%, 100%)`, `hsl(${getHue(delay * 100)}, 100%, 60%)`];
        },
        delay: () => {
            return delay * anime.random(0, 50);
        },
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
            i * 30,
        );
    }
};

DrawTimelineXAxis();


const tada = document.getElementById('tada');

// 하트 이모지 10개를 동적으로 생성
for (let i = 0; i < 50; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.textContent = '❤️';
    heart.style.top = `${Math.random() * 100}vh`;
    heart.style.left = `${Math.random(0.5, 0.1) * 100}px`;
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
                delay: anime.stagger(50, { start: 0 }),
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
                targets: 'h1, h2, h3, h4,h5,p',
                color: "#FFFFFF",
                duration: 1000,
                easing: 'easeInOutExpo',
            });
            anime({
                targets: '.fractal-animation',
                scale: [4, 1],
                rotate: 90,

            })
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer2.observe(chapter2);


const chapter1 = document.getElementById('chapter1');

const observer1 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            anime({
                targets: 'body',
                backgroundColor: "#ffffff",
                duration: 1000,
                easing: 'easeInOutExpo',
            });

            anime({
                targets: '.fractal-animation',
                scale: [4, 1],
                rotate: 180,

            })
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer1.observe(chapter1);


const chapter3 = document.getElementById('chapter3');

const observer3 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            anime({
                targets: 'body',
                backgroundColor: "#0000ff",
                duration: 1000,
                easing: 'easeInOutExpo',
            });

            anime({
                targets: '.fractal-animation',
                scale: 0.2,
                rotate: 180,

            })
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer3.observe(chapter3);




document.addEventListener("keydown", function (e) {
    let isSpacebarPressed = false;
    loopTrigger = false
    if (e.code == "Space" || e.code == "ArrowDown" || e.code == "ArrowUp") {
        document.querySelectorAll(".press-spacebar").forEach((el) => {
            anime({
                targets: el,
                opacity: 0,
                duration: 100,
            })
            isSpacebarPressed = true;
        });
        anime({
            targets: '.spacebar',
            opacity: [.8, 0],
            easing: "easeInOutSine",
            duration: 1000,
            delay: () => {
                if (isSpacebarPressed) {
                    return 0;
                } else {
                    return 500;
                }
            }
        })
        anime({
            targets: '.fractal-animation-circle',
            scale: [anime.random(1, 4)],
            rotate: anime.random(-100, 100),
            easing: "easeInOutSine",
            duration: 1000,
        })
    }

});

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth < 768) {
        anime({
            targets: ".sm-wrapper",
            opacity: [0, 1],
            duration: 1000,
            easing: "easeInOutExpo"
        })
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const chains = document.querySelectorAll(".chain");
    chains.forEach((e) => {
        anime({
            targets: e,
            rotate: 360,
            loop: true,
            direction: "alternate",
            duration: 5000,
            easing: "easeOutSine"
        })
    })
});