class Game {
    constructor(){
        this.level1 = createButton("1");
        this.level2 = createButton("2");
        this.level3 = createButton("3");
        this.level4 = createButton("4");
        this.level5 = createButton("5");
    }

    start(){
        form = new Form();
        form.display();
        
        this.handleLevelsButton();
    }

    handlePlayButton(){
        form.playButton.mousePressed(() => {

        })
    }

    handleLevelsButton(){
        form.levelsButton.mousePressed(() => {
            this.level1.position(width - 100, height - 100);
            this.level2.position(width - 150, height - 100);
            this.level3.position(width - 200, height - 100);
            this.level4.position(widht - 250, height - 100);
            this.level5.position(width - 300, height - 100);
        })
    }
}