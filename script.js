 let container=document.querySelector(".container");
 let box=document.getElementById("box");
 
 


//  console.log(container);
//  console.log(box);

 let clone=box.cloneNode(true)

//  console.log(box);


let counter=0;
 let addButton=document.getElementById("add");

 addButton.addEventListener("click",()=>{
    counter++;
    
    let cloneNode=box.cloneNode(true)
    cloneNode.id=`node${counter}`;
  
    cloneNode.style.display="block"
    container.appendChild(cloneNode);


    // console.log(container.childNodes);

    let remove=document.querySelectorAll(".remove")
    // console.log(remove);

    remove.forEach((item)=>{
        item.addEventListener("click",(e)=>{
            let currentNode=e.currentTarget.parentElement.parentElement;
            container.removeChild(currentNode)
        })

    })

 })




 

 
 