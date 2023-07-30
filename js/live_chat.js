var num = 1;
function send() {
    var chat = 'my_chat'+num;
    var reply = document.getElementById('reply_chat').value;
    var text = document.getElementById(chat);
    let html = '<div class="my_chat" id="my_chat' + (num+1) +'">' + reply + '</div>';
    text.insertAdjacentHTML("afterend", html);
    document.getElementById('reply_chat').value = "";
    num+=1;
}