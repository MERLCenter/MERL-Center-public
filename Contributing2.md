# MERL Center Developer Guide

### Table of Contents
1. [Set Up Local Dev Environment](#set-up-local-dev-environment)

2. [Review A Pull Request](#review-a-pull-request)

3. [Create A Pull Request](#create-a-pull-request)

##### *For this guide, please replace text surrounded by `<>` with the appropriate text for each command. Do not include `<>` characters in your commands.

## Set Up Local Dev Environment

#### 1. Check if you have git installed with the command below. 
```
git --version
```
If you do not have git on your machine, follow the installation instructions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
#### 2. Fork your own copy of merl-center-public repository on GitHub by clicking the fork button in the top right corner of the repository page
   
<details><summary><b>see screenshot</b></summary>

![image](https://github.com/MERLTech/MERL-Center-public/assets/73561520/fb0ac86f-54fe-4cab-b19a-a2762d9ee703)

</details>

#### 3. Clone your forked repository
```
git clone <your-fork-url>.git
```

<details><summary><b>see screenshot</b></summary>

![image](https://github.com/MERLTech/MERL-Center-public/assets/73561520/0dddd8a1-76eb-4f8f-9804-1ca47f66d2a2)
</details>

#### 4. Navigate into root directory of repository you just cloned
```
cd MERL-Center-public
```
#### 5. You have two options for starting the server locally
#### Option #1 - Using Docker (recommended)
##### 1a. Check if you have Docker installed locally. If you don't have Docker installed, follow the instructions [here](https://docs.docker.com/get-docker/)

```
docker -v
```
##### 1b. Run this command to build the Docker image

```
docker compose build
```
##### 1c. Run this command to start the server locally
```
docker compose up
```

#### Option #2 - Using Ruby directly
##### 2a. Check if you have Ruby installed locally. If you don't have Ruby installed, follow the instructions [here](https://www.ruby-lang.org/en/documentation/installation/) to install Ruby
```
ruby -v
```
##### 2b. Install the bundler gem with this command
```
gem install bundler
```
##### 2c. Install dependencies from Gemfile with this command
```
bundle install
```
##### 2d. Run this command to start the server locally
```
bundle exec jekyll serve --livereload
```

#### 6. Navigate to `localhost:4000` in your browser to see the site running locally 

#### 7. Add a remote called `upstream` to your local repository that points to the main repository
```
git remote add upstream https://github.com/MERLTech/MERL-Center-public.git
```
Verify that the origin remote points to your fork and the upstream remote points to the main repository
```
git remote -v
```
![image](https://github.com/MERLTech/MERL-Center-public/assets/73561520/8f91b2d2-8c68-44af-8ae9-caf0ca2ee9cb)

#### 8. Add fetch configuration to simplify pulling down branch data for pull request reviews
```
git config --add remote.upstream.fetch "+refs/pull/*/head:refs/remotes/upstream/pr/*"
```
This command adds additional fetch instructions to your `.git/config` file so that you can more easily pull down branches from pull requests on the upstream repository


## Review A Pull Request
#### 1. Add yourself as a reviewer of the pull request on Github
<details><summary><b>see screenshot</b></summary>

![image](https://github.com/MERLTech/MERL-Center-public/assets/73561520/c0ad7dee-a460-431e-bb51-b4b64da68f73)

</details>

#### 2. Make sure you are on the main branch of your local repository
``` 
git switch main
```
#### 3. Pull down latest changes from main branch of upstream repository
```
git pull upstream main
```
#### 4. Fetch all pull request data from the main repository using the upstream remote that was modified in step 8 of setting up your local dev environment
```
git fetch upstream
```
#### 5. Checkout the specific pull request you want to review
```
git checkout upstream/pr/<number>
```

#### 6. Run the start script from our package.json
```
npm run start
```
#### 7. Navigate to `localhost:4000` in your browser to check if the changes from the pull request are working as expected

#### 8. Go back to github and find the "Files Changed" tab of the pull request to submit feedback
<details><summary><b>see screenshot</b></summary>

![image](https://github.com/MERLTech/MERL-Center-public/assets/73561520/08d7322b-2947-49f1-b0d2-f7e7d31719be)

</details>

You have three options for submitting feedback:
<br>
- Leave a comment on the pull request
- Approve the pull request which will allow for merging
- Request changes which will prevent pull request from being merged until changes are made and you re-review the pull request



## Create A Pull Request
#### 1. Switch to the main branch
```
git switch main
```
#### 2. Pull down latest changes from main branch of upstream repository
```
git pull upstream main
```

#### 3. Create a new branch for each issue you work on
```
git checkout -b <relevant-branch-name>
```

#### 4. Verify that you are on your newly created branch from step 3 and NOT on the main branch
```
git branch
```

#### 5. Make necessary changes to code in order to satisfy the requirements of the issue you are working on

#### 6. Add the changes to staging area
```
git add .
```
#### 7. Commit the changes to your local repository
```
git commit -m "short descriptive commit message"
```
#### 8. Push the changes to your forked repository using the `origin` remote
```
git push --set-upstream origin <relevant-branch-name>
```
Note: replace `<relevent-branch-name>` with the name of the branch you created in step 3

#### 9. Navigate to your forked repository on GitHub and click the "Compare & pull request" button

<details><summary><b>see screenshot</b></summary>

![image](https://github.com/MERLTech/MERL-Center-public/assets/73561520/4f467adc-a296-4e00-8f6e-09a3dffcc208)

</details>
