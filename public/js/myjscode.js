
randomInteger = function(mininteger,maxinteger){
    return Number(mininteger+Math.floor((Math.random() * (maxinteger+1-mininteger))));
  }

numberGenerator = (a1 = 9,a2 = 50, pick1 = 4, pick2 = 8) => {
    times = randomInteger(pick1,pick2);
    let r1,l1;
    r1 = [];
    l1 = [];
    for (let index = 0; index < times; index++) {
        var a = 20;
        rnr = randomInteger(a1,a2);
        rnl = randomInteger(a1,a2);
        while (rnr===rnl) {
            //console.log(index,rnr,rnl)
            console.log("The same happens...")
            rnr = randomInteger(a1,a2);
            rnl = randomInteger(a1,a2);
        }
        r1.push(rnr)
        l1.push(rnl)
    }
    return [l1,r1];
  }

//console.log(ng)

myStorage = window.localStorage;
myIndex = window.localStorage;
myStat = window.localStorage;
myData = window.localStorage;

var myObject = {
    name: "",
    lhs: 0,
    rhs: 0,
    start : "",
    end: "",
    answer: 0 
  }

document.getElementById("startGame")
.addEventListener("click", function() {
    document.querySelector("#gameData").style.visibility = "hidden";
    var name = window.prompt("Enter your name: ");
    if(!name){
        name = "NoName"
    }
    ng = numberGenerator()
    var [l1,r1] = ng
    var myl = l1.length 
    myStorage = [l1,r1]
    //console.log(myStorage)
    myIndex = 0
    myStat = myl
    myData = []
    var myel = document.querySelectorAll("#dataContainer")
    //console.log(myel)
    if(myel){
        //console.log("I exist...")
        //myel.innerHTML = "";
        //myel.querySelectorAll('*').forEach(n => n.remove());
     for (let index = 0; index < myel.length; index++) {
        myel[index].remove();
         
     }
        // var child = myel.lastElementChild;  
        // while (child) { 
        //     myel.removeChild(child); 
        //     child = myel.lastElementChild; 
        // } 
        // while (myel.firstChild) {
        //     myel.firstChild.remove();
        // }
    }else{
        console.log("I do not exists...")
    }
    //document.getElementById("dataContainer").remove();
    document.getElementById("startGame").disabled = true;
    let inst = "Hi " +name+", please click on the box you think is larger"
    document.querySelector("#instruction").textContent = inst;
    document.querySelector(".lhs").style.visibility = "visible";
    document.querySelector("#lhs").textContent = l1[0];
    
    document.querySelector(".rhs").style.visibility = "visible";
    document.querySelector("#rhs").textContent = r1[0];
    document.querySelector("#status").textContent = "Status: "+1+"/"+myl
    //let bb = Array(myl).fill(myObject)
    
for (let index = 0; index < myl; index++) {
    let bx = Object.create(myObject)
    bx.name = name;
    bx.lhs = l1[index];
    bx.rhs = r1[index];
    bx.start = ""
    bx.end = ""
    bx.answer = 0
    myData.push(bx)
    
}
    //console.log(bb)
    myData[0].start = new Date()
    //console.log(myData)
    //l1.shift()
    //r1.shift();
});

//document.getElementById("btnPlaceOrder").disabled = true; 

document.querySelector(".lhs")
.addEventListener("click", function() {
    if (!(myIndex===(myStat-1))) {
        myData[myIndex].end = new Date()
        myData[myIndex].answer = myStorage[0][myIndex]
        let l1 = myStorage[0][myIndex+1]
        let r1 = myStorage[1][myIndex+1]
        document.querySelector("#lhs").textContent = l1;
        document.querySelector("#rhs").textContent = r1;
        let st = myIndex+2
        document.querySelector("#status").textContent = "Status: "+st+"/"+myStat
        //console.log("you click lhs");
        myStorage[myIndex]
        myIndex = myIndex+1
        myData[myIndex].start = new Date()
        //console.log(myIndex)
    }else{
        myData[myIndex].end = new Date()
        myData[myIndex].answer = myStorage[0][myIndex]
        document.querySelector(".lhs").style.visibility = "hidden";
        document.querySelector(".rhs").style.visibility = "hidden";
        document.querySelector("#instruction").textContent = "Game Over";
        document.getElementById("startGame").disabled = false;
        document.querySelector("#status").textContent = "Status: Waiting.."
        document.querySelector("#gameData").style.visibility = "visible";
        var htmlText = myData.map(function(o){
            return ` 
           
            <div class="container" >
                <div class = "div-conatiner" id = "dataContainer">
                    <p class="p-name"> Name: ${o.name}</p>
                    <p class="p-loc"> LHS: ${o.lhs}</p>
                    <p class="p-desc"> RHS: ${o.rhs}</p>
                    <p class="p-created"> Start: ${o.start}</p>
                    <p class="p-uname"> End: ${o.end}</p>
                    <p class="p-uname"> User's Response: ${o.answer}</p>
                </div>
            </div>
            `;
          });
          
          $('body').append(htmlText);

    }
    
})

document.querySelector(".rhs")
.addEventListener("click", function() {
    if (!(myIndex===(myStat-1))) {
        myData[myIndex].end = new Date()
        myData[myIndex].answer = myStorage[1][myIndex]
        let l1 = myStorage[0][myIndex+1]
        let r1 = myStorage[1][myIndex+1]
        document.querySelector("#lhs").textContent = l1;
        document.querySelector("#rhs").textContent = r1;
        let st = myIndex+2
        document.querySelector("#status").textContent = "Status: "+st+"/"+myStat
        //console.log("you click rhs");
        myIndex = myIndex+1
        myData[myIndex].start = new Date()
        //console.log(myIndex,myStat)
    }
    else{
        myData[myIndex].end = new Date()
        myData[myIndex].answer = myStorage[1][myIndex]
        document.querySelector(".lhs").style.visibility = "hidden";
        document.querySelector(".rhs").style.visibility = "hidden";
        document.querySelector("#instruction").textContent = "Game Over";
        document.getElementById("startGame").disabled = false;
        document.querySelector("#status").textContent = "Status: Waiting.."
        // /* var jsonVar = {
        //     text: "example",
        //     number: 1
        // };
        // var jsonStr = JSON.stringify(jsonVar);
        // document.body.innerHTML = jsonStr; */
        //`<h4> Game Data</h4>`
        document.querySelector("#gameData").style.visibility = "visible";
        var htmlText = myData.map(function(o){
            return ` 
           
            <div class="container" >
                <div class = "div-conatiner" id = "dataContainer">
                    <p class="p-name"> Name: ${o.name}</p>
                    <p class="p-loc"> LHS: ${o.lhs}</p>
                    <p class="p-desc"> RHS: ${o.rhs}</p>
                    <p class="p-created"> Start: ${o.start}</p>
                    <p class="p-uname"> End: ${o.end}</p>
                    <p class="p-uname"> User's Response: ${o.answer}</p>
                </div>
            </div>
            `;
          });
          
          $('body').append(htmlText);
    }
    
})