    let containerdiv = document.querySelector(".container");
    let allboxes = document.querySelector(".boxes");
    let gridsize = document.querySelector(".gridsize");

    
    
    function createBox(num) {
      let i = num * num;
      while (0 < i) {
        let box = document.createElement("div");
        
        box.addEventListener("mouseenter",  (e) => {
          e.target.style.background = "black"

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

    
    
  
    
    createBox(5);

    gridsize.addEventListener("click", function() {

        let desiredgridsize = prompt("number? ");
        if (desiredgridsize > 100) {
          alert("Gridsize cannot be bigger than 100!!!");
        } else {
          while (containerdiv.firstChild) 
            containerdiv.removeChild(containerdiv.firstChild);
          createBox(desiredgridsize);
        }
        
        
    
    });