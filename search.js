//$(window).load(function() {
// // executes when complete page is fully loaded, including all frames, objects and images
// 
//});
window.app = {};
document.addEventListener("apiReady", function(){
    window.app.login = function () {
        var body = {
            email: 'anandsingla2003@gmail.com',
            password: 'Mujhenahipata@888'
        };
         window.df.apis.user.login({body: body}, function (response) {
            //assign session token to be used for the session duration
            //document.getElementById("login-status").innerHTML = "Logged In"
			alert("Login");
            window.authorizations.add("X-DreamFactory-Session-Token", new ApiKeyAuthorization("Jam test1", response.session_id, 'header'));
			
        }, function(response){
			//document.getElementById("login-status").innerHTML = window.app.getErrorString(response);
			var k = window.app.getErrorString(response);
			alert(k);
        });
    };

//after which, you could make a call to the db service, if the current user has access
//if you've enabled a guest user, you can give them access to any resource without auth.

    window.app.getTables = function () {
        window.df.apis.db.getTables(function (response) {
            //Here is your resource list

        });
    };
//get records from a table?  easy.  Just pass the path variable table_name
//A path variable simply gets tacked on to the endpoint, not as a query param.
    window.app.getTodos = function () {
		alert("Hello");
		//window.app.login();
		//var mood = document.getElementById(mood).value;
		
		
		//var location = document.getElementById(location);
		//var strUser = location.options[location.selectedIndex].value;
		//var select = document.getElementById('location');
//		var options = select.options;
//		var selected = select.options[select.selectedIndex];
//		alert(selected);
		var selectBox = document.getElementById("location");
	    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
		console.log(selectedValue);
        window.df.apis.db.getRecords({table_name: "event", filter :"Eve_location like '"+selectedValue+"'"}, function (response) {
            //Do something with the data;
           //document.getElementById("get-results").innerHTML = JSON.stringify(response);
			alert(JSON.stringify(response));
			var string = JSON.stringify(response);
			var obj = JSON.parse(string);
			for(var i = 0; i < obj.record.length; i++)
			{
			document.write(obj.record[i].Eve_Name);
			document.write(obj.record[i].Eve_location);
			document.write(obj.record[i].Eve_Date);
			document.write("\n");
			document.write("<br>");
			
			}
        }, function(response) {
            //document.getElementById("get-results").innerHTML = window.app.getErrorString(response);
			var k =window.app.getErrorString(response);
			alert(k);
        });
    };

}, false);


//
//if(document.getElementById(Search))
//{
//	function 
//	var mood = document.getElementById(mood).value;
//	var location = document.getElementById(location).value;
//	
//	
//}