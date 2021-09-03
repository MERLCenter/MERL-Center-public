---
layout: blog-post
title: Ruby for Good, Building Community in Open Source
authors:
  - author: Gia Coelho
    authorTitle: Communications and Development Director, DC Coalition Against Domestic Violence
    authorGitHubHandle: designbygia
    authorGitHubID: 56228717
tags:
   - tag: Data Collection and Management
   - tag: Reporting

# images should be in the /assets/img/posts/ folder
featuredImage: 

outgoing: false
outgoingUrl:
---

## Introduction

The mission of the nonprofit organization Ruby for Good is to deliver specialized software development solutions to nonprofit organizations to bolster their critical missions, build an inclusive technology community, and provide technology-focused educational opportunities to underserved communities. In 2015, the Portland Diaper Bank approached [Ruby for Good](https://rubyforgood.org/) with a problem: they were in need of an inventory and partner agency management system to reduce their operational overhead, reduce labor demands, and create operational efficiencies. They wanted to be able to use barcode scanning and potentially have a better solution than the generic inventory system that the majority of diaper banks were using while also attempting to adapt to their unique challenges and business processes. That year, Ruby for Good built a proof-of-concept that satisfied the basic needs of inventory tracking for their operation.

Today, in 2021, with continued stakeholder engagement, that proof-of-concept has become a part of Ruby for Good's portfolio of projects that it maintains and supports, and has since expanded to a multi-tenant Software-as-a-Service (SaaS). It serves the inventory management needs of over 120 Diaper Banks, Period Supply, and Adult Incontinence Supply organizations throughout the United States, and their nearly 2,000 nonprofit partner organizations, at no cost to them or their partners. The software is 100% volunteer supported, the hosting is donated, and the application is actively developed by several dozens of volunteers, and has had nearly 200 contributors from around the world (6 of 7 continents!).

The Diaper Bank has a repository on the [Ruby for Good GitHub organization](https://github.com/rubyforgood/diaper), which is under an MIT (open source) license. Ruby for Good has helped dozens of budding volunteers submit their first Pull Request, participated in 5 Hacktoberfests, as well as several large software development conferences including Rubyconf, Railsconf, and Strangeloop, and have presented at the National Diaperbank Network (NDBN) conference twice. 

Through the Diaper Bank application, Ruby for Good simultaneously enables a non-technical community to streamline their business processes and also provides the technical community with opportunities to support the nonprofits serving critical missions, contribute to vital social impact work, learn from peers, and skill-up.

### Overview of Ruby for Good 

Nonprofit and civic organizations work to deliver critical missions across the country, which are more vital in the current climate than ever before. The people on the front lines of these missions don't always have the resources they need to deliver these critical programs. That's where Ruby for Good comes in. We bring together people of varied skills and experiences to build technology solutions that benefit nonprofits. Ruby for Good's mission is to deliver specialized software development solutions to nonprofit organizations to bolster their critical missions, build an inclusive technology community, and provide technology-focused educational opportunities to underserved communities.

We work with incredible nonprofit partners like Habitat for Humanity, The Homeless Children's Playtime Project, and the Humane Society, spanning missions from supporting children in the foster care system, to environmental and wildlife conservation, and beyond.

We also partner with technology companies and offer skills-based volunteering opportunities for a variety of roles and skill levels, like product and project managers, developers, designers, UX and UI contributors, and marketing gurus. We believe in building bridges and relationships between volunteers and the missions they are serving to foster long term commitments.

### Problem Statement This Case Study Explores/Addresses

Creation and maintenance of free technological solutions to operationalize the inventory management of Diaper Banks and similar organizations to enable them to maximize their available funds and resources towards serving vulnerable communities in need. 

### Key Takeaways

-   Regular stakeholder engagement is critical to project success.

-   Minimizing complexity in the application encourages contribution.

-   Engaging contributors positively helps build community support.

-   A non-monetized software application built around volunteer support is possible and can be successful over an extended period of time.

### Which Readers Will Find This Case Study Useful

MERL practitioners who are building or thinking about building their own open source software supported by a robust community of developers.

### What the Reader Should get out of This Case Study

Nearly five years into this project, we provide a concrete example of how to successfully build an application that directly supports organizations that provide a critical human service. The process and paradigms through which we have developed this application are fungible and can be adapted to other problems of a similar nature.

## Narrative of the Problem

Diaper Banks and Period Supply Banks are nonprofit organizations similar to Food Banks, except they deal with sanitary supplies for mothers, newborns, infants, young children, the elderly, and individuals in need of menstrual supplies. Supplemental aid provided by federal programs often does not accommodate this kind of need, and so marginalized communities tragically find themselves making difficult decisions between dignity and survival.

Also similar to Food Banks, Diaper Banks process a large amount and variety of inventory, and must keep fairly detailed records of this inventory flow both to ensure they can sufficiently service their community and  to provide accurate data when making grant requests. While a few do their bookkeeping with pen and paper, most have turned to technological solutions such as Google Sheets, Excel, and other similar tools. These tools enable some success, but have technical limitations in their generalized use cases. Specialized inventory software is often either cost-prohibitive or does not closely mirror the needs of Diaper Bank inventory tracking.

### Contextual Challenges

Most Diaper Banks are very small operations, with minimal funding that is directed almost wholly towards purchasing sanitary supplies, which are intended to be directed towards the community. Oftentimes the principal of the Diaper Bank serves in a volunteer capacity. Smaller Diaper Banks still move an ample amount of inventory and have limited staffing, which creates a cognitive load problem with a few people being in charge of all the steps in the supply chain distribution process.

Larger Diaper Bank organizations have the luxury of more staffing, and even salaried positions, but move exponentially larger volumes of inventory to a larger number of recipients (typically community partners such as pantries, shelters, and so on). Additionally, larger Diaper Banks are more likely to be grant-supported and need access to more detailed data about their impact.

Lastly, while all Diaper Banks are similar, no two are exactly the same. There is no single recipe for success, although they do freely share tribal knowledge with one another that drives functionality. Any solution that is provided will need to be flexible enough to accommodate some variability in its operation.

### Technology Challenges

The most important technical consideration is that Diaper Banks, in general, have very limited budgets and staffing, and the staff they do have available are often not technical-savvy enough to be able to develop or maintain an application. Technical skill varies by Diaper Bank; some are more comfortable working with technology than others, but generally speaking, this means that in the best case scenario they need less training.

Any software that is written will need to be maintained,improved on over time, and have the ability to respond to changes on a national level. For example, the National Diaper Bank Network (NDBN) is refocusing their mission to incorporate more sanitary supplies than just diapers, and is rebranding to reflect this change. The application will need to be able to adapt to changes such as these, on an ongoing basis. Long-term maintenance requires staffing, and this staffing will need to be essentially volunteer-based; any funding that is directed towards software maintenance is funding that is not spent on swaddling a child. Thus, this maintenance will need to effectively be indefinitely volunteer-supported for the foreseeable future.

The technology solution will need to be distributed geographically, as Diaper Banks are found nationwide, including in non-contiguous states such as Hawai'i.

The solution will need to function with regular technology such as desktop or laptop computers, tablets, and mobile devices. Diaper Banks generally have access to at least one or more of these technologies. Some stakeholders have expressed the desire for the ability to use labor-saving technologies such as barcode scanning as an optional means of data entry.

#### DiaperBase Landing Page 
![DiaperBase Homepage](https://github.com/MERLTech/MERL-Center-public/blob/new-jekyll-site/assets/img/posts/ruby-for-good-diaper-base.png)


### MERL (Monitoring, Evaluation, Research, Learning) Challenges

Effective monitoring is an essential part of impact measurement, process improvement, impact measurement and accountability to funding agencies, as well as other stakeholders. [A KPMG assessment](https://assets.kpmg/content/dam/kpmg/pdf/2014/09/2014-survey-monitoring-evaluation-v4.pdf) of global M&E systems identified the cost of data management and analysis and ease of data accessibility and standardization as key roadblocks to introducing data analytics and "big data" into evaluation systems. A robust monitoring system allows small organizations with limited capacity to access critical information about service delivery and  populations served that would ordinarily be out of reach.   Maintaining inventory for nonprofits throughout the continental and non-continental United States required initial architecture to facilitate a system that would work well regardless of location, inventory inflow processes, and even language differences. Unsurprisingly the value of a single diaper is different in a large city like New York, rural Appalachia, or on one of the small islands of Hawai'i, and the system needed to be able to report on the local value of a diaper. Being open source software, we were able to customize the solution to enable users to enter the value per item. We even needed to build the system to be robust enough to handle non-English characters like those used on the Hawaiian Islands.

A significant challenge faced by Ruby for Good with this project was the needed expansion from serving diaper banks to also serving period supply and adult incontinence organizations. Even though the business process of distributing period supply and adult incontinence products is nearly identical to supplying diapers, there were several major cosmetic changes that needed to be implemented as well as substantial code refactorings to serve the new workflows. As users are often not technically savvy, the wording inside the application is of paramount importance. The cosmetic changes were needed to rename things like Diaper Drive to Donation Drive, Request Diapers to Request Essentials, and since the name of the application was the Diaper application, it required renaming it to something more all-encompassing - the Human Essentials application. We also learned that while the distribution process for period supplies is extremely similar there is one major difference, period supplies are distributed in kits, which are packages containing multiple items. For example, a kit may include tampons, wipes, and pads. 

For a system that was built on requesting and distributing single items, this was a major undertaking and would require extensive architectural and code changes. Realistically, this rebranding and code changes were, conservatively, going to be hundreds of hours of work for our open source community of volunteers and likely take several months of donated time to implement, had we only relied on our community. In mid-2020, with the COVID pandemic creating unprecedented challenges, and to achieve this vital change, in a quicker time frame, Ruby for Good turned to a corporate partner. 

Ruby for Good facilitates skills-based volunteering experiences for companies and this clearly defined project was an ideal one to tackle in one of our engagements. At a facilitated skills-based volunteering engagement organized for Power Home Remodeling Group (PHRG), their engineers worked for an entire week and were able to drive the completion of this project across the finish line. The team at PHRG were impacted by our mission and several have since joined our community as active contributors. They found the experience extremely meaningful as they were able to meet and interact with several of the people running Period Supply and Diaper Bank organizations. They were able to see first hand the far-reaching and direct impact of the gift of their time and talent.

#### DiaperBase Dashboard 
![DiaperBase Dashboard](https://github.com/MERLTech/MERL-Center-public/blob/new-jekyll-site/assets/img/posts/ruby-for-good-dashboard.png)

## Actions Taken

### Constant Ongoing Discovery with Stakeholders

Ruby for Good was in its third year when the Diaper Base proof-of-concept was developed for the Portland Diaper Bank. The established process at that point was to engage with the stakeholder as much as possible to define a minimum viable product (MVP). Over time, we included several Diaper Bank stakeholders in our discovery process to gain a better understanding of their needs, and used their feedback, from testing the product, to improving the user experience, as we continued to finesse the application. Eventually this discussion included the NDBN, and we were invited to present at their annual conference, which was the endorsement that resulted in a large volume of new diaper banks signing up to use the app.

We learned that building the application in tandem with stakeholder discussions is critical, as it helps to build demand as well as ensure the best possible bespoke solution for the needs of the users. This discovery process naturally dovetailed into grassroots marketing, and the need for a technical solution to this problem drove more prospective users to our efforts.

Our production launch was shortly after our first NBDN presentation, in early November of 2018. Prior to that, we had been testing with a few nonprofits, and had tabled at the NBDN conference to build interest and a pipeline of diaper banks that were looking for a better solution for their inventory management. After we went into production, between 10 - 20 nonprofits signed up to use the application on a provisional basis. The limited rollout was with diaper banks that we had built personal relationships with over time, and their faith in the product was a function of their faith in the Ruby for Good community as a whole, specifically those leading the project.

One feature that was built into the application during this period was an Instant Feedback form, available on every page, under the title Give Feedback. The short message provided by the user would be stored in a database and emailed to the development team, along with metadata about the page the user was on and the credentials of the users that was signed in to the application at the time. This helped the development team respond more quickly to bugs, issues, and requests, and also gave the users an easy way to provide us with feedback when incidents occur.

We presented to a packed auditorium at the NBDN conference in 2019, and were able to answer questions and sign new organizations up to a working site. The interceding year was a critical period that enabled the team to iron out numerous technical challenges and features that were commonly requested by our initial round of users.

Grassroots marketing through product evangelism by our initial users was highly effective, as was the tacit endorsement by the NBDN in sponsoring us with a full session to demo the product and answer questions. We became known as the de facto official inventory management software application of the NBDN; this special status was the result of two years of relationship-building and working directly with the Diaper Banking community to build trust, which was an integral part of our success.

#### Diaper Requests from Partner Organizations
![DiaperBase Requests](hhttps://github.com/MERLTech/MERL-Center-public/blob/new-jekyll-site/assets/img/posts/ruby-for-good-requests.png)

### Application Intentionally Kept as Basic as Possible

Ruby-on-Rails is a highly opinionated framework, with Rails Way idioms creating an implicit lingua franca between Rails applications. Many shops will use this as a basis and diverge towards a solution that integrates non-Rails-way idioms. Decisions such as these create a barrier of entry for contributors if they are not absolutely necessary, and create additional labor overhead when maintaining the application or upgrading it.

We made a very intentional decision to use a basic (or as close as possible) Ruby-on-Rails installation. This means that we did not use any front-end frameworks, nor HAML, Slim, or other replacements for ERB. We used common gems, such as Devise, if the benefit outweighed the overhead. We did decide to use RSpec instead of MiniTest, though RSpec is a very common testing framework in Rails despite not being the native default.

When making software architecture decisions, we tried to keep the structure as close to the base as possible, avoiding Presenters and only minimally using Service objects when absolutely necessary. We tried to duplicate solutions as much as possible so that they could be refactored and extracted later when we understood the behavior better, and we made time to refactor and extract them to reduce technical debt.

Technical debt means greater overhead and more brambles for a new contributor. Since no one is absolutely dedicated or paid to support the application, we need to keep this overhead low, and based on positive anecdotal feedback from past contributors, this effort has been quite fruitful.

### Constant Community Culture-building and Outreach Efforts

During the annual Ruby for Good conference, the core maintaining team is available to answer questions and provide assistance to contributors directly throughout the event.

Outside of the event, when the contributors are often GitHub users who are new to the project, opportunities for interactions are limited and generally mediated through Issues and Pull Requests. However, we have a core team of maintainers that remain responsive to questions and requests for support from contributors via GitHub, on an ongoing basis. We also invite contributors to join the [Ruby for Good Slack](https://rubyforgood.herokuapp.com/) community, where they have access to ongoing support, and often mentorship as well. The added benefit of becoming a part of this community are the networking opportunities within this unique and diverse group.

### Emphasizing Communication in Issue Descriptions

Given that this application serves a critical need within underserved communities nation-wide, we prioritize describing both the need and the impact of the issues that are created. This approach has seen much success, since contributors connect directly with the mission and realize immediately the impact of their contributions. We also emphasize a well-articulated list of criteria for completion. The goal is to ensure that if a contributor submits a pull request and addresses all the criteria, it should be ready to merge into the master branch and become a part of the application.

Issue descriptions often include relevant knowledge, references to prior Pull Requests, and links to code snippets that already exist in the codebase. For contributors who may not have a lot of context on the application, it also includes information that helps set them up for success, and enables them to submit successful Pull Requests. 

### Cause for Celebration

GitHub provides metadata about users dispositions towards GitHub and the repository, in the Pull Request itself. The Pull Request will indicate if the user is making their first contribution to the repository, or their first ever contribution to GitHub. We have been tagging Pull Requests for the former with Repo First-timer and the latter with GitHub First-timer. During Ruby for Good events, when someone makes their first Pull Request and it is merged in, an announcement is made and their efforts are recognized and celebrated!

### High-volume Contribution 

We have learned that events such as Hacktoberfest are sources of high-volume contribution. Creating as many small, solvable issues that require minimum domain knowledge prior to the event, has enabled success during events.

The issues should be small because larger issues touch more files and are more likely to create merge conflicts. Merge conflicts take time to parse out and are a potential source of bugs, if not done perfectly. Larger issues are also more likely to require more domain knowledge, which are often in short supply at events. We tag these Pull Requests with event-specific labels for reference.

Given high-enough volume, we will have all Pull Requests work against an event-specific branch  based off  the mainline branch, so that the core team can review the changes after the event and ensure there aren't any overlooked bugs or typos. Smaller velocities can be merged into the mainline as we usually do. 

### Welcoming New Team Members

Inclusivity and equity is one of the core values of Ruby for Good and the community is a safe and welcoming one. In addition to GitHub and [Slack](https://rubyforgood.slack.com), we also welcome contributors via social media ([Twitter](https://twitter.com/rubyforgood) and [LinkedIn](https://www.linkedin.com/company/ruby-for-good)). When new GitHub users become repeated contributors, we will often add them to repositories, so that they can push branches up directly instead of using their fork. This also means issues can be assigned to them, and fosters a long term relationship with them as well.

#### Forecasting Feature: Donations 
![DiaperBase Donations](https://github.com/MERLTech/MERL-Center-public/blob/new-jekyll-site/assets/img/posts/ruby-for-good-donations.png)

## Conclusion

We have learned how to successfully engage with the nonprofit community, build technology solutions to solve their problems, and engage with the open source technology community to deliver a solution.

### How to Apply Lessons Learned to Other Scenarios

Ruby for Good has several projects underway, and we invite you to join us in supporting the trajectory of our [Court Appointed Special Advocates (CASA) Project](https://github.com/rubyforgood/casa), for foster youth. The CASA project, which was launched this year, is following the path forged by our inventory management application and is using the lessons learned as we intend to grow it from a single stakeholder application to one supporting CASA's across the country.

### How to Get Involved 

Join us on [Slack](https://rubyforgood.herokuapp.com/), and view the [Diaper](https://github.com/rubyforgood/diaper) and [Partner](https://github.com/rubyforgood/partner) repositories on [GitHub](https://github.com/rubyforgood/partner). Follow us on social media: [Twitter](https://twitter.com/rubyforgood) and [LinkedIn](https://www.linkedin.com/company/ruby-for-good), and lend your skills, voice, and support to this vital work as we continue to build on our inventory management, CASA, and many other applications. Your support is more critical now than ever before.
