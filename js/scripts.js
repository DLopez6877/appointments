//Business or back-end logic:



//User interface or front-end logic:

$(function() {
  $("form#setup").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();
    var descriptionInput = $("input#description").val();
    var dateInput = $("input#date").val();
    var timeInput = $("input#time").val();

    $(".name").text(nameInput);
    $(".description").text(descriptionInput);
    $(".date").text(dateInput);
    $(".time").text(timeInput);

    $("#output").show();
  });
});
