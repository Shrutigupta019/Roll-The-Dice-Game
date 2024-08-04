describe('template spec', () => {
  beforeEach('visit page', () => {
    cy.visit('/')
  })
  it('Get Dice Game', () => {
    const ourMotto = 'Dice Game';
    cy.get(['data-cy=dice-game']).ourMotto;
  })
  it('Get Dice Image', () => {
    cy.get(['data-cy=dice-image'])
  })
  it('Get play Now button', () => {
    cy.get(['data-cy=play-now']).click;
  })
})