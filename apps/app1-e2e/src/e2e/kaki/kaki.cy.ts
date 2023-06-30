describe('app1: Kaki component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=kaki--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to Kaki!');
  });
});
