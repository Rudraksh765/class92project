function Add_user(){

      player_one_name= document.getElementById("player_one_input").value;
      player_two_name= document.getElementById("player_two_input").value;
      
localStorage.setItem("player1_key", player_one_name);
localStorage.setItem("player2_key", player_two_name);

window.location= "game_page.html";
}
