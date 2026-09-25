/**
 * DRISHTI - Unified Disaster Early Warning Dataset
 * Natural, clean, focused data structure for India
 */

export const INITIAL_WEATHER_REGIONS = [
  {
    id: "konkan-01",
    region: "Konkan Coast",
    state: "Maharashtra",
    city: "Mumbai & Coastal Belt",
    lat: 19.0760,
    lng: 72.8777,
    polygon: [
      [19.45, 72.75],
      [19.45, 73.10],
      [18.85, 73.15],
      [18.60, 72.95],
      [18.60, 72.75],
      [19.05, 72.75]
    ],
    rainfall: "142 mm",
    expectedTime: "48 minutes",
    hazard: "Heavy Rainfall + Thunderstorm",
    thunderstormRisk: "High Risk",
    lightningRisk: "High",
    floodRisk: "High",
    severity: "red",
    status: "Awaiting Verification" // "Awaiting Verification" | "Sent to Government" | "Confirmed" | "Rejected"
  },
  {
    id: "goa-02",
    region: "Goa Coast",
    state: "Goa",
    city: "Panaji Belt",
    lat: 15.4909,
    lng: 73.8278,
    polygon: [
      [15.80, 73.65],
      [15.80, 74.15],
      [15.15, 74.15],
      [15.15, 73.75]
    ],
    rainfall: "65 mm",
    expectedTime: "3 hours",
    hazard: "Moderate Rainfall",
    thunderstormRisk: "Moderate",
    lightningRisk: "Moderate",
    floodRisk: "Moderate",
    severity: "orange",
    status: "Monitoring"
  },
  {
    id: "kerala-03",
    region: "Kerala Coast",
    state: "Kerala",
    city: "Kochi Belt",
    lat: 9.9312,
    lng: 76.2673,
    polygon: [
      [10.30, 76.10],
      [10.30, 76.50],
      [9.50, 76.50],
      [9.50, 76.20]
    ],
    rainfall: "40 mm",
    expectedTime: "6 hours",
    hazard: "Light Showers",
    thunderstormRisk: "Low",
    lightningRisk: "Low",
    floodRisk: "Low",
    severity: "yellow",
    status: "Monitoring"
  },
  {
    id: "odisha-04",
    region: "Odisha Coast",
    state: "Odisha",
    city: "Puri Belt",
    lat: 19.8135,
    lng: 85.8312,
    polygon: [
      [20.40, 85.60],
      [20.40, 86.80],
      [19.60, 86.30],
      [19.60, 85.60]
    ],
    rainfall: "35 mm",
    expectedTime: "8 hours",
    hazard: "Passing Clouds",
    thunderstormRisk: "Low",
    lightningRisk: "Low",
    floodRisk: "Low",
    severity: "green",
    status: "Monitoring"
  }
];

export const EMERGENCY_RESOURCES = [
  {
    id: "res-1",
    name: "Ambulance Station 108",
    type: "Ambulance",
    status: "Ready",
    location: "Western Coastal Corridor",
    eta: "12 mins"
  },
  {
    id: "res-2",
    name: "Disaster Quick Response Unit",
    type: "Rescue Team",
    status: "Ready",
    location: "Konkan Base Depot",
    eta: "18 mins"
  },
  {
    id: "res-3",
    name: "Community Relief Shelter",
    type: "Shelter",
    status: "Available",
    location: "High-Ground Center",
    capacity: "1,500 People"
  },
  {
    id: "res-4",
    name: "Dewatering Drainage Pump Station",
    type: "Pump",
    status: "Active",
    location: "Low-Lying Underpass",
    capacity: "4,000 m³/hr"
  }
];

