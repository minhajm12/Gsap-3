gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll('.text-reveal')

        splitTypes.forEach((char,i) => {

            const text = new SplitType(char, { types:'chars,words'})
        

            gsap.from(text.chars,{
                scrollTrigger: {
                    trigger:char,
                    start:"top 80%",
                    end:'top 20%',
                    scrub: true,
                    markers: true
                },
                opacity: 0.2,
                stagger: 0.1
            })

        })


// const lenis = new Lenis()

//         lenis.on('scroll', (e) => {
//         console.log(e)
//         })

//         function raf(time) {
//         lenis.raf(time)
//         requestAnimationFrame(raf)
//         }

//         requestAnimationFrame(raf)