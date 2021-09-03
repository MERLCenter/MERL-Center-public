---
layout: blog-post
title: A Guide to Evaluating Open Source versus Proprietary Software for Data Workflows in the Social Sector
authors:
  - author: Stephanie Coker
    authorTitle: Evaluation & Learning Consultant at TCC Group
    authorGitHubHandle: scoker-me
    authorGitHubID: 55405623
  - author: Ben Kinsella
    authorTitle: Technical Project Manager, DataKind
    authorGitHubHandle: bjk127
    authorGitHubID: 25569016
tags:
  - tag: Data Collection and Management
  - tag: Data Analysis and Visualization
  - tag: Reporting

# images should be in the /assets/img/posts/ folder
featuredImage:

outgoing: false
outgoingUrl:

---

# Introduction
Given the central role digital technologies play across many industries, the social sector has benefited enormously from Open Source software (OSS). In 2020, GitHub, the largest software development platform in the world, observed over 1.9 billion contributions to projects, representing a 25% increase in open source repositories from 2019. The proliferation of OSS offers social sector leaders and practitioners the opportunity to innovate and collaborate using digital technologies, providing novel alternatives to proprietary software.
					
When selecting new digital technologies - particularly those needed to manage, analyze, and transform data - practitioners in the social sector often face the decision whether to choose an OSS solution over a proprietary one. Most data workflows have viable and popular OSS alternatives to proprietary tools. For example, a data analyst may need to choose between a proprietary visualization tool, such as Tableau, and the open source package, ggplot2 in R. Or a Monitoring and Evaluation (M&E) professional may need to choose between ArcGIS or its OSS equivalent, QGIS, a geographic information system application. In these cases, among others, there are a number of elements to consider, in addition to the software’s costs or available features. Rather, the decision to choose an OSS versus a proprietary solution is nuanced and must be weighed carefully. 

This Beginner’s Guide explores these nuances, outlining common trade-offs, relevant costs, and security and privacy concerns that are most common when evaluating OSS versus proprietary software. The goal of this Beginner’s Guide is to offer practitioners in the social sector, namely M&E professionals, data analysts, software engineers, among others, a summary of potential tradeoffs.These insights were gathered from conversations with social sector professionals, as well as a survey conducted online. Below we provide a summary of our methods and analysis, a high-level summary of our findings, and a framework to evaluate OSS versus proprietary solutions.  

# Methods
To understand the potential tradeoffs when evaluating OSS versus proprietary software within the context of data, this Beginner’s Guide adopted a triangulated approach. First, desk research was conducted to establish a knowledge baseline and broadly understand the common tradeoffs between OSS and proprietary solutions. Next, a survey was designed and disseminated via professional networks of program managers, data analysts, M&E professionals, and software developers. The survey(n=24) captured both quantitative and qualitative responses regarding the common constraints and considerations that practitioners take into when evaluating OSS and proprietary software. Using these responses as a guide, semi-structured interviews  were conducted with practitioners (n=6) in the social impact space, including  data scientists (n=1), software engineers (n=3), and monitoring and evaluation professionals (n=3). Triangulating these data with survey responses and desk research, the team conducted descriptive analyses to identify thematic topics and common constraints when evaluating OSS and proprietary software. 

# Key terminology 
In this Beginner’s Guide, OSS is broadly defined as software that is freely distributed and uploaded to an accessible repository that provides source code. More specifically, code, data, or content has to be under an open source license, insofar that the code base is accessible at no cost (see The Open Source Initiative for further outline and definitions). Proprietary software, on the other hand, is copyrighted, such that limits against use, distribution, and/or modification are imposed by the copyright holder. Moreover, along the continuum of software development licenses also exists a business model known as Open Core. That is, Open Core is generally understood as the monetization of commercially produced OSS, proprietary add-ons that provide additional features that come with a commercial license. Examples of Open Core Software include many Service (SaaS) products, like Kafka, a data streaming service under Apache 2.0, Oracle’s MySQL database, Neo4j with the enterprise addition under a commercial license, among many others. To conceptualize the range of differences between OSS, Open Core, and proprietary software, see Figure 1:

**Figure 1: Open Source, Open Core, and Proprietary Software Continuum**
![Open Source Proprietary Continuum](/assets/img/posts/open-source-proprietary-continuum.png)
	
# Summary of findings
When evaluating OSS and proprietary software, four considerations were identified across the interviews and survey’s results. More specifically, practitioners maintained that software interoperability - the ability for their solution to “understand” and work with other software - was imperative, given many teams’ cross-functional work. Costs were also a salient theme, insofar that it is not just about the price of a solution but also the indirect and opportunity costs associated with building, deploying, and maintaining the solution. However, getting support for these decisions requires leadership buy-in and data mature organizations, which are critical to improve and increase data-related activities. So, too is the adherence to ethical and legal considerations. For summary of the findings, See Table 1. 

