class Form {
    constructor(){
        this.playButton = createButton("PLAY");
        this.levelsButton = createButton("LEVELS");
        this.titleImg = createElement("h1");
    }

    setElementsPosition(){
        this.titleImg.position(400,25);
        this.playButton.position(width - 1250, height - 300);
        this.levelsButton.position(width - 500, height - 300);

        this.titleImg.html("Black and White");
        this.titleImg.class("titleImg");

        this.playButton.class("levelsButton");
        this.levelsButton.class("levelsButton");
    }

    display(){
        this.setElementsPosition();
    }
}