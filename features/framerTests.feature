Feature: Framer tests

Scenario: Does display products' currency symbol as '$' in the 'Pricing' page
    Given the Framer site is loaded
    When I click on Pricing button
    And I see the Pricing page
    Then I see the products currency symbol is displayed as $ in Pricing page