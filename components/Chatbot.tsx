"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaUser, FaComment, FaPaperPlane } from "react-icons/fa";



type ChatStep = "faq" | "askMore" | "collectInfo" | "freeChat";
type InfoField = "name" | "phone" | "email" | null;
type Message = { from: "bot" | "user"; text: string };

const faqData = [
  {
    label: "Admission",
    fullMessage:
      "Admissions are open for 2026! Apply online at https://www.sonabusinessschool.com/online-application?inst_id=ZFSQSGGCPYXQ9589",
  },
  {
    label: "Contact",
    fullMessage: `Contact us:
Mobile: 87781 49726 / 94896 00283
Office: 0427-4099898 / 0427-4099897
Email: admission@sonabusinessschool.com
Timing: 9:30 AM - 4:45 PM (Weekdays)`,
  },
  {
    label: "Placement",
    fullMessage:
      "We have strong placement support and internships; around 90% placement rate with top recruiters visiting.",
  },
];

// Validation helpers
const isValidName = (s: string) => /^[A-Za-z\s]{2,60}$/.test(s.trim());
const isValidPhone = (s: string) => /^\d{10}$/.test(s.trim()); // 10 digits
const isValidEmail = (s: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s.trim());

export default function ChatbotFAQ() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [menuOptions, setMenuOptions] = useState(faqData);
  const [chatStep, setChatStep] = useState<ChatStep>("faq");

  const [input, setInput] = useState("");
  const [infoField, setInfoField] = useState<InfoField>(null);
  const [userInfo, setUserInfo] = useState({ name: "", phone: "", email: "" });
  const [error, setError] = useState<string | null>(null);

  // Bot typing flag (shows separate grey typing bubble)
  const [botTyping, setBotTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll whenever messages or typing changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, botTyping, menuOptions, chatStep]);

  // Helper to push a bot message but show typing animation first
  const sendBotMessage = (text: string, typingMs = 1200) => {
    // Show typing bubble
    setBotTyping(true);

    // Clear any existing menu options while bot is 'typing'
    setMenuOptions([]);

    setTimeout(() => {
      setBotTyping(false);
      setMessages((p) => [...p, { from: "bot", text }]);
    }, typingMs);
  };

  // When opening the chat, show greeting with typing animation
  useEffect(() => {
    if (!isOpen) return;
    setMessages([]); // reset
    setMenuOptions([]);
    setChatStep("faq");
    setTimeout(() => {
      sendBotMessage("Hello! How can I assist you today? Please choose an option below.");
      // after greeting message is inserted, show menu options
      setTimeout(() => setMenuOptions(faqData), 1400);
    }, 300);
  }, [isOpen]);

  // Ask "Do you have further queries?" (with typing)
  const askFurtherQuery = () => {
    sendBotMessage("Do you have further queries? (Yes / No)");
    setChatStep("askMore");
    // setMenuOptions to Yes/No after typing
    setTimeout(() => {
      setMenuOptions([
        { label: "Yes", fullMessage: "" },
        { label: "No", fullMessage: "" },
      ]);
    }, 1200);
  };

  // Handle clicking any option button (FAQ buttons, Yes/No)
  const handleOptionClick = (label: string) => {
    // Add user's selection to messages
    setMessages((p) => [...p, { from: "user", text: label }]);
    setMenuOptions([]);
    setError(null);

    // Small delay to simulate natural conversation
    setTimeout(() => {
      // If in initial FAQ stage
      if (chatStep === "faq") {
        const found = faqData.find((f) => f.label === label);
        if (found) {
          sendBotMessage(found.fullMessage);
          // after the reply, ask further queries
          setTimeout(askFurtherQuery, 1300 + Math.min(found.fullMessage.length * 8, 600));
        } else {
          sendBotMessage("Sorry, I couldn't find that option. Try another or type your question.");
          setTimeout(() => setMenuOptions(faqData), 900);
        }
        return;
      }

      // If asking more
      if (chatStep === "askMore") {
        if (label === "Yes") {
          sendBotMessage("Great! What's your full name?");
          setChatStep("collectInfo");
          // after typing, show input and set info field
          setTimeout(() => {
            setInfoField("name");
          }, 1200);
        } else {
          sendBotMessage("Thanks! If you need anything else, just open the chat.");
          setTimeout(() => setMenuOptions(faqData), 1200);
          setChatStep("faq");
        }
        return;
      }
    }, 200);
  };

  // When user types and sends (handles info collection and free chat)
  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    // Add user message immediately
    setMessages((p) => [...p, { from: "user", text: trimmed }]);
    setInput("");
    setError(null);

    // If collecting info
    if (chatStep === "collectInfo" && infoField) {
      if (infoField === "name") {
        if (!isValidName(trimmed)) {
          // show bot typing then error reply
          sendBotMessage("Please enter a valid name (letters & spaces, min 2 chars).");
          return;
        }
        setUserInfo((p) => ({ ...p, name: trimmed }));
        sendBotMessage("Nice to meet you. What's your phone number?");
        setTimeout(() => setInfoField("phone"), 1200);
        return;
      }

      if (infoField === "phone") {
        if (!isValidPhone(trimmed)) {
          sendBotMessage("Phone must be 10 digits. Please re-enter.");
          return;
        }
        setUserInfo((p) => ({ ...p, phone: trimmed }));
        sendBotMessage("Thanks. Now please enter your email address.");
        setTimeout(() => setInfoField("email"), 1200);
        return;
      }

      if (infoField === "email") {
        if (!isValidEmail(trimmed)) {
          sendBotMessage("Please enter a valid email address.");
          return;
        }
        setUserInfo((p) => ({ ...p, email: trimmed }));
        sendBotMessage(`Thanks ${trimmed.split("@")[0]}! You can now ask your question.`);
        setInfoField(null);
        setChatStep("freeChat");
        // After acknowledgement, show free chat input (it's already visible)
        return;
      }
      return;
    }

    // If free chat, just reply with a generic ack (would be replaced by backend)
    if (chatStep === "freeChat") {
      // simulate sending to support system
      sendBotMessage("Thanks for your message — our team will reply shortly.");
      return;
    }

    // If none matched (e.g., chatStep was faq and user typed a question), attempt to match keywords
    if (chatStep === "faq") {
      const cleaned = trimmed.toLowerCase();
      const match = faqData.find((f) =>
        (f.label + " " + f.fullMessage).toLowerCase().includes(cleaned)
      );

      if (match) {
        sendBotMessage(match.fullMessage);
        setTimeout(askFurtherQuery, 1200);
      } else {
        sendBotMessage("Sorry, I didn't understand that. Try 'Admission', 'Contact' or 'Placement'.");
        setTimeout(() => setMenuOptions(faqData), 1100);
      }
    }
  };

  const isInputVisible = chatStep === "collectInfo" || chatStep === "freeChat";

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <style jsx>{`
        /* typing-dot animation used inside the separate gray bubble */
        .typing-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          margin: 0 3px;
          border-radius: 999px;
          background: #666;
          opacity: 0.25;
          animation: typing-dot 1s infinite;
        }
        .typing-dot.d2 { animation-delay: 0.12s; }
        .typing-dot.d3 { animation-delay: 0.24s; }

        @keyframes typing-dot {
          0% { opacity: 0.25; transform: translateY(0px); }
          30% { opacity: 1; transform: translateY(-3px); }
          60% { opacity: 0.6; transform: translateY(0px); }
          100% { opacity: 0.25; transform: translateY(0px); }
        }
      `}</style>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="w-80 sm:w-96 h-[520px] bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden"
            role="dialog"
            aria-label="Chat with us"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 bg-maroon text-white">
              <div className="flex items-center gap-2">
                <FaRobot className="w-6 h-6" />
                <div>
                  <div className="font-semibold text-sm">Chat with us</div>
                  <div className="text-xs opacity-80">We're here to help</div>
                </div>
              </div>
              <div>
                <button
                  aria-label="Close chat"
                  onClick={() => setIsOpen(false)}
                  className="text-white/90 hover:text-white/100 p-1 rounded"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Chat body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  {m.from === "bot" ? (
                    <div className="flex items-start gap-2 max-w-[90%]">
                      <div className="flex-shrink-0 mt-1">
                        <FaRobot className="text-maroon w-7 h-7" />
                      </div>
                      <div className="bg-maroon text-white px-3 py-2 rounded-2xl text-sm whitespace-pre-wrap">
                        {m.text}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-end gap-2 max-w-[90%]">
                      <div className="bg-gray-700 text-white px-3 py-2 rounded-2xl text-sm whitespace-pre-wrap">
                        {m.text}
                      </div>
                      <div className="flex-shrink-0 mt-1">
                        <FaUser className="text-gray-600 w-6 h-6" />
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Typing bubble (separate grey bubble) */}
              {botTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 max-w-[90%]">
                    <div className="flex-shrink-0 mt-1">
                      <FaRobot className="text-maroon w-7 h-7" />
                    </div>
                    <div className="bg-gray-200 text-gray-700 px-3 py-2 rounded-2xl text-sm flex items-center">
                      <span className="typing-dot d1" />
                      <span className="typing-dot d2" />
                      <span className="typing-dot d3" />
                    </div>
                  </div>
                </div>
              )}

              {/* Menu options */}
              {menuOptions.length > 0 && (chatStep === "faq" || chatStep === "askMore") && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {menuOptions.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => handleOptionClick(opt.label)}
                      className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm hover:shadow-sm"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Error message area */}
            {error && <div className="px-4 py-1 text-sm text-red-600">{error}</div>}

            {/* Input area */}
            {isInputVisible ? (
              <div className="p-3 border-t bg-white">
                {chatStep === "collectInfo" && infoField && (
                  <div className="mb-2 text-xs text-gray-600">Please enter your {infoField}</div>
                )}

                <div className="flex gap-2">
                  <input
                    aria-label="Chat input"
                    className="flex-1 border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-maroon"
                    placeholder={
                      chatStep === "collectInfo" && infoField
                        ? infoField === "name"
                          ? "Full name"
                          : infoField === "phone"
                            ? "10-digit phone"
                            : "email@example.com"
                        : "Type your message..."
                    }
                    value={input}
                    onChange={(e) => {
                      setInput(e.target.value);
                      setError(null);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSend();
                    }}
                    disabled={botTyping}
                  />
                  <button
                    onClick={handleSend}
                    className="bg-maroon text-white px-3 py-2 rounded shadow hover:opacity-95 disabled:opacity-60"
                    disabled={input.trim().length === 0 || botTyping}
                    aria-label="Send"
                  >
                    <FaPaperPlane />
                  </button>
                </div>

                {chatStep === "collectInfo" && infoField && (
                  <div className="mt-2 text-xs text-gray-500">
                    {infoField === "name" && "Only letters and spaces. Minimum 2 characters."}
                    {infoField === "phone" && "Enter a 10-digit phone number (numbers only)."}
                    {infoField === "email" && "Enter a valid email address."}
                  </div>
                )}
              </div>
            ) : (
              <div className="p-3 border-t bg-white text-xs text-gray-500">Choose an option to start the chat</div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.06 }}
          className="w-16 h-16 rounded-full bg-maroon text-white flex items-center justify-center shadow-xl"
          aria-label="Open chat"
        >
          <FaComment size={22} />
        </motion.button>
      )}
    </div>
  );
}
