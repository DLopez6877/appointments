//Business or back-end logic:



//User interface or front-end logic:

$(function() {
  $("form#setup").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();
    var descriptionInput = $("input#description").val();
    var dateInput = $("input#date").val();
    var timeInput = $("input#time").val();

    $("#output").append("<li>" + nameInput + "</li>");
    $("#output").append("<li>" + descriptionInput + "</li>");
    $("#output").append("<li>" + dateInput + "</li>");
    $("#output").append("<li>" + timeInput + "</li>");
  });
});
