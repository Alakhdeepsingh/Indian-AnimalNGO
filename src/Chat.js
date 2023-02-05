import React, { useEffect } from "react";

function Chat() {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "142a19ac7adc19a4aa19999167c728137",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});

    return () => {};
  }, []);

  return <div></div>;
}

export default Chat;
