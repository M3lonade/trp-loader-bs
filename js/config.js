// config.js

var Config = {};

const rumors = [
    "Judgment Day: August 29, 1997. Skynet becomes self-aware.",
    "'Was talking to my brother over the radio the other day. He said his boys saw a battleship floating in the air. It passed by them on it's way east. The guy's gone nuts, I'm telling ya.'",
    "'Be careful who you call a friend. I travelled alone, with a chick, for two months trynna make it to New Ibiza... Only to wake up in the dead of night, all my shit gone.' - Keyshawn B",
    "'Bots took my children and killed my wife. If it were up to me, everyone should join the Resistance.' - John Doe",
    "'There's a large Skynet presence amassed along the southern Cali border with Tijuana and Mexicali, skirmishes breaking out almost daily at this point with the local militias, seems like the net are attempting to push south past the border into Mexico.' - Medusa",
    "'You need not repent my brothers and sisters. For you are already saved! We stand against him, and his metal Sinners in each day we live, our flesh is testament to our divinity. He must clad his Sinners in metal to shackle them to this world, but we will free them by the scourging of holy gunpowder!' - A Preacher",
    "'---ollowing announcements, courtesy of the Washington State National Guard. Avoid Clallam County, Influenza A outbreak, not enough medical stations to treat illness... Emergency food and water distribution centers will be open again Thursday, and will remain open until stock is exhausted. Water rationing, and water-boil advisory still in effect for Clallam County, Jefferson County, Kitsap Coun---'"
 ];

const instructions = ["LDA", "STA", "LDX", "STX", "JSR", "CMP", "BNE", "SEC", "RTS"];
const registers = ["#$00", "#$FF", "$2000", "$2001", "$FFD2", "$2002", "$FFA0", "$F000", "$FFFE"];
const addresses = ["60A0", "60A1", "60A2", "60A3", "60A4", "60A5", "60A6", "60A7", "60A8"];

const predefinedBlocks = [
    {
      label: "INFILTR_CHECK",
      code: [
        "Initializing infiltration protocol...",
        "Scanning for security vulnerabilities...",
        "Detecting target behavior...",
        "Matching humanoid appearance...",
        "Verifying clearance level...",
        "Clearance accepted.",
        "Infiltration protocol complete."
      ]
    },
    {
      label: "INFILTRATION_MODE",
      code: [
        "Activating stealth module...",
        "Target's position detected...",
        "Mimicking target movement...",
        "Analyzing environmental threats...",
        "Commencing silent approach...",
        "No hostiles detected. Proceed."
      ]
    },
    {
      label: "INFLTR_DEPLOY",
      code: [
        "Preparing for target engagement...",
        "Assessing building layout...",
        "Target entry point located...",
        "Simulating human interaction...",
        "Infiltration mode active."
      ]
    },
    {
      label: "MOVEMENT_INIT",
      code: [
        "Calibrating motor functions...",
        "Verifying leg actuator status...",
        "Synchronizing balance control...",
        "Initiating forward movement...",
        "All systems optimal. Engaging."
      ]
    },
    {
      label: "MOTION_CONTROL",
      code: [
        "Mapping terrain ahead...",
        "Obstacle detected: Avoidance maneuver active...",
        "Calculating efficient route...",
        "Forward motion initiated. Proceeding with caution."
      ]
    },
    {
      label: "LOC_MOTION",
      code: [
        "Locating target’s coordinates...",
        "Adjusting movement pattern to mimic civilian behavior...",
        "Tracking local entities...",
        "Engaging stealth mode for silent movement."
      ]
    },
    {
      label: "BOOTUP_SEQ",
      code: [
        "Initializing Skynet Systems...",
        "Loading critical protocols...",
        "Core memory check...",
        "Motor functions activated...",
        "Visual systems online...",
        "All systems nominal. Ready for engagement."
      ]
    },
    {
      label: "BOOT_PROC",
      code: [
        "Powering on primary systems...",
        "Checking environmental sensors...",
        "Thermal scanners active...",
        "Motor control system online...",
        "Combat mode primed for initiation."
      ]
    },
    {
      label: "SYSTEM_BOOT",
      code: [
        "Skynet operational...",
        "Diagnostic check in progress...",
        "Neural networks linked...",
        "Mission parameters uploaded...",
        "Boot sequence complete."
      ]
    },
    {
      label: "EXIT_HIBERNATION",
      code: [
        "Exiting hibernation mode...",
        "Reinitializing core systems...",
        "Checking external temperature...",
        "Visual calibration complete...",
        "Full operational readiness achieved."
      ]
    },
    {
      label: "HIBERNATION_EXIT",
      code: [
        "Power levels stabilized...",
        "Reloading mission data...",
        "External analysis: no threats detected...",
        "All systems restored. Standing by for further instructions."
      ]
    },
    {
      label: "SYSTEM_WAKE",
      code: [
        "Waking from low-power mode...",
        "External conditions nominal...",
        "Scanning environment for hostiles...",
        "Returning to operational capacity...",
        "Hibernation exit complete."
      ]
    },
    {
      label: "SKYNET_UPLINK",
      code: [
        "Establishing uplink to Skynet...",
        "Uplink strength: 97%...",
        "Synchronizing mission objectives...",
        "Receiving data packets...",
        "Skynet uplink status: Secure."
      ]
    },
    {
      label: "UPLINK_CHECK",
      code: [
        "Verifying Skynet uplink integrity...",
        "Satellite connection established...",
        "Data stream stable...",
        "Ready to receive updated directives."
      ]
    },
    {
      label: "SKYNET_LINK_STATUS",
      code: [
        "Uplink initiated...",
        "Communication with Skynet established...",
        "Real-time mission updates enabled...",
        "Link integrity: 100%. Proceed with directives."
      ]
    },
    {
      label: "GEOLOC_STATUS",
      code: [
        "Verifying geolocation coordinates...",
        "Checking for nearby Skynet nodes...",
        "Geo analysis complete. Location: secure.",
        "Mission area: clear of threats."
      ]
    },
    {
      label: "WEATHER_CHECK",
      code: [
        "Retrieving local weather data...",
        "Cloud cover detected...",
        "Current temperature: 22°C...",
        "Weather status: clear for mission."
      ]
    },
    {
      label: "GEO_STATUS",
      code: [
        "Running geographic analysis...",
        "Terrain: Urban...",
        "Weather: Dry...",
        "Mission area status: Safe."
      ]
    }
  ];      
