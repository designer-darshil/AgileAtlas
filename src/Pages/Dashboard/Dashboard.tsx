import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { RefreshCcw } from "lucide-react";

// import {
//   Bar,
//   BarChart,
//   Label,
//   Rectangle,
//   ReferenceLine,
//   XAxis,
// } from "recharts";
// import {
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/Components/ui/chart";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Time Tracker</CardTitle>
              <CardDescription>
                <DropdownMenu>
                  <DropdownMenuTrigger className="bg-stroke-90 dark:bg-dark-mode w-10 h-10 rounded-lg">
                    <i className="ri-more-fill text-gray-60 dark:text-gray-90 text-xl"></i>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="dark:bg-gray-10">
                    <DropdownMenuItem className="text-gray-10">
                      <RefreshCcw />
                      Replace Widget
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Delete Widget</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="summary" className="w-full">
                <TabsList className="dark:bg-transparent border-b border-b-gray-20 rounded-none p-0 w-full h-auto justify-start gap-6">
                  <TabsTrigger
                    className="px-0 py-5 capitalize data-[state=active]:dark:bg-transparent dark:text-dark-gray-90 data-[state=active]:border-b data-[state=active]:border-b-white"
                    value="summary"
                  >
                    summary
                  </TabsTrigger>
                  <TabsTrigger
                    className="px-0 py-5 capitalize data-[state=active]:dark:bg-transparent dark:text-dark-gray-90 data-[state=active]:border-b data-[state=active]:border-b-white"
                    value="projects"
                  >
                    projects
                  </TabsTrigger>
                  <TabsTrigger
                    className="px-0 py-5 capitalize data-[state=active]:dark:bg-transparent dark:text-dark-gray-90 data-[state=active]:border-b data-[state=active]:border-b-white"
                    value="tasks"
                  >
                    tasks
                  </TabsTrigger>
                </TabsList>
                <TabsContent className="p-4" value="summary">
                  {/* <ChartContainer
                    config={{
                      steps: {
                        label: "Steps",
                        color: "green",
                      },
                    }}
                  >
                    <BarChart
                      accessibilityLayer
                      margin={{
                        left: -4,
                        right: -4,
                      }}
                      data={[
                        {
                          date: "2024-01-01",
                          steps: 2000,
                        },
                        {
                          date: "2024-01-02",
                          steps: 2100,
                        },
                        {
                          date: "2024-01-03",
                          steps: 2200,
                        },
                        {
                          date: "2024-01-04",
                          steps: 1300,
                        },
                        {
                          date: "2024-01-05",
                          steps: 1400,
                        },
                        {
                          date: "2024-01-06",
                          steps: 2500,
                        },
                        {
                          date: "2024-01-07",
                          steps: 1600,
                        },
                      ]}
                    >
                      <Bar
                        dataKey="steps"
                        fill="white"
                        radius={5}
                        fillOpacity={0.6}
                        activeBar={<Rectangle fillOpacity={0.8} />}
                      />
                      <XAxis
                        dataKey="date"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={4}
                        tickFormatter={(value) => {
                          return new Date(value).toLocaleDateString("en-US", {
                            weekday: "short",
                          });
                        }}
                      />
                      <ChartTooltip
                        defaultIndex={2}
                        content={
                          <ChartTooltipContent
                            hideIndicator
                            labelFormatter={(value) => {
                              return new Date(value).toLocaleDateString(
                                "en-US",
                                {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                }
                              );
                            }}
                          />
                        }
                        cursor={false}
                      />
                      <ReferenceLine
                        y={1200}
                        stroke="#000"
                        strokeDasharray="3 3"
                        strokeWidth={1}
                      >
                        <Label
                          position="insideBottomLeft"
                          value="Avg"
                          offset={10}
                          fontWeight={600}
                          fill="white"
                        />
                      </ReferenceLine>
                    </BarChart>
                  </ChartContainer> */}
                </TabsContent>
                <TabsContent className="p-4" value="projects">
                  Change your password here.
                </TabsContent>
                <TabsContent className="p-4" value="tasks">
                  Change your password here 1.
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Urgent Tasks</CardTitle>
          <CardDescription>
            <button className="bg-dark-mode text-primary-60 py-3 px-6 rounded-xl hover:opacity-85">
              See all tasks
            </button>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="summary" className="w-full">
            <TabsList className="dark:bg-transparent border-b border-b-gray-20 rounded-none p-0 w-full h-auto justify-start gap-6">
              <TabsTrigger
                className="px-0 py-5 capitalize dark:text-dark-gray-90 data-[state=active]:border-b data-[state=active]:border-b-white"
                value="summary"
              >
                summary
              </TabsTrigger>
              <TabsTrigger
                className="px-0 py-5 capitalize dark:text-dark-gray-90 data-[state=active]:border-b data-[state=active]:border-b-white"
                value="projects"
              >
                projects
              </TabsTrigger>
              <TabsTrigger
                className="px-0 py-5 capitalize dark:text-dark-gray-90 data-[state=active]:border-b data-[state=active]:border-b-white"
                value="tasks"
              >
                tasks
              </TabsTrigger>
            </TabsList>
            <TabsContent className="p-4" value="summary">
              Make changes to your account here.
            </TabsContent>
            <TabsContent className="p-4" value="projects">
              Change your password here.
            </TabsContent>
            <TabsContent className="p-4" value="tasks">
              Change your password here 1.
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </>
  );
};

export default Dashboard;
