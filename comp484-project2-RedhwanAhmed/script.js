$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.chonky-button').click(clickedChonkyButton);
    //$('.testNotify').click(actionNotification);

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Chonky Yoshi", weight:1250, happiness:5, chonkiness:100};
  
    function clickedTreatButton() {
      // Increase pet happiness
      pet_info['happiness']++;
      // Increase pet weight
      pet_info['weight']+=25;
      disableAllButtons();
      checkAndUpdatePetInfoInHtml();
      actionNotification("+1 Happiness, +25 Weight. Mmmm cake...");

    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info['happiness']++;
      // Decrease pet weight
      pet_info['weight']-=10;
      disableAllButtons();
      checkAndUpdatePetInfoInHtml();
      actionNotification("+1 Happiness, -10 Weight. OH LAWD...");
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info['happiness']--;
      // Decrease pet weight
      pet_info['weight']-=25;
      disableAllButtons();
      checkAndUpdatePetInfoInHtml();
      actionNotification("-1 Happiness, -25 Weight. The Chonk Shrunk.");
    }

    // The Chonky button chekcs if 
    function clickedChonkyButton() {
      disableAllButtons();
      if(pet_info['chonkiness'] < 90) {
        actionNotification("Inadequate Chonk my friend. Must feed da brudda more.");
      } else if (pet_info['chonkiness'] > 105) {
        actionNotification("EMERGENCY!!! Yoshi has gone more chonky (but is that even a problem?)");
      } else {
        actionNotification("Optimal Chonk levels maintained. "+ pet_info['chonkiness'] +"% Utilization.");
      }
    }
  
    function checkAndUpdatePetInfoInHtml() {
      updateChonkLevel();
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero, set it back to zero
      if(pet_info['weight'] < 0) {
        pet_info['weight'] = 0;
      }
      if(pet_info['happiness'] < 0) {
        pet_info['happiness'] = 0;
      }
    }

    // This function disables all buttons when one is pressed to ensure that too many things aren't able to be done at once.
    function disableAllButtons() {
      var buttons = document.getElementsByTagName("Button");
      for(var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        buttons[i].style.transition = "all 100ms linear";
        buttons[i].style.backgroundColor = "#373737"
        buttons[i].style.color = "#6B1300"
      }
      setTimeout(() => {
        var buttons = document.getElementsByTagName("Button");
        for(var i = 0; i < buttons.length; i++) {
          buttons[i].disabled = false;
          buttons[i].style.backgroundColor = "#3c7539"
          buttons[i].style.color = "#fafafa"
        }
      }, 3750)
    }

    // This creates the text in the notification tab under the main container where The Chonk resides.
    function actionNotification(msg) {
      var notify = document.querySelector(".notification");
      //console.dir(notify); used to check properties of querySelector object.
      notify.style.transition = "all 250ms ease";
      notify.style.height = "75px";
      setTimeout(() => {
        notify.children[0].style.transition = "all 250ms linear";
        notify.children[0].innerText = msg;
        notify.children[0].style.color = "rgba(255, 255, 255)";
        setTimeout(() => {
          notify.children[0].style.transition = "all 250ms linear";
          notify.children[0].style.color = "rgba(255, 255, 255, 0)";
          setTimeout(() => {
            notify.style.height = "0px";
          }, 250);
        }, 3000);
      }, 250);
    }


    
   
    // Updates chonkiness level
    function updateChonkLevel() {
      pet_info['chonkiness'] = parseInt(pet_info['weight']/1250*100);
    }
 
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.chonk').text(pet_info['chonkiness']);
    }