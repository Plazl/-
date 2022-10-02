var time1;
if (time1 == undefined) {time1 = new Date().getTime()}
var time;
var testSave;
setInterval(function() {
	time = new Date().getTime()})
var test = {
  "x":0,
 "xMult":1,
 "time1":time1
}
var saveData = JSON.parse(localStorage.getItem('testSave'))
function load() {
 if (typeof saveData !== "undefined") {
  if (typeof saveData.xMult !== "undefined") {test.xMult = saveData.xMult}
  if (typeof saveData.time1 !== "undefined") {test.time1 = saveData.time1}
  if (typeof saveData.x !== "undefined") {test.x = saveData.x}
  time1 -= time;
  test.x = (test.x * test.xMult) * time
 }
  load()
}
function addToX() {
 test.x += 1 * test.xMult
}
var int = 1000
setInterval(addToX, int)
function save() {
 testSave = {
  "x":test.x,
  "xMult":test.xMult,
  "time1":test.time1
 }
  localStorage.setItem('testSave', JSON.stringify(testSave))
}
function update() {
   if (time1 == undefined) {time1 = time}
}                      
setInterval(update, 1)
