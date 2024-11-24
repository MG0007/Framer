Feature: Framer site

Interview Task

Scenario: Does display products' currency symbol as '$' in the 'Pricing' page
    Given the Framer site is loaded
    When I click on Pricing button
    And I see the Pricing page
    Then I see the products currency symbol is displayed as $ in Pricing page

Scenario: Does display 'visit' button on each card in the 'Many types of components to customize' section
    Given the Framer site is loaded
    And I scroll to Many types of components to customize in the components page
    Then I see the visit button is displayed on each card in the Many types of components to customize section