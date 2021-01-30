class form{
    constructor(){

    }

    display(){
        
        var title = createElement('h2')
        var input = createInput("Name");
        var button = createButton("Play");
        var greet = createElement('h3');

        title.html('Car Racing game');
        title.position(130,0);

        input.position(130,60);

        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            playerCount = playerCount + 1;

            player.Update(name);
            player.updateCount(playerCount)

            greet.html("Hello " + name);
            greet.position(130,160)

        });
    }
}
