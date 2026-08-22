/* =================================
   FarmXT Chatbot Frontend
================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* Create chatbot HTML */

    const chatbotHTML = `

        <!-- Chatbot Button -->

        <button
            id="farmxtChatbotButton"
            class="farmxt-chatbot-button"
            aria-label="Open FarmXT Assistant">

            💬

        </button>


        <!-- Chatbot Window -->

        <div
            id="farmxtChatbotWindow"
            class="farmxt-chatbot-window">


            <!-- Header -->

            <div class="farmxt-chatbot-header">

                <div class="farmxt-chatbot-title">

                    <span class="farmxt-chatbot-title-icon">
                        🤖
                    </span>

                    <div>

                        <h3>
                            FarmXT Assistant
                        </h3>

                        <div class="farmxt-chatbot-status">
                            Online
                        </div>

                    </div>

                </div>


               <div class="farmxt-chatbot-header-actions">

    <button
        id="farmxtChatbotClear"
        class="farmxt-chatbot-clear"
        title="Clear chat">

        🗑

    </button>

    <button
        id="farmxtChatbotClose"
        class="farmxt-chatbot-close"
        aria-label="Close chatbot">

        ×

    </button>
    

</div>

            </div>


            <!-- Messages -->

            <div
                id="farmxtChatbotMessages"
                class="farmxt-chatbot-messages">


                <div class="farmxt-chatbot-welcome">

                    🤖 Welcome to FarmXT Assistant

                    <br><br>

                    Ask your question below.

                </div>


            </div>


            <!-- Typing Indicator -->

            <div
                id="farmxtChatbotTyping"
                class="farmxt-typing">

                Typing...

            </div>


            <!-- Input -->

            <div class="farmxt-chatbot-input-area">

                <input
    type="text"
    id="farmxtChatbotInput"
    class="farmxt-chatbot-input"
    placeholder="Ask anything..."
    maxlength="500"
    autocomplete="off">


                <button
                    id="farmxtChatbotSend"
                    class="farmxt-chatbot-send"
                    aria-label="Send message">

                    ➤

                </button>

            </div>

        </div>

    `;


    /* Add chatbot to page */

    document.body.insertAdjacentHTML(
        "beforeend",
        chatbotHTML
    );


    /* Get elements */

    const chatbotButton =
        document.getElementById("farmxtChatbotButton");

    const chatbotWindow =
        document.getElementById("farmxtChatbotWindow");

    const chatbotClose =
        document.getElementById("farmxtChatbotClose");
        const chatbotClear =
    document.getElementById("farmxtChatbotClear");

    const chatbotInput =
        document.getElementById("farmxtChatbotInput");

    const chatbotSend =
        document.getElementById("farmxtChatbotSend");

    const chatbotMessages =
        document.getElementById("farmxtChatbotMessages");


    /* Open chatbot */

    chatbotButton.addEventListener("click", function () {

        chatbotWindow.style.display = "flex";

        chatbotButton.style.display = "none";

        chatbotInput.focus();

    });


    /* Close chatbot */

    chatbotClose.addEventListener("click", function () {

        chatbotWindow.style.display = "none";

        chatbotButton.style.display = "block";

    });


    /* Add user message */

    function addUserMessage(message) {

    const messageWrapper =
        document.createElement("div");

    messageWrapper.style.display = "flex";

    messageWrapper.style.flexDirection = "column";

    messageWrapper.style.alignItems = "flex-end";


    const messageElement =
        document.createElement("div");

    messageElement.className =
        "farmxt-message farmxt-user-message";

    messageElement.textContent =
        message;


    const timeElement =
        document.createElement("span");

    timeElement.className =
        "farmxt-message-time";

    timeElement.textContent =
        getCurrentTime();


    messageWrapper.appendChild(
        messageElement
    );

    messageWrapper.appendChild(
        timeElement
    );


    chatbotMessages.appendChild(
        messageWrapper
    );


    chatbotMessages.scrollTop =
        chatbotMessages.scrollHeight;

}
function getCurrentTime() {

    const now = new Date();

    return now.toLocaleTimeString([], {

        hour: "2-digit",

        minute: "2-digit"

    });

}


    /* Temporary frontend response */

    function showTypingIndicator() {

    const typing =
        document.getElementById("farmxtChatbotTyping");

    typing.style.display = "block";

    chatbotMessages.scrollTop =
        chatbotMessages.scrollHeight;

}


function hideTypingIndicator() {

    const typing =
        document.getElementById("farmxtChatbotTyping");

    typing.style.display = "none";

}


    /* Send message */

    function sendMessage() {

        const message =
            chatbotInput.value.trim();


        if (message === "") {

            return;

        }


        /* Display user message */

        addUserMessage(message);


        /* Clear input */

        chatbotInput.value = "";
        /* Clear chat */

chatbotClear.addEventListener("click", function () {

    chatbotMessages.innerHTML = `

        <div class="farmxt-chatbot-welcome">

            🤖 Welcome to FarmXT Assistant

            <br><br>

            Ask your question below.

        </div>

    `;

});


        /*
            Backend / AI connection
            will be added here later.
        */

        showTypingIndicator();

setTimeout(function () {

    hideTypingIndicator();

}, 1200);

    }


    /* Send button */

    chatbotSend.addEventListener(
        "click",
        sendMessage
    );


    /* Enter key */

    chatbotInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                sendMessage();

            }

        }
    );

});