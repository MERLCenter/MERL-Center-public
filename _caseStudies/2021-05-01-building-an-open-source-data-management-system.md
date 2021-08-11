---
layout: blog-post
title: Building an Open Source Data Management System for Monitoring and Evaluation based on Data Standards
authors:
  - author: Munir Mahomar
    authorTitle: Senior M&E Technology Associate, Education Development Center (EDC)
    authorGitHubHandle: mmahomar
    authorGitHubID: 2126867
tags:
  - tag: Data Collection and Management
  #- tag: Data Analysis and Visualization
  - tag: Reporting

# images should be in the /assets/img/posts/ folder
featuredImage: building-open-source-conceptual-model1.png

outgoing: false
outgoingUrl:
---


_By Munir Mahomar, with editing contributions from Mala Kumar, Froilán Irizarry Rivera and Benjamin Kinsella_


## Introduction
International development organizations are often challenged with managing large amounts of data and information across multiple programs and partners.  Education Development Center (EDC), a global nonprofit that works to improve education, promote health, and expand economic opportunity around the world, manages data from projects in 22 countries.  In the past, our project teams either created a custom data management platform for their project or purchased a proprietary subscription-based platform.  Both solutions had drawbacks.  Custom solutions could not easily be replicated for other projects, and often stakeholders could not sustain subscription-based platforms beyond the life of the project.

