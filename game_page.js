player_1_name= localStorage.getItem("player1_key");
player_2_name= localStorage.getItem("player2_key");

player_1_score= 0;
player_2_score= 0;

document.getElementById("player1name").innerHTML= player_1_name+" :- ";
document.getElementById("player2name").innerHTML= player_2_name+" :- ";

document.getElementById("player1score").innerHTML= player_1_score;
document.getElementById("player2score").innerHTML= player_2_score;

document.getElementById("question_turn").innerHTML= "Question turn :-"+ player_1_name;
document.getElementById("answer_turn").innerHTML= "Answer turn :-"+ player_2_name;

function send(){

    get_word= document.getElementById("word").value;
    word= get_word.toLowerCase();
    letter1= word.charAt(1);
    length_divide_2= Math.floor(word.length/2);

    letter2= word.charAt(length_divide_2);
    length_minus_1= word.length-1;
    letter3= word.charAt(length_minus_1);

    word1= word.replace(letter1, "_");
    word2= word1.replace(letter2, "_");
    word3= word2.replace(letter3, "_");

    questionword= "<h4 id='word_display'>Q. "+word3+"</h4>";
    inputbox= "<br>Answer: <input type='text' id='input_box'>";

    check_button= "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row= questionword+inputbox+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

question_turn= "player_1";
answer_turn= "player_2";

function check(){

    get_answer= document.getElementById("input_box").value;
    ans= get_answer.toLowerCase();
    if(word==ans){
    
        if(answer_turn=="player_1"){
            
            player_1_score= player_1_score+1;
            document.getElementById("player1score").innerHTML= player_1_score;
        }
        else{

            player_2_score= player_2_score+1;
            document.getElementById("player2score").innerHTML= player_2_score;
        }

    }
    if(question_turn=="player_1"){

       question_turn="player_2"; 
       document.getElementById("question_turn").innerHTML= "Question turn :-"+ player_2_name;
    }
    else{

        question_turn="player_1";
        document.getElementById("question_turn").innerHTML= "Question turn :-"+ player_1_name;
    }

    if(answer_turn=="player_1"){

        answer_turn="player_2"; 
        document.getElementById("answer_turn").innerHTML= "Answer turn :-"+ player_2_name;
     }
     else{
 
         answer_turn="player_1";
         document.getElementById("answer_turn").innerHTML= "Answer turn :-"+ player_1_name;
     }
     document.getElementById("output").innerHTML= "";
}