// TODO: Convert to TypeScript and refactor to Class.

const ID = {
  ZOTERO_ITEMMENU: 'zotero-itemmenu',
};

const EVENT = {
  POPUP_SHOWING: 'popupshowing',
};

const AddPdfFromGenerator = {
  getPref: function(pref) {
    return Zotero.Prefs.get(`extensions.addpdffromgenerator.${pref}`, true);
  },

  addGeneratedPdf: function(parentItemId) {
    const parentItem = Zotero.Items.get(parentItemId);
    if (!parentItem) {
      Zotero.debug('Did not find parentItem.');
      return;
    }

    if (!parentItem.getField('url')) {
      Zotero.debug('Parent item has no URL field.');
      return;
    }

    const generatorUrl = this.getPref('generator_url');
    if (!generatorUrl) {
      Zotero.debug('Did not find generator URL.');
      return;
    }

    const url = `${generatorUrl}${parentItem.getField('url')}`;
    Zotero.debug(`Attempting to get attachment from ${url}`);

    Zotero.Attachments.importFromUrl({
      parentItemId,
      url,
      libraryId: parentItem.libraryId;
    });
  },
};

Zotero.AddPdfFromGenerator = AddPdfFromGenerator;
