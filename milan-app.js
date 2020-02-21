var data = {
    qnum:0,
    questions:[
        {
            title: "What comes after A?",
            answer: "B",
            img:"http://place-puppy.com/99x99",
            bgcolor: "teal"
        },
        {
            title: "Is 5 bigger than 4?",
            answer: "Yes",
            img:"http://place-puppy.com/101x101",
            bgcolor: "orange"
        },
        {
            title: "What is the color of a banana?",
            answer: "Yellow",
            img:"http://place-puppy.com/102x102",
            bgcolor: "Yellow"
        }
    ]
};

function Start(){
    document.querySelector("#question-txt").innerText = data.questions[data.qnum].title;
    document.querySelector("#Screen").style.backgroundColor = data.questions[data.qnum].bgcolor;
    document.querySelector("#h_r").innerHTML = "<img src='"+data.questions[data.qnum].img+"'/>";
}


function CheckAnswer(){
    var myInp = document.querySelector("#answer").value;
    console.log(myInp);
    console.log(data.questions[data.qnum].answer)
    if (myInp === data.questions[data.qnum].answer){
        // alert ("Correct!");
        document.querySelector("#h_r").innerHTML = "<h1> Correct! </h1>"
        document.querySelector("#h_r").style.color = "green"
        document.querySelector("#question-btn").style.backgroundColor = "green"

        data.qnum++;
        document.querySelector("#question-txt").innerText = data.questions[data.qnum].title;
        document.querySelector("#Screen").style.backgroundColor = data.questions[data.qnum].bgcolor;
        document.querySelector("#h_r").innerHTML = "<img src='"+data.questions[qnum].img+"' />";
    


    } else {
        // alert ("WRONG!");
        document.querySelector("#h_r").innerHTML = "<h1> Wrong! </h1>"
        document.querySelector("#question-btn").style.backgroundColor = "red"
        document.querySelector("#h_r").style.color = "red"
    }


/* 
^    If what the types is the same as the answer i want, 
then tell them it's correct
*/

}
Start();