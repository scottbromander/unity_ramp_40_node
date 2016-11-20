$("document").ready(function(){
  enable();
});

function enable(){
  $(".test-one").on("click", postOne);
  $(".test-two").on("click", postTwo);
  $(".test-three").on("click", postThree);

  $(".speed-neg").on("click", changeSpeed);
  $(".speed-no").on("click", changeSpeed);
  $(".speed-pos").on("click", changeSpeed);
}

function changeSpeed(){
  $.ajax({
    type: "GET",
    url: "/speed/" + $(this).data("speed"),
    success: function(response){
      console.log(response);
    }
  });
}

function postOne(){
  $.ajax({
    type: "GET",
    url: "/first",
    success: function(response){
      console.log(response);
    }
  });
}

function postTwo(){
  $.ajax({
    type: "GET",
    url: "/second",
    success: function(response){
      console.log(response);
    }
  });
}

function postThree(){
  $.ajax({
    type: "GET",
    url: "/third",
    success: function(response){
      console.log(response);
    }
  });
}
