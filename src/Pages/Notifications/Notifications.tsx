import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import React from "react";

const Notifications: React.FC = () => {
  return (
    <>
      <Tabs defaultValue="important" className="w-[400px]">
        <div className="py-6 px-6 border-b border-b-gray-20">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <h5 className="text-xl font-semibold text-dark-gray-50">
                Notifications
              </h5>

              <TabsList className="border border-gray-20">
                <TabsTrigger
                  className="text-dark-gray-60 data-[state=active]:bg-gray-20"
                  value="important"
                >
                  Important
                </TabsTrigger>
                <TabsTrigger
                  className="text-dark-gray-60 data-[state=active]:bg-gray-20"
                  value="others"
                >
                  Others
                </TabsTrigger>
                <TabsTrigger
                  className="text-dark-gray-60 data-[state=active]:bg-gray-20"
                  value="snoozed"
                >
                  Snoozed
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
        </div>
        <div className="p-6">
          <TabsContent value="important">
            Make changes to your important here.
          </TabsContent>
          <TabsContent value="others">Change your Others here.</TabsContent>
          <TabsContent value="snoozed">Change your Snoozed here.</TabsContent>
        </div>
      </Tabs>
    </>
  );
};

export default Notifications;
