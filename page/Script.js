//dragElement(document.getElementById('plant1'));
//dragElement(document.getElementById('plant2'));
//dragElement(document.getElementById('plant3'));
//dragElement(document.getElementById('plant4'));
//dragElement(document.getElementById('plant5'));
//dragElement(document.getElementById('plant6'));
//dragElement(document.getElementById('plant7'));
//dragElement(document.getElementById('plant8'));
//dragElement(document.getElementById('plant9'));
//dragElement(document.getElementById('plant10'));
//dragElement(document.getElementById('plant11'));
//dragElement(document.getElementById('plant12'));
//dragElement(document.getElementById('plant13'));
//dragElement(document.getElementById('plant14'));

document.querySelectorAll("[Id^='plant']").forEach(dragElement);

//Function to drag elements aroound the terrarium
function dragElement(terrariumElement)
{
    //4 positions pour le positionnement dans l'écran
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
        highestZIndex = 1; //Keep the value of zIndex
    terrariumElement.onpointerdown = pointerDrag;
    terrariumElement.addEventListener("dblclick", bringToFront);

    function pointerDrag(e)
    {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

     function elementDrag(e)
    {
        // calculate the new cursor position
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4);
        // set the element's new position:
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }
    function stopElementDrag()
    {
        document.onpointerup = null;
        document.onpointermove = null;
    }
    //When double clicked, the element goes in front
    function bringToFront()
    {
        highestZIndex++;
        terrariumElement.style.zIndex = highestZIndex;
    }
}



 