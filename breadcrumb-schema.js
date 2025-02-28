const breadcrumbData = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Αρχική",
        "item": "https://www.omoiopathitikospapariga.gr/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Δυνατότητες Ομοιοπαθητικής",
        "item": "https://www.omoiopathitikospapariga.gr/dunatotites_omoiopathitikis"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Βιογραφικό",
        "item": "https://www.omoiopathitikospapariga.gr/bio"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Ομοιοπαθητική",
        "item": "https://www.omoiopathitikospapariga.gr/services/omoiopathitiki"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Φυσική Υποστήριξη Οργανισμού",
        "item": "https://www.omoiopathitikospapariga.gr/services/fisiki_upostiriksi"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Ενεργειακές Θεραπείες",
        "item": "https://www.omoiopathitikospapariga.gr/services/energiakes_therapeies"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Επικοινωνία",
        "item": "https://homeopath_afroditi.netlify.app/contact"
      }
    ]
  };
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(breadcrumbData);
  document.head.appendChild(script);
  