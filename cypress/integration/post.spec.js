describe('Post', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('displays the post content and meta data', () => {
    cy.waitUntil(() =>
      cy
        .get('span.react-loading-skeleton')
        .first()
        .should('not.exist'),
    );
    cy.get('#post-content > h2').first().should('not.be.empty');
    cy.get('#votes > p').first().should('not.be.empty');
    cy.get('#post-footer > div').first().should('not.be.empty');
    cy.get('#post-footer > div').eq(1).should('not.be.empty');
    cy.get('button[aria-label="Comments"')
      .first()
      .should('not.be.empty');
    cy.get('#post-content > img').first().should('be.visible');
    cy.get('#post-content > h2 + div').first().should('not.be.empty');
  });

  it('toggles a post modal after clicking the post title', () => {
    cy.waitUntil(() =>
      cy
        .get('span.react-loading-skeleton')
        .first()
        .should('not.exist'),
    );
    cy.get('#post-content > h2').first().click();
    cy.get('#post-modal').should('be.visible');
    cy.get('#post-modal').click('bottom');
    cy.get('#post-modal').should('not.exist');
  });

  it('displays up- or downvote state after clicking the up- or downvote button', () => {
    cy.waitUntil(() =>
      cy
        .get('span.react-loading-skeleton')
        .first()
        .should('not.exist'),
    );
    cy.get('[data-testid="upvote-arrow"]')
      .first()
      .should('not.have.class', 'text-green-500 scale-125');
    cy.get('button[aria-label="upvote"]').first().click();
    cy.get('[data-testid="upvote-arrow"]')
      .first()
      .should('have.class', 'text-green-500 scale-125');

    cy.get('button[aria-label="downvote"]').first().click();
    cy.get('[data-testid="upvote-arrow"]')
      .first()
      .should('not.have.class', 'text-green-500 scale-125');
    cy.get('[data-testid="downvote-arrow"]')
      .first()
      .should('have.class', 'text-red-500 scale-125');

    cy.get('button[aria-label="downvote"]').first().click();
    cy.get('[data-testid="downvote-arrow"]')
      .first()
      .should('not.have.class', 'text-red-500 scale-125');
    cy.get('[data-testid="upvote-arrow"]')
      .first()
      .should('not.have.class', 'text-green-500 scale-125');
  });

  it('displays comments after clicking the comments button', () => {
    cy.waitUntil(() =>
      cy
        .get('span.react-loading-skeleton')
        .first()
        .should('not.exist'),
    );
    cy.get('#post-comments').should('not.exist');
    cy.get('button[aria-label="Comments"]').first().click();
    cy.get('#post-comments').should('be.visible');

    cy.waitUntil(() =>
      cy
        .get('span.react-loading-skeleton')
        .first()
        .should('not.exist'),
    );

    cy.get('#comment > div > div').first().should('not.be.empty');
    cy.get('#comment > div > div').eq(1).should('not.be.empty');
    cy.get('#comment > p').should('not.be.empty');

    cy.get('button[aria-label="Comments"]').first().click();
    cy.get('#post-comments').should('not.exist');
  });
});
