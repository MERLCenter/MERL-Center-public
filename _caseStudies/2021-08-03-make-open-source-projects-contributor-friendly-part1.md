---
layout: blog-post
title: How to make open source projects contributor friendly, Initial setup (Part 1 of 2)
authors:
  - author: Andrew Pham
    authorTitle: Product Lead, Norwegian Refugee Council
    authorGitHubHandle: andrewtpham
    authorGitHubID: 4407063
tags:
  - tag: Data Collection and Management
  - tag: Data Analysis and Visualization
  - tag: Reporting

# images should be in the /assets/img/posts/ folder
featuredImage: how-to-make-open-source-contributor-friendly.png

outgoing: false
outgoingUrl:
---

_With edits from Amy Sample Ward and Mala Kumar_

<link rel="canonical" href="https://hikaya.io/blog/how-to-make-open-source-projects-contributor-friendly-part1/">

<br>
<div style="text-align: center">
    <img src="https://s3.hikaya.io/blog/how-to-make-open-source-contributor-friendly.svg"
    width="700" 
    height="350"/>
</div>

## Introduction

Monitoring, Evaluation, Research, and Learning (MERL) practitioners are often involved in helping to design and develop tools to improve the way data is managed and measure a project’s progress. This often translates to taking on the role of “product management” which consists of researching and prioritizing user requirements for data management systems. MERL practitioners in this role work closely with software development teams to design, build, and test these data management systems. There are often many ways MERL practitioners can approach the development of these systems and one method is to build it using [open source software](https://ben.balter.com/2015/11/23/why-open-source/). This case study will look at ways to make your open source project contributor friendly by making it easier for folks to engage and contribute to your project.

At [Hikaya](https://hikaya.io/), we like to think of open source as more than just an approach to building something. The open source community values community building and collaboration that can enable a group of contributors and users to directly support and improve a product with every new contribution made to its source code and documentation. Additionally, open source shares similar values with [remote work](https://about.gitlab.com/blog/2015/04/08/the-remote-manifesto/) methodologies that emphasize trust, collaboration, and taking ownership among team members. Ultimately, open source allows our team to collaborate with individuals with a diverse set of skills located all around the world who come together to build something meaningful. Our aim is that MERL practitioners can adopt some of these practices we’ve used at Hikaya in your own open source project. We believe the underlying way to make an open source project successful is to focus on attracting and keeping contributors who want to make meaningful and lasting contributions to a project.

### What can be an open source project?

We can think of an open source project as defined by the [opensource.guide](https://opensource.guide/) as a project that is _free to use, study, modify, and distribute for any purpose_. These are supported and enforced through an [open source license](https://opensource.org/licenses) that can be added to your project.

In the social good sector, an example of a project could be a text-based project such as setting up an information website for knowledge sharing or a software application with its source code readily available for the public to use or contribute to. A general definition for an open source project is that the project can be easily accessible and set up by someone who wants to make a contribution to improve the project.

At Hikaya, we work with open source projects in its traditional terms by developing open source software where the source code is made publicly available and has an officially recognized open source license. Our open source projects can be found on [GitHub](https://github.com/hikaya-io).

### Setting up an open source project

When setting up an open source project, it requires you to think about your users differently than you might with another type of project. When developing a product, you are mostly concerned about the people who will end up using the product. However, in an open source project, you also need to think about who would like to contribute to the development of your project. This includes identifying how to recruit key roles like developers, designers, and product managers who will bring their unique set of skills together and can help make your project a success.

With this in mind, one of your early goals should be to make it as easy as possible for potential contributors to find your project and learn more about it. Setting up an open source project in a place that is made publicly available will make it easier for people to find your project and learn more about it. Once you have chosen a place to store files of your project such as in a code repository like [Bitbucket](https://bitbucket.org/product), [GitHub](https://github.com/), or [Gitlab](https://gitlab.com/), you can start putting together an overview of the project on the repository’s `Readme` file or have a dedicated website for the project. This overview should provide a summary of the project including the problem it is trying to solve and how people can contribute. Hikaya uses platforms like GitHub) and [CodeTriage](https://www.codetriage.com/) to make it easier for contributors to find out more about our open source projects.

### Checklist for starting an open source project

<br>
<div style="text-align: center">
    <img src="https://s3.hikaya.io/blog/checklist-for-starting-an-open-source-project.svg" 
    width="700"
    height="350"/>
</div>
<br>

Not all open source projects are equal. You might come across an interesting project that has a great vision on how it plans to solve a problem in the world but has limited documentation or lacks references making it difficult to find out more. The next step is to learn about what information is important to communicate to your contributors. Having clear and concise documentation can help attract interest from contributors by making it easy for them to get started on your project. Good documentation is essential for any open source project so someone can use, learn more, and contribute to the project.

Here’s a list of documents we have found that can help you communicate essential information about the project and attract contributors.

#### Readme

When you first create a project in a code repository, one of the first things you are asked is if you want to create a [**Readme**](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-readmes). A readme is typically the first document in your repository and is like a cover page or an overview for your project. When it comes to software development projects, it is common to find instructions on how your project can be set up in the readme file. This helps a contributor set up the project locally on their computer to test it themself by allowing them to look through your project’s code base and get a better sense if it is something they want and can contribute to. If it's not clear how to get it up and running in a reasonable time frame, they may decide to look elsewhere.

For our projects at Hikaya, we emphasize the importance of making it as easy as possible for a contributor to install the project locally by providing multiple options for installation and highlighting any dependencies your project may require to run.

#### Code of Conduct

As an open source project looking to attract contributors, your project has the possibility of bringing people from various diverse backgrounds and experiences and it is important to set rules on how contributors should conduct themselves when they are contributing to your project. A [**Code of Conduct**](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project) is a document that outlines what standard practices the project will be governed by and its methods for enforcing these standards to help provide a safe and professional working environment for all those contributing. Another great resource is [contributor covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/), which provides a good example of a Code of Conduct to help you get started and adapt to your needs.

#### Contributing Guide

A [Contributing guide](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors) is a document where your team can document how it intends to operate throughout the development of your open source project. This can include team working protocols for how to select a task to work on, how a task can be submitted for review, how feedback can be given, and how a contribution can make its way back to the project. This document provides project maintainers the ability to define working protocols that allow contributors to get involved in the process. For software development projects it can be helpful to explain the technical development process on how code is managed in the repository, maintain certain [version control](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), manage branches, how to submit a Pull Request, and any automated deployment processes that are to follow.

At Hikaya, our goal is to make it easy for contributors to work so we have adopted a standard working protocol that we use across all our projects. This includes defining naming conventions on how we manage versioning like naming branches and how to write standardized commit messages so that they can be easily understood by other contributors. By spending time documenting the working protocols you can greatly improve the communication between contributors.

#### Product Roadmap

To help contributors learn more about a project’s goals, it can be helpful to convey this through a [Product Roadmap](https://www.atlassian.com/agile/product-management/product-roadmaps). A product roadmap helps communicate your project’s goals and the priority in which they should be accomplished. While it may seem easier to share individual project tasks that need to be done, a product roadmap provides a high-level overview of what your project would like to accomplish and the order in which priorities should be developed while leaving flexibility on how it gets accomplished. At Hikaya, we believe that product roadmaps should be living documents that articulate your project’s ambitious aspirations that help to get your contributors excited to contribute.

Good product management is essential in helping this process and a [Product Requirements Document (PRD)](https://www.atlassian.com/agile/product-management/requirements) can help you get started. This document helps describe the business case to contributors so that they can decide what technologies and methods to research and use. Well written product documents will be living documents that convey a strong product vision while translating that excitement into smaller feasible tasks. Finding this balance will allow your contributors to take ownership while letting them identify where they can add value right away.

#### Issues

With a product roadmap developed, open [issues](https://guides.github.com/features/issues/) can be created and aligned to the product roadmap. When Issues are created they can be organized in a backlog queue. This list can quickly grow so creating [labels](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels) based on topic, priority, and level of complexity to issues can make it easier for contributors to decide which issues they can take up.

**Here are some guidelines that any issue should have:**

- All issues should be made available in a public issues list or [Kanban board](https://en.wikipedia.org/wiki/Kanban_board) for easy viewing by contributors.
- Clear [user story and acceptance criteria](https://www.altexsoft.com/blog/business/acceptance-criteria-purposes-formats-and-best-practices/) that describes the business case and intended functionality the issue is going to solve. This will be used during testing to ensure that issue passes the defined criteria.
- All issues should be labeled by the nature of the issue and have some rating of the complexity of the issue (i.e. [story point estimation](https://medium.com/serious-scrum/how-to-estimate-in-story-points-ec3ffe6d43f5)). For new contributors, it is helpful to use a tag such as “good first issue” to designate issues that would be good for newcomers to take up.

#### Coding conventions (for software projects)

When starting a software project, certain technologies and architecture choices will be selected for the project and depending on this, there are different established best practices that should be followed when writing code. [Coding conventions](https://github.com/topics/coding-conventions) help to improve the code quality while making sure the code base is written in a way that can easily be interpreted by new contributors to your project. It is important to work with developers early in your project process to define what coding conventions the project should follow. This can include style guides for writing code such as for [Python PEP 8](https://www.python.org/dev/peps/pep-0008/) and [JavaScript](https://github.com/airbnb/javascript) while also including practices such as writing unit and integration tests and setting targets for test coverage.

In Part 2 of this article we will discuss effective ways of engaging with open source contributors.

_This article is originally published on [Hikaya's blog](https://hikaya.io/blog/how-to-make-open-source-projects-contributor-friendly-part1)._

### About Hikaya

At [Hikaya](https://hikaya.io/), we are building a number of open source projects that help nonprofits better manage their data. By building open source solutions on common data standards, we help nonprofits worldwide improve their delivery of goods and services to those most in need while making reporting to funders more transparent. We are a team of data scientists, designers, humanitarians, and software engineers who have lived and worked in some of the most challenging parts of the world and are always welcoming new open source contributors to our team. If you are interested in contributing or would like to learn more, check out our projects at [Hikaya in GitHub](https://github.com/hikaya-io).

### Further Reading

1. [Open Source pre-launch checklist](https://opensource.guide/starting-a-project/#your-pre-launch-checklist)

2. [GitHub contribution and dependency insights](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)

3. [The Value of Open Source Software](https://www.apereo.org/content/value-open-source-software)
