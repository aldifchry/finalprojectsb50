describe('User should be able to Login', () => {
  it('passes', () => {
    // Step :
    // 1. Buka url login (v)
    // 2. Validasi: halaman login udah berhasil dibuka
    // 3. Input valid username
    // 4. Input valid password
    // 5. Klik tombol login
    // 6. Validasi login berhasil
    cy.visit('https://appstaging.viseetor.id/login')
    cy.xpath('//*[@name="email"]').should('be.visible')
    cy.xpath('//*[@name="password"]').should('be.visible')
    cy.xpath('//*[contains(@class, "btn btn-warning waves-effect waves-light")]').should('be.visible')
    cy.xpath('//*[@name="email"]').type("aalamsyah442@gmail.com")
    cy.xpath('//*[@name="password"]').type("manunited")
    cy.xpath('//*[contains(@class, "btn btn-warning waves-effect waves-light")]').click()
  })



})