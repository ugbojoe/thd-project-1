// function initApp() {
//   console.log('Hello from JavaScript land.');
//   updateTheSubmitButton();
// }

// Manually Enter number in inpur box and display on enter submit - Manual Entry
function addSku(e) {
 if (e.keyCode === 13) {
   let userInput = document.getElementById('sku-input');
   let textNode = document.createTextNode(userInput.value);
   let li = document.createElement('li');
   li.appendChild(textNode);

   let sku = document.getElementById('skugen');
   sku.appendChild(li);

   userInput.value = '';
   return false;  // prevents event from bubbling
 }
}
// Random Number Generation for auto gen - Auto Gen
function skuRnd() {
  console.log("button clicked");
  var totalIterations = parseInt(document.getElementById('input').value);
  console.log(totalIterations);
  var output = document.getElementById('output');
  output.innerHTML = '';
  for(var i = 1; i <= totalIterations; i++) {
       let sku = Math.floor((Math.random() * 1039999) + 1039999999);
       console.log('sku:', sku);
       // var item = document.createElement('div');
       // var item = document.createElement('li');
       var listItem = document.createElement("li");
       var textNode = document.createTextNode(sku);
       listItem.appendChild(textNode);
       output.appendChild(listItem);
   }
};
