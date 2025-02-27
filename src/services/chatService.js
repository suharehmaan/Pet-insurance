
import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  onSnapshot, 
  serverTimestamp, 
  where, 
  getDocs 
} from "firebase/firestore";

// Firebase configuration - in a real app, this would be in .env file
const firebaseConfig = {
  apiKey: "AIzaSyDummyKeyForExample123456789",
  authDomain: "pet-insurance-app-demo.firebaseapp.com",
  projectId: "pet-insurance-app-demo",
  storageBucket: "pet-insurance-app-demo.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456ghi789jkl"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Helper to get chat collection reference
const getChatCollection = () => collection(db, "chats");

// Send a message
export const sendMessage = async (userId, message) => {
  try {
    const docRef = await addDoc(getChatCollection(), {
      userId,
      message,
      role: 'user',
      timestamp: serverTimestamp()
    });
    
    // Simulate agent response after a delay
    setTimeout(async () => {
      await addDoc(getChatCollection(), {
        userId,
        message: getAutomaticResponse(message),
        role: 'agent',
        agentName: 'PetCare Support',
        timestamp: serverTimestamp()
      });
    }, 1500);
    
    return { success: true, messageId: docRef.id };
  } catch (error) {
    console.error("Error sending message:", error);
    return { success: false, error: error.message };
  }
};

// Get automatic response based on message content
const getAutomaticResponse = (message) => {
  const lowerCaseMessage = message.toLowerCase();
  
  if (lowerCaseMessage.includes('claim')) {
    return "To file a claim, please go to the Claims section and click on 'File New Claim'. If you need further assistance with a specific claim, please provide the claim number.";
  } else if (lowerCaseMessage.includes('policy') || lowerCaseMessage.includes('coverage')) {
    return "Your policy details can be found in the Policy Summary section. If you have questions about specific coverage, our team is happy to help clarify any details.";
  } else if (lowerCaseMessage.includes('premium') || lowerCaseMessage.includes('payment')) {
    return "Premiums are billed monthly on the 1st. For payment options or to update your payment method, please visit the Billing section in your account settings.";
  } else if (lowerCaseMessage.includes('thanks') || lowerCaseMessage.includes('thank you')) {
    return "You're welcome! Is there anything else I can help you with today?";
  } else if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
    return "Hello! Welcome to PetCare Insurance chat support. How can I assist you today?";
  } else {
    return "Thank you for your message. One of our support agents will follow up with you shortly. Is there anything specific about your pet insurance that you need help with?";
  }
};

// Subscribe to chat messages
export const subscribeToMessages = (userId, callback) => {
  const q = query(
    getChatCollection(),
    where("userId", "==", userId),
    orderBy("timestamp", "asc")
  );
  
  // Create real-time listener
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const messages = [];
    querySnapshot.forEach((doc) => {
      messages.push({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp ? doc.data().timestamp.toDate() : new Date()
      });
    });
    callback(messages);
  });
  
  return unsubscribe;
};

// Get chat history
export const getChatHistory = async (userId) => {
  try {
    const q = query(
      getChatCollection(),
      where("userId", "==", userId),
      orderBy("timestamp", "asc")
    );
    
    const querySnapshot = await getDocs(q);
    const messages = [];
    
    querySnapshot.forEach((doc) => {
      messages.push({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp ? doc.data().timestamp.toDate() : new Date()
      });
    });
    
    return { success: true, messages };
  } catch (error) {
    console.error("Error getting chat history:", error);
    return { success: false, error: error.message };
  }
};
