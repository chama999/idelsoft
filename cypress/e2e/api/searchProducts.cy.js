const BASE_API_URL= Cypress.env('BASE_API_URL') || "https://magento.softwaretestingboard.com/rest/default"
describe('API Tests', () => {

    it('/rest/default/V1/search', () => {
        cy.request({
            method: 'GET',
            url:  BASE_API_URL + '/V1/search?searchCriteria[requestName]=quick_search_container&searchCriteria[filterGroups][0][filters][0][field]=search_term&searchCriteria[filterGroups][0][filters][0][value]=a&searchCriteria[filterGroups][0][filters][0][conditionType]=like&searchCriteria[pageSize]=10',
        }).then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(200)
            expect(response.body.items).to.have.lengthOf(10)
        })
    })

    it('rest/default/V1/products | Unauthorized 401', () => {
        cy.request({
            method: 'GET',
            failOnStatusCode: false,
            url:  BASE_API_URL + '/V1/products?searchCriteria[pageSize]=10',
        }).then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.eq(401)
        })
    })
})