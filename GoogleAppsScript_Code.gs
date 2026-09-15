const SHEET_NAME = 'Applications';

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || '{}');
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME) || SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Submitted At', 'Full Name', 'DUK Email', 'WhatsApp', 'Saturday Availability', 'Programme', 'Specialization', 'Previous Experience', 'Experience Description', 'Why Join', 'Expectations', 'Interests', 'Commitment Agreed']);
    }
    sheet.appendRow([
      new Date(), payload.name || '', payload.duk_email || '', payload.whatsapp || '', payload.saturday_availability || '',
      payload.programme || '', payload.specialization || '', payload.prev_exp === 'Other' ? (payload.prev_exp_other || 'Other') : (payload.prev_exp || ''),
      payload.exp_description || '', payload.why_join || '', payload.expectations || '', payload.interests || '', payload.commitment_declaration ? 'Yes' : 'No'
    ]);
    return ContentService.createTextOutput(JSON.stringify({ok: true})).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ok: false, error: String(error)})).setMimeType(ContentService.MimeType.JSON);
  }
}
