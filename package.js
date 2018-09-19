Package.describe({
  name: "compwright:namecase",
  summary: "A Javascript library for fixing the capitalization of people's names.",
  version: "1.1.2",
  git: "https://github.com/compwright/namecase.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use('templating', 'client');
  api.addFiles('namecase.js');
  api.addFiles('meteor.js');
  api.export('NameCase');
});

