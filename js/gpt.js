let loading = document.getElementById("loading")
let logoImg = document.getElementById("img-logo")

//enter key press
document.onkeydown = function(event) {
    if (event.keyCode == 13){
        sendToChatGPT()
    }
    }

document.getElementById("submit-btn").addEventListener("click", function(){
    sendToChatGPT()
    
})

function sendToChatGPT(){
    let value = document.getElementById("word-input").value
    
    logoImg.style.display = "none"
    loading.style.display = "block"

    let body = {
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: value}],
    }

    let headers = {
        Authorization: "Bearer Your API Key",
    }

    //AXIOS
    axios
    .post("https://api.openai.com/v1/chat/completions", body, {
        headers:headers,
    })

    .then((response)=> {
        let reply = response.data.choices[0].message.content
        document.getElementById("reply-content").innerHTML = `<p>${reply}</p>`

        loading.style.display = "none"
    }) 
        
    
}