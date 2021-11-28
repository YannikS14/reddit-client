describe('Header', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('initially renders in light mode', () => {
    cy.get('div.App').should('not.have.class', 'dark');
  });

  it('renders dark mode after clicking dark mode button', () => {
    cy.get('div.App').should('not.have.class', 'dark');

    cy.get('#dark-mode').click();

    cy.get('div.App').should('have.class', 'dark');
  });

  it('updates the search field with given input', () => {
    cy.get('input[type="search"]').should('have.value', '');
    cy.get('input[type="search"]').type('Test input');
    cy.get('input[type="search"]').should('have.value', 'Test input');
  });

  it('filters the posts based on search field input', () => {
    cy.get('section[aria-label="posts"] > article').should(
      'have.length',
      25,
    );
    cy.get('input[type="search"]').type('Test input');
    cy.get('section[aria-label="posts"] > article').should(
      'have.length',
      0,
    );
  });
});
