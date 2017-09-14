$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Thank you for your application! Soon we will contact you.");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});