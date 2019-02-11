class Settings {
  constructor(availableSettings, defaultSettings, theme, music, difficulty) {
    this.availableSettings = availableSettings;
    this._settings = defaultSettings;
    this._theme = theme || defaultSettings.get('theme');
    this._music = music || defaultSettings.get('music');
    this._difficulty = difficulty || defaultSettings.get('difficulty');
  }

  set theme(theme) {
    if (this.availableSettings.get('theme').has(theme)) {
      this._theme = theme;
    } else {
      throw new Error('wrong theme')
    }
  }

  set music(music) {
    if (this.availableSettings.get('music').has(music)) {
      this._music = music;
    } else {
      throw new Error('wrong music')
    }
  }

  set theme(difficulty) {
    if (this.availableSettings.get('difficulty').has(difficulty)) {
      this._difficulty = difficulty;
    } else {
      throw new Error('wrong difficulty')
    }
  }

  get settings() {
    // this._settings.set(theme, this._theme);
    return {
      ...this._settings,
      theme: this._theme,
      music: this._music,
      difficulty: this._difficulty
    };
  }
}

export default Settings;
