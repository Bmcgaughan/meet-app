Feature: Show/Hide Event Details

Scenario: When user loads the page, the event details should be hidden
Given the user hasn't clicked the Show Event Details button
When the user loads the page
Then the event details should be hidden

Scenario: When user clicks the Show Event Details button, the event details should be shown
Given the user wants to see even details
When the user clicks the Show Event Details" button
Then the event details should be shown

Scenario: When user clicks the Show Event Details button again, the event details should be hidden
Given the user has clicked the Show Event Details button
And the user has clicked the Show Event Details button again
Then the event details should be hidden