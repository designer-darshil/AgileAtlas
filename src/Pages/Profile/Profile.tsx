import React from "react";
import ProfileBG from "@/assets/ProfileBG.jpg";
import ProfilePicture from "@/assets/ProfilePicture.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/Components/ui/tooltip";
import ReadMore from "@/Pages/ReadMore/ReadMore";
import { Pen } from "lucide-react";

const Profile: React.FC = () => {
  const longText = `
    I am a dynamic and driven individual with a deep passion for technology and innovation. Known for my problem-solving skills and creative thinking, I consistently bring a unique perspective, creativity, and dedication to every endeavor. My background in software engineering has equipped me with a robust set of skills and experiences that I leverage to excel in diverse and challenging environments. I thrive on exploring cutting-edge solutions, continually seeking opportunities to grow, innovate, and make a meaningful impact in my field.
  `;
  return (
    <>
      <div className="py-6 px-6 border-b border-b-gray-20">
        <h5 className="text-xl font-semibold text-dark-gray-50">Profile</h5>
      </div>
      <div className="p-6">
        <div className="relative">
          <img
            className="w-full h-72 object-cover object-center rounded-2xl"
            src={ProfileBG}
            alt=""
          />
          <div className="mx-12 max-md:mx-6 mb-8 -mt-12 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                className="w-40 h-40 max-md:w-24 max-md:h-24 object-cover object-center rounded-full border-4 border-gray-10"
                src={ProfilePicture}
                alt=""
              />
              <div>
                <h6 className="text-2xl max-md:text-lg font-semibold">
                  Martin Saris
                </h6>
                <p className="text-lg max-md:text-base text-gray-500">
                  Senior Product Designer
                </p>
              </div>
            </div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Pen />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right">Edit Profile</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
          <div className="col-span-2">
            <Card className="bg-gray-10 mb-4">
              <CardHeader>
                <CardTitle className="text-dark-gray-50 text-xl">
                  About me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg">
                  <ReadMore text={longText} maxLength={345} />
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
              <Card className="bg-gray-10">
                <CardHeader>
                  <CardTitle className="text-dark-gray-50 text-xl">
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid">
                    <div className="p-4 border-b border-b-gray-20 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
                            fill="white"
                          />
                          <path
                            d="M17.0809 14.1509C14.2909 12.2909 9.74094 12.2909 6.93094 14.1509C5.66094 15.0009 4.96094 16.1509 4.96094 17.3809C4.96094 18.6109 5.66094 19.7509 6.92094 20.5909C8.32094 21.5309 10.1609 22.0009 12.0009 22.0009C13.8409 22.0009 15.6809 21.5309 17.0809 20.5909C18.3409 19.7409 19.0409 18.6009 19.0409 17.3609C19.0309 16.1309 18.3409 14.9909 17.0809 14.1509Z"
                            fill="white"
                          />
                        </svg>

                        <h6 className="text-base text-gray-60">Full Name</h6>
                      </div>
                      <h6 className="text-base">Martin Saris</h6>
                    </div>
                    <div className="p-4 border-b border-b-gray-20 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                            fill="white"
                          />
                          <path
                            d="M11.9988 12.87C11.1588 12.87 10.3088 12.61 9.6588 12.08L6.5288 9.57997C6.2088 9.31997 6.14881 8.84997 6.4088 8.52997C6.66881 8.20997 7.13881 8.14997 7.45881 8.40997L10.5888 10.91C11.3488 11.52 12.6388 11.52 13.3988 10.91L16.5288 8.40997C16.8488 8.14997 17.3288 8.19997 17.5788 8.52997C17.8388 8.84997 17.7888 9.32997 17.4588 9.57997L14.3288 12.08C13.6888 12.61 12.8388 12.87 11.9988 12.87Z"
                            fill="white"
                          />
                        </svg>

                        <h6 className="text-base text-gray-60">
                          Email Address
                        </h6>
                      </div>
                      <h6 className="text-base">martin.saris@gmail.com</h6>
                    </div>
                    <div className="p-4 border-b border-b-gray-20 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M20.6211 8.45C19.5711 3.83 15.5411 1.75 12.0011 1.75C12.0011 1.75 12.0011 1.75 11.9911 1.75C8.46107 1.75 4.42107 3.82 3.37107 8.44C2.20107 13.6 5.36107 17.97 8.22107 20.72C9.28107 21.74 10.6411 22.25 12.0011 22.25C13.3611 22.25 14.7211 21.74 15.7711 20.72C18.6311 17.97 21.7911 13.61 20.6211 8.45Z"
                            fill="white"
                          />
                          <path
                            d="M12.0016 13.4602C13.7413 13.4602 15.1516 12.0499 15.1516 10.3102C15.1516 8.57046 13.7413 7.16016 12.0016 7.16016C10.2619 7.16016 8.85156 8.57046 8.85156 10.3102C8.85156 12.0499 10.2619 13.4602 12.0016 13.4602Z"
                            fill="white"
                          />
                        </svg>

                        <h6 className="text-base text-gray-60">Address</h6>
                      </div>
                      <h6 className="text-base">267 Sipes Throughway</h6>
                    </div>
                    <div className="p-4 border-b border-b-gray-20 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M11.79 14.21L8.52 17.48C8.16 17.16 7.81 16.83 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.09 13.57 11.44 13.91 11.79 14.21Z"
                            fill="white"
                          />
                          <path
                            d="M21.9716 18.3291C21.9716 18.6091 21.9216 18.8991 21.8216 19.1791C21.7916 19.2591 21.7616 19.3391 21.7216 19.4191C21.5516 19.7791 21.3316 20.1191 21.0416 20.4391C20.5516 20.9791 20.0116 21.3691 19.4016 21.6191C19.3916 21.6191 19.3816 21.6291 19.3716 21.6291C18.7816 21.8691 18.1416 21.9991 17.4516 21.9991C16.4316 21.9991 15.3416 21.7591 14.1916 21.2691C13.0416 20.7791 11.8916 20.1191 10.7516 19.2891C10.3616 18.9991 9.97156 18.7091 9.60156 18.3991L12.8716 15.1291C13.1516 15.3391 13.4016 15.4991 13.6116 15.6091C13.6616 15.6291 13.7216 15.6591 13.7916 15.6891C13.8716 15.7191 13.9516 15.7291 14.0416 15.7291C14.2116 15.7291 14.3416 15.6691 14.4516 15.5591L15.2116 14.8091C15.4616 14.5591 15.7016 14.3691 15.9316 14.2491C16.1616 14.1091 16.3916 14.0391 16.6416 14.0391C16.8316 14.0391 17.0316 14.0791 17.2516 14.1691C17.4716 14.2591 17.7016 14.3891 17.9516 14.5591L21.2616 16.9091C21.5216 17.0891 21.7016 17.2991 21.8116 17.5491C21.9116 17.7991 21.9716 18.0491 21.9716 18.3291Z"
                            fill="white"
                          />
                        </svg>

                        <h6 className="text-base text-gray-60">Phone Number</h6>
                      </div>
                      <h6 className="text-base">1-730-860-7820</h6>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-10">
                <CardHeader>
                  <CardTitle className="text-dark-gray-50 text-xl">
                    Professional Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid">
                    <div className="p-4 border-b border-b-gray-20 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <svg
                          width="29"
                          height="28"
                          viewBox="0 0 29 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M25.1042 8.14669C24.1126 7.05003 22.4559 6.50169 20.0526 6.50169H19.7726V6.45503C19.7726 4.49503 19.7726 2.06836 15.3859 2.06836H13.6126C9.2259 2.06836 9.2259 4.50669 9.2259 6.45503V6.51336H8.9459C6.5309 6.51336 4.8859 7.06169 3.89423 8.15836C2.73923 9.44169 2.77423 11.1684 2.8909 12.3467L2.90256 12.4284L3.01923 13.6534C3.0309 13.665 3.05423 13.6884 3.07756 13.7C3.46256 13.9567 3.85923 14.2134 4.27923 14.4467C4.44256 14.5517 4.61756 14.645 4.79256 14.7384C6.78756 15.835 8.9809 16.57 11.2092 16.9317C11.3142 18.0284 11.7926 19.3117 14.3476 19.3117C16.9026 19.3117 17.4042 18.04 17.4859 16.9084C19.8659 16.5234 22.1642 15.695 24.2409 14.4817C24.3109 14.4467 24.3576 14.4117 24.4159 14.3767C24.9526 14.0734 25.4542 13.7467 25.9442 13.385C25.9676 13.3734 25.9909 13.35 26.0026 13.3267L26.0492 12.9067L26.1076 12.3584C26.1192 12.2884 26.1192 12.23 26.1309 12.1484C26.2242 10.97 26.2009 9.36003 25.1042 8.14669ZM15.7709 16.1384C15.7709 17.375 15.7709 17.5617 14.3359 17.5617C12.9009 17.5617 12.9009 17.34 12.9009 16.15V14.68H15.7709V16.1384ZM10.8942 6.50169V6.45503C10.8942 4.47169 10.8942 3.73669 13.6126 3.73669H15.3859C18.1042 3.73669 18.1042 4.48336 18.1042 6.45503V6.51336H10.8942V6.50169Z"
                            fill="white"
                          />
                          <path
                            opacity="0.4"
                            d="M24.4162 14.3547C24.3579 14.3897 24.2995 14.4247 24.2412 14.4597C22.1645 15.673 19.8662 16.4897 17.4862 16.8864C17.3929 18.0064 16.9029 19.2897 14.3479 19.2897C11.7929 19.2897 11.3029 18.018 11.2095 16.9097C8.9812 16.5597 6.78786 15.8247 4.79286 14.7164C4.61786 14.623 4.44286 14.5297 4.27953 14.4247C3.85953 14.1914 3.46286 13.9347 3.07786 13.678C3.05453 13.6664 3.0312 13.643 3.01953 13.6314L3.7312 21.2264C3.9762 23.548 4.93286 25.9397 10.0662 25.9397H18.9562C24.0895 25.9397 25.0462 23.548 25.2912 21.2147L26.0262 13.3047C26.0145 13.328 25.9912 13.3514 25.9679 13.363C25.4662 13.7247 24.9529 14.063 24.4162 14.3547Z"
                            fill="white"
                          />
                        </svg>
                        <h6 className="text-base text-gray-60">Job Title</h6>
                      </div>
                      <h6 className="text-base">Product Designer</h6>
                    </div>
                    <div className="p-4 border-b border-b-gray-20 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.6"
                            d="M10.61 4C10.53 4.3 10.5 4.63 10.5 5V8H5.5V6C5.5 4.9 6.4 4 7.5 4H10.61Z"
                            fill="white"
                          />
                          <path
                            d="M10.5 19V8H5.5C3.5 8 2.5 9 2.5 11V19C2.5 21 3.5 22 5.5 22H13.5C11.5 22 10.5 21 10.5 19ZM7.25 17C7.25 17.41 6.91 17.75 6.5 17.75C6.09 17.75 5.75 17.41 5.75 17V13C5.75 12.59 6.09 12.25 6.5 12.25C6.91 12.25 7.25 12.59 7.25 13V17Z"
                            fill="white"
                          />
                          <path
                            opacity="0.4"
                            d="M14.5 22H13.5C11.5 22 10.5 21 10.5 19V5C10.5 3 11.5 2 13.5 2H19.5C21.5 2 22.5 3 22.5 5V19C22.5 21 21.5 22 19.5 22H18.5"
                            fill="white"
                          />
                          <path
                            d="M18.5 18V22H14.5V18C14.5 17.45 14.95 17 15.5 17H17.5C18.05 17 18.5 17.45 18.5 18Z"
                            fill="white"
                          />
                          <path
                            d="M14.5 13.75C14.09 13.75 13.75 13.41 13.75 13V8C13.75 7.59 14.09 7.25 14.5 7.25C14.91 7.25 15.25 7.59 15.25 8V13C15.25 13.41 14.91 13.75 14.5 13.75Z"
                            fill="white"
                          />
                          <path
                            d="M18.5 13.75C18.09 13.75 17.75 13.41 17.75 13V8C17.75 7.59 18.09 7.25 18.5 7.25C18.91 7.25 19.25 7.59 19.25 8V13C19.25 13.41 18.91 13.75 18.5 13.75Z"
                            fill="white"
                          />
                        </svg>

                        <h6 className="text-base text-gray-60">Department</h6>
                      </div>
                      <h6 className="text-base">Design</h6>
                    </div>
                    <div className="p-4 border-b border-b-gray-20 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <svg
                          width="29"
                          height="28"
                          viewBox="0 0 29 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M21.4435 8.99161L21.2802 8.89828L19.6585 7.96495L16.3102 6.02828C15.2835 5.43328 13.7202 5.43328 12.6935 6.02828L9.34516 7.96495L7.72349 8.90995L7.51349 9.02661C5.42516 10.4266 5.28516 10.6833 5.28516 12.9349V18.3133C5.28516 20.5649 5.42516 20.8216 7.56016 22.2566L12.6935 25.2199C13.2068 25.5233 13.8485 25.6633 14.5018 25.6633C15.1435 25.6633 15.7968 25.5233 16.3102 25.2199L21.4902 22.2216C23.5785 20.8216 23.7185 20.5649 23.7185 18.3133V12.9349C23.7185 10.6833 23.5785 10.4266 21.4435 8.99161Z"
                            fill="white"
                          />
                          <path
                            d="M7.72266 8.90812L9.34432 7.96312L12.541 6.11979L12.6927 6.02646C13.7193 5.43146 15.2827 5.43146 16.3093 6.02646L16.461 6.11979L19.6577 7.96312L21.2793 8.89646V6.39979C21.2793 3.77479 19.8327 2.32812 17.2077 2.32812H11.7827C9.15766 2.32812 7.72266 3.77479 7.72266 6.39979V8.90812Z"
                            fill="white"
                          />
                          <path
                            d="M17.8137 15.5602L17.0904 16.4469C16.9737 16.5752 16.892 16.8319 16.9037 17.0069L16.9737 18.1502C17.0204 18.8502 16.5187 19.2119 15.8654 18.9552L14.8037 18.5352C14.6404 18.4769 14.3604 18.4769 14.197 18.5352L13.1354 18.9552C12.482 19.2119 11.9804 18.8502 12.027 18.1502L12.097 17.0069C12.1087 16.8319 12.027 16.5752 11.9104 16.4469L11.187 15.5602C10.732 15.0236 10.9304 14.4286 11.607 14.2536L12.7154 13.9736C12.8904 13.9269 13.1004 13.7636 13.1937 13.6119L13.812 12.6552C14.197 12.0602 14.8037 12.0602 15.1887 12.6552L15.807 13.6119C15.9004 13.7636 16.1104 13.9269 16.2854 13.9736L17.3937 14.2536C18.0704 14.4286 18.2687 15.0236 17.8137 15.5602Z"
                            fill="white"
                          />
                        </svg>

                        <h6 className="text-base text-gray-60">
                          Year of Experience
                        </h6>
                      </div>
                      <h6 className="text-base">3 Years</h6>
                    </div>
                    <div className="p-4 border-b border-b-gray-20 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <svg
                          width="29"
                          height="28"
                          viewBox="0 0 29 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M21.9414 14.9824V20.7341C21.9414 22.2158 20.7864 23.8024 19.398 24.2691L15.6764 25.5058C15.023 25.7274 13.9614 25.7274 13.3197 25.5058L9.59802 24.2691C8.19802 23.8024 7.05469 22.2158 7.05469 20.7341L7.06635 14.9824L12.223 18.3424C13.483 19.1708 15.5597 19.1708 16.8197 18.3424L21.9414 14.9824Z"
                            fill="white"
                          />
                          <path
                            d="M23.8088 7.53828L16.8205 2.95328C15.5605 2.12495 13.4838 2.12495 12.2238 2.95328L5.20047 7.53828C2.9488 8.99661 2.9488 12.2983 5.20047 13.7683L7.06714 14.9816L12.2238 18.3416C13.4838 19.1699 15.5605 19.1699 16.8205 18.3416L21.9421 14.9816L23.5405 13.9316V17.5016C23.5405 17.9799 23.9371 18.3766 24.4155 18.3766C24.8938 18.3766 25.2905 17.9799 25.2905 17.5016V11.7616C25.7571 10.2566 25.2788 8.50661 23.8088 7.53828Z"
                            fill="white"
                          />
                        </svg>

                        <h6 className="text-base text-gray-60">Degree</h6>
                      </div>
                      <h6 className="text-base">Master Degree</h6>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <Card className="bg-gray-10 max-md:col-span-2">
            <CardHeader>
              <CardTitle className="text-dark-gray-50 text-xl">
                Recent Activity
              </CardTitle>
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

export default Profile;
