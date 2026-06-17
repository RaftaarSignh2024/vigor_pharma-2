"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", sender: "bot", text: "Hi there! 👋 Welcome to Vigor Life Care. What's your name?" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [step, setStep] = useState<"name" | "email" | "phone" | "message" | "sending" | "done">("name");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    const newMessages = [...messages, { id: Date.now().toString(), sender: "user" as const, text: userText }];
    setMessages(newMessages);
    setInputValue("");

    let nextStep = step;
    const newFormData = { ...formData };

    if (step === "name") {
      newFormData.name = userText;
      nextStep = "email";
      setTimeout(() => {
        setMessages((prev) => [...prev, { id: Date.now().toString(), sender: "bot", text: `Nice to meet you, ${userText}! What's your email address?` }]);
        setStep(nextStep);
      }, 500);
    } else if (step === "email") {
      newFormData.email = userText;
      nextStep = "phone";
      setTimeout(() => {
        setMessages((prev) => [...prev, { id: Date.now().toString(), sender: "bot", text: "Got it! Could you also provide your phone number?" }]);
        setStep(nextStep);
      }, 500);
    } else if (step === "phone") {
      newFormData.phone = userText;
      nextStep = "message";
      setTimeout(() => {
        setMessages((prev) => [...prev, { id: Date.now().toString(), sender: "bot", text: "Thanks! Finally, how can we help you today? Please type your inquiry below." }]);
        setStep(nextStep);
      }, 500);
    } else if (step === "message") {
      newFormData.message = userText;
      nextStep = "sending";
      setStep("sending");
      
      setTimeout(() => {
        setMessages((prev) => [...prev, { id: Date.now().toString(), sender: "bot", text: "Sending your message... please wait." }]);
      }, 500);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newFormData),
        });

        if (response.ok) {
          setMessages((prev) => [...prev, { id: Date.now().toString(), sender: "bot", text: "Message sent successfully! We will get back to you shortly." }]);
        } else {
          setMessages((prev) => [...prev, { id: Date.now().toString(), sender: "bot", text: "Oops, something went wrong while sending your message. Please try again later." }]);
        }
      } catch (error) {
        setMessages((prev) => [...prev, { id: Date.now().toString(), sender: "bot", text: "Network error occurred. Please try again later." }]);
      }
      setStep("done");
    }
    
    setFormData(newFormData);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Open chat"
      >
        {isOpen ? (
          <i className="ph ph-x text-2xl"></i>
        ) : (
          <i className="ph ph-chat-circle-dots text-2xl"></i>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white border border-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300 font-sans">
          {/* Header */}
          <div className="bg-green-600 p-4 text-white flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <i className="ph ph-robot text-2xl text-white"></i>
            </div>
            <div>
              <h3 className="font-semibold">Vigor Support</h3>
              <p className="text-xs text-green-100">Typically replies instantly</p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3 h-80">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.sender === "bot"
                    ? "bg-white text-gray-800 self-start border border-gray-100 shadow-sm rounded-tl-none"
                    : "bg-green-600 text-white self-end shadow-sm rounded-tr-none"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {step === "sending" && (
              <div className="max-w-[80%] p-3 rounded-2xl text-sm bg-white text-gray-800 self-start border border-gray-100 shadow-sm rounded-tl-none flex items-center gap-2">
                <i className="ph ph-spinner animate-spin text-green-600 text-lg"></i>
                Sending...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          {step !== "sending" && step !== "done" && (
            <div className="p-3 bg-white border-t border-gray-100">
              <form onSubmit={handleSend} className="flex items-center gap-2">
                <input
                  type={step === "email" ? "email" : step === "phone" ? "tel" : "text"}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={`Type your ${step}...`}
                  className="flex-1 bg-gray-50 text-gray-800 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 text-sm"
                  required
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-700 transition-colors"
                >
                  <i className="ph ph-paper-plane-right text-lg"></i>
                </button>
              </form>
            </div>
          )}
          {step === "done" && (
            <div className="p-4 bg-white border-t border-gray-100 text-center text-sm text-gray-500">
              Chat session ended. Close the window if you are finished.
            </div>
          )}
        </div>
      )}
    </>
  );
}
