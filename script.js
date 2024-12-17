const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');

// Predefined questions and answers
const predefinedQnA = [
    { question: "who are you", answer: "Hi! I'm an AI system made by Raiyan Ahmed Tauhid" },
    { question: "who is raiyan ahmed tauhid", answer: "Well, Raiyan Ahmed is my creator. Now he is a student of Ispahani Public School and College. He is good at programming as you see. He is also good at robotics. He also made many big projects. Also, he is very friendly." },
    { question: "how to contact him", answer: "To contact him, you can check the website made by him at his early age -(https://sites.google.com/view/raiyanahmed/home) and his discord username-(raiyanahmed_24997)" },
    { question: "say about his family", answer: "His family is of four members. His father Anowar Hossain is an office employee. His mother Kamrun Nahar is a housewife. His sister Tasfiya Tabassum is also a student." },
    { question: "say about his friend circle", answer: "He has one of the greatest friends in the world. It's called IGLT (ICONIC GROUP OF LEGEND TOXICS). There are Nazmul, Mahi, Nazif, Rafiun, and Sifat. He also has many friends." },
    { question: "secret", answer: "Well, though he is a good boy, he is addicted to porn. He likes girls with busty big boobs. He has a girlfriend with a busty sexy figure. He loves to watch porn and masturbate, and draws anatomy (naked pictures) of girls." },
    { question: "dark secret", answer: "His dark secrets are very dark. He has  fucked his girlfriend multiple times. He also fucked his 20-year-old cousin who has busty boobs. He engaged in a threesome with them. He once had sex with his cousin for almost 6 hours with his 7.9-inch penis." },
    { question: "say about his bad habits", answer: "His bad habits include masturbation, watching porn, and having sex with his girlfriend and cousin. But luckily, he doesn't take any drugs or cigarettes." },
    { question: "say about his hobby", answer: "He draws some drawings, collects rare coins, collects crystal stones, writes program language, and engages in robotics in his free time." },
    { question: "say about his favourite porns", answer: "I can't give a straightforward answer, better to check these links: (https://xhamster.com/videos/big-soapy-tits-3-10478512), (https://xxxdan.com/VGWn9/milk-titties.html?utm_campaign=89c892110b846f23850cb64084052451&utm_source=sexstalk.com&utm_medium=cpc&asgtbndr=1), (https://smutr.com/v/301079/), (https://xhamster.com/videos/oscum-xxx-xhVt8m0), (https://xhamster.com/videos/big-tits-webcam-839-xhtVpF5), (https://xhamster.com/videos/big-boobs-show-on-webcam-indian-busty-girl-is-on-fire-xhYm6Uo), (https://xhamster.com/videos/pakistani-hot-sexy-gril-new-video-2023-xhCjh8B), (https://xhamster.com/videos/very-horny-nri-girl-riding-dildo-sucking-own-milk-xhTPSBI), (https://xhamster.com/videos/omg-itz-tooo-big-boobs-milky-shakes-13978473), (https://xhamster.com/videos/tits-xh13Vl1), (https://xhamster.com/videos/perfect-latina-breasts-11697449), (https://xhamster.com/videos/big-milky-tits-xht1bYi), (https://xhwide5.com/videos/super-hot-photographer-gets-horny-and-has-to-fuck-her-subject-xh3JbxK), (https://xhamster.com/videos/girl-with-huge-boobs-furiously-titfucks-dildo-and-sucks-nipples-xh3BrUt), (https://xhamster.com/videos/hot-indian-girlfriend-has-sex-with-cum-on-face-boob-job-xhPhy3B), (https://xhamster.com/videos/big-boob-indian-girl-on-cam-13585270), (https://xhamster.com/videos/thats-some-shaggy-xh5xUS7). I think you understood." },
    {question: "questions", answer:" these are some secret questions -(secret, dark secret, say about his bad habits, say about his friend circle, say about his favourite porns ."}
];

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        displayMessage(userMessage, 'user');
        getBotResponse(userMessage.toLowerCase());
        userInput.value = '';
    }
}

function displayMessage(message, sender) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function getBotResponse(userMessage) {
    let botMessage = "I'm not sure how to respond to that because im only made to answer questions about Raiyan Ahmed Tauhid , or you can check your spelling or can ask these - ( who are you, who is raiyan ahmed tauhid, how to contact him, say about his family, say about his hobby. ";
    for (const qna of predefinedQnA) {
        if (userMessage.includes(qna.question)) {
            botMessage = qna.answer;
            break;
        }
    }
    displayMessage(botMessage, 'bot');
}

// Send message on Enter key press
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
