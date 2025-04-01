import React from "react";

const DeepLinkButton = () => {
  const androidLink =
    "intent://worldcoin.org/mini-app?app_id=app_acd85595213ca97827cbadfa4bd85321#Intent;scheme=https;action=android.intent.action.VIEW;package=com.worldcoin;end;";
  const iosLink =
    "https://worldcoin.org/mini-app?app_id=app_acd85595213ca97827cbadfa4bd85321";

  return (
    <a
      href={/Android/i.test(navigator.userAgent) ? androidLink : iosLink}
      className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
    >
      Open in App
    </a>
  );
};

export default DeepLinkButton;