import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
// Replace with your actual API endpoint
const API_URL =
  "https://meetup-app-f0b9f-default-rtdb.firebaseio.com/meetups.json";
const NewMeetup = () => {
  const navigate = useNavigate(); // updated hook
  const addMeetupHandler = async (meetupData) => {
    // Logic to handle the new meetup data, e.g., sending it to a server or updating state
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to add meetup");
      }

      const data = await response.json();
      console.log("Meetup added successfully:", data);
      // Redirect to the home page after adding the meetup
      navigate("/");
    } catch (error) {
      console.error("Error adding meetup:", error);
    }
  };

  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
};

export default NewMeetup;
