const breadcrumbData = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Αρχική",
        "item": "https://homeopath_afroditi.netlify.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Υπηρεσίες",
        "item": "https://homeopath_afroditi.netlify.app/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Υπηρεσία 1",
        "item": "https://homeopath_afroditi.netlify.app/services/service1"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Υπηρεσία 2",
        "item": "https://homeopath_afroditi.netlify.app/services/service2"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Υπηρεσία 3",
        "item": "https://homeopath_afroditi.netlify.app/services/service3"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Βιογραφικό",
        "item": "https://homeopath_afroditi.netlify.app/about"
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
  