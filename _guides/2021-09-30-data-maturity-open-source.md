---
layout: blog-post
title: "Leveraging Open Source Software to Build a Data Mature Ecosystem in the Social Sector: An Introduction"
authors:
  - author: Benjamin Kinsella
    authorTitle: Project Manager
    authorGitHubHandle: bjk127
    authorGitHubID: 25569016
tags:
  - tag: Data Analysis
  - tag: Data Collection and Management
  - tag: Reporting

# images should be in the /assets/img/posts/ folder
featuredImage:

outgoing: false
outgoingUrl:
---

## Introduction

The social sector has benefited enormously from the use of data analytics technologies, which have introduced novel ways that empower mission-driven organizations to continue achieving impact. For example, powerful open source languages and applications, such as Python, R, QGIS, MySQL, and many more, can be used for a variety of data science and analytics tasks. These tools allow an entity to get up and running with a data-driven solution. However, while social sector organizations can tackle an abundance of data-related challenges using available off-the-shelf tools, many organizations must also consider those foundational pieces and leadership buy-in to begin harnessing the power of data. This guide examines data maturity from the perspective of open source software (OSS) and lists several features that many organizations could use to bolster their data practices.

## What is Data Maturity?

Data maturity is a concept used to create structure around an organization’s data capabilities, providing organized frameworks that guide their work. Data maturity encompasses multiple dimensions. For example, certain frameworks seek to characterize an organization’s data infrastructures, as well as the activities, skills, knowledge, leadership buy-in, ethics, and more. There are several frameworks that conceptualize these different elements, albeit with different foci, which serve as models for social impact organizations toward becoming more data mature (see [Table 1](#table-1-common-data-maturity-frameworks-in-the-social-sector)).

### Table 1: Common Data Maturity Frameworks in the Social Sector


| Data Maturity Framework | Summary |
| ----------------------- | ------- |
| <img src="/assets/img/posts/v1-data-orchard-data-kind-mf.png" alt="Data Kind-Data Orchard maturity framework" width="200"> | [Data Orchard’s and DataKind UK’s framework](https://drive.google.com/file/d/1wA_QKt49xzdxBguqQiFMu6VBgzEnCyZP/view) examines data maturity through seven lenses: leadership, skills, culture, data, tools, uses, and analysis. |
| <img src="/assets/img/posts/CARE-icon.svg" alt="MERL logo" width="200"> | [CARE](https://www.care.org/)’s [Responsible Data Maturity Model](https://www.ictworks.org/wp-content/uploads/2019/11/Responsible_Data_Maturity_Model_10-16-19.pdf) provides a planning tool for organizations to evaluate their current data practices to identify resources and support for future efforts. In addition to examining elements, such as data and technology readiness, CARE emphasizes the need for “responsible” action to respond to the ethical, legal, social, and privacy-related challenges that come from using data. |

## What is Open Source Software (OSS)?

OSS is broadly defined as software that is freely distributed and uploaded to an accessible repository that provides source code. More specifically, code, data, or content has to be under an open source license, insofar that the code base is _accessible_ at no cost (see [The Open Source Initiative](https://opensource.org/osd) for further definitions). It is also important to note that the Open Source model is decentralized and encourages open collaboration through its source code and documentation, which is freely available to the public. For a further discussion on OSS, see MERL’s guide on [Evaluating Open Source versus Proprietary Software](https://merlcenter.org/guides/evaluating-open-source-vs-proprietary-software/).

## What is the Relationship between OSS and Data Maturity?

The sample of data maturity frameworks listed above encompass multiple dimensions when thinking of organizational practices that advance and support data use. Consider the example of a social sector organization using data to make programmatic decisions. The data collection efforts, analyses, and report insights rests not only on the organization’s data architectures and tools, but also on the processes that actually allow a team or individual to trust the data they use and make decisions from the insights.

For instance, consider the most basic level - organizations collect data to answer questions: How much did we do? How many people did we impact? How much did we spend? Along this “data supply chain”, each individual and team sees and engages with data - albeit in different ways. Put differently, data flows from basic program activities toward higher levels of aggregation, which are generally used for impact measurement and reporting. A challenge, however, is that the processes of data collection and storage are non-trivial for social sector organizations. Many entities may not have the needed architectures (i.e., databases), workflows, and knowledge to drive value out of their available data. [Exploratory research on data workflows](https://merlcenter.org/guides/open-source-merl-workflows/) by Kumar, Coker, and Mahadevan (2020) demonstrates the importance of these project lifecycles from a monitoring, evaluation, research, and learning (MERL) perspective. That is, the authors showcase how MERL workflows need to be understood to begin integrating OSS tools’ functionality across social sector organizations and, specifically, the MERL lifecycle.

To summarize, OSS offers additional pathways, which have the potential to advance social sectors’ data capabilities. New digital technologies not only provide organizations with the opportunity to extract insights from their data, but also allow them to build, support, and integrate diverse data sources that further drive data-driven decision-making. This article exemplifies these different approaches and considers common OSS tools and frameworks that have the potential to advance data maturity across social sector organizations.

<p align="center"><img src="/assets/img/posts/oss-relationship-dm.png" alt="Relationship between OSS and data maturity" width="500"></p>

## Data and Infrastructure

Without data and the architectures to support its use, organizations would be unable to advance a data-driven culture and capabilities. Put differently, as organizations collect, quality check, and analyze more copious amounts of data, it is imperative that the right infrastructures are in place. There is an abundance of OSS tools that support database development and administration, and the ways in which data are stored, documented, organized, and queried.

**OSS Applications for Data and Infrastructure**

| Data Maturity Questions | Topics to Consider | Examples OSS Application |
| ----------------------- | ------------------ | ------------------------ |
| Does the organization have access to a central data repository (e.g., relational database)? | There are several established OSS databases that allow organizations to get up and running with infrastructure needed to manage data. | There are a variety of widely used OSS relational databases, like [MySQL](https://www.mysql.com/), [PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL), [MariaDB](https://go.mariadb.com/download-mariadb-server-community106.html?utm_source=google&utm_medium=ppc&utm_campaign=MKG-Search-Google-Branded-NAM&matchtype=e&keyword=mariadb&cid=14238174378&agid=126271746952&device=c&placement=&creative=544660683268&adposition=&gclid=CjwKCAjw-ZCKBhBkEiwAM4qfF3nBTaUAdZLQm1FURk6EzPb0hmqUF6g-TVE7rLMBOPLcyMH3MXYMTBoC_VgQAvD_BwE), among others; There are also many tools for conducting ETL tasks, like [dbt](https://www.getdbt.com/), as well as [Airbyte](https://airbyte.io/) and [Docker](https://www.docker.com/) for deployment. |
| Does the organization understand how the data was acquired and it is currently being stored? | Data provenance and storage are essential when collecting and storing data. To that end, there are a growing number of OSS tools which provide data quality, data preparation, and data integration solutions for big messy data! | [Talend Open Studio](https://www.talend.com/products/talend-open-studio/) graphically profiles the data, which can be shown to team members. [Amundsen](https://www.amundsen.io/) is a popular OSS tool that allows users to search through a dataset to ensure data are trust for analyses and models; [DataHub](https://datahub.io/) provides users with commonly-used data through easy-to-use open data packages. |
| Is there documentation or a data dictionary? | Data documentation helps ensure that the data will be understood and interpreted by any user. There are several OSS applications that support data documentation | [Tokern](https://tokern.io/) features a data dictionary to create and manage a single-source of truth. [Great Expectations](https://greatexpectations.io/) is another popular OSS to manage data. |
| Does the organization monitor data for its quality? Is there trust that data is accurate and complete? | Inaccurate data can lead to significant decisions, so it is important that organizations monitor data for its completeness, consistency, and accuracy. There is a growing number of OSS tools to monitor data quality. These tools support efforts to cleanse data, validate, identify, and even remove duplicate records. | [Talend Open Studio](https://www.talend.com/products/talend-open-studio/) helps build basic data pipelines and executes simple ETL and data integration tasks. [OpenRefine](https://openrefine.org/) is a powerful OSS tool for working with messy data: cleaning it; transforming it from one format into another; and extending it with web services and external data. Similarly, [Apache Griffin](https://griffin.apache.org/) is an OSS solution for data quality and big data. [Ataccama](https://www.ataccama.com/) is another OSS tool that ensures data products are met with governance and compliance. |
| Are there processes for keeping data up to date? | Quality checking data also requires regular review periods to ensure data are up to date. In addition to the data profiling tools listed above, additional workflows and platforms. | [Debezium](https://debezium.io/) is an OSS distributed platform for capturing data changes. |

### Data Knowledge and Skills

Delivering value out of data requires an OSS tool that can magically offer the knowledge and skill sets needed to use and understand data. However, OSS tools are designed for the community and in most instances, should be accompanied with documentation, demos, and even use cases. Moreover, tools are only as good as the person using them, so context and domain expertise remain paramount. For an organization that aims to advance their data knowledge and skills, there are a number of resources and available frameworks that give team members the ability to take their first steps with data. These resources should also complement the team’s pre-existing context and domain expertise.

**OSS Applications for Data Knowledge and Skills**

| Data Maturity Questions | Topics to Consider | Examples OSS Application |
| ----------------------- | ------------------ | ------------------------ |
| Do staff demonstrate skills in data literacy and general analytics-related tasks? | Many OSS tools are accompanied with relevant documentation and even demos. These materials not only demonstrate the value of the particular tool, but can also serve to de-risk its adoption within the organization. | Manuals like those found in [R’s CRAN projects](https://cran.r-project.org/manuals.html) and [Python’s packages](https://www.python.org/doc/) give rigorous documentation for packages that support their applications. |
| Are there specific skilled-analytics (e.g., reporting, evaluation, data engineering, data science, etc.) roles within the organization? | Along the data supply chain (e.g., data acquisition, management, analysis, reporting, etc.), OSS can be used and even integrated with one another to ensure interoperability. Each individual and team sees and engages with data in different ways, as data flows from basic program activities toward higher levels of aggregation for reporting. | Popular statistical and analysis packages in R and Python support are interoperable with many other programming languages and platforms, including SQL, D3, Stan, C++, and more. Moreover, [Jupyter](https://jupyter.org/), which is a notebook style integrated development environment (IDE) can be easily shared across teams and even reproduced. |
| Do staff have a general understanding of data and the ways it can be used to make decisions across the organization? | Tools are only as good as the person using them, so context and domain expertise remain paramount. However, OSS tools continue to publish publicly available documentation under the [Creative Commons](https://creativecommons.org/licenses/by-nc-nd/3.0/us/) license and guides to support data skill building! | There are numerous [bookdown](https://bookdown.org/) files that can be accessed publicly with an abundance of tutorials and specialized topics like [“Quantitative Methods for Policy Analysis”](https://bookdown.org/njenk001/qmppa/), [“Hands on Programming with R”](https://rstudio-education.github.io/hopr/), and many more! |
| Is data seen as a team effort, rather than just one person's responsibility? | To become a data literate organization, teams should regularly and fully explain to all staff how data and tools connect to the mission and show how data from one area/program/team is used by others. | OSS alternatives to [JIRA](https://www.atlassian.com/software/jira), like [OpenProject](https://www.openproject.org/blog/open-source-jira-alternative/), offer sophisticated issue tracking with custom fields and workflow customization. Teams can adopt these tools to develop processes that better communicate data uses across the organization. |

### Breadth of Data Use Cases

There is a wealth of OSS tools specifically designed to handle a diverse range of data use cases, everything from managing and manipulating data, performing analyses, evaluating outputs, and more. The proliferation of OSS data tools has had an outsized impact on the social sector, allowing organizations to become more effective across their data supply chain.

**OSS Applications for Data Use Cases**

| Data Maturity Questions | Topics to Consider | Examples OSS Application |
| ----------------------- | ------------------ | ------------------------ |
| How does the organization currently use data? Is it for descriptive purposes (e.g., reporting, evaluation, etc.)? | There are many OSS tools with large communities to support and maintain common data analysis activities. Many of these packages come with demos and extensive documentation to make it easy to apply them to new data. | [Tidyverse](https://www.tidyverse.org/) is a popular package,including [ggplot2](https://ggplot2.tidyverse.org/) for visualization, [tidyr](https://tidyr.tidyverse.org/) for data tidying, and [dplyr](https://dplyr.tidyverse.org/) for data manipulation, and much more. Python also provides a variety of packages that make data analysis and visualization easy, like [Pandas](https://pandas.pydata.org/) and [Matplotlib](https://matplotlib.org/). Additionally, [Apache Superset](https://superset.apache.org/), is a popular OSS tool to easily visualize data. |
| Are more advanced applications used, like predictive, inferential, or prescriptive analytics (e.g., optimization, recommending decisions for effective intervention, experimental design, simulation, artificial intelligence)? | A large number of OSS applications, particularly in Python and R, have been developed to conduct more advanced applications, which are used for more predictive, inferential or prescriptive tasks with large amounts of data. | [Tensorflow](https://www.tensorflow.org/) is an OSS library for machine learning and artificial intelligence tasks. Python’s [Scikit Learn](https://scikit-learn.org/stable/) includes packages and documentation for various tasks, like classification, regression and clustering algorithms. |
| Does the organization learn from data to improve programmatic and/or organizational processes? | Reviewing how data is used across business processes and/or program evaluation can surface where best to focus and foster a data-driven culture. | OSS tools like [WordPress](https://wordpress.org/about/) and other internal communication tools allow organizations to effectively document and share learnings to improve programmatic and organizational processes. |
| Are data from different sources brought together and analyzed in an automated way (e.g., we have a dashboard/business intelligence system/data warehouse, pulling data from different tools and systems)? | There are a number of OSS applications to build dashboards and visualizations, which provide interactive visualizations in an easy. Even better, the community continues to update use-cases and galleries, which can be viewed publicly, categorized into application areas and presented with a brief description, tags, and for many, the source code. | [R’s RShiny](https://shiny.rstudio.com/) package allows users to build interactive dashboards. Similarly, [Python’s Plotly](https://plotly.com/) allows users to build interactive dashboards. |
| Are datasets and/or results shared with external stakeholders when applicable? | Sharing data and/or results could enable greater transparency, as well as produce actionable insights and foster a culture of reproducible science. | [R’s KnitR](https://yihui.org/knitr/) allows users to generate and share reproducible reports, which can be shared in multiple formats (e.g., html, PDF, etc.). Dashboards can also be made public, like those created on [RShiny](https://shiny.rstudio.com/tutorial/written-tutorial/lesson7/) and [Plotly](https://plotly.com/). Another method may include sharing on a [GitHub](https://github.com/) public repository and/or [GitHub Pages](https://pages.github.com/), which can share results online using packages like [Jekyll](https://jekyllrb.com/). Similarly, [DataHub](https://datahub.io/) allows users to securely share and put data online with quality checks, versioning, and even data APIs. |

### Responsible Data Practices

It is important to note that OSS applications extend beyond the traditional conceptions of software products and their role in building data infrastructures. In fact, essential elements that make up OSS play an enormous role within the framework of data maturity, including, for example, privacy, security, governance, and compliance. These “responsible” data practices, touched upon in CARE’s model, are critical throughout MERL workflows, and include practices like GDPR compliance, data security, data provenance, and even ethical decision making. Addressing the intersection of the ethical, legal, social and privacy-related challenges across organization’s data workflows is an important step to mitigate risks while doing social justice work.

**OSS Applications for Responsible Data Practices**

| Data Maturity Questions | Topics to Consider | Examples OSS Application |
| ----------------------- | ------------------ | ------------------------ |
| Is there a minimum policy and practice in place to ensure data is safeguarded? | Stored data must be safely secured to protect against privacy and security threats. There are many best practices available, as well as OSS tools to support. Many OSS applications also provide documentation! | [GitHub’s guidance on privacy and security](https://github.com/security) provides key considerations for technologists when using OSS tools and repositories. [Gretel.ai](https://gretel.ai/) provides privacy engineering tools that can be used for multiple purposes, like synthetic data creation, in addition to documentation pointing to best practices. |
| For what purpose was the dataset created? Was it for a specific task or initiative? Who collected the data (e.g., a specific team or research group, field workers, etc.)? | Understanding data provenance is a key step to determine the ethical implications of data and mitigating against potential discriminatory outcomes during analysis. For example, was there consent during data collection? Were participants aware of any potential harms? See the [Datasheets for Datasets](https://arxiv.org/abs/1803.09010) checklist for further discussion. | [CamFlow](https://camflow.org/) from Cambridge University is an open-source project to bring observed provenance collection to the Linux Operating System.[Kepler](https://kepler-project.org/) is a system for creating scientific workflows with explicit provenance capture tools. For more resources on data provenance, read more on [Harvard’s Provenance Tools](https://projects.iq.harvard.edu/provenance-at-harvard/tools) page! |
| Does the organization check biases in the sample selection or variables for analyses? | Conducting analyses, particularly machine learning models, have the ability to amplify societal biases. Examining for these biases in the sample selection or variables is imperative in mitigating potential discriminatory risks. | [Fairlearn](https://fairlearn.org/) is an open-source, community-driven project to help data scientists improve fairness of AI systems. [Causal Inference 360](https://github.com/IBM/causallib) (causallib) Python toolkit estimates the causal effect of an intervention on some outcome from real-world non-experimental observational data. Moreover, [Fairlens](https://www.synthesized.io/post/announcing-fairlens) is another OSS tool that discovers bias in organizational datasets. |
| Does the organization consider data governance to safeguard the integrity of data assets? | As data and its applications have become crucial for organizations, the importance of data governance tools to safeguard the integrity of data assets has increased. Streamlined master data-management and higher data interoperability. | [Talend Open Studio](https://www.talend.com/products/talend-open-studio/), as previously mentioned, graphically profiles data, and manages files from a locally installed OS environment that can be controlled. |

## Conclusion

Data Maturity frameworks are useful frameworks for social sector organizations who seek opportunities to grow their data capabilities. It comprises more than just the underlying architectures that support quality data and their varying usages (e.g., descriptive and prescriptive analytics, evaluation and learning, etc.). These frameworks should also advocate for the responsible and ethical uses of data, including but not limited to data governance, data provenance, data privacy and security, and broadly, ethical approaches to data decision-making.

To summarize, this guide sought to delineate common approaches to data maturity and examine common OSS applications and tools that many organizations can take at any point during their data journey.

### Resources

- [The FAIR Data Maturity Model (pdf)](https://drive.google.com/file/d/1-bk77T85HSgasFbNI2fs0_zL2DSSF9nl/view)
- CARE's [Responsible Data Maturity Model](https://drive.google.com/file/d/1wA_QKt49xzdxBguqQiFMu6VBgzEnCyZP/view)
- DataKind UK and Data Orchard's [data maturity checklist](https://docs.google.com/spreadsheets/d/1q-Ts4rRPWeI7is9mnSPPwWPKTGGle8qNrEdIt1bzlD0/edit#gid=1292036421)
- Digital Impact’s [Journey to Data Maturity](https://digitalimpact.io/assessing-your-place-on-the-data-maturity-journey-part-1/)
- [MERL Tech Maturity Models](https://merltech.org/merl-tech-maturity-models/)
- Ryu, Park, and Park's (2006) paper, [“A Data Quality Management Maturity Model”](https://onlinelibrary.wiley.com/doi/abs/10.4218/etrij.06.0105.0026)
- Olutayo's (2019) paper, ["Comparative Study of ICT Maturity Measurement Models"](https://www.researchgate.net/publication/336376028_A_Comparative_Study_of_ICT_Maturity_Measurement_Models)
- Open Data Institute’s report on [designing sustainable data institutions](https://theodi.org/article/designing-sustainable-data-institutions-paper)

### Acknowledgements

This work would not have been possible without the contributions of colleagues and friends from the MERL Center, DataKind, and the broader open source community. Thank you, Mala Kumar, Linda Raftree, Stephanie Coker, Amy Sample Ward, Rachel Wells, and Kevin Kho for your insights and expertise!
