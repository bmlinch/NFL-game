var newPlayerForm = $('#newPlayer')

function addPlayer(e) {
    e.preventDefault();
    var form = this;
    // get values from input fields
    var playerName = form['player-name'].value;
    var position = form['player-position'].value
    var num = form['player-number'].value

    var epic = new AddPlayerToRoster(playerName, position, num)
    draw(epic)
}

function draw(obj) {
    $('#addname').append(obj.name + " ")
    $('#addposition').append(obj.position + " ")
    $('#addnumber').append(obj.num + " ")
}

newPlayerForm.submit(addPlayer)

$('#reset').click(resett)

function resett(e){
    $('#addname').text("name")
    $('#addposition').text("")
    $('#addnumber').text("")
}