import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import React from "react";

const Settings: React.FC = () => {
  return (
    <>
      <div className="py-6 px-6 border-b border-b-gray-20">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <h5 className="text-xl font-semibold text-dark-gray-50">
              Notifications
            </h5>
          </div>
        </div>
      </div>
      <Tabs
        defaultValue="important"
        orientation="vertical"
        className="w-full h-[calc(100vh-77px)] grid grid-cols-[200px_1fr]"
      >
        <TabsList className="border border-gray-20 flex flex-col items-start justify-start h-full">
          <TabsTrigger
            className="w-full p-3 text-dark-gray-60 data-[state=active]:bg-transparent data-[state=active]:text-white"
            value="important"
          >
            Important
          </TabsTrigger>
          <TabsTrigger
            className="w-full p-3 text-dark-gray-60 data-[state=active]:bg-transparent data-[state=active]:text-white"
            value="others"
          >
            Others
          </TabsTrigger>
          <TabsTrigger
            className="w-full p-3 text-dark-gray-60 data-[state=active]:bg-transparent data-[state=active]:text-white"
            value="snoozed"
          >
            Snoozed
          </TabsTrigger>
        </TabsList>
        <div className="p-6 w-full">
          <TabsContent value="important">Change your Others here.</TabsContent>
          <TabsContent value="others">Change your Others here.</TabsContent>
          <TabsContent value="snoozed">Change your Snoozed here.</TabsContent>
        </div>
      </Tabs>
    </>
  );
};

export default Settings;
