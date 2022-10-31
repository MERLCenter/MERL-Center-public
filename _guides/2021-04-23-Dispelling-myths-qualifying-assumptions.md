---
layout: blog-post
title: Dispelling myths and qualifying assumptions about open source for MERL practitioners
authors:
  - author: Melissa Edmiston
    authorTitle: insert
    authorGitHubHandle: Medmiston
    authorGitHubID: 70719187
  - author: Brittany Stubbs
    authorTitle: insert
    authorGitHubHandle: bns568
    authorGitHubID: 4657848
  - author: Anh Bui
    authorTitle: insert
    authorGitHubHandle: abuivn
    authorGitHubID: 70040791
  - author: Mala Kumar
    authorTitle: Director, Tech for Social Good at GitHub
    authorGitHubHandle: malakumar85
    authorGitHubID: 12953652
tags:
  - tag: Data Collection and Management
  - tag: Data Analysis and Visualization
  - tag: Reporting

# images should be in the /assets/img/posts/ folder
featuredImage:

outgoing: false
outgoingUrl:
---

_With edits by Stephanie Coker_

_Note that this beginner's guide is useful for any of MERL practitioners, program managers, procurement officers or funders who are interested in using or creating open source software, data or content for a MERL project or problem statement. [See our definition of MERL here](https://github.com/MERLTech/MERL-Center-public/blob/main/MERLdefinition.md)._

## Introduction

