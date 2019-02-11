import Settings from '../src/js/settings'

const availableSettings = new Map([
  ["theme", new Set(["dark", "light", "gray"])],
  ["music", new Set(["transe", "pop", "rock", "chillout", "off"])],
  ["difficulty", new Set(["easy", "normal", "hard", "nightmare"])]
]);

const defaultSettings = new Map(
  [...availableSettings].map(setting => [setting[0], [...setting[1]][0]])
);

test('check default values', () => {
  const settings = new Settings(availableSettings, defaultSettings);
  const { theme, music, difficulty } = settings.settings;

  expect([theme, music, difficulty]).toEqual(['dark', 'transe', 'easy']);
});
