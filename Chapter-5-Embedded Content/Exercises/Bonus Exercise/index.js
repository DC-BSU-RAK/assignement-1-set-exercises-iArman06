/*the name gets displayed on the buttons*/
const sounds = ['ah-ha','back-of-the-net','bang-out-of-order','dan','email-of-the-evening','hello-partridge','i-ate-a-scotchegg','im-confused'] 

sounds.forEach((sound)=>{

    /*creating a button for each sound added*/
    const btn = document.createElement("song") /*creating button for the songs*/
    btn.classList.add('btn')        /*css class btn*/

    btn.innerText = sound /*the inner text will be same as the sound which we have*/
    btn.addEventListener("click",()=>{
        document.getElementById(sound).play() /*the ID from (index.html) will be chechked and then the matching id sound will be played*/
    })

    document.getElementById("song").appendChild(btn)
})

