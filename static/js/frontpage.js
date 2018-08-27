let mainDOM = {
    createElements : function(){
        let mainContainer = document.createElement('div');
        mainContainer.setAttribute('class', 'maincontainer');
        mainContainer.setAttribute('id', 'maincontainer');
        document.body.appendChild(mainContainer);
        this.createLogo();
      
    },

    createLogo : function(){
        let logo = document.createElement('img');
        logo.setAttribute('src', '/static/img/brain.jpg');
        logo.setAttribute('alt', 'brain');
        logo.setAttribute('id', 'logo');
        document.getElementById('maincontainer').appendChild(logo);
    }

    
}