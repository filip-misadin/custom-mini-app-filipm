import { useState } from "react";
import { Button } from "./components/ui/button";
import DeepLinkButton from "./components/ui/DeepLinkButton";
import { Card, CardContent } from "./components/ui/card";
import myImage from "./assets/testimg1.jpg";

export default function App() {
  const [screen, setScreen] = useState("home");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <img src={myImage} alt="Description" className="w-64 h-auto" />
      <Card className="w-full max-w-md p-4 text-center">
        <CardContent>
          {screen === "home" && (
            <div>
              <h1 className="text-xl font-bold mb-4">Home Screen v5</h1>
              <p>Welcome to the simple navigation app!</p>
              <div className="mt-4 space-x-2">
                <Button onClick={() => window.open('https://enchanting-frangollo-294255.netlify.app/about', '_blank')} variant="outline">
                  Go to About
                </Button>
                <Button onClick={() => setScreen("contact")} variant="outline">
                  Go to Contact
                </Button>
              </div>
            </div>
          )}

          {screen === "about" && (
            <div>
              <h1 className="text-xl font-bold mb-4">About Screen</h1>
              <p>This is a simple app demonstrating navigation.</p>
              <Button onClick={() => setScreen("home")} className="mt-4">
                Back to Home
              </Button>
            </div>
          )}

          {screen === "contact" && (
            <div>
              <h1 className="text-xl font-bold mb-4">Contact Screen</h1>
              <p>Feel free to reach out anytime!</p>
              <Button onClick={() => setScreen("home")} className="mt-4">
                Back to Home
              </Button>
	      <a href="intent://worldcoin.org/mini-app?app_id=app_acd85595213ca97827cbadfa4bd85321#Intent;scheme=https;action=android.intent.action.VIEW;package=com.worldcoin;end;">
    	       Intent Schema
	      </a>
	      <a href="worldapp://mini-app?app_id=app_acd85595213ca97827cbadfa4bd85321">
    	       World App Schema
	      </a>
	      <DeepLinkButton />
	      <button onClick={() => document.getElementById('fileInput').click()}>
  		Select Files
	      </button>
	      <input type="file" id="fileInput" multiple accept="image/*,application/pdf" style="display:none;" />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
