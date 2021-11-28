describe('Subreddits', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('renders the 13 predefined subreddits', () => {
    cy.get(
      'section[aria-label="subreddits"] > div > div > button',
    ).should('have.length', 13);
    cy.get(
      'section[aria-label="subreddits"] > div > div > button > p',
    )
      .first()
      .should('have.text', 'Popular');
    cy.get(
      'section[aria-label="subreddits"] > div > div > button > p',
    )
      .last()
      .should('have.text', 'DunderMifflin');
  });

  it('shows an active state for the active subreddit', () => {
    cy.get('section[aria-label="subreddits"] > div > div > button')
      .first()
      .should('have.class', 'bg-gray-100 dark:bg-gray-600');
    cy.get('section[aria-label="subreddits"] > div > div > button')
      .last()
      .click()
      .should('have.class', 'bg-gray-100 dark:bg-gray-600');
    cy.get('section[aria-label="subreddits"] > div > div > button')
      .first()
      .should('not.have.class', 'bg-gray-100 dark:bg-gray-600');
  });

  it('renders different posts for a different selected subreddit', () => {
    let initialFirstPostText;
    cy.wait(2000);
    cy.get('div#post-content > h2')
      .first()
      .then(($h2) => {
        initialFirstPostText = $h2.text();
      });
    cy.get('section[aria-label="subreddits"] > div > div > button')
      .last()
      .click();
    cy.wait(2000);
    cy.get('div#post-content > h2')
      .first()
      .should(($h2) => {
        const h2Text = $h2.text();
        expect(h2Text).not.to.equal(initialFirstPostText);
      });
  });
});
