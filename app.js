var data = {
    qnum: 0,
    questions: [
        {
            title: 'What comes after A?',
            answer:'B',
            bgcolor: 'purple'
        },

        {
            title: 'Is 5 bigger than 4?',
            answer:'B',
            bgcolor: '#DAD'
        },

        {
            title: 'what is the color of a banana',
            answer:'yellow',
            bgcolor: 'rgb (5,125,252)'
        }

    ]
};
function Start(){
    document.querySelector('#h_q').innerText = data.questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
}

function checkAnswer(){
    var myInp = document.querySelector('.answer').value;
    console.log(myInp);
    console.log(data.questions[data.qnum].answer)
    if (myInp === data.question[data.qnum].answer){
  
        document.querySelector('#h_r').innerHTML = '<h1>Correct!</h1>';

        data.qnum++;
        document.querySelector('#h_q').innerText = data.questions[data.qnum].title;
        document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;

    }

    else{

        document.querySelector('#h_r').innerText = '<h1>Wrong!</h1>';
    }
}

Start();