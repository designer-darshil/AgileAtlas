import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import React from "react";
const Notifications: React.FC = () => {
  return (
    <>
      <Tabs defaultValue="important" className="w-full">
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
            <div className="mb-6">
              <p className="mb-5 text-dark-gray-50">Earlier this month</p>
              <div className="flex flex-col items-center justify-start gap-4">
                <div className="w-full flex items-center justify-start gap-4 p-4 rounded-lg bg-gray-10">
                  <div className="w-16 h-16 rounded-xl bg-dark-gray-80"></div>
                  <div className="flex flex-col items-start justify-start text-start w-[calc(100%-60px)]">
                    <h6 className="text-white font-bold text-start text-lg">
                      Task Assigned
                      <span className="ms-2 text-dark-gray-60 font-normal text-base">
                        6 min ago
                      </span>
                    </h6>
                    <p className="text-base text-dark-gray-60 font-normal line-clamp-2">
                      John has assigned you a new task titled "Market Research
                      for Product Launch." Please review the details and get
                      started.
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center justify-start gap-4 p-4 rounded-lg bg-gray-10">
                  <div className="w-16 h-16 rounded-xl bg-dark-gray-80"></div>
                  <div className="flex flex-col items-start justify-start text-start w-[calc(100%-60px)]">
                    <h6 className="text-white font-bold text-start text-lg">
                      Task Assigned
                      <span className="ms-2 text-dark-gray-60 font-normal text-base">
                        6 min ago
                      </span>
                    </h6>
                    <p className="text-base text-dark-gray-60 font-normal line-clamp-2">
                      John has assigned you a new task titled "Market Research
                      for Product Launch." Please review the details and get
                      started.
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center justify-start gap-4 p-4 rounded-lg bg-gray-10">
                  <div className="w-16 h-16 rounded-xl bg-dark-gray-80"></div>
                  <div className="flex flex-col items-start justify-start text-start w-[calc(100%-60px)]">
                    <h6 className="text-white font-bold text-start text-lg">
                      Task Assigned
                      <span className="ms-2 text-dark-gray-60 font-normal text-base">
                        6 min ago
                      </span>
                    </h6>
                    <p className="text-base text-dark-gray-60 font-normal line-clamp-2">
                      John has assigned you a new task titled "Market Research
                      for Product Launch." Please review the details and get
                      started.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-5 text-dark-gray-50">2023</p>
              <div className="flex flex-col items-center justify-start gap-4">
                <div className="w-full flex items-center justify-start gap-4 p-4 rounded-lg bg-gray-10">
                  <div className="w-16 h-16 rounded-xl bg-dark-gray-80"></div>
                  <div className="flex flex-col items-start justify-start text-start w-[calc(100%-60px)]">
                    <h6 className="text-white font-bold text-start text-lg">
                      Task Assigned
                      <span className="ms-2 text-dark-gray-60 font-normal text-base">
                        6 min ago
                      </span>
                    </h6>
                    <p className="text-base text-dark-gray-60 font-normal line-clamp-2">
                      John has assigned you a new task titled "Market Research
                      for Product Launch." Please review the details and get
                      started.
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center justify-start gap-4 p-4 rounded-lg bg-gray-10">
                  <div className="w-16 h-16 rounded-xl bg-dark-gray-80"></div>
                  <div className="flex flex-col items-start justify-start text-start w-[calc(100%-60px)]">
                    <h6 className="text-white font-bold text-start text-lg">
                      Task Assigned
                      <span className="ms-2 text-dark-gray-60 font-normal text-base">
                        6 min ago
                      </span>
                    </h6>
                    <p className="text-base text-dark-gray-60 font-normal line-clamp-2">
                      John has assigned you a new task titled "Market Research
                      for Product Launch." Please review the details and get
                      started.
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center justify-start gap-4 p-4 rounded-lg bg-gray-10">
                  <div className="w-16 h-16 rounded-xl bg-dark-gray-80"></div>
                  <div className="flex flex-col items-start justify-start text-start w-[calc(100%-60px)]">
                    <h6 className="text-white font-bold text-start text-lg">
                      Task Assigned
                      <span className="ms-2 text-dark-gray-60 font-normal text-base">
                        6 min ago
                      </span>
                    </h6>
                    <p className="text-base text-dark-gray-60 font-normal line-clamp-2">
                      John has assigned you a new task titled "Market Research
                      for Product Launch." Please review the details and get
                      started.
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center justify-start gap-4 p-4 rounded-lg bg-gray-10">
                  <div className="w-16 h-16 rounded-xl bg-dark-gray-80"></div>
                  <div className="flex flex-col items-start justify-start text-start w-[calc(100%-60px)]">
                    <h6 className="text-white font-bold text-start text-lg">
                      Task Assigned
                      <span className="ms-2 text-dark-gray-60 font-normal text-base">
                        6 min ago
                      </span>
                    </h6>
                    <p className="text-base text-dark-gray-60 font-normal line-clamp-2">
                      John has assigned you a new task titled "Market Research
                      for Product Launch." Please review the details and get
                      started.
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center justify-start gap-4 p-4 rounded-lg bg-gray-10">
                  <div className="w-16 h-16 rounded-xl bg-dark-gray-80"></div>
                  <div className="flex flex-col items-start justify-start text-start w-[calc(100%-60px)]">
                    <h6 className="text-white font-bold text-start text-lg">
                      Task Assigned
                      <span className="ms-2 text-dark-gray-60 font-normal text-base">
                        6 min ago
                      </span>
                    </h6>
                    <p className="text-base text-dark-gray-60 font-normal line-clamp-2">
                      John has assigned you a new task titled "Market Research
                      for Product Launch." Please review the details and get
                      started.
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center justify-start gap-4 p-4 rounded-lg bg-gray-10">
                  <div className="w-16 h-16 rounded-xl bg-dark-gray-80"></div>
                  <div className="flex flex-col items-start justify-start text-start w-[calc(100%-60px)]">
                    <h6 className="text-white font-bold text-start text-lg">
                      Task Assigned
                      <span className="ms-2 text-dark-gray-60 font-normal text-base">
                        6 min ago
                      </span>
                    </h6>
                    <p className="text-base text-dark-gray-60 font-normal line-clamp-2">
                      John has assigned you a new task titled "Market Research
                      for Product Launch." Please review the details and get
                      started.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="others">Change your Others here.</TabsContent>
          <TabsContent value="snoozed">Change your Snoozed here.</TabsContent>
        </div>
      </Tabs>
    </>
  );
};

export default Notifications;
