describe('cypress test 1', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('main page is OK', () => {
    cy.get('[data-cy=main]').should('have.text', 'Hi,');
    cy.get('[data-cy="sub"]').should('have.text', '타이틀 서브');
  });

  it('check write', () => {
    cy.get('[href="/write"]').click();
    cy.get('[data-cy="input-title"]').type('test cypress 1 title');
    cy.get('[data-cy="input-content"]').type('test cypress 1 content');
    cy.get('.w-11').click();
    cy.url().should('include', 'list');
  })

});