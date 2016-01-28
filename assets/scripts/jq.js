var cId= 0;
var newPlayerForm = $('#newPlayer')
var roster = [];
function addPlayer(e) {
    e.preventDefault();
    var form = this;
    // get values from input fields
    var playerName = form['player-name'].value;
    var position = form['player-position'].value
    var num = form['player-number'].value

    var epic = new AddPlayerToRoster(playerName, position, num, cId)
    roster.push(epic);
    draw(epic)

    form.reset()
    cId++
}

// function draw(obj) {
//     $(".player-roster").prepend("<div class='player-card'></div>")
//     var pcard = $(".player-roster").find(".player-card")[0];
//     pcard = $(pcard)
//     // pcard(".po").append('<img class="po" src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" alt="This.">')
//     // $('#addname').append(obj.name + " ")
//     // $('#addposition').append(obj.position + " ")
//     // $('#addnumber').append(obj.num + " ")
   
//    pcard.append('<img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" alt="Profile Picture">')
//    pcard.append('<button type="button" class="btn btn-danger" id="'+obj.id+'">Danger</button>')
//    pcard.append('<p>' + obj.name + '</p>')
//    pcard.append('<p>' + obj.position + '</p>')
//    pcard.append('<p>' + obj.num + '</p>')
    
// }

function draw(obj) {
	var playerRoster = $(".player-roster");
	var pcard = $("<div class='player-card'></div>")
	pcard.append('<img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" alt="Profile Picture">')
	pcard.append('<button type="button" class="btn btn-danger remove">Danger</button>')
	pcard.append('<p>' + obj.name + '</p>')
	pcard.append('<p>' + obj.position + '</p>')
	pcard.append('<p>' + obj.num + '</p>')
	
	pcard.find('button.remove').click(function(){
           
        
		//delete player from the list of players at some point...
        for (var i = 0; i < roster.length; i++){
            debugger;
        
            if(this.id == roster[i].id){
                alert(roster[i].name)
                // roster[i].remove()
            }
        }
		playerRoster.remove(pcard);
	})
	
	playerRoster.prepend(pcard);	
}
newPlayerForm.submit(addPlayer)

// $('#reset').click(resett)



   
