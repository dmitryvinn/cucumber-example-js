Feature: Valid Todo Items
  Valid Todo Items can be CRUD

  Scenario: New Todo item can be created
    Given todo name is "Speak at Conference"
    When I press "ENTER"
    Then todo item with the name "Speak at Conference" is created