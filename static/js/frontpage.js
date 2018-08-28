let mainDOM = {
    createElements : function(){
        let mainContainer = document.createElement('div');
        mainContainer.setAttribute('class', 'mainContainer');
        mainContainer.setAttribute('id', 'mainContainer');
        document.body.appendChild(mainContainer);
        
        this.createLogo();
        this.createMenu();
      
    },

    createLogo : function(){
        let logo = document.createElement('img');
        logo.setAttribute('src', '/static/img/brain.jpg');
        logo.setAttribute('alt', 'brain');
        logo.setAttribute('id', 'logo');
        logo.setAttribute('class', 'image');
        document.getElementById('mainContainer').appendChild(logo);
    },

    createMenu : function(){
        this.createMenuContainer();
        this.createFields();
    },

    createMenuContainer: function(){
        let menuContainer = document.createElement('div');
        menuContainer.setAttribute('class', 'menuContainer');
        menuContainer.setAttribute('id', 'menuContainer');
        document.getElementById('mainContainer').appendChild(menuContainer);
    },
    
    createFields : function(){
        let leftField = document.createElement('div'); 
        leftField.setAttribute('class','field');
        leftField.setAttribute('id','leftField');
        document.getElementById('menuContainer').appendChild(leftField);

        let rightField = document.createElement('div');
        rightField.setAttribute('class','field');
        rightField.setAttribute('id','rightField');
        document.getElementById('menuContainer').appendChild(rightField);

        this.createButtons();
    },
    
    createButtons : function(){
        let leftButton = document.createElement('button');
        leftButton.setAttribute('type','button');
        leftButton.setAttribute('class','button');
        leftButton.setAttribute('id','leftButton');
        leftButton.innerHTML = 'Learn';
        leftButton.addEventListener('click', this.afterClick);
        document.getElementById('leftField').appendChild(leftButton);

        let rightButton = document.createElement('button');
        rightButton.setAttribute('type','button');
        rightButton.setAttribute('class','button');
        rightButton.setAttribute('id','rightButton');
        rightButton.innerHTML = 'ADD new card';
        rightButton.addEventListener('click', this.addNewQuestion);
        document.getElementById('rightField').appendChild(rightButton);
    },


    addNewQuestion : function(){
        mainEvent.removeButtonsFromFrontPage();
    },
}


let mainEvent = {
    removeButtonsFromFrontPage : function(){
        let mainContainer = document.getElementById('mainContainer');
        mainContainer.removeChild(mainContainer.lastChild);
        mainEvent.createTextBoxes();
    },
        
    createTextBoxes : function(){
        let newQuestion = document.createElement('form');
        newQuestion.setAttribute('action', '');
        newQuestion.setAttribute('method', 'POST');
        newQuestion.setAttribute('class', 'newQuestion');
        newQuestion.setAttribute('id', 'newQuestion');
        mainContainer.appendChild(newQuestion);

        let labelForQuestion = document.createElement('p');
        labelForQuestion.innerHTML = 'New question:'
        document.getElementById('newQuestion').appendChild(labelForQuestion);

        let questionTextBox = document.createElement('textarea');
        questionTextBox.setAttribute('name', 'question');
        questionTextBox.setAttribute('id', 'question');
        questionTextBox.setAttribute('cols', '30');
        questionTextBox.setAttribute('rows', '2');
        questionTextBox.setAttribute('placeholder', 'enter your question here')
        questionTextBox.required = 'True';
        document.getElementById('newQuestion').appendChild(questionTextBox);
    
        let labelForAnswer = document.createElement('p');
        labelForAnswer.innerHTML = 'New answer:'
        document.getElementById('newQuestion').appendChild(labelForAnswer);

        let answerTextBox = document.createElement('textarea');
        answerTextBox.setAttribute('name', 'answer');
        answerTextBox.setAttribute('id', 'answer');
        answerTextBox.setAttribute('cols', '30');
        answerTextBox.setAttribute('rows', '2');
        answerTextBox.setAttribute('placeholder', 'enter your answer here')
        answerTextBox.required = 'True';
        document.getElementById('newQuestion').appendChild(answerTextBox);

        let submitButtonDiv = document.createElement('div');
        submitButtonDiv.setAttribute('class', 'submitDiv')
        submitButtonDiv.setAttribute('id', 'submitDiv')
        let submitButton = document.createElement('button');
        submitButton.setAttribute('type', 'submit');
        submitButton.setAttribute('onclick', '');
        submitButton.innerHTML = 'SUBMIT';
        document.getElementById('newQuestion').appendChild(submitButtonDiv);
        document.getElementById('submitDiv').appendChild(submitButton);
    }, 

}