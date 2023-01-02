---
layout: blog-post
title: United Nations LGBTQI Staff Rights Platform
authors:
  - author: Mala Kumar
    authorTitle: Director, Tech for Social Good at GitHub
    authorGitHubHandle: malakumar85
    authorGitHubID: 12953652
tags:
  - tag: Data Analysis and Visualization
  - tag: Reporting

# images should be in the /assets/img/posts/ folder
featuredImage:

outgoing: false
outgoingUrl:
---

_With edits from Amy Sample Ward and Nicolas Dickinson_

## Introduction

This case study will cover a collaboration by Fordham Law School, UN-GLOBE and Mala Kumar, who is the author of this case study. It will examine the MERL challenges of a crowdsourcing tool that was designed to help lesbian, gay, bisexual, transgender, queer, and intersex (LGBTQI+) United Nations (UN) staff, consultants, and interns determine if a particular UN job meets their safety, family, and professional needs. The case study will outline how open source tools and practices could have addressed several of the main MERL challenges.

Readers who will find this case study useful include:

- Monitoring, Evaluation, Research, and Learning (MERL) practitioners who use demographically sensitive personal identifying information (PII), such as race, gender, socioeconomic class, sexual orientation and gender identity
- UX/UI/Product designers building tools to help users make decisions using demographically sensitive PII
- UN staff and/or LGBTQI+ people interested in the topic and/or who would like to reprise the work

By the end of the case study, readers should be able to walk away with an understanding of how open source solutions might have addressed key MERL challenges of a tool that would have addressed a major problem faced by LGBTQI+ UN staff.

### Tl;dr - Main Conclusions of this Case Study

- MERL challenges of the tool might have been addressed by using the open source tool [Pybossa][pybossa] and open source community-building tools.
- There is an opportunity to reprise the work in a more cost effective way.

## Context

**The Challenge Faced by LGBTQI+ United Nations Staff Members**

Accepting a UN job can be particularly challenging for LGBTQI+ staff, consultants, and interns (hereafter referred to as “staff”) when the majority are based in countries that criminalize homosexual activity. The below chart shows the status of criminalized homosexual activity globally as of December 2016.

![Criminalization of Homosexuality/Homosexual Acts as of December 2016](/assets/img/posts/criminalization-homosexual-acts.png)
**Source:** [Digital Security of LGBTQI Aid Workers][digital-security]

While many INGOs and government foreign services fully advocate for their LGBTQI+ staff, the UN must reach consensus among member states to follow suit. Because the UN does not formally recognize LGBTQI+ staff as a protected class of people, most UN entities do not have specific policies to ensure LGBTQI+ staff are safe, can openly work with local governments and organizations, and can have their families accompany them to family duty stations.

A lack of formal protections and the closed culture of many UN offices places many LGBTQI+ staff in dangerous situations, adds undue mental health stress, and hinders the career path of LGBTQI+ staff, especially those who wish to have a family. These can be further complicated due to an LGBTQI+ staff member’s race, citizenship, religion, socioeconomic class, and native language, among other factors.

A common example is if the wife of an opposite-sex couple is posted to a country that is a family duty station - an office in a place where UN staff are allowed to live with their family - that does not recognize same-sex marriage. In her case, her husband and kids are allowed to live with her, her husband would be allowed to work and both she and her husband would be recognized as their children's legal guardians. For same-sex couples, the partner of the UN staff member might be forced to live on a domestic servant visa that does not allow them to work, their marriage might not be recognized, and only the UN staff member might be recognized as the children's legal guardians. Unless the country office is willing to advocate for the same-sex couple - and many are not - the benefits allotted to family duty station are unevenly realized for many LGBTQI+ UN staff, some of whom choose to leave the system.

Another common example is when an LGBTQI+ staff member works in a country that criminalizes homosexuality and attempts to associate with gay or lesbian communities, publicly expresses affection for a significant other, or advocates for local LGBTQI+ organizations. While these may be considered “normal” behaviors in their home country, these expressions may result in arrest, harassment, or, in extreme cases, assault. Many UN offices are unclear if this staff member would be provided assistance and would be allowed to keep their job if “caught”. Research shows these scenarios makes LGBTQI+ UN staff feel as though they have to choose between their career and expressing their identity in any form.