Then we found a better solution.  Using a common data standards approach[1], EDC created an open source data management platform called _[M&E Insight](https://github.com/edc-it/MEInsight)_ with customizable templates that can be easily adapted and scaled for use by international development projects, local governments, and partners. The system features a visual, interactive interface that makes it easy to collect, organize, manage, and analyze data. Data can be entered and extracted through a user-friendly online interface or collected offline and uploaded to the system, where it is then linked to interactive dashboards (with external tools) that are accessible by all stakeholders.

We have learned that development initiatives share common elements and challenges regarding data management. That is why we designed M&E Insight to meet the Common Education Data Standards (CEDS). Our adherence to the standards provides a common data vocabulary for every project, including a common set of data elements that can be improved, reused, and replicated for any project.

Readers who will find this case study useful include:
- Monitoring, Evaluation, Research, and Learning (MERL) practitioners who work and manage international projects that involve training and distributing goods, such as those in the fields of education, workforce development, and health
- Software developers interested in using data standards and collaborating with Open Source for MERL and social impact.

### Tl;dr – Main Conclusions of this Case Study
- Using an open source data management system built on common data standards, EDC created a solution that is scalable and replicable for a variety of different projects and can be deployed very quickly at startup.
- A simple data model provides a clear organizational framework that allows data from multiple sources to be easily manipulated and aggregated across projects and portfolios.
- Users must recognize how the model applies to their situation for the solution to be successful.
- The data model usually meets 80% of project MERL tracking needs; the other 20% can be tracked in different systems and linked where appropriate.

## Context

One of the many goals of international development projects is to provide beneficiaries with the skills and opportunities to improve their education, work, and livelihood outcomes. Most projects are required to use a MERL data management platform to help them track and report on their progress, storing participant information such as demographics, program participation, enrollment, and evaluation data.
The choice to build or to buy a MERL data platform, that usually takes months or years to complete, often leads to a system that is customized to only one unique project and cannot be reused or adapted to others. This creates silos of unstructured non-standard data that cannot be shared, compared, or cross-referenced with new projects or accessed later to learn more about the data history of the projects. The data platform design, build experience, and learning capacity usually ends with the life of the project at the close-out phase.

I have been working at EDC for over nine years, supporting international development projects to design and build their MERL data management platforms, data collection, reporting tools and dashboards. Project teams always required support to build “customized” data systems or databases that could help them track and report on their key performance indicators.

Each data platform requirement was usually unique, and it had to be built entirely from scratch for each project. Long, time-consuming iterations of design discussions, tests, change requests, and new features, falling into [scope creep](https://en.wikipedia.org/wiki/Scope_creep) that ended up in projects tracking their data in Excel while waiting for a system that would never get finished due to unforeseen circumstances. The data platform could not be used until it was completed.

One common challenge was that project teams wanted to include everything into their data system, it had to do everything from data collection to tracking vast amounts of data to reporting to analytics and dashboards. Most projects ended up using the “customized” platform one year into the project.
Comparing multiple projects data requirements for MERL, at first, these requirements seemed apparently unique to each individual project, but they were collecting essentially the same data, only named differently. For example, some projects collect data on schools, others name them learning sites, but simplified, they are both organizations of a different type.

We introduced data standards to bring together and unify all these projects data requirements into one common and simplified data model, based on data standards.

### The data standards approach

A data standard refers to a commonly agreed upon set of definitions and options for a given selection of data elements, data entities, and relationships [1]. Using data standards provided a common data vocabulary for every project to use, including a common set of data elements that can be improved, reused, and replicated over time.

Working with data standards made it easier for our projects and MERL teams to better understand the use of their data, meet the requirements of the project's indicators, and ensure data quality and consistency. Using data standards was the solution we were looking for to normalize all the data elements of all the projects, in a way that was easy to adapt and integrate to the different contexts and types of project activities.

We began by working together with multiple teams from different projects to analyze their data requirements. We compared their data similarities, built a common data dictionary, and defined their data standards. We based our design and conceptual model on the [Common Education Data Standards (CEDS)](https://en.wikipedia.org/wiki/Common_Education_Data_Standards). The result was a simplified set of data elements that could be used across projects of any type and size, independent of the technology projects would choose to build their M&E data management systems.

The following conceptual model aligns with MERL requirements for our projects to track, store, and report on their indicators and data (we renamed elements from Person to Participant for context):

![Conceptual Model](/assets/img/posts/building-open-source-conceptual-model1.png)

In a real-world scenario, international project activities vary by type and size, but in a simplified view, this conceptual model adapts to almost every MERL context. For example: projects work with multiple organization types (e.g.: schools, training institutions, partners, civil society organizations, clinics, communities, and/or government entities, they all can be represented as Organizations. These organizations provide learning resources and content to participants (e.g.: capacity building, training, coaching, books, business start-up kits, medicines). Participants have different roles in these organizations (e.g.: students, teachers, peer trainers, education administrators, health counselors, and/or government officials), access the resources offered by organizations through multiple events during the life of the project.

![Conceptual Model Scenarios](/assets/img/posts/building-open-source-based-on-data-standards-conceptual-model2.png)

The following table describes the conceptual model adapted to different project scenarios:

| Project Type | Organization type | Participant roles | Resources and events |
|-|-|-|-|
| Basic Education | School | Students | 3rd grade Literacy class enrollment |
| Workforce Development | Partner | Facilitators | Train of Trainers (ToT) workshop |
| Alternative Learning Systems (ALS) | Field Office | Education Administrators | Professional development training in Safe School Environments |
| Health | Clinic | Nurses | Distribution of contraceptives |



| Project Type                       	| Organization type 	| Participant roles        	| Resources and events                                          	|
|------------------------------------	|-------------------	|--------------------------	|---------------------------------------------------------------	|
| Basic Education                    	| School            	| Students                 	| 3rd grade Literacy class enrollment                           	|
| Workforce Development              	| Partner           	| Facilitators             	| Train of Trainers (ToT) workshop                              	|
| Alternative Learning Systems (ALS) 	| Field Office      	| Education Administrators 	| Professional development training in Safe School Environments 	|
| Health                             	| Clinic            	| Nurses                   	| Distribution of contraceptives                                	|


Using this approach, EDC created M&E Insight, using a simplified data model to build an open source data management platform for international development projects.

![Conceptual Model](/assets/img/posts/building-open-source-based-on-data-standards-meinsight.png)

M&E Insight is currently available in English, Spanish, and French, but new translations can be easily added.

We have been able to use this exact same conceptual model using [M&E Insight](https://github.com/edc-it/MEInsight) for multiple EDC projects in different countries and contexts: a comprehensive sexuality education program in South Africa, a basic education program in Zambia, an accelerated learning program in Liberia, a higher education program in Lebanon, a youth program in the Philippines, and many others. New projects from Rwanda, Uganda, Egypt, and Indonesia will soon start using the same common data standards.

Now that EDC has a sufficient number of projects using common data standards, we can aggregate data across projects and portfolios to see the big picture.  How many beneficiaries do we reach with what kinds of services in what geographies during specific time periods? This is information that we used to have to get by combing through reports and re-entering data into Excel worksheet trackers.  Now we can get it by running queries and generating reports from M&E Insight.

### Challenges implementing data standards

One of the biggest challenges implementing data standards is that project teams do not easily agree that the standards are applicable to their situation and context because they use different vocabularies to name common data elements. They find it difficult translating real-world scenarios to match data standards and usually expect to modify the standard by adding complex customizations instead of understanding how their requirements fit the model. EDC has a project that works with a wide range of education providers from non formal learning centers to formal government primary schools to mobile classrooms. Although each educational setting has unique attributes, in the common data model they are all Organizations of different types.

It is also challenging to convince teams that their MERL platform does not have to do everything. There are cases where they can have requirements that are not met by one platform but can be managed separately with other tools instead of building one unique complex system. For example, EDC implements a workforce development project that seeks and nurtures private sector partnerships, and places youth in internships or employment opportunities. They wanted to track every conversation and meeting with individual contacts from potential private sector entities as well as know which youth in the program were placed in specific internship or employment opportunities.  While M&E Insight can easily track internship or employment placements for youth, it is not designed to manage relationships with private sector partners. So the project decided to purchase a commercial Customer Relationship Management (CRM) platform to meet that unique need, and to track youth placement using M&E Insight. By ensuring that both systems use the same unique identifier for youth, we can easily merge data from both systems.  While the project works with a vendor to configure the commercial CRM platform for relationship management, the M&E Insight platform can be set up immediately to capture key project activity outcomes.

## Conclusions

M&E Insight has allowed EDC to quickly and effectively meet the MERL data tracking needs of our global education, workforce development and health projects.   The biggest challenge we faced was convincing our own project staff that M&E Insight’s simple data model and common data vocabulary was the most appropriate way to capture their complex intervention.  Now that we’ve proven it works and can be configured very rapidly, EDC can grow the system and add new features.  And we are actively seeking contributors!

M&E Insight is available at no cost on GitHub and can be downloaded and configured for use by MERL practitioners (https://github.com/edc-it/MEInsight). A demo site is also available (https://meinsight.edc.org).

---

[1] M&E Insight is based on the Common Education Data Standards (CEDS) data model approach: https://ceds.ed.gov/dataModel.aspx.

The Common Education Data Standards (CEDS) project is a US national collaborative effort to develop voluntary, common data standards for a key set of education data elements to streamline the exchange, comparison, and understanding of data within and across P-20W institutions and sectors. CEDS includes a common vocabulary for data elements, data models that reflect that vocabulary, a variety of tools to understand and use education data, an assembly of metadata from other education data initiatives, and a community of stakeholders who use, support, and develop the standard.
