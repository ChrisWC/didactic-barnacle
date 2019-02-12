To set up the project first get a clientId from spotify (We use the implicit grant type) then add credentials.js and add an export such as:

```
export const spotifyClientId ="XXXXXXXXXXXXXXXXXXX"
```
next run the commands:

```
yarn install
yarn run
```

The application is very simple. You can select one or more tracks from your 'saved tracks' or your 'top tracks' (if you have a new account you won't have any for awhile). The tracks you select will be used to generate recommendations. Please note that you can not select from both your top and saved tracks and switching from recommendations back to top or saved tracks will reset the selection (I figured this would be easier than having a reset button somwhere).
