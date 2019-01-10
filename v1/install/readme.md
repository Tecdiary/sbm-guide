# Installation Guide

#### We have added the installer for easy installation experience and it can be accessed by adding `/install` at the end url.

[[toc]]

## Step 1: Preparation

::: warning Developer License?
If you have purchased developer license, please run install dependencies before following these steps by running `composer install`
:::

You can access the installer by added `/install` at the end of your domain i.e,

-   `https:` // `yourdomain.com` / `install` for main domain installation
-   `https:` // `yourdomain.com` / `subfolder` / `install` for sub directory installation
-   `https:` // `subdomain.yourdomain.com` / `install` for sub domain directory installation

You will need to prepare these details (mentioned at installer page)

1.  License details:
    -   Purchased by (**username**/email)
    -   Licence Key / Purchase code
2.  Database server details:
    -   Database Hostname
    -   Database Name
    -   Database Username
    -   Database Password `User must have all the privileges on the database`

## Step 2: Licence Agreement

Please read the license details and accept.

## Step 3: Pre-Install Checklist

If there is any server config change required, you will see the details on this page. You need to resolve these before proceeding to next step. If you are not sure about any issue, simply Google it or check with your host/server administrator.

## Step 4: Verify your License

Please fill `username` and `license key`/`purchase code` and click next to verify, if you set error, please double check your purchase details and try again. It still same, please email to support@tecdiary.com with your `license key`/`purchase code`, we will check and update you.

## Step 5: Installation Configuration

Please fill the form with your database server details `hostname`, `database`, `username` and `password`.
Please make sure that

-   database is empty
-   the `hostname` is correct
-   user has all the privileges on the database

## Step 6: Create User Account

Please fill the form to create super user account.

## Step 7: Finalize Installation

We are almost done, it's time to finalize the installation. If you need some demo data, you can generate from this page before pressing the **Finalize** button.

**You must press the `Finalize` installation button to complete the installation.**

::: tip Can I start again?
Yes, if there is any issue on any step and you can't pass then you can cancel and start over again with new database or settings.
:::
