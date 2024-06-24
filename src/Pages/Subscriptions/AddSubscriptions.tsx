import React from "react";
import { NavLink } from "react-router-dom";
import AmazonLogo from "../../assets/Subscription/Amazon.png";
import AzureLogo from "../../assets/Subscription/Azure.png";
import DropboxLogo from "../../assets/Subscription/Dropbox.png";
import DocusignLogo from "../../assets/Subscription/Docusign.png";
import ZendeskChatLogo from "../../assets/Subscription/ZendeskChat.png";
import IntercomLogo from "../../assets/Subscription/Intercom.png";
import LinkedInLogo from "../../assets/Subscription/LinkedIn.png";
import SlackLogo from "../../assets/Subscription/Slack.png";
import TiktokLogo from "../../assets/Subscription/Tiktok.png";
import GoogleAdsLogo from "../../assets/Subscription/GoogleAds.png";
import FacebookAdsLogo from "../../assets/Subscription/FacebookAds.png";

const AddSubscriptions: React.FC = () => {
  return (
    <>
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-2xl font-bold">Subscription and Saas</h4>
          <NavLink
            to="/AddSubscriptions"
            className="bg-primary text-white text-base py-3 px-4 rounded-lg hover:shadow-md hover:opacity-80"
          >
            <i className="ri-add-line me-2"></i>
            <span>Add New</span>
          </NavLink>
        </div>
        <div className="grid grid-cols-4 max-md:grid-cols-2 gap-10">
          <div className="bg-white w-full h-56 flex flex-col items-center justify-center hover:shadow-lg rounded-xl">
            <div className="mb-10 w-32">
              <img src={AmazonLogo} alt="" />
            </div>
            <div>
              <h6 className="font-semibold text-black text-xl mb-2">AWS</h6>
              <p className=" font-normal">by Amazon</p>
            </div>
          </div>
          <div className="bg-white w-full h-56 flex flex-col items-center justify-center hover:shadow-lg rounded-xl">
            <div className="mb-10 w-32">
              <img src={AzureLogo} alt="" />
            </div>
            <div>
              <h6 className="font-semibold text-black text-xl mb-2">
                Microsoft Azure
              </h6>
              <p className=" font-normal">by Microsoft</p>
            </div>
          </div>
          <div className="bg-white w-full h-56 flex flex-col items-center justify-center hover:shadow-lg rounded-xl">
            <div className="mb-10 w-32">
              <img src={DropboxLogo} alt="" />
            </div>
            <div>
              <h6 className="font-semibold text-black text-xl mb-2">Dropbox</h6>
              <p className=" font-normal">by Dropbox</p>
            </div>
          </div>
          <div className="bg-white w-full h-56 flex flex-col items-center justify-center hover:shadow-lg rounded-xl">
            <div className="mb-10 w-32">
              <img src={DocusignLogo} alt="" />
            </div>
            <div>
              <h6 className="font-semibold text-black text-xl mb-2">
                DocuSign
              </h6>
              <p className=" font-normal">by DocuSign</p>
            </div>
          </div>
          <div className="bg-white w-full h-56 flex flex-col items-center justify-center hover:shadow-lg">
            <div className="mb-10 w-32">
              <img src={ZendeskChatLogo} alt="" />
            </div>
            <div>
              <h6 className="font-semibold text-black text-xl mb-2">
                Zendesk Chat
              </h6>
              <p className=" font-normal">by Zendesk</p>
            </div>
          </div>
          <div className="bg-white w-full h-56 flex flex-col items-center justify-center hover:shadow-lg">
            <div className="mb-10 w-32">
              <img src={IntercomLogo} alt="" />
            </div>
            <div>
              <h6 className="font-semibold text-black text-xl mb-2">
                Intercom
              </h6>
              <p className=" font-normal">by Intercom</p>
            </div>
          </div>
          <div className="bg-white w-full h-56 flex flex-col items-center justify-center hover:shadow-lg">
            <div className="mb-10 w-32">
              <img src={LinkedInLogo} alt="" />
            </div>
            <div>
              <h6 className="font-semibold text-black text-xl mb-2">
                LinkedIn Premium
              </h6>
              <p className=" font-normal">by LinkedIn</p>
            </div>
          </div>
          <div className="bg-white w-full h-56 flex flex-col items-center justify-center hover:shadow-lg">
            <div className="mb-10 w-32">
              <img src={SlackLogo} alt="" />
            </div>
            <div>
              <h6 className="font-semibold text-black text-xl mb-2">Slack</h6>
              <p className=" font-normal">by Slack</p>
            </div>
          </div>
          <div className="bg-white w-full h-56 flex flex-col items-center justify-center hover:shadow-lg">
            <div className="mb-10 w-32">
              <img src={TiktokLogo} alt="" />
            </div>
            <div>
              <h6 className="font-semibold text-black text-xl mb-2">TikTok</h6>
              <p className=" font-normal">by TikTok</p>
            </div>
          </div>
          <div className="bg-white w-full h-56 flex flex-col items-center justify-center hover:shadow-lg">
            <div className="mb-10 w-32">
              <img src={GoogleAdsLogo} alt="" />
            </div>
            <div>
              <h6 className="font-semibold text-black text-xl mb-2">
                Google Ads
              </h6>
              <p className=" font-normal">by Google</p>
            </div>
          </div>
          <div className="bg-white w-full h-56 flex flex-col items-center justify-center hover:shadow-lg">
            <div className="mb-10 w-32">
              <img src={FacebookAdsLogo} alt="" />
            </div>
            <div>
              <h6 className="font-semibold text-black text-xl mb-2">
                Facebook Ads
              </h6>
              <p className=" font-normal">by Facebook</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSubscriptions;
