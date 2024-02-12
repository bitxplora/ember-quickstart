import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
  model() {
    return [
      'Ada Lovelace',
      'Linus Torvalds',
      'Dennis Ritchie',
      'Alan Turing',
      'Guido van Rossum',
    ];
  }
}
