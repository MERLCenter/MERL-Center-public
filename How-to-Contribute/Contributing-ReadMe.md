# Contributing to the MERL Center

## Sections

[Types of Contributions](#types-of-contributions) | [Licenses](#licenses) | [Repos](#repos) | [Ways to Contribute](#ways-to-contribute) | [Contribution Permissions Levels](#contribution-permissions-levels) | [Steps to Contribute Content](#steps-to-contribute-content) | [Approving Content](#approving-content) | [Forthcoming](#forthcoming)

## Types of Contributions

_Note that in some cases the boundaries among these categories might overlap!_

### Project Management Tools

_For anyone interacting with any part of the MERL Center in this repo_

- Issues
- Issue templates
- Project boards
- Wiki

### Learning Content

_For any inputs or outputs that are a direct part of case studies or beginner's guides_

- Text - text that is exclusively or primarily for a case study or a beginner's guide
- Images - charts, graphs, screenshots, photos that are exclusively or primarily for a case study or a beginner's guide
- Code - code that is exclusively or primarily part of a case study or a beginner's guide

### Web Code and Assets

_For any inputs or outputs that are part of the MERL Center public-facing website_

- Code - front-end or back-end code for a MERL Center website
- Assets - UI assets, other images, UX research, content for a MERL Center website

### MERL Center Created Resources

_Resources that are created as a result of and/or govern the MERL Center_

- Workflows
- Frameworks
- Style guidelines

### External Resources

_External resources the MERL Center did not create, but that help with creation of the above types of contributions. See current list of external resources in the [Wiki](https://github.com/MERLTech/merl-center/wiki)_

- Standards of best practices
- Guidelines, lists or other tools

## Licenses

- Code and data is published under the MIT license
- Text and images are under the [CC-BY-4.0 license](https://creativecommons.org/licenses/by/4.0/)

[Back to top](#sections)

## Ways to Contribute

- As a writer or editor of the Case Studies working group
- As a writer or editor of the Beginner's Guide working group
- As a writer or editor to MERL Center Created Resources outside of a working group
- As a public member of the MERL Center

[Back to top](#sections)

## Repositories (Repos)

Content for the MERL Center is produced by working group (WG) members and can be copied (forked) and used by any public member in accordance with our licenses (see above). All WG members have access to a **private** repo in which new content is proposed and discussed. Final outputs from the private repo are then made available here for the public. Creating and discussing content in a private repo is important for fostering a safe space for discussions, especially for WG members who are new to GitHub and/or working on sensitive topics.

[Back to top](#sections)

## Contribution Permissions Levels

There are two ways to look at permissions levels:

- What functions a person or a group of people (called a "Team" in GitHub) can do on the GitHub platform 
- What a person or group of people feel comfortable, qualified and able to do in relation to types of contributions (see above) 

For example, a working group member might be an expert in MERL and can therefore edit the way something is phrased in a piece of learning content. However, in order to make changes to the learning content on GitHub, they may only need the `write` permissions level, not `maintain` or `admin`. Conversely, another working group member might be a MERL beginner and doesn't have the knowledge to make edits on learning content. However, because they write code for the public website, they need the `maintain` or `admin` permission level on GitHub. To learn about repository permissions, [click here](https://docs.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization).

### Public Repo

The below table enumerates how Working Group roles correspond to different **GitHub** functions and the equivalent **GitHub** team for this public repo. Consult the picture below to visualize how the teams are set up.

Types of Contributions | All Org Members | WG Writer | WG Editor | WG Admin | GitHub Teams
---------------------- | --------------- | --------- | --------- | -------- | ------------
Read-only LC | X | X | X | X | merl-center-public
Propose LC changes through [forks](https://github.com/orgs/MERLTech/teams) | X | -- | -- | -- | merl-center-public
Propose LC changes through [pull requests](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) | -- | X | X | X | merl-center-lc-writers
Approve and merge LC changes | -- | -- | X | X | merl-center-lc-editors
Read-only MCCR | X | X | X | X | merl-center-public
Propose MCCR changes through [forks](https://github.com/orgs/MERLTech/teams) | X | -- | -- | -- | merl-center-public
Propose MCCR changes through [pull requests](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) | -- | X | X | X | merl-center-mccr-writers
Approve and merge MCCR changes | -- | -- | X | X | merl-center-mccr-editors
Read-only WCA | X | X | X | X | merl-center-public
Propose WCA changes through [forks](https://github.com/orgs/MERLTech/teams) | X | -- | -- | -- | merl-center-public
Propose WCA changes through [pull requests](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) | -- | X | X | X | merl-center-wca-writers
Approve and merge WCA changes | -- | -- | X | X | merl-center-wca-editors
Read-only PMT | X | X | X | X | merl-center-public
Edit PMT | -- | X | X | X | All teams except merl-center-public
Change Repo settings | -- | -- | -- | X | merl-center-public-admins


Abbreviations*

- WG = Workring Group
- LC = Learning Content
- MCCR = MERL Center Created Resrouces
- WCA = Web Code and Assets
- PMT = Project Management Tools

[Codeowners](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/about-code-owners) are editors who are responsible managing proposed changes - either through pull requests or forks - in certain sub-directories ("folders") of the repo. Learning Content Codeowners, for example, can only approve and merge changes made in #learning-content. This helps to ensure unwanted changes are not made. However, working group members are expected to be conscious of their work and stick to files in the MERL Center they are able and have stated they will change.

![MERL Center Public Repo Permissions Model](https://github.com/MERLTech/merlcenter/blob/master/Contribute/MERL%20Center%20Public%20Repo%20Permissions%20Model.png)

[Back to top](#sections)

## Steps to Contribute Learning Content

All Learning Content is created by working group members that have access to a **private** repo. To join a Learning Content working group, please email malakumar85@github.com (group email forthcoming) with a brief intro to your work and experience. To contribute to other content types, please email malakumar85@github.com and describe how you would like to get involved. You will be added to the appropriate teams on this repo.

[Back to top](#sections)

## Approving Learning Content

Before content is added to this public repo, it goes through an editing process based on the below checklist. Any proposed changes should also abide by these guidelines.

1. This checklist

- [ ] Is in an accessible format to all editors, such as a Google doc on the Shared drive
- [ ] Abides by the [Code of Conduct](https://github.com/MERLTech/merl-center/blob/master/Contribute/CODE_OF_CONDUCT.md)
- [ ] Is factually accurate 
- [ ] Explicitly states if something is an opinion
- [ ] Adheres to the [editorial guideline](https://github.com/MERLTech/merl-center/blob/master/Contribute/editorial-guidelines.md)
- [ ] Is attributed to the author unless otherwise requested
- [ ] Attributes quotes unless otherwise requested

2. Has gone through at least one round of edits by at least two editors.
3. All comments have been resolved (in Google docs, through discussions, etc.)
4. All content has been properly formatted.

The correct editing team is automatically assigned to proposed changes. If you would like a specific person to edit, please indicate who in the pull request.

[Back to top](#sections)

## Forthcoming

- Visual style guidelines
- Steps to submit and approve Web Code and Assets

[Back to top](#sections)
