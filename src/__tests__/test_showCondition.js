import showCondition from '../index';

test.each([
  [{ name: 'мечник', health: 10 }, 'critical'],
  [{ name: 'маг', health: 100 }, 'healthy'],
  [{ name: 'лучник', health: 40 }, 'wounded'],
])(
  ('check health for charcater %s'),
  ({ name, health }, expected) => {
    const result = showCondition({ name, health });
    expect(result).toBe(expected);
  },
);
