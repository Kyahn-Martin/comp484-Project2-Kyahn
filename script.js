$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').bind({
      click:(clickedTreatButton)
    })
    $('.play-button').bind({
    click:(clickedPlayButton)
    })
    $('.exercise-button').bind({
      click:(clickedExerciseButton),
    })
    $('.toy-button').bind({
      click:(clickedGiveToy)
    }) 
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"My Pet Name", weight:10, happiness:5, toys:0};

    function clickedTreatButton() {
      pet_info.happiness += 1;
      pet_info.weight += 1;
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      pet_info.happiness += 1;
      pet_info.weight -= 1;
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      pet_info.happiness -= 1;
      pet_info.weight -= 1;
      checkAndUpdatePetInfoInHtml();
    }
    function clickedGiveToy()
    {
      pet_info.toys += 1;
      pet_info.happiness += 1;
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if (pet_info.weight <= 0)
      {
        $('.exercise-button').add('.play-button').css('color', 'red');
        pet_info.weight = 0
      }
      else
      {
        $('.exercise-button').add('.play-button').css('color', '#fafafa');
      }
      if (pet_info.happiness <= 0)
      {
        pet_info.happiness = 0
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.toys').text(pet_info.toys);
      $('.toys-section').toggle(pet_info.toys > 0);
    }
  