var newPlayerForm = $('#newPlayer')
var roster = [];
function addPlayer(e) {
    e.preventDefault();
    var form = this;
    // get values from input fields
    var playerName = form['player-name'].value;
    var position = form['player-position'].value
    var num = form['player-number'].value

    var epic = new AddPlayerToRoster(playerName, position, num)
    roster.push(epic);
    draw(epic)
    debugger
    form.reset()
}

function draw(obj) {
    $(".player-roster").prepend("<div class='player-card'></div>")
    var pcard = $(".player-roster").find(".player-card")[0];
    pcard = $(pcard)
    // pcard(".po").append('<img class="po" src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" alt="This.">')
    // $('#addname').append(obj.name + " ")
    // $('#addposition').append(obj.position + " ")
    // $('#addnumber').append(obj.num + " ")
   pcard.append('<img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" alt="Profile Picture">')
   pcard.append('<p>' + obj.name + '</p>')
   pcard.append('<p>' + obj.position + '</p>')
   pcard.append('<p>' + obj.num + '</p>')
    
}

newPlayerForm.submit(addPlayer)

// $('#reset').click(resett)



   
