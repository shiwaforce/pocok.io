---
title: Third Party Integrations
---
# Third Party Integrations
## Github
With Github integration you will be able to list, clone and initialise your Poco projects directly from Github without additional steps.  
Add your Github account to your Poco configuration:
```
$:~ poco github add <name> <accessToken>
```
`<name>` - Poco repo name, for example 'github'.  
`<accessToken>` - github access token [How to create Github Access Token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/).  

List your Github projects:
```
$:~ poco catalog <name>
```
`<name>` from example 'github'.

Run your project:
```
$:~ poco up <project name>
```
`<project name>` - Poco project name

## Gitlab
With Github integration you will be able to list, clone and initialise your Poco projects directly from Github without additional steps.
Add your Gitlab account to your Poco configuration:
```
$:~ poco gitlab add <name> <personalAccessToken>
```
`<name>` - Poco repo name, for example 'gitlab'.  
`<personalAccessToken>` - gitlab personal access token [How to create Gitlab Personal Access Token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html).

List your GitLab projects:
```
$:~ poco catalog <name>
```
`<name>` from example 'github'.

Run your project:
```
$:~ poco up <project name>
```
`<project name>` - Poco project name
