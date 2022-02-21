import React from 'react';

export const categories = {
  all: 'All',
  general: 'General',
  dapis: 'dAPIs',
  marketplace: 'Marketplace',
  smart_contracts: 'Smart contracts',
  kumuluz_token: 'Kumuluz Token',
  team: 'Team',
  other: 'Other'
};

export const QAndAs = [
  {
    categories: ['general'],
    question: 'What is Kumuluz?',
    anwser: (
      <div>
        <p>
          Kumuluz is a software platform, which considerably speeds-up the development of blockchain applications, makes applications
          technology agnostic, scalable, resilient and secure.
        </p>
        <p>
          First, Kumuluz provides a set of building blocks, which development teams can use for their own applications.
          Similarly, as new cars are developed using platforms, which allow them to combine different parts, such as engine, transmissions,
          etc. between different models, so does Kumuluz provide software building blocks that are essential for blockchain applications.
        </p>
        <p>
          Second, Kumuluz provides abstraction layer, through which your code is not directly dependent to a specific distributed
          ledger technology (such as Ethereum, …) or a specific storage or database system, etc. This reduces risks for making wrong
          technology decisions upfront and improves flexibility and adaptability of your code and applications.
        </p>
        <p>
          Third, Kumuluz allows your applications to be deployed and executed on any decentralized or centralized cloud, without
          modifications in your code.
        </p>
      </div>
    )
  },
  {
    categories: ['general'],
    question: 'What are the use cases for the Kumuluz platform?',
    anwser: (
      <div>
        <p>
          Kumuluz platform will significantly improve the software development process in traditional startups, ICO startups, enterprises,
          governments, in open source and commercial projects, or in projects led by independent developers and freelancers. Instead of
          writing thousands of lines of code from scratch, developers will be able to fasten the development by using pre-build dAPIs,
          such as user management dAPI, know your customer dAPI, payment service dAPI, shopping cart dAPI, order management dAPI, invoicing
          dAPI, decentralized CMS dAPI or customer engagement dAPI. Consequently, months of hard work can be reduced to a few weeks.
        </p>
      </div>
    )
  },
  {
    categories: ['general'],
    question: 'How long has Kumuluz existed?',
    anwser: (
      <div>
        <p>
          The origins of Kumuluz go back to October 2013 when our core team started to dedicate more and more time to mastering microservices,
          APIs and all the technologies around the architecture. In February 2014 team started with the development of the initial Kumuluz
          microservice framework, having in mind a real comercial use cases. Our work was soon recognized on national and international level
          as our platform became the finalist of national Start:up of the year competition and received EuroCloud award for the most innovative
          cloud service. In September 2014 our team started to work on another important Kumuluz platform module, a module for API management.
          In year 2015 Kumuluz received one of the most prestigious awards: Java Duke’s Choice Award. In years 2016 and 2017 more and more
          customers started to use Kumuluz products, while the Kumuluz team released a set of extensions for the Kumuluz microservice framework.
          This brings us to October 2017 when our team started serious work on proof of concept for decentralized microservices = dAPIs.
        </p>
      </div>
    )
  },
  {
    categories: ['general'],
    question: 'Is Kumuluz platform based on blockchain technology?',
    anwser: (
      <div>
        <p>
          Yes, Kumuluz platform is based on blockchain technology that drives our digital platform for blockchain applications. Blockchain
          technology is the basic fabric used for the distributed network of nodes for the execution of dAPIs. This way Kumuluz will be the
          first one to provide support for truly decentralized business logic. Furthermore, blockchain technology allowed us to build transparent
          and verifiable system for all participants of the Kumuluz platform, especially dAPI developers and miners, as well as regular token holders.
          Kumuluz platform will record the events of interactions between the participants in the blockchain ledger.
        </p>
      </div>
    )
  },
  {
    categories: ['general'],
    question: 'What are the core benefits that developers enjoy with using Kumuluz?',
    anwser: (
      <div>
        <p>
          Kumuluz microservice and API framework provides a sophisticated, decentralized microservice framework and API platform (with API
          gateways and management), everything custom tailored for blockchain and decentralized applications.
        </p>
        <p>
          It supports different languages, cloud-native patterns (config, discovery, health, metrics, …), elasticity, fault-tolerance,
          event-streaming, reactive programming, etc.
        </p>
        <p>With Kumuluz developers of dApps and digital solutions can:</p>
        <ul>
          <li>
            <b>Reduce Time-to-market</b>: Fast-track your development. Develop blockchain applications 3x faster by using Kumuluz building
            blocks, which provide complete functionalities for common use cases
          </li>
          <li>
            <b>Reduce faults and down-time</b>: Kumuluz based applications are resilient and use the most advanced fault-tolerance
            mechanisms, such as circuit-breakers, fallback mechanisms, bulkheads and others to guarantee resilient and failer-free operation
            under any circumstances.
          </li>
          <li>
            <b>Improve flexibility and mitigate risks</b>: With the new abstraction layer there is no vendor lock-in, the code can be
            written once and run anywhere.
          </li>
          <li>
            <b>Improve scalability and elasticity</b>: Kumuluz based applications are infinitely scalable, elastic and can adapt to the
            increasing workloads
          </li>
          <li>
            <b>Improve security</b>: Kumuluz uses new, advanced security mechanisms as a combination of trust protocol, OAuth2, OpenID
            connect, permissioned and permissionless blockchains, etc.
          </li>
        </ul>
      </div>
    )
  },
  {
    categories: ['general'],
    question: 'How Kumuluz speeds-up the development of dApps and other digital solutions based on blockchain?',
    anwser: (
      <div>
        <p>
          Kumuluz provides decentralized APIs and microservices (dAPIs) as building blocks which accelerate development by at least 3
          times. You can select and use the dAPIs from the Kumuluz marketplace, which is a decentralized marketplace for dAPIs.
          You can also publish your dAPIs and allow other to use it.
        </p>
      </div>
    )
  },
  {
    categories: ['general'],
    question: 'How Kumuluz reduces the development risks with abstraction layer?',
    anwser: (
      <div>
        <p>Kumuluz reduces risks with providing cloud, blockchain and integration abstraction layers.</p>
        <p>
          Kumuluz provides <b>cloud abstraction layer</b>, which allows you to pack, deploy and run your applications on any centralized or
          decentralized cloud without further modifications. You can even combine both and run parts of your application on the most
          suitable cloud of your choice. This way, you can reduce risks related to cloud technology.
        </p>
        <p>
          Kumuluz provides a <b>blockchain abstraction layer</b>, which allows software developers to develop application independently of
          the chosen DLT and smart-contract platform. You can switch between supported DLTs and smart contract platforms without changing
          your code.
        </p>
        <p>
          Kumuluz provides an <b>integration layers</b> with pre-build API adapters for easy integration with crypto exchanges, fiat banking
          systems through PSD2 APIs, SEPA and SWIFT. It also provides adapters for integration with enterprise information systems,
          including ERP and CRM (SAP, Dynamics, Salesforce, etc.) and integration technologies, such as REST, SOAP, Message Queue, RPC and
          others.
        </p>
      </div>
    )
  },
  {
    categories: ['general'],
    question: 'What are the main technical highlights?',
    anwser: (
      <div>
        <p>The main technical highlights of Kumuluz are the following:</p>
        <ul>
          <li>
            Decentralized and distributed: Kumuluz introduces fully decentralized APIs and microservices as the foundation for
            decentralized cloud-native applications
          </li>
          <li>Completely open, secure and extensible: Kumuluz is completely open, secure and extensible with zero vendor lock-in</li>
          <li>
            Interoperable: Kumuluz helps you integrate your blockchain applications with existing business applications and protocols (such
            as FIAT, PSD2, SEPA, SWIFT, etc.)
          </li>
          <li>Praxis proven: Kumuluz is already used by several companies</li>
        </ul>
      </div>
    )
  },
  {
    categories: ['general'],
    question: 'How Kumuluz addresses the GDPR issues?',
    anwser: (
      <div>
        <p>
          Kumuluz provides sophisticated security mechanisms based on OAuth2 and OpenID Connect and encryption. It provides federation with
          LDAP and IAM (Identity and Access Management) systems. Also, Kumuluz provides support for permissioned and permissionless
          dAPIs using the trust protocol.
        </p>
      </div>
    )
  },
  {
    categories: ['general'],
    question: 'Are there any other important features of Kumuluz?',
    anwser: (
      <div>
        <p>
          Applications developed using Kumuluz feature beautiful and start-of-the-art UX using open frameworks for web, mobile and voice
          controlled UIs.
        </p>
        <p>With Kumuluz, you can build AI and machine learning solutions and integrate them into your digital applications.</p>
      </div>
    )
  },
  {
    categories: ['general'],
    question: 'Who are Kumuluz’s competitors?',
    anwser: (
      <div>
        <p>
          To the best of our knowledge, Kumuluz does not have any direct competitors; it is the first platform for building truly
          decentralised APIs. Kumuluz platform goes hand in hand with existing blockchain projects as it enables developers to
          integrate existing blockchain platforms in order to build new blockchain applications.
        </p>
      </div>
    )
  },
  {
    categories: ['dapis'],
    question: 'What are dAPIs and how do they work?',
    anwser: (
      <div>
        <p>
          dAPIs are the next generation fully decentralized APIs, implemented as decentralized microservices. They have been designed
          for decentralized execution in a similar way as the Blockchain distributed ledger is used for decentralized storage. dAPIs
          are permissioned or permissionless, operation or event driven, support a variety of protocols, such as REST, gRPC, GraphQL,
          event streaming, etc., improved resilience, fault-tolerance, scalability and security.
        </p>
      </div>
    )
  },
  {
    categories: ['dapis'],
    question: 'What are the benefits of dAPIs in comparison with traditional APIs?',
    anwser: (
      <div>
        <p>
          dAPIs do not depend on a centralised system for their execution and thus have improved fault-tolerance. Decentralised execution
          guaranties the correctness of  returned results and prevents frauds. Developers can shorten their development time by using
          pre-built dAPIs from the marketplace or publish their own dAPIs on the marketplace and collect licensing fees.
        </p>
      </div>
    )
  },
  {
    categories: ['dapis'],
    question: 'How are dAPIs different than smart contracts?',
    anwser: (
      <div>
        <p>
          Smart contracts are typically used for manipulating the data stored on the distributed ledger. They are written in a dedicated
          programming language that supports a limited set of operations specific to the platform. dAPIs are fully blown microservices
          that can execute any business logic which is today typically executed in the centralised clouds. dAPIs can be written in software
          frameworks and programming languages that are widely used today.
        </p>
      </div>
    )
  },
  {
    categories: ['dapis'],
    question: 'What are the roles associated with dAPI development?',
    anwser: (
      <div>
        <p>
          <b>dAPI developers</b> develop dAPIs and publish them in the marketplace for others to use. <b>dAPI miners</b> dedicate their
          resources to test, verify and validate dAPIs to guarantee bug and error-free operation and 24/7 availability of
          dAPIs. <b>dAPI consumers</b> search, find and use Kumuluz dAPIs, published in the marketplace and distributed as decentralized
          APIs and microservices (containers).
        </p>
      </div>
    )
  },
  {
    categories: ['dapis'],
    question: 'How complex is the development of new dAPIs?',
    anwser: (
      <div>
        <p>
          dAPI development is fairly simple. Complex dAPIs can be composed from existing dAPIs that can be found in the marketplace. If
          no adequate dAPIs can be found, a new dAPI can be developed using simple software development approaches, with  support for a
          variety of protocols, such as REST, gRPC, GraphQL, event streaming, etc., improved resilience, fault-tolerance, scalability and
          security.
        </p>
      </div>
    )
  },
  {
    categories: ['dapis'],
    question: 'How can I become a developer of dAPIs?',
    anwser: (
      <div>
        <p>
          First you will have to register as a developer to the Kumuluz platform. You will receive instructions and a sample dAPI project
          demonstrating the best practices for developing dAPIs. When you finish with the development of dAPI, you publish your code for
          testing which will be performed by dAPI miners. If your dAPI will reach required quality, it will be published to dAPI marketplace.
        </p>
      </div>
    )
  },
  {
    categories: ['marketplace'],
    question: 'What will be available on the marketplace?',
    anwser: (
      <div>
        <p>
          Marketplace is a central place where developers can find pre-built dAPIs or publish, license and sell their custom-build dAPIs.
        </p>
      </div>
    )
  },
  {
    categories: ['marketplace'],
    question: 'What are pre-built dAPIs?',
    anwser: (
      <div>
        <p>
          Pre-built dAPIs offer reusable functionalities that can be easily added to your application instead of coding everything line by
          line. Pre-built dAPIs can accelerate the development by an order of magnitude and result in more reliable applications, as dAPIs
          are pretested. Composing applications out of pre-built dAPIs opens a new perspective on how decentralized applications can be
          developed more efficiently, with less code and in shorter time.
        </p>
        <p>Already developed dAPIs</p>
        <ul>
          <li>
            User/Customer Management, Registration, Login
          </li>
          <li>
            Customer engagement and Communication Management (push, email, sms, telegram, FB messenger, …)
          </li>
          <li>
            KYC/AML
          </li>
        </ul>
        <p>dAPIs in pipeline</p>
        <ul>
          <li>
            FIAT Payment service
          </li>
          <li>
            Crypto Payment service
          </li>
          <li>
            Wallet
          </li>
          <li>
            Shopping Cart
          </li>
          <li>
            Order Management
          </li>
          <li>
            Fulfillment
          </li>
          <li>
            Invoice
          </li>
          <li>
            Billing
          </li>
          <li>
            Subscription Management
          </li>
          <li>
            Smart contract templates
          </li>
          <li>
            Product Catalogue
          </li>
          <li>
            Reporting
          </li>
          <li>
            Revision log
          </li>
          <li>
            Transaction Management
          </li>
          <li>
            Decentralized CMS
          </li>
          <li>
            CDN
          </li>
          <li>
            Document Management Vault
          </li>
          <li>
            Office Connector
          </li>
        </ul>
      </div>
    )
  },
  {
    categories: ['marketplace'],
    question: 'How do developers contribute to the marketplace?',
    anwser: (
      <div>
        <p>
          Developers have to register to the Kumuluz platform. When they develop a new dAPI, they have to publish their code for testing
          which will be performed by dAPI miners. If proposed dAPI will reach required quality, it will be published to dAPI marketplace.
        </p>
      </div>
    )
  },
  {
    categories: ['marketplace'],
    question: 'How do developers get paid for developing dAPIs?',
    anwser: (
      <div>
        <p>
          Kumuluz dAPIs and marketplace are powered by Kumuluz Token, which is used as a payment currency for Kumuluz dAPIs. A
          dAPI provider will earn Kumuluz Tokens for dAPIs used by consumers. Kumuluz miners will be paid for taking care for
          reliability of published dAPIs.
        </p>
      </div>
    )
  },
  {
    categories: ['marketplace'],
    question: 'How will the quality of the dAPIs on the marketplace be assured?',
    anwser: (
      <div>
        <p>
          dAPIs on the marketplace will be tested, verified and validated by the miners which will ensure their quality.
        </p>
      </div>
    )
  },
  {
    categories: ['smart_contracts'],
    question: 'Will development teams be able to use APIs and microservices (dAPIs) for free?',
    anwser: (
      <div>
        <p>
          Kumuluz dAPIs can be free to use and open source. Or, they can require a compensation for using them. Kumuluz
          introduces a new, innovative licensing and IP (Intellectual Property) management solution, which uses smart contracts and allows
          dAPI providers to specify different use cases and prices based on usage scenarios. Smart contracts and Kumuluz run-time ensure
          that compensation takes place immediately after usage automatically.
        </p>
      </div>
    )
  },
  {
    categories: ['smart_contracts'],
    question: 'What are smart contracts?',
    anwser: (
      <div>
        <p>
          Smart contracts help you exchange assets in a transparent, conflict-free way while avoiding the services of a middleman. Smart
          contracts define a protocol intended to digitally facilitate, verify, or enforce the negotiation or performance of a contract.
          Smart contracts allow the performance of credible transactions without third parties providing traceability and irreversibility
          of the transactions.
        </p>
      </div>
    )
  },
  {
    categories: ['smart_contracts'],
    question: 'What are smart contracts for dAPIs?',
    anwser: (
      <div>
        <p>
          Licensing of dAPIs can be specified with smart contracts &mdash; an innovative way of managing intellectual property, which allows
          dAPI developers to specify pricing models that are fulfilled automatically each time somebody uses a dAPI. Smart contracts and
          Kumuluz run-time ensure that compensation takes place immediately after usage automatically.
        </p>
        <p>Kumuluz licensing model allows developers to specify almost any pricing model, such as:</p>
        <ul>
            <li>
              subscription,
            </li>
            <li>
              pay-per-call,
            </li>
            <li>
              usage scenario (using a dAPI for testing is free, for production is charged per call or per transaction or subscription based),
            </li>
            <li>
              can be free of charge up to a specific number of requests daily, afterwards its charged,
            </li>
            <li>
              number of users or data load,
            </li>
            <li>
              execution environment parameters,
            </li>
            <li>
              other models.
            </li>
        </ul>
        <p>Kumuluz licensing and IP management reduces frauds and eliminates unauthorized and unlicensed usage of software.</p>
      </div>
    )
  },
  // {
  //   categories: ['kumuluz_token'],
  //   question: 'What is Kumuluz Token and what is it used for?',
  //   anwser: (
  //     <div>
  //       <p>
  //         Kumuluz Token is a utility token on the Kumuluz platform that can be used as a payment for purchasing and using dAPIs and as
  //         a payment for developers and miners. Kumuluz Token will also be used as an incentive schema for developers and miners on the
  //         Kumuluz Marketplace; developers will be rewarded for contributing new dAPIs (based on their functionality, quality and popularity)
  //         and miners will be rewarded based on the quality, quantity and speed of dAPI verification.
  //       </p>
  //     </div>
  //   )
  // },
  /*{
    categories: ['kumuluz_token'],
    question: 'Why is Kumuluz Token a great investment?',
    anwser: (
      <div>
        <p>
          dAPIs have the potential to become one of the most important technologies for the development of decentralized applications. This
          means that every developer, every startup, every ICO company, every enterprise and every government will be a potential user of
          dAPIs and Kumuluz platform, which represents a huge opportunity. Kumuluz is the platform and the tool for everybody who wants to
          succeed in the digital economy and in blockchain. Large market means that the Kumuluz Token will have enormous potential for
          growth. Due to limited supply on one hand and increasing projected demand on the other hand, the Kumuluz Token will grow faster
          that the rest of the blockchain economy. This makes Kumuluz Token a great investment.
        </p>
      </div>
    )
  },
  {
    categories: ['kumuluz_token'],
    question: 'Who will buy Kumuluz Token?',
    anwser: (
      <div>
        <p>
          We are focused on the following audiences:
        </p>
        <ul>
          <li>
            ICO startups that want to build their blockchain solutions fast and with reduced risk.
          </li>
          <li>
            Traditional startups that want to be able to adapt quickly and leverage the blockchain technology.
          </li>
          <li>
            Big brands and multinationals that want to make fast transition to the blockchain.
          </li>
          <li>
            Governments that want to improve their efficiency with blockchain.
          </li>
          <li>
            Developers and freelancers working on different blockchain projects, looking for frameworks that will improve their productivity.
          </li>
          <li>
            Traditional blockchain community.
          </li>
        </ul>
      </div>
    )
  },*/
  // {
  //   categories: ['kumuluz_token'],
  //   question: 'How can I mine Kumuluz Token?',
  //   anwser: (
  //     <div>
  //       <p>
  //         You can mine Kumuluz Token by testing, verifying and validating dAPIs to guarantee bug and error-free operations.
  //       </p>
  //     </div>
  //   )
  // },
  {
    categories: ['team'],
    question: 'Who is developing Kumuluz?',
    anwser: (
      <div>
        <p>
          Kumuluz platform is developed by a team of experts that have already worked together on several successful projects. The
          team consists of developers, designers and business people with proven track-record (research or business based). We are
          all strong believers in the blockchain technology and we made our mission to help accelerate the development of different
          blockchain applications and digital solutions.
        </p>
      </div>
    )
  },/*
  {
    categories: ['team'],
    question: 'How many team members does Kumuluz have?',
    anwser: (
      <div>
        <p>
          You can find more information about Kumuluz team <a href="/team">here</a>.
        </p>
      </div>
    )
  },*/
  {
    categories: ['team'],
    question: 'Is Kumuluz hiring?',
    anwser: (
      <div>
        <p>
          Yes, we are hiring. If you are interested, contact us
          at <a href="mailto:info@kumuluz.io" target="_blank" rel="noopener noreferrer">info@kumuluz.io</a>
        </p>
      </div>
    )
  },
  // {
  //   categories: ['other'],
  //   question: 'I can’t find the answer to my question: where can I get help?',
  //   anwser: (
  //     <div>
  //       <p>
  //         Join our <a href="https://t.me/kumuluz" target="_blank" rel="noopener noreferrer">Telegram group</a> and
  //         feel free to ask any questions that you may have.
  //       </p>
  //     </div>
  //   )
  // }
];
