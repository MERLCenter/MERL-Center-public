# Contributing to the MERL Center

## Sections

[Types of Contributions](#types-of-contributions) | [Licenses](#licenses) | [Repos](#repos) | [Ways to Contribute](#ways-to-contribute) | [Contribution Permissions Levels](#contribution-permissions-levels) | [Steps to Contribute Content](#steps-to-contribute-content) | [Approving Content](#approving-content)

## Types of Contributions

_Note that in some cases the boundaries among these categories might overlap!_

### Project Management Tools

_For anyone interacting with any part of the MERL Center in the public or private repository_

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

- Content created in the private repo is not freely licensed. 
- Content pushed to the public repo is under the [CC-BY-4.0 license](https://creativecommons.org/licenses/by/4.0/)

[Back to top](#sections)

## Repositories (Repos)

Content for the MERL Center is produced by working group (WG) members. All WG members have access to this **private** repo, and should first publish their learning content (text, images, content code) contributions here for review. After the WG reviews and approves, content can then be pushed to the **public** repo. [Click here to learn about GitHub repos.](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/about-repositories)

![Basic Content Creation Workflow](https://github.com/MERLTech/merl-center/blob/master/BasicContentContributionWorkflow.png) 

[Back to top](#sections)

## Ways to Contribute

- As a member of the Case Studies working group
- As a member of the Beginner's Guide working group
- As a contributor to MERL Center Created Resources outside of a working group

[Back to top](#sections)

## Contribution Permissions Levels

There are two ways to look at permissions levels:

- What functions a person or a group of people (called a "Team" in GitHub) can do on the GitHub platform 
- What a person or group of people feel comfortable, qualified and able to do in relation to types of contributions (see above) 

For example, a working group member might be an expert in MERL and can therefore edit the way something is phrased in a piece of learning content. However, in order to make changes to the learning content on GitHub, they may only need the `write` permissions level, not `maintain` or `admin`. Conversely, another working group member might be a MERL beginner and doesn't have the knowledge to make edits on learning content. However, because they write code for the public website, they need the `maintain` or `admin` permission level on GitHub. To learn about repository permissions, [click here](https://docs.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization).

This repo - the one you are in now - is the Private Repo. [The Public Repo is here](https://github.com/MERLTech/MERL-Center-public). [See Contributor names and roles here](https://github.com/MERLTech/merl-center/blob/master/Contribute/ContributorNamesandRoles.md)

### Private Repo

The GitHub team "MERL Center Private Repo" has access to this private repository. For now, everyone within the MERL Center Private Repo team - except two admins - have the default **GitHub** `write` permissions level. 


### Public Repo

The below table enumerates how Working Group roles correspond to different **GitHub** functions and the equivalent **GitHub** team for the public repo. Consult the picture below to visualize how the teams are set up.

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

![MERL Center Public Repo Permissions Model](https://github.com/MERLTech/merl-center/blob/master/Contribute/MERL%20Center%20Public%20Repo%20Permissions%20Model.png)

[Back to top](#sections)

## Steps to Contribute Learning Content

1. Re/open an issue using the Content Submission template in the private repo. Fill out the fields, describe your intended scope and add a basic timeline. 
2. Suggest editors by assigning them to the Issue. Editors can also self-nominate by self-assigning. You can look up editors in [this file](https://github.com/MERLTech/merl-center/blob/master/Contribute/ContributorNamesandRoles.md).
3. Write your content in a Google doc on the shared Drive, in GitHub or in another shareable format.
4. When you've got a draft to review, add the link to the issue and let editors know with an at-mention (@theirGitHubID) to know when you're ready for them to review.
4. Work with editors until content is complete and has met the approval criteria, below.
5. **To publish to the public repo:**
  - After you've finalized your work, write on your draft that edits are closed in the Google doc, draft GitHub file, etc. 
  - Convert your work to the markdown format (more info on suggested tools coming)
  - Go to the correct directory (sub-folder) in [Learning Content](https://github.com/MERLTech/MERL-Center-public/tree/master/learning-content) on the public repo.
  - Click add file - Create new file on the top right. Paste your text and add your filename. Make sure to add .md at the end of the file name.
  - At the bottom, click Commit changes. Your submission will automatically ping the correct team for review.
  - _If the above doesn't work, ping Mala or Froi on Slack. You most likely have not been added to the correct team to submit content._

[Back to top](#sections)

## Approving Learning Content

Editors may nominate themselves or others to approve a piece of content. Author(s) should also be included in the approval process and may nominate editors. For context text or images to be pushed to the public repo, the majority of the nominated WG editors + the author(s) must agree the content passes the following:

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

If an editor cannot complete the approval for any reason, they may nominate another. 

[Back to top](#sections)
