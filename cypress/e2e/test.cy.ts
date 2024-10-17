describe("Jetbrains website", () => {
    const aliasElements = () => {
        cy.get("html")
            .find("nav")
            .children()
            .as("menu-items");
    };

    it("should have Developer tools link", () => {
        cy.visit("https://jetbrains.com");

        aliasElements();

        cy.get("@menu-items")
            .eq(0)
            .should("contain.text", "Developer Tools");
    });
});
