{
  "use strict"

  let drag = document.getElementById("drag");
  dragElement(drag);

  function dragElement(element){
    let pos1 = 0, pos2= 0, pos3 = 0, pos4 = 0;

    drag.addEventListener("mousedown",function(e){
      dragMouseDown(e);
    })


    // if(document.getElementById(element.id + "header")){
    //   document.getELementById(element.id + "header").addEventListener("click",function(){
    //     console.log("hi");
    //   });
    // }else{
    //   element.addEventListener("click",function(){
    //     console.log("hi");});
    // }
  }
  function dragMouseDown(e){
    // e = e|| window.event;
    pos3 = e.clientX;
    pos4 = e.clientY;

    document.addEventListener("mouseup",function(e){
      closeDragElement(e);
    });
    document.addEventListener("mouseover",function(e){
      elementDrag(e);
    });
  }

  function elementDrag(e){
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    e.style.top = (e.offsetTop - pos2) +"px";
    e.style.lefy = (e.offsetLeft - pos1) +"px";
  }

}