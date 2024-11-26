containerdiv = document.querySelector(".container");
    
    
    function createBox(num) {
      let i = num * num;
      while (0 < i) {
        let box = document.createElement("div");
        
        box.addEventListener("mouseenter",  (e) => {
          e.target.style.background = "blue";
          
        });

        box.addEventListener("mouseleave", (e) => {
          e.target.style.background = ""
        });

        let boxheight = 600 / num;
        let boxwidht = 600 / num;
        box.style.height = `${boxheight}px`;
        box.style.width = `${boxwidht}px`;
        box.classList.add("boxes");
        containerdiv.appendChild(box);
        i--;

      }

      
        };


    

    createBox(40);