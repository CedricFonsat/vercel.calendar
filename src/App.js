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
import HeadTest from "./components/HeadTest";
import Modal from "./components/Modal";

function App() {


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
        redirectTo: window.location.origin
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
 
  // console.log(session);
  // console.log(start, end);
  // console.log(eventDescription);
  // console.log(eventName);
  //console.log(start.toISOString(), "gggggg");



  return (
    <div className="App">
      {session ? (
        <>
          <Header
            email={session.user.email}
            photo={session.user.user_metadata.avatar_url}
            signOut={() => signOut()}
          />
          <Modal />
          <section className="flex flex-col items-center">

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
