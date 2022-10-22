buttons = document.querySelectorAll("button")

buttons.forEach(element => {element.addEventListener("click", function(event){
    make_sound(event.target.innerHTML)

})});

const make_sound = function(key){
    const element = document.getElementsByClassName(key)[0]
    const style = getComputedStyle(element)
    const temp_var = style.backgroundImage
    const audio_file = temp_var.split("images")[1].split(".")[0].split("/")[1]
    var audio = new Audio(`sounds/${audio_file}.mp3`);
    audio.play()    

}

document.addEventListener("keydown", function(event){
    make_sound(event.key)

})
