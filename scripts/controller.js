$(document).ready(function () {
	$('#register').on('click', function() {
		$.ajax({
	        type: "post",
	        url: "http://localhost:3000/register",
	        crossDomain: true,
	        data: ({
	        	name: $('#fname').val() + $('#mname').val() + $('#lname').val(),
			   	birthdate: $('#birthdate-month').val() + "-" + $('#birthdate-day').val() + "-" + $('#birthdate-year').val(),
			    sitio_and_barangay:  $('#sitio_barangay').val(),
			    city_or_municipality: $('#city_municipality').val(),
			    province: $('#province').val(),
			   	number1: $('#cellphone1').val(),
			    owner1: $('#owner1').val(),
			   	number2: $('#cellphone2').val(),
			    owner2: $('#cellphone2').val(),
			   	email_address: $('#email').val(),
			   	highschool : $('#high_school').val(),
			   	organization: $('#sponsor').val(),
			    siblings: $('#sibling').val(),
			    rank: $('#rsibling').val(),
			    fathername: $('#fathername').val(),
			    fatherincome: $('#fincome').val(),
			    mothername: $('#mothername').val(),
			    motherincome: $('#mincome').val(),
			   	motivation: $('#motivation').val()
	        }),
	        success: function (response) {
	            console.log(response);

	        },
	        error: function (err){
	            console.log(err);
	        }
    	})
	})
	
})