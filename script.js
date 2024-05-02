gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll('.text-reveal')

        splitTypes.forEach((char,i) => {

            const text = new SplitType(char, { types:'chars,words'})
        

            gsap.from(text.chars,{
                scrollTrigger: {
                    trigger:char,
                    start:"40% 40%",
                    end:'+=800%',

                    scrub: true,
                    markers: true
                },
                opacity: 0,
                stagger: .1,
                // y:"-30px",
                x:"20px",
                rotate:"20deg",
                scale:"0"
            })

        })

        var tl = gsap.timeline({scrollTrigger:{
            trigger:".item",
            start:"50% 50%",
            end:'+=800%',

            scrub:true,
            pin:true,
            markers:{
                startColor:"purple",
                endColor:"fuchsia",
            }
        }});


const splitTypes2 = document.querySelectorAll('.text-reveal2')

        splitTypes2.forEach((char,i) => {

            const text = new SplitType(char, { types:'chars,words'})
        

            gsap.from(text.chars,{
                scrollTrigger: {
                    trigger:char,
                    start:"40% 40%",
                    end:'+=400%',
                    scrub: true,
                    markers: true
                },
                opacity: 0,
                stagger: .1,
                y:"30px",
                x:"40px",
                rotate:"50deg"
            })

        })


        var tl = gsap.timeline({scrollTrigger:{
            trigger:".item2",
            start:"50% 50%",
            end:'+=400%',
            scrub:true,
            pin:true,
            markers:{
                startColor:"yellow",
                endColor:"black",
            }
        }})


const lenis = new Lenis()

        lenis.on('scroll', (e) => {
        console.log(e)
        })

        function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)