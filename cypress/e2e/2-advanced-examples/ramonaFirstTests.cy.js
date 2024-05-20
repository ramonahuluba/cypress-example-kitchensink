context('1st Ramona test', () => {
  beforeEach( () => {
    cy.visit('https://example.cypress.io/commands/actions')
  })

  it('has H1 tag', ()=>{
    cy.get('h1').should|('exist')
  })

  it('H1 tag has text Actions', ()=>{
    cy.get('h1').should|('contain.text', 'Actions')
  })

  it('paragraph exists under h1', ()=>{
    cy.get('.container').find('p').should|('exist')
  })

  it('second paragraph exists under h1', ()=>{
    cy.get('.container').eq(1).find('p').should|('exist')
  })

  it('third container has correct elements', ()=>{
    cy.get('.container').eq(2).within(()=>{
      cy.get('h4').should|('exist');
      cy.get('p').should|('exist');

    })
        
        
  })

})