import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

export default function App2() {
  const [screen, setScreen] = useState("home");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <Card className="w-full max-w-md p-4 text-center">
        <CardContent>
          {screen === "home" && (
            <div>
              <h1 className="text-xl font-bold mb-4">Home Screen v2</h1>
              <p>Welcome to the simple navigation app!</p>
              <div className="mt-4 space-x-2">
                <Button onClick={() => setScreen("about")} variant="outline">
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
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
