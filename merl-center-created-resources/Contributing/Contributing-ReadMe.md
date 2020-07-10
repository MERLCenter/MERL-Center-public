## Contribution Permissions Levels

There are two ways to look at permissions levels:

- What functions a person or a group of people (called a "Team" in GitHub) can do on the GitHub platform 
- What a person or group of people feel comfortable, qualified and able to do in relation to types of contributions (see above) 

For example, a working group member might be an expert in MERL and can therefore edit the way something is phrased in a piece of learning content. However, in order to make changes to the learning content on GitHub, they may only need the `write` permissions level, not `maintain` or `admin`. Conversely, another working group member might be a MERL beginner and doesn't have the knowledge to make edits on learning content. However, because they write code for the public website, they need the `maintain` or `admin` permission level on GitHub. To learn about repository permissions, [click here](https://docs.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization).


### Contributions and Roles

The below table enumerates how Working Group roles correspond to different **GitHub** functions and the equivalent **GitHub** team for this repo. Consult the picture below to visualize how the teams are set up.

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

[Codeowners](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/about-code-owners) are maintainers who are responsible for code in the repo. Codeowners can be assigned to review a specific change to a type of contribution. This helps to ensure unwanted changes are not made, such as pull requests, merges, additions and deletions. However, working group members are expected to be conscious of their work and stick to files in the MERL Center they are able and have stated they will change.

![MERL Center Public Repo Permissions Model](https://github.com/MERLTech/MERL-Center-public/blob/master/merl-center-created-resources/Contributing/MERL%20Center%20Public%20Repo%20Permissions%20Model.png)