export const TRANSLATIONS = {
  en: {
    appName: "DRISHTI",
    tagline: "Predict. Verify. Protect.",
    appSubtitle: "Early warning for severe weather events",
    chooseAccess: "CHOOSE ACCESS",
    adminTitle: "ADMIN",
    adminDesc: "Platform Management",
    govtTitle: "GOVERNMENT OFFICIAL",
    govtDesc: "Verify & Respond",
    userTitle: "USER",
    userDesc: "Weather Warnings",
    loginBtn: "Enter Dashboard",
    navDashboard: "Dashboard",
    navEmergency: "Emergency",
    navAlerts: "Alerts",
    logout: "Logout",
    
    // User page
    weatherAlert: "Weather Alert",
    heavyRainfallExpected: "Heavy rainfall and thunderstorm expected near your area.",
    expectedIn: "Expected in",
    highRiskRegion: "High Risk Region",
    thunderstorm: "Thunderstorm",
    rescueTeam: "Rescue Team",
    whatYouShouldDo: "WHAT YOU SHOULD DO",
    tip1: "Stay indoors in a safe structure",
    tip2: "Avoid flooded roads and underpasses",
    tip3: "Stay away from open fields and trees",
    tip4: "Follow official instructions from disaster authorities",
    
    // Statuses
    ready: "Ready",
    alertSent: "Alert Sent",
    confirmed: "Confirmed",
    awaitingVerification: "Awaiting Confirmation",
    sentToGovt: "Sent for Verification",
    
    // Government page
    govtHeader: "Government Weather Verification",
    confirmationRequired: "Confirmation Required",
    confirmAlertBtn: "Confirm Alert",
    rejectBtn: "Reject",
    alertConfirmedMsg: "Alert Confirmed. Public warning is now active.",
    rescueResponse: "RESCUE RESPONSE",
    sendRescueAlertBtn: "Send Alert to Rescue Team",
    rescueAlertSentMsg: "Rescue team has been alerted.",
    
    // Admin page
    adminHeader: "System & Prediction Management",
    incomingPredictions: "Incoming Predictions",
    sendToGovtBtn: "Send to Government",
    systemStatus: "System Status: Online"
  },
  hi: {
    appName: "दृष्टि (DRISHTI)",
    tagline: "पूर्वानुमान। सत्यापन। सुरक्षा।",
    appSubtitle: "गंभीर मौसम के लिए पूर्व चेतावनी प्रणाली",
    chooseAccess: "प्रवेश चुनें",
    adminTitle: "प्रशासक (ADMIN)",
    adminDesc: "प्लेटफॉर्म प्रबंधन",
    govtTitle: "सरकारी अधिकारी (GOVERNMENT)",
    govtDesc: "सत्यापन व प्रतिक्रिया",
    userTitle: "नागरिक (USER)",
    userDesc: "मौसम चेतावनियां",
    loginBtn: "डैशबोर्ड में प्रवेश करें",
    navDashboard: "डैशबोर्ड",
    navEmergency: "आपातकालीन",
    navAlerts: "चेतावनियां",
    logout: "लॉगआउट",
    
    // User page
    weatherAlert: "मौसम चेतावनी",
    heavyRainfallExpected: "आपके क्षेत्र में भारी बारिश और आंधी-तूफान का अनुमान है।",
    expectedIn: "अनुमानित समय",
    highRiskRegion: "उच्च जोखिम क्षेत्र",
    thunderstorm: "आंधी-तूफान",
    rescueTeam: "राहत दल",
    whatYouShouldDo: "आपको क्या करना चाहिए",
    tip1: "सुरक्षित पक्के घर के अंदर रहें",
    tip2: "जलभराव वाले रास्तों और अंडरपास से बचें",
    tip3: "खुले मैदानों और पेड़ों से दूर रहें",
    tip4: "आपदा प्रबंधन विभाग के आधिकारिक निर्देशों का पालन करें",
    
    // Statuses
    ready: "तैयार",
    alertSent: "अलर्ट भेजा गया",
    confirmed: "सत्यापित",
    awaitingVerification: "पुष्टि की प्रतीक्षा में",
    sentToGovt: "सत्यापन हेतु भेजा गया",
    
    // Government page
    govtHeader: "सरकारी मौसम सत्यापन",
    confirmationRequired: "पुष्टि आवश्यक है",
    confirmAlertBtn: "चेतावनी की पुष्टि करें",
    rejectBtn: "अस्वीकार करें",
    alertConfirmedMsg: "चेतावनी की पुष्टि हो गई है। सार्वजनिक चेतावनी जारी कर दी गई है।",
    rescueResponse: "राहत दल प्रतिक्रिया",
    sendRescueAlertBtn: "राहत दल को अलर्ट भेजें",
    rescueAlertSentMsg: "राहत दल को अलर्ट भेज दिया गया है।",
    
    // Admin page
    adminHeader: "सिस्टम एवं पूर्वानुमान प्रबंधन",
    incomingPredictions: "आगामी पूर्वानुमान",
    sendToGovtBtn: "सरकार को सत्यापन हेतु भेजें",
    systemStatus: "सिस्टम स्थिति: ऑनलाइन"
  },
  mr: {
    appName: "दृष्टी (DRISHTI)",
    tagline: "अंदाज. पडताळणी. संरक्षण.",
    appSubtitle: "गंभीर हवामानाची पूर्वसूचना प्रणाली",
    chooseAccess: "प्रवेश निवडा",
    adminTitle: "प्रशासक (ADMIN)",
    adminDesc: "प्लॅटफॉर्म व्यवस्थापन",
    govtTitle: "शासकीय अधिकारी (GOVERNMENT)",
    govtDesc: "पडताळणी व प्रतिसाद",
    userTitle: "नागरिक (USER)",
    userDesc: "हवामान इशारे",
    loginBtn: "डॅशबोर्डमध्ये प्रवेश करा",
    navDashboard: "डॅशबोर्ड",
    navEmergency: "आपत्कालीन",
    navAlerts: "सूचना",
    logout: "लॉगआउट",
    
    // User page
    weatherAlert: "हवामान इशारा",
    heavyRainfallExpected: "आपल्या परिसरात मुसळधार पाऊस आणि वादळाचा अंदाज आहे.",
    expectedIn: "अंदाजे वेळ",
    highRiskRegion: "उच्च धोका क्षेत्र",
    thunderstorm: "विजांसह वादळ",
    rescueTeam: "बचाव पथक",
    whatYouShouldDo: "आपण काय करावे",
    tip1: "सुरक्षित घरात किंवा इमारतीतच थांबा",
    tip2: "पाणी साचलेले रस्ते व सबवे टाळा",
    tip3: "मोकळी मैदाने आणि झाडांपासून दूर रहा",
    tip4: "आपत्ती व्यवस्थापन कक्षाच्या सूचनांचे पालन करा",
    
    // Statuses
    ready: "सज्ज",
    alertSent: "इशारा पाठवला",
    confirmed: "मंजूर",
    awaitingVerification: "पडताळणी प्रलंबित",
    sentToGovt: "पडताळणीसाठी पाठवले",
    
    // Government page
    govtHeader: "शासकीय हवामान पडताळणी",
    confirmationRequired: "पडताळणी आवश्यक",
    confirmAlertBtn: "अलर्ट मंजूर करा",
    rejectBtn: "नाकारा",
    alertConfirmedMsg: "अलर्ट मंजूर केला आहे. नागरिकांसाठी इशारा जारी करण्यात आला आहे.",
    rescueResponse: "बचाव प्रतिसाद",
    sendRescueAlertBtn: "बचाव पथकाला अलर्ट पाठवा",
    rescueAlertSentMsg: "बचाव पथकाला अलर्ट पाठवण्यात आला आहे.",
    
    // Admin page
    adminHeader: "प्रणाली व अंदाज व्यवस्थापन",
    incomingPredictions: "नवीन अंदाज",
    sendToGovtBtn: "शासकीय पडताळणीसाठी पाठवा",
    systemStatus: "प्रणाली स्थिती: कार्यरत"
  }
};
