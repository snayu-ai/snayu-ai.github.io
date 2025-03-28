"use client"
import React, { useEffect } from "react";

const ChatwootWidget = () => {
    useEffect(() => {
        // Add Chatwoot Settings
        window.chatwootSettings = {
            hideMessageBubble: false,
            position: "right", // This can be left or right
            locale: "en", // Language to be set
            type: "standard", // [standard, expanded_bubble]
        };

        // Paste the script from inbox settings except the <script> tag
        (function (d, t) {
            var BASE_URL = "http://192.168.10.225:3000";
            var g = d.createElement(t),
                s = d.getElementsByTagName(t)[0];
            g.src = BASE_URL + "/packs/js/sdk.js";
            s.parentNode.insertBefore(g, s);
            g.async = !0;
            g.onload = function () {
                window.chatwootSDK.run({
                    websiteToken: "<your-website-token>",
                    baseUrl: BASE_URL,
                });
            };
        })(document, "script");
        
        // No cleanup needed as Chatwoot doesn't provide a method to remove the widget
    }, []); // Empty dependency array ensures this runs only once on mount

    return null;
};

export default ChatwootWidget;
