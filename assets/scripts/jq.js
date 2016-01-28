var cId = 0;
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


function draw(obj) {
    var playerRoster = $(".player-roster");
    var pcard = $("<div class='player-card' id=" + obj.id + "></div>")
    pcard.append('<img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" alt="Profile Picture">')
    pcard.append('<button type="button" class="btn btn-danger remove">Danger</button>')
    pcard.append('<p>' + obj.name + '</p>')
    pcard.append('<p>' + obj.position + '</p>')
    pcard.append('<p>' + obj.num + '</p>')
    playerRoster.prepend(pcard);


}

$('.player-roster').on('click', ".btn-danger", removePlayer)




function getIndex(id) {

    for (var i = 0; i < roster.length; i++) {
        debugger
        if (id === roster[i].id) {
            return i;
        }
    }
    return -1
}

function removePlayer(e) {
    // var id = $(".player-card").attr("id")
    
    var btn = $(e.target);
    var card = btn.closest(".player-card")
    var myId = parseInt(card.attr("id"))
    debugger
    roster.forEach(function (player, i) {
        if (player.id === myId) {
            roster.splice(i, 1)

        }
    })
    card.remove()
    $(".player-roster").empty()
    reDraw()
}



function reDraw() {
    // var rosterElem = $('.player-roster')
    for (var i = 0; i < roster.length; i++) {
        draw(roster[i])
    }


}
newPlayerForm.submit(addPlayer);

// $('#reset').click(resett)



   
