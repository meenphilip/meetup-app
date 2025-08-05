import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const API_URL =
  "https://meetup-app-f0b9f-default-rtdb.firebaseio.com/meetups.json";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    const fetchMeetups = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch meetups");
        }
        const data = await response.json();
        // Transform the data into an array of meetups
        const meetupsArray = [];
        for (const key in data) {
          meetupsArray.push({
            id: key,
            ...data[key],
          });
        }
        // Update the state with the fetched meetups
        setLoadedMeetups(meetupsArray);
      } catch (error) {
        console.error("Error fetching meetups:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMeetups();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetups;
