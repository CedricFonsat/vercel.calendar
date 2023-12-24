import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import ResumeCalendar from "./ResumeCalendar";

const Tab = () => {
  const [selectedTab, setSelectedTab] = useState("Overview");

  const tabItems = [
    "Overview",
    "Plannig",
    "Calendar",
  ];

  const Planning = () => {
    return (
      <div>
        <h2>Planning</h2>
        <p>Planning</p>
      </div>
    );
  };

  const Task = () => {
    return (
      <div>
        <h2>Task Objectif</h2>
        <p>objectif</p>
      </div>
    );
  };

  const tabComponents = [
    <Task />,
    <Planning />,
    <ResumeCalendar />,
    // Ajoutez les composants correspondants pour les autres onglets ici
    // par exemple: <IntegrationComponent />, <BillingComponent />, etc.
  ];

  return (
    <Tabs.Root
      className="max-w-screen-xl mt-2 mx-auto px-4 md:px-8"
      value={selectedTab}
      onValueChange={(val) => setSelectedTab(val)}
    >
      <Tabs.List
        className="hidden bg-gray-100 py-1.5 px-2.5 rounded-lg gap-x-3 overflow-x-auto text-sm sm:flex"
        aria-label="Manage your account"
      >
        {tabItems.map((item, idx) => (
          <Tabs.Trigger
            key={idx}
            className="data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm py-1.5 px-3 rounded-lg duration-150 text-gray-500 hover:text-indigo-600 hover:bg-white active:bg-white/50 font-medium"
            value={item}
          >
            {item}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <div className="relative text-gray-500 sm:hidden">
        {/* ... (code de la flèche de sélection) */}
        <select
          value={selectedTab}
          className="py-2 px-3 w-full bg-transparent appearance-none outline-none border rounded-lg shadow-sm focus:border-indigo-600 text-sm"
          onChange={(e) => setSelectedTab(e.target.value)}
        >
          {tabItems.map((item, idx) => (
            <option key={idx} idx={idx}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {tabItems.map((item, idx) => (
        <Tabs.Content key={idx} className="py-6" value={item}>
          {item === "Overview" ? tabComponents[0] : null}
          {item === "Planning" ? tabComponents[1] : null}
          {item === "Calendar" ? tabComponents[2] : null}
          {/* Ajoutez d'autres conditions pour les autres onglets */}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default Tab;
