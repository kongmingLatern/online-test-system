// https://docs.cypress.io/api/introduction/api.html


describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'You did it!')
  })
})



// describe('Header', () => {
//   it('we should have a Header component', () => {
//     const wrapper = mount(StudentInfoUpdateVue)
//     console.log(wrapper);
//   })
// });

