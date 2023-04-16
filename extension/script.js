// List of COVID-19 related keywords
const covidKeywords = [
    "COVID-19",
    "coronavirus",
    "pandemic",
    "lockdown",
    "quarantine",
    "vaccine",
    "Delta variant",
    "social distancing",
    "N95",
    "PCR test",
    "contact tracing",
    "self-isolation",
    "herd immunity",
    "ventilator",
    "PPE",
    "SARS-CoV-2",
    "flattening the curve",
    "asymptomatic",
    "frontline workers",
    "community spread",
    "immunocompromised",
    "vaccination passport",
    "booster shot",
    "super-spreader",
    "variant",
    "outbreak",
    "stay-at-home",
    "face mask",
    "hand sanitizer"
  ];

  // Construct regex pattern from keywords
  const covidRegex = new RegExp(covidKeywords.join("|"), "gi");

  // Remove elements containing COVID-19 related keywords
  function removeCovidContent() {
    const elements = document.querySelectorAll("body *");
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      if (covidRegex.test(el.textContent)) {
        el.remove();
      }
    }
  }

  // Run removeCovidContent() function every 2 seconds
  setInterval(removeCovidContent, 2000);
