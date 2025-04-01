import React from "react";

const DeepLinkButton = () => {
  const handleClick = () => {
    const androidLink =
      "intent://worldcoin.org/mini-app?app_id=app_acd85595213ca97827cbadfa4bd85321#Intent;scheme=https;action=android.intent.action.VIEW;package=com.wordcoin;end;";
    const iosLink =
      "https://worldcoin.org/mini-app?app_id=app_acd85595213ca97827cbadfa4bd85321";

    if (/Android/i.test(navigator.userAgent)) {
      window.location.href = androidLink;
    } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.href = iosLink;
    } else {
      alert("This feature is only available on mobile devices.");
    }
  };

  return <button onClick={handleClick}>Open in App</button>;
};

export default DeepLinkButton;