import { Evento } from './evento';

describe('Evento', () => {
  it('should create an instance', () => {
    expect(new Evento('evento1', 'lugar1', 'fecha1')).toBeTruthy();
  });
});
