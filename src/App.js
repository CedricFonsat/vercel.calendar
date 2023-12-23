import "./App.css";
import {
  useSession,
  useSupabaseClient,
  useSessionContext,
} from "@supabase/auth-helpers-react";
import SignIn from "./components/SignIn";
import Header from "./components/Header";
//import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";
//import DateTimePicker from "react-datetime-picker";
import Hero from "./components/Hero";
//import DateTimePicker from "react-tailwindcss-datetimepicker";

import DateTimePicker from "./components/DateTimePicker";

function App() {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  //const [value, setValue] = useState(new Date());
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const session = useSession();
  const supabase = useSupabaseClient();
  const { isLoading } = useSessionContext();

  if (isLoading) {
    return <></>;
  }

  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: "https://www.googleapis.com/auth/calendar",
      },
    });
    if (error) {
      alert("Error logging in to the Google provider");
      console.log(error);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  async function createCalendarEvent() {
    console.log("create calendar event");
    const event = {
      summary: eventName,
      description: eventDescription,
      start: {
        dateTime: start.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      end: {
        dateTime: end.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
    };

    await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary/events",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + session.provider_token,
        },
        body: JSON.stringify(event),
      }
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        alert("event created , cheked your google calendar");
      });
  }

  // console.log(session);
  // console.log(start, end);
  // console.log(eventDescription);
  // console.log(eventName);
  console.log(start.toISOString(), "gggggg");

  return (
    <div className="App">
      {session ? (
        <>
          <Header
            email={session.user.email}
            photo={session.user.user_metadata.avatar_url}
          />
          <section className="flex flex-col items-center">
            <button onClick={() => signOut()}>Sign Out</button>

            {/* <p>Start of your event</p>
            <div className="w-2/4 h-24 flex flex-row items-center justify-center bg-indigo-500">
              <DateTimePicker
                onChange={setStart}
                value={start}
                className="custom-datetime-picker" 
              />
            </div>


            <p>End of your event</p>
            <div className="w-1/4">
              <DateTimePicker
                onChange={setEnd}
                value={end}
              />
            </div> */}

            <div className="flex items-center justify-center mt-2">
              <DateTimePicker onChange={setStart} value={start} />
            </div>

            <div className="flex items-center justify-center mt-2">
              <DateTimePicker onChange={setEnd} value={end} />
            </div>

            <div className="relative max-w-xs mt-2">
              <input
                type="text"
                placeholder="Event name"
                onChange={(e) => setEventName(e.target.value)}
                className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>

            <div className="relative max-w-xs mt-2">
              <input
                type="text"
                placeholder="Event description"
                onChange={(e) => setEventDescription(e.target.value)}
                className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>

            <button onClick={() => createCalendarEvent()}
             className="mt-2 px-5 py-2.5 text-white bg-indigo-600 rounded-lg shadow-md focus:shadow-none duration-100 ring-offset-2 ring-indigo-600 focus:ring-2">
            Create Calendar Event
            </button>

            {/* gjvvhhh********** */}

            {/* <p>Event name</p>
            <input type="text" onChange={(e) => setEventName(e.target.value)} />

            <p>Event description</p>
            <input
              type="text"
              onChange={(e) => setEventDescription(e.target.value)}
            /> */}

            {/* <hr />
            <button onClick={() => createCalendarEvent()}>
              Create Calendar Event
            </button> */}
          </section>
        </>
      ) : (
        <>
          {/* <button onClick={() => googleSignIn()}>google with me</button> */}

          <SignIn signInGoogle={() => googleSignIn()} />
          <Hero />
          {/* <button onClick={() => googleSignIn()}>Sign In With Google</button> */}
        </>
      )}
    </div>
  );
}

export default App;
