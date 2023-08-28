const sections = [
    { name: 'Home' , link:'../index.html', description:'Premier Payments is a full service credit and debit card processor committed to delivering the latest in payment technology and the absolute best customer service in the industry.' },
    { name: 'Merchants', link:'../html/merchants.html', description:'At Premier Payment, we pride ourselves in providing the absolute best customer service in the merchant processing industry with 24/7 in-house support and a comprehensive merchant training program.'},
    { name: 'Merchant Services', link:'../html/merchant-services.html', description:'Merchant Services are authorized financial services that allow a business to accept credit card or bank debit card transactions using online ordering or point of sales systems.'},
    { name: 'Retail Processing', link:'../html/retail-processing.html', description:'Retail businesses are fast-paced environments that rely a great deal on their ability to process transactions efficiently. We deliver high-quality retail credit card processing options that offer your customers flexibility and convenience.'},
    { name: 'Mobile & Wireless', link:'../html/mobile-wireless.html', description:'On-the-go merchants need to be able to conduct their business anytime, anywhere. Premier has you covered with the best possible rates for mobile transactions.'},
    { name: 'Ecommerce', link:'../html/ecommerce.html', description:'Accept payments on your web store with eCommerce credit card processing from Premier Payment. We make selling online quick and easily—like opening another location without all of the heavy lifting!'},
    { name: 'Online Terminal', link:'../html/online-terminal.html', description:'Process payments quickly and easily with our Online “Virtual” Terminal—it’s just like a physical terminal except you can securely access it anytime, anywhere.'},
    { name: 'High Risk Merchants', link:'../html/high-risk-merchants.html', description:'Have you been denied by other processing companies? We make accepting credit cards easy with programs specifically designed for high-risk merchants.'},
    { name: 'Additional Services', link:'../html/additional-services.html', description:'There’s a lot more to your business than credit card processing. We offer some additional services that can help your business service customers better or protect against breaches and chargebacks.'},
    { name: 'Software Solutions', link:'software-solutions.html', description:'At Premier Payment, we pride ourselves in providing the absolute best customer service in the merchant processing industry with 24/7 in-house support and a comprehensive merchant training program.'},
    { name: 'Financial Institutions', link:'../html/financial-institutions.html', description:'All financial institutions differ in the customers they serve and businesses they work with.'},
    { name: 'Software Developers', link:'../html/software-developers.html', description:'Premier Payments provides a secure payment processing solution that can be easily integrated into your point-of-sale (POS) systems.'},
    { name: 'Independent Agents', link:'../html/independent-agents.html', description:'Give yourself the most powerful tools in the industry and gain a premier status with our exceptional Agent Program.' },
    { name: 'Referral Program', link:'../html/referral-program.html', description:'Utilize our online tools and resources for marketing, reporting, and account management all with the security of working with a credible, industry leader.' },
    { name: 'Premier Support', link: '../html/premier-support.html', description:'Our highly trained support staff is happy to offer personalized care along with clear and straight-forward answers to any questions you may have about your processing needs and solutions.' },
    { name: 'Resource Center', link: '../html/resource-center.html', description:'Welcome to Premier Payments’ Resource Center. Here you’ll find all the necessary resources and information you’ll need to learn more about the payment processing solutions industry.' },
    { name: 'How It Works', link: '../html/how-it-works.html', description:'Welcome to Premier Payments’ Resource Center. Here you’ll find all the necessary resources and information you’ll need to learn more about the payment processing solutions industry.' },
    { name: 'Merchant Tips', link: '../html/merchant-tips.html', description:'In any business, paying extra fees for downgrades or losing money on chargebacks are always present but avoidable if the following steps are taken with each transaction.' },
    { name: 'Merchant Technology', link: '../html/merchant-technology.html', description:'Selecting the right credit card processing software really depends on the type of business environment you will be processing payments in.' },
    { name: 'IRS Compliance', link: '../html/irs-compliance.html', description:'New IRS regulations require us as your merchant card processor to report all payments for merchants that meet the following criteria' },
    { name: 'Warranties, Sales & Returns', link: '../html/warranties-sales-returns.html', description:'Please find below our policies regarding warranties, returns and cancellations.' },
    { name: 'Frequently Asked Questions', link: '../html/frequently-asked-questions.html', description:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.' },
    { name: 'Glossary', link: '../html/glossary.html', description:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.' },
    { name: 'PCI Compliance', link: '../html/pci-compliance.html', description:'At Premier Payment, we pride ourselves in providing the absolute best customer service in the merchant processing industry with 24/7 in-house support and a comprehensive merchant training program.' },
    { name: 'About', link: '../html/about.html', description:'As one of the country’s leading merchant services providers, Premier is responsible for powering billions of dollars of secure transactions annually. We deliver the latest technology and world-class customer support to strengthen relationships between merchants and agents and improve the consumer experience.' },
    { name: 'Contact Us', link: '../html/contact-us.html', description:'The Premier Payments office and in-house support center is located in “Portland, OR”' },
    { name: 'Privacy Policy', link: '../html/privacy-policy.html', description:'Premier Payments will never sell your contact information.The following is a privacy policy for Premier Payments LLC, PremierPayments.com and related websites.' },
    { name: 'Contact Support', link: '../html/contact-support.html', description:'Premier Payments is committed to providing the absolute best merchant support in the industry. Please contact our in-house experts at (866) 282-0720 for 24/7 dedicated support.' },
    { name: 'Sitemap', link: '../html/sitemap.html', description:'' },
    { name: 'Search', link: '../html/search.html', description:'Tip: For the best search results, be sure to use specific terms or phrases, such as “card readers” or “online reporting”. If you can’t find what you’re looking for, one of our payment technology experts will be happy to answer any questions you have. Call (866) 282-3135.' }
];
searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const searchText = searchInput.value.trim().toLowerCase();
    
    if (searchText !== '') {
      const matchedSections = sections.filter(section => section.name.toLowerCase().includes(searchText));
      if (matchedSections.length > 0) {
        displayMatchedSections(matchedSections);
        searchResult.style.display = 'block';
      } else {
        searchResult.style.display = 'none';
      }
    }
  });

  function displayMatchedSections(sections) {
    const matchedSectionsContainer = document.getElementById('matchedSections');
    matchedSectionsContainer.innerHTML = '';
  
    sections.forEach(section => {
      const sectionCol = document.createElement('div');
      sectionCol.className = 'col-12 mb-4';
  
      const sectionCard = document.createElement('div');
      sectionCard.className = 'card';
  
      const sectionCardBody = document.createElement('div');
      sectionCardBody.className = 'card-body';
  
      const sectionHeading = document.createElement('h4');
      sectionHeading.className = 'card-title';
      sectionHeading.textContent = section.name;
      sectionHeading.addEventListener('click', function() {
        window.location.href = section.link;
      });
  
      const descriptionSection = document.createElement('section');
      descriptionSection.innerHTML = `<p class="card-text">${section.description}</p>`;
  
      sectionCardBody.appendChild(sectionHeading);
      sectionCardBody.appendChild(descriptionSection);
      sectionCard.appendChild(sectionCardBody);
      sectionCol.appendChild(sectionCard);
  
      matchedSectionsContainer.appendChild(sectionCol);
    });
  }
  