## The Project

UN-GLOBE is an organization within the United Nations system that advocates for fairer, more equitable policies on behalf of LGBTQI+ UN staff. With Fordham Law School and the author of this case study, UN-GLOBE partnered on a project to increase visibility of the problem and to help LGBTQI+ UN staff make more informed decisions on which UN jobs to accept, as the UN does not provide any formal tools or processes.

The project had three outputs:

- Investigative research on LGBTQI+ UN staff experiences
- A media campaign
- [A crowdsourcing platform][crowdsourcing-platform]

## The Platform

The main purpose of the platform was to help UN staff make an informed decision on accepting a new post in a certain country, agency, or context. The platform was designed to crowdsource experiences, strategies and information on how to navigate different contexts from current and former LGBTQI+ UN staff through “sentiment reports” and through surveys.

Sentiment reports were meant to be open-ended prompts that respondents could use to describe how they felt in a particular UN job and/or give a bird’s eye view of their experience with a particular UN organization, such as UNICEF, the Secretariat, or WFP. The design originally called for “incident reports”, wherein contributors could describe specific discriminatory or hateful events, or transgressions due to their LGBTQI+ identity. However, project research indicated that a more accurate reflection of contributor experiences required less event-specific feedback, and focused more on how respondents generally felt, were treated, could interact, or otherwise experienced their work.

Surveys were designed to be set questions respondents could answer to give quantitative measures of experiences. There were four sets of questions related to workplace culture, career advancement, family and personal relationships, and local cultural and political situations. With no dedicated budget, the platform was not taken past the prototyping stage; however, questions for each of the categories were determined and thoroughly tested with respondents that fell into several user personas.

**Example wireframe of survey and sentiment report answers**

![Example wireframe of survey and sentiment report answers](/assets/img/posts/united-nations-lgbtqi-staff-platform-wireframe.png)

### Common Use Cases

- Farrah has worked for UNICEF for 20 years and is currently posted to UNICEF HQ in New York City. To advance her career and maintain her status on a P (professional) contract, she must be based in a field office soon. Her rotation options are all in family duty station countries that criminalize homosexual acts and/or do not recognize her marriage to a woman. She uses the tool to evaluate which of the three UNICEF country offices other UNICEF staff members report helping them bring their same-sex spouse on the same visa as opposite-sex spouses.
- Robert and Sophia are human resource specialists supporting UNDP’s East Africa Regional bureau. Both are straight and cisgender and need guidance on major issues that LGBTQI+ UN staff (including consultants and interns) face. They use the platform to uncover common challenges and what LGBTQI+ UN staff wish had been done differently.

### Platform Implementation Challenges

The cost barrier to launch the platform was prohibitively expensive for several reasons, many of which had a strong MERL component. Ultimately the platform did not make it out of the design phase due to limited funding; external donors generally felt it was the responsibility of the UN to assume the costs and institutional UN funding was not secured.

Below are some of the major MERL challenges with the platform.

#### Double/multiple disaggregations

The biggest design challenge was balancing the level of response aggregation needed for privacy with being useful. Aggregating all data in one country across all agencies across all time would not only not help an LGBTQI+ UN staff decide whether to accept their post/consultancy, it might be harmful.

For example, suppose the majority of responses for a particular country office were from cisgender gay male staff who said the environment is accepting. If the two demographic characteristics - cisgender and man - were not displayed, the platform could be misleading for a gay trans woman staff trying to decide whether to accept a post in that office. Given the sensitive information being collected, however, a high level of data aggregation would be needed to display responses without potentially serious repercussions. The project guesstimated several hundred responses per country office per UN organization would be needed to display at least two disaggregations.

Double or multiple disaggregations is a challenge with data collection in the UN system more generally, such as in representative country household surveys. The amount of information gathered is enormous and must be geographically representative, which makes collection expensive. The platform design hoped to navigate around this challenge by crowdsourcing. However, in only considering proprietary solutions, the amount of funding needed required to implement and deploy the platform was prohibitively expensive.

#### Taxonomy of Key Terms

