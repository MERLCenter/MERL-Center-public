# MERL Center Developer Guide

## How To Set Up Your Local Development Environment
### 1. Fork your own copy of merl-center-public repository on GitHub by clicking the fork button in the top right corner of the repository page
   
<details><summary>See screenshot</summary>

![image](https://github.com/MERLTech/MERL-Center-public/assets/73561520/fb0ac86f-54fe-4cab-b19a-a2762d9ee703)

</details>

### 2. Clone your forked repository
```
git clone replace_with_your_fork_url.git
```

<details><summary>See screenshot</summary>

![image](https://github.com/MERLTech/MERL-Center-public/assets/73561520/0dddd8a1-76eb-4f8f-9804-1ca47f66d2a2)
</details>

### 3. Navigate into root directory of repository you just cloned
```
cd MERL-Center-public
```

### 4. Check if you have Ruby installed locally. If you don't have Ruby installed, follow the instructions [here](https://www.ruby-lang.org/en/documentation/installation/) to install Ruby
```
ruby -v
```
### 5. Install the bundler gem with this command
```
gem install bundler
```

### 6. Install dependencies from Gemfile with this command
```
bundle install
```
### 7. Check if you have npm installed. If you don't have npm installed, download node.js [here](https://nodejs.org/en/download/)
```
npm -v
```
### 8. Run the start script from our package.json
```
npm run start
```
### 9. Navigate to `localhost:4000` in your browser to see the site running locally 

### 10. Set up your local repository to track changes from the original repository
```
git remote add upstream https://github.com/MERLTech/MERL-Center-public.git
```
Verify that your local repository is tracking changes from the original repository
```
git remote -v
```
![image](https://github.com/MERLTech/MERL-Center-public/assets/73561520/8f91b2d2-8c68-44af-8ae9-caf0ca2ee9cb)



## How To Create A Pull Request
### 1. Switch to the main branch
```
git switch main
```
### 2. Pull down latest changes from main repository
```
git pull upstream main
```

### 3. Create a new branch for each issue you work on
```
git checkout -b some_branch_name
```

### 4. Check the status of your local repository
```
git status
```
Verify that you are NOT on the main branch anymore
### 5. Add files to staging area
```
git add .
```
### 6. Commit changes to local repository
```
git commit -m "short descriptive commit message"
```
### 7. Push changes to your forked repository
```
git push --set-upstream origin some_branch_name
```
Note: replace `some_branch_name` with the name of the branch you created in step 3

### 8. Navigate to your forked repository on GitHub and click the "Compare & pull request" button

<details><summary>See screenshot</summary>

![image](https://github.com/MERLTech/MERL-Center-public/assets/73561520/4f467adc-a296-4e00-8f6e-09a3dffcc208)

</details>


## How To Review Pull Requests
