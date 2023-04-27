var dt = new Date();
document.getElementById("date-time").innerHTML=dt;
    

      function openDiv(id){
        var descDiv = document.querySelector("#" + id);
        var descText = document.getElementById("descText" + id.substr(-1));
        var linkBtn = document.getElementById("linkButton" + id.substr(-1));
        if (descDiv.style.height == "75%"){
          descDiv.style.height = "0%";
          descText.style.display = "none";
          linkBtn.style.display = "none";
        } else {
          descDiv.style.height = "75%";
          descText.style.display = "block";
          descText.style.color = "white";
          linkBtn.style.display = "block";
          linkBtn.style.color = "white";
        }
      }

      function setTextDisplay(){
        var descText = document.getElementById("descText1");
        descText.style.display = "none";
      }

      function test(){
        var test = document.getElementById("button1")
        test.style.backgroundColor = "red";

      }

 
/* CODE THAT DIDN'T WORK
window.addEventListener("load", function() {
  hideDescText();
});

window.addEventListener("load", function(){
  setTextDisplay();
  test();
})*/
      
      /*function hideDescText(id) {
        var descText = document.getElementById(id);
        if (descText.style.display !== "none") {
          descText.style.display = "none";
        }
      }
      
      window.onload = function() {
        hideDescText("descText1");
        hideDescText("descText2");
      }

        /*function openDiv(id) {
        var descDiv = document.querySelector("#" + id);
        var descText = document.querySelector(".descText1")
        if (descDiv.style.height == "75%") {
          descDiv.style.height = "0%";
          descText.style.display = "none";
        } else {
          descDiv.style.height = "75%";
          descText.style.display = "block";
        }
      }

      function hideDescText() {
        var descTextElements = document.querySelectorAll(".descText1");
        for (var i = 0; i < descTextElements.length; i++) {
          descTextElements[i].style.display = "none";
        }
      }*/