---
layout: blog-post
title: insert
authors:
  - author: insert
    authorTitle: insert
    authorGitHubHandle: insert
    authorGitHubID: insert
  - author: insert
    authorTitle: insert
    authorGitHubHandle: insert
    authorGitHubID: insert
  - author: insert
    authorTitle: insert
    authorGitHubHandle: insert
    authorGitHubID: insert
tags:
  - tag: insert
  - tag: insert
  - tag: insert

# images should be in the /assets/img/posts/ folder
featuredImage:

outgoing: false
outgoingUrl:

---

## About
The above text is frontmatter that should be inserted at the top of every learning content piece. Without this frontmatter, the post will not appear correctly on the website. Click on the pencil icon above to go to edit mode. Copy the text highlighted in blue, as shown below, to your post. 

<img width="1288" alt="Screen Shot 2021-08-24 at 1 44 58 PM" src="https://user-images.githubusercontent.com/12953652/130678404-8fd2473e-b52e-414b-8961-54623f14402f.png">

## Fields
Below is an explanation of how to fill out each field. **Note that if certain characters like colons or semi-colons appear in a field, they may cause a website display error.**

Read more about content types in the [contributing file here](https://github.com/merlcenter/MERL-Center-public/blob/main/Contributing.md#adding-images-to-your-learning-content).

#### `layout: blog-post`
Do not change this field

#### `title:`
Add in your title. 

#### `authors:`
Leave the space after the colon blank. The fields below `authors` should be filled out. Note an unlimited number of authors can appear on a piece of learning content, though we generally encourage no more than four be listed. 

#### `- author:`
Write the full name of the author as it should appear on the website. Example: John Smith or Mala Kumar

#### `authorTitle:`
Write the title that should be displayed alongside the author's name. Ensure titles are consistent across posts. Note that titles must be manually changed on each post.

#### `authorGitHubHandle:`
This is the GitHub handle of a user, e.g. malakumar85. To check if you have the correct handle, [consult this list](https://docs.google.com/spreadsheets/d/1fG82zvER4l4v4CdgbU8Y_pC-JrNNFyke_Vtnv-T7m6c/edit#gid=435903398) or in your browser, put `https://github.com/` in front of the GitHub ID, e.g. https://github.com/malakumar85.  

#### `authorGitHubID:`
This is the avatar of the user. Go to their user profile - e.g. https://github.com/malakumar85 - and click on their picture. Copy in the number that comes after u/, an example of which is below. Note that you must be logged out to click on your own avatar and see the number. (Suggestion - use a different browser)

<img width="743" alt="Screen Shot 2021-08-24 at 2 48 48 PM" src="https://user-images.githubusercontent.com/12953652/130673144-39d2a142-fd3d-4a32-a180-89c8eb4d5f1a.png">

#### `tags:`
Leave the space after the colon blank. The fields below `tags` should be filled out.

#### `- tag:`
Add one or more tags [from this list](https://github.com/merlcenter/MERL-Center-public/blob/main/_data/tags.yml) as separate lines, as shown above. Put a hash (#) to designate the primary tag, e.g. `#- tag: Data Collection and Management`

#### `featuredImage:`
Copy and paste **only** the image file name here. Note that images must be uploaded to [this sub-directory](https://github.com/merlcenter/MERL-Center-public/tree/main/assets/img/posts) to appear on the website. [Read about formatting images here](https://github.com/merlcenter/MERL-Center-public/blob/main/Contributing.md#adding-images-to-your-learning-content).

#### `outgoing:`
Write `true` if this post should link directly to an external website. Write `false` if this post should display content on https://merlcenter.org

#### `outgoingUrl`
If you wrote `true` for `outgoing:`, paste in the link to which a user should be redirected when they click on this post. Leave this field blank if you wrote `false` for `outgoing:`.
