$("document").ready(function(){
    $(".test-one").on("click", postOne);
    $(".test-two").on("click", postTwo);
    $(".test-three").on("click", postThree);
});

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
