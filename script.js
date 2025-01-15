// funktion för att spara lokal data för att visa eller inte visa header
    function loadContent(){
        var varde = localStorage.getItem("showName")
        const content = document.querySelector('.headerqnt');
        const background = document.querySelector('.full-height');
        if(varde == "true"){
            background.style.height = "26vw"
            content.style.display = "none"

        }else{
            removeHead();
        }
    };
    function notViewed(){
        localStorage.setItem("showName","false");
        showHead();
    };
    
    function imageClick(url) {
        window.location = url;
    }
// scrolla ner funktion på hemskärm svart pil
    function scrollToView() {
        const element = document.getElementById("main-content");
        element.style.scrollBehavior = "smooth";
        element.scrollIntoView();
      }
// custom cursor
  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', (e)=> {
    cursor.style.left = e.pageX +'px';
    cursor.style.top = e.pageY +'px';
  });

  //script för hover på footer och länkar//
  function hoverColor(){
  const clrcursor = document.querySelector('.cursor');
  clrcursor.style.backgroundColor = "transparent";
  clrcursor.style.border = "2px solid white";
  };
  function formHover(){
    const clrcursor = document.querySelector('.cursor');
    clrcursor.style.backgroundColor = "transparent";
};
function formHoverOut(){
    const clrcursor = document.querySelector('.cursor');
    clrcursor.style.backgroundColor = "#0045BC";
};
  function hoverOutColor(){
  const clrcursor = document.querySelector('.cursor');
  clrcursor.style.backgroundColor = "#0045BC";
  clrcursor.style.border = "";
  };
  function hoversize(){
  const clrcursor = document.querySelector('.cursor');
  clrcursor.style.height = "30px";
  clrcursor.style.width = "30px";
  };
  function hoverOutsize(){
  const clrcursor = document.querySelector('.cursor');
  clrcursor.style.height = "20px";
  clrcursor.style.width = "20px";
  };
  // funktion för att ta bort header på alla sidor utom hemskärm
    function removeHead(){
        const content = document.querySelector('.headerqnt');
        const title = document.querySelector('.title-remove');
        const paragraf = document.querySelector('.p-remove');
        const container = document.querySelector('.start-text');
        const background = document.querySelector('.full-height');
        const logotype = document.querySelector('.logotype');
        content.style.height = "0px";
        content.style.transition = "1.5s";
    
        title.style.fontSize = "0px";
        title.style.opacity = "0%";
        title.style.transition = "1.5s";
    
        paragraf.style.fontSize = "0px";
        paragraf.style.opacity = "0%";
        paragraf.style.transition = "1.5s";
        
        container.style.marginTop = "0vh";
        container.style.transition = "1.5s";
    
        background.style.height = "26vw"
        background.style.transition = "1.5s";

        logotype.style.height = "0vh"
        logotype.style.transition = "1.5s";

        localStorage.setItem("showName","true");
    };
// funktion för att visa header på hemskärm
    function showHead(){
        const content = document.querySelector('.headerqnt-expand');
        const title = document.querySelector('.title-expand');
        const paragraf = document.querySelector('.p-expand');
        const container = document.querySelector('.start-text-expand');
        const background = document.querySelector('.full-height-expand');
        const logotype = document.querySelector('.logotype');

        content.style.height = "25vw";
        content.style.transition = "2s";
    
        title.style.fontSize = "4vw";
        title.style.opacity = "100%";
        title.style.transition = "1.5s";
        title.style.textAlign = "left";
    
        paragraf.style.fontSize = "1.5vw";
        paragraf.style.opacity = "100%";
        paragraf.style.transition = "1.5s";
    
        container.style.marginTop = "9vw";
        container.style.transition = "1.5s";
    
        background.style.height = "52vw"
        background.style.transition = "1.5s";

        logotype.style.height = "15vw"
        logotype.style.transition = "1.5s";
    };

