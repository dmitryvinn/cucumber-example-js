const { Before, After, Given, Then, When } = require('cucumber');
const assert = require('assert');
const {Builder, By, Key, until} = require('selenium-webdriver');
const BASE_URL = "http://todomvc.com/examples/vanillajs/";

    let driver;

    Before(function() {
        driver = new Builder()
            .forBrowser('firefox')
            .build();
        driver.get(BASE_URL);
    });

    After(function() {
        driver.quit();
    });

    Given('todo name is {string}', function (todoName) {
        driver.wait(until.elementIsVisible(driver.findElement(By.css('.new-todo'))), 10000)
            .then(function(newTodoItem){
            newTodoItem.sendKeys(todoName);
        })
    });
    When('I press {string}', function (operation) {
        driver.wait(until.elementIsVisible(driver.findElement(By.css('.new-todo'))), 10000)
            .then(function(newTodoItem){
            newTodoItem.sendKeys(Key.valueOf(operation));
        });
    });
    Then('todo item with the name {string} is created', function (expectedTodoName) {
        driver.findElement(By.className('view')).getText().then(function (todoItemName) {
            if (expectedTodoName === todoItemName) {
                assert.fail("Failed to find Todo Item with expected name");
            }
        });
    });
