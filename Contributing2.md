# MERL Center Developer Guide

### [Set Up Local Dev Environment](#how-to-set-up-local-dev-environment)

### [Review A Pull Request](#how-to-review-a-pull-request)

### [Create A Pull Request](#how-to-create-a-pull-request)

#### Note: For this guide, you will need to replace text surrounded by `<>` with the appropriate text for each situation. Do not include `<>` characters in your commands

## Set Local Dev Environment
#### 1. Fork your own copy of merl-center-public repository on GitHub by clicking the fork button in the top right corner of the repository page
   
<details><summary>See screenshot</summary>

![image](https://github.com/MERLTech/MERL-Center-public/assets/73561520/fb0ac86f-54fe-4cab-b19a-a2762d9ee703)

</details>

#### 2. Clone your forked repository
```
git clone <your-fork-url>.git
```

<details><summary>See screenshot</summary>

![image](https://github.com/MERLTech/MERL-Center-public/assets/73561520/0dddd8a1-76eb-4f8f-9804-1ca47f66d2a2)
</details>

#### 3. Navigate into root directory of repository you just cloned
```
cd MERL-Center-public
```

#### 4. Check if you have Ruby installed locally. If you don't have Ruby installed, follow the instructions [here](https://www.ruby-lang.org/en/documentation/installation/) to install Ruby
```
ruby -v
```
#### 5. Install the bundler gem with this command
```
gem install bundler
```

#### 6. Install dependencies from Gemfile with this command
```
bundle install
```
#### 7. Check if you have npm installed. If you don't have npm installed, download node.js [here](https://nodejs.org/en/download/)
```
npm -v
```
#### 8. Run the start script from our package.json
```
npm run start
```
#### 9. Navigate to `localhost:4000` in your browser to see the site running locally 

#### 10. Set up your local repository to track changes from the original repository
```
git remote add upstream https://github.com/MERLTech/MERL-Center-public.git
```
Verify that your local repository is tracking changes from the original repository
```
git remote -v
```
![image](https://github.com/MERLTech/MERL-Center-public/assets/73561520/8f91b2d2-8c68-44af-8ae9-caf0ca2ee9cb)


## Review A Pull Request
#### 1. Add yourself as a reviewer of the pull request on Github
<details><summary>See screenshot</summary>

![image](https://github.com/MERLTech/MERL-Center-public/assets/73561520/c0ad7dee-a460-431e-bb51-b4b64da68f73)

</details>

#### 2. Make sure you are on the main branch of your local repository
``` 
git switch main
```
#### 3. Pull down latest changes from main repository
```
git pull upstream main
```
#### 4. Make a new branch where you will pull down the changes from the pull request
```
git checkout -b <pr-creator-name-branch-name> main
```
Tip: copy the branch name from the pull request and change the `:` to a `-` to use as the branch name
![image](https://github.com/MERLTech/MERL-Center-public/assets/73561520/99d863c1-2245-4eb2-8f5c-4336422b9f33)
#### 5. Pull down the changes from the pull request creator's branch on their forked repository
```
git pull <url-of-forked-repository>.git <branch-name-from-pr>
```
Tip: click on the "from" link on the pull request to get the url of the forked repository
![image](https://github.com/MERLTech/MERL-Center-public/assets/73561520/6992b056-88d1-4024-8ec8-3b9b84a08b3c)
Tip: copy the url from browser up to point where repository name ends. Do not copy the `/tree/` part of the url. Use the branch name from the end of the url. i.e. the part that comes after `/tree/`
![Screenshot from 2023-06-09 09-37-09](https://github.com/MERLTech/MERL-Center-public/assets/73561520/b5298f3d-cedc-45c3-88a3-88d6f9683b02)


#### 6. Run the start script from our package.json
```
npm run start
```
#### 7. Navigate to `localhost:4000` in your browser to check that the changes from the pull request are working as expected

#### 8. Go back to github and find the "Files Changed" tab of the pull request to submit feedback
You have three options for submitting feedback:
<br>
a. You can leave a comment on the pull request
<br>
b. You can approve the pull request which will allow for merging
<br>
c. You can request changes which will prevent pull request from being merged until changes are made and you re-review the pull request
<details><summary>See screenshot</summary>

![image](https://github.com/MERLTech/MERL-Center-public/assets/73561520/08d7322b-2947-49f1-b0d2-f7e7d31719be)

</details>



## Create A Pull Request
#### 1. Switch to the main branch
```
git switch main
```
#### 2. Pull down latest changes from main repository
```
git pull upstream main
```

#### 3. Create a new branch for each issue you work on
```
git checkout -b <relevant-branch-name>
```

#### 4. Check the status of your local repository
```
git status
```
Verify that you are NOT on the main branch anymore
#### 5. Add files to staging area
```
git add .
```
#### 6. Commit changes to local repository
```
git commit -m "short descriptive commit message"
```
#### 7. Push changes to your forked repository
```
git push --set-upstream origin <relevant-branch-name>
```
Note: replace `<relevent-branch-name>` with the name of the branch you created in step 3

#### 8. Navigate to your forked repository on GitHub and click the "Compare & pull request" button

<details><summary>See screenshot</summary>

![image](https://github.com/MERLTech/MERL-Center-public/assets/73561520/4f467adc-a296-4e00-8f6e-09a3dffcc208)

</details>


