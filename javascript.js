    let containerdiv = document.querySelector(".container");
    let allboxes = document.querySelector(".boxes");
    let gridsize = document.querySelector(".gridsize");



    const colordigits = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    
    
    
    function createBox(num) {
      let i = num * num;
      let opacity = 0.1;
      while (0 < i) {
        let box = document.createElement("div");
        
        box.addEventListener("mouseenter",  (e) => {
          if (e.target.style.background != "") {
            null
          } else {
            e.target.style.background = "#" +  colordigits[Math.floor(Math.random() * colordigits.length)] + colordigits[Math.floor(Math.random() * colordigits.length)] + colordigits[Math.floor(Math.random() * colordigits.length)] + colordigits[Math.floor(Math.random() * colordigits.length)] + colordigits[Math.floor(Math.random() * colordigits.length)] + colordigits[Math.floor(Math.random() * colordigits.length)]
            opacity = opacity + 0.1
            e.target.style.opacity = opacity;
          }});

      
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