console.log("javascript")

document.getElementById("addburger").addEventListener("click", function(){
    event.preventDefault()
 const burgerName = document.getElementById("burger-name").value
 console.log(burgerName)

 // call the route to create the burger on the db  FETCH   (AJAX)  post query, pass the name of the burger
 $.ajax({
    url: "/burger/create",
    method:"POST",
    data: {"burgerName": burgerName}
 })
 .then(function(data){
    console.log(data)
    //reaload
    window.location.reload(true);
 })
})

document.querySelector(".devoured").addEventListener("click", function(){
    event.preventDefault()
    const ID = $(this).attr("index")
    console.log(ID)
// onclick for devour  get the ID
$.ajax({
    url:"/burger/update/" + ID,
    method: "PUT"
}).then(function(data){
    console.log(data)
    //reload the page
    window.location.reload(true);
    console.log("hello")  
})
})
