## Project Details (as of Feb 2024)

- Sitecore XM 10.3.1-ltsc2019
- SXA 10.3
- Sitecore CLI 5.1.25
- Next.js

## Requirements

- For Docker Desktop
  - Docker Desktop 4.27.2
- Foc Docker Engine
  - Docker Engine 25.0.4
  - Docker CLI 25.0.4
- Docker compose v2 - `docker compose enable-v2`
- Node version 20.11.1
- NPM Version 10.2.4

## Setup Steps

0. Make sure you've stopped IIS and Solr:

   `iisreset /stop`

   `Stop-Service -Name "<the name of your service>"`

   or

   `nssm stop "<the name of your service>"`

1. (Developers running Docker CE, not Docker Desktop)

   - Open ` C:\ProgramData\Docker\config\daemon.json`
   - Add the following `"dns": ["8.8.8.8", "8.8.4.4"]` below docker-users

2. (only on setup) Initialize your local docker environment: `.\init.ps1 -LicenseXmlPath <path_to_license>\.xml`
   - Make sure that the path to your license file is not too long (ex. C:\licenses\license.xml) and not expired

3. (only on setup) Build your Tools Images: `docker compose -f .\docker-compose.build.yml build tools`
4. (only on setup) Build your NodeJs Images: `docker compose -f .\docker-compose.build.yml build nodejs`
5. (only on setup) Build your Sitecore Images: `docker compose -f .\docker-compose.build.yml build`
   - When it's done, you can run `docker images vmldemo*` and you should see something like this:
     | <div style="width:30px">REPOSITORY</div> | <div style="width:10px">TAG</div> | <div style="width:10px">IMAGE ID</div> | <div style="width:10px">CREATED</div> | <div style="width:15px">SIZE</size> |
     | ---------------------------------------- | --------------------------------- | -------------------------------------- | ------------------------------------- | ----------------------------------- |
     | vmldemo-solr-init | latest | 5b437ae0ad9c | About a minute ago | 5.77GB |
     | vmldemo-mssql-init | latest | 072e70edea5f | About a minute ago | 5.84GB |
     | vmldemo-cm | latest | fba4a9fdb979 | 2 minutes ago | 9.44GB |
     | vmldemo-id | latest | 7290cf235c37 | 9 days ago | 639MB |
6. (only on setup) Initialize your Sitecore Environment: `docker compose -f .\docker-compose.init.yml up`
   - This process will take a little bit. Ensure that you see "Set Sitecore admin password"
   - Once you do, hit Ctrl + C
7. Start Sitecore: `docker compose up -d --remove-orphans`
   - You won't need the `remove-orphans` after the first time you run this.
8. Sync the content
   - Run `dotnet tool restore` in the root directory
   - Run `dotnet sitecore login --authority https://id.vmldemo.localhost --cm https://cm.vmldemo.localhost --allow-write true` which will launch the login page to 
   - Run `dotnet sitecore ser push -i vmldemo.Sitecore.Items.Master`
   - Run `dotnet sitecore ser push -i vmldemo.Sitecore.Items.Content`
9. Publish the .NET solution
   - Open the `Platform.sln` in Visual Studio
   - Right-click on the Platform project and select Publish
   - Choose the `Local.pubxml` publish profile and click the Publish button
10. Build the front end solution
    - cd `cd .\src\vmldemo\`
    - Execute `npm i`
    - Execute `npm run build`
11. Open https://www.vmldemo.localhost for the rendering host
12. Open https://cm.vmldemo.localhost/sitecore for CM

## Performing Project Updates

If you made updates to any of the Dockerfiles or to the .env_source file that will affect the images, follow the steps below:

1. Stop your instance with `docker compose down`
2. Purge your .\docker\data\solr
3. Purge your .\docker\data\sql
4. Purge your .\docker\deploy\platform folder
5. Delete your .env file (If you made changes to it, ensure they are part of the .\docker\.env_source file)
6. Start at Step 1 above

## Important Links

- Local GraphQL Playground: https://cm.vmldemo.localhost/sitecore/api/graph/edge/ui

  Sample Query:

  `query{
   layout(site: "vmldemo", routePath: "/", language: "en") {
      item {
         rendered
      }
   }
}`

  HTTP Headers:

  `{
   "sc_apikey":"3E6E0AED-13B9-4132-8867-BCBC29C38540"
}`

- Local Layout Service (for the Home item): https://cm.vmldemo.localhost/sitecore/api/layout/render/jss?item=/&sc_apikey=3E6E0AED-13B9-4132-8867-BCBC29C38540&sc_mode=normal&sc_site=vmldemo


------------------------------------------------------------------------------------------------
