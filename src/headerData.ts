export interface NavItem {
  title: string;
  url: string;
  isEnabled: boolean;
  isSelected: boolean;
  idHTML: string;
  subNav?: NavItem[];
}

export interface Plan {
  planType: string;
  idUserTypePlan: number;
  description: string;
  itemDescription: string;
  planName: string;
  isSubscribers: string;
  maxSubscribers: string;
  remainingCredits: string;
  buttonText: string;
  buttonUrl: string;
  planDiscount: number;
  monthPlan: number;
  subscribersCount: number;
  trialActive: boolean;
  trialExpired: false;
  trialExpirationDate: string;
  trialExpirationDays: number;
  planFee: number;
  pendingFreeUpgrade: boolean;
}

export interface User {
  email: string;
  fullname: string;
  lastName: string;
  plan: Plan;
  lang: "en" | "es";
  avatar: { text: string; color: string };
  nav: NavItem[];
  sms: { smsEnabled: boolean; remainingCredits: number };
  isLastPlanRequested: boolean;
  hasCampaignSent: boolean;
}

export interface Alert {
  type: "warning";
  message: string;
  button: {
    text: string;
    url?: string;
    action?: string;
  };
}

interface UserData {
  nav: NavItem[];
  user: User;
  alert: Alert;
  homeUrl: string;
  urlBase: string;
  features: {
    siteTrackingEnabled: boolean;
    siteTrackingActive: boolean;
    emailParameterEnabled: boolean;
    emailParameterActive: boolean;
  };
  notifications: string[];
  emptyNotificationText: string;
}

const headerData: UserData = {
  nav: [
    {
      title: "Home",
      url: "/Dashboard/",
      isEnabled: false,
      isSelected: false,
      idHTML: "dashboard",
    },
    {
      title: "Campaigns",
      url: "/Campaigns/Draft/",
      isEnabled: false,
      isSelected: false,
      subNav: [
        {
          title: "Draft",
          url: "/Campaigns/Draft/",
          isEnabled: false,
          isSelected: false,
          idHTML: "campaignDraftMenu",
        },
        {
          title: "Scheduled",
          url: "/Campaigns/Scheduled/",
          isEnabled: false,
          isSelected: false,
          idHTML: "campaignScheduledMenu",
        },
        {
          title: "Sent",
          url: "/Campaigns/Sent/",
          isEnabled: false,
          isSelected: false,
          idHTML: "campaignSentMenu",
        },
        {
          title: "A/B Test",
          url: "/Campaigns/TestAB/",
          isEnabled: false,
          isSelected: false,
          idHTML: "campaignTestABMenu",
        },
      ],
      idHTML: "campaignMenu",
    },
    {
      title: "Lists",
      url: "/Lists/SubscribersList/",
      isEnabled: false,
      isSelected: false,
      subNav: [
        {
          title: "Main Lists",
          url: "/Lists/SubscribersList/",
          isEnabled: false,
          isSelected: false,
          idHTML: "listMainMenu",
        },
        {
          title: "Segments",
          url: "/Lists/Segment/",
          isEnabled: false,
          isSelected: false,
          idHTML: "listSegmentMenu",
        },
        {
          title: "Contacts",
          url: "/Lists/MasterSubscriber/",
          isEnabled: false,
          isSelected: false,
          idHTML: "listMasterSubscriberMenu",
        },
        {
          title: "Custom Fields",
          url: "/Lists/MasterCustomFields/",
          isEnabled: false,
          isSelected: false,
          idHTML: "listCustomFieldMenu",
        },
        {
          title: "Forms",
          url: "/Lists/Form/",
          isEnabled: false,
          isSelected: false,
          idHTML: "listFormMenu",
        },
      ],
      idHTML: "listMenu",
    },
    {
      title: "Reports",
      url: "/Campaigns/Reports/",
      isEnabled: false,
      isSelected: false,
      subNav: [
        {
          title: "Sent Campaigns",
          url: "/Campaigns/Reports/",
          isEnabled: false,
          isSelected: false,
          idHTML: "reportsSentCampaign",
        },
        {
          title: "Subscriber History",
          url: "/Campaigns/Reports/?redirect=subHistory",
          isEnabled: false,
          isSelected: false,
          idHTML: "reportsSubsHistory",
        },
        {
          title: "Advanced",
          url: "/reports",
          isEnabled: false,
          isSelected: false,
          idHTML: "webapp",
        },
      ],
      idHTML: "reportMenu",
    },
    {
      title: "Automation",
      url: "/Automation/Automation/AutomationApp/",
      isEnabled: false,
      isSelected: false,
      subNav: [],
      idHTML: "automationMenu",
    },
    {
      title: "Templates",
      url: "/Templates/Main/",
      isEnabled: false,
      isSelected: false,
      idHTML: "templateMenu",
    },
  ],
  user: {
    email: "bseguer@makingsense.com",
    fullname: "bruno seguer",
    lastName: "seguer",
    plan: {
      planType: "1",
      idUserTypePlan: 0,
      description: "Available Contacts",
      itemDescription: "Contacts",
      planName: "Free Trial",
      isSubscribers: "true",
      maxSubscribers: "500",
      remainingCredits: "500",
      buttonText: "UPGRADE",
      buttonUrl: "/ControlPanel/AccountPreferences/PreUpgrade?origin=hello_bar",
      planDiscount: 0,
      monthPlan: 0,
      subscribersCount: 0,
      trialActive: true,
      trialExpired: false,
      trialExpirationDate: "2022-07-08T00:00:00",
      trialExpirationDays: 87,
      planFee: 0.0,
      pendingFreeUpgrade: true,
    },
    lang: "en",
    avatar: { text: "BS", color: "#EE9C70" },
    nav: [
      {
        title: "Control Panel",
        url: "/ControlPanel/ControlPanel/",
        isEnabled: false,
        isSelected: false,
        idHTML: "controlPanel",
      },
      {
        title: "Download Center",
        url: "/DownloadCenter/DownloadCenter",
        isEnabled: false,
        isSelected: false,
        idHTML: "downloadCenter",
      },
      {
        title: "Logout ",
        url: "/SignIn/SignOut",
        isEnabled: false,
        isSelected: false,
        idHTML: "signOut",
      },
    ],
    sms: { smsEnabled: false, remainingCredits: 0.0 },
    isLastPlanRequested: false,
    hasCampaignSent: false,
  },
  alert: {
    type: "warning",
    message:
      "Your Free trial with unlimited Campaigns up to  500  Contacts expires in  87  days.",
    button: {
      text: "Upgrade Now",
      url: "/ControlPanel/AccountPreferences/PreUpgrade?origin=hello_bar",
    },
  },
  homeUrl: "",
  urlBase: "/",
  features: {
    siteTrackingEnabled: true,
    siteTrackingActive: false,
    emailParameterEnabled: true,
    emailParameterActive: false,
  },
  notifications: [
    `<strong>DEMO DAY: LIVE ONLINE EVENT</strong><br/><p class="text--small">
    Learn how to take full advantage of your Email & Automation Marketing strategy.
    <a target="_blank"
    href="https://www.fromdoppler.com/demo-day/?
    utm_source=fromdoppler&utm_medium=appnotification&utm_campaign=demoday">
    <br/><strong>REGISTER FOR FREE</strong></a>.</p>`,
  ],
  emptyNotificationText: "Empty Notification Text",
};

export default headerData;
