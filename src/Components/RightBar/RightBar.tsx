import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
const RightBar: React.FC = () => {
  return (
    <>
      <div className="fixed inset-y-0 right-0 z-10 hidden w-96 flex-col border-l border-l-gray-20 bg-background sm:flex dark:bg-base-black">
        <div className="p-6 flex flex-col items-start justify-start gap-6">
          <Card className="dark:bg-gray-10 rounded-lg w-full">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Notifications</CardTitle>
              <CardDescription>
                <a href="#">
                  <i className="ri-send-plane-2-line"></i>
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-start gap-3">
                <div className="w-full flex items-start justify-start gap-3 py-4 border-b border-b-gray-20 last:border-0">
                  <div className="w-12 h-12 rounded-lg bg-dark-gray-80"></div>
                  <div className="flex flex-col items-start justify-start text-start w-[calc(100%-60px)]">
                    <h6 className="text-white font-bold text-start">
                      Task Assigned
                      <span className="ms-2 text-dark-gray-60 font-normal">
                        6 min ago
                      </span>
                    </h6>
                    <p className="text-dark-gray-60 font-normal line-clamp-2">
                      John has assigned you a new task titled "Market Research
                      for Product Launch." Please review the details and get
                      started.
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-start justify-start gap-3 py-4 border-b border-b-gray-20 last:border-0">
                  <div className="w-12 h-12 rounded-lg bg-dark-gray-80"></div>
                  <div className="flex flex-col items-start justify-start text-start w-[calc(100%-60px)]">
                    <h6 className="text-white font-bold text-start">
                      Task Assigned
                      <span className="ms-2 text-dark-gray-60 font-normal">
                        6 min ago
                      </span>
                    </h6>
                    <p className="text-dark-gray-60 font-normal line-clamp-2">
                      John has assigned you a new task titled "Market Research
                      for Product Launch." Please review the details and get
                      started.
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-start justify-start gap-3 py-4 border-b border-b-gray-20 last:border-0">
                  <div className="w-12 h-12 rounded-lg bg-dark-gray-80"></div>
                  <div className="flex flex-col items-start justify-start text-start w-[calc(100%-60px)]">
                    <h6 className="text-white font-bold text-start">
                      Task Assigned
                      <span className="ms-2 text-dark-gray-60 font-normal">
                        6 min ago
                      </span>
                    </h6>
                    <p className="text-dark-gray-60 font-normal line-clamp-2">
                      John has assigned you a new task titled "Market Research
                      for Product Launch." Please review the details and get
                      started.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="dark:bg-gray-10 rounded-lg w-full">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Recent Activity</CardTitle>
              <CardDescription>
                <a href="#">
                  <i className="ri-send-plane-2-line"></i>
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-start gap-3">
                <div className="w-full flex items-start justify-start gap-3 py-4 border-b border-b-gray-20 last:border-0">
                  <div className="w-12 h-12 rounded-lg bg-dark-gray-80"></div>
                  <div className="flex flex-col items-start justify-start text-start w-[calc(100%-60px)]">
                    <h6 className="text-white font-bold text-start">
                      Task Assigned
                      <span className="ms-2 text-dark-gray-60 font-normal">
                        6 min ago
                      </span>
                    </h6>
                    <p className="text-dark-gray-60 font-normal line-clamp-2">
                      John has assigned you a new task titled "Market Research
                      for Product Launch." Please review the details and get
                      started.
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-start justify-start gap-3 py-4 border-b border-b-gray-20 last:border-0">
                  <div className="w-12 h-12 rounded-lg bg-dark-gray-80"></div>
                  <div className="flex flex-col items-start justify-start text-start w-[calc(100%-60px)]">
                    <h6 className="text-white font-bold text-start">
                      Task Assigned
                      <span className="ms-2 text-dark-gray-60 font-normal">
                        6 min ago
                      </span>
                    </h6>
                    <p className="text-dark-gray-60 font-normal line-clamp-2">
                      John has assigned you a new task titled "Market Research
                      for Product Launch." Please review the details and get
                      started.
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-start justify-start gap-3 py-4 border-b border-b-gray-20 last:border-0">
                  <div className="w-12 h-12 rounded-lg bg-dark-gray-80"></div>
                  <div className="flex flex-col items-start justify-start text-start w-[calc(100%-60px)]">
                    <h6 className="text-white font-bold text-start">
                      Task Assigned
                      <span className="ms-2 text-dark-gray-60 font-normal">
                        6 min ago
                      </span>
                    </h6>
                    <p className="text-dark-gray-60 font-normal line-clamp-2">
                      John has assigned you a new task titled "Market Research
                      for Product Launch." Please review the details and get
                      started.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default RightBar;