**Table 1: Summary of Findings**

**Common constraint/theme**|**Definition**
:-----:|:-----:
Interoperability | The ability for a software product or system to “understand” and work with other software solutions in both the implementation and execution over the long-term.
Direct and Indirect Costs | Costs, either direct or indirect, which can be incurred at any time during the lifecycle of the software solution, including the purchasing of tools, labor costs, opportunity costs when building, deploying, or maintaining the solution, among others. 
Organizational Data Maturity and Leadership Buy-in | The support and overall capability within an organization and leadership  to improve and increase data-related activities, included but not limited to data quality, skills, culture, application, among others. 
Ethical and Legal Considerations | The adherence to ethical and legal considerations, such as data security and privacy policies (e.g., GDPR, HIPAA, etc.), design and community accountability, among others.

## Interoperability 
The first consideration practitioners evaluated their decision against was the compatibility of their solution with other existing proprietary or OSS tools. That is, interoperability - which is defined as the ability for a software product or system to understand and work with other software solutions - played a central role in choosing products that are both sustainable and impactful. For example, does the solution recognize common data formats and communication protocols and are capable of communicating with each other? Can you output the data in other formats (e.g., a csv file), which you can share with other team members? Can the solution be used and shared by multiple stakeholders and groups? 

> "If I consider the non-open source products I use like AirTable or Excel/PowerBI, then I use them because they are easy to use and to distribute to third parties. Much of my work is about handing over products and ideas in a sustainable manner so that others can run with it and as a consultant providing MERL advisory services for example, I don't have time to manage the environments to build reliable products so I inevitably go to what is the lowest common denominator...I have had success however combining a lighter internal only open source environment (R for example) and then using APIs or databases, I create bridges to Dropbox or Office365 to provide the interface my clients (African government staff) know."

##### - Survey respondent working in Data Science/Analysis and Monitoring, Evaluation, Research and Learning, with more than five years of experience with senior experience of Open Source tools (e.g. more than five years experience / part of primary job functions).

## The software development lifecycle
How and when a software is built, deployed, and maintained offers several considerations for practitioners. For both OSS and proprietary tools, the long-term direction and support of products implicate decisions that practitioners must take in order to choose the right software solutions. In both the survey and semi-structured interviews, evaluating solutions based on how it is updated and maintained is critical, particularly along the lines of a solution’s innovation and staying “up to date”. This notion also raised the importance of identifying solutions with an active community or company that are responsible for the quality, safety, and support of a software. OSS communities or proprietary solutions make continuous improvements to the solution to ensure long-term support and updates to user-friendly interfaces. 

> "A Major concern is the support of the open source community to a specific tool, sometimes you select a good solution that in a couple of years stops being supported (for multiple reasons)"

##### - Survey respondent working in Data Science/Analysis and Monitoring, Evaluation, Research and Learning, with more than five years of experience with senior experience of Open Source tools (e.g. more than five years experience / part of primary job functions). 

> "The biggest constraints I face...is that with either Open Source or proprietary software I need to consider the long term direction and support of the product. In niche markets, proprietary solutions can disappear with small companies while Open projects can stagnate with limited contributions. Either pose a risk."

##### - Survey respondent working in Data Science/Analysis and Monitoring, Evaluation, Research and Learning, with intermediate experience of Open Source tools (e.g. 2-5 years experience / was once but is no longer part of primary job responsibilities).

## Costs of building, deploying, and maintaining solution
Several participants identified costs as significant factors when evaluating different software solutions. Costs, however, include more than just direct costs, like the price of purchasing a proprietary tool. There are a multiplicity of costs that emerge from additional activities (e.g., direct costs, opportunity costs when building it, understanding what to buy, maintainers, etc.). There were several exogenous factors associated when adopting OSS solutions, and general unwieldiness. These included issues like lack of troubleshooting or fixing broken code. Who will be maintaining or fixing? External consultants? Trained staff? Also evaluating the software’s true costs and understanding different features and business model (e.g., Free and Open Source, Open Core, etc.)

> "I think that’s the biggest hurdle. For example, using a package in Python versus a whole data workflow set up in Python. People often don’t know how to differentiate the two. Another example , KoBoToolbox is built on Open Data Kit, people will often have a hard time distinguishing between KoBoToolBox and ODK, when people are comparing these tools, it’s not often equivalent, especially in terms of cost. Hosting an ODK instance might actually cost less, but KoBoToolbox in the long run might be better for the needs because of user interface. When you tell the management team what we’re comparing, they often fixate on the brands. It's hard to explain to management."

##### - Software Developer Interviewee

