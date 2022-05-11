// var clickbtn = document.querySelectorAll(".card .btn").click();
// console.log(clickbtn);
// var card = document.querySelectorAll(".card");

// document.querySelectorAll(".btn").addEventListener('click', function() {
//     card.classList.toggle('flipped');
// }, false);
// var card = document.querySelector("div.card.display").length;
var numberofbtns = document.querySelectorAll(".btn").length;


    for(var i = 0; i < numberofbtns; i++)
   {
        document.querySelectorAll(".btn")[i].addEventListener("click" , function()
    {
        card.classList.toggle('flipped');
     }, false);

    }

   
// const btns = document.querySelectorAll(".btn")
// const hrs = document.querySelectorAll(".card-content h2")
// const previous = document.querySelectorAll(".card-content p")

// const dailyData = [['4hrs', 'Yesterday -3hrs'], ['1hrs', 'Yesterday -1hrs'], ['2hrs', 'Yesterday -2hrs'], ['1hrs', 'Yesterday -0hrs'], ['1hrs', 'Yesterday -1hrs'], ['4hrs', 'Yesterday -3hrs']]

// const weeklyData = [['12hrs', 'Last Week -13hrs'], ['3hrs', 'Last Week -3hrs'], ['4hrs', 'Last Week -3hrs'], ['4hrs', 'Last Week -3hrs'], ['14hrs', 'Last Week -12hrs'], ['9hrs', 'Last Week -6hrs']]

// const monthlyData =  [['48hrs', 'Last Month -52hrs'], ['12hrs', 'Last Month -12hrs'], ['16hrs', 'Last Month -12hrs'], ['16hrs', 'Last Month -12hrs'], ['56hrs', 'Last Month -48hrs'], ['36hrs', 'Last Month -24hrs']]


// // click event for buttons
// btns.forEach((btn, i) => {
//   btn.addEventListener('click', (e) => {
//     removeActiveState(btns)
//     e.target.id = 'active'
//     classList = e.target.classList
    
//     // check which button was clicked and update data accordingly
//     if (classList.contains("btn--daily")) {
//       updateTextContent(dailyData, hrs, previous)
//     }
//     else if (classList.contains("btn--weekly")) {
//       updateTextContent(weeklyData, hrs, previous)
//     }
//     else {
//       updateTextContent(monthlyData, hrs, previous)
//     }
//   })
// })


// // unhiglight active buttons if any
// function removeActiveState(nodeList) {
//   for (let node of nodeList) {
//     if (node.id == 'active') {
//       node.removeAttribute('id')
//     }
//   }
// }

// // update data
// function updateTextContent(data, hrs, previous) {
//   for (let i=0; i<data.length; i++) {
//     hrs[i].textContent = data[i][0]
//     previous[i].textContent = data[i][1]
//   }
// }