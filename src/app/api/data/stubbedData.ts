export const stubbedData = [
  {
    id: 1,
    question: `
    A customer has come to you to ask about the difference between React and Next.js and what the benefits are of using Next.js for her team. 
    Please write a response to the customer.
    `,
    profile: `Your customer is Christy (she/her), a project manager for the marketing department of a wearable tech company – in charge of making sure the marketing pages meet their core web vitals, SEO best practices, and conversion rate goals.`,
    answer: `
    Hi Christy, 
    Thank you for reaching out! Let me break this down for you.
    
    React is a library that allows you to create reusable user interfaces using Javascript. However, it doesn't provide the skeletal structure to develop an entire web app.
    Next.js is a framework build on top of React for web development that provides additional features and optimizations such as routing, data fetching, and SEO optimizations that would help with your marketing needs.

    Next.js offer several advantages including:

    1. Faster Performance
    Next.js includes built-in components for images, links, and scripts that help pages load faster by abstracting away the complexity of common UI optimizations.

    2. SEO Optimization
    Metadata allows you to define keywords and content of your website resulting in better SEO.
    Next.js also supports server-side rendering and static asset generation, which pre-renders pages for better SEO and faster load times.
    See more here: https://nextjs.org/docs/app/building-your-application/optimizing.

    3. Conversion Rate Goals
    Next.js has built-in support for measuring site analytics using ReportWebVitals or Vercel's managed service.
    It measures a list of Core Web Vitals to analyze the user experience of a page, which will help with achieving your conversion rate goals.
    
    Next.js provides a comprehensive set of tools to create highly optimized, scalable, SEO-friendly marketing pages. I'd be happy to discuss specific use cases or answer any further questions!

    Kind Regards,
    Julia
    `
  },
  {
    id: 2,
    question: `
    A customer has reached out asking, “When should I choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?ˮ 
    Please write a reply to the customer.
    `,
    profile: `Your Enterprise customer is Trevor (they/them), a front end developer at a winery using Next.js and Statsig and they are primarily interested in being able to use the Vercel platform with Next.js 
    to do personalization when it comes to what they are able to offer in their online shop based on geolocation (some places donʼt allow for shipping of alcohol via delivery).`,
    answer: `
    Hi Trevor! 
    Thanks for reaching out with your question.

    - Edge Functions are serverless functions that run on Vercel's Edge Runtime environment for ultra-low latency (no cold starts) and personalization at speed. They run after the cache, so it is ideal for dynamic API responses, personalized content generation or complex server-side logic.
      See more info: https://vercel.com/docs/functions/runtimes/edge-runtime.

    - Serverless Functions on Vercel are any functions implemented as API routes either in Pages Router or App Router. 
      They are scalable and great for backend logic but may have higher latency due to regional deployments.

    - Edge Middleware also run on Vercel's Edge Runtime environment and is designed to modify the incoming request. It runs before the cache so it can provide rewrites or redirects and geolocation-based content delivery.
      See more info: https://vercel.com/docs/functions/edge-middleware/middleware-api.
    
    Depending on your use case to serve geolocation-based users, both Edge Functions and Edge Middleware can support low latency and A/B testing for user experience experimentation.
    I'd be happy to discuss specific use cases or answer any further questions!

    Kind Regards,
    Julia
    `
  },
  {
    id: 3,
    question: `
    An Enterprise customer has written in asking about ongoing unexpected usage invoices for the last 6 months and threatens to move their services to the AWS platform if overages are not forgiven immediately. 
    Please write a response to the customer. Outside of the email response, please outline steps you would take to triage the issue at hand – i.e., how you would go about getting the information you need to complete the picture before you responded.
    `,
    profile: `
    Your Enterprise customer is Leonardo (he/him), a front end developer from an SMB company that has a multi-tenant application on Vercel. 
    Their usage is very much dependent on how much their customers use their platform. They are very price sensitive and need to keep their monthly payments at a certain price point, but donʼt have the 
    bandwidth to really spin up their own infrastructure by moving to AWS.
    `,
    answer: `
    Hi Leonardo,
    Thanks for reaching out with your question. We apologize for the inconvenience or confusion this may have caused for you.

    Pricing on Vercel for Managed Infrastructure is usage based while Developer Experience Platform services come at a fixed rate. With the Enterprise plan, you are allotted a balance of Management Infrastructure Units (MIU) for each billing cycle. Once the commitment has been exceeded, the on-demand charges for each resource will be applied. Since pricing is usage and resource based, we would look into how each resource is triggered and the types of user interactions on your application from the past 6 months.

    We would be more than happy to walk through your account's invoices and discuss additional ways to manage your usage of our services.
    Please open a support ticket and provide your invoice ID, account email, and team name so we can take a look.

    Kind Regards,
    Julia 

    ---
    To Triage:

    1. Gather information (i.e.- account ID) about Leonardo's Enterprise account and any new major releases from their product development in the past 6 months.
    2. Analyze the past year of resource usage for their Managed Infrastructure. Highlight any resources that accrued on-demand charges or spiked significantly.
    3. Circle back with Leonardo on the resources with increased charges to understand the development changes that may have caused it.
    4. Recommend optimizations for current resource usage (i.e.- function duration, regional deployment, etc.) or suggest other lower-priced resource offerings.
    5. Recommend setting up usage alerts and notifications of various thresholds to alleviate future pricing concerns.
    `
  }, 
  {
    id: 4,
    question: `
    A customer who has been sold Vercel through a reseller called Sitecore has reached out to the team to ask about the product. 
    Can you give a brief 2-5 sentence introduction to Vercel to showcase what Vercel does?
    `,
    profile: `Your new Enterprise customer is Acme Universityʼs Marketing Department and their lead point person is called Clara (she/her). They have no web development background and donʼt know what Vercel is.`,
    answer: `
    Hi Clara, 
    Thanks for reaching out. I'd be happy to provide a brief overview of Vercel.

    Vercel is a platform that helps developers build and deploy modern web applications with ease. It offers a variety of features such as instant global deployment and edge functions to deliver fast, scalable user experiences. It's akin to all the magic that happens at the back of the house vs. front of the house at a restaurant. Best of all, it seamlessly integrates with Next.js, a frontend framework with optimizations to boost SEO and conversion rates.
    
    Here's a quick read on web development with Vercel: https://vercel.com/blog/what-is-vercel.

    I'd be happy to schedule a call for a demo and discuss specific use cases or answer any further questions!

    Kind Regards,
    Julia
    `
  },
  {
    id: 5,
    question: `
    An Enterprise customer is just getting started with Vercel and has questions about recommended options for third-party integrations for Monitoring or Logging and best practices when it comes to observability. 
    How would you respond to the customer?
    `,
    profile: `
    Your new Enterprise customer is Evelyn, team lead at an aeronautics company whose team primarily oversees the enablement, outreach, and careers pages of the website.
    `,
    answer: `
    Hi Evelyn! 
    Thanks for reaching out. Let me break this down for you.

    Out of the box, Vercel provides several features to analyze traffic and application performance. 
    - Observability allows you to monitor infrastructure performance through a variety of insights such as serverless functions, edge functions, and edge requests. 
    - Monitoring allows you query and visualize bandwidth, errors, and traffic for your performance. 
    - Web Analytics provides a detailed breakdown of page views and visitors for each page of your website.

    However, if you're interested in third-party integrations, you can integrate with OpenTelemetry collector to send traces from your serverless or edge functions to vendors like New Relic or DataDog. 
    You may also export to an unsupported vendor by creating a custom OTEL exporter.
    Please note, these are currently available in Beta to Enterprise plans. It requires light configuration on your end and the integration of the vendor's SDK. See more info here:
    https://vercel.com/docs/observability/otel-overview.

    I'd be happy to schedule a call for a demo and discuss specific use cases or answer any further questions!

    Kind Regards,
    Julia
    `
  },
  {
    id: 6,
    question: `
    An Enterprise customer, new to Next.js and Vercel, asks about a high usage bill regarding fast origin transfer and fast data transfer. 
    They have two questions:

    Why didnʼt my MIUs cover this bill? I didnʼt use all my MIUs last month...so why didnʼt those roll over?
    What would be the best way to help mitigate this so we donʼt see these overage bills in the future?

    (MIU == Managed Infrastructure Unit and is a monthly entitlement for usage purchased by a customer that does not roll over every month.)
    `,
    profile: `
    Your Enterprise customer is an SMB customer, under 50 employees, with an ARR of $18,500. Their last overage bill was $1,800 and consisted primarily of fast data transfer and function duration.
    `,
    answer: `
    Hello, 
    We apologize for the inconvenience this may have caused for you.

    Managed Infrastructure Units (MIU) at Vercel are based on a periodic commitment detailed on your invoice. Once the commitment has been exceeded, the on-demand charges will begin to incur. 
    MIUs do not roll over to the next billing cycle, so any unused credits will be lost.

    - Fast data transfer and fast origin transfer are both resources that rely on regional pricing, which is dependent on your traffic's region and data volume transferred.
    You can view pricing by resources here: https://vercel.com/docs/pricing#managed-infrastructure.
    - Function duration is priced based on the actual time elasped during the invocation. You may configure max duration limits or look into optimizing the performance of your Vercel functions.
    You can view configuration for function duration here: https://vercel.com/docs/functions/runtimes#max-duration.

    You may customize notifications to alert you at various thresholds of your MIU commitment to monitor usage.

    I would be more than happy to walk through your invoice and discuss additional ways to manage your usage of our services. 
    Please open a support ticket and provide your invoice ID, account email, and team name so we can take a look.

    Kind Regards,
    Julia

    `
  },
  {
    id: 7,
    question: `
    What resources would you want to prepare to make sure that the CISO of a newly signed Enterprise customer has everything they need to succeed as they migrate to the Enterprise version of the platform? 
    Feel free to use documentation from vercel.com, and our YouTube channel to find assets to help.
    `,
    profile: `
    Your customer is Ty, a CISO for a Fortune500 firm that just signed on for Enterprise with Vercel Secure Compute. They would like to discuss the security products Vercel offers as well as Enterprise offering and roadmap.
    `,
    answer: `
    Hi Ty,
    Welcome to the Enterprise Plan of Vercel! This includes customizable features for faster performance, advanced security configuration, dedicated support. Here's a breakdown of what this includes: https://vercel.com/docs/accounts/plans/enterprise.

    The security features that come with Enterprise plan include SSO/SAML Login, Compliance measures, advanced access management, Secure Compute, Firewall configurations. In the past year, Vercel has shipped powerful features for robust security including:
    - TLS infrastructure that manages and autorenews certificates
    - Secure Compute to create private connections around your application and connected services
    - Vercel Web Application Firewall allows rule-based controls over your traffic

    I would be more than happy to expand on any of these offerings and discuss any additional features you'd be interested in for your use case.

    Kind Regards,
    Julia
    `
  },
  {
    id: 8,
    question: `How could we improve or alter this familiarization exercise?`,
    profile: `N/A`,
    answer: `The customer profiles are incredibly helpful when framing a response! An added challenge could be to craft a response given an existing email thread vs. triaging the issue from the start. This would also introduce the applicant to the Enterprise customer support process at Vercel.`
  }
]