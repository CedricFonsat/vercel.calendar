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
import { TabsDefault } from "./components/TabsDefault";
import ResumeCalendar from "./components/ResumeCalendar";
import Tabs from "./components/Tabs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tab from "./components/Tab";

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

  const tab1 = <p className="text-black">hjbbhbbhbhbhjbj</p>;


//   <p>
//   Collaboratively administrate empowered markets via
//   plug-and-play networks. Dynamically procrastinate B2C users
//   after installed base benefits.
//   <br />
//   <br /> Dramatically visualize customer directed convergence
//   without revolutionary ROI.
// </p>

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
          {/* <TabsDefault/> */}

          <Tab/>
          {/* <Tabs color="indigo"
          tab1={tab1}
          tab2={tab1}
          tab3={<ResumeCalendar/>}
          /> */}

          {/* <section className="flex flex-col items-center"> */}
          <ToastContainer />
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
