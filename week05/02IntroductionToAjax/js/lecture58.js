// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("name.json", 
            function (res) {
            	
              var message = res.firstName + " " + res.lastName;
              if ( res.likesManchegosChees){
                message += " likes manchego's chees";
              }else{
                message += " doesn't like manchego's chees";
              }
              message += " and uses ";
              message += res.numberOfDisplays;
              message += " displays of coding.";

              document.querySelector("#content").innerHTML = "</h2>" + message + "!</h2>";
            });

        
      });
  }
);