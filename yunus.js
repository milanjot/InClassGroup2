var data = {
    qnum:0,
    questions:[{
        title:"Whats comes after A?",
        answer:"B",
        bgcolor: "green",
        img: "http://placekitten.com/100/100"
    },
    {
        title:"Is 5 bigger than 4?",
        answer:"Yes",
        bgcolor: "yellowgreen",
        img: "http://placekitten.com/100/110"
    },
    {
        title:"What is the color of a banana?",
        answer:"Yellow",
        bgcolor: "lightgreen",
        img: "http://placekitten.com/100/120"
    },
    {
        title:"What is the capital of BC?",
        answer:"Victoria",
        bgcolor: "lightyellow",
        img: "http://placekitten.com/100/130"
    },
    {
        title:"Which color represents 'correct'?",
        answer:"Green",
        bgcolor: "darkgreen",
        img: "http://placekitten.com/100/140"
    }
    ]
};
function Start(){
    document.querySelector("#question").innerText = data.questions[data.qnum].title;
    document.querySelector("#outside").style.backgroundColor = data.questions[data.qnum].bgcolor;
    document.querySelector("#answer").innerHTML = "<img src='"+data.questions[data.qnum].img+"'/>";
}
function CheckAnswer(){
    var myInp = document.querySelector("#input").value;
    console.log(myInp);
    if(myInp === data.questions[data.qnum].answer){
        document.querySelector("#answer").innerHTML = "<h1>Correct!</h1>";
        document.querySelector("#answer").style.color = "green";

        data.qnum++;
        document.querySelector("#question").innerText = data.questions[data.qnum].title;
        document.querySelector("#outside").style.backgroundColor = data.questions[data.qnum].bgcolor;
        document.querySelector("#answer").innerHTML = "<img src='"+data.questions[data.qnum].img+"'/>";

        /*if(qnum === 1){
            qnum++;
            document.querySelector("#question").innerText = "Is 5 bigger than 4?";
        answer = "Yes";
        }else if(qnum === 2){
            qnum++;
            document.querySelector("#question").innerText = "What is the color of a banana?";
        answer = "Yellow";
        }*/
    }else{
        document.querySelector("#answer").innerHTML = "<h1>WRONG!</h1>";
        document.querySelector("#answer").style.color = "red";
        document.querySelector("#outside").style.backgroundColor = "red";
    }
}