As the term open source becomes more popular, it is not always clear how it is applied and the true implications. There are many assumptions and myths around open source software and open data. ([1](https://merlcenter.org/guides/Dispelling-myths-qualifying-assumptions/#footnotes)) Below, we identify common examples of both. For assumptions, we lay out a few points to consider and resources to read before drawing a conclusion. We go on to dispel myths and provide a more accurate way to describe the concept. Having a clear understanding of these assumptions and myths can help Monitoring, Evaluation, Research and Learning (MERL) practitioners make informed decisions about how to design and use open source software or data.

## Common Myths and Assumptions

### MYTH - Open source and open data are the same

The terms **open source software** and **open data** are sometimes used interchangeably. In some cases, conflation of the terms makes the false assumption that they are the same thing; in other cases, it is falsely assumed that all open source software must also involve open data or vice-versa. Understanding their differences is important in all steps of MERL and open source program design and implementation.

Open data and open source software can work together, but have distinct differences and considerations including copyrights, licensing and publishing. Open data is the data itself...not the source code or the graphic user interface that comprise a software application. The following definitions come from the Principles for Digital Development ([2](https://merlcenter.org/guides/Dispelling-myths-qualifying-assumptions/#footnotes))

- **Open source**, or **open source software (OSS)** is software with source **code** that anyone can view, copy, modify and share.
- **Open data** comprise information (both quantitative and qualitative) that can be freely accessed, analyzed and shared, while still maintaining privacy protections.

To be considered “open source”, code, data or content must be under an open source license, in a machine-readable format and shared in the public domain. Much of the global open source code is hosted online in public repositories. ([3](https://merlcenter.org/guides/Dispelling-myths-qualifying-assumptions/#footnotes))

The [Open Source Initiative](https://opensource.org/licenses) has a breakdown of open source licenses for code. [Creative Commons](https://creativecommons.org/licenses/) has widely used open source licenses for content, some of which can be adapted for data. ([4](https://merlcenter.org/guides/Dispelling-myths-qualifying-assumptions/#footnotes)) The [Open Knowledge Foundation](https://opendatacommons.org/licenses/) is one of several organizations that have published open source licenses specifically for data.

For more information and considerations on when using open source software or open data, check out pages 37-39 of the [Open Source Software in the Social Sector](https://socialimpact.github.com/#report) report.

### ASSUMPTION - Developers always consider PII/PHI in their software testing

It’s safe to assume that most software developers are not MERL practitioners. What’s not safe to assume is the level of awareness a software developer has in terms of personal identifiable information (PII) or personal health information (PHI) when they are writing or testing code. While many software developers do code with privacy and security in mind, some may be unaware of legal requirements or ethical standards to handle such data. When building software that will ultimately contain PII/PHI, it’s vital - and in some cases legally required - that test data is separate from production data. There are many ways to create test data, one of which is to alter or anonymize production data in ways that protect PII/PHI. For more information on anonymizing test data, we recommend learning [more here](https://www.endava.com/en/blog/Engineering/2020/Creating-Relevant-Test-Data-Without-Using-PII).

### ASSUMPTION - Open source software is inherently secure / insecure

There are valid perceptions about the inherent in/security of open source software. In all cases, when selecting a software package - be it open source or proprietary - the security of the software code and how securely it handles different types of data needs to be evaluated. The choice can come down to the software itself and how the software is used.

According to the Open Source Software in the Social Sector report, “Open source experts noted popular OSS often incorporates best security practices, makes security practices visible and easier to identify and OSS is widely adopted as components of infrastructure technology in the commercial private sector.” However, even with total transparency of the code base, not all project teams may have the ability to do an analysis of the code. In fact, some software developers don’t see security as something they are meant to address or fix, as it requires a different set of skills and knowledge than building a (non-security related) product.

The OSS community usually issues small updates at a much faster pace than the average commercial software vendor. When these contain security updates, companies need to have a strategy to adopt them rapidly. However, OS updates also need to be pulled by users, and many companies using OS components don’t apply the patches they need, which opens their businesses to the risk of attack. According to the 2020 Open Source Security and Risk Analysis Report, 82% of OS components found in 2019 audits were out of date.

While the pricing models and feature lists of proprietary software packages is often more straightforward than open source software, it’s important to note that security is not always included in pricing of proprietary software licenses. However, many popular proprietary software licenses include customer service support, which can help troubleshoot security issues, provide assistance or suggest how to resolve a security breach. A similar level of support is less likely with open source software.

### ASSUMPTION - Using an open source software will leak my beneficiary data

Equally important to the security of a software’s code base and components (see above) is the data governance structures in place to handle data. While the two are interrelated, having an ironclad software package in place may not prevent a data leak if governance standards are not defined or met. This is true whether the software package is open source or proprietary.

Many frameworks have been proposed in order to provide public sector authorities with a guideline on how to appropriately meet their open data objectives in a privacy-aware way. Some national governments also have an existing information sensitivity scale based on its prevailing norms and values. For example, Germany has recognized three categories of sensitivity that are afforded specific levels of protection: intimate, private, and individual.

Standardizing these assessments in checklists or other official forms can help to ensure that a privacy impact assessment is successfully implemented. Technology tools can also be used to implement varying levels of privacy - pseudonymous data; anonymized data, aggregated data - into the design of data before the data is released.

### MYTH - Open source software is free

The term **free and open source software (FOSS)**, also known as **free/libre open source software (FLOSS)** can be misleading. It’s true that a FOSS / FLOSS code base is free for anyone to view, copy, modify and share. However, implementing, deploying, managing, securing and designing F(L)OSS can require significant labor and technology resources.

Page 37 of the Open Source Software in the Social Sector report states, “Most paid licenses are relatively easy to decipher and require costs to be paid upfront or as a subscription model. Licenses generally provide transparency around included features. In the social sector, such pricing can be especially important for traditional logframe project planning, as licenses can tie to line items in a budget.” The report goes on to say, “OSS, on the other hand, often requires a less obvious implementation and deployment with installation, customization, and troubleshooting. Those costs can be difficult to estimate up front and create confusion for social sector consumers and funders.”

Thus, a F(L)OSS tool or application is free in some senses, though as a common open source expression states, “It’s free like owning a cat.” The core product (or cat) might be free, but to safely and effectively use the product, there are costs involved.

### ASSUMPTION - The quality of Open Source Software is terrible

This assumption can go either way - some believe that open source software or code is of a higher quality than proprietary software (or closed source software) because of its inherently collaborative nature. There is an equally pervasive belief that OSS is flawed because it’s more difficult to use or because any developer can alter the code. There is truth to both sides. OSS needs to be evaluated on a case-by-case basis against needs and available resources.

Overall, OSS has made great improvements in the quality of code produced. These improvements are in part related to large technology companies producing an increasing share of OSS under established quality control processes. OSS that is widely commercially used is also less prone to bugs because more developers work to identify and fix any issues in a timely manner. Generally, OSS is also buttressed by a community of technical support that can help troubleshoot problems, though this may require a maintainer to help intercede, provide project management and translate concepts among developers of different technical understandings. Finally, OSS is continually updated, whereas proprietary software updates may have longer and stricter release dates.

Proprietary software, on the other hand, may be more prone to bugs, but less susceptible to malicious intent. (Security issues are often discovered and patched faster in OSS.) ([5](https://merlcenter.org/guides/Dispelling-myths-qualifying-assumptions/#footnotes)) Many proprietary software applications also tend to be more user-friendly than their OSS alternatives, as design and function of the software are often developed simultaneously and with the user in mind. Resource constraints and ownership can cause the user experience of OSS to be deprioritized.

<p align="center">
  <img src="/assets/img/posts/myth-assumption.png" alt="Myth and assumption in OSS" width="100%">
  <i>Summary of common myths and assumptions in OSS</i>
</p>

## Now What?

The decision to create an open source software, make a dataset open source or having your team collaborate on open source content is complicated. As open source software, data and content evolves, so too does our understanding of the methods, uses and relevance to MERL work. Check the MERL Center regularly for new beginner’s guides and case studies, links to resources and open discussions to learn more beyond myths and assumptions of open source.

#### Footnotes

1. We define an assumption as something that might be true, whereas a myth is something that is never true.
2. [Principles for Digital Development](https://digitalprinciples.org/principle/use-open-standards-open-data-open-source-and-open-innovation/)
3. [Open Source Software in the Social Sector](https://socialimpact.github.com/#report)
4. [Creative Commons - Open Data](https://creativecommons.org/about/program-areas/open-data/)
5. [Open-Source or Proprietary Software — What Is Best for Users?](https://www.simscale.com/blog/2017/06/open-source-vs-proprietary-software/)
