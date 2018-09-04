let mainDOM = {
    createElementsHomePage : function(){
        this.createMainContainer()
        this.createLogo();
        this.createMenuContainer();
        this.createFields();
        this.createButtons();
    },
    
    createMainContainer : function(){
        let mainContainer = document.createElement('div');
        mainContainer.setAttribute('class', 'mainContainer');
        mainContainer.setAttribute('id', 'mainContainer');
        document.body.appendChild(mainContainer);
    },

    createLogo : function(){
        let logo = document.createElement('img');
        logo.setAttribute('src', '/static/img/brain.jpg');
        logo.setAttribute('alt', 'brain');
        logo.setAttribute('id', 'logo');
        logo.setAttribute('class', 'image');
        document.getElementById('mainContainer').appendChild(logo);
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
        rightButton.addEventListener('click', mainEvents.addNewCard);
        document.getElementById('rightField').appendChild(rightButton);
    },
}



let mainDOMRemoval = {
    removeButtonsFromHomePage : function(){
        let mainContainer = document.getElementById('mainContainer');
        mainContainer.removeChild(mainContainer.lastChild);
    },
}



let mainEvents = {
    addNewCard : function(){
        mainDOMRemoval.removeButtonsFromHomePage();
        mainEvents.createTextBoxes()
    },

    createTextBoxes : function(){
        let newQuestionForm = document.createElement('form');
        newQuestionForm.setAttribute('action', '/new_question');
        newQuestionForm.setAttribute('method', 'POST');
        newQuestionForm.setAttribute('class', 'newQuestion');
        newQuestionForm.setAttribute('id', 'newQuestion');
        mainContainer.appendChild(newQuestionForm);

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
// tutaj stop
        let submitButtonDiv = document.createElement('div');
        submitButtonDiv.setAttribute('class', 'submitDiv')
        submitButtonDiv.setAttribute('id', 'submitDiv')
        let submitButton = document.createElement('button');
        submitButton.setAttribute('type', 'submit');
        submitButton.addEventListener('click', this.afterclick);
        submitButton.innerHTML = 'SUBMIT';
        document.getElementById('newQuestion').appendChild(submitButtonDiv);
        document.getElementById('submitDiv').appendChild(submitButton);
    }, 





    // convertInputToJSON : function(){
    //     let questionData = document.getElementById('question').value;
    //     let answerData = document.getElementById('answer').value;
    //     let dataToDB = { question : questionData, answer : answerData};
    //     localStorage.setItem('newRecord', JSON.stringify(dataToDB));
    //     console.log(questionData, answerData, dataToDB);

    // }
}