Another major MERL challenge was developing a unifying taxonomy of key terms. Though every industry has its own jargon, the UN system is particularly notorious for creating its own terms within international development and humanitarian response. Many of these terms are human resources and/or organizational terms that could have significant bearing on experience of LGBTQI+ UN staff. In fact, terminology about the UN was one of the primary reasons the platform was limited to only UN staff contributors.

One example was how to classify the word “consultant” in the UN system. Consultants in most organizations in the United States are hired for one-off tasks, short-term projects, or advisory services. They’re not a core part of the organization’s work, are treated as autonomous to the organization, and often don’t sit on-site consistently. However, the UN does not have to follow American labor laws and “consultants” are often full-time, on-site, and do the core of the organization’s work. Since they are not given benefits, contracts for longer than 11 months, and have no discernable career path, LGBTQI+ consultants’ lack of job security could heavily influence how they were treated and what they were willing to report into a crowdsourcing platform.

## Opportunities

Many of the MERL challenges listed above could have been addressed in a cost-effective manner through the use of open source solutions. Below are examples of specific tools that could be explored if other individuals or groups are interested in reprising the work.

| Tool | Summary |
| ----------------------- | ------- |
| <img src="/assets/img/posts/pybossa-logo.png" alt="Pybossa logo" width="200"> | In the original design of the platform, the only two ways to collect data points were through surveys with multiple choice responses and through open-ended questions on sentiment reports. As described above, few data points to aggregate and display would effectively render the platform useless. The marketing and visibility required to reach enough contributors to reach a critical mass of responses was prohibitively expensive, meaning the platform design needed more ways to collect data. <br><br> The overall project included a research component in which Fordham Law School conducted more than 100 in-depth interviews with LGBTQI+ staff. Instead of treating these interviews as separate inputs, the platform could have parsed information from the interviews to expand the pool of usable data points. <br><br> The open source software [Pybossa][pybossa] can analyze voice clips or transcription text. With permission from the interviewee, the project could have used Pybossa to map interview clips to the platform survey questions and/or sentiment reports, and added relevant time, geographic, UN organization information the interviewee mentioned. |
| <img src="/assets/img/posts/sensemaker-logo.jpeg" alt="Sensemaker logo" width="200"> | While not open source, the Cynefin Company (formerly known as Cognitive Edge) has a tool called [Sensemaker][sensemaker] that uses qualitative data collection methods that might be relevant. Sensemaker collects stories in snippets, and allows people to analyze their own contributions using a predefined set of tools. This allows the company to quickly derive signals based on cognitive frameworks. <br><br> One way to build on this approach is to create a guide that would allow platform contributors to self-identify their information. For example, a guide might help a respondent classify how being an LGBTQI+ UN staff in a certain field office felt along a spectrum of un/safe, un/stable, and un/inspiring. This triples the number of data points and with little added effort. In the spirit of open source, the tools developed for the platform could be open sourced and continually iterated upon by the community of respondents. |

### Community Building

One aspect of the platform that was missing in the original design is a community building effort. [There are many open source tools][os-alternatives-slack] available that can be integrated into a platform to act as a free direct message or community comment discussion boards. It’s important to note that given the sensitive nature of the platform and the ever-present existence of online bullying and harassment, any direct message or community commenting feature would need strict governance rules and an active community to moderate. This would be a feature to build in a later iteration.

## Conclusion

While the intent of the platform was important and the problem statement clearly laid out, there was a missed opportunity to take advantage of open source tools in the design to navigate around the major MERL challenges and funding constraints. Open source software could have enabled the platform to use the rich information already collected from project interviews and increased data points without significant additional effort. Though the original momentum of the project has lapsed, there is opportunity to carry the important initiative forward.

## To Get Involved

For more information or if you are interested in reprising the work, [please email the MERL Center][email-merl-center].

[email-merl-center]: mailto:themerlcenter@gmail.com
[digital-security]: https://gisf.ngo/wp-content/uploads/2020/02/2224-EISF-2017-Digital-Security-of-LGBTQI-Aid-Workers-Awareness-and-Response.pdf
[crowdsourcing-platform]: https://www.devex.com/news/can-an-interactive-online-map-better-inform-lgbtqi-aid-worker-security-88008
[pybossa]: https://pybossa.com/
[sensemaker]: https://thecynefin.co/about-sensemaker/
[os-alternatives-slack]: https://opensource.com/alternatives/slack
