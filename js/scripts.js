function Places() {
  this.info = [];
  this.currentId = 0;
}

Places.prototype.addInfo = function(info) {
  info.id=this.assignId();
  this.info.push(info);
}
Places.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function Info(location, landmark, weather)  {
  this.location = location;
  this.landmark = landmark;
  this.weather = weather;
}
Places.prototype.findInfo = function(id) {
  for (var i=0; i< this.info.length; i++) {
    if (this.info[i]) {     // <-- This line is new!
      if (this.info[i].id == id) {
        return this.info[i];
      }
    }                          // <-- This line is also new!
  };
  return false;
}
Places.prototype.deleteInfo = function(id) {
  for (var i=0; i< this.info.length; i++) {
    if (this.info[i]) {     // <-- This line is new!
      if (this.info[i].id == id) {
        delete this.info[i];
        return true;
      }
    }                          // <-- This line is also new!
  };
  return false;
}


Info.prototype.fullLocation = function() {
  return this.location + " " + this.landmark + " " + this.weather;
}

var place = new Places();
var place1 = new Info("Seattle, Washington", "Space needle", "Rainy and sunny during the summer");
var place2 = new Info("Vancouver, British Columbia","Whistler","Rainy with alot of snow");
var place3 = new Info("Cabo, Mexico", "The Arch of Cabo San Lucas", "Sunny, Warm Sea's");
place.addInfo(place1);
place.addInfo(place2);

$(document).ready(function(){

     $("button#seattle").click(function() {
       $("#result1").prepend("<li>" + place1.location + "</li>");
       $("#result1").prepend("<li>" + place1.landmark + "</li>");
       $("#result1").prepend("<li>" + place1.weather + "</li>");
     });

     $("button#vancouver").click(function() {
       $("#result2").prepend("<li>" + place2.location + "</li>");
       $("#result2").prepend("<li>" + place2.landmark + "</li>");
       $("#result2").prepend("<li>" + place2.weather + "</li>");
     });

     $("button#cabo").click(function() {
       $("#result3").prepend("<li>" + place3.location + "</li>");
       $("#result3").prepend("<li>" + place3.landmark + "</li>");
       $("#result3").prepend("<li>" + place3.weather + "</li>");
     });
})
