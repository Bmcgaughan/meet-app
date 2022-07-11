Feature: User can specify Number of Events to Diplay

Scenario: User has not specified number of Events to Display
Given use has not specified number of events to Display
When user loads the page
Then number of events to display is set to thirty two


Scenario: User can change the number of events they want to display
Given the user wants to specify the number of events to display
And the user loads the page
When the user changes the number of events to display
Then the number of events to display is changed to the new number
