# Open Source for MERL Workflows

_By Stephanie Coker, Mala Kumar and Vidya Mahadevan_

## Background
In the social sector, we use [Monitoring, Evaluation, Research and Learning (MERL)](https://github.com/MERLTech/MERL-Center-public/blob/master/MERLdefinition.md) to understand if programs achieve their intended impact and through ongoing monitoring of activities, allow managers to provide course correction during the program lifecycle.  The MERL **lifecycle** is designed to encourage a continuous feedback loop and facilitate ongoing program adaptation. While there are many ways to depict a MERL **lifecycle**, this post will focus on how the MERL lifecycle relates to MERL **technology workflows** and the corresponding **functionality** of open source tools. 

A **MERL technology workflow** (including open source) is defined as a series of discrete tasks using digital technology that together form an orchestrated and repeatable pattern of activity. The MERL lifecycle - below - is continuous in nature, and MERL technology workflows can support multiple stages of the MERL lifecycle. Understanding MERL workflows is key to integrating open-source tools’ **functionality** in the MERL lifecycle.

MERL practitioners describe three main groups of **MERL technology workflows**:
- Data Collection and Management (DCM)
- Data Analysis and Visualization (DAV)
- Reporting (Rep)

_Where_

- **Data Collection and Management** are MERL technology workflows that include but are not limited to:
  - Creating, configuring or using a technology platform (e.g. mobile app, website) to gather quantitative or qualitative data, such as survey responses
  - Storing quantitative or qualitative data, such as survey responses, on a database or spreadsheet
  - Creating, modifying, enforcing permissions models to access quantitative or qualitative data through a technology platform
- **Data Analysis and Visualization** are MERL technology workflows that include but are not limited to:
  - Inputting or importing raw data into a spreadsheet
  - Cleaning raw quantitative or qualitative data in a spreadsheet or with a script (code)
  - Generating a visualization using all or some of cleaned data
  - Modifying the design or inputs of a visualization 
- **Reporting** is MERL technologies workflows that include but are not limited to communicating research or learnings on a technology platform (e.g. blog, website, social media)

In a typical MERL lifecycle, these workflows occur at each stage and often happen simultaneously.

_Figure 1 - Typical MERL and Program Implementation Lifecycle_
![MERL Lifecycle](https://github.com/MERLTech/MERL-Center-public/blob/master/learning-content/beginners-guides/open-source-for-MERL-workflows-MERLlifecycle.png)

For example, data visualizations can inform the design, implementation and learning of a project’s MERL lifecycle. However, the workflow of creating a data visualization requires a set of tasks to input (cleaned) data into a tool that produces a visual output. An open source tool’s **functionality** refers to the tasks it can do as part of a **MERL technology workflow**. 

The below table illustrates one stage of the MERL lifecycle mapped to a MERL technology workflow and example tasks/functionality.

**Example - MERL Lifecycle vs MERL Technology Workflow**

Portion of MERL Lifecycle | Corresponding MERL Technology Workflow | Example Tasks/Functionality
------------------------- | -------------------------------------- | ---------------------------
Communicate, Research     | Data Analysis and Visualization        | Input or import raw data into a spreadsheet
"     | "        | Clean raw data
"     | "        | Select section of raw data for visualization
"     | "        |Generate visualization
"     | "        | Modify design of visualization

The following table provides example Open Source Software (OSS) - [see footnote](#footnote-1) - tools for different MERL technology workflows and tasks/functionality. Note that this table is a starting point for exploring OSS tools for MERL and is not meant to be comprehensive. Links to explore more MERL open source tools are listed below the table.Some OS tools listed in the provide functionality for more than one **MERL technology workflow**, but the majority do not. Consequently, it becomes easier to identify OSS tools if you are able to identify the **MERL technology workflow** and the output needed, such as an evaluation matrix, spreadsheet or dashboard. 

## MERL Technology Workflows and Examples of OSS Tools

MERL Technology Workflow | Tasks and Functionalities | MERL Output | Examples Open Source Software or Tool | Website | GitHub repository
------------------------ | ------------------------- | ----------- | ------------------------------------- | ------- | -----------------
Data Analysis and Visualization | <ul><li>Create visual representations of theories</li><li>Create visual representations of frameworks</li><li>Track KPIs</li></ul> | Theory of change | Theorymaker | http://theorymaker.info/ | https://github.com/optimus-sma/theorymaker
"  | "  | Evaluation matrix | Kashana | http://kashana.org/ | https://github.com/aptivate/kashana | 
"  | "  | Key performance indicators (measurement) framework | Kashana | http://kashana.org/ | --
Data Analysis and Visualization | <ul><li>Create visual representations of MERL activities</li><li>Project management</li></ul> | MERL Gannt/Project Timeline | OpenProject | https://www.openproject.org/ | https://github.com/opf/openproject
"  | "  | Roles and responsibilities for MERL org chart | diagrams.net | https://www.diagrams.net/ | https://github.com/jgraph/drawio
Data Analysis and Visualization | Create [visual] representations of theories and frameworks | Theory of change | Theorymaker | http://theorymaker.info/ | https://github.com/optimus-sma/theorymaker
"  | Evaluation matrix | Kashana | http://kashana.org/ | https://github.com/aptivate/kashana 
Data Collection and Management | <ul><li>Create surveys</li><li>Create and store quantitative data</li><li>Create and store qualitative data</li></ul> | Survey data | Kobo Toolbox | https://www.kobotoolbox.org/ | https://github.com/optimus-sma/theorymaker
"  | "  | Interview recordings/transcriptions | oTranscribe | https://otranscribe.com/ | https://github.com/oTranscribe/oTranscribe
"  | "  | Database management | PostgreSQL | https://www.postgresql.org/ | https://github.com/postgres/postgres/
Data Analysis and Visualization, Reporting | <ul><li>Perform statistical analyses</li><li>Perform text analysis</li><li>Perform content analysis</li><li>Generate data visualizations</li></ul> | Statistical analysis (descriptive and inferential) | https://www.r-project.org/ | https://github.com/r-lib
"  | "  | Text and content analysis | Coding Analysis Toolkit | https://cat.texifter.com/ | -- 
"  | "  | Geospatial analysis | QGIS | https://qgis.org/en/site/ | https://github.com/qgis
"  | "  | Documents - Word processing | LibreOffice | https://www.libreoffice.org/ | https://github.com/LibreOffice
"  | "  | Spreadsheet tracking/analysis | ODK Aggregate | https://docs.getodk.org/aggregate-intro/ https://github.com/getodk/aggregate/releases/tag/v2.0.5
"  | "  | Dashboard creation | Rstudio Shiny | https://rstudio.github.io/shinydashboard/ | https://github.com/rstudio/shinydashboard

One goal of the [MERL Center on GitHub](https://merltech.github.io/MERL-Center-public/) is to help MERL practitioners identify open source tools for each stage of the MERL lifecycle, MERL technology workflow, functionality and output to increase adoption. By identifying examples of open source tools for each, we may encourage greater adoption of open source in MERL work.

#### Footnote 1 
A core tenant of the [Principles for Digital Development](https://digitalprinciples.org/principle/use-open-standards-open-data-open-source-and-open-innovation) is using Open Standards, Open Licensing, Open Source and Open Innovation whenever possible. This reduces the number of “sector-specific solutions that are locked away behind licensing fees.” As described by the many contributors to the report [Open Source Software in the Social Sector](https://socialimpact.github.com/#report), the decision on if and how to use an open source product is complex and will be addressed in further guides and case studies of the MERL Center. 

### Further reading
- UNICEF et al, 2020. “Digital Public Goods, Explore”. Accessed May 28, 2020. https://digitalpublicgoods.net/explore/
- Wasserman et al, 2017. “OSSpal: Finding and Evaluating Open Source Software”. Accessed May 26, 2020.
- https://link.springer.com/chapter/10.1007/978-3-319-57735-7_18
- Davies, 2011. “M&E Software: A List”. Accessed May 26, 2020. https://mande.co.uk/2011/lists/software-lists/me-software-a-list/
-  DIAL, 2020. Product Registry. Accessed May 27, 2020. https://registry.dial.community/products