## Organizational Data maturity and Leadership Buy-In
Driving for change within an organization requires not just the availability of tools, but also overall support and leadership buy-in for making data-related decisions within an organization. Data maturity, which is broadly understood as the collective duty and goal to prioritize and respond to responsible data practices, is imperative as social organizations must make efforts to have an institutionally strong data culture. In many instances, as conveyed by survey respondents, decisions do not necessarily depend on the part of the software developer or technology team. Rather, decisions often are made by other stakeholders, such as Operations or Business Development, which includes  funding, budgetary constraints, and other strategic directions. Respondents maintained that there often is a bias towards using tools that one already knows, for example solutions that are “industry standard” or generally taught in university courses. Changing tools is often a challenge when the status quo is most familiar across decision-makers. 

> "It's harder to influence colleagues who may not be as tech savvy to move from a proprietary software. The biggest challenge is competing with software that have been taught in school/college."

##### - Monitoring & Evaluation practitioner interviewee

> "Open source technology usually has a very steep learning curve. My impression is that lots of energy is put into the functionality of open source software rather than form or user interface. For example, Limesurvey takes me almost 3 or 4 times as long to create a survey rather than using SurveyMonkey, which just has a more intuitive interface. Add to that the fact that I not only have to train myself but others means it's a significant time investment most of the time."

##### - Survey respondent working in Data Science/Analysis and Monitoring, Evaluation, Research and Learning, with little experience of Open Source tools (e.g. less than two years / not part of main job responsibilities).

## Ethical and Legal Considerations
Compliance with legal regulations and ethical considerations is paramount  for social sector practitioners, insofar that there are a multiplicity of dilemmas that include potential harm from humanitarian action. One may ask, why and how would a technical solution relate to legal regulations and ethical considerations? How would a social sector practitioner choose the appropriate software that meets their needs and adheres to legal regulations? 

In both the survey and one-to-one interview, respondents maintained that they continuously evaluated their software solutions against issues like data privacy and security, among other ethical risks. Interestingly, several individuals indicated how many of their colleagues believe that OSS tools are not clear or explicit about adherence to data privacy laws in multiple countries. Others, on the other hand, suggested that there are considerations when choosing proprietary vendors as opposed to using an OSS solution and maintaining it internally. That is, who has access to your data and how can you ensure that private information is kept safe? For instance, consider the following examples:

> "The regulations are sizable requiring considerable effort to implement." 

##### Survey respondent working in software development, infrastructure, cloud technology, with senior experience of Open Source tools (e.g. more than five years experience / part of primary job functions).

> "I am also concerned about adhering to privacy laws if I share data or code with others." 

##### Survey respondent working in Data Science/Analysis and Monitoring, Evaluation, Research and Learning, Philanthropy with little experience of Open Source tools (e.g. less than two years / not part of main job responsibilities).
 
> "I was recently on a call with a potential data loader tool and there was excitement with the technical functionality! But the way it’s loaded, it presents security problems that cause them to look elsewhere. If I’m thinking of moving data from here to there, what kind of access do they [the maintainers] have? What are the GDPR actions acting as a subprocessor? What is the messaging if we want them to ingest that data or run queries? For example, “Hey, if are you running these queries, don’t look at that column?” or for log streams, “Hey, you have those logs, but don’t look at people’s names?” 

##### Senior Data Scientist interviewee

# Which option do I choose? Some Considerations 
The common challenges and opportunities outlined above showcase several ways in which social actors and leaders evaluate which software solution fits with their organization’s myriad of needs. Here are four considerations for social sector actors and leaders to take into account.

## Select interoperable solutions 
Given the central role digital technology plays in the social and public sector, interoperability is a major requirement that enables the growth and maintenance of any software solution. Broadly, interoperability refers to the ability for software and its interfaces to “understand” each other, including, for example, the use of common data formats, the exchange of information, as well as cross-domain involvement with multiple stakeholders. De-centralized and inoperable solutions create a multiplicity of challenges (e.g., loss of data, costly migration of data to new systems, etc.). Practitioners should consider how the technology is interoperable within the greater digital ecosystem and evaluate how a software solution will have long-term sustainability.  As an example workflow, consider Figure 2 in which solutions are assessed based on multiple dimensions to determine the interoperability of the software. 


**Figure 2: Example of Decision Tree Flow for Interoperability of Software Solution**
![Interoperability Constraint Review](/assets/img/posts/interoperability-constraint-review.png)

To evaluate a solution’s interoperability, consider the following questions:

