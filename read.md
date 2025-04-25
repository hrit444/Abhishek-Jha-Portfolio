<div class="projects">
                        <div class="row row1">
                            <div class="cont cont1">
                                <img data-index="0" data-scroll data-scroll-speed="-1" src="./show1.png" alt="">
                            </div>
                            <div class="cont cont2">
                                <img data-index="1" data-scroll data-scroll-speed="-1" src="./show2.png" alt="">
                            </div>
                        </div>
                        <div class="row row2">
                            <div class="cont cont3">
                                <img data-index="2" data-scroll data-scroll-speed="-1" src="./show3.png" alt="">
                            </div>
                        </div>
                        <div class="row row3">
                            <div class="cont cont4">
                                <img data-index="3" data-scroll data-scroll-speed="-1" src="./show4.png" alt="">
                            </div>
                            <div class="cont cont5">
                                <img data-index="4" data-scroll data-scroll-speed="-1" src="./show5.png" alt="">
                            </div>
                        </div>

                        <div class="cursor">

                            <div>
                                <div class="crow">
                                    <div class="ccircle"></div>
                                    <div class="ccapsule">
                                        <h5>behance</h5>
                                    </div>
                                </div>
                                <div class="elem">
                                    <img src="./project1/1.png" alt="">
                                    <img src="./project1/2.png" alt="">
                                    <img src="./project1/3.png" alt="">
                                    <img src="./project1/4.png" alt="">
                                    <img src="./project1/5.png" alt="">
                                </div>
                            </div>
                        
                            <div>
                                <div class="crow">
                                    <div class="ccircle"></div>
                                    <div class="ccapsule">
                                        <h5>behance</h5>
                                    </div>
                                </div>
                                <div class="elem">
                                    <img src="./project2/1.png" alt="">
                                    <img src="./project2/2.png" alt="">
                                    <img src="./project2/3.png" alt="">
                                    <img src="./project2/4.png" alt="">
                                    <img src="./project2/5.png" alt="">
                                </div>
                            </div>

                            <div>
                                <div class="crow">
                                    <div class="ccircle"></div>
                                    <div class="ccapsule">
                                        <h5>behance</h5>
                                    </div>
                                </div>
                                <div class="elem">
                                    <img src="./project3/1.png" alt="">
                                    <img src="./project3/2.png" alt="">
                                    <img src="./project3/3.png" alt="">
                                    <img src="./project3/4.png" alt="">
                                    <img src="./project3/5.png" alt="">
                                </div>
                            </div>

                            <div>
                                <div class="crow">
                                    <div class="ccircle"></div>
                                    <div class="ccapsule">
                                        <h5>behance</h5>
                                    </div>
                                </div>
                                <div class="elem">
                                    <img src="./project4/1.png" alt="">
                                    <img src="./project4/2.png" alt="">
                                    <img src="./project4/3.png" alt="">
                                    <img src="./project4/4.png" alt="">
                                    <img src="./project4/5.png" alt="">
                                </div>
                            </div>

                            <div>
                                <div class="crow">
                                    <div class="ccircle"></div>
                                    <div class="ccapsule">
                                        <h5>behance</h5>
                                    </div>
                                </div>
                                <div class="elem">
                                    <img src="./project5/1.png" alt="">
                                    <img src="./project5/2.png" alt="">
                                    <img src="./project5/3.png" alt="">
                                    <img src="./project5/4.png" alt="">
                                    <img src="./project5/5.png" alt="">
                                </div>
                            </div>
                        
                        </div>
                    </div>

.cursor {
          // position: fixed;
          position: absolute;
          z-index: 99999;
          // opacity: 0;
          pointer-events: none;

          div {
            opacity: 0;
            pointer-events: none;
            width: 25vw;
            height: 18vw;
            display: flex;
            flex-direction: column;
            gap: 3%;
            transition: all cubic-bezier(0.19, 1, 0.22, 1) 1s;

            .crow {
              height: 15%;
              width: 100%;
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 0.5vw;

              .ccircle {
                height: 100%;
                width: 9%;
                border-radius: 15px;
                border: 2px solid white;
              }

              .ccapsule {
                width: 40%;
                height: 100%;
                background-color: #fff;
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;

                h5 {
                  font-size: 0.9vw;
                  font-weight: 100;
                  text-transform: uppercase;
                }
              }
            }

            .elem {
              height: 82%;
              width: 100%;
              position: relative;

              img {
                position: absolute;
                top: 0;
                left: 0;
                opacity: 0;
                width: 100%;
                animation: an 4s linear infinite;

                &:nth-child(2) {
                  animation-delay: 1s;
                }

                &:nth-child(3) {
                  animation-delay: 2s;
                }

                &:nth-child(4) {
                  animation-delay: 3s;
                }

                &:nth-child(5) {
                  animation-delay: 4s;
                }
              }
            }

            @keyframes an {
              0% {
                opacity: 1;
              }
              20% {
                opacity: 1;
              }
              21% {
                opacity: 0;
              }
              40% {
                opacity: 0;
              }
              60% {
                opacity: 0;
              }
              80% {
                opacity: 0;
              }
              100% {
                opacity: 0;
              }
            }
          }
        }

        document.querySelectorAll(".cont") .forEach(function(elem){ 
  let image;
  elem.addEventListener("mousemove", function(dets){ 
    image = dets.target;
    console.log(document.querySelector(".cursor").children[image.dataset.index])
    // document.querySelector(".cursor").children[image.dataset.index].style.opacity = 1;
    // document.querySelector(".cursor").children[image.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`; 
    elem.style.filter = "grayscale(1)"; 

  })
  elem.addEventListener("mouseleave", function(dets){
    image = dets.target;
    elem.style.filter = "grayscale(0)"; 
    // document.querySelector(".cursor").children[image.dataset.index].style.opacity = 0; 
  }) 
})

console.log(document.querySelector(".cursor").children[image.dataset.index]) 