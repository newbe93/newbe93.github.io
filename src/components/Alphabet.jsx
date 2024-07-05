import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import surfing from '../assets/lottie/surfing.json'
import scrollDown from '../assets/lottie/scroll_down.json'
import waveBottom from '../assets/lottie/wave_bottom.json'
import Lottie from 'lottie-react';

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const BasicLottieExample = () => {
    return (
        <>
            <div  className='lottie-item'>
                <Lottie animationData={surfing} loop={true} />
            </div>
        </>
    );
  };

const ScrollDownAnimation = () => {
    return (
        <>
            <div style={{ width: 200, height: 200 }} className='lottie-scrollDown'>
                <Lottie animationData={scrollDown} loop={true} />
            </div>
        </>
    )
}

const WaveBottomAnimation = () => {
    return (
        <>
            <div style={{ width: "100vw" }} className='lottie-wave-bottom'>
                <Lottie animationData={waveBottom} loop={true}/>
            </div>
        </>
    )
}

const AlPhabet = () => {
    window.onbeforeunload = function pushRefresh() {
		window.scrollTo(0, 0);
	};

    const sectionRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const texts = gsap.utils.toArray(".title-text");

         // 뷰포트 가장자리의 랜덤 위치 생성 함수
         const getRandomEdgePosition = () => {
            const edge = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
            const rotation = Math.random() * 360;
            
            let position;
            switch(edge) {
                case 0: 
                    position = { x: Math.random() * 100 - 50 + 'vw', y: '-20vh' };  // 상단
                    break;
                case 1: 
                    position = { x: '80vw', y: Math.random() * 100 - 50 + 'vh' };   // 우측
                    break;
                case 2: 
                    position = { x: Math.random() * 100 - 50 + 'vw', y: '80vh' };   // 하단
                    break;
                case 3: 
                    position = { x: '-20vw', y: Math.random() * 100 - 50 + 'vh' };  // 좌측
                    break;
            }
        
            return { ...position, rotation };
        };

        const ani = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "+=2000",
                scrub: 1.5,
                pin: true,
                anticipatePin: 1,
            }
        });

        texts.forEach((text, index) => {
            const startPos = getRandomEdgePosition();

            const tl = ani.fromTo(text, 
                {
                    x: startPos.x,
                    y: startPos.y,
                    opacity: 1,
                    scale: 2,
                    rotation : startPos.rotation 
                },
                {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 5,
                    ease: "power3.out",
                    rotation : 0
                },
                0
            )

            if (index >= 0 && index <= 4) {
                tl.to(text, {
                    y: -100,
                    duration: 0.5,
                    ease: "power2.in"
                })
                .to(text, {
                    y: 0,
                    duration: 0.5,
                    ease: "bounce.out"
                });
            }
        });

        // let lotties = 

        let bg = gsap.timeline({
            scrollTrigger: {
                trigger : section,
                start: () => window.innerHeight * 0.5,
                end: "max",
                scrub: true
            }
        });

        bg.from(".lottie-item", {
            xPercent : -300,
            rotation : 720,
            opacity : 0,
            scale : 0.1
        })
        .to(".lottie-item", {
            xPercent : 0,
            opacity : 1,
            duration : () => window.innerWidth < 392 ? 50 : 10,
            rotation : 0,
            scale : 1
        })

        bg.from(".lottie-wave-bottom",{
            yPercent : 100,
            opacity : 0,
            duration : 50
        })
        .to(".lottie-wave-bottom",{
            yPercent : 30,
            opacity : 1,
            duration : 50
        })

        gsap.fromTo(".lottie-scrollDown", 
            {opacity : 1},
            {
            opacity : 0,
            scrollTrigger : {
                trigger : section,
                start : () => window.innerHeight * 0.01,
                end : () => window.innerHeight * 0.02,
                scrub : 1
            }
        })
       

      

        return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }, []); // 빈 배열을 넣어 마운트 시 한 번만 실행되도록 함

    return (
       <div className="parallax__item" ref={sectionRef}>
            <div>
                <div className="flex">
                    <div className="title-text title-text-alphabet-H" ref={imgRef}/>
                    <div className="title-text title-text-alphabet-E" ref={imgRef}/>
                    <div className="title-text title-text-alphabet-L" />
                    <div className="title-text title-text-alphabet-L" />
                    <div className="title-text title-text-alphabet-O" />
                </div>
                <div className="flex">
                    <div className="title-text title-text-alphabet-M" />
                    <div className="title-text title-text-alphabet-Y" />
                    <div className="spacing"></div>
                    <div className="title-text title-text-alphabet-N" />
                    <div className="title-text title-text-alphabet-A" />
                    <div className="title-text title-text-alphabet-M" />
                    <div className="title-text title-text-alphabet-E" />
                    <div className="spacing"></div>
                    <div className="title-text title-text-alphabet-I" />
                    <div className="title-text title-text-alphabet-S" />
                </div>
                <div className="flex">
                    <div className="title-text title-text-alphabet-D" />
                    <div className="title-text title-text-alphabet-O" />
                    <div className="title-text title-text-alphabet-N" />
                    <div className="title-text title-text-alphabet-G" />
                    <div className="spacing"></div>
                    <div className="title-text title-text-alphabet-S" />
                    <div className="title-text title-text-alphabet-U" />
                </div>
            </div>
            <BasicLottieExample />
            <ScrollDownAnimation />
            <WaveBottomAnimation/>
       </div>
    )
}

export default AlPhabet;