- Questions on selecting interoperable solutions:
- How might your solution interface with other products or systems? 
- What syntactic properties (e.g., data formats, ASCII characters, etc.) must be interoperable with other technology systems? For example, will your solution need to export or import data in specific formats, such as a csv file?
- What semantic properties (e.g., metadata, ontologies, etc.) must be interoperable with other technology systems?
- Will your solution require collaboration (e.g., information exchange) between multiple organizations and stakeholders, such as citizens, businesses, and public administrations? 
- Does the end user understand and/or have the resources to access and use the solution? 
- In cases where end users may not have access to the solution, should users have a plan for combining OSS tools with existing technologies? For example, 
If OSS, does the solution fall under Open Standards?

## Interrogate the Software’s Development Life Cycle 
Attention must also be paid to the pace of innovation and a software’s evolution, namely the ways in which code contributions are made and updates are made. For instance, OSS is often characterized - though not necessarily the reality - by its openness that allows for collaborative effort. Communities can collaboratively improve upon the source code, such that OSS code is released under the terms of a software license, which generally allows programmers to download, edit, and publish their version to community members. Proprietary software, on the hand, reserves the rights for licensees to access, use, and/or modify the source code. In many instances, however, both proprietary and OSS solutions most often gain from having a designated team who iterates over and develops new features for their core technologies. 

There are a multiplicity of trade offs when considering differences between OSS and proprietary solutions along the lines of innovation and additive features. Practitioners should account for several elements and consider how and to what extent communities or teams are improving the software product. Consider the following questions:

- Who are the consumers and/or users of the solution? 
- What influence do consumers have on the development of the software’s solution?
- How often are additions made to software products? Is there an active community contributing to the software? 
- Do they support maintainable package development with tools used for unit testing, dependency management, and high quality documentation?
- Is there a similar OSS solution to the proprietary software (e.g., ArcGIS versus QGIS, ggplot2 in R versus Tableau)?
- Are there industry standards for domain specific tools? What does the community say about each tool?
- What would happen if the technology ceased to exist? Could developers continue to use the solution? If proprietary software and source code is not available, how would this impact the sustainability of your project?

## Consider the software’s costs, including the direct and indirect prices of your solution. 
A software’s cost is one of the most common constraints and considerations that practitioners take into account when evaluating between OSS and proprietary solutions. That is, OSS solutions, which are characterized as low cost or even free, are sometimes regarded as the more appealing option for many social sector organizations. However, practitioners must take a nuanced approach when evaluating the true cost of the proposed solution, considering not just the actual price of the software, but also the opportunity costs and the solution’s return on investment.  There is no single-handed OSS deployment, insofar that any solution requires multiple people to develop and deploy, in addition to continuous training users and maintaining the technology. For example, practitioners should consider:


**Questions on Return on Investment**
- Will staff build, deploy, and/or maintain the solution? Is there a need to hire a staff member and/or external consultants? 
- Will there be an internal project manager to oversee the implementation of the new software?
- Who will maintain the solution over the medium- and long-term (e.g., staff member, external consultant, vendor, etc.)? 
- For proprietary solutions, what challenges would arise from vendor lock-in (e.g., being dependent on the company for products or services * without switching at substantial costs, etc.)? Do these costs outweigh the benefit?
- How long will the solution be used for?  


**Questions regarding Opportunity costs**
- What time constraints exist? When does the solution need to be used?
- If an OSS solution is being developed by a staff member, how long would it take? 
- Is there a need to invest in internal knowledge capacity, such as regular training, demos, and project showcases to assist in the development and use of the solution? 
- Are there any assumptions you’re making for the software to be developed? What must be true in order for the solution to be used? 

## Continuously interrogate the regulatory, ethical and design principles of your software solution 
Evaluating software solutions should also consider design and ethical standards. That is, it is not just a question of how the solution is built and deployed, but also how it will be maintained and adopted by end users, how data can be kept safe, and regulations - if any - that you must follow . Knowing who will use the solution and what data privacy and security protocol are needed are steps needed to adequately evaluate what software solution would fit. 

**Questions on data security and privacy**
- Does the solution involve the use of personally identifiable information (PII) data? 
- Does the solution contain data security and privacy documentation?
- What privacy and security regulations, laws, and/or code of conduct standards are achieved using the proposed solution (e.g., US HIPAA compliance, GDPR, etc.)?
- What threats exist when using a proprietary solution? Will you be able to manage who does and doesn’t have access to private information? 
- If you are not maintaining the solution, who will? Will that person or team have access to sensitive data? 


**Questions on ethical and design principles**
- Have you identified the right stakeholders who will be involved in the software solution?
- Has your team properly documented compliance and privacy issues for users of the solution?
- What user permissions are required to use the solution? 
- What different licenses and/or business models (e.g., OpenCore) does your solution use?

### Acknowledgements 
This Beginner’s Guide would not have been possible without the support from the MERL Tech community and domain experts who volunteered their time to provide valuable feedback.  We are also grateful for the leaders who took their time to answer our questions in both the survey and qualitative interviews, where they shared their wisdom and experiences with the team. Thank you!
