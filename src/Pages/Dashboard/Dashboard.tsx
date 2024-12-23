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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { Checkbox } from "@/Components/ui/checkbox";
import { CalendarDays, Flag, Tag } from "lucide-react";
import { Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/Components/ui/chart";
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
];
const chartConfig = {
  chrome: {
    color: "#101214",
  },
  safari: {
    color: "#D2F159",
  },
} satisfies ChartConfig;

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="p-6">
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6 mb-6">
          <div className="col-span-2 max-md:col-span-3">
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-dark-gray-50 text-xl">
                  Time Tracker
                </CardTitle>
                <CardDescription>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="bg-dark-mode w-10 h-10 rounded-lg focus-visible:outline-none">
                      <i className="ri-more-fill text-gray-90 text-xl"></i>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="bg-gray-10 border-0 p-3 rounded-xl"
                      align="end"
                    >
                      <DropdownMenuItem className="text-gray-90 focus:bg-transparent focus:text-primary rounded-lg p-3 flex items-center justify-start gap-2 text-base">
                        <i className="ri-refresh-line"></i>
                        Replace Widget
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-gray-90 focus:bg-transparent focus:text-primary rounded-lg p-3 flex items-center justify-start gap-2 text-base">
                        <i className="ri-delete-bin-6-line"></i>
                        Delete Widget
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="summary" className="w-full">
                  <TabsList className="dark:bg-transparent border-b border-b-gray-20 rounded-none p-0 w-full h-auto justify-start gap-6">
                    <TabsTrigger
                      className="px-0 py-5 capitalize data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b data-[state=active]:border-b-white"
                      value="summary"
                    >
                      summary
                    </TabsTrigger>
                    <TabsTrigger
                      className="px-0 py-5 capitalize data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b data-[state=active]:border-b-white"
                      value="projects"
                    >
                      projects
                    </TabsTrigger>
                    <TabsTrigger
                      className="px-0 py-5 capitalize data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b data-[state=active]:border-b-white"
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
          <div className="grid grid-cols-1 max-md:col-span-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-dark-gray-50 text-xl">
                  Productivity
                </CardTitle>
                <CardDescription>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="bg-dark-mode w-10 h-10 rounded-lg focus-visible:outline-none">
                      <i className="ri-more-fill text-gray-90 text-xl"></i>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="bg-gray-10 border-0"
                      align="end"
                    >
                      <DropdownMenuItem className="text-gray-90 p-3 flex items-center justify-start gap-2 text-base">
                        <i className="ri-refresh-line"></i>
                        Replace Widget
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-gray-90 p-3 flex items-center justify-start gap-2 text-base">
                        <i className="ri-delete-bin-6-line"></i>
                        Delete Widget
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2">
                  <div className="flex items-start flex-col justify-between h-full">
                    <div className="text-start">
                      <h1 className="text-4xl font-semibold mb-1">78.19%</h1>
                      <p className="text-base text-[#545454]">Workload KPI</p>
                    </div>
                    <div className="text-start">
                      <p className="text-base text-[#545454] mb-1">Compare</p>
                      <p className="text-base text-white">
                        <span className="text-primary-50">
                          <i className="ri-arrow-down-circle-line"></i> 1.25%
                        </span>{" "}
                        vs Last month
                      </p>
                    </div>
                  </div>
                  <ChartContainer
                    config={chartConfig}
                    className="ms-auto aspect-square max-h-[170px] w-full"
                  >
                    <PieChart>
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                      />
                      <Pie
                        data={chartData}
                        dataKey="visitors"
                        nameKey="Workload KPI"
                        innerRadius={35}
                      />
                    </PieChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-dark-gray-50 text-xl">
                  Completed Task
                </CardTitle>
                <CardDescription>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="bg-dark-mode w-10 h-10 rounded-lg focus-visible:outline-none">
                      <i className="ri-more-fill text-gray-90 text-xl"></i>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="bg-gray-10 border-0"
                      align="end"
                    >
                      <DropdownMenuItem className="text-gray-90 p-3 flex items-center justify-start gap-2 text-base">
                        <i className="ri-refresh-line"></i>
                        Replace Widget
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-gray-90 p-3 flex items-center justify-start gap-2 text-base">
                        <i className="ri-delete-bin-6-line"></i>
                        Delete Widget
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardDescription>
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
            <CardTitle className="text-dark-gray-50 text-xl">
              Urgent Tasks
            </CardTitle>
            <CardDescription>
              <button className="bg-dark-mode text-primary-60 py-3 px-6 rounded-xl hover:opacity-85">
                See all tasks
              </button>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table className="bg-gray-10 rounded-xl overflow-hidden">
              <TableHeader className="text-start [&_tr]:border-b-gray-20">
                <TableRow className="hover:bg-gray-20 text-base">
                  <TableHead className="text-white p-6 h-auto">
                    Task Name
                  </TableHead>
                  <TableHead className="text-white p-6 h-auto text-center">
                    Assigned to
                  </TableHead>
                  <TableHead className="text-white p-6 h-auto text-center">
                    Due Date
                  </TableHead>
                  <TableHead className="text-white p-6 h-auto text-center">
                    Amount
                  </TableHead>
                  <TableHead className="text-white p-6 h-auto text-center">
                    Tags
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="[&_tr]:border-b-gray-20">
                <TableRow className="hover:bg-gray-20 text-start text-base">
                  <TableCell className="text-white p-6 h-auto flex items-center gap-3">
                    <Checkbox id="terms1" />
                    <label htmlFor="terms1">
                      Prepare high-fidelity wireframe landing
                    </label>
                  </TableCell>
                  <TableCell className="dark:text-white p-6 h-auto text-center">
                    <div className="flex items-center justify-center -space-x-3 overflow-hidden">
                      <img
                        className="inline-block h-9 w-9 m-1 rounded-full ring-2 ring-gray-20"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <img
                        className="inline-block h-9 w-9 m-1 rounded-full ring-2 ring-gray-20"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                  </TableCell>
                  <TableCell className="dark:text-white p-6 h-auto text-center">
                    <CalendarDays className="mx-auto" />
                  </TableCell>
                  <TableCell className="dark:text-white p-6 h-auto text-center">
                    <Tag className="mx-auto" />
                  </TableCell>
                  <TableCell className="dark:text-red-500 p-6 h-auto text-center">
                    <Flag className="mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-20 text-start text-base">
                  <TableCell className="dark:text-white p-6 h-auto flex items-center gap-3">
                    <Checkbox id="terms1" />
                    <label htmlFor="terms1">
                      Prepare high-fidelity wireframe landing
                    </label>
                  </TableCell>
                  <TableCell className="dark:text-white p-6 h-auto text-center">
                    <div className="flex items-center justify-center -space-x-3 overflow-hidden">
                      <img
                        className="inline-block h-9 w-9 m-1 rounded-full ring-2 ring-gray-20"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <img
                        className="inline-block h-9 w-9 m-1 rounded-full ring-2 ring-gray-20"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                  </TableCell>
                  <TableCell className="dark:text-white p-6 h-auto text-center">
                    <CalendarDays className="mx-auto" />
                  </TableCell>
                  <TableCell className="dark:text-white p-6 h-auto text-center">
                    <Tag className="mx-auto" />
                  </TableCell>
                  <TableCell className="dark:text-red-500 p-6 h-auto text-center">
                    <Flag className="mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-20 text-start text-base">
                  <TableCell className="dark:text-white p-6 h-auto flex items-center gap-3">
                    <Checkbox id="terms1" />
                    <label htmlFor="terms1">
                      Prepare high-fidelity wireframe landing
                    </label>
                  </TableCell>
                  <TableCell className="dark:text-white p-6 h-auto text-center">
                    <div className="flex items-center justify-center -space-x-3 overflow-hidden">
                      <img
                        className="inline-block h-9 w-9 m-1 rounded-full ring-2 ring-gray-20"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <img
                        className="inline-block h-9 w-9 m-1 rounded-full ring-2 ring-gray-20"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                  </TableCell>
                  <TableCell className="dark:text-white p-6 h-auto text-center">
                    <CalendarDays className="mx-auto" />
                  </TableCell>
                  <TableCell className="dark:text-white p-6 h-auto text-center">
                    <Tag className="mx-auto" />
                  </TableCell>
                  <TableCell className="dark:text-red-500 p-6 h-auto text-center">
                    <Flag className="mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-20 text-start text-base">
                  <TableCell className="dark:text-white p-6 h-auto flex items-center gap-3">
                    <Checkbox id="terms1" />
                    <label htmlFor="terms1">
                      Prepare high-fidelity wireframe landing
                    </label>
                  </TableCell>
                  <TableCell className="dark:text-white p-6 h-auto text-center">
                    <div className="flex items-center justify-center -space-x-3 overflow-hidden">
                      <img
                        className="inline-block h-9 w-9 m-1 rounded-full ring-2 ring-gray-20"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <img
                        className="inline-block h-9 w-9 m-1 rounded-full ring-2 ring-gray-20"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                  </TableCell>
                  <TableCell className="dark:text-white p-6 h-auto text-center">
                    <CalendarDays className="mx-auto" />
                  </TableCell>
                  <TableCell className="dark:text-white p-6 h-auto text-center">
                    <Tag className="mx-auto" />
                  </TableCell>
                  <TableCell className="dark:text-red-500 p-6 h-auto text-center">
                    <Flag className="mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-20 text-start text-base">
                  <TableCell className="dark:text-white p-6 h-auto flex items-center gap-3">
                    <Checkbox id="terms1" />
                    <label htmlFor="terms1">
                      Prepare high-fidelity wireframe landing
                    </label>
                  </TableCell>
                  <TableCell className="dark:text-white p-6 h-auto text-center">
                    <div className="flex items-center justify-center -space-x-3 overflow-hidden">
                      <img
                        className="inline-block h-9 w-9 m-1 rounded-full ring-2 ring-gray-20"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <img
                        className="inline-block h-9 w-9 m-1 rounded-full ring-2 ring-gray-20"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                  </TableCell>
                  <TableCell className="dark:text-white p-6 h-auto text-center">
                    <CalendarDays className="mx-auto" />
                  </TableCell>
                  <TableCell className="dark:text-white p-6 h-auto text-center">
                    <Tag className="mx-auto" />
                  </TableCell>
                  <TableCell className="dark:text-red-500 p-6 h-auto text-center">
                    <Flag className="mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-20 text-start text-base">
                  <TableCell className="dark:text-white p-6 h-auto flex items-center gap-3">
                    <Checkbox id="terms1" />
                    <label htmlFor="terms1">
                      Prepare high-fidelity wireframe landing
                    </label>
                  </TableCell>
                  <TableCell className="dark:text-white p-6 h-auto text-center">
                    <div className="flex items-center justify-center -space-x-3 overflow-hidden">
                      <img
                        className="inline-block h-9 w-9 m-1 rounded-full ring-2 ring-gray-20"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <img
                        className="inline-block h-9 w-9 m-1 rounded-full ring-2 ring-gray-20"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                  </TableCell>
                  <TableCell className="dark:text-white p-6 h-auto text-center">
                    <CalendarDays className="mx-auto" />
                  </TableCell>
                  <TableCell className="dark:text-white p-6 h-auto text-center">
                    <Tag className="mx-auto" />
                  </TableCell>
                  <TableCell className="dark:text-red-500 p-6 h-auto text-center">
                    <Flag className="mx-auto" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
