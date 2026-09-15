# DigiSafe Keralam — GitHub Pages Edition

This version is fully static and runs on GitHub Pages. Applications are submitted by JavaScript to a Google Apps Script web app and saved in a Google Sheet.

## Configure Google Sheets submissions

1. Create a new Google Sheet and rename its first sheet to `Applications`.
2. Open **Extensions → Apps Script**.
3. Copy the contents of `GoogleAppsScript_Code.gs` into the Apps Script editor and save.
4. Select **Deploy → New deployment**.
5. Choose **Web app** as the deployment type.
6. Set **Execute as** to **Me** and **Who has access** to **Anyone**.
7. Deploy, authorize the script, and copy the web app URL ending in `/exec`.
8. Open `index.html` and replace:

   ```js
   const GOOGLE_SCRIPT_URL = 'PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';
   ```

   with the copied URL.

## Publish on GitHub Pages

1. Create a new GitHub repository. A public repository is acceptable after confirming no secrets are present; a private repository is preferable.
2. Upload the contents of this folder to the repository root. `index.html` must be in the root.
3. In GitHub, open **Settings → Pages**.
4. Select **Deploy from a branch**, choose the `main` branch and `/ (root)`, then save.
5. Open the generated GitHub Pages URL and submit one test application.
6. Confirm the test row appears in Google Sheets, then delete the test row before launch.

## Notes

GitHub Pages does not provide an admin dashboard or database. The Google Sheet is the private response dashboard. Restrict the Sheet to authorized reviewers and do not publish it publicly. The form includes browser-side validation, but Google Sheets should be treated as the source of truth and access should be controlled through Google account permissions.
