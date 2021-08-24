# Contributing to the MERL Center public repo
## Sections

[Background](#background) | [Licenses](#licenses) | [Types of MERL Center content](#types-of-merl-center-content) | [For MERL Center Members](#for-merl-center-members) | [Contact](#contact)

## Background
The MERL Center is an interdisciplinary community that is creating resources for [monitoring, evaluation, research and learning (MERL)](https://github.com/MERLTech/MERL-Center-public/blob/main/MERLdefinition.md) practitioners to understand if, how, and when to use open source solutions. The MERL Center is a part of the larger [MERL Tech](https://merltech.org) community and is organized and funded by GitHub's Social Impact, Tech for Social Good team. [You can read more about the MERL Center here.](https://socialimpact.github.com/insights/collaboration-power-merl-center/)

This is the public repository of the MERL Center on which publicly available learning content and the code for the forthcoming MERL Center website are hosted. MERL Center members collaborate on the MERL Tech GitHub organization (account) through two repositories - this public repo and a repo that is only for members. **Anyone who wishes to propose and contribute a new piece of content must go through a basic onboarding process and become a MERL Center member, which is free of charge and limited to those who have some experience in MERL and/or open source. Currently, only MERL Center members can propose changes to content, though this may change in the future to allow change proposals from anyone.** Anyone - regardless of MERL Center membership - can access published MERL Center content through this public repository. 

### Join the MERL Center
If you'd like to become a MERL Center member, [please fill out this form](https://forms.gle/ULFWYt6y4fkw2FH28). To become a MERL Center member, you must have some professional experience in MERL or experience in open source software, content or data.

### MERL Center Website
Content found on this repo can also be found at [https://merlcenter.org](https://merlcenter.org).

## Licenses
- Learning Content (see below) is under the [CC-BY-4.0 license](https://creativecommons.org/licenses/by/4.0/)
- Code is under [the MIT license](LICENSE)

[Back to top](#sections)

## Types of MERL Center content

### Learning Content

_For any inputs or outputs that are a direct part of case studies or beginner's guides_

- Text - text that is exclusively or primarily for a case study or a beginner's guide
- Images - charts, graphs, screenshots, photos that are exclusively or primarily for a case study or a beginner's guide
- Code - code that is exclusively or primarily part of a case study or a beginner's guide

### Web Code and Assets

_For any inputs or outputs that are part of the MERL Center public-facing website_

- Code - front-end or back-end code for a MERL Center website
- Assets - UI assets, other images, UX research, content for a MERL Center website

[Back to top](#sections)

## For MERL Center Members

### Create a New Piece of Learning Content
_Note you will need the correct permissions level (access) to follow the steps below. Contact themerlcenter@gmail.com if you don't have access. The following steps are for the browser version of GitHub. **Your piece of content [must have completed these steps](https://github.com/MERLTech/merl-center/blob/main/Contribute/contributing-ReadMe.md#steps-to-contribute-learning-content) before being submitted to this repo.**_

1. Go to the Code tab at the top of the screen
2. Click on the `_guides` or `_caseStudies` sub-directory (folder), depending on the type of content you're submitting
3. At the top right, click the `Add file` button, then `Create new file` if you don't already have a markdown file created. Click `Upload file` if you do already have a markdown file created.
4. Add your `frontmatter`, which is the information above the dotted lines to the file. [Follow this guide as an example.](insert link)
5. Below the dotted line, add the body of your content that is formatted in markdown. [Here's a markdown cheat sheet](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf) to help you format.
6. Click the `Commit changes` button to submit your file. This will open a [pull request](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) and automatically assign the [`CodeOwners`](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-code-owners) team to review and merge your pull request.
7. The CodeOwner may request you make changes before they merge your pull request. To do so, click on the `Pull requests` tab at the top, click on your pull request, then click on the three dots by your file to edit the file directly. You'll be prompted to either push those changes to the same pull request (branch) or or create another branch (think of it as a pull request to a pull request).

<img width="1635" alt="Screen Shot 2021-08-24 at 10 48 27 AM" src="https://user-images.githubusercontent.com/12953652/130639008-95248da6-6090-4a8a-a653-2f9389e57802.png">

8. After your pull request has been merged, your content will be live on the repo immediately and on the [MERL Center](https://merlcenter.org) website shortly.  

### Edit an Existing Piece of Learning Content
1. Navigate to the piece of learning content you wish to edit by following the first three steps above
2. Click the pencil icon indicated below
<img width="1258" alt="EditFile" src="https://user-images.githubusercontent.com/12953652/126375993-89b76420-766e-4df2-9f55-d117f35bd7d9.png">

3. Make your changes and click the `Commit changes` button. This will open a pull request and automatically assign the `CodeOwners` team to review. You can also assign a specific individual you want to review your changes, such as the author of the original post.
4. After your pull request has been merged, your content will be live on the repo immediately and on the [MERL Center](https://merlcenter.org) website shortly. The CodeOwner may request changes before merging.

### Formatting Options for Learning Content
- One author vs multiple authors
- One tag vs multiple authors
- Dates must be in DD/MM/YYYY

### Adding Pictures to Your Learning Content
_coming soon_

### CodeOwners

_Note that despite `CodeOwners` containing the word "code", the MERL Center uses `CodeOwners` to review and merge pull requests on text files._

`CodeOwners` are automatically assigned to pull requests made to files in a particular sub-directory to take out the guess work on who should edit a piece of learning content. You can read about [`CodeOwners` generally](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-code-owners) here and view the [MERL Center `CodeOwners` file here](https://github.com/MERLTech/MERL-Center-public/blob/main/.github/CODEOWNERS). Contact the MERL Center admins if you want to be added to the editing team.

### Permissions Levels
Types of Contributions | All Org Members | WG Writer | WG Editor | WG Admin | GitHub Teams
---------------------- | --------------- | --------- | --------- | -------- | ------------
Read-only LC | X | X | X | X | Anyone
Propose LC changes through [pull requests](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) | -- | X | X | X | merl-center-lc-writers
Approve and merge LC changes | -- | -- | X | X | merl-center-lc-editors
Approve and merge MCCR changes | -- | -- | X | X | merl-center-mccr-editors
Read-only WCA | X | X | X | X | Anyone
Propose WCA changes through [pull requests](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) | -- | X | X | X | merl-center-public-admins
Approve and merge WCA changes | -- | -- | X | X | merl-center-public-admins (to be added)
Change Repo settings | -- | -- | -- | X | merl-center-public-admins

**Abbreviations**

- WG = Working Group
- LC = Learning Content
- WCA = Web Code and Assets

![MERL Center Public Repo Permissions Model](https://github.com/MERLTech/MERL-Center-public/blob/main/contributing-images/MERL%20Center%20Public%20Repo%20Permissions%20Model.png)

### Things MERL Center Members can do to Modify the Website

_Only admins are allowed to make most changes to the MERL Center website. Below is a list of things any MERL Center member can do._

#### Add tags
1. Consult with the MERL Center admins to propose a tag
2. Go to (insert file).yaml 
3. Follow the steps above to make a pull request and add your tag

_more coming_

[Back to top](#sections)

## Contact

Email [themerlcenter@gmail.com](mailto:themercenter@gmail.com) with feedback or questions.

[Back to top](#sections)
