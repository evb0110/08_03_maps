class Settings {
  constructor(availableSettings, defaultSettings) {
    this.availableSettings = availableSettings;
    // no need to clone, since this.availableSettings
    // is never changed
    this._settings = new Map(defaultSettings);
    // here the defaultSettings Map is cloned,
    // otherwise it will be mutated,
    // when this._settings is changed
  }

  set theme(theme) {
    if (this.availableSettings.get('theme').has(theme)) {
      this._settings.set('theme', theme);
    } else {
      throw new Error('wrong theme')
    }
  }

  set music(music) {
    if (this.availableSettings.get('music').has(music)) {
      this._settings.set('music', music);
    } else {
      throw new Error('wrong music')
    }
  }

  set difficulty(difficulty) {
    if (this.availableSettings.get('difficulty').has(difficulty)) {
      this._settings.set('difficulty', difficulty);
    } else {
      throw new Error('wrong difficulty')
    }
  }



  get settings() {
    return this._settings;
  }
}

export default Settings;
