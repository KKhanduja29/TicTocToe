let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new_btn");
let msgcon = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");

let turnO = true; //Playerx ,PlayerO
let count=0;

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetgame=() =>{
    turn0=true;
    count=0;
    enabled();
    msgcon.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("Box Was Clicked");
    if (turnO) {
      box.innerText = "O";
      box.style.color="black";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color="red";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let iswinner= checkwinner();

    if(count== 9 && !iswinner){
      gamedraw();
    }
  });
});

const gamedraw = () =>{
  msg.innerText=`Game was a Draw.`;
  msgcon.classList.remove("hide");
  disabled();
}

const disabled = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enabled = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText="";
  }
};

const showwinner = (winner) => {
  msg.innerText = `Cogratulations, Winner is ${winner} `;
  msgcon.classList.remove("hide");
  disabled();
};

const checkwinner = () => {
  for (pattern of winpatterns) {
    //   console.log(pattern[0],pattern[1],pattern[2]);
    //   console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

    let posval = boxes[pattern[0]].innerText;
    let posva2 = boxes[pattern[1]].innerText;
    let posva3 = boxes[pattern[2]].innerText;

    if (posval != "" && posva2 != "" && posva3 != "") {
      if (posval === posva2 && posva2 === posva3) {
        // console.log("Winner", posval);
        showwinner(posval);
      }
    }
  }
};

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

