containerdiv = document.querySelector(".container");
    
    
    function createBox(num) {
      let i = num * num;
      while (0 < i) {
        let box = document.createElement("div");
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